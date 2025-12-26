import React from "react";
import "./skills.scss";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "../index";

const Skills = () => {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true });

  return (
    <div className="skills">
      {skills.map((index, key) => (
        <div key={key}>
          <span className="skills__title">{index.title}</span>
          <div className="skills__content">
            {index.skills.map((skill, key) => (
              <span key={key} className="skills__content__skill">
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
