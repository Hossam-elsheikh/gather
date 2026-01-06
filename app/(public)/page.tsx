import Comuunities from '@/components/landing/communities/Comuunities'
import { CommunitySlider } from '@/components/landing/Hero/CommunitySlider'
import HeroSection from '@/components/landing/Hero/HeroSection'
import { SlidingIconBar } from '@/components/landing/Hero/SlidingIconBar'


const page = () => {
  return (
    <div className='flex flex-col'>
      <HeroSection/>
      {/* <SlidingIconBar/> */}
      <CommunitySlider/>
      <Comuunities/>
    </div>
  )
}

export default page