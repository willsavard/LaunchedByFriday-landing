"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Zap,
  Code,
  Network,
  GraduationCap,
  Calendar,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  ArrowUp,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
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
    <div className="bg-gradient-to-br from-ocean-navy-50 to-ocean-teal-50">
      {/* Header */}
      <header className="bg-ocean-navy-900/95 backdrop-blur-sm border-ocean-navy-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/images/laptop_plane_logo.png"
                  alt="LaunchedByFriday Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">LaunchedByFriday</span>
            </button>
          </div>
          <Button
            className="bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-white"
            onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
          >
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-ocean-navy-900 to-ocean-navy-800">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-ocean-teal-500 text-white hover:bg-ocean-teal-500">
            <Calendar className="w-4 h-4 mr-2" />
            Founding Bootcamp - Late 2025
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build in a week.{" "}
            <span className="bg-gradient-to-r from-ocean-teal-400 to-ocean-teal-300 bg-clip-text text-transparent">
              Grow for a lifetime.
            </span>
          </h1>

          <p className="text-xl text-ocean-navy-200 mb-8 leading-relaxed">
            Go from idea to deployed MVP—fast. Leverage AI tools and expert mentorship in our premium and focused
            retreat to rapidly build your market-ready, commercially viable startup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-lg px-8 py-3 text-white font-semibold"
              onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
            >
              Secure Your Spot
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-ocean-navy-200 text-ocean-navy-200 hover:bg-ocean-navy-200 hover:text-ocean-navy-900"
              onClick={() => {
                const element = document.getElementById("whats-included")
                if (element) {
                  const elementPosition = element.offsetTop
                  const offsetPosition = elementPosition - 100 // 100px offset from top
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white">7</div>
              <div className="text-sm text-ocean-navy-300">Days Intensive</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-sm text-ocean-navy-300">Founding Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-ocean-navy-300">Expert Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-ocean-navy-300">All Inclusive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-ocean-navy-900 mb-8">The Tech Entrepreneur's Dilemma</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-ocean-navy-900 mb-2">Analysis Paralysis</h3>
              <p className="text-ocean-navy-600">Months of planning without building anything tangible</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-ocean-navy-900 mb-2">Technical Barriers</h3>
              <p className="text-ocean-navy-600">Lack of coding skills or expensive development costs</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-ocean-navy-900 mb-2">Isolation</h3>
              <p className="text-ocean-navy-600">Building alone without feedback or accountability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-ocean-teal-50 to-ocean-navy-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">Your Solution: LaunchedByFriday</h2>
            <p className="text-xl text-ocean-navy-700">
              A proven system that combines AI-powered development, expert mentorship, and an inspiring environment to
              launch your startup in just one week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">AI-Powered Development</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Build faster with cutting-edge AI coding tools and Lovable partnership
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">Expert Learning</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Structured modules on tech entrepreneurship and product development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">Elite Network</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Connect with like-minded entrepreneurs and potential co-founders
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">Inspiring Location</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Work from a beautiful villa in an affordable international destination
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">Proven Track Record</h2>
            <p className="text-xl text-ocean-navy-700">
              Our founders have years of experience turning ideas into profitable businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-ocean-navy-800 mb-2">$M+</div>
              <div className="text-lg font-semibold text-ocean-navy-900 mb-2">VC Funding Raised</div>
              <p className="text-ocean-navy-600">
                Years of supporting tech startups with millions in venture capital secured
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-ocean-teal-600 mb-2">10+</div>
              <div className="text-lg font-semibold text-ocean-navy-900 mb-2">Profitable Projects</div>
              <p className="text-ocean-navy-600">Active projects currently generating revenue in the market</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-ocean-navy-900 mb-2">Idea to Product</div>
              <p className="text-ocean-navy-600">
                Proven expertise in transforming concepts into commercial software products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="whats-included" className="py-16 px-4 bg-ocean-navy-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">What's Included</h2>
            <p className="text-xl text-ocean-navy-700">Everything you need for a successful week and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">7-Day Intensive Program</div>
                  <div className="text-ocean-navy-600">Structured daily sessions with clear milestones</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Villa Accommodation</div>
                  <div className="text-ocean-navy-600">Shared luxury villa in an inspiring destination</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">AI Development Tools</div>
                  <div className="text-ocean-navy-600">
                    Access to premium AI coding platforms and Lovable partnership
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Expert Mentorship</div>
                  <div className="text-ocean-navy-600">Daily guidance from experienced startup founders</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Learning Modules</div>
                  <div className="text-ocean-navy-600">Tech entrepreneurship curriculum and workshops</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Networking Opportunities</div>
                  <div className="text-ocean-navy-600">Connect with fellow entrepreneurs and potential partners</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Pre & Post Support</div>
                  <div className="text-ocean-navy-600">Preparation sessions and 3-month follow-up community</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Founding Member Benefits</div>
                  <div className="text-ocean-navy-600">
                    Shape future retreats, lifetime alumni access, and special recognition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-ocean-navy-800 to-ocean-navy-900">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Founding Bootcamp</h2>
          <p className="text-xl text-ocean-navy-200 mb-8">
            Be among the first 5 founding members to shape LaunchedByFriday. Your experience and feedback will help us
            create the ultimate entrepreneurship retreat for future participants.
          </p>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-ocean-navy-900 mb-4">Ready to Join?</h3>
              <p className="text-ocean-navy-600 mb-6">
                Click below to access our comprehensive feedback and interest form. Help us shape the perfect
                entrepreneurship retreat experience.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-lg py-3 text-white font-semibold"
                onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
              >
                Complete Interest Form
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-ocean-navy-600 text-center mt-4">
                No commitment required. Your feedback helps us create the best possible experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Feedback Section */}
      <section className="py-16 px-4 bg-ocean-teal-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">Help Us Build the Perfect Retreat</h2>
          <p className="text-xl text-ocean-navy-700 mb-8">
            Not ready to commit but interested in the concept? We'd love your input! Share your thoughts on what would
            make the ideal entrepreneurship bootcamp and be part of creating something extraordinary.
          </p>

          <Card className="border-0 shadow-lg max-w-2xl mx-auto bg-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-ocean-navy-900 mb-4">Share Your Thoughts</h3>
              <p className="text-ocean-navy-600 mb-6">
                Access our detailed feedback form to share your ideas, concerns, and suggestions for the perfect
                entrepreneurship retreat.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-ocean-teal-600 text-ocean-teal-600 hover:bg-ocean-teal-600 hover:text-white text-lg py-3"
                onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
              >
                Share Your Feedback
              </Button>
              <p className="text-sm text-ocean-navy-600 text-center mt-4">
                Your input helps us create the best possible experience. No commitment required.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-ocean-navy-900 mb-2">
                Do I need coding experience to participate?
              </h3>
              <p className="text-ocean-navy-600">
                No coding experience required! We use AI-powered development tools that allow you to build software
                through natural language and visual interfaces. Our partnership with Lovable ensures you have access to
                the most advanced no-code/low-code solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ocean-navy-900 mb-2">
                What if I don't have a startup idea yet?
              </h3>
              <p className="text-ocean-navy-600">
                Perfect! Part of our program includes idea validation and development workshops. We'll help you identify
                market opportunities and refine your concept during the first days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ocean-navy-900 mb-2">What's included in the accommodation?</h3>
              <p className="text-ocean-navy-600">
                You'll stay in a shared luxury villa with private bedrooms, common working spaces, high-speed internet,
                and all meals included. The location will be in an affordable international destination with great
                weather and inspiring surroundings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ocean-navy-900 mb-2">What happens after the 7 days?</h3>
              <p className="text-ocean-navy-600">
                You'll have a working MVP, a go-to-market strategy, and access to our alumni community. We provide 3
                months of follow-up support and ongoing access to our network of entrepreneurs, investors, and technical
                experts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ocean-navy-900 mb-2">
                When will the founding bootcamp take place?
              </h3>
              <p className="text-ocean-navy-600">
                The founding bootcamp is scheduled for late 2025. As a founding member, you'll have input on the exact
                dates and location selection. We'll work with our founding cohort to ensure the timing and destination
                work for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-ocean-navy-900 to-ocean-navy-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/images/laptop_plane_logo.png"
                alt="LaunchedByFriday Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold">LaunchedByFriday</span>
          </div>

          <p className="text-ocean-navy-200 mb-6">
            Transform your startup idea into reality in just one week, surrounded by fellow entrepreneurs in paradise.
          </p>

          <div className="flex justify-center space-x-6 text-sm text-ocean-navy-300">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:info@launchedbyfriday.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-ocean-navy-700 text-sm text-ocean-navy-300">
            © 2024 LaunchedByFriday. All rights reserved.
          </div>
        </div>
      </footer>

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
