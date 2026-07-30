import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OctaNet Articles",
  description: "Platform for articles and news about network and cybersecurity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8620115090678360"
          crossorigin="anonymous"></script>
      </head>
      <body>
        <header className="layout-header" >
          <div className="header-content">
            <h1 style={{ margin: 0 , color: 'inherit'}}>OctaNet Articles</h1>
            <nav className="header-nav">
              <Link href="/" style={{ color: 'var(--cor-borda2)' }}> Home</Link>
              <Link href="/octanet-group" style={{ color: 'var(--cor-borda2)' }}>OctaNet</Link>
            </nav>
          </div>
          
        </header>
        <div>{children}</div>
        <footer style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <nav>
            <Link href="/sobre" style={{ color: 'var(--cor-texto-principal)', textDecoration: 'none' }}>About | </Link>
            <Link href="/contato" style={{ color: 'var(--cor-texto-principal)', textDecoration: 'none' }}>Contact | </Link>
            <Link href="/privacidade" style={{ color: 'var(--cor-texto-principal)', textDecoration: 'none' }}>Privacy Policy</Link>
          </nav>
          
          <div>
            <p>© {new Date().getFullYear()} OctaNet Articles. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
