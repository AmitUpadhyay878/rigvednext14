import React from 'react'
import SmallTitle from '../SmallTitle';
import TitleContent from '@/component/TitleContent';
import styles from './KeyFeatures.module.scss'
import Image from 'next/image';
import leftArt from '@/public/images/features-left.svg'
import rightArt from '@/public/images/features-right.svg'

const KeyFeatures = (
  {
  params={
    title:"Key Features",
    caption:"Unveiling RigvedIT's Key Features",
    desc:"The solution offers an enhanced and uniform user experience for the channel partners – on both the web and mobile applications. Some of its key features include:",
   centerText:"Key Features",
   featureContent:[
    'Manual paperwork and voice based archaic experiences proveto be inefficient',
    'Real-time multi-way communication',
    'Multi-lingual support',
    'Flexible integration between bot and wearable devices',
    'Support offline transactions in areas with poor network connectivity',
    'Push notifications to promote new campaigns and schemes using 6 machine learning algorithm',
    'Enhanced customer experience',
    'Instant data and analytics access to boost network performance',
    'Shipment tracking, order booking and live order status',
    'Analytics dashboards and smart reports'
   ]
}
}) => {
  return (
    <>
      <section className={`${styles.keyFeaturedsection} pt150`}>
        <div className='container'>
          <SmallTitle title={params?.title} />
          <TitleContent
              title={params?.caption}
              content={params?.desc}
          />

          <div className={styles.keyFeaturesCardWrap}>
            <div className={styles.keyFeaturesCardContentWrap}>

              <div className={styles.keyFeaturesCardListCenter}>
                <h3>{params?.centerText}</h3>
              </div>

              <div className={styles.keyFeaturesCardContentWrap}>
                <div className={styles.keyFeaturesCardList}>
                  {
                     params.featureContent?.map((featurecont,i)=>{
                      return(
                        <div className={styles.content} key={i}>
                        <p>{featurecont}</p>
                        <span>{i+1 >=10 ? i+1 :"0"+(i+1)}</span>
                      </div>
                      )
                     })
                  }
                  <Image src={leftArt} alt='Left Art' className={styles.leftArtImg}/>
                  <Image src={rightArt} alt='Right Art' className={styles.rightArtImg}/>
                </div>
              </div>

            </div>
          </div>

        </div>
        <span className={`roundedshadow ${styles.roundedshadow}`}></span>
      </section>
    </>
  )
}

export default KeyFeatures