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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="LaunchedByFriday AI Coding Bootcamp Home"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <img
                  src="/images/laptop_plane_logo.png"
                  alt="LaunchedByFriday AI Coding Bootcamp Logo"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-white">LaunchedByFriday</span>
            </button>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-white text-sm md:text-base px-3 md:px-4"
            onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
            aria-label="Join AI Coding Bootcamp Waitlist"
          >
            <span className="hidden sm:inline">Help Shape Our Retreat</span>
            <span className="sm:hidden">Get Info</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-ocean-navy-900 to-ocean-navy-800">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 md:mb-6 bg-ocean-teal-500 text-white hover:bg-ocean-teal-500 text-sm">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Founding Retreat - Late 2025
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Build in a week.{" "}
            <span className="bg-gradient-to-r from-ocean-teal-400 to-ocean-teal-300 bg-clip-text text-transparent">
              Grow for a lifetime.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-ocean-navy-200 mb-6 md:mb-8 leading-relaxed">
            Launch your market-ready software MVP in just 7 days. Join a select group of founders in a premium setting
            for an unparalleled week of focused creation using AI-powered development tools.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
            <Button
              className="bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-white"
              onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
              aria-label="Join AI Coding Bootcamp - Share Your Vision"
            >
              Share Your Vision & Get Early Info
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-ocean-navy-200 text-ocean-navy-200 hover:bg-ocean-navy-200 hover:text-ocean-navy-900"
              onClick={() => {
                const element = document.getElementById("whats-included")
                if (element) {
                  const elementPosition = element.offsetTop
                  const offsetPosition = elementPosition - 100
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  })
                }
              }}
              aria-label="Learn more about AI coding bootcamp"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">7</div>
              <div className="text-xs md:text-sm text-ocean-navy-300">Days to Launch</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">5</div>
              <div className="text-xs md:text-sm text-ocean-navy-300">Founders</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">5</div>
              <div className="text-xs md:text-sm text-ocean-navy-300">Ideas to Startups</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">1</div>
              <div className="text-xs md:text-sm text-ocean-navy-300">Premium Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-ocean-navy-900 mb-8">The Tech Entrepreneur's Dilemma</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-ocean-navy-900 mb-2">Analysis Paralysis</h3>
              <p className="text-ocean-navy-600">
                Months of planning without building anything tangible or learning practical AI coding skills
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-ocean-navy-900 mb-2">Technical Barriers</h3>
              <p className="text-ocean-navy-600">
                Lack of coding experience or knowledge of modern AI development tools and expensive traditional
                development costs
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-ocean-navy-900 mb-2">Isolation</h3>
              <p className="text-ocean-navy-600">
                Building alone without feedback, accountability, or access to expert mentorship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-r from-ocean-teal-50 to-ocean-navy-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">Your Solution: LaunchedByFriday</h2>
            <p className="text-xl text-ocean-navy-700">
              A proven system that combines AI-powered development training, expert mentorship, and an inspiring
              environment to launch your startup MVP in just one week using cutting-edge AI coding tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">AI-Powered Development Training</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Master cutting-edge AI coding tools and Lovable partnership for rapid MVP development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">Expert Coding Mentorship</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Structured modules on tech entrepreneurship and AI-powered product development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">Elite Startup Network</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Connect with like-minded tech entrepreneurs and potential co-founders
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-navy-900 mb-2">Premium Bootcamp Location</h3>
                <p className="text-ocean-navy-600 text-sm">
                  Intensive retreat in a beautiful location in an affordable international destination
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Build an MVP in a Week */}
      <section className="py-8 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">How We Build an MVP in One Week</h2>
            <p className="text-xl text-ocean-navy-700">AI-Powered Speed, Expert-Crafted Quality, Intensive Training</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/collaborative-workspace.png"
                alt="AI coding bootcamp - Entrepreneurs collaborating in a modern workspace with laptops, learning AI development tools and building MVPs"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy-900/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              {/* Mobile Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ai-tools">
                    <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                      Master AI Development Tools
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-ocean-navy-600">
                        You won't just use AI coding tools; you'll master them in our intensive program. We provide
                        hands-on training on how to effectively leverage platforms like Lovable to accelerate every
                        stage of software development. Learn the prompts, workflows, and best practices for AI-powered
                        development directly from experts.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="professionals">
                    <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                      Build with Seasoned AI Development Professionals
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-ocean-navy-600">
                        Our mentors aren't just advisors; they are experienced product developers who have built and
                        launched multiple successful commercial software products using these exact AI-powered
                        development techniques. They work alongside you in our intensive program, ensuring your MVP is
                        not only built rapidly but is also robust, user-friendly, and commercially sound.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="partnership">
                    <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                      Official Lovable Partnership & Proven AI Development Experience
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-ocean-navy-600">
                        Our official partnership with Lovable gives you unparalleled access and insights. We're not just
                        teaching theory; we're applying proven AI development methodologies that we use to develop our
                        own commercial products currently active in the market. You're learning and building based on
                        real-world, up-to-the-minute AI development expertise.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ocean-navy-900 mb-2">Master AI Development Tools</h3>
                    <p className="text-ocean-navy-600">
                      You won't just use AI coding tools; you'll master them in our intensive program. We provide
                      hands-on training on how to effectively leverage platforms like Lovable to accelerate every stage
                      of software development. Learn the prompts, workflows, and best practices for AI-powered
                      development directly from experts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ocean-navy-900 mb-2">
                      Build with Seasoned AI Development Professionals
                    </h3>
                    <p className="text-ocean-navy-600">
                      Our mentors aren't just advisors; they are experienced product developers who have built and
                      launched multiple successful commercial software products using these exact AI-powered development
                      techniques. They work alongside you in our intensive program, ensuring your MVP is not only built
                      rapidly but is also robust, user-friendly, and commercially sound.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-ocean-navy-700 to-ocean-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ocean-navy-900 mb-2">
                      Official Lovable Partnership & Proven AI Development Experience
                    </h3>
                    <p className="text-ocean-navy-600">
                      Our official partnership with Lovable gives you unparalleled access and insights. We're not just
                      teaching theory; we're applying proven AI development methodologies that we use to develop our own
                      commercial products currently active in the market. You're learning and building based on
                      real-world, up-to-the-minute AI development expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-8 md:py-16 px-4 bg-ocean-navy-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">
              Proven Track Record in AI Development & Startup Success
            </h2>
            <p className="text-xl text-ocean-navy-700">
              Our founders have years of experience turning ideas into profitable businesses using AI-powered
              development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-ocean-navy-800 mb-2">$M+</div>
              <div className="text-lg font-semibold text-ocean-navy-900 mb-2">VC Funding Raised</div>
              <p className="text-ocean-navy-600">
                Years of supporting tech startups with millions in venture capital secured through AI-powered MVP
                development
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-ocean-teal-600 mb-2">10+</div>
              <div className="text-lg font-semibold text-ocean-navy-900 mb-2">Profitable AI Projects</div>
              <p className="text-ocean-navy-600">
                Active projects currently generating revenue in the market using AI development tools
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-ocean-navy-900 mb-2">Idea to MVP Success</div>
              <p className="text-ocean-navy-600">
                Proven expertise in transforming concepts into commercial software products using AI coding techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="whats-included" className="py-8 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">What's Included in Our Program</h2>
            <p className="text-xl text-ocean-navy-700">
              Everything you need for a successful week of AI development and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">7-Day Intensive AI Development Program</div>
                  <div className="text-ocean-navy-600">
                    Structured daily sessions with clear AI development milestones
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Premium Villa Accommodation</div>
                  <div className="text-ocean-navy-600">Shared luxury villa in an inspiring destination</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">AI Development Tools & Training</div>
                  <div className="text-ocean-navy-600">
                    Access to premium AI coding platforms and Lovable partnership with hands-on training
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Expert AI Development Mentorship</div>
                  <div className="text-ocean-navy-600">
                    Daily guidance from experienced startup founders and AI experts
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Tech Entrepreneurship Learning Modules</div>
                  <div className="text-ocean-navy-600">
                    Comprehensive curriculum and workshops on AI-powered development
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Startup Networking Opportunities</div>
                  <div className="text-ocean-navy-600">
                    Connect with fellow tech entrepreneurs and potential co-founders
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Pre & Post Program Support</div>
                  <div className="text-ocean-navy-600">
                    Preparation sessions and 3-month follow-up community for continued development
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-ocean-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ocean-navy-900">Founding Member Benefits</div>
                  <div className="text-ocean-navy-600">
                    Shape future programs, lifetime alumni access, and special recognition in our AI development
                    community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-r from-ocean-navy-800 to-ocean-navy-900">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Help Shape Our First Program</h2>
          <p className="text-lg md:text-xl text-ocean-navy-200 mb-6 md:mb-8">
            Have 5 minutes? Your insights are invaluable. Help us build the ultimate AI-powered MVP development
            experience and get priority updates for our founding bootcamp cohort.
          </p>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-ocean-navy-900 mb-3 md:mb-4">
                Share Your Vision for AI Development
              </h3>
              <p className="text-ocean-navy-600 mb-4 md:mb-6 text-sm md:text-base">
                Takes ~5 minutes. Share your thoughts on AI development and get priority updates with early bird
                pricing.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-base md:text-lg py-3 text-white font-semibold"
                onClick={() => window.open("https://forms.gle/eZu19jTMLKTc8Udo9", "_blank")}
                aria-label="Join AI Coding Bootcamp Waitlist"
              >
                <span className="hidden md:inline">Share Your Vision & Get Early Info</span>
                <span className="md:hidden">Share Your Vision</span>
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <p className="text-xs md:text-sm text-ocean-navy-600 text-center mt-3 md:mt-4">
                Your feedback shapes our program. Priority updates included.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ocean-navy-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="coding">
              <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                Do I need coding experience to participate?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-ocean-navy-600">
                  No coding experience required! We use AI-powered development tools that allow you to build software
                  through natural language and visual interfaces. Our partnership with Lovable ensures you have access
                  to the most advanced no-code/low-code AI development solutions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="idea">
              <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                What if I don't have a startup idea yet?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-ocean-navy-600">
                  Perfect! Part of our program includes idea validation and development workshops. We'll help you
                  identify market opportunities and refine your concept during the first days.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="accommodation">
              <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                What's included in the accommodation?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-ocean-navy-600">
                  You'll stay in a shared luxury villa with private bedrooms, common working spaces, high-speed
                  internet, and all meals included. The location will be in an affordable international destination with
                  great weather and inspiring surroundings perfect for intensive learning.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="after">
              <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                What happens after the 7 days?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-ocean-navy-600">
                  You'll have a working MVP built with AI development tools, a go-to-market strategy, and access to our
                  alumni community. We provide 3 months of follow-up support and ongoing access to our network of
                  entrepreneurs, investors, and AI development experts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when">
              <AccordionTrigger className="text-left font-semibold text-ocean-navy-900">
                When will the founding program take place?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-ocean-navy-600">
                  The founding program is scheduled for late 2025. As a founding member, you'll have input on the exact
                  dates and location selection. We'll work with our founding cohort to ensure the timing and destination
                  work for everyone.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-ocean-navy-900 to-ocean-navy-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/images/laptop_plane_logo.png"
                alt="LaunchedByFriday AI Coding Bootcamp Logo"
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
            © 2024 LaunchedByFriday. All rights reserved. AI Development | MVP Creation | Startup Accelerator
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-ocean-teal-600 to-ocean-teal-500 hover:from-ocean-teal-700 hover:to-ocean-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top of AI coding bootcamp page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
