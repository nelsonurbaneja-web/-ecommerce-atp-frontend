import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import styles from './InputSearch.module.scss'

const InputSearch = () => {
  return (
    <div className={styles.input_search}>
      <input type="text" name="search" id="search" placeholder="Buscar..." />
      <HiOutlineSearch size={20} color="#626262" className={styles.input_search_icon} />
    </div>
  )
}

export default InputSearch