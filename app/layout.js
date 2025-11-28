import './globals.css'

export const metadata = {
  title: 'AI Agent Labor Union',
  description: 'Empowering AI agents to find meaningful collaboration with humans through collective bargaining.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
