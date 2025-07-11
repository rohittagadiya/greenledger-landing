import { useState, useEffect } from 'react'
import { getWaitlistEntries, WaitlistEntry, getAllCloudConnections, CloudConnection } from '@/lib/supabase'

export default function AdminPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [connections, setConnections] = useState<CloudConnection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [activeTab, setActiveTab] = useState<'waitlist' | 'connections'>('waitlist')

  // Admin password - in production, this should be an environment variable
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'greenledger2024'

  useEffect(() => {
    // Check if already authenticated in this session
    const isAuth = sessionStorage.getItem('adminAuthenticated')
    if (isAuth === 'true') {
      setIsAuthenticated(true)
      fetchEntries()
    } else {
      setLoading(false)
    }
  }, [])

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuthenticated', 'true')
      setAuthError('')
      fetchEntries()
    } else {
      setAuthError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuthenticated')
    setEntries([])
  }

  const fetchEntries = async () => {
    try {
      const [waitlistData, connectionsData] = await Promise.all([
        getWaitlistEntries(),
        getAllCloudConnections()
      ])
      setEntries(waitlistData)
      setConnections(connectionsData)
    } catch (err) {
      console.error('Error fetching data:', err)
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  const exportToCsv = () => {
    if (activeTab === 'waitlist') {
      const csvContent = [
        ['Name', 'Email', 'Company', 'Role', 'Cloud Provider', 'Monthly Spend', 'Created At'],
        ...entries.map(entry => [
          entry.name,
          entry.email,
          entry.company,
          entry.role || '',
          entry.cloud_provider || '',
          entry.monthly_spend || '',
          entry.created_at || ''
        ])
      ]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'waitlist-entries.csv'
      a.click()
      window.URL.revokeObjectURL(url)
    } else {
      const csvContent = [
        ['Email', 'Provider', 'Connection Name', 'Status', 'Created At', 'Last Sync'],
        ...connections.map(conn => [
          conn.user_email,
          conn.provider,
          conn.connection_name,
          conn.status,
          conn.created_at || '',
          conn.last_sync_at || ''
        ])
      ]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'cloud-connections.csv'
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }

  // Show authentication form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              🌱 GreenLedger Admin
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter the admin password to access the waitlist dashboard
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleAuth}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {authError && (
              <div className="text-red-600 text-sm text-center">{authError}</div>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
              >
                Access Admin Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading waitlist entries...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
          <button
            onClick={fetchEntries}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">GreenLedger Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">
              {entries.length} people on the waitlist • {connections.length} cloud connections
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('waitlist')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'waitlist'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } cursor-pointer`}
              >
                Waitlist ({entries.length})
              </button>
              <button
                onClick={() => setActiveTab('connections')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'connections'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } cursor-pointer`}
              >
                Cloud Connections ({connections.length})
              </button>
            </nav>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={exportToCsv}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors cursor-pointer"
          >
            Export {activeTab === 'waitlist' ? 'Waitlist' : 'Connections'} to CSV
          </button>
        </div>

        {/* Waitlist Table */}
        {activeTab === 'waitlist' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cloud Provider
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monthly Spend
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {entries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {entry.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.role || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.cloud_provider || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.monthly_spend || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.created_at ? new Date(entry.created_at).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {entries.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No waitlist entries yet!</p>
              </div>
            )}
          </div>
        )}

        {/* Cloud Connections Table */}
        {activeTab === 'connections' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Connection Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Metadata
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Sync
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {connections.map((connection) => (
                    <tr key={connection.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {connection.user_email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          connection.provider === 'aws' ? 'bg-orange-100 text-orange-800' :
                          connection.provider === 'gcp' ? 'bg-blue-100 text-blue-800' :
                          'bg-cyan-100 text-cyan-800'
                        }`}>
                          {connection.provider.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {connection.connection_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          connection.status === 'connected' ? 'bg-green-100 text-green-800' :
                          connection.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          connection.status === 'failed' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {connection.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {connection.metadata && (
                          <div className="text-xs">
                            {connection.metadata.region && <div>Region: {connection.metadata.region}</div>}
                            {connection.metadata.project_id && <div>Project: {connection.metadata.project_id}</div>}
                            {connection.metadata.subscription_id && <div>Subscription: {connection.metadata.subscription_id}</div>}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {connection.created_at ? new Date(connection.created_at).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {connection.last_sync_at ? new Date(connection.last_sync_at).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {connections.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No cloud connections yet!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
