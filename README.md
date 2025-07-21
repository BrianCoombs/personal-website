# Brian Coombs - Personal Website

My personal portfolio website built with Next.js 15, showcasing projects, blog posts, and professional experience.

## About Me

I'm an AI engineer and entrepreneur with a passion for building products that make people's lives easier. Currently at Malleable AI, I help companies leverage artificial intelligence to automate repetitive tasks and create remarkable experiences. Based in Austin, TX.

## App Structure

```
/
├── app/                # Next.js app directory
│   ├── blog/          # Blog pages and post rendering
│   └── page.tsx       # Home page with sections
├── components/        # React components
│   ├── hero-section   # Landing intro
│   ├── projects-section # Carousel of featured projects
│   ├── about-section  # Background and expertise
│   └── navigation     # Header with theme toggle
├── content/          # Markdown blog posts
├── lib/              # Utilities and blog processing
└── public/           # Static assets and images
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with Typography plugin
- **Language**: TypeScript
- **Blog**: Markdown with gray-matter and remark
- **Theme**: Dark/Light mode support

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.