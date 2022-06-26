import React from 'react'
import * as styles from './Footer.module.css'
import {MdPhone,MdEmail,MdLocationOn} from 'react-icons/md'
import '@fontsource/poppins/500.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.companyContainer}>
        <div className={styles.title}>Irving Radiology</div>
        <div className={styles.content}>
        We are a private practice radiology group providing quality comprehensive diagnostic radiology services to a wide range of inpatient and outpatient facilities.
        </div>

        <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <MdPhone className={styles.icon}/>
              <div>239-265-9757</div>
            </div>
            <div className={styles.infoItem}>
              <MdEmail className={styles.icon}/>
              <div>admin@irvingrad.com</div>
            </div>
            <div className={styles.infoItem}>
              <MdLocationOn className={styles.icon}/>
              <div style={{width:'200px'}}>
                4110 Center Pointe Drive Suite 210
                Fort Myers, Florida 33916</div>
            </div>
          </div>
      </div>

      {/* <div className={styles.resourcesContainer}>
        <div className={styles.title}>resources</div>
        <div className={styles.content}>Lorem, ipsum.</div>
        <div className={styles.content}>Lorem, ipsum.</div>
        <div className={styles.content}>Lorem, ipsum.</div>
        <div className={styles.content}>Lorem, ipsum.</div>
        <div className={styles.content}>Lorem, ipsum.</div>
      </div> */}
    </div>
  )
}

export default Footer