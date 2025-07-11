import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface CloudConnectionFormProps {
  children: React.ReactNode;
}

export function CloudConnectionForm({ children }: CloudConnectionFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<'aws' | 'gcp' | 'azure' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    userEmail: '',
    accountId: '',
    accessKey: '',
    secretKey: '',
    region: '',
    projectId: '',
    serviceAccountKey: '',
    subscriptionId: '',
    tenantId: '',
    clientId: '',
    clientSecret: ''
  });

  const handleProviderSelect = (provider: 'aws' | 'gcp' | 'azure') => {
    setSelectedProvider(provider);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Validate email
      if (!formData.userEmail || !formData.userEmail.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Prepare credentials based on provider
      let credentials;
      if (selectedProvider === 'aws') {
        credentials = {
          accessKey: formData.accessKey,
          secretKey: formData.secretKey,
          region: formData.region
        };
      } else if (selectedProvider === 'gcp') {
        credentials = {
          projectId: formData.projectId,
          serviceAccountKey: formData.serviceAccountKey
        };
      } else if (selectedProvider === 'azure') {
        credentials = {
          subscriptionId: formData.subscriptionId,
          tenantId: formData.tenantId,
          clientId: formData.clientId,
          clientSecret: formData.clientSecret
        };
      }

      // Submit to backend
      const response = await fetch('/api/cloud-connection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: selectedProvider,
          credentials,
          userEmail: formData.userEmail,
          connectionName: `${selectedProvider?.toUpperCase()} Connection`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create connection');
      }

      // Show success message
      alert(`✅ Successfully connected to ${selectedProvider?.toUpperCase()}!\n\nConnection ID: ${data.connection.id}\nStatus: ${data.connection.status}\n\nWe'll start collecting your carbon data shortly and send you an email confirmation.`);
      
      // Reset form
      setIsOpen(false);
      setStep(1);
      setSelectedProvider(null);
      setFormData({
        userEmail: '',
        accountId: '',
        accessKey: '',
        secretKey: '',
        region: '',
        projectId: '',
        serviceAccountKey: '',
        subscriptionId: '',
        tenantId: '',
        clientId: '',
        clientSecret: ''
      });
    } catch (error) {
      console.error('Connection failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Connection failed. Please check your credentials and try again.';
      setError(errorMessage);
      alert(`❌ ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setSelectedProvider(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            🌱 Connect Your Cloud Account
          </DialogTitle>
        </DialogHeader>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-400">❌</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Choose your cloud provider to start tracking carbon emissions
              </p>
            </div>

            <div className="grid gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProviderSelect('aws')}
                className="flex items-center p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                  AWS
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Amazon Web Services</h3>
                  <p className="text-gray-600 text-sm">Connect your AWS account for EC2, S3, Lambda, and more</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProviderSelect('gcp')}
                className="flex items-center p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                  GCP
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Google Cloud Platform</h3>
                  <p className="text-gray-600 text-sm">Connect your GCP project for Compute Engine, Cloud Storage, and more</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProviderSelect('azure')}
                className="flex items-center p-6 border-2 border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                  AZ
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Microsoft Azure</h3>
                  <p className="text-gray-600 text-sm">Connect your Azure subscription for VMs, Storage, and more</p>
                </div>
              </motion.button>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center">
                <span className="text-emerald-600 mr-2">🔒</span>
                <p className="text-sm text-emerald-700">
                  <strong>Secure & Read-Only:</strong> We only request read-only permissions to analyze your usage. Your data stays secure.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && selectedProvider === 'aws' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-2">
                ← Back
              </Button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold mr-3">
                  AWS
                </div>
                <h3 className="text-lg font-semibold">Amazon Web Services</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="userEmail">Email Address</Label>
                <Input
                  id="userEmail"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.userEmail}
                  onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">We&apos;ll use this to send you connection updates</p>
              </div>

              <div>
                <Label htmlFor="accessKey">Access Key ID</Label>
                <Input
                  id="accessKey"
                  type="text"
                  placeholder="AKIAIOSFODNN7EXAMPLE"
                  value={formData.accessKey}
                  onChange={(e) => setFormData({...formData, accessKey: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="secretKey">Secret Access Key</Label>
                <Input
                  id="secretKey"
                  type="password"
                  placeholder="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
                  value={formData.secretKey}
                  onChange={(e) => setFormData({...formData, secretKey: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="region">Default Region</Label>
                <Input
                  id="region"
                  type="text"
                  placeholder="us-east-1"
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🔧 Setup Instructions:</h4>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. Go to AWS IAM Console</li>
                  <li>2. Create a new user with <strong>ReadOnlyAccess</strong> policy</li>
                  <li>3. Generate access keys for programmatic access</li>
                  <li>4. Copy the Access Key ID and Secret Key above</li>
                </ol>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white cursor-pointer"
              >
                {isLoading ? 'Connecting...' : 'Connect AWS Account'}
              </Button>
            </form>
          </motion.div>
        )}

        {step === 2 && selectedProvider === 'gcp' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-2">
                ← Back
              </Button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold mr-3">
                  GCP
                </div>
                <h3 className="text-lg font-semibold">Google Cloud Platform</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="userEmail">Email Address</Label>
                <Input
                  id="userEmail"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.userEmail}
                  onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">We&apos;ll use this to send you connection updates</p>
              </div>

              <div>
                <Label htmlFor="projectId">Project ID</Label>
                <Input
                  id="projectId"
                  type="text"
                  placeholder="my-project-id"
                  value={formData.projectId}
                  onChange={(e) => setFormData({...formData, projectId: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="serviceAccountKey">Service Account Key (JSON)</Label>
                <textarea
                  id="serviceAccountKey"
                  placeholder="Paste your service account JSON key here..."
                  value={formData.serviceAccountKey}
                  onChange={(e) => setFormData({...formData, serviceAccountKey: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🔧 Setup Instructions:</h4>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. Go to Google Cloud Console</li>
                  <li>2. Create a service account with <strong>Viewer</strong> role</li>
                  <li>3. Generate and download the JSON key file</li>
                  <li>4. Copy the JSON content above</li>
                </ol>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white cursor-pointer"
              >
                {isLoading ? 'Connecting...' : 'Connect GCP Account'}
              </Button>
            </form>
          </motion.div>
        )}

        {step === 2 && selectedProvider === 'azure' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleBack} className="mr-2">
                ← Back
              </Button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-cyan-500 rounded text-white text-xs flex items-center justify-center font-bold mr-3">
                  AZ
                </div>
                <h3 className="text-lg font-semibold">Microsoft Azure</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="userEmail">Email Address</Label>
                <Input
                  id="userEmail"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.userEmail}
                  onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">We&apos;ll use this to send you connection updates</p>
              </div>

              <div>
                <Label htmlFor="subscriptionId">Subscription ID</Label>
                <Input
                  id="subscriptionId"
                  type="text"
                  placeholder="12345678-1234-1234-1234-123456789012"
                  value={formData.subscriptionId}
                  onChange={(e) => setFormData({...formData, subscriptionId: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="tenantId">Tenant ID</Label>
                <Input
                  id="tenantId"
                  type="text"
                  placeholder="12345678-1234-1234-1234-123456789012"
                  value={formData.tenantId}
                  onChange={(e) => setFormData({...formData, tenantId: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="clientId">Client ID</Label>
                <Input
                  id="clientId"
                  type="text"
                  placeholder="12345678-1234-1234-1234-123456789012"
                  value={formData.clientId}
                  onChange={(e) => setFormData({...formData, clientId: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="clientSecret">Client Secret</Label>
                <Input
                  id="clientSecret"
                  type="password"
                  placeholder="Your client secret"
                  value={formData.clientSecret}
                  onChange={(e) => setFormData({...formData, clientSecret: e.target.value})}
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🔧 Setup Instructions:</h4>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. Go to Azure Portal → Azure Active Directory</li>
                  <li>2. Create an App Registration</li>
                  <li>3. Assign <strong>Reader</strong> role to your subscription</li>
                  <li>4. Generate client secret and copy details above</li>
                </ol>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white cursor-pointer"
              >
                {isLoading ? 'Connecting...' : 'Connect Azure Account'}
              </Button>
            </form>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
