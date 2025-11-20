# Hack Nest 🚀

A modern platform for discovering and participating in hackathons, bounties, and grants. Built with React, Vite, and Web3 integration.

## ✨ Features

### 🎯 Core Functionality
- **Bounties & Opportunities** - Browse and apply for development opportunities
- **Hackathons** - Discover and join hackathon competitions
- **Grants** - Explore funding opportunities for innovative projects
- **Web3 Integration** - Connect your wallet using Reown AppKit (WalletConnect)
- **Real-time Stats** - Track total value earned and opportunities listed

### 🎨 Design Features
- Modern, clean UI with Tailwind CSS
- Responsive design for all devices
- Smooth animations and transitions
- Sticky sidebar with platform statistics
- Animated background effects
- Firefox-compatible hover states

### 🔧 Technical Features
- Auto-commit script for automatic git commits
- Utility functions for text truncation, address formatting, and number formatting
- Comment/discussion system on opportunity details
- Filter and search functionality
- Active route highlighting in navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **Routing**: React Router DOM 7.9.6
- **Web3**: 
  - Reown AppKit 1.8.14
  - Wagmi 2.19.4
  - Viem 2.39.0
- **Icons**: React Icons 5.5.0
- **HTTP Client**: Axios 1.13.2
- **State Management**: TanStack React Query 5.90.10

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hack-nest
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run auto-commit` - Run auto-commit script (commits changes every 20 seconds)

## 📁 Project Structure

```
hack-nest/
├── src/
│   ├── components/
│   │   ├── features/          # Feature components (Opportunities, Cards, Sidebar)
│   │   ├── layout/            # Layout components (Navbar, Footer, Sidebar)
│   │   ├── libs/              # Utility functions
│   │   ├── data/              # Mock data
│   │   └── hooks/             # Custom React hooks
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Home page with opportunities
│   │   ├── Hackathons.jsx     # Hackathons landing page
│   │   ├── Grants.jsx          # Grants landing page
│   │   └── OpportunityDetail.jsx  # Opportunity detail page
│   ├── services/              # API services
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── Provider.jsx           # Web3 provider setup
├── public/                    # Static assets
├── auto-commit.js             # Auto-commit script
└── vite.config.js             # Vite configuration
```

## 🎯 Key Pages

### Home (`/`)
- Browse all available opportunities/bounties
- Filter by category (Design, Development, AI, Blockchain, Other)
- Sticky sidebar with platform stats and "How It Works" guide
- Click on any opportunity to view details

### Hackathons (`/hackathons`)
- Discover hackathon competitions
- Filter by status (All, Upcoming, Active, Ended)
- View prize pools, participants, and details
- Register or join hackathons

### Grants (`/grants`)
- Landing page for grant opportunities
- Filter by category
- View grant amounts, durations, and deadlines
- Apply for grants

### Opportunity Detail (`/:id`)
- Detailed view of each opportunity
- Company information
- Required skills and tags
- Comment/discussion section
- Apply functionality

## 🔐 Web3 Integration

The platform uses Reown AppKit (formerly WalletConnect) for Web3 wallet connections:

- Connect your wallet via the "Sign up" button
- Supported wallets include MetaMask, WalletConnect, and more
- Displays truncated wallet address when connected
- Configured for Base, Base Sepolia, Celo, and Mainnet

## 🎨 Styling & Design

- **Color Scheme**: Purple accent color (`#8b5cf6`) with clean white backgrounds
- **Typography**: Inter Variable font
- **Animations**: Custom float, glow, and shimmer animations
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop

## 🛠️ Utility Functions

Located in `src/components/libs/utils.js`:

- `truncateText()` - Truncate text with ellipsis
- `truncateAddress()` - Truncate wallet addresses (e.g., `0x1234...cdef`)
- `formatNumber()` - Format numbers with commas
- `formatCurrency()` - Format as currency (supports decimals)
- `formatNumberCompact()` - Format with K/M/B suffixes
- `getCookie()` - Get cookie value by name

Each changed file is committed separately with the message format: `feat: changes in (filename)`

## 📝 Environment Setup

1. Get a Reown (WalletConnect) Project ID from [dashboard.reown.com](https://dashboard.reown.com)
2. Update the `projectId` in `src/Provider.jsx`

## 🚧 Development Notes

- Uses Tailwind CSS v4 with the new `@theme` directive
- Firefox hover states are handled with JavaScript event handlers as fallback
- All routes are protected by the Layout component
- Mock data is stored in `src/components/data/data.js`

## 📄 License

This project is private.

## 👥 Contributing

This is a private project. For questions or issues, please contact the repository owner.

---

Built with ❤️ using React, Vite, and Tailwind CSS
