import React from 'react'
import styles from "./jobDetails.module.scss";
import JobDetailsBannerImage from '../../../../public/images/job-details-banner.webp'
import Banner from '@/component/Banner';
import ApplicationForm from '@/component/ApplicationForm';
import JobDetailSection from '@/component/JobdetailSection';
const JobDetail = ({params}) => {
  return (
    <main className="noContactform">
        <Banner
        title={"Jobs Details"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
        imagepath={JobDetailsBannerImage['src']}
        btnLink='/'
        
      />
      <JobDetailSection params={params} />
    </main>
  )
}

export default JobDetail