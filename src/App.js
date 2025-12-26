import { AboutMe, Educations, Experiences, Section, Skills } from "./components";
import './components/Home/home.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className='home'>
        <Section title={t('sections.aboutMe')}>
            <AboutMe/>
        </Section>
        <Section title={t('sections.experiences')}>
            <Experiences/>
        </Section>
        <Section title={t('sections.educations')}>
            <Educations/>
        </Section>
        <Section title={t('sections.skills')}>
            <Skills/>
        </Section>
    </div>
  );
}

export default App;
