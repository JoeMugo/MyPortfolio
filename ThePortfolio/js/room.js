// ============================================
// 3D ROOM OBJECTS
// ============================================

class RoomObjects {
    constructor(scene) {
        this.scene = scene;
        this.interactiveObjects = [];
        this.animatedObjects = [];
        
        this.createRoom();
    }

    createRoom() {
        // Create floor
        this.createFloor();
        
        // Create walls
        this.createWalls();
        
        // Create desk
        this.createDesk();
        
        // Create monitor (interactive)
        this.createMonitor();
        
        // Create keyboard and mouse
        this.createKeyboard();
        this.createMouse();
        
        // Create bookshelf (interactive)
        this.createBookshelf();
        
        // Create window (interactive)
        this.createWindow();
        
        // Create phone (interactive)
        this.createPhone();
        
        // Create decorative items
        this.createCoffeeMug();
        this.createPlant();
        this.createPoster();
        
        console.log('✓ Room objects created');
    }

    createFloor() {
        const geometry = new THREE.PlaneGeometry(20, 20);
        const material = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            roughness: 0.8,
            metalness: 0.2
        });
        const floor = new THREE.Mesh(geometry, material);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        this.scene.addToScene(floor);
    }

    createWalls() {
        // Back wall
        const wallGeometry = new THREE.PlaneGeometry(20, 10);
        const wallMaterial = new THREE.MeshStandardMaterial({
            color: 0x16213e,
            roughness: 0.9
        });
        
        const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
        backWall.position.set(0, 5, -10);
        backWall.receiveShadow = true;
        this.scene.addToScene(backWall);
        
        // Side walls
        const sideWall1 = new THREE.Mesh(wallGeometry, wallMaterial);
        sideWall1.position.set(-10, 5, 0);
        sideWall1.rotation.y = Math.PI / 2;
        sideWall1.receiveShadow = true;
        this.scene.addToScene(sideWall1);
        
        const sideWall2 = new THREE.Mesh(wallGeometry, wallMaterial);
        sideWall2.position.set(10, 5, 0);
        sideWall2.rotation.y = -Math.PI / 2;
        sideWall2.receiveShadow = true;
        this.scene.addToScene(sideWall2);
    }

    createDesk() {
        const deskGroup = new THREE.Group();
        
        // Desk top
        const topGeometry = new THREE.BoxGeometry(6, 0.1, 3);
        const topMaterial = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.7,
            metalness: 0.3
        });
        const deskTop = new THREE.Mesh(topGeometry, topMaterial);
        deskTop.position.y = 1.5;
        deskTop.castShadow = true;
        deskTop.receiveShadow = true;
        deskGroup.add(deskTop);
        
        // Desk legs
        const legGeometry = new THREE.BoxGeometry(0.1, 1.5, 0.1);
        const legMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
        
        const positions = [
            [-2.9, 0.75, -1.4],
            [2.9, 0.75, -1.4],
            [-2.9, 0.75, 1.4],
            [2.9, 0.75, 1.4]
        ];
        
        positions.forEach(pos => {
            const leg = new THREE.Mesh(legGeometry, legMaterial);
            leg.position.set(...pos);
            leg.castShadow = true;
            deskGroup.add(leg);
        });
        
        deskGroup.position.set(0, 0, -2);
        this.scene.addToScene(deskGroup);
    }

    createMonitor() {
        const monitorGroup = new THREE.Group();
        
        // Monitor stand
        const standGeometry = new THREE.CylinderGeometry(0.15, 0.2, 0.3, 16);
        const standMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
        const stand = new THREE.Mesh(standGeometry, standMaterial);
        stand.position.y = 0.15;
        monitorGroup.add(stand);
        
        // Monitor screen
        const screenGeometry = new THREE.BoxGeometry(2, 1.2, 0.1);
        const screenMaterial = new THREE.MeshStandardMaterial({
            color: 0x0a0a0a,
            emissive: 0x00ffff,
            emissiveIntensity: 0.5,
            roughness: 0.3,
            metalness: 0.7
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.y = 0.9;
        screen.castShadow = true;
        monitorGroup.add(screen);
        
        // Monitor frame
        const frameGeometry = new THREE.BoxGeometry(2.1, 1.3, 0.05);
        const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.set(0, 0.9, -0.075);
        monitorGroup.add(frame);
        
        monitorGroup.position.set(0, 1.5, -2.5);
        
        // Make interactive
        monitorGroup.userData.interactive = true;
        monitorGroup.userData.hintText = 'Click to view projects';
        monitorGroup.userData.onClick = () => {
            console.log('Monitor clicked!');
            Utils.showNotification('Opening projects...', 'info');
            // Show projects overlay
            const overlay = document.getElementById('project-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
                this.loadProjects();
            }
        };
        
        this.interactiveObjects.push(monitorGroup);
        this.animatedObjects.push({
            object: screen,
            animate: (time) => {
                screen.material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.1;
            }
        });
        
        this.scene.addToScene(monitorGroup);
    }

    createKeyboard() {
        const keyboardGeometry = new THREE.BoxGeometry(1.2, 0.05, 0.4);
        const keyboardMaterial = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.6
        });
        const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
        keyboard.position.set(0, 1.55, -1.2);
        keyboard.castShadow = true;
        this.scene.addToScene(keyboard);
    }

    createMouse() {
        const mouseGeometry = new THREE.BoxGeometry(0.15, 0.08, 0.2);
        const mouseMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            roughness: 0.5
        });
        const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
        mouse.position.set(0.8, 1.55, -1);
        mouse.castShadow = true;
        this.scene.addToScene(mouse);
    }

    createBookshelf() {
        const bookshelfGroup = new THREE.Group();
        
        // Shelf frame
        const frameGeometry = new THREE.BoxGeometry(2, 3, 0.3);
        const frameMaterial = new THREE.MeshStandardMaterial({
            color: 0x3e2723,
            roughness: 0.8
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        bookshelfGroup.add(frame);
        
        // Books
        const bookColors = [0xff5555, 0x55ff55, 0x5555ff, 0xffff55, 0xff55ff, 0x55ffff];
        for (let i = 0; i < 12; i++) {
            const bookGeometry = new THREE.BoxGeometry(0.15, 0.4, 0.25);
            const bookMaterial = new THREE.MeshStandardMaterial({
                color: bookColors[i % bookColors.length],
                roughness: 0.7
            });
            const book = new THREE.Mesh(bookGeometry, bookMaterial);
            
            const row = Math.floor(i / 4);
            const col = i % 4;
            book.position.set(-0.6 + col * 0.4, -1 + row * 0.8, 0.05);
            book.castShadow = true;
            bookshelfGroup.add(book);
        }
        
        bookshelfGroup.position.set(-4, 3, -5);
        
        // Make interactive
        bookshelfGroup.userData.interactive = true;
        bookshelfGroup.userData.hintText = 'Click to view skills';
        bookshelfGroup.userData.onClick = () => {
            console.log('Bookshelf clicked!');
            Utils.showNotification('Loading skills...', 'info');
            const overlay = document.getElementById('skills-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
                this.loadSkills();
            }
        };
        
        this.interactiveObjects.push(bookshelfGroup);
        this.scene.addToScene(bookshelfGroup);
    }

    createWindow() {
        const windowGroup = new THREE.Group();
        
        // Window frame
        const frameGeometry = new THREE.BoxGeometry(3, 3, 0.2);
        const frameMaterial = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.7
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        windowGroup.add(frame);
        
        // Window glass
        const glassGeometry = new THREE.PlaneGeometry(2.8, 2.8);
        const glassMaterial = new THREE.MeshStandardMaterial({
            color: 0x87ceeb,
            transparent: true,
            opacity: 0.3,
            emissive: 0x4a90e2,
            emissiveIntensity: 0.2
        });
        const glass = new THREE.Mesh(glassGeometry, glassMaterial);
        glass.position.z = 0.11;
        windowGroup.add(glass);
        
        windowGroup.position.set(4, 4, -9.9);
        
        // Make interactive
        windowGroup.userData.interactive = true;
        windowGroup.userData.hintText = 'Click to change time of day';
        windowGroup.userData.onClick = () => {
            console.log('Window clicked!');
            if (window.lightingSystem) {
                window.lightingSystem.cycleTimeOfDay();
            }
        };
        
        this.interactiveObjects.push(windowGroup);
        this.scene.addToScene(windowGroup);
    }

    createPhone() {
        const phoneGroup = new THREE.Group();
        
        // Phone body
        const bodyGeometry = new THREE.BoxGeometry(0.15, 0.02, 0.25);
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            roughness: 0.3,
            metalness: 0.7
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        phoneGroup.add(body);
        
        // Phone screen
        const screenGeometry = new THREE.PlaneGeometry(0.13, 0.23);
        const screenMaterial = new THREE.MeshStandardMaterial({
            color: 0x0a0a0a,
            emissive: 0x00ff00,
            emissiveIntensity: 0.3
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.y = 0.011;
        screen.rotation.x = -Math.PI / 2;
        phoneGroup.add(screen);
        
        phoneGroup.position.set(-1.5, 1.56, -1.5);
        
        // Make interactive
        phoneGroup.userData.interactive = true;
        phoneGroup.userData.hintText = 'Click for contact info';
        phoneGroup.userData.onClick = () => {
            console.log('Phone clicked!');
            Utils.showNotification('Opening contact info...', 'info');
            const overlay = document.getElementById('contact-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
                this.loadContact();
            }
        };
        
        this.interactiveObjects.push(phoneGroup);
        this.animatedObjects.push({
            object: screen,
            animate: (time) => {
                screen.material.emissiveIntensity = 0.3 + Math.sin(time * 3) * 0.1;
            }
        });
        
        this.scene.addToScene(phoneGroup);
    }

    createCoffeeMug() {
        const mugGroup = new THREE.Group();
        
        // Mug body
        const bodyGeometry = new THREE.CylinderGeometry(0.12, 0.1, 0.2, 16);
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.6
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        mugGroup.add(body);
        
        // Coffee
        const coffeeGeometry = new THREE.CircleGeometry(0.11, 16);
        const coffeeMaterial = new THREE.MeshStandardMaterial({
            color: 0x3e2723,
            roughness: 0.8
        });
        const coffee = new THREE.Mesh(coffeeMaterial, coffeeGeometry);
        coffee.position.y = 0.1;
        coffee.rotation.x = -Math.PI / 2;
        mugGroup.add(coffee);
        
        mugGroup.position.set(1.5, 1.65, -1.5);
        this.scene.addToScene(mugGroup);
    }

    createPlant() {
        const plantGroup = new THREE.Group();
        
        // Pot
        const potGeometry = new THREE.CylinderGeometry(0.15, 0.12, 0.2, 16);
        const potMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.7
        });
        const pot = new THREE.Mesh(potGeometry, potMaterial);
        plantGroup.add(pot);
        
        // Leaves
        const leafGeometry = new THREE.SphereGeometry(0.2, 8, 8);
        const leafMaterial = new THREE.MeshStandardMaterial({
            color: 0x2ecc71,
            roughness: 0.8
        });
        for (let i = 0; i < 3; i++) {
            const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
            leaf.position.set(
                (Math.random() - 0.5) * 0.2,
                0.2 + i * 0.1,
                (Math.random() - 0.5) * 0.2
            );
            leaf.scale.set(0.8, 1.2, 0.8);
            plantGroup.add(leaf);
        }
        
        plantGroup.position.set(-2, 1.65, -2);
        this.scene.addToScene(plantGroup);
    }

    createPoster() {
        const posterGeometry = new THREE.PlaneGeometry(1.5, 2);
        const posterMaterial = new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            emissive: 0x00ffff,
            emissiveIntensity: 0.2
        });
        const poster = new THREE.Mesh(posterGeometry, posterMaterial);
        poster.position.set(-3, 3, -9.9);
        this.scene.addToScene(poster);
    }

    loadProjects() {
        const content = document.getElementById('project-content');
        if (!content) return;
        
        let html = '';
        portfolioData.projects.forEach(project => {
            html += `
                <div class="project-card">
                    <div class="project-name">${project.name}</div>
                    <p class="project-desc">${project.description}</p>
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
        content.innerHTML = html;
    }

    loadSkills() {
        const content = document.getElementById('skills-content');
        if (!content) return;
        
        let html = '<div class="command-output">';
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
                html += `<p class="highlight">${categories[category]}:</p>`;
                categorySkills.forEach(skill => {
                    const color = Utils.getSkillCategoryColor(category);
                    html += `
                        <div class="skill-item">
                            <div class="skill-name">
                                <span>${skill.name}</span>
                                <span>${skill.level}%</span>
                            </div>
                            ${Utils.createProgressBar(skill.level, color)}
                        </div>
                    `;
                });
                html += '<br>';
            }
        });
        html += '</div>';
        content.innerHTML = html;
    }

    loadContact() {
        const content = document.getElementById('contact-content');
        if (!content) return;
        
        const html = `
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
        `;
        content.innerHTML = html;
    }

    update(deltaTime) {
        // Update animated objects
        const time = Date.now() * 0.001;
        this.animatedObjects.forEach(item => {
            if (item.animate) {
                item.animate(time);
            }
        });
    }
}

// Initialize room when scene is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.scene3D) {
            window.roomObjects = new RoomObjects(window.scene3D);
        }
    }, 100);
});

