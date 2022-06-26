import React from 'react'
import * as styles from './blogPage.module.css'
import Layout from '../components/Layout';

function blogPage() {
  return (
    <Layout>
        <div className={styles.blogPage}>
            <div className={styles.header}>
                <div className={styles.title}>What Is The Importance Of Radiology In Healthcare?</div>
                <div className={styles.subtitle}>Radiology is also referred to as diagnostic imaging. The procedure includes several tests that...</div>
            </div>

            <div style={{textAlign:'center'}}>
                <img src="https://irvingrad.com/wp-content/uploads/2022/04/getty_928162118_394536.jpg" className={styles.blogImage}/>
            </div>

        </div>
    </Layout>
  )
}

export default blogPage