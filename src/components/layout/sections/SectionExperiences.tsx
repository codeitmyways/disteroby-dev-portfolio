import { EXPERIENCES } from "../../../constants/ExperienceData.ts";
import SectionTitle from "../../UI/SectionTitle.tsx";
import {FragmentExperience} from "../fragments/FragmentExperience.tsx"
import {VerticalTimeline} from "react-vertical-timeline-component";

export default function SectionExperiences() {
    return (
        <div className='flex flex-col items-center gap-16 pt-16 lg:gap-24 lg:pt-24'>
            <SectionTitle title='Experiences' />
            <VerticalTimeline>
                {EXPERIENCES.map((experience, idx) => (
                    <FragmentExperience
                    key={idx}
                    experience={experience}
                    index={idx}
                    />
                ))}
            </VerticalTimeline>
            
        </div>
    );
}