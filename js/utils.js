// ============================================
// UTILITY FUNCTIONS
// ============================================

const Utils = {
    /**
     * Get random item from array
     */
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Format date to readable string
     */
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    },

    /**
     * Get current time in HH:MM:SS format
     */
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour12: false });
    },

    /**
     * Generate ASCII art clock
     */
    getASCIIClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return `
╔═══════════════════════════╗
║    CURRENT TIME           ║
║                           ║
║     ${hours}:${minutes}:${seconds}           ║
║                           ║
║  ${now.toLocaleDateString('en-US', { weekday: 'long' })}  ║
║  ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  ║
╚═══════════════════════════╝
        `.trim();
    },

    /**
     * Type text with animation effect
     */
    async typeText(element, text, speed = 30) {
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await this.sleep(speed);
        }
    },

    /**
     * Sleep/delay function
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /**
     * Scroll element to bottom
     */
    scrollToBottom(element) {
        element.scrollTop = element.scrollHeight;
    },

    /**
     * Copy text to clipboard
     */
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Failed to copy:', err);
            return false;
        }
    },

    /**
     * Open URL in new tab
     */
    openURL(url) {
        window.open(url, '_blank');
    },

    /**
     * Format skill level to percentage
     */
    formatSkillLevel(level) {
        return `${level}%`;
    },

    /**
     * Get skill category color
     */
    getSkillCategoryColor(category) {
        const colors = {
            frontend: '#00ffff',
            backend: '#00ff00',
            database: '#ff9500',
            tools: '#ff00ff',
            cloud: '#00d4ff'
        };
        return colors[category] || '#00ffff';
    },

    /**
     * Create progress bar HTML
     */
    createProgressBar(percentage, color = '#00ffff') {
        return `
            <div class="skill-bar">
                <div class="skill-fill" style="width: ${percentage}%; background: linear-gradient(90deg, ${color}, #00ffff);"></div>
            </div>
        `;
    },

    /**
     * Sanitize HTML to prevent XSS
     */
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    },

    /**
     * Format command output
     */
    formatCommandOutput(content, type = 'normal') {
        const classes = {
            error: 'error',
            success: 'success',
            info: 'info',
            warning: 'warning',
            normal: ''
        };
        return `<p class="${classes[type]}">${content}</p>`;
    },

    /**
     * Create matrix rain effect
     */
    createMatrixRain(container, duration = 5000) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const columns = Math.floor(container.offsetWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.style.position = 'absolute';
            column.style.left = `${i * 20}px`;
            column.style.top = '0';
            column.style.color = '#00ff00';
            column.style.fontSize = '14px';
            column.style.fontFamily = 'monospace';
            column.style.animation = `matrixRain ${2 + Math.random() * 3}s linear infinite`;
            column.style.animationDelay = `${Math.random() * 2}s`;
            column.textContent = this.getRandomItem(chars.split(''));
            container.appendChild(column);
            
            setTimeout(() => column.remove(), duration);
        }
    },

    /**
     * Create glitch effect on element
     */
    applyGlitchEffect(element, duration = 1000) {
        element.classList.add('animate-glitch');
        setTimeout(() => {
            element.classList.remove('animate-glitch');
        }, duration);
    },

    /**
     * Shake element
     */
    shakeElement(element) {
        element.classList.add('animate-shake');
        setTimeout(() => {
            element.classList.remove('animate-shake');
        }, 500);
    },

    /**
     * Show notification
     */
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid var(--primary-color);
            border-radius: 8px;
            color: var(--primary-color);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    /**
     * Detect mobile device
     */
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    /**
     * Get random color from palette
     */
    getRandomColor() {
        const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ff9500', '#00d4ff'];
        return this.getRandomItem(colors);
    },

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Generate random ID
     */
    generateId() {
        return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Format file size
     */
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    },

    /**
     * Check if element is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * Smooth scroll to element
     */
    smoothScrollTo(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
