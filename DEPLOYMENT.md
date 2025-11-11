# Deploying Your Bible Study Guide to GitHub Pages

This guide will walk you through deploying your interactive Bible study website to GitHub Pages, making it accessible online for free!

---

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your Bible Study Guide repository on GitHub

---

## Quick Deployment Steps

### Step 1: Verify Repository Structure

Make sure your repository has the following structure:

```
biblestudy/
├── _config.yml
├── _layouts/
│   ├── default.html
│   └── book.html
├── _includes/
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── old-testament/
│   └── [all your .md book files]
├── new-testament/
│   └── [all your .md book files]
├── indexes/
├── resources/
├── quick-reference/
├── index.md
└── README.md
```

### Step 2: Create index.md (Homepage)

Create an `index.md` file in your root directory if you don't have one:

```markdown
---
layout: default
title: Home
---

# Welcome to the Bible Study Guide

A comprehensive interactive study guide covering all 66 books of the Bible.

## Features

- **Complete Book Studies** - Detailed overviews, themes, and applications for all 66 books
- **Quick Reference Tables** - Fast lookup for any book
- **Thematic Index** - 80+ topics organized alphabetically
- **Character Index** - 39 major biblical figures
- **Biblical Timeline** - Chronological overview
- **Maps & Geography** - Biblical locations and journeys
- **Dark Mode** - Easy on the eyes for late-night study
- **Mobile Responsive** - Study anywhere, on any device
- **Search** - Find any book or topic instantly

## Getting Started

Use the sidebar to navigate to any book of the Bible, or explore our study resources:

- [Quick Reference Tables](quick-reference/)
- [Thematic Index](indexes/thematic-index/)
- [Character Index](indexes/character-index/)
- [Biblical Timeline](timeline/)
- [Maps & Geography](resources/maps/)

---

*"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." - 2 Timothy 3:16*
```

### Step 3: Update _config.yml

Make sure your `_config.yml` has the correct settings:

```yaml
title: Bible Study Guide
description: A comprehensive study guide covering all 66 books of the Bible
baseurl: "/biblestudy"  # Change this to match your repository name
url: "https://yourusername.github.io"  # Change to your GitHub username

# Build settings
markdown: kramdown
theme: minima

plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Exclude files from build
exclude:
  - Gemfile
  - Gemfile.lock
  - README.md
  - DEPLOYMENT.md
  - .git
  - .gitignore
```

**Important**: Replace:
- `yourusername` with your actual GitHub username
- `/biblestudy` with your actual repository name (if different)

### Step 4: Add Front Matter to All Book Files

Each markdown file in `old-testament/` and `new-testament/` needs front matter. Example:

```markdown
---
layout: book
title: Genesis
testament: Old Testament
---

# Genesis

[Your book content here...]
```

Make sure ALL your book .md files have this front matter at the top!

### Step 5: Commit and Push Your Changes

```bash
# Navigate to your repository
cd /path/to/biblestudy

# Add all new files
git add .

# Commit with a message
git commit -m "Add interactive website with Jekyll"

# Push to GitHub
git push origin main
```

(Replace `main` with `master` if that's your default branch name)

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

### Step 7: Wait for Deployment

GitHub will build your site. This takes 1-3 minutes. You'll see:
- A blue banner: "Your site is ready to be published"
- Then a green banner with your URL: `https://yourusername.github.io/biblestudy/`

### Step 8: Visit Your Live Site! 🎉

Click the URL or visit:
```
https://yourusername.github.io/biblestudy/
```

---

## Troubleshooting

### Site Not Showing Up?

**Check these common issues:**

1. **Wrong baseurl**: In `_config.yml`, make sure `baseurl` matches your repository name exactly
   ```yaml
   baseurl: "/biblestudy"  # Must match repo name
   ```

2. **Missing index.md**: Your root directory needs an `index.md` or `index.html` file

3. **Branch name**: Make sure you selected the correct branch in GitHub Pages settings

4. **Build errors**: Check the "Actions" tab in your GitHub repository for error messages

### CSS/JS Not Loading?

Check that your `_config.yml` has the correct `baseurl` and that you're using:
```liquid
{{ '/assets/css/style.css' | relative_url }}
```
in your layout files (not absolute paths).

### Links Not Working?

Make sure all internal links use:
```liquid
{{ '/path/to/page/' | relative_url }}
```

### Want to Use a Custom Domain?

1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add a `CNAME` file to your repository root with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS settings with your domain provider:
   - Type: `A` Record
   - Host: `@`
   - Value: These GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
4. In GitHub Settings > Pages, add your custom domain

---

## Testing Locally Before Deployment

Want to preview your site before pushing to GitHub?

### Install Jekyll Locally

```bash
# Install Ruby (if not already installed)
# On macOS:
brew install ruby

# On Ubuntu/Debian:
sudo apt-get install ruby-full

# On Windows: Download from https://rubyinstaller.org/

# Install Jekyll and Bundler
gem install jekyll bundler

# Navigate to your project
cd /path/to/biblestudy

# Create a Gemfile if you don't have one
echo 'source "https://rubygems.org"
gem "jekyll"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"' > Gemfile

# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Open your browser to:
# http://localhost:4000/biblestudy/
```

Your site will auto-reload when you make changes!

---

## Updating Your Live Site

After making changes:

```bash
# Add changes
git add .

# Commit
git commit -m "Update content"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes in 1-3 minutes.

---

## Advanced: Custom GitHub Actions

Want faster builds or custom build steps? Create `.github/workflows/pages.yml`:

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

---

## Mobile App Features (PWA)

Want your site to work like a mobile app? Add a `manifest.json`:

```json
{
  "name": "Bible Study Guide",
  "short_name": "Bible Study",
  "description": "Comprehensive Bible study guide",
  "start_url": "/biblestudy/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a3a5c",
  "icons": [
    {
      "src": "/biblestudy/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/biblestudy/assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Add to `_includes/header.html`:
```html
<link rel="manifest" href="{{ '/manifest.json' | relative_url }}">
```

Users can then "Add to Home Screen" on mobile devices!

---

## Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Jekyll on GitHub Pages**: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

---

**Congratulations! Your Bible study guide is now online and accessible to anyone! 🎉📖**
