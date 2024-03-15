'use client'
import React, { useState } from 'react'
import styles from './contactform.module.scss'
import InputText from '../InputText'
import Button from '../Button'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ContactForm = () => {
    const handleContactusSchema = yup.object().shape({
        name: yup
            .string()
            .trim()
            .required('Please enter your full name')
            .max(35, 'Full name must be at most 35 characters long'),
        email: yup
            .string()
            .email('Please enter valid email address')
            .required('Please enter email'),
        mobile_number: yup
            .string()
            .required('Please enter mobile no.')
            .min(8, 'Mobile Number must be at minimum 8 digit long')
            .max(15, 'Mobile Number must be at most 15 digit long'),
        company_name: yup.string().required('Please enter company name'),
        interested_in: yup.string().required('Please enter your interest'),
        attachment: yup.mixed()
        .test("fileType", "Please select only .pdf, .doc or .docx", (file) => {
        const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
          if ( !file || file && allowedFileTypes.includes(file.type)) {
            return true;
          }
          return false;
        }),
        message: yup
            .string()
            .required('Please enter your message')
            .trim()
            .test('message-validation', 'Invalid message', function (value) {
                if (value) {
                    if (value.length < 5) {
                        return this.createError({
                            path: 'message',
                            message:
                                'message must be at least 5 characters long'
                        })
                    } else if (value.length > 500) {
                        return this.createError({
                            path: 'message',
                            message:
                                'message must be at most 500 characters long'
                        })
                    }
                }
                // If description is empty, it's considered valid
                return true
            }),
        website_link: yup
            .string()
            .url('Please enter valid URL')
            .required('Please enter your website link')
    })

    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        formState: { errors }
    } = useForm({ resolver: yupResolver(handleContactusSchema) })

    const handleContactus = (data) => {

        const formData = new FormData()

        formData.append('name', data?.name)
        formData.append('email', data?.email)
        formData.append('mobile_number', data?.mobile_number)
        formData.append('message', data?.message)
        formData.append('interested_in', data?.interested_in)
        formData.append('company_name', data?.company_name)
        formData.append('website_link', data?.website_link)
        formData.append('attachment', data?.attachment)

        axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}contact-us`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            crossdomain: true
        })
        .then((res) => {

            reset({
                name:"",
                email:"",
                mobile_number:"",
                message:"",
                interested_in:"",
                company_name:"",
                website_link:"",
                attachment:""
            })

            if (res?.data?.meta?.status == 0) {
                toast.error(res?.data?.meta?.message, {
                    position: 'top-right'
                })
            } else {
                toast.success(res?.data?.meta?.message, {
                    position: 'top-right'
                })
            }
        })
        .catch((err) => {
            setError('name', err.message)
            console.log(err, 'Catch')
        })




        // try {
        //     if (
        //         data?.attachement != '' ||
        //         data?.attachement != null ||
        //         data?.attachement != 'undefined'
        //     ) {
        //         axios
        //             .post(
        //                 `${process.env.NEXT_PUBLIC_BACKEND_URL}contact-us`,
        //                 {
        //                     name: data?.name,
        //                     email: data?.email,
        //                     mobile_number: data?.mobile_number,
        //                     message: data?.message,
        //                     interested: data?.interested,
        //                     company_name: data?.company_name,
        //                     website_link: data?.website_link,
        //                     attachement: data?.attachement
        //                 }
        //                 // {
        //                 //     headers: {
        //                 //         'content-type': 'application/json'
        //                 //     },
        //                 //     crossdomain: true
        //                 // }
        //             )
        //             .then((res) => {
        //                 // router.push(
        //                 //     {
        //                 //         pathname: '/thank-you',
        //                 //         query: { name: 'success' }
        //                 //     },
        //                 //     '/thank-you'
        //                 // )

        //                 if (res?.data?.meta?.status == 0) {
        //                     toast.error(res?.data?.meta?.message, {
        //                         position: 'top-right'
        //                     })
        //                 } else {
        //                     toast.success(res?.data?.meta?.message, {
        //                         position: 'top-right'
        //                     })
        //                 }
        //                 reset({
        //                     name: '',
        //                     email: '',
        //                     mobile_number: '',
        //                     message: '',
        //                     interested: '',
        //                     company_name: '',
        //                     website_link: '',
        //                     attachement: null
        //                 })
        //             })
        //             .catch((err) => {
        //                 console.log(err)
        //             })
        //     } else {
        //         axios
        //             .post(
        //                 `${process.env.NEXT_PUBLIC_BACKEND_URL}contact-us`,
        //                 {
        //                     name: data?.name,
        //                     email: data?.email,
        //                     mobile_number: data?.mobile_number,
        //                     message: data?.message,
        //                     interested: data?.interested,
        //                     company_name: data?.company_name,
        //                     website_link: data?.website_link,
        //                     attachement: ''
        //                 }
        //                 // {
        //                 //     headers: {
        //                 //         'content-type': 'application/json'
        //                 //     },
        //                 //     crossdomain: true
        //                 // }
        //             )
        //             .then((res) => {
        //                 // router.push(
        //                 //     {
        //                 //         pathname: '/thank-you',
        //                 //         query: { name: 'success' }
        //                 //     },
        //                 //     '/thank-you'
        //                 // )

        //                 if (res?.data?.meta?.status == 0) {
        //                     toast.error(res?.data?.meta?.message, {
        //                         position: 'top-right'
        //                     })
        //                 } else {
        //                     toast.success(res?.data?.meta?.message, {
        //                         position: 'top-right'
        //                     })
        //                 }
        //                 reset({
        //                     name: '',
        //                     email: '',
        //                     mobile_number: '',
        //                     message: '',
        //                     interested: '',
        //                     company_name: '',
        //                     website_link: '',
        //                     attachement: null
        //                 })
        //             })
        //             .catch((err) => {
        //                 console.log(err)
        //             })
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    // const validateFile = (file) => {

    //      const allowedFileTypes = [
    //     'application/pdf',
    //     'application/docx',
    //     'application/doc'
    // ]

    // if (file && allowedFileTypes.includes(file[0].type)) {
    //     return true; // Valid file type
    //   }
    //   return false; // Invalid file type
    // }
    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit(handleContactus)}>
                <div className={styles.formRow}>
                    <div className={styles.formCols}>
                        <label htmlFor="name">Full Name</label>
                        <InputText
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            register={register}
                            error={errors?.name?.message}
                        />
                    </div>
                    <div className={styles.formCols}>
                        <label htmlFor="email">Email Address</label>
                        <InputText
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            register={register}
                            error={errors?.email?.message}
                        />
                    </div>
                    <div className={styles.formCols}>
                        <label htmlFor="mobile_number">Phone Number</label>
                        <InputText
                            type="number"
                            name="mobile_number"
                            id="mobile_number"
                            placeholder="Phone Number"
                            register={register}
                            error={errors?.mobile_number?.message}
                        />
                    </div>
                    <div className={styles.formCols}>
                        <label htmlFor="company_name">Company Name</label>
                        <InputText
                            type="text"
                            name="company_name"
                            id="company_name"
                            placeholder="Company Name"
                            register={register}
                            error={errors?.company_name?.message}
                        />
                    </div>
                    <div className={styles.formCols}>
                        <label htmlFor="website_link">Website link</label>
                        <InputText
                            type="url"
                            name="website_link"
                            id="website_link"
                            placeholder="Website link"
                            register={register}
                            error={errors?.website_link?.message}
                        />
                    </div>
                    <div className={styles.formCols}>
                        <label htmlFor="interested_in">Interest Area</label>
                        <InputText
                            type="text"
                            name="interested_in"
                            id="interested_in"
                            placeholder="Interest Area"
                            register={register}
                            error={errors?.interested_in?.message}
                        />
                    </div>

                    <div
                        className={`${styles.formCols} ${styles.formColsFull}`}
                    >

                    <label htmlFor="attachment">Attachement (optional)</label>
                        <Controller
                            // rules={{
                            //     validate: validateFile
                            // }}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: {
                                    invalid,
                                    isTouched,
                                    isDirty,
                                    error
                                }
                            }) => (
                                <input
                                    //   value={value}
                                    type="file"
                                    id="attachment"
                                    multiple=""
                                    name="attachment"
                                    placeholder="Choose file*"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) =>
                                        onChange(e.target.files[0])
                                    }
                                />
                            )}
                            name="attachment"
                            control={control}
                            // accept=".pdf,.doc,.docx"
                        />
                        {errors?.attachment?.message && (
                            <span className="errorMsg">
                                {errors?.attachment?.message}
                            </span>
                        )}
                        {errors.attachment?.type === 'validate' && (
                            <p className="errorMsg">File must be a PDF or DOC</p>
                        )}
                    </div>

                    <div
                        className={`${styles.formCols} ${styles.formColsFull}`}
                    >
                        <label htmlFor="message">Message</label>
                        <InputText
                            type="textarea"
                            name="message"
                            id="message"
                            placeholder="Write a message..."
                            register={register}
                            error={errors?.message?.message}
                        />
                    </div>
                    <div className={`${styles.formCols} ${styles.formSubmit}`}>
                        <Button type="submit" text="Submit" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm
