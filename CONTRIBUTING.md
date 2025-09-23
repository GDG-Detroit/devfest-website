# Contributing to DevFest Detroit Website

Thank you for your interest in contributing to the DevFest Detroit website! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/devfest-website.git
   cd devfest-website
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## Code Quality Standards

### Automated Checks

All pull requests are automatically checked for:

- **Code Quality**: ESLint checks for code style and potential errors
- **Code Formatting**: Prettier ensures consistent code formatting
- **Build Verification**: Ensures the application builds successfully
- **Accessibility**: Automated accessibility testing with axe-core and pa11y
- **Security**: npm audit checks for security vulnerabilities

### Manual Checks

Before submitting a PR, please ensure:

- [ ] Code follows the project's coding standards
- [ ] All automated checks pass
- [ ] Code is properly commented where necessary
- [ ] No console.log statements left in the code
- [ ] Error handling is implemented where appropriate

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Test your changes locally

### 3. Test Your Changes

```bash
# Run linting
npm run lint

# Check formatting
npm run format:check

# Run accessibility tests
npm run test:a11y

# Build the application
npm run build
```

### 4. Commit Your Changes

We use conventional commits. Your commit message should follow this format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

**Examples:**

```bash
git commit -m "feat(speakers): add speaker bio modal"
git commit -m "fix(navbar): resolve mobile menu accessibility issue"
git commit -m "docs(readme): update installation instructions"
```

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub using our PR template.

## Accessibility Guidelines

We are committed to making the DevFest Detroit website accessible to everyone. Please ensure:

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus indicators are visible and clear
- Tab order is logical and intuitive

### Screen Reader Support

- Images have appropriate alt text
- Form labels are properly associated
- Headings follow a logical hierarchy
- Interactive elements have descriptive names

### Visual Design

- Color contrast meets WCAG AA standards (4.5:1 for normal text)
- Text can be resized up to 200% without loss of functionality
- Information is not conveyed by color alone

### Testing Accessibility

```bash
# Run automated accessibility tests
npm run test:a11y

# Run pa11y tests
npm run test:a11y:pa11y
```

## Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Use meaningful variable and function names
- Keep components small and focused
- Use PropTypes for prop validation
- Follow the existing ESLint configuration

### CSS/Styling

- Use Tailwind CSS for styling
- Follow the existing design system
- Use semantic HTML elements
- Keep styles organized and maintainable

### File Organization

- Keep related files together
- Use descriptive file and folder names
- Follow the existing project structure

## Pull Request Process

1. **Use the PR template** - Fill out all relevant sections
2. **Ensure all checks pass** - The CI pipeline must pass before merging
3. **Request reviews** - Tag appropriate reviewers
4. **Address feedback** - Respond to review comments promptly
5. **Keep PRs focused** - One feature or fix per PR
6. **Write clear descriptions** - Explain what changed and why

## Issue Reporting

When reporting issues, please use our issue templates:

- **Bug Report**: For reporting bugs and issues
- **Feature Request**: For suggesting new features
- **Accessibility Issue**: For reporting accessibility problems

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the [GDG Code of Conduct](https://developers.google.com/community/gdg/code-of-conduct)

## Getting Help

- **GitHub Discussions**: For general questions and discussions
- **GDG Detroit Community**: Join our [GDG Detroit community](https://gdg.community.dev/gdg-detroit/)
- **Issues**: For bug reports and feature requests

## Release Process

Releases are managed by the maintainers. When your PR is merged:

1. The changes are automatically deployed
2. You'll be credited in the release notes
3. The website will be updated with your contributions

## Thank You

Thank you for contributing to the DevFest Detroit website! Your contributions help make our event more accessible and engaging for the developer community in Detroit.

---

**Note**: This project is maintained by the GDG Detroit team. For questions about the project or this contributing guide, please open an issue or start a discussion.
