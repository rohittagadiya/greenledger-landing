import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us – GreenLedger</title>
        <meta
          name="description"
          content="Get in touch with the GreenLedger team. We're here to help with your carbon reporting needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-white">
        {/* Header */}
        <header className="w-full py-6 px-6 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                🌱 GreenLedger
              </span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              We&apos;re here to help you with your carbon reporting journey.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:hello@greenledger.com" className="text-emerald-600 hover:text-emerald-700">
                      hello@greenledger.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Office</h3>
                    <p className="text-gray-600">123 Sustainability Street<br />London, UK</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">Monday - Friday<br />9:00 AM - 6:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Support Categories</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">💬 General Inquiries</h3>
                  <p className="text-gray-600 text-sm">Questions about our service, pricing, or getting started</p>
                  <a href="mailto:hello@greenledger.com" className="text-emerald-600 hover:text-emerald-700 text-sm">
                    hello@greenledger.com
                  </a>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🔧 Technical Support</h3>
                  <p className="text-gray-600 text-sm">Issues with integrations, reports, or technical problems</p>
                  <a href="mailto:support@greenledger.com" className="text-emerald-600 hover:text-emerald-700 text-sm">
                    support@greenledger.com
                  </a>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🤝 Partnerships</h3>
                  <p className="text-gray-600 text-sm">Business partnerships and integration opportunities</p>
                  <a href="mailto:partnerships@greenledger.com" className="text-emerald-600 hover:text-emerald-700 text-sm">
                    partnerships@greenledger.com
                  </a>
                </div>

                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🔒 Security & Privacy</h3>
                  <p className="text-gray-600 text-sm">Security concerns, privacy questions, or data requests</p>
                  <a href="mailto:security@greenledger.com" className="text-emerald-600 hover:text-emerald-700 text-sm">
                    security@greenledger.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join our waitlist to be among the first to try GreenLedger when we launch.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-emerald-600 font-semibold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Join Waitlist
            </Link>
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
