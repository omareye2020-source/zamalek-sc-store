# Zamalek SC Official E-Commerce Web Application

# Video Demo: <https://youtu.be/kuZu9Cju-YM>

#### Description:
The **Zamalek SC Official E-Commerce Store**  feature-rich web application built to provide fans of the iconic Egyptian sports club with a dedicated platform to browse, explore, and purchase official merchandise. Designed using modern front-end web technologies including **React.js**, **Vite**, **HTML5**, **CSS3**, and **JavaScript (ES6+)**, this application incorporates seamless navigation, real-time interactive components, a dynamic shopping cart system, internationalization support (Arabic and English), and an interactive section displaying the club's historic honors and trophy record.

The primary objective of this project was to construct a fast, user-friendly architecture that avoids unnecessary full-page browser reloads. By taking advantage of React's component-based state management, users can fluidly transition between the landing page, the products catalog, the cart interface, and specific promotional sections with precise scroll positioning.



### Key Features

1.State-Driven Single Page Architecture:
   - Navigation between the primary views—`Home`, `Products`, and `Cart`—is managed dynamically via React state rather than traditional routing libraries. This eliminates page reloads and ensures near-instantaneous transitions.

2. Full Internationalization (bilingual support):
   - A dedicated translation architecture allows users to toggle between **Arabic** (RTL layout) and **English** (LTR layout) seamlessly. All interface texts, category headers, navigation buttons, dynamic placeholders, and tournament descriptions automatically adapt to the active language.

3.Interactive Shopping Cart System:
   - Users can add items directly to their cart from various product cards. A live item counter badge updates instantly within the navigation bar. The dedicated cart interface allows users to review selected items, adjust quantities, calculate totals, and clear items.

4.Club Honors and Trophies Section:
   - A dedicated honors section displays the extensive historic trophy record of Zamalek SC (including titles like the Egyptian Premier League, Egypt Cup, CAF Champions League, CAF Confederation Cup, and others). Each tournament card features gold-styled trophy icons, custom responsive grids, and subtle 3D hover elevations.

5.Smooth Scroll & Custom Offset Navigation:
   - Smooth navigation controls allow users to jump directly to specific target sections (such as the official sponsors or trophy displays) with precise JavaScript offset calculations that account for sticky navigation header heights.

6. Responsive Visual Styling:
   - Built with custom CSS featuring CSS Flexbox and Grid layouts, glassmorphism translucency effects (`backdrop-filter`), royalty-inspired black-white-red color schemes, custom hover transitions, and screen breakpoints tailored for desktop, tablet, and mobile displays.



# File Structure & Technical Breakdown

Below is a detailed overview of the core files and components that comprise this application:

- `src/App.jsx`**: The main root component of the application. It holds global state variables including `lang` (current active language), `cart` (array of selected products), and `currentPage` (view manager). It also hosts the central navigation scroll handlers and conditionally renders the primary views (`Home`, `Products`, `Cart`) alongside global layout elements like `Navbar` and `Footer`.

- `src/Pages/Home.jsx`: The landing view component. It structures the primary user experience by hosting the Hero section with call-to-action buttons, the embedded Trophies section displaying club titles, and the official sponsors grid.

-`src/components/Navbar.jsx`: A fixed navigation bar component that houses brand logos, link anchors for instant section jumps, a real-time search input box, the language switching toggle (`Globe` icon), and the shopping cart icon badge.

- `src/components/TrophiesSection.jsx`: Renders the club's trophy tally grid using reusable card elements styled with gold accent icons (`Lucide React`), elevated hover states, and dynamic title translations.

- `src/components/Sponsors.jsx`: Displays official corporate sponsor logos in a responsive grid over a dark semi-transparent image background overlay.

- `src/components/ProductCard.jsx`: A modular presentation component that receives product details (image, name key, price, description) as props and provides quick action buttons for adding items to the user's cart.

- `src/components/Cart.jsx`: The dedicated cart view displaying selected merchandise, quantity controls, price aggregations, and checkout prompt interfaces.

- `src/components/Footer.jsx`: Renders footer copyright details, helpful quick links, and club store social media references.

- `src/data/Products.js`: An array data structure serving as the local product catalog, containing unique IDs, price metrics, product images, and translation dictionary keys.

- `src/data/translations.js`: The central dictionary mapping object containing key-value pairs for both Arabic (`ar`) and English (`en`) strings across all interface elements.

- `src/App.css`: The primary stylesheet containing global CSS rules, CSS variables, glassmorphism styles, animated hover rules, media queries, and layout grids.



## Design Decisions

1. *State Management vs. React Router:
   - For an e-commerce platform prototype of this scope, managing current page views via top-level React state (`currentPage`) provided absolute control over page transitions, scroll restoration, and component mounting without adding extra external routing complexity.

2. *Custom CSS Over UI Frameworks:
   - Rather than relying on standard Bootstrap or Tailwind classes, custom CSS was written to achieve exact alignment with Zamalek SC's visual identity—featuring crisp red borders, gold accent badges, dark glassmorphic overlays, and specific card transition speeds.

3. *Performance Optimization:
   - Transitions are explicitly scoped to hardware-accelerated properties (`transform`, `opacity`, `box-shadow`) to maintain high framerates on mobile browsers. Images are loaded as optimized assets to keep the initial build lightweight.



## How to Run the Project Locally

1. Clone the Repository:
   ```bash
   git clone <repository-url>
   cd zamalek-store