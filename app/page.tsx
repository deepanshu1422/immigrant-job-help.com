'use client'

import { CheckCircle, Users, Calendar, MessageCircle, BookOpen, Target, ArrowRight, Play, Star, Zap, TrendingUp, Award, Clock, DollarSign, Menu, X, ChevronRight, Code, Database, Brain, Briefcase, FileText, Linkedin, Search, Bot, BarChart3, Globe, Shield, Video, Mail, MapPin, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { useState, lazy, Suspense, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

// Types for video testimonials
interface VideoData {
  id: string;
  title: string;
}

interface Category {
  title: string;
  videos: VideoData[];
}

const DEFAULT_SKOOL_LINK = 'https://www.skool.com/usa-ca-jobs'
const INDIA_CHECKOUT_LINK = 'https://courses.skillsetmaster.com/web/checkout/68255940ba32f8a92f479b34'

// Video Testimonials Component
const VideoTestimonials: React.FC = () => {
  // Group videos by categories so that we can display them in a grid.
  const categories: Category[] = [
    {
      title: 'Latest Job Success Stories',
      videos: [
        { id: 'VmZIF-qzItM', title: 'Latest Job Success 1' },
        { id: 'e0XzrdXvOU8', title: 'Latest Job Success 2' },
        { id: '3Gagdr1l7hk', title: 'Latest Job Success 3' },
        { id: 'YJROZfZs6sI', title: 'Latest Job Success 4' },
        { id: '7O6Vdh6aRQI', title: 'Latest Job Success 5' },
      ],
    },
    {
      title: 'Webinars & Premium Mentorship Program Testimonials',
      videos: [
        { id: 'zLAvp3htFCc', title: 'Testimonial 1' },
        { id: '6AYHcuSAiT4', title: 'Testimonial 2' },
        { id: 'EiobSb1J9dQ', title: 'Testimonial 3' },
        { id: 'BgtCH4wi0GE', title: 'Testimonial 4' },
      ],
    },
    {
      title: 'Tech Courses Testimonials',
      videos: [
        { id: 'QRHjjXYLiTY', title: 'Testimonial 5' },
        { id: 'TMDoXxZkXB0', title: 'Testimonial 6' },
        { id: 'G9vj3c4LqiI', title: 'Testimonial 7' },
        { id: 'wxFVHQ7YVCU', title: 'Testimonial 8' },
      ],
    },
    {
      title: 'AI Courses Testimonials',
      videos: [
        { id: 'om7Gy8h3v6Y', title: 'Testimonial 9' },
        { id: '1YUHfmGVttY', title: 'Testimonial 10' },
        { id: '8PvZdOg_J_s', title: 'Testimonial 11' },
        { id: 'UhWVzfLXjzw', title: 'Testimonial 12' },
      ],
    },
    {
      title: 'Data Analytics Courses Testimonials',
      videos: [
        { id: 'pv1caxgBsek', title: 'Testimonial 13' },
        { id: 's_TbGrjt-0g', title: 'Testimonial 14' },
        { id: '33Pk4TL5ssQ', title: 'Testimonial 15' },
        { id: 'l6FesSRPYbY', title: 'Testimonial 16' },
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900">Video Testimonials</h2>
          <p className="text-xl text-gray-600">Hear directly from our successful mentees about their journey and transformation.</p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.title} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center">{category.title}</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.videos.map((video) => (
                  <div key={video.id} className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [redirectUrl, setRedirectUrl] = useState(DEFAULT_SKOOL_LINK)
  const searchParams = useSearchParams()

  useEffect(() => {
    const country = searchParams.get('country')
    if (country === 'in') {
      setRedirectUrl(INDIA_CHECKOUT_LINK)
    } else {
      setRedirectUrl(DEFAULT_SKOOL_LINK)
    }
  }, [searchParams])

  const handleCTAClick = () => {
    window.open(redirectUrl, '_blank')
  }

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  // Generate workshop dates starting from next Monday
  const generateWorkshopDates = () => {
    const today = new Date()
    const nextMonday = new Date(today)
    
    // Find next Monday
    const daysUntilMonday = (1 + 7 - today.getDay()) % 7
    nextMonday.setDate(today.getDate() + (daysUntilMonday === 0 ? 7 : daysUntilMonday))
    
    const workshops = []
    const times = ['7:00 PM EST', '6:00 PM EST', '5:00 PM EST', '7:00 PM EST', '6:00 PM EST', '11:00 AM EST']
    const attendees = [230, 195, 250, 175, 220, 165]
    
    for (let i = 0; i < 6; i++) {
      const workshopDate = new Date(nextMonday)
      workshopDate.setDate(nextMonday.getDate() + (i * 3)) // Every 3 days
      
      const formattedDate = workshopDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
      
      workshops.push({
        date: `${formattedDate} - ${times[i]}`,
        attending: attendees[i]
      })
    }
    
    return workshops
  }

  const workshopDates = generateWorkshopDates()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Elite Job Hunt Program</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Job Hunt Features</a>
              <a href="#tracks" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Skill Building</a>
              <a href="#workshops" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Live Training</a>
              <a href="#results" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Success Stories</a>
              <button onClick={handleCTAClick} className="btn-primary text-sm">Join Now</button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
                  {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-2 space-y-2">
                <a href="#features" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Job Hunt Features</a>
                <a href="#tracks" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skill Building</a>
                <a href="#workshops" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Live Training</a>
                <a href="#results" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Success Stories</a>
                <button onClick={handleCTAClick} className="btn-primary text-sm w-full mt-2">Join Now</button>
              </div>
            </div>
          )}
      </nav>

      <div className="pt-16">
              {/* Hero Section */}
        <section className="gradient-bg text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto section-padding">
            {/* Video Section - Moved to Top */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/SxA2ZMpyJ7I?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                  Join Our Private <span className="text-accent-500">Elite Job Hunt Program</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-200">
                  Land Your Dream Tech Job with<br />
                  <span className="text-accent-500">End-to-End Job Hunt Support, Live Training & Expert Guidance</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-accent-500 mx-auto mb-2" />
                  <div className="font-bold text-lg">Weekly Live Workshops</div>
                </div>
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-accent-500 mx-auto mb-2" />
                  <div className="font-bold text-lg">Weekly Q&A Sessions</div>
                </div>
                <div className="text-center">
                  <BookOpen className="w-12 h-12 text-accent-500 mx-auto mb-2" />
                  <div className="font-bold text-lg">15+ Tech Courses</div>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-accent-500 mx-auto mb-2" />
                  <div className="font-bold text-lg">5+ Career Tracks</div>
                </div>
              </div>

              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                Join thousands of job seekers who've successfully landed high-paying tech roles through our proven job hunt system. 
                Get complete end-to-end support from application to offer letter.
              </p>

              <div className="space-y-4">
                <button 
                  onClick={handleCTAClick}
                  className="btn-primary text-xl px-8 py-4 mx-auto flex items-center space-x-2"
                >
                  <span>Join Now - Limited Spots Available</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Five Guarantees Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
                5 Guarantees When You <span className="text-primary-700">Join Our Job Hunt Program</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                These are the five guarantees I'm giving you when you join our elite job hunt program. 
                This is the most comprehensive job landing system in the market and I guarantee your success.
              </p>
            </div>

            <div className="space-y-12">
              {/* Guarantee 1: In-Depth Courses */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                      1
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Complete Job Hunt Support System
                    </h3>
                    <p className="text-lg text-gray-700">
                      Get everything you need to land your dream job. From personalized coaching to proven templates - we've got your entire job hunt covered.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">🎯 Job Hunt Mastery</div>
                        <div className="text-sm text-gray-600">End-to-end job landing strategy</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">📄 Resume Mastery</div>
                        <div className="text-sm text-gray-600">ATS-beating resumes that get interviews</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">✉️ Cold Email Mastery</div>
                        <div className="text-sm text-gray-600">80%+ response rate email templates</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">🔗 LinkedIn Mastery</div>
                        <div className="text-sm text-gray-600">Turn LinkedIn into your job magnet</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">💬 24/7 DM Support</div>
                        <div className="text-sm text-gray-600">Direct access to job hunt experts</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">👨‍🏫 Personal Mentors</div>
                        <div className="text-sm text-gray-600">1-on-1 guidance from FAANG engineers</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">🎯 Interview Mastery</div>
                        <div className="text-sm text-gray-600">Ace any interview with confidence</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">💰 Salary Negotiation</div>
                        <div className="text-sm text-gray-600">Negotiate 20-40% higher offers</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">📊 Application Tracking</div>
                        <div className="text-sm text-gray-600">Never miss a follow-up opportunity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee 2: One-on-One Help */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                      2
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Personal Job Hunt Coaching & Support
                    </h3>
                    <p className="text-lg text-gray-700">
                      Get direct access to industry experts who will personally guide your job search. From resume optimization to interview prep - we've got you covered.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Weekly Job Search Strategy Sessions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Direct Access to Job Hunt Coaches</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Live Interview Practice Sessions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Personalized Job Landing Roadmaps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee 3: Weekly Job Postings */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                      3
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Fresh Job Postings Every Week
                    </h3>
                    <p className="text-lg text-gray-700">
                      Every week, I personally curate and share the best job opportunities across tech, data, AI, product management, and engineering. Get first access to hidden job markets before they go public.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl font-bold text-purple-700">🇺🇸 USA</div>
                        <div className="text-sm text-gray-600">Latest opportunities</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl font-bold text-purple-700">🇨🇦 Canada</div>
                        <div className="text-sm text-gray-600">Remote & on-site roles</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl font-bold text-purple-700">🇮🇳 India</div>
                        <div className="text-sm text-gray-600">Growing tech market</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee 4: Detailed Resources */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                      4
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Detailed Resources & Templates
                    </h3>
                    <p className="text-lg text-gray-700">
                      Get battle-tested templates and resources that actually work. From ATS-beating resumes to cold emails with 80%+ response rates. 
                      These are the exact resources that have helped thousands land their dream jobs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <FileText className="w-8 h-8 text-orange-600 mb-2" />
                        <div className="font-semibold text-gray-900">Resume Templates</div>
                        <div className="text-sm text-gray-600">ATS-optimized templates that get interviews</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <Mail className="w-8 h-8 text-orange-600 mb-2" />
                        <div className="font-semibold text-gray-900">Cold Email Templates</div>
                        <div className="text-sm text-gray-600">Proven templates with high response rates</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <Linkedin className="w-8 h-8 text-orange-600 mb-2" />
                        <div className="font-semibold text-gray-900">LinkedIn Optimization</div>
                        <div className="text-sm text-gray-600">Complete profile makeover guides</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <Globe className="w-8 h-8 text-orange-600 mb-2" />
                        <div className="font-semibold text-gray-900">Portfolio Creation</div>
                        <div className="text-sm text-gray-600">Build impressive project portfolios</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee 5: Live Workshops */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                      5
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Weekly Live Job Hunt Workshops
                    </h3>
                    <p className="text-lg text-gray-700">
                      Join our intensive weekly workshops where we practice real job interviews, optimize resumes live, and build job-winning projects. 
                      These hands-on sessions are guaranteed to accelerate your job search by months.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <Video className="w-8 h-8 text-red-600 mb-2" />
                        <div className="font-semibold text-gray-900">Live Interactive Sessions</div>
                        <div className="text-sm text-gray-600">Real-time Q&A and feedback</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <Brain className="w-8 h-8 text-red-600 mb-2" />
                        <div className="font-semibold text-gray-900">AI Deep Dives</div>
                        <div className="text-sm text-gray-600">Practical AI implementation</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <Code className="w-8 h-8 text-red-600 mb-2" />
                        <div className="font-semibold text-gray-900">Hands-on Projects</div>
                        <div className="text-sm text-gray-600">Build real-world applications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 space-y-6">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Land Your Dream Job?</h3>
                <p className="text-lg mb-6">Join our elite job hunt program with proven strategies and guaranteed results. You can cancel at any time.</p>
                <button 
                  onClick={handleCTAClick}
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join Our Elite Job Hunt Program Now
                </button>
              </div>
            </div>
          </div>
        </section>

              {/* Weekly Live Workshops */}
        <section id="workshops" className="bg-gray-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">Weekly Live Job Hunt Workshops</h2>
              <p className="text-xl text-gray-600">Intensive hands-on training sessions to master every aspect of your job search</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Powered Job Application Automation</h3>
                  <p className="text-gray-600">Master AI tools to apply to 100+ jobs per day while maintaining personalization and quality.</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">{workshopDates[0].date}</div>
                    <div className="text-sm font-semibold text-primary-600">{workshopDates[0].attending} attending</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">ATS-Beating Resume & Direct Outreach</h3>
                  <p className="text-gray-600">Build resumes that pass ATS systems and write cold emails that get 80%+ response rates from hiring managers.</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">{workshopDates[1].date}</div>
                    <div className="text-sm font-semibold text-primary-600">{workshopDates[1].attending} attending</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Linkedin className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">LinkedIn Job Hunting Mastery</h3>
                  <p className="text-gray-600">Transform your LinkedIn into a recruiter magnet and use it as your #1 job hunting weapon.</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">{workshopDates[2].date}</div>
                    <div className="text-sm font-semibold text-primary-600">{workshopDates[2].attending} attending</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Job-Winning Portfolio Projects</h3>
                  <p className="text-gray-600">Create portfolio projects that directly lead to job offers and set you apart from 99% of candidates.</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">{workshopDates[3].date}</div>
                    <div className="text-sm font-semibold text-primary-600">{workshopDates[3].attending} attending</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Interview Mastery & Salary Negotiation</h3>
                  <p className="text-gray-600">Master both technical and behavioral interviews, then negotiate offers like a pro to maximize your compensation.</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">{workshopDates[4].date}</div>
                    <div className="text-sm font-semibold text-primary-600">{workshopDates[4].attending} attending</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Build Hire-Worthy AI Projects</h3>
                  <p className="text-gray-600">Create impressive AI-powered applications that demonstrate cutting-edge skills employers are desperately seeking.</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">{workshopDates[5].date}</div>
                    <div className="text-sm font-semibold text-primary-600">{workshopDates[5].attending} attending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              {/* Upskill With AI Courses */}
        <section id="tracks" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
                Master <span className="text-primary-700">Job-Ready Skills & Live Training</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Build the exact technical skills that employers are hiring for right now. Every course is designed to make you job-ready and interview-confident.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Job-Winning AI Projects</h3>
                  <p className="text-gray-600">Build impressive AI applications that demonstrate cutting-edge skills employers desperately need.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Productivity Automations</h3>
                  <p className="text-gray-600">Master automation tools that make you 10x more productive than other candidates.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Data Skills for Every Role</h3>
                  <p className="text-gray-600">Build analytics dashboards and data visualizations that wow employers in every industry.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Modern Web Development</h3>
                  <p className="text-gray-600">Build full-stack applications with the latest technologies that companies actually use.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Skills for Every Job</h3>
                  <p className="text-gray-600">Master AI tools and techniques that make you irreplaceable in any tech role.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">System Design & Architecture</h3>
                  <p className="text-gray-600">Learn to design scalable systems that impress interviewers and land senior roles.</p>
                </div>
              </div>
            </div>

            {/* <div className="text-center mt-12">
             
            </div> */}
          </div>
        </section>

              {/* Exclusive Features */}
        <section id="features" className="bg-primary-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
                Elite Job Hunt Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get access to premium job hunting resources and support designed to land you high-paying tech roles faster.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Weekly Job Hunt Strategy Sessions</h3>
                  <p className="text-gray-600">
                    Get your job search questions answered by FAANG engineers who've been through the hiring process.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">24/7 Job Hunt Support</h3>
                  <p className="text-gray-600">
                    Get instant help with resumes, applications, interviews, and negotiations from our job hunt experts.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Resume Reviews by Actual Hiring Managers</h3>
                  <p className="text-gray-600">
                    Get your resume reviewed by real hiring managers who know exactly what gets candidates hired.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Private Job Hunt Community Access</h3>
                  <p className="text-gray-600">
                    Network with successful job hunters and get referrals through our exclusive community of tech professionals.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Personalized Job Landing Strategy</h3>
                  <p className="text-gray-600">
                    Get a custom job hunt roadmap tailored to your target roles and current skill level.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Weekly Sessions with FAANG Hiring Insiders</h3>
                  <p className="text-gray-600">
                    Get insider knowledge of hiring processes and what actually gets you hired at top companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

              {/* Proven Results */}
        <section id="results" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600">
                Our members consistently achieve remarkable career milestones and land positions at top tech companies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-primary-700">100+</div>
                <div className="text-gray-600">Monthly Job Offers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-primary-700">90%</div>
                <div className="text-gray-600">Interview Success Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-primary-700">500+</div>
                <div className="text-gray-600">Career Transitions</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-primary-700">10,000+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
            </div>

          </div>
        </section>

       

        {/* 10+ Detailed Courses included */}
        <section className="bg-primary-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">10+ Job-Ready Training Programs</h2>
              <p className="text-xl text-gray-600">Master the exact skills that get you hired with our proven job-focused training programs.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Excellence */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center">In-Demand Technical Skills</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Job-Ready Full Stack Development</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Build portfolio projects that land interviews</li>
                      <li>• Master React, Next.js & modern frameworks</li>
                      <li>• Deploy production-ready applications</li>
                      <li>• Create impressive GitHub portfolio</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">High-Paying Data Analytics Skills</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Master SQL for 6-figure data roles</li>
                      <li>• Python data analysis that impresses</li>
                      <li>• Build dashboards that wow employers</li>
                      <li>• Analytics projects that get job offers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Interview-Winning DSA Mastery</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ace technical interviews at top companies</li>
                      <li>• Master FAANG-level problem solving</li>
                      <li>• LeetCode patterns that guarantee success</li>
                      <li>• System design for senior roles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">AI Skills That Get You Hired</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Build AI applications employers need</li>
                      <li>• Master ChatGPT, Claude & cutting-edge tools</li>
                      <li>• Create AI-powered portfolio projects</li>
                      <li>• Stay ahead of the AI job market</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Career Development */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center">Job Hunt Mastery</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">ATS-Beating Resume Mastery</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Resumes that pass all ATS systems</li>
                      <li>• Templates with 95%+ interview rates</li>
                      <li>• Quantify achievements like a pro</li>
                      <li>• Stand out from 1000+ applicants</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">LinkedIn Job Hunting Weapon</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Turn LinkedIn into your personal recruiter</li>
                      <li>• Get 5+ recruiter messages per week</li>
                      <li>• Network your way to hidden jobs</li>
                      <li>• Content that attracts dream employers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Job Application Automation</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Apply to 100+ jobs per day efficiently</li>
                      <li>• Automate without sacrificing quality</li>
                      <li>• Track applications like a pro</li>
                      <li>• Never miss follow-up opportunities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Interview Mastery & Salary Negotiation</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ace any interview with confidence</li>
                      <li>• Stories that wow every interviewer</li>
                      <li>• Negotiate 20-40% higher salaries</li>
                      <li>• Turn interviews into multiple offers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Job Hunt Arsenal</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Use AI to dominate your job search</li>
                      <li>• Automate repetitive application tasks</li>
                      <li>• AI-generated cover letters that work</li>
                      <li>• Stay ahead in the AI-driven job market</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <Suspense fallback={
          <section className="bg-gray-50 section-padding">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8 mb-16">
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900">Video Testimonials</h2>
                <p className="text-xl text-gray-600">Loading testimonials...</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-video rounded-2xl bg-gray-200 animate-pulse"></div>
                ))}
              </div>
            </div>
          </section>
        }>
          <VideoTestimonials />
        </Suspense>

        {/* Weekly Job Postings Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900">Weekly Job Postings</h2>
            <h3 className="text-2xl font-bold text-gray-700">Fresh Job Opportunities Every Week</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Stop scrolling endless job boards. We scour the entire internet, vet the best tech roles, and drop a curated list of opportunities every single week—so you never miss out.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-primary-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Hand-picked roles across software, data, AI, product & more.</h4>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8 text-primary-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Remote & on-site positions from companies worldwide.</h4>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-primary-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Delivered straight to your inbox every Monday morning.</h4>
                </div>
              </div>
            </div>
            
           
          </div>
        </section>

        {/* New WhatsApp Testimonials */}
        <section className="bg-white section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900">Latest Success Stories</h2>
            <p className="text-xl text-gray-600">Recent job offers and career wins from our community members</p>
            
            {/* Grid of New Testimonial Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {[
                'WhatsApp Image 2025-08-28 at 10.49.46.jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.46 (1).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.46 (2).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.46 (3).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.46 (4).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.46 (5).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.46 (6).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.47.jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.47 (1).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.47 (2).jpeg',
                'WhatsApp Image 2025-08-28 at 10.49.47 (3).jpeg'
              ].map((imageName, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                  onClick={() => openImageModal(`/new-testimonials/${imageName}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/new-testimonials/${imageName}`}
                      alt={`Latest Success Story ${i + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 100s of Success Stories Globally */}
        <section className="bg-gray-50 section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900">100s of Job Hunt Success Stories</h2>
            <p className="text-xl text-gray-600">Real job offers and career transformations from our job hunt program members who landed their dream roles</p>
            
            {/* Grid of Success Story Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {[
                'test1.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg', 'test5.jpg',
                'test6.jpg', 'test7.jpg', 'test8.jpg', 'test9.jpg', 'test10.jpg',
                'test11.jpg', 'test12.jpg', 'test13.jpg', 'test14.jpg', 'test15.jpg'
              ].map((imageName, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openImageModal(`/photos/${imageName}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/photos/${imageName}`}
                      alt={`Success Story ${i + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Success Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">$85K</div>
                <div className="text-gray-600">Average Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-2">30+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Job Hunt Success?</h3>
              <p className="text-lg mb-6">Join hundreds of job seekers who have landed their dream roles with our proven job hunt system</p>
              <button 
                onClick={handleCTAClick}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Job Hunt Journey
              </button>
            </div>
          </div>
        </section>

        {/* Ready to Transform Your Tech Career */}
        <section className="gradient-bg text-white section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black">
              Ready to Land Your <span className="text-accent-500">Dream Tech Job?</span>
            </h2>
            
            <p className="text-xl text-gray-200">
              Join thousands of successful job hunters who have landed high-paying tech roles through our proven job hunt system.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Your Job Hunt Arsenal includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Complete job hunt support system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Weekly job hunt strategy sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Personalized job landing roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ATS-beating resume & LinkedIn optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Private job hunt community access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>15+ Job-ready skills & interview mastery</span>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-accent-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 inline-block">
                  Limited-time offer
                </div>
                <div className="text-2xl font-bold text-accent-500 mb-2">Get 20% off your first month</div>
              </div>
            </div>

            <div className="space-y-6">
              <button 
                onClick={handleCTAClick}
                className="btn-primary text-2xl px-12 py-6 mx-auto flex items-center space-x-3"
              >
                <span>Join Now</span>
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>

            {/* Who Can Join */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mt-12">
              <h3 className="text-2xl font-bold mb-6">Who Can Join Our Elite Job Hunt Program?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold">Students & Graduates</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold">Career Switchers</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold">Tech Professionals</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold">Aspiring Developers</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold">Data Enthusiasts</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-sm">Need help? DM us anytime! 💬</div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-gray-400">
                © 2024 Elite Job Hunt Program. Your gateway to landing high-paying tech roles with proven job hunt strategies from industry insiders.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Success Story - Enlarged"
              width={1200}
              height={1200}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
} 