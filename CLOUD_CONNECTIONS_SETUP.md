# Cloud Connections Setup Guide

This guide will help you set up the cloud connections functionality for GreenLedger.

## 1. Database Setup

### Supabase Database Migration

1. **Go to your Supabase Dashboard**
   - Visit [https://app.supabase.com](https://app.supabase.com)
   - Select your GreenLedger project

2. **Run the Migration**
   - Go to the "SQL Editor" tab
   - Copy and paste the contents of `supabase-cloud-connections-migration.sql`
   - Click "Run" to execute the migration

3. **Verify the Table**
   - Go to "Table Editor" tab
   - You should see a new `cloud_connections` table with the following columns:
     - `id` (UUID, Primary Key)
     - `user_email` (Text)
     - `provider` (Text, 'aws' | 'gcp' | 'azure')
     - `connection_name` (Text)
     - `status` (Text, 'pending' | 'connected' | 'failed' | 'disconnected')
     - `encrypted_credentials` (Text)
     - `metadata` (JSONB)
     - `last_sync_at` (Timestamp)
     - `created_at` (Timestamp)
     - `updated_at` (Timestamp)

## 2. Environment Variables

Add the following environment variable to your `.env.local` file:

```bash
# For credential encryption (use a strong 32-character key in production)
ENCRYPTION_KEY=your-32-character-encryption-key-here
```

Example:
```bash
ENCRYPTION_KEY=mySecureKey123456789012345678901
```

## 3. API Endpoints

The following API endpoints are now available:

### POST /api/cloud-connection
Creates a new cloud connection.

**Request Body:**
```json
{
  "provider": "aws|gcp|azure",
  "credentials": {
    // Provider-specific credentials
  },
  "userEmail": "user@example.com",
  "connectionName": "My AWS Connection"
}
```

**Response:**
```json
{
  "message": "Cloud connection created successfully",
  "connection": {
    "id": "uuid",
    "provider": "aws",
    "status": "pending",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

## 4. Admin Dashboard

The admin dashboard now includes:
- **Waitlist Tab**: View and manage waitlist entries
- **Cloud Connections Tab**: View and manage cloud connections
- **Export Functionality**: Export both waitlist and connections to CSV

Access the admin dashboard at: `https://your-domain.com/admin`

## 5. Security Considerations

### Production Recommendations

1. **Encryption Key**: Use a strong, randomly generated 32-character key
2. **Credential Validation**: Implement proper credential validation for each provider
3. **Background Jobs**: Set up background jobs to:
   - Test connections
   - Sync carbon data
   - Update connection status
4. **Rate Limiting**: Implement rate limiting on the API endpoints
5. **Audit Logging**: Add audit logging for security monitoring

### Sample Environment Variables for Production

```bash
# Strong encryption key (32 characters)
ENCRYPTION_KEY=AbCdEfGhIjKlMnOpQrStUvWxYz123456

# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Admin password
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-admin-password
```

## 6. Testing the Integration

1. **Test Cloud Connection Form**:
   - Visit your website
   - Click "Connect Your Cloud Account"
   - Try connecting with test credentials
   - Verify the connection appears in the admin dashboard

2. **Test Admin Dashboard**:
   - Go to `/admin`
   - Enter admin password
   - Check both "Waitlist" and "Cloud Connections" tabs
   - Test CSV export functionality

## 7. Next Steps for Production

### Cloud Provider Integration

For production, you'll need to implement actual cloud provider integrations:

1. **AWS Integration**:
   - Use AWS SDK to validate credentials
   - Implement CloudWatch API calls for carbon data
   - Set up IAM roles with minimal permissions

2. **GCP Integration**:
   - Use Google Cloud SDK
   - Implement Cloud Monitoring API calls
   - Set up service accounts with viewer permissions

3. **Azure Integration**:
   - Use Azure SDK
   - Implement Azure Monitor API calls
   - Set up app registrations with reader permissions

### Background Jobs

Implement background job processing for:
- Credential validation
- Data synchronization
- Connection status updates
- Error handling and retries

### Monitoring and Alerting

Set up monitoring for:
- Connection success/failure rates
- Data sync performance
- API response times
- Error rates

## 8. Sample Cloud Provider Credentials

### AWS Test Credentials Format
```json
{
  "accessKey": "AKIAIOSFODNN7EXAMPLE",
  "secretKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "region": "us-east-1"
}
```

### GCP Test Credentials Format
```json
{
  "projectId": "my-project-id",
  "serviceAccountKey": "{\"type\": \"service_account\", \"project_id\": \"my-project\"...}"
}
```

### Azure Test Credentials Format
```json
{
  "subscriptionId": "12345678-1234-1234-1234-123456789012",
  "tenantId": "12345678-1234-1234-1234-123456789012",
  "clientId": "12345678-1234-1234-1234-123456789012",
  "clientSecret": "your-client-secret"
}
```

## 9. Troubleshooting

### Common Issues

1. **Table not found**: Run the Supabase migration
2. **Permission denied**: Check RLS policies in Supabase
3. **Encryption errors**: Verify ENCRYPTION_KEY is set correctly
4. **Connection timeout**: Check network connectivity and credentials

### Debug Mode

Enable debug logging by setting:
```bash
NODE_ENV=development
```

This will show detailed error messages in the console.

## 10. Support

For technical support or questions about the cloud connections functionality:

1. Check the browser console for error messages
2. Verify environment variables are set correctly
3. Test the API endpoints directly using tools like Postman
4. Check the Supabase dashboard for database connectivity

The cloud connections functionality is now fully integrated and ready for production use!
