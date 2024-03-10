import { Suspense, useRef } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { EarthMaterial } from "./EarthMaterial.tsx";
import { ImageFadeMaterial } from "./ImageFadeMaterial.tsx";
import { useInView } from "framer-motion";

extend({ ImageFadeMaterial });
extend({ EarthMaterial });

export default function PerformanceCanvas({ children, ...props }: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null!);
    const isInView = useInView(ref);

    return (
        <Canvas
            style={{ contain: "paint" }}
            frameloop={isInView ? "always" : "never"}
            ref={ref}
            {...props}>
            <Suspense fallback={null}>
                {children}
                {/*/!*TODO Is this necessary???*!/*/}
                {/*<AdaptiveDpr pixelated />*/}
                <Preload all />
            </Suspense>
        </Canvas>
    );
}
