import React from 'react'
import './profile.scss';
import { useTranslation } from 'react-i18next';


const Profile = () => {
    const { i18n } = useTranslation();
  
  return (
    <div className='profile'>
        <div className="profile__content">
            <figure>
                <img src="/images/profile.jpeg" alt="profile"/>
            </figure>
            <div className='profile__content__informations'>
                <span className='name'>Mehmet Kaan Toprak</span>
                <span className='title'>Senior Frontend | React Developer</span>
            </div>
        </div>
        <div className="profile__social">
            <a href="https://github.com/kaanmtoprak" target='_blank' rel="noreferrer"><i className='icon-github'></i></a>
            <a href="https://www.linkedin.com/in/kaanmtprk/" target='_blank' rel="noreferrer"><i className='icon-linkedin'></i></a>
            <a href="https://twitter.com/kaanmehtprk" target='_blank' rel="noreferrer"><i className='icon-twitter'></i></a>
        </div>
        <div className="profile__actions">
            <a href={`cv/mkt-cv-${i18n.language}.pdf`} download>Download CV</a>
        </div>

    </div>
  )
}

export default Profile