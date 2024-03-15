'use client'
import React, { useEffect, useState } from 'react'
import styles from './jobopeninglisting.module.scss'
import Button from '../Button'
import JobDetailsBox from '../JobDetailsBox'
import axios from 'axios'
import Spinner from '../Spinner'

const JobOpeningListing = () => {
    const [isLoading, setIsLoading] = useState(false)
 
    const [response, setResponse] = useState([])
    const[visibleCard,setvisibleCard] =useState(20)


    useEffect(() => {
        setIsLoading(true)
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}job-list`, {
                headers: {
                    'content-type': 'application/json'
                },
                crossdomain: true   
            })
            .then((res) => {
                setResponse(res?.data)
                setIsLoading(false)
            })
    }, [])

    const loadMore = ()=>{
      setvisibleCard(pre=>pre+5)
    } 

    return (
        <section className={`${styles.jobListingSection} pt150 pb150`}>
            <div className="container">
                {isLoading ? (
                    <div className='spinnerWrapsec'>
                        <Spinner />
                    </div>
                ) : (
                    <div className={styles.ListingWrapper}>
                        <div className={styles.jobListings}>
                            {response?.data?.jobs?.length == 0 ? (
                                <div className={styles.LoadMore}>
                                    No Openings yet.
                                </div>
                            ) : (
                                response?.data?.jobs?.slice(0,visibleCard).map((opening, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <JobDetailsBox opening={opening} />
                                        </React.Fragment>
                                    )
                                })
                            )}
                        </div>

                        {
                            visibleCard < response?.data?.jobs?.length &&(
                                <div className={styles.LoadMore}>
                                <Button text="Load More"
                                onClick={loadMore}
                                />
                            </div>
                            )
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobOpeningListing
