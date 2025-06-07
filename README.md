# My Personal Portfolio Website

This is a modern, animated, single-page personal portfolio website designed to showcase your skills and projects.

## Technologies Used

*   HTML5
*   CSS3 (with Tailwind CSS via Play CDN)
*   JavaScript (ES6+)
*   GSAP (GreenSock Animation Platform) for animations
*   Tailwind CSS (v4 via Play CDN - Note: Tailwind Play CDN uses @tailwindcss/browser@4 which is the latest)

## How to View

Simply open the `index.html` file in any modern web browser.

## How to Update Content

Most content can be updated by directly editing the `index.html` file. Look for placeholder text often enclosed in square brackets like `[Your Name]` or refer to the HTML comments for guidance.

### General
*   **Title Tag (Browser Tab):** Find `<title>[Your Name] - Portfolio</title>` in the `<head>` section of `index.html`.
*   **Name in Header & Footer:** Look for `[Your Name]` in the `<header>` and `<footer>`.

### Hero Section
*   **Main Heading:** Edit the content inside `<h1>` within `<section id="hero">`. Example: `<h1>[Your Name / Professional Title]</h1>`.
*   **Tagline:** Edit the paragraph below the main heading. Example: `<p>[Your catchy tagline or brief professional summary here]</p>`.
*   **Button Text:** Edit the text inside the `<a>` tag with class `bg-[var(--color-accent)]`. Example: `[View My Projects]`.

### About Me Section
*   Locate `<section id="about">`. Edit the placeholder paragraph text within this section. An HTML comment `<!-- Replace this with your detailed 'About Me' content. -->` is provided for guidance.

### Skills Section
*   Locate `<section id="skills">`. Skills are listed as `<li>` items with the class `skill-item`.
*   Edit the placeholder text like `[Skill Name 1]` within each `<li>`.
*   You can add or remove `<li>` items as needed. A comment `<!-- Replace these with your actual skills... -->` is above the list.

### Projects Section
*   Locate `<section id="projects">`. Each project is an `<article class="project-card">`.
*   **Project Title:** Edit the `<h3>[Project Title X]</h3>`.
*   **Description:** Edit the paragraph `<p>[Brief description of your project...]</p>`.
*   **Technologies:** Edit the text `[Tech Stack Used, e.g., HTML, CSS, JavaScript]` within the `<p><strong>Technologies:</strong> ...</p>`.
*   **Project Image:**
    *   It's recommended to create an `images` folder in the root directory and place your project images there (e.g., `images/project-1.jpg`).
    *   Find the `div` with the comment `<!-- Project Image Placeholder: ... -->`.
    *   Replace the placeholder `div` (or its content) with an `<img>` tag, for example:
        `<img src="images/your-project-image.jpg" alt="[Project Title] Screenshot" class="w-full h-full object-cover rounded-md">`
        (Ensure the class attributes match for styling if you replace the entire div, or just update the `src` and `alt` if you put the `img` inside the existing styled div which is `aspect-video bg-[var(--color-text-secondary)] ...`).
*   **Links:**
    *   **Live Demo:** Find `<!-- Link to Live Demo --> <a href="#" ...>Live Demo</a>`. Replace `#` with the actual URL.
    *   **Source Code:** Find `<!-- Link to Source Code --> <a href="#" ...>Source Code</a>`. Replace `#` with the actual URL.

### Contact Section
*   Locate `<section id="contact">`.
*   **Email:** Find `<!-- Your Email Address --> <a href="mailto:youremail@example.com">youremail@example.com</a>`. Update `youremail@example.com` in both the `href` and the link text.
*   **Social Media:** Find links for LinkedIn, GitHub, etc. Update the `href="#"` with your profile URLs and change the link text if desired. Comments like `<!-- Your LinkedIn Profile URL -->` are provided.

### Theme Customization (Optional)
*   The website uses a dark theme with a configurable accent color.
*   Colors are defined as CSS custom properties (variables) at the beginning of the `css/style.css` file, within the `:root { ... }` block. You can experiment with these values (e.g., `--color-background`, `--color-accent`) if you wish to change the theme.

---
Happy Customizing!
