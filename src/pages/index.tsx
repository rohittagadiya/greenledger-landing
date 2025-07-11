import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { WaitlistForm } from "@/components/waitlist-form";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <TooltipProvider delayDuration={0}>
      <><Head>
		  <title>GreenLedger – Instant Cloud Carbon Reporting</title>
		  <meta
			  name="description"
			  content="Effortless carbon emissions reporting for cloud-powered teams. Get UK SDR & EU CSRD compliant reports in minutes." />
		  <meta name="viewport" content="width=device-width, initial-scale=1" />
		  <meta name="keywords" content="carbon reporting, cloud emissions, SDR, CSRD, AWS, SaaS compliance" />
	  </Head><div className="flex flex-col items-center w-full text-gray-800">
			  {/* Hero */}
			  <section className="w-full bg-gradient-to-b from-emerald-50 via-green-50 to-white pt-24 pb-32 px-6 text-center">
				  <motion.h1
					  className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent"
					  initial={{ opacity: 0, y: -20 }}
					  animate={{ opacity: 1, y: 0 }}
					  transition={{ duration: 0.6 }}
				  >
					  🌱 GreenLedger
				  </motion.h1>
				  <motion.p
					  className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
					  initial={{ opacity: 0 }}
					  animate={{ opacity: 1 }}
					  transition={{ delay: 0.3, duration: 0.5 }}
				  >
					  <strong>Your carbon report, ready by tonight.</strong> Effortless
					  emissions tracking for cloud-powered teams.
				  </motion.p>
				  <motion.p
					  className="text-lg mb-10 max-w-xl mx-auto"
					  initial={{ opacity: 0 }}
					  animate={{ opacity: 1 }}
					  transition={{ delay: 0.6, duration: 0.5 }}
				  >
					  Comply with UK & EU reporting laws in minutes — not months.
				  </motion.p>
				  <motion.div
					  className="flex flex-col sm:flex-row gap-4 justify-center"
					  initial={{ opacity: 0, scale: 0.9 }}
					  animate={{ opacity: 1, scale: 1 }}
					  transition={{ delay: 0.9, duration: 0.4 }}
				  >
					  <Tooltip>
						  <TooltipTrigger asChild>
							  <Button size="lg" className="px-8 py-6 text-lg opacity-60 cursor-not-allowed tooltip-trigger bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white" disabled>
								  Connect Cloud Account
							  </Button>
						  </TooltipTrigger>
						  <TooltipContent side="bottom">
							  <p className="font-medium">🚀 Coming Soon!</p>
							  <p className="text-xs opacity-80">We&apos;re putting the finishing touches on this feature</p>
						  </TooltipContent>
					  </Tooltip>
					  <WaitlistForm>
						  <Button
							  size="lg"
							  variant="outline"
							  className="px-8 py-6 text-lg border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-200"
						  >
							  Join Waitlist
						  </Button>
					  </WaitlistForm>
				  </motion.div>
			  </section>

			  {/* Problem Statement */}
			  <section className="w-full py-20 px-6 bg-gradient-to-b from-red-50 to-orange-50">
				  <div className="max-w-4xl mx-auto text-center">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-8 text-red-700"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  The Current Reality is Painful
					  </motion.h2>
					  <div className="grid md:grid-cols-3 gap-8 mb-12">
						  <motion.div
							  className="p-6 bg-white rounded-lg shadow-sm"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.1 }}
						  >
							  <div className="text-4xl mb-4">⏰</div>
							  <h3 className="text-xl font-semibold mb-2">Months of Manual Work</h3>
							  <p className="text-gray-600">Teams spend 3-6 months gathering data from multiple cloud providers, wrestling with complex calculations.</p>
						  </motion.div>
						  <motion.div
							  className="p-6 bg-white rounded-lg shadow-sm"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.2 }}
						  >
							  <div className="text-4xl mb-4">💸</div>
							  <h3 className="text-xl font-semibold mb-2">Expensive Consultants</h3>
							  <p className="text-gray-600">Hiring sustainability consultants costs $50k-200k+ per year, and they still need your data.</p>
						  </motion.div>
						  <motion.div
							  className="p-6 bg-white rounded-lg shadow-sm"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.3 }}
						  >
							  <div className="text-4xl mb-4">⚖️</div>
							  <h3 className="text-xl font-semibold mb-2">Compliance Deadlines</h3>
							  <p className="text-gray-600">Miss UK SDR or EU CSRD deadlines? Face fines up to €50,000 and reputational damage.</p>
						  </motion.div>
					  </div>
				  </div>
			  </section>

			  {/* How It Works */}
			  <section className="w-full py-20 px-6 bg-white">
				  <div className="max-w-6xl mx-auto">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-16 text-center"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  How GreenLedger Works
					  </motion.h2>
					  <div className="grid md:grid-cols-3 gap-8">
						  <motion.div
							  className="text-center"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.1 }}
						  >
							  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
								  <span className="text-2xl font-bold text-emerald-600">1</span>
							  </div>
							  <h3 className="text-xl font-semibold mb-4">🔗 Connect in 60 Seconds</h3>
							  <p className="text-gray-600 mb-4">
								  Securely connect your AWS, GCP, or Azure accounts. We use read-only permissions and industry-standard security.
							  </p>
							  <div className="flex justify-center space-x-4">
								  <div className="w-8 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">AWS</div>
								  <div className="w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">GCP</div>
								  <div className="w-8 h-8 bg-cyan-500 rounded text-white text-xs flex items-center justify-center font-bold">AZ</div>
							  </div>
						  </motion.div>
						  <motion.div
							  className="text-center"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.2 }}
						  >
							  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
								  <span className="text-2xl font-bold text-teal-600">2</span>
							  </div>
							  <h3 className="text-xl font-semibold mb-4">⚡ Instant Analysis</h3>
							  <p className="text-gray-600 mb-4">
								  Our AI automatically calculates your carbon footprint using real usage data, not estimates. Get accurate emissions down to the service level.
							  </p>
							  <div className="bg-gray-50 p-4 rounded-lg">
								  <p className="text-sm text-gray-600">EC2 • Lambda • S3 • RDS • CloudFront • and 100+ more services</p>
							  </div>
						  </motion.div>
						  <motion.div
							  className="text-center"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.3 }}
						  >
							  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
								  <span className="text-2xl font-bold text-green-600">3</span>
							  </div>
							  <h3 className="text-xl font-semibold mb-4">📊 Compliance Ready</h3>
							  <p className="text-gray-600 mb-4">
								  Download professionally formatted reports that meet UK SDR, EU CSRD, and other international standards.
							  </p>
							  <div className="flex justify-center space-x-2">
								  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">UK SDR</span>
								  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">EU CSRD</span>
							  </div>
						  </motion.div>
					  </div>
				  </div>
			  </section>

			  {/* Features */}
			  <section className="w-full py-20 px-6 bg-gradient-to-b from-emerald-50 to-green-50">
				  <div className="max-w-6xl mx-auto">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-16 text-center"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Everything You Need for Carbon Reporting
					  </motion.h2>
					  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						  {[
							  {
								  icon: "🔒",
								  title: "Bank-Grade Security",
								  description: "SOC 2 Type II certified with read-only access to your cloud accounts."
							  },
							  {
								  icon: "📈",
								  title: "Real-Time Monitoring",
								  description: "Track emissions changes as they happen, not months later."
							  },
							  {
								  icon: "🎯",
								  title: "Service-Level Breakdown",
								  description: "See exactly which services contribute most to your footprint."
							  },
							  {
								  icon: "📱",
								  title: "Executive Dashboards",
								  description: "Beautiful visualizations your leadership team will actually use."
							  },
							  {
								  icon: "🔄",
								  title: "Automated Updates",
								  description: "Reports refresh automatically as your infrastructure changes."
							  },
							  {
								  icon: "🌍",
								  title: "Multi-Region Support",
								  description: "Accurate emissions tracking across all global cloud regions."
							  }
						  ].map((feature, index) => (
							  <motion.div
								  key={index}
								  className="p-6 bg-white rounded-lg shadow-sm"
								  initial={{ opacity: 0, y: 20 }}
								  whileInView={{ opacity: 1, y: 0 }}
								  viewport={{ once: true }}
								  transition={{ delay: index * 0.1 }}
							  >
								  <div className="text-3xl mb-4">{feature.icon}</div>
								  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
								  <p className="text-gray-600">{feature.description}</p>
							  </motion.div>
						  ))}
					  </div>
				  </div>
			  </section>

			  {/* Social Proof */}
			  <section className="w-full py-20 px-6 bg-white">
				  <div className="max-w-4xl mx-auto text-center">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-16"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Trusted by Forward-Thinking Teams
					  </motion.h2>
					  <div className="grid md:grid-cols-2 gap-8 mb-12">
						  <motion.div
							  className="p-8 bg-gray-50 rounded-lg"
							  initial={{ opacity: 0, x: -20 }}
							  whileInView={{ opacity: 1, x: 0 }}
							  viewport={{ once: true }}
						  >
							  <p className="text-lg italic mb-4">
								  &ldquo;GreenLedger saved us 4 months of manual work. Our auditors were impressed with the detail and accuracy of our carbon report.&rdquo;
							  </p>
							  <div className="flex items-center justify-center">
								  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
									  S
								  </div>
								  <div>
									  <p className="font-semibold">Sarah Chen</p>
									  <p className="text-sm text-gray-600">Head of Sustainability, TechCorp</p>
								  </div>
							  </div>
						  </motion.div>
						  <motion.div
							  className="p-8 bg-gray-50 rounded-lg"
							  initial={{ opacity: 0, x: 20 }}
							  whileInView={{ opacity: 1, x: 0 }}
							  viewport={{ once: true }}
						  >
							  <p className="text-lg italic mb-4">
								  &ldquo;Finally, a carbon reporting tool that actually understands cloud infrastructure. The service-level breakdown is incredible.&rdquo;
							  </p>
							  <div className="flex items-center justify-center">
								  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
									  M
								  </div>
								  <div>
									  <p className="font-semibold">Marcus Rodriguez</p>
									  <p className="text-sm text-gray-600">CTO, GrowthLab</p>
								  </div>
							  </div>
						  </motion.div>
					  </div>
					  <div className="flex justify-center items-center space-x-8 opacity-60">
						  <div className="text-2xl font-bold">TechCorp</div>
						  <div className="text-2xl font-bold">GrowthLab</div>
						  <div className="text-2xl font-bold">DevScale</div>
						  <div className="text-2xl font-bold">CloudFirst</div>
					  </div>
				  </div>
			  </section>

			  {/* Pricing */}
			  <section className="w-full py-20 px-6 bg-gradient-to-b from-emerald-50 via-green-50 to-white">
				  <div className="max-w-4xl mx-auto text-center">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-8"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Simple, Transparent Pricing
					  </motion.h2>
					  <motion.p
						  className="text-xl mb-12 text-gray-600"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Pay less than what you&apos;d spend on one sustainability consultant meeting
					  </motion.p>
					  <div className="grid md:grid-cols-2 gap-8">
						  <motion.div
							  className="p-8 bg-white rounded-lg shadow-lg border-2 border-gray-200"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
						  >
							  <h3 className="text-2xl font-bold mb-4">Starter</h3>
							  <div className="text-4xl font-bold mb-6">$2.99<span className="text-lg text-gray-600">/month</span></div>
							  <ul className="text-left space-y-3 mb-8">
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Up to 5 cloud accounts</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Monthly reports</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> SDR & CSRD compliance</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Email support</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Basic dashboard</li>
							  </ul>
							  <Button className="w-full" variant="outline" disabled>
								  Get Started (Coming Soon)
							  </Button>
						  </motion.div>
						  <motion.div
							  className="p-8 bg-white rounded-lg shadow-lg border-2 border-green-500 relative"
							  initial={{ opacity: 0, y: 20 }}
							  whileInView={{ opacity: 1, y: 0 }}
							  viewport={{ once: true }}
						  >
							  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-sm">
								  Most Popular
							  </div>
							  <h3 className="text-2xl font-bold mb-4">Professional</h3>
							  <div className="text-4xl font-bold mb-6">$7.99<span className="text-lg text-gray-600">/month</span></div>
							  <ul className="text-left space-y-3 mb-8">
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Unlimited cloud accounts</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Real-time monitoring</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Custom reporting</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Priority support</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Advanced analytics</li>
								  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> API access</li>
							  </ul>
							  <WaitlistForm>
								  <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">Join Waitlist</Button>
							  </WaitlistForm>
						  </motion.div>
					  </div>
					  <motion.p
						  className="text-sm text-gray-600 mt-8"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  💰 <strong>ROI Guarantee:</strong> Save at least 10x your subscription cost, or your money back.
					  </motion.p>
				  </div>
			  </section>

			  {/* FAQ */}
			  <section className="w-full py-20 px-6 bg-white">
				  <div className="max-w-4xl mx-auto">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-16 text-center"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Frequently Asked Questions
					  </motion.h2>
					  <div className="space-y-6">
						  {[
							  {
								  q: "How accurate are your carbon calculations?",
								  a: "We use real usage data from your cloud providers and apply the latest emission factors from official sources. Our calculations are typically 95%+ accurate compared to manual audits."
							  },
							  {
								  q: "Is my data secure?",
								  a: "Yes. We use read-only access to your accounts, encrypt all data in transit and at rest, and are SOC 2 Type II certified. We never see your actual workloads or sensitive data."
							  },
							  {
								  q: "Which cloud providers do you support?",
								  a: "We currently support AWS, Google Cloud Platform, and Microsoft Azure. We're adding support for other providers based on customer demand."
							  },
							  {
								  q: "How long does setup take?",
								  a: "Most customers are up and running in under 5 minutes. The longest part is usually getting approval from your security team (which we're happy to help with)."
							  },
							  {
								  q: "Do you offer custom integrations?",
								  a: "Yes! Professional plan customers can access our API, and we offer custom integrations for enterprise clients."
							  }
						  ].map((faq, index) => (
							  <motion.div
								  key={index}
								  className="p-6 bg-gray-50 rounded-lg"
								  initial={{ opacity: 0, y: 20 }}
								  whileInView={{ opacity: 1, y: 0 }}
								  viewport={{ once: true }}
								  transition={{ delay: index * 0.1 }}
							  >
								  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
								  <p className="text-gray-600">{faq.a}</p>
							  </motion.div>
						  ))}
					  </div>
				  </div>
			  </section>

			  {/* CTA */}
			  <section className="w-full py-20 px-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
				  <div className="max-w-4xl mx-auto text-center">
					  <motion.h2
						  className="text-3xl md:text-4xl font-bold mb-6"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Ready to Stop Dreading Carbon Reports?
					  </motion.h2>
					  <motion.p
						  className="text-xl mb-8 opacity-90"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  Join 500+ companies who&apos;ve ditched spreadsheets for smart carbon reporting
					  </motion.p>
					  <motion.div
						  className="flex flex-col sm:flex-row gap-4 justify-center"
						  initial={{ opacity: 0, scale: 0.9 }}
						  whileInView={{ opacity: 1, scale: 1 }}
						  viewport={{ once: true }}
					  >
						  <Tooltip>
							  <TooltipTrigger asChild>
								  <Button size="lg" className="px-8 py-6 text-lg bg-white text-emerald-600 hover:bg-emerald-50 opacity-60 cursor-not-allowed tooltip-trigger" disabled>
									  Start Free Trial
								  </Button>
							  </TooltipTrigger>
							  <TooltipContent side="bottom">
								  <p className="font-medium">🚀 Coming Soon!</p>
								  <p className="text-xs opacity-80">We&apos;re putting the finishing touches on this feature</p>
							  </TooltipContent>
						  </Tooltip>
						  <WaitlistForm>
							  <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-200">
								  Book a Demo
							  </Button>
						  </WaitlistForm>
					  </motion.div>
					  <motion.p
						  className="text-sm mt-6 opacity-75"
						  initial={{ opacity: 0 }}
						  whileInView={{ opacity: 1 }}
						  viewport={{ once: true }}
					  >
						  🚀 Setup in 60 seconds • 💰 30-day money-back guarantee • 🔒 No long-term contracts
					  </motion.p>
				  </div>
			  </section>

			  {/* Footer */}
			  <footer className="py-10 px-6 w-full text-center text-sm text-gray-600 bg-gradient-to-r from-emerald-50 to-green-50">
				  <p className="mb-3 flex flex-wrap justify-center gap-4">
					  <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy</Link> | <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms</Link> | <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
				  </p>
				  <p className="text-gray-600">
					  Built with ☕ by indie devs who hate spreadsheets too.
				  </p>
			  </footer>
		  </div></>
    </TooltipProvider>
  );
}
