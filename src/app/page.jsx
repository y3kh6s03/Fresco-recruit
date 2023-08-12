import { Hero } from '@/app/components/Home/Hero/Hero'
import { Message } from '@/app/components/Home/Message/Message'
import { Business } from '@/app/components/Home/Business/Business'
import { Jobs } from '@/app/components/Home/Jobs/Jobs'
import { People } from '@/app/components/Home/People/Peaople'
import { Recruit } from '@/app/components/Home/Recruit/Recruit'

// import styles from './page.module.scss'

import peoples from '@/app/components/Home/People/People.json'
import jobs from '@/app/components/Home/Jobs/Jobs.json'


const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <Message></Message>
      <Business></Business>
      <Jobs jobs={jobs}></Jobs>
      <People peoples={peoples}></People>
      <Recruit></Recruit>
    </main>
  )
}

export default Home;