# Gowth Architect Landing Page

This is a React application for the Gowth Architect landing page, built with Vite and TailwindCSS.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser.

## Project Structure

- `src/App.jsx`: Main app component
- `src/components/`: Reusable components
  - `Nav.jsx`: Navigation header
  - `Hero.jsx`: Hero section
  - `MethodCards.jsx`: Methodology section
  - `Solutions.jsx`: Solutions section
  - `Services.jsx`: Services section
  - `Convergence.jsx`: Convergence section
  - `Contact.jsx`: Contact section
  - `Section.jsx`: Section wrapper
  - `Card.jsx`: Card component
  - `Pill.jsx`: Pill component
  - `MockImage.jsx`: Mock image component

## Scalability

This project is structured for scalability:

- Components are modular and reusable.
- Data is passed as props, making it easy to make dynamic.
- For backend, you can add a `server/` folder with Node.js and Express.
- For database, integrate with MongoDB or PostgreSQL.
- Add routing with React Router for multiple pages.
- Add state management with Redux or Context API.
- Add testing with Jest and React Testing Library.

## Future Enhancements

- Add backend API for contact form.
- Integrate with CMS for content management.
- Add authentication.
- Deploy to Vercel or Netlify.