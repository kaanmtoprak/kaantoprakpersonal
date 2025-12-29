import { Section } from "./components";
import './components/Home/home.scss';
import { useTranslation } from 'react-i18next';
import { sections } from "./components/utilities/sections";

function App() {
  const { t } = useTranslation();


  return (
    <div className='home'>
      {sections(t).map((section, index) => (
        <Section key={index} title={section.title}>
          {section.component}
        </Section>
      ))}
    </div>
  );
}

export default App;

