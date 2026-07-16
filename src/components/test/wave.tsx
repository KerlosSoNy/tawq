'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WaveScrubVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        const setVideoTime = () => {
            const st = ScrollTrigger.getById('wave-scrub');
            if (st && video.duration) {
                video.currentTime = st.progress * video.duration;
            }
        };

        const onLoaded = () => {
            const st = ScrollTrigger.create({
                id: 'wave-scrub',
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                onUpdate: setVideoTime,
            });
            return () => st.kill();
        };

        if (video.readyState >= 1) {
            onLoaded();
        } else {
            video.addEventListener('loadedmetadata', onLoaded);
        }

        return () => {
            video.removeEventListener('loadedmetadata', onLoaded);
            ScrollTrigger.getById('wave-scrub')?.kill();
        };
    }, []);

    return (
        <div ref={containerRef} style={{ height: '300vh' }}>
            <video
                ref={videoRef}
                src="/videos/try2.mp4"
                className="rotate-180"
                playsInline
                preload="auto"
                style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', objectFit: 'cover' }}
            />
        </div>
    );
}