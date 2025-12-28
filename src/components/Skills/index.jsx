import React from "react";
import "./skills.scss";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true });

  return (
    <div className="skills">
      {skills.map((index, key) => (
        <div className="skills__item" key={index.id}>
          <span className="skills__item__title">{index.title}</span>
          <div className="skills__item__content">
            {index.skills.map((skill, key) => (
              <span key={key} className="skills__item__content__skill">
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

