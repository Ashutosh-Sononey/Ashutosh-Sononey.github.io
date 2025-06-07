document.addEventListener('DOMContentLoaded', () => {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        return;
    }
    if (typeof ScrollTrigger === 'undefined') {
        // Manually register ScrollTrigger if it's not auto-registered and available globally
        // This might be necessary if GSAP was loaded but ScrollTrigger wasn't explicitly included or registered
        // However, modern GSAP installations usually handle this.
        // If you installed gsap via npm and imported it, you'd do: gsap.registerPlugin(ScrollTrigger);
        // For CDN, it should be available if the correct GSAP file (with ScrollTrigger) was linked.
        // The provided CDN link https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js includes ScrollTrigger.
        console.warn('ScrollTrigger might not be auto-registered. Attempting to use it directly.');
    }

    // GSAP Animation: Animate Section Headings (and Hero H1) on scroll
    // Selects all h1 and h2 elements within sections and animates them.
    gsap.utils.toArray('section h2, section h1').forEach(heading => {
        gsap.from(heading, {
            opacity: 0, // Start with opacity 0 (invisible)
            y: 30, // Start 30px down from its original position
            duration: 0.8, // Animation duration 0.8 seconds
            ease: 'power2.out', // Easing function for a smooth effect
            scrollTrigger: {
                trigger: heading, // Element that triggers the animation
                start: 'top 90%', // Animation starts when the top of the heading is 90% from the top of the viewport
                toggleActions: 'play none none none' // Defines behavior: play animation once when it enters viewport
            }
        });
    });

    // GSAP Animation: Animate Project Cards on scroll (staggered)
    // Selects all elements with class .project-card and animates them with a stagger.
    const projectGrid = document.querySelector('#projects .grid'); // Define a trigger for the project card animations
    if (projectGrid) {
        gsap.from('.project-card', {
            opacity: 0,
            y: 50, // Start 50px down
            duration: 0.7,
            stagger: 0.2, // Stagger animation: 0.2s delay between each card
            ease: 'power2.out',
            scrollTrigger: {
                trigger: projectGrid, // Trigger when the project grid itself is in view
                start: 'top 85%', // Animation starts when top of grid is 85% from top of viewport
                toggleActions: 'play none none none'
            }
        });
    } else {
        console.warn('#projects .grid (trigger element for project cards) not found for ScrollTrigger.');
    }

    // GSAP Animation: Animate Skill Items on scroll (staggered)
    // Selects all elements with class .skill-item and animates them.
    const skillsList = document.querySelector('#skills ul.grid'); // Define a trigger for skill items
    if (skillsList) {
        gsap.from('.skill-item', {
            opacity: 0,
            x: -50, // Start 50px to the left
            duration: 0.6,
            stagger: 0.15, // Stagger animation: 0.15s delay between each skill item
            ease: 'power2.out',
            scrollTrigger: {
                trigger: skillsList, // Trigger when the skills list is in view
                start: 'top 80%', // Animation starts when top of list is 80% from top of viewport
                toggleActions: 'play none none none'
            }
        });
    } else {
        console.warn('#skills ul.grid (trigger element for skill items) not found for ScrollTrigger.');
    }


    // GSAP Animation: Hover effect for Project Cards
    // Adds an interactive hover effect to each project card.
    document.querySelectorAll('.project-card').forEach(card => {
        // Note: Tailwind's hover:shadow-2xl class is also applied in index.html.
        // GSAP can provide more complex or different shadow animations if desired.
        // Here, GSAP controls both scale and a distinct boxShadow animation.
        // Define initial and hover shadow states for GSAP animation.
        // These values are chosen to complement or slightly enhance Tailwind's existing shadows.
        const initialShadow = '0 10px 15px -3px rgba(var(--color-accent-rgb, 0,0,0),0.1)'; // Using accent for shadow could be too much, using black as fallback
        const hoverShadow = '0 20px 25px -5px rgba(var(--color-accent-rgb, 0,0,0),0.2)';   // Or a more generic shadow color. For now, using a subtle black shadow.
                                                                                        // Let's stick to generic black shadow for wider applicability.
                                                                                        // initialShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
                                                                                        // hoverShadow = '0 20px 25px -5px rgba(0,0,0,0.2)';


        // Set initial state (transform origin for scale and initial box shadow)
        gsap.set(card, {
            transformOrigin: "center center",
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' // Sticking to a defined black shadow for GSAP
        });

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03, // Slightly scale up the card
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', // Enhance shadow
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1, // Scale back to original size
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', // Revert to initial shadow
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    console.log("GSAP animations initialized successfully."); // Confirmation message
});
