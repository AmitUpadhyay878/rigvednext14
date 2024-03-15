"use client";
import React, { useEffect } from 'react'
import styles from "./JobDetailsBox.module.scss";
import Button from '../Button';
import { useRouter } from 'next/navigation';
const JobDetailsBox = ({opening}) => {
 
    const router = useRouter()
    
    useEffect(()=>{
        if (opening == null || opening?.id == ""){
             router.push("/career")
        }else{
         
        }
    },[])

  return (
    <div className={styles.JobDetailsWrapper}>
        <div className={styles.jobContent}>
            <div className={styles.titleWrap}>
                <div className={styles.icon}>
                    <i className='icon-job-apply'></i>
                </div>
                <h4>{opening?.title}</h4>
            </div>
            <div className={styles.innerDetails}>
                <ul className={styles.companyDetails}>
                    <li>{opening?.industry}</li>
                    <li>{opening?.type}</li>
                    <li>{opening?.city}</li>
                </ul>
            </div>
        </div>
        <Button type='submit' text='Apply' onClick={()=>router.push(`/job-listing/${opening?.slug}`)}/>
    </div>
  )
}

export default JobDetailsBox