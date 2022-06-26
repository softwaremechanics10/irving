import React from 'react'
import Layout from '../components/Layout'
import * as styles from './contact.module.css'
import {MdPhone,MdEmail,MdLocationOn} from 'react-icons/md'

function Contact() {
  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.leftContainer}>
          <div>
            <div className={styles.formTitle}>Request For Proposal</div>
            <div className={styles.formSubtitle}>We are available 24/7/365 days. Please feel free to contact.</div>
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
              <div style={{width:'200px'}}>4110 Center Pointe Drive Suite 210
Fort Myers, Florida 33916</div>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.name}>
            <div className={styles.formItem}>
              <div>First Name</div>
              <input type="text" className={styles.nameInput} />
            </div>

            <div className={styles.formItem}>
              <div>Last Name</div>
              <input type="text" className={styles.nameInput} />
            </div>
          </div>

          <div className={styles.formItem}>
            <div>Email</div>
            <input type="text" className={styles.formInput} />
          </div>

          <div className={styles.formItem}>
            <div>Phone</div>
            <input type="text" className={styles.formInput} />
          </div>

          <div className={styles.formItem}>
            <div>Comment or Message</div>
            <textarea rows={3} className={styles.formInput} />
          </div>

          <div style={{textAlign:'right'}}>
            <button className={styles.submitButton} type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact