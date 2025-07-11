import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy – GreenLedger</title>
        <meta
          name="description"
          content="Learn how GreenLedger protects your data and privacy. We're committed to transparency and security."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-white">
        {/* Header */}
        <header className="w-full py-6 px-6 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                🌱 GreenLedger
              </span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 text-center mb-12">
              Last updated: July 11, 2025
            </p>
          </motion.div>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-700">1.1 Information You Provide</h3>
              <p className="text-gray-600 mb-4">
                When you use GreenLedger, we collect information you provide directly to us, including:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Name and email address when you join our waitlist</li>
                <li>Company name and your role within the organization</li>
                <li>Cloud provider information and estimated monthly spending</li>
                <li>Account credentials for cloud services (with read-only access)</li>
                <li>Communications when you contact our support team</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">1.2 Information We Collect Automatically</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information when you use our services:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Cloud resource usage data and carbon emissions calculations</li>
                <li>Website usage analytics and performance metrics</li>
                <li>IP addresses, browser information, and device identifiers</li>
                <li>Log files and security monitoring data</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Provide carbon emissions reports and analytics</li>
                <li>Calculate accurate carbon footprints from your cloud usage</li>
                <li>Send you updates about our service and new features</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our services and develop new features</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-700">3.1 Service Providers</h3>
              <p className="text-gray-600 mb-4">
                We work with trusted third-party service providers who assist us in operating our service:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Supabase (database hosting and management)</li>
                <li>Vercel (website hosting and deployment)</li>
                <li>Cloud providers (AWS, GCP, Azure) for data collection</li>
                <li>Email service providers for communications</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">3.2 Legal Requirements</h3>
              <p className="text-gray-600 mb-4">
                We may disclose your information if required to do so by law or in response to valid legal process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>SOC 2 Type II compliance and security audits</li>
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Read-only access to your cloud accounts</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Multi-factor authentication for all admin access</li>
                <li>Employee background checks and security training</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-600 mb-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@greenledger.com" className="text-emerald-600 hover:text-emerald-700 cursor-pointer">privacy@greenledger.com</a>.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain accurate carbon emissions records</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Waitlist information is retained until you request removal or become a customer. Customer data is retained for the duration of your subscription plus 7 years for compliance purposes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>EU-US Data Privacy Framework compliance</li>
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Adequacy decisions by relevant data protection authorities</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. When we make changes, we will:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Post the updated policy on our website</li>
                <li>Update the &ldquo;Last updated&rdquo; date</li>
                <li>Notify you by email for material changes</li>
                <li>Provide a summary of key changes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> <a href="mailto:privacy@greenledger.com" className="text-emerald-600 hover:text-emerald-700 cursor-pointer">privacy@greenledger.com</a>
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Data Protection Officer:</strong> <a href="mailto:dpo@greenledger.com" className="text-emerald-600 hover:text-emerald-700 cursor-pointer">dpo@greenledger.com</a>
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> GreenLedger Ltd, 123 Sustainability Street, London, UK
                </p>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-10 px-6 w-full text-center text-sm text-gray-600 bg-gradient-to-r from-emerald-50 to-green-50">
          <p className="mb-3 flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors cursor-pointer">Privacy</Link> | 
            <Link href="/terms" className="hover:text-emerald-600 transition-colors cursor-pointer">Terms</Link> | 
            <Link href="/contact" className="hover:text-emerald-600 transition-colors cursor-pointer">Contact</Link>
          </p>
          <p className="text-gray-600">
            Built with ☕ by indie devs who hate spreadsheets too.
          </p>
        </footer>
      </div>
    </>
  );
}
