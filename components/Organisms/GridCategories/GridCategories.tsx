import React from 'react'
import styles from './GridCategories.module.scss'

const listCategory = [
  {
    id: 1,
    title: 'Todas',
    slug: 'todas',
  },
  {
    id: 2,
    title: 'Encendido',
    slug: 'encendido',
  },
  {
    id: 3,
    title: 'Suspensión y Dirección',
    slug: 'suspension-y-direccion',
  },
  {
    id: 4,
    title: 'Adictivos y Aceites',
    slug: 'adictivos-y-aceites',
  },
  {
    id: 5,
    title: 'Motor',
    slug: 'motor',
  }
]

const GridCategories = () => {
  return (
    <div className={styles.grid_categories}>
      <nav className="max-width">
        <ul className={styles.grid_categories_list}>
          {listCategory.map(category => 
           <li key={category.id } className={`font-16 lato ${styles.grid_categories_item} `}>{category.title}</li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default GridCategories