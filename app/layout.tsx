import './globals.css'

export const metadata = {
  title: 'Jobs, Courses, AI, Mentorship - Crack High Paying Jobs',
  description: 'Join our private mentorship group and get access to weekly live workshops, 24/7 DM support, 10+ new courses, and 100+ weekly job postings. Built for students and working professionals.',
  keywords: 'jobs, mentorship, AI courses, tech careers, resume building, interview prep, LinkedIn optimization',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
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