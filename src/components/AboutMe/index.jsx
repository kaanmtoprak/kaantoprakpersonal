import React from 'react'
import './about-me.scss';
import { useTranslation } from 'react-i18next';
import { infoItems } from '../utilities/informations';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className='about-me'>
        <p className='about-me__bio'>
            {t('aboutMe.bio')}
        </p>
        <div className='about-me__info'>
        {
                infoItems(t).map((index,key)=>(
                    <div className='about-me__info__element' key={key}>
                        <span className='name'>{index.name}</span> : 
                        <span className='value'>{index.value}</span> 

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutMe

