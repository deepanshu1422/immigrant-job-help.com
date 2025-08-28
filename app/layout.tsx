import './globals.css'

export const metadata = {
  title: 'Elite Job Hunt Program - Land Your Dream Tech Job',
  description: 'Join our elite job hunt program and get access to weekly live workshops, 24/7 job hunt support, 10+ job-ready courses, and 100+ weekly job postings. Built to land high-paying tech roles.',
  keywords: 'jobs, job hunting, tech careers, resume building, interview prep, LinkedIn optimization, job search, career coaching',
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="//i.ytimg.com" />
        <link rel="preload" href="/photos/test1.jpg" as="image" />
        <link rel="preload" href="/photos/test2.jpg" as="image" />
        <link rel="preload" href="/photos/test3.jpg" as="image" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
} 