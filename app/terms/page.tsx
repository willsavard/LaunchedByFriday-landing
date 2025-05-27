"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function TermsOfService() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-gradient-to-br from-ocean-navy-50 to-ocean-teal-50 min-h-screen">
      {/* Header */}
      <header className="bg-ocean-navy-900/95 backdrop-blur-sm border-ocean-navy-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/images/laptop_plane_logo.png"
                alt="LaunchedByFriday Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">LaunchedByFriday</span>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="border-ocean-navy-200 text-ocean-navy-200 hover:bg-ocean-navy-200 hover:text-ocean-navy-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Terms of Service Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-ocean-navy-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-ocean-navy-700">
            <p className="text-sm text-ocean-navy-600 mb-8">
              <strong>Last updated:</strong> January 27, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the LaunchedByFriday website and services, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">2. Description of Service</h2>
              <p className="mb-4">
                LaunchedByFriday provides entrepreneurship retreat services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>7-day intensive startup development programs</li>
                <li>Mentorship and educational services</li>
                <li>Accommodation and venue services</li>
                <li>Access to development tools and resources</li>
                <li>Networking opportunities and community access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information when registering</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Respect other participants and maintain professional conduct</li>
                <li>Not engage in any disruptive or harmful behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                All content, materials, and intellectual property provided during our retreats remain the property of
                their respective owners. Participants retain ownership of their own projects and ideas developed during
                the program.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">5. Payment and Refunds</h2>
              <p className="mb-4">
                Payment terms and refund policies will be clearly communicated during the registration process. Refund
                eligibility may vary based on timing and circumstances of cancellation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                LaunchedByFriday shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">7. Privacy</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our
                services, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">8. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">9. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">10. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which LaunchedByFriday
                operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">11. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="mb-4">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@launchedbyfriday.com" className="text-ocean-teal-600 hover:underline">
                  info@launchedbyfriday.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
