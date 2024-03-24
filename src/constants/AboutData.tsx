import { IconType } from "react-icons";
import { FaHouseFlag, FaUserTie } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

/**
 * Represents a topic in the About sections.
 */
export type AboutTopic = {
    title: string;
    content: JSX.Element[];
    icon: IconType;
};

/**
 * Tailwind style for bold text.
 */
const boldStyle = "font-bold text-white/90";

/**
 * Tailwind style for links.
 */
const aStyle =
    "underline text-white/90 hover:text-white duration-300 decoration-[unset] underline-offset-2 transition hover:decoration-[inherit] font-semibold";

/**
 * Array of About sections topics.
 */
export const ABOUT_TOPICS: AboutTopic[] = [
    {
        title: "Who Am I?",
        content: [
            <>
                Hi There! I'm{" "}
                <span className={boldStyle}>Sumit Meena</span>, a 9+ years of experience developer from India.
            </>,
            <>
                What kind of developer am I? Well,{" "}
                <span className={boldStyle}>the one you need</span>! I'm
                passionate about various aspects of computer science and have
                solid skills in <span className={boldStyle}>WebRTC</span>,{" "}
                <span className={boldStyle}>iOS App</span> and{" "}
                <span className={boldStyle}>Web</span> development. My diverse
                skill set allows me to adapt to various project requirements and
                deliver high-quality solutions tailored to your needs.
            </>,
        ],
        icon: FaHouseFlag,
    },
    {
        title: "Education",
        content: [
            <>
                Graduated with a {" "}
                <span className={boldStyle}>Bachelor of Engineering</span> in {" "}
                <span className={boldStyle}>Computer Science Engineering</span> from the{" "}
                <a
                    className={aStyle}
                    href='https://www.rgpv.ac.in/'
                    target='_blank'>
                    Rajiv Gandhi Proudyogiki Vishwavidyalaya
                </a>.
            </>,
            <>
                It was during these university years that I delved deeply into
                the study of my passion, equipped with both theoretical and
                practical approaches, fostering a{" "}
                <span className={boldStyle}>problem-solving mindset</span> that
                continues to drive me.
            </>,
        ],
        icon: IoIosSchool,
    },
    {
        title: "Professional Career",
        content: [
            <> Experienced iOS developer with a decade of expertise specializing in {" "}
            <span className={boldStyle}>WebRTC technology.</span> Proficient in developing {" "} 
            <span className={boldStyle}> robust and secure iOS applications</span>, leveraging {" "}
            <span className={boldStyle}>  WebRTC </span> for real-time communication features. Demonstrated track record of delivering high-quality solutions and optimizing user experiences across various iOS devices. Adept at problem-solving and implementing cutting-edge technologies to meet project requirements.
            </>,
        ],
        icon: FaUserTie,
    },
    {
        title: "My Passions",
        content: [
            <>
                During my leisure hours, I plunge eagerly into the depths of {" "}
                <span className={boldStyle}>nerd subculture</span>.  I am an ardent aficionado of {" "}
                <span className={boldStyle}>Mobile Battle Royale</span>,{" "}
                <span className={boldStyle}>Sci-Fi</span> and{" "}
                <span className={boldStyle}>Sitcom</span>,
                relishing the exploration of their captivating realms.
            </>,
            <>
                Furthermore, I ardently pursue <span className={boldStyle}>Cricket</span>{" "}
                passionately. {" "}
                <span className={boldStyle}>PUBG/BGMI</span> holds a special place in my heart as well, being a pastime I relish immensely.
            </>,
            <>
                And unquestionably, my fervor for {" "}
                <span className={boldStyle}>coding</span> knows no bounds!
            </>,
        ],
        icon: IoGameController,
    },
];
