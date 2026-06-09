# Merrakechy Tours — Next.js Website

## Quick Start

```bash
npm install
npm run dev        # Development on http://localhost:3000
npm run build      # Production build
npm start          # Start production server
```

## Admin Panel

URL: `/admin`  
Default password: `merrakechy2025admin`

**IMPORTANT: Change your password before going live!**
Edit `lib/auth.js` and change `ADMIN_PASSWORD`.

### What you can do in the admin:
- ✅ Add new activities, tours, and transport services
- ✅ Edit existing services (title, price, description, image, etc.)
- ✅ Delete services
- ✅ Changes appear on the site immediately

## Project Structure

```
merrakechy-tours/
├── data/
│   └── services.json      ← All services stored here (edit directly or via admin)
├── lib/
│   └── auth.js            ← Change admin password here
├── pages/
│   ├── index.js           ← Homepage
│   ├── services.js        ← All services page
│   ├── contact.js         ← Contact page
│   ├── admin/
│   │   ├── index.js       ← Admin dashboard
│   │   └── login.js       ← Admin login
│   └── api/
│       ├── services.js    ← Public API
│       └── admin/         ← Protected admin API
├── components/
│   └── Layout.js          ← Navbar + Footer
├── public/
│   └── assets/            ← Images, CSS (from your original site)
└── styles/
    └── globals.css        ← All styles
```

## Deploying to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to vercel.com → "New Project" → import your repo
3. Click Deploy — done!
4. Point your Hostinger domain to Vercel (CNAME record)

## Deploying to Hostinger VPS

```bash
npm run build
npm start   # Runs on port 3000
```

Use nginx as reverse proxy to port 3000.

## Adding a New Service

### Via Admin Panel (easiest):
1. Go to `/admin`
2. Click the category (Activities/Tours/Transport)
3. Click "Add" → fill the form → Save

### Via JSON file directly:
Edit `data/services.json` and add an entry to the correct array.

## Image Paths

Images are in `public/assets/images/`. Reference them as:
- `/assets/images/activities/myimage.jpg`
- `/assets/images/tours/myimage.jpg`

To add new images: upload them to the server's `public/assets/images/` folder.
