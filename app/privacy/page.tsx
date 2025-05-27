"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-ocean-navy-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-ocean-navy-700">
            <p className="text-sm text-ocean-navy-600 mb-8">
              <strong>Last updated:</strong> January 27, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you fill out our interest form 
                or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Professional information (company, role, experience level)</li>
                <li>Interest and feedback regarding our retreat program</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Communicate with you about our retreat program</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Improve our services and develop new offerings</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">7. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ocean-navy-900 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
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
