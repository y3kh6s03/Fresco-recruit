import { Hero } from '@/app/components/Home/Hero/Hero'
import { Message } from '@/app/components/Home/Message/Message'
import { Business } from '@/app/components/Home/Business/Business'
import { Jobs } from '@/app/components/Home/Jobs/Jobs'

import styles from './page.module.scss'



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <Message></Message>
      <Business></Business>
      <Jobs></Jobs>
    </main>
  )
}
