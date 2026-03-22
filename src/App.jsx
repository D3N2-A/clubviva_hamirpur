import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import StatsBar from './components/StatsBar'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Recovery from './components/Recovery'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <StatsBar />
        <Facilities />
        <Gallery />
        {/* <Pricing /> */}
        <Recovery />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
