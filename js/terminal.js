// ============================================
// TERMINAL CLASS
// ============================================

class Terminal {
    constructor() {
        this.input = document.getElementById('terminal-input');
        this.output = document.getElementById('terminal-output');
        this.body = document.getElementById('terminal-body');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentCommand = '';
        
        this.init();
    }

    init() {
        // Focus input when clicking anywhere in terminal
        this.body.addEventListener('click', () => {
            this.input.focus();
        });

        // Handle input
        this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Auto-focus on load
        this.input.focus();
        
        // Prevent cursor from showing in input
        this.input.addEventListener('input', () => {
            this.currentCommand = this.input.value;
        });
    }

    handleKeyDown(e) {
        switch(e.key) {
            case 'Enter':
                e.preventDefault();
                this.executeCommand();
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory('up');
                break;
                
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory('down');
                break;
                
            case 'Tab':
                e.preventDefault();
                this.autoComplete();
                break;
                
            case 'l':
                if (e.ctrlKey) {
                    e.preventDefault();
                    this.clear();
                }
                break;
        }
    }

    executeCommand() {
        const command = this.input.value.trim().toLowerCase();
        
        if (!command) return;
        
        // Add to history
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;
        
        // Display command
        this.writeLine(`<span class="terminal-prompt">joelmugo@portfolio:~$</span> ${command}`, 'command');
        
        // Execute command
        if (Commands[command]) {
            Commands[command](this);
        } else {
            this.writeError(`Command not found: ${command}. Type 'help' for available commands.`);
        }
        
        // Clear input
        this.input.value = '';
        this.currentCommand = '';
        
        // Scroll to bottom
        Utils.scrollToBottom(this.body);
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;
        
        if (direction === 'up') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
            }
        } else {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
            } else {
                this.historyIndex = this.commandHistory.length;
                this.input.value = '';
                return;
            }
        }
        
        this.input.value = this.commandHistory[this.historyIndex] || '';
    }

    autoComplete() {
        const input = this.input.value.toLowerCase();
        if (!input) return;
        
        const commands = Object.keys(Commands);
        const matches = commands.filter(cmd => cmd.startsWith(input));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.writeLine(`\nPossible commands: ${matches.join(', ')}\n`);
        }
    }

    writeLine(content, className = '') {
        const line = document.createElement('div');
        line.className = className;
        line.innerHTML = content;
        this.output.appendChild(line);
    }

    write(content) {
        const span = document.createElement('span');
        span.innerHTML = content;
        this.output.appendChild(span);
    }

    writeSuccess(message) {
        this.writeLine(`<span class="success">✓ ${message}</span>`);
    }

    writeError(message) {
        this.writeLine(`<span class="error">✗ ${message}</span>`);
    }

    writeInfo(message) {
        this.writeLine(`<span class="info">ℹ ${message}</span>`);
    }

    writeWarning(message) {
        this.writeLine(`<span class="warning">⚠ ${message}</span>`);
    }

    async typeWrite(text, speed = 30) {
        const line = document.createElement('div');
        this.output.appendChild(line);
        
        for (let i = 0; i < text.length; i++) {
            line.textContent += text[i];
            await Utils.sleep(speed);
            Utils.scrollToBottom(this.body);
        }
    }

    clear() {
        this.output.innerHTML = '';
    }

    showHelp() {
        const helpText = `
<div class="command-output">
    <div class="command-header">Available Commands:</div>
    <ul class="command-list">
        <li><span class="command-name">help</span><span class="command-desc">Show this help message</span></li>
        <li><span class="command-name">about</span><span class="command-desc">Learn about me</span></li>
        <li><span class="command-name">skills</span><span class="command-desc">View my technical skills</span></li>
        <li><span class="command-name">projects</span><span class="command-desc">See my projects</span></li>
        <li><span class="command-name">experience</span><span class="command-desc">View my work experience</span></li>
        <li><span class="command-name">education</span><span class="command-desc">See my educational background</span></li>
        <li><span class="command-name">certifications</span><span class="command-desc">View my certifications</span></li>
        <li><span class="command-name">contact</span><span class="command-desc">Get in touch with me</span></li>
        <li><span class="command-name">github</span><span class="command-desc">Open my GitHub profile</span></li>
        <li><span class="command-name">linkedin</span><span class="command-desc">Open my LinkedIn profile</span></li>
        <li><span class="command-name">resume</span><span class="command-desc">Download my resume</span></li>
        <li><span class="command-name">clear</span><span class="command-desc">Clear the terminal</span></li>
    </ul>
    <br>
    <div class="command-header">Easter Eggs:</div>
    <ul class="command-list">
        <li><span class="command-name">time</span><span class="command-desc">Show current time with ASCII art</span></li>
        <li><span class="command-name">joke</span><span class="command-desc">Get a random programmer joke</span></li>
        <li><span class="command-name">quote</span><span class="command-desc">Get an inspirational quote</span></li>
        <li><span class="command-name">matrix</span><span class="command-desc">Enter the Matrix...</span></li>
        <li><span class="command-name">hack</span><span class="command-desc">Initiate hacking sequence</span></li>
        <li><span class="command-name">coffee</span><span class="command-desc">Get some coffee ☕</span></li>
    </ul>
    <br>
    <p class="info">💡 Tip: You can also click on objects in the 3D room to interact!</p>
    <p class="info">💡 Use ↑/↓ arrows to navigate command history</p>
    <p class="info">💡 Press Tab for auto-completion</p>
</div>
        `;
        this.writeLine(helpText);
    }

    showSkills() {
        let skillsHTML = '<div class="command-output"><div class="command-header">Technical Skills:</div><br>';
        
        const categories = {
            frontend: 'Frontend Development',
            backend: 'Backend Development',
            database: 'Databases',
            tools: 'Tools & DevOps',
            cloud: 'Cloud Services'
        };
        
        Object.keys(categories).forEach(category => {
            const categorySkills = portfolioData.skills.filter(s => s.category === category);
            if (categorySkills.length > 0) {
                skillsHTML += `<p class="highlight">${categories[category]}:</p>`;
                categorySkills.forEach(skill => {
                    const color = Utils.getSkillCategoryColor(category);
                    skillsHTML += `
                        <div class="skill-item">
                            <div class="skill-name">
                                <span>${skill.name}</span>
                                <span>${skill.level}% • ${skill.years} years</span>
                            </div>
                            ${Utils.createProgressBar(skill.level, color)}
                        </div>
                    `;
                });
                skillsHTML += '<br>';
            }
        });
        
        skillsHTML += '</div>';
        this.writeLine(skillsHTML);
    }

    showProjects() {
        let projectsHTML = '<div class="command-output"><div class="command-header">My Projects:</div><br>';
        
        portfolioData.projects.forEach((project, index) => {
            projectsHTML += `
                <div class="project-card">
                    <div class="project-name">${index + 1}. ${project.name}</div>
                    <div class="project-desc">${project.description}</div>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" class="project-link">Live Demo</a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub</a>` : ''}
                    </div>
                </div>
            `;
        });
        
        projectsHTML += '<br><p class="info">💡 Click the monitor in the 3D room for detailed project view!</p></div>';
        this.writeLine(projectsHTML);
    }

    showContact() {
        const contactHTML = `
<div class="command-output">
    <div class="command-header">📧 Contact Information:</div>
    <br>
    <div class="contact-item">
        <span class="contact-icon">📧</span>
        <a href="mailto:${portfolioData.personal.email}" class="contact-link">${portfolioData.personal.email}</a>
    </div>
    <div class="contact-item">
        <span class="contact-icon">📱</span>
        <span class="contact-link">${portfolioData.personal.phone}</span>
    </div>
    <div class="contact-item">
        <span class="contact-icon">📍</span>
        <span class="contact-link">${portfolioData.personal.location}</span>
    </div>
    <div class="contact-item">
        <span class="contact-icon">💼</span>
        <a href="${portfolioData.social.linkedin}" target="_blank" class="contact-link">LinkedIn</a>
    </div>
    <div class="contact-item">
        <span class="contact-icon">🐙</span>
        <a href="${portfolioData.social.github}" target="_blank" class="contact-link">GitHub</a>
    </div>
    <br>
    <p class="info">💡 Click the phone in the 3D room for interactive contact card!</p>
</div>
        `;
        this.writeLine(contactHTML);
    }
}

// Initialize terminal when DOM is loaded
let terminal;
document.addEventListener('DOMContentLoaded', () => {
    terminal = new Terminal();
});
