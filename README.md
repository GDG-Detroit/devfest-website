# Michigan DevFest Website

The repository for the website of [Michigan DevFest](https://midevfest.com/). Built with Vite, React, and Tailwind CSS.

## Quick Start

### Prerequisites

- Node.js
- npm
- VS Code (recommended)

### Recommended VS Code Extensions

This project includes VS Code extension recommendations. When you open the project in VS Code, you'll be prompted to install:

- **ESLint** (`dbaeumer.vscode-eslint`) - For code linting and Tailwind CSS class ordering
- **Prettier** (`esbenp.prettier-vscode`) - For code formatting
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - For Tailwind CSS autocomplete and IntelliSense
- **axe Accessibility Linter** (`deque-systems.vscode-axe-linter`) - For real-time accessibility linting

These extensions work with the project's `.vscode/settings.json` to provide automatic formatting, linting, and accessibility checking on save.

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

| Command              | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `npm run dev`        | Start the development server via Vite                         |
| `npm run build`      | Build the project for production                              |
| `npm run preview`    | Create a preview of the production build locally              |
| `npm run lint`       | Check code for linting errors (includes Tailwind class order) |
| `npm run lint:fix`   | Automatically fix linting errors                              |
| `npm run format`     | Check code formatting with Prettier                           |
| `npm run format:fix` | Automatically format code with Prettier                       |

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

### Accessibility

This project prioritizes accessibility and uses several tools to ensure inclusive design:

- **VS Code axe Accessibility Linter** - Real-time accessibility linting in the editor (when extension is installed)
- **ESLint Tailwind plugin** - Detects class ordering issues for better maintainability
- **ResponsiveImage component** - Provides proper alt text fallbacks and modern image formats
- **Semantic HTML** - Uses proper heading hierarchy and landmark elements
- **Manual accessibility testing** - Regular testing with browser accessibility tools

**Accessibility Guidelines**: This project follows WCAG 2.1 guidelines and includes proper ARIA labels, keyboard navigation support, and semantic HTML structure.

**Note**: If the axe Accessibility Linter extension is not available, you can use browser-based accessibility tools like:

- [axe DevTools browser extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- Built-in browser accessibility inspectors

### Tailwind CSS Class Ordering

This project uses a **manual class ordering** approach for optimal control and reliability:

1. **ESLint Tailwind plugin** detects when classes are out of order and shows warnings
2. **Developers manually fix** the class order when warnings appear
3. **Follows official Tailwind CSS class order** for consistency

**Benefits of manual ordering:**

- ✅ **Full control** over class organization
- ✅ **No conflicts** between different tools
- ✅ **Reliable** across all file types (JSX, HTML, etc.)
- ✅ **Team consistency** through ESLint warnings

**Class order reference:** Layout → Sizing → Spacing → Typography → Backgrounds → Effects → Transitions → Hover states

**Why not use Prettier Tailwind plugin:**

- ❌ **Layout breaking** - Plugin reorders classes that break specific layouts
- ❌ **Inconsistent behavior** - Plugin sometimes fails to sort classes properly
- ❌ **Version conflicts** - Plugin compatibility issues with different Prettier versions
- ❌ **Debugging complexity** - Hard to troubleshoot when sorting doesn't work as expected
- ❌ **Tool conflicts** - Can interfere with other formatting rules
- ✅ **Manual control** - Developers maintain full control over class organization

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
