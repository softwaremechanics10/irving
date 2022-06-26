import React from 'react'
import * as styles from './Services.module.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const services = [
    'Experienced Urgent Care/Acute Care Services',
    'Detailed Reports',
    'Accurate and Precise',
    'Rapid Turnaround Times',
    'Quick User Login'
]

function Services() {
  return (
    <div className={styles.stats}>
    <div className={styles.title}>
        Our Stats show that we've Happy Patients
    </div>
    <div className={styles.statsInner}>
        <div className={styles.statsItem}>
            <div className={styles.statsItemTitle}>150000</div>
            <div className={styles.statsItemSubtitle}>Cases Read</div>
        </div>
        <div className={styles.statsItem}>
            <div className={styles.statsItemTitle}>99%</div>
            <div className={styles.statsItemSubtitle}>Accuracy</div>
        </div>
        <div className={styles.statsItem}>
            <div className={styles.statsItemTitle}>19.50 <span style={{fontSize:'3.5vh'}}>minutes</span></div>
            <div className={styles.statsItemSubtitle}>Average Turn Around Time</div>
        </div>
    </div>
    {/* <div className={styles.services}>
        <div>
            {
                services.map(item => {
                    return (
                        <div className={styles.serviceItem}>
                            <BsCheckCircleFill className={styles.checkIcon}/>
                            <div>{item}</div>
                        </div>
                    )
                })
            }
        </div>

        <div className={styles.serviceTitle}>Our Services</div>
    </div> */}
    </div>
  )
}

export default Services