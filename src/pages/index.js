import React from "react"
import Layout from "../components/Layout"
import Testimonials from "../components/testimonials/Testimonials"
import * as styles from './Index.module.css'
import '@fontsource/poppins/600.css'
import { Link } from "gatsby"
import ClientSlider from "../components/slider/ClientSlider"
import Services from "../components/services/Services"
import About from "../components/about/About"

export default function Home() {

  return (
    <Layout>
      <div>
        <div className={styles.section}>
          <div className={styles.leftContainer}>
            <div className={styles.landingTitle}>Irving Radiology</div>
            <div className={styles.landingSubtitle}>Irving Radiology is a private radiology practice offering imaging interpretations to hospitals, clinics, and providers of all specialties that are tailored to the specific needs of each practice.</div>
            <Link to="/contact" className={styles.contactButton}>contact us</Link>
          </div>
          <img src='/doctor.svg' className={styles.doctorImage} />
          <div className={styles.circle}></div>
        </div>

        <Services/>

        <About/>

        <Testimonials/>

        <ClientSlider/>

      </div>
    </Layout>
  )
}
