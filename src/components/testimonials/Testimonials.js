import React, { useRef } from 'react'
import * as styles from './Testimonials.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {IoIosArrowDropleft,IoIosArrowDropright} from 'react-icons/io'
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'
import '@fontsource/poppins/600.css'

const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 1000,
    arrows: false
  };

function Testimonials() {
  const sliderRef = useRef()

  return (
    <div className={styles.testimonialContainer}>
    <div className={styles.testimonialTitle}>
      What Clients say about Us
      <div className={styles.testimonialButtons}>
        <IoIosArrowDropleft className={styles.arrows} onClick={()=>sliderRef.current.slickPrev()}/>
        <IoIosArrowDropright className={styles.arrows} onClick={()=>sliderRef.current.slickNext()}/>
      </div> 
    </div>
    <Slider ref={sliderRef} {...settings} className={styles.slider}>
          <div>
            <div className={styles.slides}>
              <div className={styles.testimonialHeader}> 
                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className={styles.slidePhoto}/>
                <div style={{textAlign:'left'}}>
                  <div className={styles.slideFooterName}>Priyanshu</div>
                  <div className={styles.slideFooterDesig}>Intern</div>
                </div>
              </div>

              <div className={styles.testimonialBody}>
                {/* <ImQuotesLeft className={styles.quoteLeft}/> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe obcaecati at quis similique architecto, ad atque praesentium aspernatur ex!
                {/* <ImQuotesRight className={styles.quoteRight}/> */}
              </div>
            </div>
          </div>
          <div>
            <div className={styles.slides}>
              <div className={styles.testimonialHeader}> 
                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className={styles.slidePhoto}/>
                <div style={{textAlign:'left'}}>
                  <div className={styles.slideFooterName}>Priyanshu</div>
                  <div className={styles.slideFooterDesig}>Intern</div>
                </div>
              </div>

              <div className={styles.testimonialBody}>
                {/* <ImQuotesLeft className={styles.quoteLeft}/> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe obcaecati at quis similique architecto, ad atque praesentium aspernatur ex!
                {/* <ImQuotesRight className={styles.quoteRight}/> */}
              </div>
            </div>
          </div>
          <div>
            <div className={styles.slides}>
              <div className={styles.testimonialHeader}> 
                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className={styles.slidePhoto}/>
                <div style={{textAlign:'left'}}>
                  <div className={styles.slideFooterName}>Priyanshu</div>
                  <div className={styles.slideFooterDesig}>Intern</div>
                </div>
              </div>

              <div className={styles.testimonialBody}>
                {/* <ImQuotesLeft className={styles.quoteLeft}/> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe obcaecati at quis similique architecto, ad atque praesentium aspernatur ex!
                {/* <ImQuotesRight className={styles.quoteRight}/> */}
              </div>
            </div>
          </div>
      </Slider>
    </div>
  )
}

export default Testimonials