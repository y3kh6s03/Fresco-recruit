import { Hero } from '@/app/components/Hero/Hero'
import { Message } from '@/app/components/Message/Message'
import { Business } from '@/app/components/Business/Business'

import styles from './page.module.scss'



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <Message></Message>
      <Business></Business>
    </main>
  )
}
