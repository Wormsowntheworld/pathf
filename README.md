# Pathfindars Website - Professional React Clone

A complete, professional React recreation of the pathfindars.com website with authentic branding, optimized for GitHub Pages deployment with custom domain support.

## ✨ Features

- **Authentic Branding**: Real Pathfindars logo and professional team photos
- **Professional Design**: Sophisticated navigation with elegant hover effects
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Modern React**: Built with React 18, Vite, and Tailwind CSS
- **Professional UI**: Uses shadcn/ui components and Lucide icons
- **Smooth Navigation**: Client-side routing with smooth scrolling
- **Custom Domain Ready**: Pre-configured for custom domain deployment
- **GitHub Actions**: Automated deployment workflow included

## 🎯 Professional Updates

- ✅ **Authentic Logo**: Real Pathfindars logo throughout (header & footer)
- ✅ **Professional Navigation**: Clean black text with elegant underline hover effects
- ✅ **Real Team Photos**: Actual team member professional headshots
- ✅ **Business-Appropriate Design**: Removed childish colors for sophisticated look
- ✅ **Consistent Branding**: Professional appearance throughout

## 📄 Pages Included

- **Homepage**: Hero section, services overview, collaboration section, call-to-action
- **Services & Team**: Detailed service information with real team photos
- **Blog**: Blog page structure ready for content
- **Contact**: Contact information and newsletter signup

## 🚀 Quick Start

### Local Development

1. **Clone/Extract** this project
2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Start development server:**
   ```bash
   pnpm run dev
   ```
4. **Open** http://localhost:5173

### Build for Production

```bash
pnpm run build
```

## 🌐 Deployment Options

### Option 1: Custom Domain (Recommended)

**Perfect for: pathfindars.com or any custom domain**

1. **Follow the detailed guide:** See `CUSTOM_DOMAIN_SETUP.md`
2. **Update CNAME file:** Edit `public/CNAME` with your domain
3. **Configure DNS:** Point your domain to GitHub Pages
4. **Deploy:** Push to GitHub and enable Pages with GitHub Actions

**Result:** Your site at `https://yourdomain.com`

### Option 2: GitHub Pages Subdomain

**Perfect for: testing or personal projects**

1. **Update repository name** in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```
2. **Remove CNAME file:** Delete `public/CNAME`
3. **Deploy:** Push to GitHub and enable Pages

**Result:** Your site at `https://yourusername.github.io/your-repo-name/`

## 📁 Project Structure

```
pathfindars-website/
├── public/
│   ├── CNAME                    # Custom domain configuration
│   └── ...                      # Static assets
├── src/
│   ├── assets/                  # Images and media
│   │   ├── logopath.png        # Authentic Pathfindars logo
│   │   ├── photo1.png          # Team member photo 1
│   │   ├── photo2.jpg          # Team member photo 2
│   │   └── ...                 # Other images
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Header.jsx          # Professional navigation
│   │   ├── Hero.jsx            # Hero section
│   │   ├── ServicesTeam.jsx    # Team photos page
│   │   ├── Footer.jsx          # Footer with logo
│   │   └── ...                 # Other components
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── .github/workflows/          # GitHub Actions
│   └── deploy.yml              # Deployment workflow
├── CUSTOM_DOMAIN_SETUP.md      # Detailed domain setup guide
├── vite.config.js              # Build configuration
└── README.md                   # This file
```

## 🛠 Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Professional components
- **Lucide React**: Beautiful icons
- **React Router**: Client-side routing
- **GitHub Actions**: Automated deployment

## 🎨 Design Features

### Professional Navigation
- Clean black text instead of colorful buttons
- Elegant underline hover effects
- Sophisticated spacing and typography
- Business-appropriate styling

### Authentic Branding
- Real Pathfindars logo in header and footer
- Professional team member photos
- Consistent brand colors and styling
- Corporate-level design quality

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Accessible design patterns

## 🔧 Customization

### Update Content
- **Text**: Edit component files in `src/components/`
- **Images**: Replace files in `src/assets/`
- **Styling**: Modify Tailwind classes in components
- **Contact Info**: Update `src/components/Footer.jsx`

### Add New Pages
1. Create component in `src/components/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Change Domain
1. Update `public/CNAME` with your domain
2. Configure DNS with your provider
3. Enable custom domain in GitHub Pages settings

## 📋 Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Custom domain configured (if using)
- [ ] DNS settings updated
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] CNAME file updated with your domain
- [ ] First deployment successful
- [ ] HTTPS certificate provisioned
- [ ] All pages and navigation working

## 🆘 Support

### Common Issues
- **DNS propagation**: Wait up to 24 hours
- **HTTPS certificate**: Enable in GitHub Pages settings
- **404 on refresh**: Normal for SPAs, handled by routing
- **Build failures**: Check GitHub Actions logs

### Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](./CUSTOM_DOMAIN_SETUP.md)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 📄 License

Professional recreation of pathfindars.com for business use. Ensure you have appropriate permissions for commercial deployment.

---

**Ready for professional deployment!** 🚀

Your authentic Pathfindars website with real branding and professional design is ready to go live on your custom domain.

