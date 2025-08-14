# Custom Domain Deployment Guide

This guide will help you deploy your Pathfindars website to GitHub Pages with a custom domain (like pathfindars.com).

## Prerequisites

- GitHub account
- Custom domain (e.g., pathfindars.com)
- Access to your domain's DNS settings

## Step 1: Repository Setup

1. **Create a new GitHub repository**
   - Name it anything you like (e.g., `pathfindars-website`)
   - Make it public (required for GitHub Pages on free accounts)

2. **Upload this project**
   - Extract the zip file
   - Upload all files to your GitHub repository
   - Or use Git commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## Step 2: Configure Your Custom Domain

### Update CNAME File
1. Edit the `public/CNAME` file
2. Replace `pathfindars.com` with your actual domain
3. Save and commit the change

### DNS Configuration
Configure your domain's DNS settings with your domain provider:

**For Root Domain (pathfindars.com):**
Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For Subdomain (www.pathfindars.com):**
Add a CNAME record:
```
CNAME: www -> yourusername.github.io
```

**Recommended Setup:**
- Set up both root domain and www subdomain
- Use a redirect from www to root domain (or vice versa)

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Under **Custom domain**, enter your domain (e.g., `pathfindars.com`)
6. Check **Enforce HTTPS** (recommended)

## Step 4: Deploy

1. **Push to main branch** - this will trigger the deployment
2. **Wait for deployment** - check the Actions tab for progress
3. **Verify DNS propagation** - may take up to 24 hours

## Step 5: Verify Deployment

1. Visit your custom domain
2. Check that HTTPS is working
3. Test all navigation and functionality

## Troubleshooting

### Common Issues:

**1. DNS not propagating**
- Wait up to 24 hours for DNS changes
- Use `dig yourdomain.com` to check DNS records
- Clear your browser cache

**2. HTTPS certificate issues**
- Ensure "Enforce HTTPS" is enabled in GitHub Pages settings
- Wait for GitHub to provision the certificate (can take a few minutes)

**3. 404 errors on page refresh**
- This is normal for single-page applications
- The app uses client-side routing which handles this automatically

**4. Custom domain not working**
- Verify CNAME file contains correct domain
- Check DNS settings with your domain provider
- Ensure GitHub Pages is set to use GitHub Actions

### DNS Verification Commands:
```bash
# Check A records
dig yourdomain.com A

# Check CNAME records  
dig www.yourdomain.com CNAME

# Check if GitHub Pages is responding
curl -I https://yourdomain.com
```

## Alternative: GitHub Pages with Repository Name

If you prefer not to use a custom domain:

1. Remove the `public/CNAME` file
2. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```
3. Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Domain Provider Specific Instructions

### Cloudflare
1. Add A records for root domain
2. Add CNAME for www subdomain
3. Set SSL/TLS to "Full" or "Full (strict)"

### GoDaddy
1. Go to DNS Management
2. Add A records pointing to GitHub's IPs
3. Add CNAME record for www

### Namecheap
1. Go to Advanced DNS
2. Add A records with GitHub's IPs
3. Add CNAME record for www subdomain

## Security Considerations

- Always use HTTPS (enforced by default)
- Keep your repository public or upgrade to GitHub Pro for private repos
- Regularly update dependencies for security patches

## Support

If you encounter issues:
1. Check GitHub Actions logs in your repository
2. Verify DNS settings with your domain provider
3. Consult GitHub Pages documentation
4. Check domain propagation status online

Your professional Pathfindars website will be live at your custom domain once DNS propagates!

