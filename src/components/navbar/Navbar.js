import React,{useEffect} from 'react'
import * as styles from './Navbar.module.css'
import { Link } from 'gatsby'

function Navbar() {
  // useEffect(()=>{
  //   const checkScrollPosition = (e) => {
  //     let position = document.scrollingElement.scrollTo
  //     if(position >= 120){
  //       console.log('scrolled')
  //     }
  //   }

  //   document.addEventListener('scroll',checkScrollPosition)
  // },[])

  return (
    <div className={styles.nav}>
        <Link to='/'>
          <img src='https://irvingrad.com/wp-content/uploads/2021/06/Irving-Radilogy-1-removebg-preview.png' className={styles.logo}/>
        </Link>
        <div className={styles.menu}>
          <Link to='/services' style={{textDecoration:'none'}}>
            <div className={styles.menuItem}>services</div>
          </Link>
            <div className={styles.menuItem}>client resources</div>
          <Link to='/blogs' style={{textDecoration:'none'}}>
            <div className={styles.menuItem}>blogs</div>
          </Link>
        </div>
    </div>
  )
}

export default Navbar