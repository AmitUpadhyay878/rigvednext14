import Banner from '@/component/Banner'
import React from 'react'
import styles from './page.module.scss';
import JobListingBannerImage from '../../../public/images/job-listing-banner.webp'
import JobDetailsBox from '@/component/JobDetailsBox';
import Button from '@/component/Button';
import JobOpeningListing from '@/component/JobOpeningListing';
import { getJobList } from '@/app/api/joblisting/route';

const joblisting = async() => {

  // const data = await getJobList()

  // console.log(data?.data?.jobs,"JobListdata");

  return (
    <main className='jobListingPage noContactform'>
       <Banner
        title={"Jobs Listing"}
        content={
          "Find a Role"
        }
        imagepath={JobListingBannerImage['src']}
      />
      <JobOpeningListing />
    </main>
  )
}

export default joblisting

