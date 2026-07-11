

# Muneeb Portfolio

![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?logo=tailwind-css)
![CRACO](https://img.shields.io/badge/CRACO-Config%20Override-1f2937)
![License](https://img.shields.io/badge/License-MIT-green)

Modern personal portfolio built to showcase software engineering work, AI projects, experience, and contact details in a polished one-page experience. The site uses a dark visual language, animated sections, responsive layouts, and a contact workflow powered by EmailJS and toast feedback.

## Overview

This portfolio presents professional background, featured projects, technical skills, education, and contact channels in a clean, easy-to-navigate format. It is designed for fast loading, mobile responsiveness, and a strong visual identity.

## Features

- Hero section with animated intro and social links
- About, skills, experience, projects, and contact sections
- Responsive layout for mobile, tablet, and desktop
- Scroll-based reveal animations
- Project showcase cards with external links
- Contact form with EmailJS integration
- Toast notifications for form feedback
- Tailwind-driven styling with custom UI sections

## Tech Stack

- React 19
- CRACO
- Tailwind CSS
- Lucide React
- React Hot Toast
- EmailJS
- Radix UI components

## Project Structure

```text
src/
  components/
  data/
  hooks/
  lib/
  App.js
  index.js
  index.css
public/
  assets/
```

## Getting Started

### Prerequisites

- Node.js 16 or later
- npm
- Git

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run Locally

```bash
npm start
```

### Build for Production

```bash
npm run build
```

## Customization

- Update personal details, projects, and experience in `src/data/mock.js`
- Replace images and documents in `public/assets`
- Adjust theme colors and layout styles in `src/index.css` and component files

## Contact

- Email: muneebaif645@gmail.com
- GitHub: https://github.com/muneeb-codehub
- LinkedIn: https://www.linkedin.com/in/muneeb-arif-5bbb66374

## License

This project is licensed under the MIT License.

Edit:

```
tailwind.config.js
```

Example:

```javascript
colors: {
  dark: {
    900: "#000000",
    800: "#0a0a0a"
  }
}
```

---

# 📦 **Production Build**

```
npm run build
```

This generates an optimized production build.

---

# 🚀 **Deployment**

### Deploy to Vercel

1. Push code to **GitHub**
2. Go to **Vercel**
3. Import repository
4. Set **Root Directory → frontend**
5. Add environment variables
6. Click **Deploy**

---

# 📈 **Future Enhancements**

* Blog section
* Dark / Light mode
* Project filtering
* CMS integration
* Testimonials
* Resume download
* Multi-language support

---

# 👨‍💻 **Author**

**Faizan Yousaf**

💻 GitHub
[https://github.com/Faizanyousaf140](https://github.com/Faizanyousaf140)

💼 LinkedIn
[http://www.linkedin.com/in/faizan-yousaf1/in/](http://www.linkedin.com/in/faizan-yousaf1/in/)

📧 Email
[faizanyousaf140@gmail.com](mailto:faizanyousaf140@gmail.com)

---

# ⭐ **Support**

If you like this project, please give it a **⭐ on GitHub**.

---

💙 **Built with passion by Faizan Yousaf**

---
