import { Hero } from '@/app/Home/Hero/Hero'
import { Message } from '@/app/Home/Message/Message'
import { Business } from '@/app/Home/Business/Business'
import { Jobs } from '@/app/Home/Jobs/Jobs'
import { People } from '@/app/Home/People/Peaople'
import { Recruit } from '@/app/Home/Recruit/Recruit'
import { About } from '@/app/Home/About/About'

import peoples from '@/app/people/People.json'
import jobs from '@/app/Home/Jobs/Jobs.json'


const Home = () => {

  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Message></Message>
      <Business></Business>
      <Jobs jobs={jobs}></Jobs>
      <People peoples={peoples}></People>
      <Recruit></Recruit>
    </main>
  )
}

export default Home;