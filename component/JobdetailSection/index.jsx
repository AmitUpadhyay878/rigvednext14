'use client'
import React, { useEffect, useState } from 'react'
import styles from './jobdetailsection.module.scss'
import axios from 'axios'
import CongratulationModal from '../CongratulationModal'
import InputText from '../InputText'
import Button from '../Button'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Spinner from '../Spinner'
const JobDetailSection = ({ params }) => {
    const handlejobApplicationHandle = yup.object().shape({
        name: yup
            .string()
            .trim()
            .required('Please enter your name')
            .max(35, 'your name must be at most 35 characters long'),
        email: yup
            .string()
            .email('Please enter valid email address')
            .required('Please enter email'),
        mobile_number: yup
            .string()
            .required('Please enter mobile no.')
            .min(8, 'Mobile Number must be at minimum 8 digit long')
            .max(15, 'Mobile Number must be at most 15 digit long'),
        resume: yup.mixed()
        .test("fileType", "Please select only .pdf, .doc or .docx", (file) => {
        const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
          if ( file && allowedFileTypes.includes(file.type)) {
            return true;
          }
          return false;
        }).required("Please select file"),
        cover: yup.mixed()
        .test("fileType", "Please select only .pdf, .doc or .docx", (file) => {
        const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
          if ( !file || file && allowedFileTypes.includes(file.type)) {
            return true;
          }
          return false;
        }),
    })

    const [modal, setmodal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState('')

    const {
        register,
        handleSubmit,
        control,
        reset,
        setError,
        formState: { errors },
        watch
    } = useForm({
        mode: 'all',
        defaultValues: { resume: null },
        resolver: yupResolver(handlejobApplicationHandle)
    })

    useEffect(() => {
        setIsLoading(true)
        axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}job-detail`,
                { slug: params?.jobdetail },
                {
                    headers: {
                        'content-type': 'application/json'
                    },
                    crossdomain: true
                }
            )
            .then((res) => {
                setResponse(res?.data)
                setIsLoading(false)
            })
    }, [])

    const handleJobAppication = (data) => {
        const formData = new FormData()

        formData.append('name', data?.name)
        formData.append('email', data?.email)
        formData.append('mobile_number', data?.mobile_number)
        formData.append('linkedin_profile', data?.linkedin_profile)
        formData.append('resume', data?.resume)
        formData.append('cover', data?.cover)
        formData.append('slug', params?.jobdetail)

        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}job-apply`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                crossdomain: true
            })
            .then((res) => {
                reset({
                    name: '',
                    email: '',
                    mobile_number: '',
                    linkedin_profile: '',
                    resume: '',
                    cover: ''
                })

                if (res?.data?.meta?.status == 0) {
                    toast.error(res?.data?.meta?.message, {
                        position: 'top-right'
                    })
                } else {
                    setmodal(true)
                }
            })
            .catch((err) => {
                setError('name', err.message)
                console.log(err, 'Catch')
            })
    }

    console.log(response,"response");

    return (
        <>
            <section className={`${styles.JobDetailsSection} pt100`}>
                <div className="container">
                    {/* {isLoading ? (
                        <div className='spinnerWrapsec'>
                            <Spinner />
                        </div>
                    ) : ( */}
                        <div className={styles.JobDetailsWrapper}>
                            <div className={styles.jobDetailBox}>
                                {
                                isLoading ?
                        <div className='spinnerWrapsec'>
                            <Spinner />
                        </div>
                                :
                                (
                                <>
                                <div className={styles.jobDescriptionBox}>
                                    {/* <h2>Qualification</h2> */}
                                <div className={styles.detailsContent}
                                    dangerouslySetInnerHTML={{
                                        __html: response?.data?.description
                                    }}
                                />
                                </div>
                                <div className={styles.jobDescriptionBox}>
                                {/* <h2>Roles & Responsibilities </h2> */}
                                <div className={styles.detailsContent}
                                    dangerouslySetInnerHTML={{
                                        __html: response?.data?.roles_and_responsibilities
                                    }}
                                />
                                </div>
                                </>
                              )
                             }

                            </div>
                            <div className={styles.CompanyDetails}>
                                <div className={styles.CompanyDetailswrap}>
                                    <div className={styles.icon}>
                                        <i className="icon-job-apply"></i>
                                    </div>
                                    <div className={styles.content}>
                                        <h5>Work area(s)</h5>
                                        <span>{response?.data?.industry}</span>
                                    </div>
                                </div>
                                <div className={styles.CompanyDetailswrap}>
                                    <div className={styles.icon}>
                                        <i className="icon-self-employed"></i>
                                    </div>
                                    <div className={styles.content}>
                                        <h5>Employment type</h5>
                                        <span>{response?.data?.type}</span>
                                    </div>
                                </div>
                                <div className={styles.CompanyDetailswrap}>
                                    <div className={styles.icon}>
                                        <i className="icon-location"></i>
                                    </div>
                                    <div className={styles.content}>
                                        <h5>Location(s)</h5>
                                        <span>{response?.data?.city}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            {/* ApplicationForm */}
            <section className={`${styles.applicationSection} pb150`} id='contactform'>
                <div className="container">
                    <div className={styles.applicationFormWrapper}>
                        <div className={styles.titleWrapper}>
                            <h3 className="h3 gradientText">
                                Application form
                            </h3>
                            <p>
                                To create a new online application account,
                                enter your personal details below. Your e-mail
                                address should be readily accessible since our
                                main method of contact with you will be via
                                e-mail.
                            </p>
                        </div>
                        <form
                            onSubmit={handleSubmit(handleJobAppication)}
                            encType="multipart/form-data"
                        >
                            <div className={styles.formRow}>
                                <div className={styles.formCols}>
                                    <label htmlFor="name">Your Name</label>
                                    <InputText
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        register={register}
                                        error={errors?.name?.message}
                                    />
                                </div>
                                <div className={styles.formCols}>
                                    <label htmlFor="linkedin_profile">
                                        LinkedIn Profile (optional)
                                    </label>
                                    <InputText
                                        type="text"
                                        name="linkedin_profile"
                                        id="linkedin_profile"
                                        register={register}
                                        placeholder="Add Here"
                                    />
                                </div>
                                <div className={styles.formCols}>
                                    <label htmlFor="email">Email Address</label>
                                    <InputText
                                        type="email"
                                        name="email"
                                        id="email"
                                        register={register}
                                        placeholder="Email Address"
                                        error={errors?.email?.message}
                                    />
                                </div>
                                <div className={styles.formCols}>
                                    <label htmlFor="mobile_number">
                                        Phone Number
                                    </label>
                                    <InputText
                                        type="number"
                                        name="mobile_number"
                                        id="mobile_number"
                                        register={register}
                                        placeholder="Phone Number"
                                        error={errors?.mobile_number?.message}
                                    />
                                </div>
                                <div className={styles.formCols}>
                                    <label htmlFor="resume">Resume</label>

                                    <Controller
                                        render={({
                                            field: {
                                                onChange,
                                                onBlur,
                                                value,
                                                name,
                                                ref
                                            },
                                            fieldState: {
                                                invalid,
                                                isTouched,
                                                isDirty,
                                                error
                                            }
                                        }) => (
                                            <input
                                                // value={value}
                                                type="file"
                                                id="resume"
                                                multiple=""
                                                name="resume"
                                                accept=".pdf,.doc,.docx"
                                                placeholder="Choose file*"
                                                onChange={(e) =>
                                                    onChange(e.target.files[0])
                                                }
                                            />
                                        )}
                                        name="resume"
                                        control={control}
                                    />
                                    {errors?.resume?.message && (
                                        <span className="errorMsg">
                                            {errors?.resume?.message}
                                        </span>
                                    )}
                                    {errors.resume?.type === 'validate' && (
                                        <p className="errorMsg">
                                            File must be a PDF or DOC
                                        </p>
                                    )}
                                </div>
                                <div className={styles.formCols}>
                                    <label htmlFor="cover">
                                        Cover Latter (optional)
                                    </label>

                                    <Controller
                                        render={({
                                            field: {
                                                onChange,
                                                onBlur,
                                                value,
                                                name,
                                                ref
                                            },
                                            fieldState: {
                                                invalid,
                                                isTouched,
                                                isDirty,
                                                error
                                            }
                                        }) => (
                                            <input
                                                // value={value}
                                                type="file"
                                                id="cover"
                                                multiple=""
                                                name="cover"
                                                accept=".pdf,.doc,.docx"
                                                placeholder="Choose file*"
                                                onChange={(e) =>
                                                    onChange(e.target.files[0])
                                                }
                                            />
                                        )}
                                        name="cover"
                                        control={control}
                                    />
                                    {errors?.cover?.message && (
                                        <span className="errorMsg">
                                            {errors?.cover?.message}
                                        </span>
                                    )}
                                    {errors.cover?.type === 'validate' && (
                                        <p className="errorMsg">
                                            File must be a PDF or DOC
                                        </p>
                                    )}
                                </div>
                                <div
                                    className={`${styles.formCols} ${styles.formSubmit}`}
                                >
                                    <Button
                                        type="submit"
                                        text="Submit Application"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <CongratulationModal modal={modal} setmodal={setmodal} />
            </section>
        </>
    )
}

export default JobDetailSection
