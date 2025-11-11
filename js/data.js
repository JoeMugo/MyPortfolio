// ============================================
// PORTFOLIO DATA
// ============================================

const portfolioData = {
    // Personal Information
    personal: {
        name: "Joel Mugo",
        title: "Full-Stack Software Developer",
        bio: "Results-driven Software Developer with strong full-stack experience and a proven ability to deliver high-quality, scalable applications. Skilled in ASP.NET Core, C#, JavaScript, SQL Server, and modern frameworks. Experienced in developing globally used healthcare monitoring systems and passionate about continuous learning and emerging technologies.",
        location: "Nairobi, Kenya",
        email: "joelmugo254@gmail.com",
        phone: "+254 705 483 231",
        website: "https://github.com/JoeMugo",
        avatar: "assets/avatar.jpg"
    },

    // Social Links
    social: {
        github: "https://github.com/JoeMugo",
        linkedin: "https://linkedin.com/in/joel-mugo-82bb39211",
        twitter: "https://twitter.com/joelmugo",
        portfolio: "https://github.com/JoeMugo",
        resume: "assets/resume.pdf"
    },

    // Technical Skills
    skills: [
        { name: "C#", level: 90, category: "backend", years: 4 },
        { name: "ASP.NET Core MVC", level: 90, category: "backend", years: 3 },
        { name: "JavaScript", level: 85, category: "frontend", years: 4 },
        { name: "HTML5/CSS3", level: 90, category: "frontend", years: 5 },
        { name: "SQL Server", level: 85, category: "database", years: 4 },
        { name: "MySQL", level: 80, category: "database", years: 3 },
        { name: "Entity Framework Core", level: 85, category: "backend", years: 3 },
        { name: "React", level: 70, category: "frontend", years: 2 },
        { name: "Angular", level: 65, category: "frontend", years: 2 },
        { name: "Node.js", level: 70, category: "backend", years: 2 },
        { name: "Python", level: 65, category: "backend", years: 2 },
        { name: "PHP", level: 60, category: "backend", years: 2 },
        { name: "Git/GitHub", level: 85, category: "tools", years: 4 },
        { name: "Azure DevOps", level: 75, category: "tools", years: 2 },
        { name: "RESTful APIs", level: 85, category: "backend", years: 3 },
        { name: "Bootstrap", level: 80, category: "frontend", years: 3 },
        { name: "jQuery", level: 75, category: "frontend", years: 3 },
        { name: "Three.js", level: 70, category: "frontend", years: 1 }
    ],

    // Projects
    projects: [
        {
            id: 1,
            name: "AHF Global Healthcare Monitoring System",
            description: "Full-stack healthcare monitoring system supporting operations across AHF bureaus in Africa, Asia, Latin America, and Europe.",
            longDescription: "Developed and maintained a comprehensive healthcare monitoring system using ASP.NET Core MVC, C#, and SQL Server. The system supports 23 healthcare monitoring sections and 6 medical service categories, enabling real-time tracking and visualization of healthcare performance metrics across multiple continents.",
            technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework Core", "JavaScript", "HTML5/CSS3", "DinkToPdf"],
            image: "assets/projects/healthcare.jpg",
            liveDemo: "#",
            github: "#",
            features: [
                "Real-time healthcare performance tracking",
                "Automated PDF reporting (color and grayscale)",
                "Database architecture for 23 monitoring sections",
                "RESTful APIs for data integration",
                "Wellness Centre Monitoring Tool",
                "Global Targets Dashboard with real-time analytics",
                "Advanced data validation using LINQ algorithms"
            ],
            challenges: "Designing a scalable database architecture to handle complex healthcare data across multiple bureaus while ensuring data integrity and real-time performance.",
            date: "2024"
        },
        {
            id: 2,
            name: "Cozy Room JKIA & Hirwado Homes",
            description: "Responsive hospitality booking website for multi-property short-term rental business near JKIA.",
            longDescription: "Developed and deployed a comprehensive booking website for a hospitality business serving clients near Jomo Kenyatta International Airport. Features property showcase pages with dynamic content management for 3+ rental properties across multiple locations in Kenya.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "Responsive Design"],
            image: "assets/projects/cozyroom.jpg",
            liveDemo: "#",
            github: "https://github.com/JoeMugo",
            features: [
                "Property showcase with dynamic content",
                "Airbnb platform integration",
                "Google Maps location services",
                "Responsive UI/UX for mobile and desktop",
                "Rates/pricing calculator",
                "Booking inquiry system",
                "SEO optimization",
                "Social media integration (Facebook, Instagram, LinkedIn, YouTube)"
            ],
            challenges: "Creating an intuitive booking experience while integrating multiple third-party platforms and ensuring optimal performance across all devices.",
            date: "2023-2024"
        },
        {
            id: 3,
            name: "Church Management Applications",
            description: "Custom applications to automate administrative and reporting tasks for NBCC.",
            longDescription: "Developed and deployed custom applications for church administration, automating routine tasks and enhancing organizational efficiency. Led software development initiatives managing design, implementation, and maintenance of church applications, databases, and websites.",
            technologies: ["ASP.NET", "C#", "SQL Server", "JavaScript", "HTML/CSS"],
            image: "assets/projects/church.jpg",
            liveDemo: "#",
            github: "#",
            features: [
                "Automated administrative workflows",
                "Custom reporting systems",
                "Database management",
                "Website development and maintenance",
                "IT infrastructure administration",
                "Network and server management"
            ],
            challenges: "Modernizing legacy systems while ensuring data integrity and minimal disruption to ongoing church operations.",
            date: "2024"
        },
        {
            id: 4,
            name: "Interactive 3D Portfolio",
            description: "This interactive 3D portfolio with terminal interface and immersive cyberpunk-themed user experience.",
            longDescription: "Built an innovative portfolio website featuring a 3D programmer's room environment with interactive objects and a functional terminal interface. Showcases technical skills through an engaging, cyberpunk-themed experience with dynamic lighting and smooth animations.",
            technologies: ["Three.js", "JavaScript", "HTML5", "CSS3", "WebGL"],
            image: "assets/projects/portfolio.jpg",
            liveDemo: "#",
            github: "https://github.com/JoeMugo/MyPortfolio",
            features: [
                "3D interactive programmer's room",
                "Terminal-style command interface",
                "Dynamic time-of-day lighting system",
                "Interactive objects (monitor, bookshelf, window, phone)",
                "Responsive design",
                "Easter eggs and animations"
            ],
            challenges: "Balancing visual complexity with performance across different devices while maintaining smooth 60 FPS animations.",
            date: "2024"
        }
    ],

    // Work Experience
    experience: [
        {
            company: "AHF Global (Aids Healthcare Foundation)",
            position: "Full-Stack Developer",
            location: "Remote",
            startDate: "October 2024",
            endDate: "Present",
            description: "Developing and maintaining full-stack healthcare monitoring systems supporting operations across AHF bureaus in Africa, Asia, Latin America, and Europe.",
            responsibilities: [
                "Developed healthcare monitoring systems using ASP.NET Core MVC, C#, and SQL Server",
                "Designed database architecture with Entity Framework Core for 23 healthcare sections",
                "Built responsive web interfaces with JavaScript, HTML5, and CSS3",
                "Created RESTful APIs and automated PDF reporting with DinkToPdf",
                "Enhanced data validation using C# and LINQ algorithms",
                "Generated SQL/MySQL scripts for database views and custom queries",
                "Developed Wellness Centre Monitoring Tool and Global Targets Dashboard",
                "Utilized Git for version control and implemented debugging/logging mechanisms"
            ]
        },
        {
            company: "NBCC",
            position: "IT Officer",
            location: "Nairobi, Kenya",
            startDate: "January 2024",
            endDate: "January 2025",
            description: "Provided IT support and developed custom applications to automate administrative tasks.",
            responsibilities: [
                "Provided exceptional IT support for staff members",
                "Developed and deployed custom applications for automation",
                "Led software development initiatives for church applications and databases",
                "Administered IT infrastructure including servers, networks, and hardware",
                "Troubleshot and resolved system and network issues promptly"
            ]
        },
        {
            company: "Freelance/Contract",
            position: "Web Developer",
            location: "Remote",
            startDate: "January 2023",
            endDate: "Present",
            description: "Developing websites and web applications for various clients across multiple industries.",
            responsibilities: [
                "Developed responsive hospitality booking websites (Cozy Room JKIA & Hirwado Homes)",
                "Implemented property showcase pages with dynamic content management",
                "Integrated third-party booking platforms and Google Maps",
                "Built responsive UI/UX designs for optimal viewing across devices",
                "Implemented SEO optimization strategies",
                "Provided ongoing maintenance and technical support"
            ]
        },
        {
            company: "TenSpot Companies",
            position: "Customer Service Representative",
            location: "Nairobi, Kenya",
            startDate: "January 2021",
            endDate: "January 2022",
            description: "Resolved customer complaints and managed client relationships with professionalism.",
            responsibilities: [
                "Resolved customer complaints with empathy and professionalism",
                "Managed high-pressure situations effectively",
                "Handled escalated calls and complex issues",
                "Collaborated with clients on customized repayment schedules",
                "Guided clients through loan application process",
                "Utilized 3CX communication software for client engagement"
            ]
        },
        {
            company: "Sokokapu E-Commerce Ltd",
            position: "Junior Software Tester",
            location: "Nairobi, Kenya",
            startDate: "March 2019",
            endDate: "July 2020",
            description: "Performed comprehensive testing and security assessments for e-commerce platform.",
            responsibilities: [
                "Identified security vulnerabilities through penetration testing",
                "Performed functional, integration, regression, and UAT testing",
                "Conducted manual and automated testing using Selenium and Postman",
                "Developed detailed test cases and scenarios from user stories",
                "Participated in release management and deployment processes",
                "Collaborated with developers to reproduce and resolve defects",
                "Supported Customer Care by investigating transaction issues"
            ]
        }
    ],

    // Education
    education: [
        {
            institution: "Meru University of Science & Technology",
            degree: "Bachelor of Science in Entomology & Parasitology",
            location: "Meru, Kenya",
            startDate: "2017",
            endDate: "2021",
            gpa: "",
            achievements: [
                "Member of university's Tennis Society",
                "Self-taught software developer",
                "Transitioned from Biology to Software Development"
            ]
        }
    ],

    // Certifications
    certifications: [
        {
            name: "ASP.NET Core MVC Development",
            issuer: "Self-Taught / On-the-Job",
            date: "2024",
            link: "#"
        },
        {
            name: "Full-Stack Web Development",
            issuer: "Self-Taught / Practical Experience",
            date: "2019-Present",
            link: "#"
        },
        {
            name: "Software Testing & QA",
            issuer: "Sokokapu E-Commerce Ltd",
            date: "2019-2020",
            link: "#"
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
