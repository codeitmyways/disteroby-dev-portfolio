import { ExperienceData } from "../../../constants/ExperienceData.ts";
import {
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { logoPath } from "../../../utils/ResourcesUtils.ts";
type FragmentExperienceProps = {
    experience: ExperienceData;
    index: number;
};
export const FragmentExperience = ({ experience }: FragmentExperienceProps) => (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={logoPath(experience.icon)}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Title */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
  
      {/* Experience Points */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );