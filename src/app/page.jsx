import { Hero } from '@/app/components/Hero/Hero'

import styles from './page.module.scss'



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
    </main>
  )
}
