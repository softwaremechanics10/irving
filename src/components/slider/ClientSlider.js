import React from 'react'
import * as styles from './Slider.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false
  };

  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false
  };

function ClientSlider() {
  return (
    <div className={styles.clientsContainer}>
      <div className={styles.inpatient}>
        <div className={styles.title}>Inpatient Facilities</div>
        <Slider {...settings3} className={styles.slider}>
              <div style={{textAlign:'center'}}>
                <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-2.png" className={styles.slide}/>
              </div>
              <div>
                <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-2.png" className={styles.slide}/>
              </div>
        </Slider>
      </div>

    <div className={styles.outpatient}>
      <div className={styles.title}>Outpatient</div>
      <Slider {...settings2} className={styles.slider}>
            <div style={{textAlign:'center'}}>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-2.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-2.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-2.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-2.png" className={styles.slide}/>
            </div>
      </Slider>
    </div>

    <div className={styles.partnership}>
      <div className={styles.title}>Partnerships</div>
      <Slider {...settings} className={styles.slider}>
            <div style={{textAlign:'center'}}>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-5.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-5.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-5.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-5.png" className={styles.slide}/>
            </div>
            <div>
              <img src="https://irvingrad.com/wp-content/uploads/2021/06/Untitled-design-5.png" className={styles.slide}/>
            </div>
      </Slider>
    </div>
    </div>
  )
}

export default ClientSlider