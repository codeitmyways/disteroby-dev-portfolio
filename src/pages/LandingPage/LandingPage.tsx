import { Suspense } from "react";
import Hero from "../../components/layout/Hero/Hero.tsx";
import HeroStage3D from "../../components/layout/HeroStage3D/HeroStage3D.tsx";
import Navbar from "../../components/UI/Navbar.tsx";
import { LinksData } from "../../constants/LinksData.ts";

function LandingPage() {
    return (
        <Suspense fallback={<div className='bg-red-500'>loading...</div>}>
            <div className='min-h-[200vh]'>
                <Navbar links={LinksData} initialIdx={1} />
                <HeroStage3D />
                <Hero />
                <div className='bg-gradient-to-b via-50% via-neutral-950/30 from-neutral-950 h-[15rem]'>
                    <div className='bg-hero h-full w-full bg-contain'></div>
                </div>
            </div>
        </Suspense>
    );
}

export default LandingPage;
