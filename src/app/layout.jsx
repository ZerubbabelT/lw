import '../styles.css'
import { Lato, Open_Sans } from 'next/font/google'
import Layout from '../components/Layout'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Kebede Advocates — Addis Ababa',
  description:
    'Kebede Advocates is an Addis Ababa law firm advising on foreign investment, mergers and acquisitions, mining and energy, banking, intellectual property, employment, tax and dispute resolution.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${openSans.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
