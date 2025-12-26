import React from 'react'
import './knowledges.scss';
import { useTranslation } from 'react-i18next';

const Knowledges = () => {
  const { t } = useTranslation();
  const knowledges = t('knowledges', { returnObjects: true });

  return (
    <div className='knowledges'>
        {
            knowledges.map((index,key)=>(
                <div key={key}>
                    <i className='icon-check'></i>
                    <span className='knowledges__name'>{index.knowledge}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Knowledges