import Hero from './Hero.jsx'
import AboutSection from './AboutSection.jsx'
import AdventureSection from './AdventureSection.jsx'
import DestinationsSection from './DestinationsSection.jsx'
import VideoSection from './VideoSection.jsx'
import QuoteBand from './QuoteBand.jsx'
import PartnersSection from './PartnersSection.jsx'
import CtaBand from './CtaBand.jsx'

export default function HomePage({ heroRevealed }) {
  return (
    <>
      <Hero revealed={heroRevealed} />
      <DestinationsSection />
      <AdventureSection />
      <VideoSection />
      <AboutSection />
      <QuoteBand />
      <PartnersSection />
      <CtaBand />
    </>
  )
}
