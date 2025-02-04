import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Carousel from '../components/Landing/Carousel/Carousel';
import Content from '../components/Landing/Content';
import Content1 from '../components/Landing/Content1/LandingPagePart1';
import Content2 from '../components/Landing/Content2/Content1';
import Content3 from '../components/Landing/Content3/FiveShapers';
import Content4 from '../components/Landing/Content4/Testimonial';
import AboutContent2 from '../components/About/AboutContent2/AboutContent2';
import Footer from '../components/Landing/Footer/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
    const carouselRef = useRef(null);
    const contentRef = useRef(null);
    const content1Ref = useRef(null);
    const content2Ref = useRef(null);
    const content3Ref = useRef(null);
    const aboutContent2Ref = useRef(null);
    const content4Ref = useRef(null);
    const footerRef = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // Assuming 768px as a breakpoint for small screens

    useEffect(() => {
        // Function to check screen size
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Helper function to create animation for sections
        const animateSection = (refs, fromProps, toProps) => {
            if (!isLargeScreen) return; // Don't animate on small screens

            gsap.fromTo(
                refs.map(ref => ref.current),
                {
                    ...fromProps,
                    opacity: 0 // Start invisible
                },
                {
                    ...toProps,
                    opacity: 1, // End fully visible
                    duration: 1, // Duration of animation
                    ease: "power2.out", // Easing for smooth transition
                    scrollTrigger: {
                        trigger: refs[0].current, // Use the first ref as the trigger for the animation
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    }
                }
            );
        };

        // Only animate if on a larger screen
        if (isLargeScreen) {
            animateSection([carouselRef], { y: 50 }, { y: 0 });
            animateSection([contentRef], { x: -50 }, { x: 0 });
            animateSection([content1Ref], { scale: 1 }, { scale: 1 });
            animateSection([content2Ref, content3Ref], { x: 10 }, { x: 0 });
            animateSection([aboutContent2Ref], { rotationY: 90 }, { rotationY: 0 });
            animateSection([content4Ref], { y: 50 }, { y: 0 });
            animateSection([footerRef], { y: 50 }, { y: 0 });
        }

        // Cleanup function
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [isLargeScreen]);

    return (
        <div>
            <div ref={carouselRef}><Carousel /></div>
            <div ref={contentRef}><Content /></div>
            <div ref={content1Ref}><Content1 /></div>
            <div ref={content2Ref}><Content2 /></div>
            <div ref={content3Ref}><Content3 /></div>
            <div ref={aboutContent2Ref}><AboutContent2 /></div>
            <div ref={content4Ref}><Content4 /></div>
            <div ref={footerRef}><Footer /></div>
        </div>
    );
}

export default LandingPage;