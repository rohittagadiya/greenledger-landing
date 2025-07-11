import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service – GreenLedger | Carbon Reporting Terms</title>
        <meta
          name="description"
          content="Terms of Service for GreenLedger carbon reporting platform. Professional carbon emissions tracking and compliance reporting terms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="terms of service, carbon reporting terms, cloud emissions tracking terms, compliance" />
        <link rel="canonical" href="https://greenledger-landing.vercel.app/terms" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service – GreenLedger" />
        <meta property="og:description" content="Terms of service for GreenLedger carbon reporting platform." />
        <meta property="og:url" content="https://greenledger-landing.vercel.app/terms" />
        <meta property="og:type" content="website" />
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              These terms govern your use of GreenLedger services.
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
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using GreenLedger services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                GreenLedger provides carbon emissions tracking and reporting services for cloud infrastructure. Our services include:
              </p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Automated carbon footprint calculations</li>
                <li>Compliance reports for various regulations</li>
                <li>Real-time emissions monitoring</li>
                <li>Analytics and insights dashboards</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc ml-6 text-gray-600 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Keep your account credentials secure</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not attempt to reverse engineer our services</li>
                <li>Not use our services for illegal activities</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 cursor-pointer">
                  Privacy Policy
                </Link>{' '}
                to understand how we collect, use, and protect your information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the fullest extent permitted by law, GreenLedger shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms, please contact us at{' '}
                <a href="mailto:legal@greenledger.com" className="text-emerald-600 hover:text-emerald-700">
                  legal@greenledger.com
                </a>
              </p>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-10 px-6 w-full text-center text-sm text-gray-600 bg-gradient-to-r from-emerald-50 to-green-50">
          <p className="mb-3 flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy</Link> | 
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms</Link> | 
            <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
          </p>
          <p className="text-gray-600">
            Built with ☕ by indie devs who hate spreadsheets too.
          </p>
        </footer>
      </div>
    </>
  );
}
