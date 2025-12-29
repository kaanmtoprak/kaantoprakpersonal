import { AboutMe, Experiences, Educations, Skills } from '../../index';

const sections = (t) => {
  return [
    {
      title: t('sections.aboutMe'),
      component: <AboutMe/>
    },
    {
      title: t('sections.experiences'),
      component: <Experiences/>
    },
    {
      title: t('sections.educations'),
      component: <Educations/>
    },
    {
      title: t('sections.skills'),
      component: <Skills/>
    }
  ]
}

export { sections };