import React from 'react'
import style from './Spinner.module.scss'

const Spinner = () => {
  return (
    <>
      <div className={style.spinnerWrap}>
        <span className={style.spin1}></span>
        <span className={style.spin2}></span>
        <span className={style.spin3}></span>
        <span className={style.spin4}></span>
      </div>
    </>
  )
}

export default Spinner
