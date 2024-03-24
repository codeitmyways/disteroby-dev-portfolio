import { IconType } from "react-icons";
import {
    BiLogoAndroid,
    BiLogoBlender,
    BiLogoBootstrap,
    BiLogoCPlusPlus,
    BiLogoCss3,
    BiLogoDocker,
    BiLogoFigma,
    BiLogoFirebase,
    BiLogoFlutter,
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss,
    BiLogoTrello,
    BiLogoTypescript,
    BiLogoUnity,
} from "react-icons/bi";
import { FaGitlab } from "react-icons/fa";
import { FaBitbucket, FaNodeJs, FaPython, FaSwift } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { LiaJava } from "react-icons/lia";
import { MdOutlineSip } from "react-icons/md";
import { PiAppleLogo } from "react-icons/pi";
import { SiCypress, SiJira, SiSublimetext, SiUnity, SiUnrealengine, SiVisualstudiocode, SiWebrtc, SiWireshark, SiXcode } from "react-icons/si";

/**
 * Represents the type of skill.
 */
export type SkillType = "web" | "mobile" | "backend";

/**
 * Represents a skill item.
 */
export type Skill = {
    name: string;
    level: number;
    type: SkillType | SkillType[];
    logo: IconType;
};

/**
 * Array of skill data.
 */
export const SKILLS_DATA: Skill[] = [
    {
        name: "Git",
        type: ["web", "mobile", "backend"],
        logo: BiLogoGit,
        level: 4,
    },
    {
        name: "Java",
        type: "mobile",
        logo: LiaJava,
        level: 1,
    },
    {
        name: "HTML5",
        type: "web",
        logo: BiLogoHtml5,
        level: 2,
    },
    {
        name: "GitLab",
        type: ["web", "mobile", "backend"],
        logo: FaGitlab,
        level: 4.5,
    },
    {
        name: "Firebase",
        type: ["mobile"],
        logo: BiLogoFirebase,
        level: 2,
    },
    {
        name: "JavaScript",
        type: ["web","mobile"],
        logo: BiLogoJavascript,
        level: 3,
    },
    {
        name: "Android",
        type: "mobile",
        logo: BiLogoAndroid,
        level: 1,
    },
    {
        name: "Unity",
        type: "backend",
        logo: BiLogoUnity,
        level: 2.5,
    },
    {
        name: "MongoDb",
        type: ["mobile", "web", "backend"],
        logo: BiLogoMongodb,
        level: 2,
    },
    {
        name: "Cypress",
        type: "web",
        logo: SiCypress,
        level: 2,
    },
    {
        name: "MySQL",
        type: ["mobile", "web", "backend"],
        logo: GrMysql,
        level: 3,
    },
    {
        name: "Docker",
        type: ["web", "mobile"],
        logo: BiLogoDocker,
        level: 2.5,
    },
    {
        name: "TypeScript",
        type: "web",
        logo: BiLogoTypescript,
        level: 2,
    },
    {
        name: "C++",
        type: ["mobile","backend"],
        logo: BiLogoCPlusPlus,
        level: 2.5,
    },
    {
        name: "Jira",
        type: ["mobile", "web", "backend"],
        logo: SiJira,
        level: 4.5,
    },
    {
        name: "CSS3",
        type: "web",
        logo: BiLogoCss3,
        level: 2,
    },
    {
        name: "Objective C",
        type: "mobile",
        logo: PiAppleLogo,
        level: 4,
    },
    {
        name: "Swift",
        type: "mobile",
        logo: FaSwift,
        level: 4.5,
    },
    {
        name: "NodeJs",
        type: ["web","backend"],
        logo: FaNodeJs,
        level: 3.5,
    },
    {
        name: "bitbucket",
        type: ["mobile","web","backend"],
        logo: FaBitbucket,
        level: 3.5,
    },
    {
        name: "Xcode",
        type: "mobile",
        logo: SiXcode,
        level: 4.5,
    },
    {
        name: "Sublime",
        type: ["web","backend"],
        logo: SiSublimetext,
        level: 3,
    },
    {
        name: "VS Code",
        type: ["web","backend"],
        logo: SiVisualstudiocode,
        level: 3,
    },
    {
        name: "Python",
        type: ["web","backend"],
        logo: FaPython,
        level: 2,
    },
    {
        name: "WebRTC",
        type: ["mobile","web","backend"],
        logo: SiWebrtc,
        level: 3.5,
    },
    {
        name: "Wireshark",
        type: ["mobile","web","backend"],
        logo: SiWireshark,
        level: 3,
    },
    {
        name: "SIP",
        type: "mobile",
        logo: MdOutlineSip,
        level: 4.5,
    },
];

//Objective C, Swift, Objective C++, NodeJs,
