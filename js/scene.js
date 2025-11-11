// ============================================
// 3D SCENE SETUP (Three.js)
// ============================================

class Scene3D {
    constructor() {
        // Check if THREE.js is loaded
        if (typeof THREE === 'undefined') {
            console.error('THREE.js is not loaded! Please check your internet connection or CDN link.');
            return;
        }
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.canvas = null;
        this.clock = new THREE.Clock();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.hoveredObject = null;
        
        this.init();
    }

    init() {
        // Get canvas element
        this.canvas = document.getElementById('three-canvas');
        
        if (!this.canvas) {
            console.error('Canvas element not found');
            return;
        }

        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        this.scene.fog = new THREE.Fog(0x0a0a0a, 10, 50);

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 2, 8);
        this.camera.lookAt(0, 1, 0);

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Add event listeners
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('click', (e) => this.onClick(e));

        // Start animation loop
        this.animate();

        console.log('✓ 3D Scene initialized');
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // Check for intersections with interactive objects
        if (window.roomObjects && window.roomObjects.interactiveObjects) {
            const intersects = this.raycaster.intersectObjects(
                window.roomObjects.interactiveObjects,
                true
            );

            if (intersects.length > 0) {
                const object = intersects[0].object;
                
                // Find the parent interactive object
                let interactiveObj = object;
                while (interactiveObj.parent && !interactiveObj.userData.interactive) {
                    interactiveObj = interactiveObj.parent;
                }

                if (interactiveObj.userData.interactive) {
                    document.body.style.cursor = 'pointer';
                    
                    // Show hint
                    const hint = document.getElementById('interaction-hint');
                    const hintText = document.getElementById('hint-text');
                    if (hint && hintText) {
                        hint.classList.remove('hidden');
                        hintText.textContent = interactiveObj.userData.hintText || 'Click to interact';
                    }

                    // Highlight effect
                    if (this.hoveredObject !== interactiveObj) {
                        this.hoveredObject = interactiveObj;
                        this.highlightObject(interactiveObj, true);
                    }
                }
            } else {
                document.body.style.cursor = 'default';
                const hint = document.getElementById('interaction-hint');
                if (hint) hint.classList.add('hidden');
                
                if (this.hoveredObject) {
                    this.highlightObject(this.hoveredObject, false);
                    this.hoveredObject = null;
                }
            }
        }
    }

    onClick(event) {
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // Check for intersections
        if (window.roomObjects && window.roomObjects.interactiveObjects) {
            const intersects = this.raycaster.intersectObjects(
                window.roomObjects.interactiveObjects,
                true
            );

            if (intersects.length > 0) {
                const object = intersects[0].object;
                
                // Find the parent interactive object
                let interactiveObj = object;
                while (interactiveObj.parent && !interactiveObj.userData.interactive) {
                    interactiveObj = interactiveObj.parent;
                }

                if (interactiveObj.userData.interactive && interactiveObj.userData.onClick) {
                    interactiveObj.userData.onClick();
                }
            }
        }
    }

    highlightObject(object, highlight) {
        object.traverse((child) => {
            if (child.isMesh && child.material) {
                if (highlight) {
                    child.material.emissive = new THREE.Color(0x00ffff);
                    child.material.emissiveIntensity = 0.3;
                } else {
                    child.material.emissive = new THREE.Color(0x000000);
                    child.material.emissiveIntensity = 0;
                }
            }
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const deltaTime = this.clock.getDelta();

        // Update room animations if available
        if (window.roomObjects && window.roomObjects.update) {
            window.roomObjects.update(deltaTime);
        }

        // Update lighting if available
        if (window.lightingSystem && window.lightingSystem.update) {
            window.lightingSystem.update(deltaTime);
        }

        // Update particles if available
        if (window.particleSystem && window.particleSystem.update) {
            window.particleSystem.update(deltaTime);
        }

        // Render scene
        this.renderer.render(this.scene, this.camera);
    }

    addToScene(object) {
        this.scene.add(object);
    }

    removeFromScene(object) {
        this.scene.remove(object);
    }
}

// Initialize scene when DOM is loaded
let scene3D;
document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE !== 'undefined') {
        scene3D = new Scene3D();
        window.scene3D = scene3D; // Make globally accessible
    } else {
        console.error('Three.js not loaded!');
    }
});

