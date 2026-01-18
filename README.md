# 🌍 3D Earth Explorer

An interactive 3D Earth visualization that allows you to explore countries around the world with a beautiful wireframe globe interface. Built with React, Three.js, and modern web technologies.

## ✨ Features

- **Interactive 3D Globe** - Smooth rotation and zoom controls
- **Country Selection** - Click on any country to view detailed information
- **Real-time Data** - Fetches live country data from REST Countries API
- **Wireframe Design** - Minimalist aesthetic with country border lines
- **Smooth Animations** - Camera transitions and hover effects
- **190+ Countries** - Comprehensive coverage of world geography
- **Responsive UI** - Glassmorphism info panel with country details

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **REST Countries API** - Country data

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/3d-earth-explorer.git
   cd 3d-earth-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── App.jsx                      # Main application component
├── components/
│   ├── Earth.jsx               # Earth sphere component
│   ├── Countries.jsx           # Countries container
│   ├── CountryBorderLines.jsx  # Border line renderer
│   ├── CountryClickArea.jsx    # Clickable country areas
│   ├── CameraController.jsx    # Camera animation controller
│   ├── LoadingScreen.jsx       # Loading UI
│   ├── CountryInfoPanel.jsx    # Country information panel
│   └── InfoRow.jsx             # Info row component
└── utils/
    └── coordinates.js          # Lat/lng conversion utilities
```

## 🎮 Usage

1. **Rotate the Globe** - Click and drag to rotate the Earth
2. **Zoom** - Use mouse wheel to zoom in/out
3. **Select Country** - Click on any country to view details
4. **View Information** - See country data in the side panel
5. **Close Panel** - Click the × button to deselect

## 🌐 Data Sources

- **GeoJSON Data** - [datasets/geo-countries](https://github.com/datasets/geo-countries)
- **Country Information** - [REST Countries API](https://restcountries.com/)

## 🎨 Customization

### Change Globe Color
Edit `src/components/Earth.jsx`:
```javascript
<meshPhongMaterial
  color="#1a1a2e"  // Change this color
  shininess={15}
  specular={new THREE.Color('#0f3460')}
/>
```

### Change Border Colors
Edit `src/components/CountryBorderLines.jsx`:
```javascript
<lineBasicMaterial
  color={isSelected ? '#00ff88' : '#ffffff'}  // Modify colors
  opacity={isSelected ? 1 : 0.4}
  transparent
/>
```

### Adjust Camera Distance
Edit `src/App.jsx`:
```javascript
<Canvas
  camera={{ position: [0, 0, 5], fov: 45 }}  // Adjust position
>
```

## 📋 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔧 Configuration

### Tailwind CSS
Tailwind is loaded via CDN in `index.html`. For custom configuration, install Tailwind locally:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Environment Variables
Create a `.env` file for custom configurations:
```env
VITE_API_URL=https://restcountries.com/v3.1
```

## 🐛 Known Issues

- Line width in WebGL is limited to 1px on some browsers (hardware limitation)
- Antarctica is excluded from the dataset for performance
- Some small island nations may have tiny clickable areas

## 🚀 Future Enhancements

- [ ] Search functionality for countries
- [ ] Day/night texture overlay
- [ ] Real-time weather data integration
- [ ] Multiple language support
- [ ] Country comparison feature
- [ ] Historical data visualization
- [ ] Mobile touch gestures optimization
- [ ] Satellite view toggle

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - Amazing 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [REST Countries](https://restcountries.com/) - Free country data API
- [datasets/geo-countries](https://github.com/datasets/geo-countries) - GeoJSON country boundaries

## 👤 Author

**Your Name**
- GitHub: [@kaiserOfTheNight](https://github.com/kaiserOfTheNight)a
- Portfolio: [aderrazzak.vercel.app](https://aderrazzak.vercel.app)

## 📞 Support

For support, email abderrazzak.elouazghi@email.com or open an issue in the GitHub repository.

---

⭐ Star this repository if you find it helpful!
