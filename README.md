# Compass Detroit Website

The repository for the website of [Compass-Detroit](https://compass-detroit.com/). Built with Vite, React, and Tailwind CSS.

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
git clone https://github.com/Compass-Detroit/compass-website.git
cd compass-website
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

## Docker

This application can be containerized using Docker for easy deployment and consistent environments.

### Prerequisites

- Docker installed on your system
- Basic understanding of Docker commands

### Building the Docker Image

1. Build the Docker image:

```bash
docker build -t michigan-devfest-website .
```

2. Run the container:

```bash
docker run -p 3000:3000 michigan-devfest-website
```

3. Open your browser and navigate to `http://localhost:3000`

### Docker Commands

| Command                                                                 | Description                                     |
| ----------------------------------------------------------------------- | ----------------------------------------------- |
| `docker build -t compass-detroit-website .`                             | Build the Docker image                          |
| `docker run -p 3000:3000 compass-detroit-website`                       | Run the container on port 3000                  |
| `docker run -d -p 3000:3000 --name compass-app compass-detroit-website` | Run container in detached mode with custom name |
| `docker stop compass-app`                                               | Stop the running container                      |
| `docker rm compass-app`                                                 | Remove the container                            |
| `docker images`                                                         | List all Docker images                          |
| `docker rmi compass-detroit-website`                                    | Remove the Docker image                         |

### Environment Variables

Currently, no environment variables are required to run the application. The application uses static data and doesn't require external services.

### Docker Features

- **Alpine Linux base**: Lightweight and secure
- **Non-root user**: Enhanced security by running as non-root user
- **Multi-stage optimization**: Efficient image size
- **Production-ready**: Uses Vite preview for serving the built application

## Development Scripts

| Command                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start the development server via Vite                         |
| `npm run build`        | Build the project for production                              |
| `npm run preview`      | Create a preview of the production build locally              |
| `npm run lint`         | Check code for linting errors (includes Tailwind class order) |
| `npm run lint:fix`     | Automatically fix linting errors                              |
| `npm run format`       | Format code with Prettier                                     |
| `npm run format:check` | Check code formatting with Prettier                           |
| `npm run commitlint`   | Validate commit message format                                |

## Project Structure

```text
src/
├── assets/             # Images, fonts, and static assets
├── components/         # UI components
└── constants/          # Application constants
├── data/               # Static data and content (e.g. devs, facilitators, organizers, speakers, and sponsors - Contains multiple years)
├── layouts/            # Section layout components
├── pages/              # Page components
```

## Development

### Code Style

This project uses ESLint and Prettier for code quality and formatting:

- Run `npm run lint` to check for linting issues
- Run `npm run format:check` to check code formatting
- Use `npm run lint:fix` and `npm run format` to automatically fix issues

### Git Hooks

This project uses Husky and lint-staged to automatically enforce code quality:

- **Pre-commit hook** - Automatically runs ESLint and Prettier on staged files before each commit
- **Automatic formatting** - Code is automatically formatted and linted before commits
- **No manual intervention** - The hooks will fix issues automatically when possible

**How it works:**

1. When you run `git commit`, the pre-commit hook triggers
2. lint-staged runs ESLint and Prettier on only the files you're committing
3. If there are fixable issues, they're automatically resolved
4. If there are unfixable issues, the commit is blocked until you fix them manually
5. Once all issues are resolved, the commit proceeds

### Conventional Commits

This project enforces the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear, consistent commit messages:

- **Commit-msg hook** - Automatically validates commit message format before each commit
- **Consistent history** - All commits follow a standardized format
- **Automation ready** - Enables automated changelog generation and semantic versioning

**Commit Message Format:**

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Supported Types:**

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation changes
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `test` - Adding or correcting tests
- `chore` - Maintenance
- `perf` - Performance improvements
- `ci` - CI/CD changes
- `build` - Build system changes
- `revert` - Revert a previous commit

**Examples:**

```bash
feat: add user authentication
fix: resolve memory leak in data processing
docs: update API documentation
style: fix code formatting issues
refactor: simplify user validation logic
test: add unit tests for payment module
chore: update dependencies
```

**How it works:**

1. When you run `git commit`, the commit-msg hook triggers
2. commitlint validates your commit message against the conventional format
3. If the message is invalid, the commit is blocked with helpful error messages
4. If the message is valid, the commit proceeds normally

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
