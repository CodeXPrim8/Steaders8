'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft, CheckCircle, FileText, Phone } from 'lucide-react'

type Tab = 'upcoming' | 'ongoing'
type Opportunity = 'greenhouse' | 'truck' | 'supermarket'

export default function UpcomingInvestmentPage() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<Tab>('upcoming')
  const [opportunity, setOpportunity] = useState<Opportunity>('greenhouse')

  // When opened with ?tab=ongoing (e.g. from Yam Farming card), show Ongoing tab
  useEffect(() => {
    if (searchParams.get('tab') === 'ongoing') {
      setTab('ongoing')
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/invest#upcoming"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Invest
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Upcoming Investment
          </h1>
          <div className="w-16 h-1 bg-green-600 mb-10" />

          {/* Tabs */}
          <div className="flex gap-1 border-b border-gray-200 mb-10">
            <button
              type="button"
              onClick={() => setTab('upcoming')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                tab === 'upcoming'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming
            </button>
            <button
              type="button"
              onClick={() => setTab('ongoing')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                tab === 'ongoing'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Ongoing
            </button>
          </div>

          {tab === 'ongoing' && (
            <div className="space-y-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Ongoing Investment</h2>
              {/* Yam Farming */}
              <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50/80 to-white p-6 md:p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/yam.png"
                      alt="Steaders8 Yam farming"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Yam Farming</h3>
                    <p className="text-gray-600 mb-6">
                      Invest in Steaders8 yam production. This opportunity is currently open for the 2026 season.
                    </p>
                    <div className="inline-flex flex-col gap-1 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 mb-6">
                      <span className="text-sm font-medium text-amber-800">Investment window closes</span>
                      <span className="text-lg font-bold text-amber-900">8th May 2026</span>
                      <span className="text-sm text-amber-700">for the year 2026</span>
                    </div>
                    {/* Documents */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Proposal & Agreement</h4>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="/documents/steaders8-agreement-yam-farming.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          Agreement (Yam Farming)
                        </a>
                        <a
                          href="/documents/steaders8-proposal-yam-farming.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-green-600 text-green-700 text-sm font-medium hover:bg-green-50 transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                          Proposal (Yam Farming)
                        </a>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Open in a new tab to read or download.</p>
                    </div>
                    {/* Contact */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Interested investors can contact Steaders8 via</span>
                      <a href="tel:08131074911" className="font-semibold text-green-600 hover:text-green-700">08131074911</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'upcoming' && (
            <>
              {/* Opportunity selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {(
                  [
                    { id: 'greenhouse' as const, label: 'Build a Greenhouse' },
                    { id: 'truck' as const, label: 'Purchase a Transport Truck' },
                    { id: 'supermarket' as const, label: 'Steaders8 Greenhouse Supermarket' },
                  ] as const
                ).map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setOpportunity(id)}
                    className={`rounded-lg border-2 px-4 py-3 text-left font-medium transition-colors ${
                      opportunity === id
                        ? 'border-green-600 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-green-300 text-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Greenhouse */}
              {opportunity === 'greenhouse' && (
                <div className="space-y-10">
                  {/* Image grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-md">
                      <Image
                        src="/upcoming/greenhouse-5.png"
                        alt="Steaders8 greenhouse structure"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 280px"
                        unoptimized
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-md">
                      <Image
                        src="/upcoming/greenhouse-6.png"
                        alt="Greenhouse crops and growing area"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 280px"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Build a Greenhouse</h2>
                    <p className="text-gray-600 mb-8">
                      Invest in a new greenhouse and share in the harvest. Choose your tier and enjoy the benefits below.
                    </p>
                    {/* Tier cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Silver */}
                      <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:border-green-200 hover:shadow-md transition-all">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900">Silver</h3>
                          <p className="text-2xl font-bold text-green-600 mt-1">₦5,000,000</p>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Fixed returns
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Harvest share
                          </li>
                        </ul>
                      </div>
                      {/* Gold */}
                      <div className="rounded-xl border-2 border-green-300 bg-green-50/50 p-6 shadow-sm hover:border-green-400 hover:shadow-md transition-all">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900">Gold</h3>
                          <p className="text-2xl font-bold text-green-600 mt-1">₦15,000,000</p>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Everything in Silver
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Lifetime supply of any crop for home consumption
                          </li>
                        </ul>
                      </div>
                      {/* Platinum */}
                      <div className="rounded-xl border-2 border-green-500 bg-green-50/70 p-6 shadow-md hover:border-green-600 hover:shadow-lg transition-all">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900">Platinum</h3>
                          <p className="text-2xl font-bold text-green-600 mt-1">₦35,000,000</p>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Everything in Gold
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Premium harvest share
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            Priority access
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Truck */}
              {opportunity === 'truck' && (
                <div className="space-y-8">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white border border-gray-200">
                    <Image
                      src="/upcoming/truck.png"
                      alt="Steaders8 delivery truck"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 896px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Purchase a Transport Truck</h2>
                    <p className="text-gray-600 mb-6">
                      From ₦8,000,000. Own a share of our logistics fleet and earn from delivery operations.
                    </p>
                    <ul className="space-y-2 text-gray-600 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        Revenue share from delivery operations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        Steaders8 branded vehicle
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Supermarket */}
              {opportunity === 'supermarket' && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src="/upcoming/supermarket.png"
                        alt="Steaders8 Greenhouse Supermarket"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 448px"
                        unoptimized
                      />
                    </div>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src="/upcoming/supermarket2.png"
                        alt="Steaders8 Greenhouse Supermarket interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 448px"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Steaders8 Greenhouse Supermarket</h2>
                    <p className="text-gray-600 mb-6">
                      From ₦10,000,000. Invest in our flagship retail site with rooftop greenhouse and fresh produce.
                    </p>
                    <ul className="space-y-2 text-gray-600 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        Revenue share from supermarket operations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        Direct link to farm-to-table supply
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* WhatsApp CTA - Register interest */}
              <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Interested in investing?</h3>
                <p className="text-gray-600 mb-6">
                  Chat with Steaders8 directly on WhatsApp. Interested investors can reach us via WhatsApp.
                </p>
                <a
                  href="https://wa.me/2348131074911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
