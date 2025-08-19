'use client'

import { CheckCircle, Users, Calendar, MessageCircle, BookOpen, Target, ArrowRight, Play, Star, Zap, TrendingUp, Award, Clock, DollarSign, Menu, X, ChevronRight, Code, Database, Brain, Briefcase, FileText, Linkedin, Search, Bot, BarChart3, Globe, Shield, Video, Mail, MapPin, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { useState, lazy, Suspense } from 'react'
import Image from 'next/image'
import ImmigrantNinjaSection from './components/ImmigrantNinjaSection'

// Types for video testimonials
interface VideoData {
  id: string;
  title: string;
}

interface Category {
  title: string;
  videos: VideoData[];
}

// Video Testimonials Component
const VideoTestimonials: React.FC = () => {
  // Group videos by categories so that we can display them in a grid.
  const categories: Category[] = [
    {
      title: 'Webinars & Community Testimonials',
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

  const handleCTAClick = () => {
    window.open('https://wa.me/+16504956282', '_blank')
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
              <span className="text-xl font-bold text-gray-900">Job Help Community</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Features</a>
              <a href="#tracks" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Learning Tracks</a>
              <a href="#workshops" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Workshops</a>
              <a href="#results" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Results</a>
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
                <a href="#features" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a href="#tracks" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Learning Tracks</a>
                <a href="#workshops" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Workshops</a>
                <a href="#results" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Results</a>
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
                  Join Our Private <span className="text-accent-500">Mentorship Community</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-200">
                  Accelerate Your Career with<br />
                  <span className="text-accent-500">1:1 Mentorship, Live Workshops, AI training & 10+ courses</span>
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
                Join thousands of professionals who've accelerated their careers with our proven mentorship program. 
                Get personalized guidance from industry experts and land your dream tech job.
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

        {/* Immigrant Ninja Section */}
        <ImmigrantNinjaSection />

        {/* Five Guarantees Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
                5 Guarantees When You <span className="text-primary-700">Join Our Mentorship</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                These are the five guarantees I'm giving you when you join our mentorship group. 
                There is absolutely nothing better than this in the market and I can guarantee you that.
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
                      10+ In-Depth & Updated Courses
                    </h3>
                    <p className="text-lg text-gray-700">
                      The classroom is full of really exciting updates and very in-depth courses. Anything that you look at is going to be very detailed and updated.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">🤖 AI Landing Pages</div>
                        <div className="text-sm text-gray-600">Complete AI integration guide</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">🚀 AI SaaS Development</div>
                        <div className="text-sm text-gray-600">Build profitable AI SaaS products</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">💻 AI Coding & Tools</div>
                        <div className="text-sm text-gray-600">AI-powered development workflow</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">🔗 LinkedIn Mastery</div>
                        <div className="text-sm text-gray-600">Detailed 10-step course for job seekers</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">⚡ AI Automations</div>
                        <div className="text-sm text-gray-600">Streamline your workflow with AI</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-primary-700">📊 Data Analytics</div>
                        <div className="text-sm text-gray-600">Complete data science bootcamp</div>
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
                      One-on-One Help & Mentorship
                    </h3>
                    <p className="text-lg text-gray-700">
                      Personal help is provided by mentors and me myself. Anything and everything that will help you land a high-paying job.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Weekly Q&A Sessions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Direct DM Access to Mentors</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Live Interactive Workshops</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-gray-700">Personal Career Roadmaps</span>
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
                      I post new jobs every single week. Jobs in tech, non-tech, marketing, product manager roles, software engineering, data analytics, program management - anything and everything that is out there in the market.
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
                      Very detailed resources for making a personalized portfolio, profile, resume templates, cold emailing templates, LinkedIn details. 
                      When I post in this community, the posts are so detailed - you're going to find every single resource out there.
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
                      Weekly Live Workshops with Me
                    </h3>
                    <p className="text-lg text-gray-700">
                      These are absolutely amazing workshops we have every week. We cover jobs, resume, LinkedIn, cold emailing, AI, lots of projects, 
                      and practical learning. I am guaranteeing you that you are going to love this mentorship group.
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

            {/* Call to Action */}
            <div className="text-center mt-16 space-y-6">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-lg mb-6">We have an amazing community and deal going on. You can cancel at any time.</p>
                <button 
                  onClick={handleCTAClick}
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join Our Amazing Community Now
                </button>
              </div>
            </div>
          </div>
        </section>

              {/* Weekly Live Workshops */}
        <section id="workshops" className="bg-gray-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">Weekly Live Workshops</h2>
              <p className="text-xl text-gray-600">Calendar illustrating weekly live workshops schedule</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Powered Job Search Techniques</h3>
                  <p className="text-gray-600">Learn how to leverage AI tools to automate and enhance your job search process.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Resume Building & Cold Outreach</h3>
                  <p className="text-gray-600">Create an ATS-optimized resume and master the art of cold emailing hiring managers.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">LinkedIn Profile Optimization</h3>
                  <p className="text-gray-600">Optimize your LinkedIn profile to attract recruiters and stand out in the tech industry.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Project Portfolio Development</h3>
                  <p className="text-gray-600">Build impressive projects that showcase your skills and attract potential employers.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Technical Interview Preparation</h3>
                  <p className="text-gray-600">Practice coding interviews with peers and receive feedback from experienced mentors.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">SaaS Development with AI Integration</h3>
                  <p className="text-gray-600">Learn to build modern SaaS applications with integrated AI capabilities.</p>
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
                Upskill With <span className="text-primary-700">AI Courses & Live Workshops</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Learn end-to-end AI tooling and workflows to build SaaS, apps, websites and automations that get results.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI SaaS From Scratch</h3>
                  <p className="text-gray-600">Build & deploy profitable AI SaaS products without prior ML knowledge.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">No-Code Automations</h3>
                  <p className="text-gray-600">Automate repetitive tasks across apps like Notion, Slack & Webflow using AI.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Analytics Dashboards</h3>
                  <p className="text-gray-600">Create real-time dashboards & reports powered by LLMs and vector databases.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-First Web Apps</h3>
                  <p className="text-gray-600">Learn full-stack patterns to integrate GPT, Vision & Speech APIs at scale.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Prompt Engineering Mastery</h3>
                  <p className="text-gray-600">Craft robust, context-aware prompts that drive consistent & accurate outputs.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Workflow Orchestration</h3>
                  <p className="text-gray-600">Chain multiple AI services & tools together to build complex workflows.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
             
            </div>
          </div>
        </section>

              {/* Exclusive Features */}
        <section id="features" className="bg-primary-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">
                Exclusive Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get access to premium resources and support designed to accelerate your tech career growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Weekly Live Q&A Sessions</h3>
                  <p className="text-gray-600">
                    Join interactive sessions with FAANG Engineers to get all your technical questions answered.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">24/7 Expert Doubt Resolution</h3>
                  <p className="text-gray-600">
                    Get your doubts resolved anytime by our community of experienced tech professionals.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Resume Reviews</h3>
                  <p className="text-gray-600">
                    Receive detailed feedback on your resume from hiring managers and tech recruiters.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Private Community Access</h3>
                  <p className="text-gray-600">
                    Connect with peers and mentors in our exclusive community chat for networking opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Personalized Career Guidance</h3>
                  <p className="text-gray-600">
                    Get customized roadmaps and strategies tailored to your specific career goals.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Weekly Sessions with FAANG Engineers</h3>
                  <p className="text-gray-600">
                    Learn insider tips and strategies directly from engineers at top tech companies.
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
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900">10+ Detailed Courses included</h2>
              <p className="text-xl text-gray-600">Master both technical skills and career development strategies with our specialized learning paths.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Excellence */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center">Technical Excellence</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Full Stack Web Development (MERN & Next.js)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• HTML, CSS & JavaScript deep dive</li>
                      <li>• React & Next.js advanced patterns</li>
                      <li>• Node.js & Express backend</li>
                      <li>• MongoDB integration & deployment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Data Analytics Complete Mastery</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Data preprocessing & cleaning</li>
                      <li>• Exploratory data analysis</li>
                      <li>• Visualization with Power BI/Tableau</li>
                      <li>• SQL & Python for analytics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Data Structures & Algorithms</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Comprehensive DSA coverage</li>
                      <li>• Problem-solving strategies</li>
                      <li>• Leetcode pattern recognition</li>
                      <li>• Time & space complexity analysis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Introduction to Generative AI</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Transformer architectures</li>
                      <li>• Prompt engineering basics</li>
                      <li>• Building with LLM APIs</li>
                      <li>• Responsible AI & ethics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Career Development */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center">Career Development</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Resume Mastery</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• ATS-optimized templates</li>
                      <li>• Achievement-focused content</li>
                      <li>• Technical skills highlighting</li>
                      <li>• Professional summary writing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">LinkedIn Optimization</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Profile optimization for recruiters</li>
                      <li>• Content strategy for visibility</li>
                      <li>• Connection building tactics</li>
                      <li>• Engagement best practices</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Job Search Automation</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Automated application tools</li>
                      <li>• Job board optimization</li>
                      <li>• Recruiter outreach templates</li>
                      <li>• Interview scheduling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Behavioral Interview Mastery</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• STAR method strategies</li>
                      <li>• Common behavioral questions</li>
                      <li>• Storytelling techniques</li>
                      <li>• Confidence & body language</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">AI Integration for All Backgrounds</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Leveraging AI tools in workflows</li>
                      <li>• No-code automation basics</li>
                      <li>• AI-driven decision making</li>
                      <li>• Ethical considerations</li>
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

        {/* 100s of Success Stories Globally */}
        <section className="bg-gray-50 section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900">100s of Success Stories Globally</h2>
            <p className="text-xl text-gray-600">Real testimonials from our community members who transformed their careers</p>
            
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

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
              <p className="text-lg mb-6">Join hundreds of professionals who have transformed their careers with our mentorship</p>
              <button 
                onClick={handleCTAClick}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Journey
              </button>
            </div>
          </div>
        </section>

        {/* Ready to Transform Your Tech Career */}
        <section className="gradient-bg text-white section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black">
              Ready to Transform Your <span className="text-accent-500">Tech Career?</span>
            </h2>
            
            <p className="text-xl text-gray-200">
              Join thousands of successful members who have accelerated their careers with our mentorship program.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Membership includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Access to all exclusive features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Weekly live sessions with FAANG engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Personalized career guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Resume and LinkedIn profile reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Private community chat access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>15+ Tech courses & 5+ Career tracks</span>
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
              <h3 className="text-2xl font-bold mb-6">Who Can Join Job Help Community?</h3>
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
                © 2024 Job Help Community. Your gateway to tech success with personalized mentorship from industry leaders.
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