// ============================================
// PORTFOLIO DATA
// ============================================

const portfolioData = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Software Developer",
        bio: "Passionate software developer with expertise in full-stack development. I love creating innovative solutions and building interactive experiences.",
        location: "Your City, Country",
        email: "your.email@example.com",
        phone: "+1 (234) 567-8900",
        website: "https://yourwebsite.com",
        avatar: "assets/avatar.jpg"
    },

    // Social Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://twitter.com/yourusername",
        portfolio: "https://yourportfolio.com",
        resume: "assets/resume.pdf"
    },

    // Technical Skills
    skills: [
        { name: "HTML/CSS", level: 95, category: "frontend", years: 5 },
        { name: "JavaScript", level: 90, category: "frontend", years: 4 },
        { name: "React", level: 85, category: "frontend", years: 3 },
        { name: "Node.js", level: 80, category: "backend", years: 3 },
        { name: "C#/.NET", level: 85, category: "backend", years: 4 },
        { name: "ASP.NET Core", level: 80, category: "backend", years: 3 },
        { name: "SQL Server", level: 75, category: "database", years: 3 },
        { name: "MongoDB", level: 70, category: "database", years: 2 },
        { name: "Git", level: 85, category: "tools", years: 4 },
        { name: "Docker", level: 65, category: "tools", years: 2 },
        { name: "Azure", level: 70, category: "cloud", years: 2 },
        { name: "Three.js", level: 75, category: "frontend", years: 1 }
    ],

    // Projects
    projects: [
        {
            id: 1,
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
            longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, order management, and payment processing. Implemented real-time inventory updates and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
            image: "assets/projects/ecommerce.jpg",
            liveDemo: "https://demo.example.com",
            github: "https://github.com/yourusername/ecommerce",
            features: [
                "User authentication and authorization",
                "Product search and filtering",
                "Shopping cart and checkout",
                "Payment integration with Stripe",
                "Admin dashboard for inventory management",
                "Real-time order tracking"
            ],
            challenges: "Implementing real-time inventory synchronization across multiple users and handling concurrent transactions.",
            date: "2024"
        },
        {
            id: 2,
            name: "Task Management App",
            description: "Collaborative task management application with real-time updates and team collaboration features.",
            longDescription: "Developed a task management system allowing teams to create, assign, and track tasks in real-time. Features include drag-and-drop interface, notifications, and progress tracking.",
            technologies: ["ASP.NET Core", "React", "SignalR", "SQL Server"],
            image: "assets/projects/taskmanager.jpg",
            liveDemo: "https://tasks.example.com",
            github: "https://github.com/yourusername/taskmanager",
            features: [
                "Real-time collaboration with SignalR",
                "Drag-and-drop task organization",
                "Team management and permissions",
                "Progress tracking and analytics",
                "Email notifications",
                "File attachments"
            ],
            challenges: "Ensuring real-time synchronization across multiple users without performance degradation.",
            date: "2023"
        },
        {
            id: 3,
            name: "Weather Dashboard",
            description: "Interactive weather dashboard with 3D visualizations and forecast predictions.",
            longDescription: "Created a weather application that displays current conditions and forecasts with beautiful 3D visualizations using Three.js. Integrates with multiple weather APIs for accurate data.",
            technologies: ["JavaScript", "Three.js", "Weather API", "Chart.js"],
            image: "assets/projects/weather.jpg",
            liveDemo: "https://weather.example.com",
            github: "https://github.com/yourusername/weather",
            features: [
                "3D weather visualizations",
                "7-day forecast",
                "Multiple location support",
                "Interactive charts and graphs",
                "Severe weather alerts",
                "Responsive design"
            ],
            challenges: "Creating performant 3D visualizations that work smoothly on mobile devices.",
            date: "2023"
        },
        {
            id: 4,
            name: "Portfolio Website",
            description: "This interactive 3D portfolio with terminal interface and immersive user experience.",
            longDescription: "Built an innovative portfolio website featuring a 3D programmer's room environment with interactive elements and a functional terminal interface for navigation.",
            technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
            image: "assets/projects/portfolio.jpg",
            liveDemo: "https://yourportfolio.com",
            github: "https://github.com/yourusername/portfolio",
            features: [
                "3D interactive environment",
                "Terminal command interface",
                "Clickable 3D objects",
                "Dynamic lighting and effects",
                "Responsive design",
                "Easter eggs and animations"
            ],
            challenges: "Balancing visual complexity with performance across different devices.",
            date: "2024"
        }
    ],

    // Work Experience
    experience: [
        {
            company: "Tech Company Inc.",
            position: "Senior Software Developer",
            location: "City, Country",
            startDate: "2022",
            endDate: "Present",
            description: "Leading development of enterprise web applications using modern technologies.",
            responsibilities: [
                "Architecting and developing full-stack web applications",
                "Mentoring junior developers",
                "Code review and quality assurance",
                "Collaborating with cross-functional teams"
            ]
        },
        {
            company: "Startup Solutions",
            position: "Full Stack Developer",
            location: "City, Country",
            startDate: "2020",
            endDate: "2022",
            description: "Developed and maintained multiple client projects using various technologies.",
            responsibilities: [
                "Built responsive web applications",
                "Implemented RESTful APIs",
                "Database design and optimization",
                "Client communication and requirement gathering"
            ]
        },
        {
            company: "Digital Agency",
            position: "Junior Developer",
            location: "City, Country",
            startDate: "2019",
            endDate: "2020",
            description: "Started career developing websites and learning modern web technologies.",
            responsibilities: [
                "Frontend development with HTML, CSS, JavaScript",
                "WordPress theme customization",
                "Bug fixing and maintenance",
                "Learning best practices and coding standards"
            ]
        }
    ],

    // Education
    education: [
        {
            institution: "University Name",
            degree: "Bachelor of Science in Computer Science",
            location: "City, Country",
            startDate: "2015",
            endDate: "2019",
            gpa: "3.8/4.0",
            achievements: [
                "Dean's List all semesters",
                "Computer Science Society President",
                "Hackathon Winner 2018"
            ]
        }
    ],

    // Certifications
    certifications: [
        {
            name: "Microsoft Certified: Azure AI Fundamentals",
            issuer: "Microsoft",
            date: "2023",
            link: "https://learn.microsoft.com/certifications/"
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            link: "https://aws.amazon.com/certification/"
        },
        {
            name: "Meta React Developer Certificate",
            issuer: "Meta",
            date: "2022",
            link: "https://www.coursera.org/"
        }
    ],

    // Programmer Jokes
    jokes: [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
        "Why do Java developers wear glasses? Because they don't C#!",
        "There are only 10 types of people in the world: those who understand binary and those who don't.",
        "Programming is like sex: One mistake and you have to support it for the rest of your life.",
        "A programmer's wife tells him: 'Run to the store and pick up a loaf of bread. If they have eggs, get a dozen.' The programmer comes home with 12 loaves of bread.",
        "Why did the programmer quit his job? Because he didn't get arrays!",
        "What's the object-oriented way to become wealthy? Inheritance.",
        "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!"
    ],

    // Inspirational Quotes
    quotes: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Code is like humor. When you have to explain it, it's bad. - Cory House",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
        "In order to be irreplaceable, one must always be different. - Coco Chanel",
        "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
        "Knowledge is power. - Francis Bacon",
        "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon",
        "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
        "The best error message is the one that never shows up. - Thomas Fuchs"
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
