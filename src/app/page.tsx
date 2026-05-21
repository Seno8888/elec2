import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import APropos from '@/components/APropos'
import Avis from '@/components/Avis'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <APropos />
        <Avis />
        <Contact />
      </main>
      <Footer />
      <a
        href="tel:+33600000000"
        className="cta-float fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[200] bg-indigo-600 text-white rounded-[50px] px-5 py-3.5 font-bold text-[14px] cursor-pointer hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-200"
      >
        Urgence 24h/24
      </a>
    </>
  )
}
