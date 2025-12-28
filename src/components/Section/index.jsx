import React from 'react'
import './section.scss';

const Section = ({title,...props}) => {
  return (
    <section className='section'>
        <div className='section__title'>
            <span>{title}</span>
        </div>
        <div className='section__content'>
            {props.children}
        </div>
    </section>
  )
}

export default Section

