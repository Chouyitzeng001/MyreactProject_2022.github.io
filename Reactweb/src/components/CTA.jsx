import React from 'react'
import styles from "../style";
import Button from "./Button";
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shodow`}>
    <div className='flex-1 flex flex-col'>
    <h2 className={styles.heading2}>laboriosam, molestiae architecto repellenA, voluptatem?</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla modi accusantium facilis animi voluptatum aliquid, fuga perspiciatis saepe nam quis nihil tempora ex cumque labore voluptate pariatur, consequatur voluptates?</p>
  </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA