import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Typing Practice Library — Practice with Literature & Code',
  description: 'Improve your typing speed and accuracy using classic literature, programming documentation, and real code repositories. Built for developers and students.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4b28375c-d142-4ce9-aec9-eae3db0dfb1b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
