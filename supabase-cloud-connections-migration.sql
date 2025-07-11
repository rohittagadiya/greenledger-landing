-- Create cloud_connections table
CREATE TABLE IF NOT EXISTS cloud_connections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_email TEXT NOT NULL,
    provider TEXT NOT NULL CHECK (provider IN ('aws', 'gcp', 'azure')),
    connection_name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'connected', 'failed', 'disconnected')),
    encrypted_credentials TEXT,
    metadata JSONB,
    last_sync_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_cloud_connections_user_email ON cloud_connections(user_email);
CREATE INDEX IF NOT EXISTS idx_cloud_connections_provider ON cloud_connections(provider);
CREATE INDEX IF NOT EXISTS idx_cloud_connections_status ON cloud_connections(status);
CREATE INDEX IF NOT EXISTS idx_cloud_connections_created_at ON cloud_connections(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE cloud_connections ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow all operations for authenticated users (adjust as needed for your security requirements)
CREATE POLICY "Allow all operations for authenticated users" ON cloud_connections
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at timestamp
DROP TRIGGER IF EXISTS update_cloud_connections_updated_at ON cloud_connections;
CREATE TRIGGER update_cloud_connections_updated_at
    BEFORE UPDATE ON cloud_connections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions (adjust as needed)
GRANT ALL ON cloud_connections TO anon;
GRANT ALL ON cloud_connections TO authenticated;
GRANT ALL ON cloud_connections TO service_role;
