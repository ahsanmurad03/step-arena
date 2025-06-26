# Step Arena - React Application

A modern, component-based React application built with TypeScript and Vite, converted from the original HTML theme. This is a multi-page application for Step Arena, a sports and recreation center.

## Features

- **Multi-page React Application** with React Router
- **Component-based Architecture** for reusability
- **TypeScript** for type safety
- **Vite** for fast development and building
- **Responsive Design** for all devices
- **Modern UI Components** with smooth animations
- **Bootstrap Integration** for styling consistency

## Pages

1. **Home** - Hero carousel, facilities overview, testimonials, and news
2. **About** - Detailed information about Step Arena
3. **Outdoor** - Outdoor facilities and features
4. **Indoor** - Indoor facilities and Olympic pool details  
5. **Hotel & Restaurant** - Accommodation and dining services
6. **Packages** - Service packages and pricing
7. **News** - Latest news and updates
8. **Events** - Upcoming events and activities
9. **Contact** - Contact information and contact form
10. **Memberships** - Membership plans and benefits

## Reusable Components

- **Header** - Navigation with active link highlighting
- **Footer** - Site links and contact information
- **Carousel** - Hero image slider with customizable slides
- **Gallery** - Filterable image gallery with categories
- **Testimonial** - Customer testimonials with ratings

## Getting Started

### Prerequisites

- Node.js (v20.10.0 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd step-arena
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
step-arena/
├── public/
│   ├── assets/
│   │   ├── images/        # All images and media files
│   │   └── css/           # Original CSS files
│   └── index.html         # Main HTML template
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Carousel.tsx
│   │   ├── Gallery.tsx
│   │   └── Testimonial.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Outdoor.tsx
│   │   ├── Indoor.tsx
│   │   ├── HotelRestaurant.tsx
│   │   ├── Packages.tsx
│   │   ├── News.tsx
│   │   ├── Events.tsx
│   │   ├── Contact.tsx
│   │   └── Memberships.tsx
│   ├── styles/
│   │   └── global.css     # Global styles and theme
│   ├── App.tsx            # Main app component with routing
│   └── main.tsx           # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library

## Key Features Implemented

### Component Reusability
- Modular components that can be reused across pages
- Props-based customization for different content
- TypeScript interfaces for type safety

### Routing
- Client-side routing with React Router
- Active link highlighting in navigation
- SEO-friendly route structure

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive navigation for mobile devices

### Modern Development
- Hot module replacement with Vite
- TypeScript for better developer experience
- ESLint and formatting configurations

## Original HTML Conversion

This React application was converted from an original HTML theme while maintaining:
- **Visual Design** - All original styling and layout preserved
- **Content Structure** - All sections and content maintained
- **Interactive Elements** - Bootstrap components and interactions
- **Image Assets** - All original images and media files
- **Typography** - Original font choices and styling

## Contributing

1. Create feature branches for new functionality
2. Follow TypeScript best practices
3. Ensure responsive design for all new components
4. Test across different browsers and devices

## Contact

For questions about this application, contact the Step Arena team at +383 (0) 49 333 934 or visit us at Marigona Hill.

---

**Step Arena** - Where champions are born, minds are renewed, and people connect. 