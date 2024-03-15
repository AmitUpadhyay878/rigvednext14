"use client";
import React, { useState } from 'react'
import './InputText.scss'

const InputText = ({
    type = 'text',
    placeholder = '',
    id,
    iconsRight,
    iclass,
    register,
    name,
    error,
    ...rest
}) => {
    const [toggleEye, setToggleEye] = useState(false)
    const showEyeIcon = type === 'password'
    return (
        <>
        {
            type==="textarea" ?
            (
                <textarea
                id={id}
                placeholder={placeholder}
                type={type}
                className={iclass}
                {...(register && register(name))}
                {...rest}
              />
            )
            :
            (
                <input
                id={id}
                placeholder={placeholder}
                type={
                    type === 'password'
                        ? toggleEye
                            ? 'text'
                            : 'password'
                        : type
                }
                className={`${iclass} custom-input`}
                {...(register && register(name))}
                {...rest}
            />
            )
        }


            {showEyeIcon && (
                <div
                    className="toggle-password"
                    onClick={() => setToggleEye((prev) => !prev)}
                >
                    {toggleEye ? (
                        <i className="icon-eyeclose eye-icon"/>
                    ) : (
                        <i className="icon-eyeshow open-eye eye-icon" />
                    )}
                </div>
            )}
            {error && <span className="errorMsg">{error}</span>}
        </>
    )
}

export default InputText
