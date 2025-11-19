🎙Podcastr

A modern podcast platform with AI-powered audio generation, custom uploads, and an intuitive listening experience.

🚀 Live Demo
https://podcastr-ivory-eight.vercel.app

✨ Features

Google Authentication - Secure sign-in with Google
AI Audio Generation - Create podcast audio using OpenAI Text-to-Speech with custom voice selection and prompt-based generation
Custom Uploads - Upload your own audio files (up to 5 seconds) and custom cover images with live preview
Podcast Details Page - Dedicated page for each podcast with full transcript, similar podcast recommendations, and playback
Custom Audio Player - Fully functional player with playback controls
Dynamic Homepage - Browse trending, latest, and popular podcasts with popular podcasters sidebar
User Profiles - Manage and view all your podcasts in one place
Podcast Discovery - Search and filter through available podcasts
Theme Toggle - Switch between light and dark modes
Responsive Design - Optimized experience across all devices

🔮 Coming Soon

Smart Algorithms - Intelligent categorization for trending, popular, and latest podcasts
Enhanced Discovery - Improved filtering and recommendation systems
Performance Optimization - Implementing lazy loading and Next.js optimization techniques for faster routing
UI Polish - Refined visual elements and enhanced responsiveness

🛠️ Tech Stack

Frontend: Next.js, Chakra UI, Lucide React
Backend/Database: Firebase
File Storage: Convex
AI Integration: OpenAI Text-to-Speech API
Design Reference: FreeCodeCamp Figma Design

🚀 Getting Started

# Clone the repository
git clone https://github.com/roselineodunze/podcastr.git

# Install dependencies
npm install

# Run development server
npm run dev

# Environment Variables
Create a `.env.local` file with your credentials:

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_MESSAGE_SENDER_ID=your_sender_id
NEXT_PUBLIC_APP_ID=your_firebase_app_id
NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url
SPEECHIFY_API_KEY=your_speechify_api_key

🎯 Development Approach
Built with custom React hooks for modular, maintainable functionality. Focused on performance optimization and user experience as core priorities.

👤 Author
Roseline Odunze

GitHub: roselineodunze
LinkedIn: https://www.linkedin.com/in/chinonyelum-odunze