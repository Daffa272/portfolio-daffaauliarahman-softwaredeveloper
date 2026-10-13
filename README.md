# Daffa Aulia Rahman — Developer Portfolio

Modern, professional, and fully responsive personal portfolio website for **Daffa Aulia Rahman**, Software Developer focused on web application development, AI integration, database management, and data visualization.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.x or later)
- npm, yarn, pnpm, or bun

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd daffa-developer-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be accessible at `http://localhost:3000` or `http://localhost:5173`.

### Production Build
```bash
npm run build
```
This builds optimized static production assets in the `dist/` directory.

---

## 🌐 Deployment to Vercel

This project is configured out-of-the-box for zero-configuration deployment to [Vercel](https://vercel.com).

### Method 1: Deploy via Vercel Git Integration (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your Git repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.

### Method 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

For production deployment:
```bash
vercel --prod
```

---

## 📁 Project Structure

```text
├── public/
│   ├── cv.pdf               # Direct downloadable Curriculum Vitae
│   └── favicon.svg          # Portfolio browser icon
├── src/
│   ├── assets/images/       # High-fidelity project screenshots & mockups
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky responsive navbar with theme toggle
│   │   ├── Hero.tsx         # Interactive code card, CTA links & status
│   │   ├── About.tsx        # Education, background & 3 core pillars
│   │   ├── Skills.tsx       # Grouped technical proficiencies
│   │   ├── Projects.tsx     # Filterable project gallery
│   │   ├── ProjectCard.tsx  # Interactive project preview tile
│   │   ├── ProjectModal.tsx # Full architecture & feature deep-dive modal
│   │   ├── Experience.tsx   # Professional timeline & achievements
│   │   ├── Leadership.tsx   # Organizational and initiative leadership
│   │   ├── Certifications.tsx # Verified credentials
│   │   ├── Contact.tsx      # Email composer, copy-to-clipboard & links
│   │   ├── Footer.tsx       # Navigation & copyright
│   │   └── CvModal.tsx      # In-browser CV reader & print trigger
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/Light theme manager
│   ├── data/
│   │   └── portfolioData.ts # Centralized profile and project data
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces & types
│   ├── App.tsx              # Application root
│   ├── index.css            # Tailwind CSS styling & root themes
│   └── main.tsx             # React DOM entry
├── index.html               # Semantic HTML, SEO & Schema.org JSON-LD
├── metadata.json            # Application metadata
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite bundler configuration
```

---

## 📄 License & Credits
Designed and developed for **Daffa Aulia Rahman**. All rights reserved.
