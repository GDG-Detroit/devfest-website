# Michigan DevFest Website

The repository for the website of [Michigan DevFest](https://midevfest.com/). Built with Vite, React, and Tailwind CSS.

## Quick Start

### Prerequisites

- Node.js
- npm

### Installation

1. Clone and navigate to the repository:

```bash
git clone https://github.com/GDG-Detroit/devfest-website.git
cd devfest-website
```

2. Install the project dependencies:

```bash
npm i # or npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the port shown in your terminal, by default this will be `[http://localhost:5173](http://localhost:5173)`. You can manually update the port in the `vite.config.js` file by adding a server object and adding a port property, with the port you'd like your server to run on in case you have conflicts.

```javascript
// vite.config.js
export default defineConfig({
  // other configurations...
  server: {
    port: 3000, // Your desired port
  },
})
```

## Development Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Start the development server via Vite            |
| `npm run build`      | Build the project for production                 |
| `npm run preview`    | Create a preview of the production build locally |
| `npm run lint`       | Check code for linting errors                    |
| `npm run lint:fix`   | Automatically fix linting errors                 |
| `npm run format`     | Check code formatting with Prettier              |
| `npm run format:fix` | Automatically format code with Prettier          |

## Project Structure

```text
src/
├── assets/             # Images, fonts, and static assets
├── components/         # UI components
└── constants/          # Application constants
├── data/               # Static data and content (e.g. devs, facilitators, organizers, speakers, and sponsors - Contains multiple years)
├── layouts/            # Section layout components
├── pages/              # Page components (Currently only Home)
```

## Development

### Code Style

This project uses ESLint and Prettier for code quality and formatting:

- Run `npm run lint` to check for linting issues
- Run `npm run format` to check code formatting
- Use `npm run lint:fix` and `npm run format:fix` to automatically fix issues
<!-- TODO: This project will likely use Husky for Git hooks in the future. Add configuration for Husky. Ensure Husky is run before commits are made to keep the codebase clean and consistent. -->

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Deployment

<!-- TODO: Connect this repo to Vercel w/ CI/CD -->

### Issues

This project uses GitHub Issues & GitHub Projects in the GDG Detroit organization for tracking development. Please create an issue if you encounter any problems or have suggestions for improvements.

<!-- TODO: Create an issue template -->

### Pull Requests

Please submit a pull request for any changes you'd like to make.

<!-- TODO: Add a PR template -->
