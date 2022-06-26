import React from 'react'
import * as styles from './Blogs.module.css'
import Layout from '../components/Layout'
import { Link } from "gatsby";

function Blogs() {
  return (
    <Layout>
        <div className={styles.blogsContainer}>
            <div className={styles.blog}>
                <div className={styles.content}>
                    <div className={styles.title}>What Is The Importance Of Radiology In Healthcare?</div>
                    <div className={styles.subtitle}>Radiology is also referred to as diagnostic imaging. The procedure includes several tests that...</div>
                    <Link to='/blogPage' style={{textDecoration:'none'}} >
                        <div className={styles.readButton}>Read Article</div>
                    </Link>
                </div>
                <img src="https://irvingrad.com/wp-content/uploads/2022/04/getty_928162118_394536.jpg" className={styles.blogImage}/>
            </div>

            <div className={styles.blog}>
                <div className={styles.content}>
                    <div className={styles.title}>What Is The Importance Of Radiology In Healthcare?</div>
                    <div className={styles.subtitle}>Radiology is also referred to as diagnostic imaging. The procedure includes several tests that...</div>
                    <div className={styles.readButton}>Read Article</div>
                </div>
                <img src="https://irvingrad.com/wp-content/uploads/2022/04/getty_928162118_394536.jpg" className={styles.blogImage}/>
            </div>
        </div>
    </Layout>
  )
}

export default Blogs