import React from 'react'
import styles from './ImgCard.module.scss'
import RipBnr from '../../public/images/ripandreplcebanner.webp'
import Image from 'next/image'

const ImgCard = ({cardImage, cardTitle, CardContent}) => {
  return (
    <>
      {cardImage && (
        <section className={`${styles.AboutSolutionSection} pt150`}>
              <div className='container'>
                  <div className={styles.AboutSolutionWapper}>
                        <div className={styles.imageBox}>
                          <Image src={cardImage} alt="Rip Banner"  />
                        </div>

                      {cardTitle && (
                        <div className={styles.content}>
                            <h3>{cardTitle}</h3>

                            {CardContent && (
                              <p>{CardContent}</p>
                            )}

                        </div>
                      )}
                  </div>
              </div>
        </section>
      )}
    </>
  )
}

export default ImgCard
