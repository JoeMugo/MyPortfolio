// ============================================
// TERMINAL COMMANDS
// ============================================

const Commands = {
    // Help command
    help: (terminal) => {
        terminal.showHelp();
    },

    // About command
    about: (terminal) => {
        const aboutHTML = `
<div class="command-output">
    <div class="command-header">About Me:</div>
    <br>
    <p class="highlight">${portfolioData.personal.name}</p>
    <p class="info">${portfolioData.personal.title}</p>
    <br>
    <p>${portfolioData.personal.bio}</p>
    <br>
    <p>📍 Location: ${portfolioData.personal.location}</p>
    <p>📧 Email: ${portfolioData.personal.email}</p>
    <br>
    <p class="success">Thanks for visiting my portfolio! 🚀</p>
</div>
        `;
        terminal.writeLine(aboutHTML);
    },

    // Skills command
    skills: (terminal) => {
        terminal.showSkills();
    },

    // Projects command
    projects: (terminal) => {
        terminal.showProjects();
    },

    // Experience command
    experience: (terminal) => {
        let expHTML = '<div class="command-output"><div class="command-header">Work Experience:</div><br>';
        
        portfolioData.experience.forEach((exp, index) => {
            const current = exp.endDate === 'Present';
            expHTML += `
                <div class="project-card">
                    <div class="project-name">${exp.position}</div>
                    <p class="info">${exp.company} • ${exp.location}</p>
                    <p class="text-dim">${exp.startDate} - ${exp.endDate}</p>
                    <br>
                    <p>${exp.description}</p>
                    <br>
                    <p class="highlight">Key Responsibilities:</p>
                    <ul style="margin-left: 20px; color: var(--text-dim);">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            `;
            if (index < portfolioData.experience.length - 1) {
                expHTML += '<br>';
            }
        });
        
        expHTML += '</div>';
        terminal.writeLine(expHTML);
    },

    // Education command
    education: (terminal) => {
        let eduHTML = '<div class="command-output"><div class="command-header">Education:</div><br>';
        
        portfolioData.education.forEach(edu => {
            eduHTML += `
                <div class="project-card">
                    <div class="project-name">${edu.degree}</div>
                    <p class="info">${edu.institution}</p>
                    <p class="text-dim">${edu.location} • ${edu.startDate} - ${edu.endDate}</p>
                    ${edu.gpa ? `<p>GPA: ${edu.gpa}</p>` : ''}
                    <br>
                    <p class="highlight">Achievements:</p>
                    <ul style="margin-left: 20px; color: var(--text-dim);">
                        ${edu.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        
        eduHTML += '</div>';
        terminal.writeLine(eduHTML);
    },

    // Certifications command
    certifications: (terminal) => {
        let certHTML = '<div class="command-output"><div class="command-header">Certifications:</div><br>';
        
        portfolioData.certifications.forEach((cert, index) => {
            certHTML += `
                <div class="contact-item">
                    <span class="contact-icon">🏆</span>
                    <div>
                        <a href="${cert.link}" target="_blank" class="contact-link highlight">${cert.name}</a>
                        <p class="text-dim" style="margin-left: 0;">${cert.issuer} • ${cert.date}</p>
                    </div>
                </div>
            `;
        });
        
        certHTML += '</div>';
        terminal.writeLine(certHTML);
    },

    // Contact command
    contact: (terminal) => {
        terminal.showContact();
    },

    // GitHub command
    github: (terminal) => {
        terminal.writeSuccess(`Opening GitHub profile...`);
        Utils.openURL(portfolioData.social.github);
    },

    // LinkedIn command
    linkedin: (terminal) => {
        terminal.writeSuccess(`Opening LinkedIn profile...`);
        Utils.openURL(portfolioData.social.linkedin);
    },

    // Resume command
    resume: (terminal) => {
        terminal.writeSuccess(`Downloading resume...`);
        terminal.writeInfo(`Resume download initiated. Check your downloads folder.`);
        // In a real scenario, this would trigger a download
        // window.location.href = portfolioData.social.resume;
    },

    // Clear command
    clear: (terminal) => {
        terminal.clear();
    },

    // ============================================
    // EASTER EGG COMMANDS
    // ============================================

    // Time command
    time: (terminal) => {
        const clock = Utils.getASCIIClock();
        terminal.writeLine(`<pre class="ascii-art">${clock}</pre>`);
    },

    // Joke command
    joke: (terminal) => {
        const joke = Utils.getRandomItem(portfolioData.jokes);
        terminal.writeLine(`<div class="command-output"><p class="highlight">😄 ${joke}</p></div>`);
    },

    // Quote command
    quote: (terminal) => {
        const quote = Utils.getRandomItem(portfolioData.quotes);
        terminal.writeLine(`<div class="command-output"><p class="info">💭 "${quote}"</p></div>`);
    },

    // Matrix command
    matrix: async (terminal) => {
        terminal.writeLine(`<p class="success">Entering the Matrix...</p>`);
        await Utils.sleep(500);
        
        const matrixText = `
<pre class="ascii-art" style="color: #00ff00;">
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Knock, knock, Neo.
</pre>
        `;
        terminal.writeLine(matrixText);
        
        // Create matrix rain effect
        const terminalBody = document.getElementById('terminal-body');
        Utils.createMatrixRain(terminalBody, 3000);
    },

    // Hack command
    hack: async (terminal) => {
        terminal.writeLine(`<p class="warning">⚠️ Initiating hacking sequence...</p>`);
        await Utils.sleep(500);
        
        const hackingSteps = [
            'Connecting to mainframe...',
            'Bypassing firewall...',
            'Decrypting password hash...',
            'Accessing database...',
            'Downloading files...',
            'Covering tracks...',
            'Mission accomplished! 😎'
        ];
        
        for (const step of hackingSteps) {
            await Utils.sleep(400);
            terminal.writeLine(`<p class="success">✓ ${step}</p>`);
        }
        
        await Utils.sleep(500);
        terminal.writeLine(`<p class="highlight">Just kidding! This is a portfolio, not a hacking tool 😄</p>`);
    },

    // Coffee command
    coffee: async (terminal) => {
        terminal.writeLine(`<p class="info">☕ Brewing coffee...</p>`);
        await Utils.sleep(1000);
        
        const coffeeArt = `
<pre class="ascii-art">
      ( (
       ) )
    ........
    |      |]
    \\      /
     \`----'
</pre>
        `;
        terminal.writeLine(coffeeArt);
        terminal.writeLine(`<p class="success">✓ Coffee is ready! Enjoy your coding session! ☕</p>`);
    },

    // Secret commands
    sudo: (terminal) => {
        terminal.writeError(`Nice try! But you don't have sudo privileges here 😏`);
    },

    exit: (terminal) => {
        terminal.writeLine(`<p class="warning">You can't exit from here! This is your portfolio! 😄</p>`);
    },

    ls: (terminal) => {
        terminal.writeLine(`<p class="info">about  skills  projects  experience  education  contact</p>`);
        terminal.writeInfo(`Hint: These are commands you can run! Try 'help' for more.`);
    },

    pwd: (terminal) => {
        terminal.writeLine(`<p class="info">/home/guest/portfolio</p>`);
    },

    whoami: (terminal) => {
        terminal.writeLine(`<p class="info">guest</p>`);
        terminal.writeLine(`<p class="text-dim">But you can learn more about the owner with 'about' command!</p>`);
    },

    echo: (terminal) => {
        terminal.writeLine(`<p class="info">Hello, World!</p>`);
    },

    ping: (terminal) => {
        terminal.writeLine(`<p class="success">PING portfolio.local (127.0.0.1): 56 data bytes</p>`);
        terminal.writeLine(`<p class="success">64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms</p>`);
        terminal.writeLine(`<p class="success">✓ Connection successful!</p>`);
    },

    history: (terminal) => {
        if (terminal.commandHistory.length === 0) {
            terminal.writeInfo(`No command history yet.`);
        } else {
            terminal.writeLine(`<div class="command-output"><div class="command-header">Command History:</div>`);
            terminal.commandHistory.forEach((cmd, index) => {
                terminal.writeLine(`<p>${index + 1}. ${cmd}</p>`);
            });
            terminal.writeLine(`</div>`);
        }
    },

    theme: (terminal) => {
        terminal.writeInfo(`Theme switching coming soon! For now, click the window in the 3D room to change time of day.`);
    }
};

// Alias commands
Commands.h = Commands.help;
Commands.cls = Commands.clear;
Commands['?'] = Commands.help;
