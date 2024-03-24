import { BiLogoGmail } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin, IoLogoStackoverflow } from "react-icons/io5";

export default function Footer() {
    return (
        <div className='space-y-4 bg-black/50 p-4 py-8 lg:p-8'>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-2 text-center'>
                <div className='shrink-0'>&copy; Crafted with love by</div>
                <div className='shrink-0 break-keep font-bold tracking-wide'>
                    Sumit Meena
                </div>
            </div>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-4 text-center'>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://github.com/codeitmyways'
                    target='_blank'>
                    <IoLogoGithub />
                </a>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://www.linkedin.com/in/sumitmeena/'
                    target='_blank'>
                    <IoLogoLinkedin />
                </a>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://stackoverflow.com/users/4336424/sumit-meena'
                    target='_blank'>
                    <IoLogoStackoverflow />
                </a>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://twitter.com/sumit_io'
                    target='_blank'>
                    <IoLogoTwitter />
                </a>
            </div>
        </div>
    );
}
