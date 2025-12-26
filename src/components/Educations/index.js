import React from 'react'
import './educations.scss';
import { useTranslation } from 'react-i18next';

const Educations = () => {
  const { t } = useTranslation();
  const education = t('education', { returnObjects: true });

  return (
    <div className='educations'>
        {education.map((index,key)=>(
            <div key={key}>
                <span className='educations__years'>{index.years}</span>
                <span className='educations__title'>{index.name}</span>
                <span className='educations__company'>{index.institution}</span>
            </div>
        ))}
    </div>
  )
}

export default Educations