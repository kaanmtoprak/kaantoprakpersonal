import React from 'react'
import './experiences.scss';
import { useTranslation } from 'react-i18next';

const Experiences = () => {
  const { t } = useTranslation();
  const experiences = t('experiences', { returnObjects: true });

  return (
    <div className='experiences'>
      {
        experiences.map((index,key)=>(
          <div key={key}>
            <span className='experiences__years'>{index.years}</span>
            <span className='experiences__title'>{index.title}</span>
            <span className='experiences__company'>{index.company}</span>
            <p className='experiences__description'>{index.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Experiences