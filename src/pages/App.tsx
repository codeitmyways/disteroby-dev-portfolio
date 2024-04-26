import { useEffect } from "react";
import LandingPage from "./LandingPage.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
    useEffect(() => {
    }, []);

    return (
        <>
            <main className='min-h-[100svh] w-full overflow-x-hidden scroll-smooth bg-dark-gray'>
                <LandingPage />
            </main>
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default App;
