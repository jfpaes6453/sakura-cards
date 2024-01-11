import { Antic_Didone } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer/Footer'



const antic = Antic_Didone({ weight: ['400'],
subsets: ['latin']})


export const metadata = {
  title: 'Sakura Tarot',
  description: 'Juego de Tarot de Sakura Card Carptors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-bg-color bg-bg-Img bg-cover ${antic.className}`}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}