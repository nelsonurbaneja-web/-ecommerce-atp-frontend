import TitleLine from 'components/Atoms/TitleLine/TitleLine'
import Image from 'next/image'
import React from 'react'
import styles from './GridCars.module.scss'

export const GridCars = () => {
  return (
    <section className={`${styles.grid_images_container}`}>
      <div className="max-width">
        <TitleLine customClass="font-36 c-black bebas mb-25" title="Encuentra lo que necesitas" />
        <div className={styles.grid_images}>
          <Image placeholder="blur" blurDataURL="https://images.unsplash.com/photo-1628578748111-09f0b9ff9827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" src="https://images.unsplash.com/photo-1628578748111-09f0b9ff9827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="toyota" width={500} height={500} objectFit="cover" />
          <Image placeholder="blur" blurDataURL="https://images.unsplash.com/photo-1577436864274-bcd551d82b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" src="https://images.unsplash.com/photo-1577436864274-bcd551d82b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="toyota" width={500} height={500} objectFit="cover"/>
          <Image placeholder="blur" blurDataURL="https://images.unsplash.com/photo-1616096219198-452584a402f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"  src="https://images.unsplash.com/photo-1616096219198-452584a402f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="toyota" width={500} height={500} objectFit="cover"/>
          <Image placeholder="blur" blurDataURL="https://images.unsplash.com/photo-1593699199342-59b40e08f0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" src="https://images.unsplash.com/photo-1593699199342-59b40e08f0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="toyota" width={500} height={500} objectFit="cover"/>
        </div>
      </div>
    </section>
  )
}
