// ============================================
// MAIN APPLICATION INITIALIZATION
// ============================================

class PortfolioApp {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.mainContainer = document.getElementById('main-container');
        this.progressFill = document.getElementById('progress-fill');
        this.loadingStatus = document.getElementById('loading-status');
        
        this.init();
    }

    async init() {
        // Simulate loading process
        await this.simulateLoading();
        
        // Hide loading screen
        this.hideLoadingScreen();
        
        // Initialize event listeners
        this.initEventListeners();
        
        // Show welcome message
        this.showWelcomeMessage();
    }

    async simulateLoading() {
        const steps = [
            { progress: 20, message: 'Loading Three.js...' },
            { progress: 40, message: 'Initializing 3D scene...' },
            { progress: 60, message: 'Loading room models...' },
            { progress: 80, message: 'Setting up terminal...' },
            { progress: 100, message: 'Ready!' }
        ];

        for (const step of steps) {
            await Utils.sleep(300);
            this.progressFill.style.width = `${step.progress}%`;
            this.loadingStatus.textContent = step.message;
        }

        await Utils.sleep(500);
    }

    hideLoadingScreen() {
        this.loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
            this.mainContainer.classList.remove('hidden');
        }, 500);
    }

    initEventListeners() {
        // Theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                Utils.showNotification('Click the window in the 3D room to change time of day!', 'info');
            });
        }

        // Sound toggle button
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', () => {
                Utils.showNotification('Sound effects coming soon!', 'info');
            });
        }

        // Help button
        const helpBtn = document.getElementById('help-btn');
        if (helpBtn) {
            helpBtn.addEventListener('click', () => {
                if (terminal) {
                    terminal.showHelp();
                    terminal.input.focus();
                }
            });
        }

        // Close buttons for overlays
        const closeProjects = document.getElementById('close-projects');
        if (closeProjects) {
            closeProjects.addEventListener('click', () => {
                document.getElementById('project-overlay').classList.add('hidden');
            });
        }

        const closeSkills = document.getElementById('close-skills');
        if (closeSkills) {
            closeSkills.addEventListener('click', () => {
                document.getElementById('skills-overlay').classList.add('hidden');
            });
        }

        const closeContact = document.getElementById('close-contact');
        if (closeContact) {
            closeContact.addEventListener('click', () => {
                document.getElementById('contact-overlay').classList.add('hidden');
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // ESC to close overlays
            if (e.key === 'Escape') {
                document.getElementById('project-overlay')?.classList.add('hidden');
                document.getElementById('skills-overlay')?.classList.add('hidden');
                document.getElementById('contact-overlay')?.classList.add('hidden');
            }

            // Focus terminal on any key (except when in overlay)
            if (!e.ctrlKey && !e.altKey && !e.metaKey) {
                const overlaysVisible = 
                    !document.getElementById('project-overlay')?.classList.contains('hidden') ||
                    !document.getElementById('skills-overlay')?.classList.contains('hidden') ||
                    !document.getElementById('contact-overlay')?.classList.contains('hidden');
                
                if (!overlaysVisible && terminal && document.activeElement !== terminal.input) {
                    terminal.input.focus();
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', Utils.debounce(() => {
            // Handle responsive adjustments
            if (Utils.isMobile()) {
                console.log('Mobile view detected');
            }
        }, 250));
    }

    showWelcomeMessage() {
        // Optional: Add any additional welcome animations or messages
        console.log('%c Welcome to my Portfolio! ', 'background: #00ffff; color: #000; font-size: 20px; padding: 10px;');
        console.log('%c Type "help" in the terminal to get started! ', 'background: #00ff00; color: #000; font-size: 14px; padding: 5px;');
    }
}

// ============================================
// 3D SCENE IS NOW FULLY IMPLEMENTED
// ============================================
// The 3D scene, room objects, lighting, and interactions
// are now implemented in their respective files:
// - scene.js: Main 3D scene setup
// - room.js: 3D room objects
// - lighting.js: Lighting system
// - interactions.js: Click interactions (coming in Phase 4)

// ============================================
// APPLICATION START
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize main application
    const app = new PortfolioApp();
    
    // Initialize 3D scene (placeholder for now)
    try {
        if (typeof THREE !== 'undefined') {
            Scene3D.init();
        } else {
            console.warn('Three.js not loaded. 3D features will be disabled.');
        }
    } catch (error) {
        console.error('Error initializing 3D scene:', error);
    }
});

// ============================================
// UTILITY: Console Easter Egg
// ============================================

setTimeout(() => {
    console.log(`
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║   Hey there, fellow developer! 👋                        ║
    ║                                                           ║
    ║   I see you're checking out the console.                 ║
    ║   Nice! I like curious people.                           ║
    ║                                                           ║
    ║   Want to see something cool?                            ║
    ║   Try typing these commands in the terminal:             ║
    ║                                                           ║
    ║   • matrix  - Enter the Matrix                           ║
    ║   • hack    - Initiate hacking sequence                  ║
    ║   • joke    - Get a programmer joke                      ║
    ║                                                           ║
    ║   Or explore the 3D room by clicking on objects!         ║
    ║                                                           ║
    ║   Happy exploring! 🚀                                     ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
    `);
}, 2000);
