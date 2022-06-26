import React from 'react'
import Layout from '../components/Layout'
import * as styles from './services.module.css'

function services() {
  return (
    <Layout>
        <div className={styles.services}>
          <div className={styles.servicesTitle}>OUR SERVICES</div>
          <div className={styles.servicesSection}>
            <img src="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className={styles.servicesImage}/>
            <div>
              <div className={styles.serviceHeading}>Radiology Services</div>
              <div className={styles.serviceInfo}>
                Irving Radiology provides knowledgeable interpretations individually tailored for our referring suppliers.
                Irving Radiology is devoted to providing clear, concise, consistent, and accurate diagnostic imaging interpretations. Irving Radiology aims to provide the best services to help you in your practice.
                We also provide clinical consultation services for you to personally see and understand the pertinent findings. Our progressive cloud-based PACS and 24/7 on-line doctor portal access permit seamless and simple integration with your practice with minimal remote setup and no required on-site hardware installation.
                Radiology reports and DICOM images are now conveniently accessible from any internet-connected mobile or desktop device.
              </div>
            </div>
          </div>
          <div className={styles.servicesSection}>      
            <div style={{textAlign:'right'}}>
              <div className={styles.serviceHeading}>Mobile Diagnostic Ultrasound Services</div>
              <div className={styles.serviceInfo}>
                Irving Radiology provides mobile diagnostic ultrasound and echocardiogram services, providing high-quality diagnostic imaging studies for physicians’ offices, urgent care facilities, assisted-living facilities, and skilled nursing facilities in the state of Florida. We understand that many patients are bedbound, therefore our registered diagnostic sonographers will come to you, avoiding the added expense of ambulance transport and the added stress associated with moving critically ill patients.
                <br/><br/>    
                Our sonographers are credentialed in General, Vascular, and Echocardiography examinations by the American Registry of Diagnostic Medical Sonographers.
                <br/><br/>
                Our ultrasound scans include: Abdominal, pelvic, thyroid, breast, scrotal, carotid, upper and lower venous, upper and lower arterial, soft tissue, and echocardiograms. All echocardiograms are interpreted by a board certified cardiologist.
              </div>
            </div>
            <img src="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className={styles.servicesImage}/>
          </div>
        </div>
    </Layout>
  )
}

export default services