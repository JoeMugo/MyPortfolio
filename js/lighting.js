// ============================================
// 3D LIGHTING SYSTEM
// ============================================

class LightingSystem {
    constructor(scene) {
        this.scene = scene;
        this.timeOfDay = 'night'; // morning, afternoon, night
        this.transitionDuration = 2000; // 2 seconds
        this.isTransitioning = false;
        
        this.lights = {};
        this.createLights();
        this.setTimeOfDay('night'); // Start with night theme
    }

    createLights() {
        // Ambient light (base lighting)
        this.lights.ambient = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.addToScene(this.lights.ambient);

        // Directional light (sun/moon)
        this.lights.directional = new THREE.DirectionalLight(0x4a90e2, 0.8);
        this.lights.directional.position.set(5, 10, 5);
        this.lights.directional.castShadow = true;
        this.lights.directional.shadow.mapSize.width = 2048;
        this.lights.directional.shadow.mapSize.height = 2048;
        this.lights.directional.shadow.camera.near = 0.5;
        this.lights.directional.shadow.camera.far = 50;
        this.scene.addToScene(this.lights.directional);

        // Desk lamp (point light)
        this.lights.deskLamp = new THREE.PointLight(0xffa500, 1, 10);
        this.lights.deskLamp.position.set(-2, 3, -2);
        this.lights.deskLamp.castShadow = true;
        this.scene.addToScene(this.lights.deskLamp);

        // Monitor glow (point light)
        this.lights.monitorGlow = new THREE.PointLight(0x00ffff, 0.8, 5);
        this.lights.monitorGlow.position.set(0, 2.5, -2);
        this.scene.addToScene(this.lights.monitorGlow);

        // Phone glow (point light)
        this.lights.phoneGlow = new THREE.PointLight(0x00ff00, 0.3, 2);
        this.lights.phoneGlow.position.set(-1.5, 1.7, -1.5);
        this.scene.addToScene(this.lights.phoneGlow);

        // Hemisphere light (sky lighting)
        this.lights.hemisphere = new THREE.HemisphereLight(0x87ceeb, 0x1a1a2e, 0.3);
        this.scene.addToScene(this.lights.hemisphere);

        console.log('✓ Lighting system initialized');
    }

    setTimeOfDay(time) {
        this.timeOfDay = time;

        const settings = {
            morning: {
                ambient: { color: 0xffeaa7, intensity: 0.6 },
                directional: { color: 0xffd700, intensity: 1.2, position: [10, 15, 5] },
                hemisphere: { skyColor: 0x87ceeb, groundColor: 0xffeaa7, intensity: 0.5 },
                deskLamp: { intensity: 0.3 },
                monitorGlow: { intensity: 0.4 },
                phoneGlow: { intensity: 0.2 },
                fog: { color: 0x1a1a2e, near: 15, far: 50 },
                background: 0x2c3e50
            },
            afternoon: {
                ambient: { color: 0xffffff, intensity: 0.8 },
                directional: { color: 0xffffff, intensity: 1.5, position: [0, 20, 10] },
                hemisphere: { skyColor: 0x87ceeb, groundColor: 0xffffff, intensity: 0.7 },
                deskLamp: { intensity: 0.2 },
                monitorGlow: { intensity: 0.3 },
                phoneGlow: { intensity: 0.1 },
                fog: { color: 0x2c3e50, near: 20, far: 60 },
                background: 0x3e5c76
            },
            night: {
                ambient: { color: 0x1e3a5f, intensity: 0.3 },
                directional: { color: 0x4a90e2, intensity: 0.5, position: [-5, 10, -5] },
                hemisphere: { skyColor: 0x0a0a2e, groundColor: 0x1a1a2e, intensity: 0.2 },
                deskLamp: { intensity: 1.2 },
                monitorGlow: { intensity: 1.0 },
                phoneGlow: { intensity: 0.4 },
                fog: { color: 0x0a0a0a, near: 10, far: 50 },
                background: 0x0a0a0a
            }
        };

        const config = settings[time];
        if (!config) return;

        // Apply settings
        this.lights.ambient.color.setHex(config.ambient.color);
        this.lights.ambient.intensity = config.ambient.intensity;

        this.lights.directional.color.setHex(config.directional.color);
        this.lights.directional.intensity = config.directional.intensity;
        this.lights.directional.position.set(...config.directional.position);

        this.lights.hemisphere.color.setHex(config.hemisphere.skyColor);
        this.lights.hemisphere.groundColor.setHex(config.hemisphere.groundColor);
        this.lights.hemisphere.intensity = config.hemisphere.intensity;

        this.lights.deskLamp.intensity = config.deskLamp.intensity;
        this.lights.monitorGlow.intensity = config.monitorGlow.intensity;
        this.lights.phoneGlow.intensity = config.phoneGlow.intensity;

        // Update scene
        if (this.scene.scene) {
            this.scene.scene.background.setHex(config.background);
            this.scene.scene.fog.color.setHex(config.fog.color);
            this.scene.scene.fog.near = config.fog.near;
            this.scene.scene.fog.far = config.fog.far;
        }

        console.log(`✓ Time of day changed to: ${time}`);
    }

    cycleTimeOfDay() {
        if (this.isTransitioning) return;

        const cycle = ['morning', 'afternoon', 'night'];
        const currentIndex = cycle.indexOf(this.timeOfDay);
        const nextIndex = (currentIndex + 1) % cycle.length;
        const nextTime = cycle[nextIndex];

        this.transitionToTimeOfDay(nextTime);
    }

    transitionToTimeOfDay(targetTime) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // Store current values
        const startValues = {
            ambientColor: this.lights.ambient.color.clone(),
            ambientIntensity: this.lights.ambient.intensity,
            directionalColor: this.lights.directional.color.clone(),
            directionalIntensity: this.lights.directional.intensity,
            directionalPosition: this.lights.directional.position.clone()
        };

        // Get target values
        const settings = {
            morning: {
                ambient: { color: new THREE.Color(0xffeaa7), intensity: 0.6 },
                directional: { color: new THREE.Color(0xffd700), intensity: 1.2, position: new THREE.Vector3(10, 15, 5) }
            },
            afternoon: {
                ambient: { color: new THREE.Color(0xffffff), intensity: 0.8 },
                directional: { color: new THREE.Color(0xffffff), intensity: 1.5, position: new THREE.Vector3(0, 20, 10) }
            },
            night: {
                ambient: { color: new THREE.Color(0x1e3a5f), intensity: 0.3 },
                directional: { color: new THREE.Color(0x4a90e2), intensity: 0.5, position: new THREE.Vector3(-5, 10, -5) }
            }
        };

        const targetValues = settings[targetTime];
        
        // Animate transition
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / this.transitionDuration, 1);
            
            // Ease in-out
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            // Interpolate colors
            this.lights.ambient.color.lerpColors(
                startValues.ambientColor,
                targetValues.ambient.color,
                eased
            );
            this.lights.ambient.intensity = 
                startValues.ambientIntensity + 
                (targetValues.ambient.intensity - startValues.ambientIntensity) * eased;

            this.lights.directional.color.lerpColors(
                startValues.directionalColor,
                targetValues.directional.color,
                eased
            );
            this.lights.directional.intensity = 
                startValues.directionalIntensity + 
                (targetValues.directional.intensity - startValues.directionalIntensity) * eased;

            this.lights.directional.position.lerpVectors(
                startValues.directionalPosition,
                targetValues.directional.position,
                eased
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.setTimeOfDay(targetTime);
                this.isTransitioning = false;
                
                // Show notification
                const timeEmoji = {
                    morning: '🌅',
                    afternoon: '☀️',
                    night: '🌙'
                };
                Utils.showNotification(
                    `${timeEmoji[targetTime]} Time changed to ${targetTime}`,
                    'success'
                );
            }
        };

        animate();
    }

    update(deltaTime) {
        // Animate lights (subtle pulsing)
        const time = Date.now() * 0.001;
        
        // Monitor glow pulse
        if (this.lights.monitorGlow) {
            const baseIntensity = this.timeOfDay === 'night' ? 1.0 : 0.4;
            this.lights.monitorGlow.intensity = baseIntensity + Math.sin(time * 2) * 0.1;
        }

        // Phone glow pulse
        if (this.lights.phoneGlow) {
            const baseIntensity = this.timeOfDay === 'night' ? 0.4 : 0.2;
            this.lights.phoneGlow.intensity = baseIntensity + Math.sin(time * 3) * 0.05;
        }
    }
}

// Initialize lighting when scene is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.scene3D) {
            window.lightingSystem = new LightingSystem(window.scene3D);
        }
    }, 50);
});

