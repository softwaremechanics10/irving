import React from 'react'
import * as styles from './About.module.css'
import {BsCheck} from 'react-icons/bs'

function About() {
  return (
    <div className={styles.aboutContainer}>
        <div>
            <div className={styles.title}>About Us</div>
            <div className={styles.aboutus}>
            We are a private radiology group that offers imaging interpretations to hospitals, clinics, and suppliers that are of all specialties which are tailored to the particular needs of every practice. We are a team of the best American Board Certified and fellowship-trained radiologists with the expertise in aiding clinicians and their team with even the foremost advanced cases.
            </div>
            <div className={styles.points}>
                <div className={styles.pointItem}>
                    <BsCheck className={styles.checkIcon}/>
                    <div>Experienced Urgent Care/Acute Care Services</div>
                </div>
                <div className={styles.pointItem}>
                    <BsCheck className={styles.checkIcon}/>
                    <div>Detailed Reports</div>
                </div>
                <div className={styles.pointItem}>
                    <BsCheck className={styles.checkIcon}/>
                    <div>Accurate and Precise</div>
                </div>
                <div className={styles.pointItem}>
                    <BsCheck className={styles.checkIcon}/>
                    <div>Rapid Turnaround Times</div>
                </div>
                <div className={styles.pointItem}>
                    <BsCheck className={styles.checkIcon}/>
                    <div>Quick User Login</div>
                </div>
            </div>
        </div>
        <img src="https://irvingrad.com/wp-content/uploads/2021/07/ct-scan-imgLP.jpg" className={styles.image}/>
    </div>
  )
}

export default About