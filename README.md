# 🚀 Interactive 3D Terminal Portfolio

A unique and immersive portfolio website featuring a 3D programmer's room environment with an interactive terminal interface.

## ✨ Features

### 🖥️ Terminal Interface
- **Interactive Commands**: Navigate through portfolio content using terminal commands
- **Command History**: Use ↑/↓ arrows to navigate through previous commands
- **Auto-completion**: Press Tab for command suggestions
- **Easter Eggs**: Hidden commands for fun interactions (matrix, hack, coffee, etc.)

### 🎮 3D Interactive Environment
- **Programmer's Room**: Fully rendered 3D workspace
- **Clickable Objects**:
  - 📺 Monitor - View detailed project showcase
  - 📚 Bookshelf - Explore technical skills
  - 📱 Phone - Access contact information
  - 🪟 Window - Change time of day (morning/afternoon/night)

### 🎨 Visual Effects
- Cyberpunk/hacker aesthetic
- Dynamic lighting system
- Particle effects
- Smooth animations
- Responsive design

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity and logic
- **Three.js** - 3D graphics rendering
- **No frameworks** - Pure vanilla JavaScript

## 📋 Available Terminal Commands

### Core Commands
- `help` - Show all available commands
- `about` - Learn about me
- `skills` - View technical skills
- `projects` - See my projects
- `experience` - View work experience
- `education` - Educational background
- `certifications` - View certifications
- `contact` - Get contact information
- `github` - Open GitHub profile
- `linkedin` - Open LinkedIn profile
- `resume` - Download resume
- `clear` - Clear terminal

### Easter Eggs 🎉
- `time` - Display ASCII art clock
- `joke` - Get a random programmer joke
- `quote` - Get an inspirational quote
- `matrix` - Enter the Matrix...
- `hack` - Initiate hacking sequence
- `coffee` - Brew some coffee ☕

### Bonus Commands
- `ls` - List available sections
- `pwd` - Print working directory
- `whoami` - Who are you?
- `history` - View command history

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required!

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Navigate to**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
ThePortfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   ├── terminal.css       # Terminal styling
│   └── animations.css     # Animations
├── js/
│   ├── data.js            # Portfolio data
│   ├── utils.js           # Utility functions
│   ├── terminal.js        # Terminal functionality
│   ├── commands.js        # Command handlers
│   ├── main.js            # Main application
│   ├── scene.js           # 3D scene setup
│   ├── room.js            # 3D room objects
│   ├── lighting.js        # Lighting system
│   ├── interactions.js    # Click interactions
│   ├── particles.js       # Particle effects
│   └── effects.js         # Visual effects
├── assets/
│   ├── models/            # 3D models
│   ├── textures/          # Images and textures
│   └── sounds/            # Sound effects (optional)
├── netlify.toml           # Netlify configuration
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 🎨 Customization

### Update Your Information

Edit `js/data.js` to customize:
- Personal information
- Skills and proficiency levels
- Projects and work experience
- Education and certifications
- Social media links
- Contact information

### Change Theme Colors

Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #00ffff;    /* Cyan */
    --secondary-color: #ff00ff;  /* Magenta */
    --accent-color: #00ff00;     /* Green */
    /* ... */
}
```

### Add Custom Commands

Add new commands in `js/commands.js`:
```javascript
Commands.mycommand = (terminal) => {
    terminal.writeLine('Your custom output here!');
};
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

2. **Using GitHub**
   - Push your code to GitHub
   - Connect repository to Netlify
   - Automatic deployment on every push!

3. **Drag & Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the entire project folder
   - Done!

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
# Enable GitHub Pages in repository settings
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Mobile browsers (simplified 3D experience)

## 🎯 Performance

- Optimized for 60 FPS
- Lazy loading for assets
- Responsive design
- Mobile-friendly (simplified version)

## 🐛 Known Issues

- 3D scene may be resource-intensive on older devices
- Some effects disabled on mobile for performance

## 🔮 Future Enhancements

- [ ] Voice command support
- [ ] More 3D room themes
- [ ] Sound effects toggle
- [ ] Blog integration
- [ ] Dark/light mode toggle
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📝 Notes

- This is a static website with no backend
- All data is stored in `js/data.js`
- Three.js is loaded from CDN
- No build process required

---

**Made with ❤️ and lots of ☕**
