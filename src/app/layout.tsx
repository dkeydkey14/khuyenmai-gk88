import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trung Tâm Khuyến Mãi GK88',
  description: 'Khám phá những ưu đãi hấp dẫn tại GK88',
  icons: {
    icon: '/images/GK88.png',
    apple: '/images/GK88.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* Favicon - chỉ sử dụng GK88.png */}
        <link rel="icon" href="/images/GK88.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/GK88.png" />
        <meta name="msapplication-TileColor" content="#FB923C" />
        <meta name="theme-color" content="#FB923C" />
        
        {/* Google Analytics - sử dụng dangerouslySetInnerHTML để chèn script trực tiếp */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WXCZ7VS380"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WXCZ7VS380');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
