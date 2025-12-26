import React from 'react'
import './about-me.scss';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  const infoItems = [
    { id: 1, name: t('aboutMe.info.age'), value: '31' },
    { id: 2, name: t('aboutMe.info.residence'), value: t('aboutMe.info.turkey') },
    { id: 3, name: t('aboutMe.info.phone'), value: '0 (551) 830 38 51'},
    { id: 4, name: t('aboutMe.info.address'), value: t('aboutMe.info.istanbul') },
  ];

  return (
    <div className='about-me'>
        <p className='about-me__bio'>
            {t('aboutMe.bio')}
        </p>
        <div className='about-me__info'>
        {
                infoItems.map((index,key)=>(
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