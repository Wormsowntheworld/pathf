# Pathfindars Website - Deployment Guide

## Project Overview

This is a complete React recreation of the pathfindars.com website, featuring:

✅ **Pixel-perfect design** matching the original website
✅ **Professional images** - business illustrations and team photos
✅ **Responsive layout** - works on desktop and mobile
✅ **Smooth navigation** - scrolling and routing functionality
✅ **Modern React** - built with React 18, Vite, and Tailwind CSS
✅ **GitHub Pages ready** - configured for easy deployment

## What's Included

### Pages
- **Homepage**: Complete with hero section, services, collaboration, and call-to-action
- **Services & Team**: Detailed service information with professional team photos
- **Blog**: Blog page structure ready for content

### Features
- Colorful navigation tabs matching original design
- Professional business illustrations throughout
- Contact form and newsletter signup
- Social media integration
- Smooth scrolling between sections

## Quick Start

### 1. Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Visit http://localhost:5173 to see the website.

### 2. GitHub Pages Deployment

#### Option A: Automatic Deployment (Recommended)

1. **Create a new repository** on GitHub
2. **Upload this project** to your repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Set Source to "GitHub Actions"
4. **Update the base path** in `vite.config.js`:
   ```javascript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```
5. **Push to main branch** - GitHub Actions will automatically deploy

#### Option B: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Deploy the `dist` folder** to GitHub Pages using your preferred method

### 3. Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Customization

### Updating Content
- **Text**: Edit component files in `src/components/`
- **Images**: Replace files in `src/assets/`
- **Colors**: Modify `src/App.css` and component styles
- **Contact Info**: Update `src/components/Footer.jsx`

### Adding Pages
1. Create component in `src/components/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## Technical Details

### Built With
- React 18 with modern hooks
- Vite for fast development and building
- Tailwind CSS for styling
- shadcn/ui for components
- Lucide React for icons
- React Router for navigation

### File Structure
```
src/
├── assets/           # Images and media
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── Header.jsx   # Navigation
│   ├── Hero.jsx     # Hero section
│   ├── Quote.jsx    # Quote section
│   ├── Services.jsx # Services grid
│   └── ...
├── App.jsx          # Main app
└── main.jsx         # Entry point
```

## Troubleshooting

### Common Issues

1. **Blank page after deployment**:
   - Check the base path in `vite.config.js`
   - Ensure it matches your repository name

2. **Images not loading**:
   - Verify images are in `src/assets/`
   - Check import paths in components

3. **Routing issues**:
   - For GitHub Pages, ensure proper base path configuration
   - Consider using HashRouter for simpler deployment

### Getting Help

- Check GitHub Pages documentation
- Verify all dependencies are installed
- Ensure build completes without errors
- Test locally before deploying

## Performance

The built application is optimized for:
- Fast loading times
- Mobile responsiveness
- SEO-friendly structure
- Accessibility standards

## License

This is a recreation of pathfindars.com for educational/portfolio purposes. Ensure you have appropriate permissions for commercial use.

---

**Ready to deploy!** Follow the steps above to get your Pathfindars website live on GitHub Pages.

