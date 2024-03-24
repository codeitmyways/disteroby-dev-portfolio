/**
 * Represents a tag for a project.
 */
export type ProjectTag =
    | "link"
    | "xelion"
    | "blumtelehealth"
    | "talkroom"
    | "biztalk.online"
    | "biztalkmobile";

/**
 * Represents the type of call-to-action (CTA).
 */
export type CtaType = "product" | "repository" | "store" | "video";

/**
 * Represents a call-to-action (CTA) item.
 */
export type Cta = {
    type: CtaType;
    text: string;
    href: string;
};

/**
 * Represents the type of device used in a project.
 */
export type DeviceType = "laptop" | "smartphone";

/**
 * Represents data specific to a laptop.
 */
export type LaptopData = {
    type: "laptop";
};

/**
 * Represents data specific to a smartphone.
 */
export type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

/**
 * Represents data about the device used in a project.
 */
export type DeviceData = {
    type: DeviceType;
    texture: string;
    textureCount: number;
} & (LaptopData | SmartphoneData);

/**
 * Represents data about a project.
 */
export type ProjectData = {
    refName: ProjectTag;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

/**
 * Complete list of Project data.
 */
export const PROJECTS: ProjectData[] = [
    {
        refName: "link",
        title: "LINK",
        isTeam: true,
        description: [
            "The super communication app for Rakuten Mobile (Rakuten SAIKYO Plan) subscribers! Enjoy unlimited calling, access a host of Rakuten services and earn Points!",
            "Calls: Rakuten Mobile subscribers can make unlimited calls and send Link message to Rakuten Link users, as well as to other mobile networks and landline numbers in Japan and in 66 designated countries and regions through Rakuten Link. Calls to mobile phones and landlines including other carriers in Japan are free when calling to a Japanese number (some numbers not included).",
            "Messages: You can create chat groups with other Rakuten Link users for up to 100 people, and share photos, videos, and documents, as well as messages.",
            "Home：As a Rakuten Mobile user, you can now enjoy easier, one-stop access to not only your favorite services in Rakuten Link but also exclusive deals across Rakuten Group services! Call, message, earn points by using the Rakuten Link's Super Point Screen and Missions, access key Rakuten Group services and do much more - all from one screen!",
        ],
        tags: ["iOS", "Recent","WebRTC"],
        cta: [
            {
                text: "Go to Appstore Store",
                type: "store",
                href: "https://apps.apple.com/us/app/rakuten-link/id1498877539",
            }
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            textureCount: 4,
            texture: "link.png",
        },
    },
    {
        refName: "xelion",
        title: "Xelion",
        isTeam: true,
        description: [
            "Good communication is the lifeline of modern businesses. Xelion believes that by giving customers a simple to use platform that is accessible anywhere, anytime and on any device, they can not only improve communications within their business, but also organise communications across multiple technologies into one central platform.",
            "With an extensive suite of features, Xelion includes all functionality out of the box. No bolt-ons and no upgrade fees, everything is included for a simple monthly fee per user.",
            "Integration with the desktop, mobiles, calendars and much more come as standard with Xelion and enable users to work where and how they want.​",
        ],
        tags: ["Communication", "iOS","WebRTC","MediaSoup"],
        cta: [
            {
                text: "Go to Appstore Store",
                type: "store",
                href: "https://apps.apple.com/us/app/xelion-8/id1584635039",
            }
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            textureCount: 2,
            texture: "xelion.png",
        },
    },
    {
        refName: "blumtelehealth",
        title: "Blum Telehealth",
        isTeam: true,
        description: [
            "Telehealth means doctor and patient talk to each other over a smartphone, computer or other device. For people living in remote areas, it’s often the only way they can consult a doctor without a long commute.  Telehealth is approved by the American Medical Association and many states have regulations requiring insurance companies to cover these \“office visits.\”",
            "Our Blum app lets you easily connect with your doctor via phone, computer or device with just a few taps. With Blum, You’re always in touch with your family’s health care.",
            "We Provide you healthier relationships with the physicians. pharmacists, therapists and other providers you’re already seeing.",
        ],
        tags: ["Communication", "iOS","WebRTC", "Telehealth"],
        cta: [
            {
                text: "Go to Appstore Store",
                type: "store",
                href: "https://apps.apple.com/us/app/blum-telehealth/id1273081019",
            }
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            textureCount: 3,
            texture: "blum.jpeg",
        },
    },
    {
        refName: "biztalk.online",
        title: "Biztalk",
        isTeam: true,
        description: [
            "RTC Web was founded with a vision of employing communication technologies to build a new wave of solutions with an engaging personalized experience. We work to develop reliable and robust RTC applications for both mobile and the web across several industry verticals.",
            "Our team brings along proven abilities in building futuristic and creative solutions to make your business agile. We have a team of experts with several years of experience in designing & developing reliable and robust applications for varying screen sizes.",
            "RTCWeb knows exactly how WebRTC can help you craft beautiful, user-centric products quickly and cost-effectively. We add live video, voice audios & messaging to your websites and mobile apps, but believe in a simple framework. RTCWeb holds potential for businesses to pay off far beyond projections and lead where you’ve never gone before.",
        ],
        tags: ["Communication", "node","WebRTC"],
        cta: [
            {
                text: "Visit the WebSite",
                type: "product",
                href: "https://biztalk.online/",
            }
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "biztalk-Desktop.png",
        },
    },
    {
        refName: "talkroom",
        title: "Talkroom",
        isTeam: false,
        description: [
            "Perform live video call while chatting with your friends, relatives and business contacts! You just need to create a room by giving room name send the link via any medium like SMS, WhatsApp, and Email.",
            "When another person will join room with same room name or click join link you will be able to talk and see him.",
            "Application is kept simple and you don't need to do registration, to start using it.",
            "Video Call - Don't limit yourself to just hear, why not see your family, friends, and contacts.",
            "Web - TalkRoom.io can be used on Desktop, Laptop, Other handheld devices with a WebRTC-enabled browser (Chrome, Firefox, Opera).",
            "Simple - Easy steps to start calling, no registration required.",
            "To begin a call enter a room name and hit the Start Button.",
        ],
        tags: ["Communication", "iOS","WebRTC","MediaSoup"],
        cta: [
            {
                text: "Go to Appstore Store",
                type: "store",
                href: "https://apps.apple.com/us/app/talkroom-io/id1471326235",
            }
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            textureCount: 2,
            texture: "talkroom.png",
        },
    },
    {
        refName: "biztalkmobile",
        title: "Biztalk Mobile App",
        isTeam: true,
        description: [
            "Biztalk.online is a free chatting and video-conferencing platform based on WebRTC Mesh topology. This platform supports file sharing too. It required to signup for creating an account. In this platform, a non-registered user can also join a call through invitation links.",
            "Our team brings along proven abilities in building futuristic and creative solutions to make your business agile. We have a team of experts with several years of experience in designing & developing reliable and robust applications for varying screen sizes.",
            "RTCWeb knows exactly how WebRTC can help you craft beautiful, user-centric products quickly and cost-effectively. We add live video, voice audios & messaging to your websites and mobile apps, but believe in a simple framework. RTCWeb holds potential for businesses to pay off far beyond projections and lead where you’ve never gone before.",
        ],
        tags: ["Communication", "iOS","WebRTC","MediaSoup"],
        cta: [
            {
                text: "Go to Appstore Store",
                type: "store",
                href: "https://apps.apple.com/us/app/biztalk-online/id1337026080",
            }
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            textureCount: 2,
            texture: "biztalk.png",
        },
    },
];
