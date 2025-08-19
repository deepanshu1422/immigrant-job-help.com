'use client'

import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ImmigrantNinjaSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+16504956282', '_blank')
  }

  const handleJoinWaitlist = () => {
    // This could open a form or redirect to a payment page
    handleWhatsAppClick()
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-12 shadow-xl">
          {/* Headline and Guarantee */}
          <div className="text-center space-y-6 mb-12">
            <p className="text-xl text-gray-600">
              By joining today, you lock-in a discounted price of <span className="text-red-600 underline font-bold">$750</span>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Benefits and Pricing */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">What you get:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Weekly Group Q&A calls/week with Aryan and Deepanshu</span>
                    <span className="text-green-600 font-semibold"> ($2000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Learn at your pace modules</span>
                    <span className="text-green-600 font-semibold"> ($2000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Ideal Role Assessment</span>
                    <span className="text-green-600 font-semibold"> ($500 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Resume, Cover Letter and LinkedIn Optimization</span>
                    <span className="text-green-600 font-semibold"> ($2000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Interview Prep + Mock Interview</span>
                    <span className="text-green-600 font-semibold"> ($1000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Salary Negotiation Training</span>
                    <span className="text-green-600 font-semibold"> ($2000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Mindset Training</span>
                    <span className="text-green-600 font-semibold"> ($1000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">Supportive Community + Internal Referrals</span>
                    <span className="text-green-600 font-semibold"> ($1000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900">IOS & Android Apps for 24/7 access to the community</span>
                    <span className="text-green-600 font-semibold"> ($1000 Value)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Secret Job Strategy</span>
                    <span className="text-green-600 font-semibold"> (Priceless)</span>
                  </div>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">Total Value: <span className="text-green-600">$12,500+</span></div>
                    <div className="text-3xl font-black text-red-600">Current Offer $750</div>
                    <div className="text-lg text-gray-600">Soon: $2,000</div>
                  </div>
                  
                  <button 
                    onClick={handleJoinWaitlist}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Join the Waitlist</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  

                </div>
              </div>

              {/* WhatsApp Enquiry */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Have questions? Contact us directly:</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <span>WhatsApp Enquiry</span>
                  <span>📱</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImmigrantNinjaSection
