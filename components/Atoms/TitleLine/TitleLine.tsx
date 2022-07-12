import React from 'react'
import styles from './TitleLine.module.scss'

interface TitleLinePropss {
  title: string
  customClass?: string
}

const TitleLine = ({ title, customClass} : TitleLinePropss) => {
  return (
    <h2 className={`${customClass ? customClass: ''} ${styles.title}`}>{ title }</h2>
  )
}

export default TitleLine