# Accessibility Guidelines

This document outlines the accessibility standards and practices for the DevFest Detroit website. Our goal is to ensure the website is accessible to all users, including those using assistive technologies.

## Overview

We have implemented comprehensive accessibility tooling and guidelines to ensure our website meets WCAG 2.1 AA standards. This includes both static analysis and runtime testing to catch accessibility issues during development.

## Tooling

### Static Analysis (ESLint)

We use `eslint-plugin-jsx-a11y` to catch accessibility issues during development:

```bash
# Run accessibility linting
npm run lint:a11y

# Run accessibility check (alias)
npm run a11y:check
```

**Configuration**: `.eslintrc.a11y.cjs`

**Key Rules**:

- Alt text for images (`jsx-a11y/alt-text`)
- ARIA attributes validation (`jsx-a11y/aria-props`)
- Semantic HTML structure (`jsx-a11y/heading-has-content`)
- Keyboard navigation support (`jsx-a11y/click-events-have-key-events`)
- Focus management (`jsx-a11y/no-static-element-interactions`)

### Runtime Testing (axe-core)

We use `@axe-core/react` for real-time accessibility checking in development mode:

- **When**: Only runs in development mode (`import.meta.env.DEV`)
- **Delay**: 1000ms to avoid performance impact
- **Output**: Console warnings for accessibility violations
- **Integration**: Automatically initialized in `main.jsx`

## Development Guidelines

### 1. Semantic HTML

Use semantic HTML elements to provide meaning and structure:

```jsx
// ✅ Good
<main>
  <section>
    <h2>Speakers</h2>
    <article>
      <h3>Speaker Name</h3>
      <p>Speaker bio...</p>
    </article>
  </section>
</main>

// ❌ Bad
<div>
  <div>
    <div>Speakers</div>
    <div>
      <div>Speaker Name</div>
      <div>Speaker bio...</div>
    </div>
  </div>
</div>
```

### 2. Images and Alt Text

All images must have meaningful alt text:

```jsx
// ✅ Good
<img src="speaker.jpg" alt="Portrait of John Doe, software engineer" />

// ✅ Good - Decorative images
<img src="decoration.png" alt="" role="presentation" />

// ❌ Bad
<img src="speaker.jpg" alt="image" />
<img src="speaker.jpg" />
```

### 3. Interactive Elements

Ensure all interactive elements are keyboard accessible:

```jsx
// ✅ Good
<button onClick={handleClick} onKeyDown={handleKeyDown}>
  Click me
</button>

// ✅ Good - Using proper semantic elements
<a href="/speakers" onClick={handleClick}>
  View Speakers
</a>

// ❌ Bad
<div onClick={handleClick}>Click me</div>
```

### 4. ARIA Attributes

Use ARIA attributes to enhance accessibility:

```jsx
// ✅ Good
<button
  aria-expanded={isOpen}
  aria-controls="speaker-details"
  aria-label="Toggle speaker details"
>
  {isOpen ? 'Hide' : 'Show'} Details
</button>

<div id="speaker-details" aria-hidden={!isOpen}>
  Speaker information...
</div>
```

### 5. Form Elements

Ensure proper labeling and validation:

```jsx
// ✅ Good
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  required
  aria-describedby="email-error"
/>
<div id="email-error" role="alert">
  Please enter a valid email address
</div>

// ❌ Bad
<input type="email" placeholder="Email" />
```

### 6. Focus Management

Ensure proper focus management:

```jsx
// ✅ Good - Focus management in modals
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      Modal content...
    </div>
  )
}
```

### 7. Color and Contrast

- Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- Don't rely solely on color to convey information
- Use patterns, icons, or text in addition to color

### 8. Responsive Design

- Ensure content is accessible on all screen sizes
- Test with screen readers and keyboard navigation
- Use responsive images with appropriate alt text

## Testing Strategy

### 1. Static Analysis

Run accessibility linting before committing:

```bash
npm run lint:a11y
```

### 2. Runtime Testing

- Start development server: `npm run dev`
- Open browser console to see axe-core warnings
- Fix any reported accessibility violations

### 3. Manual Testing

- **Keyboard Navigation**: Test all interactive elements using only keyboard
- **Screen Reader**: Test with screen readers (NVDA, JAWS, VoiceOver)
- **Browser Tools**: Use browser accessibility inspectors
- **Color Contrast**: Use tools like WebAIM's contrast checker

### 4. Automated Testing (Future)

Consider integrating accessibility testing into CI/CD pipeline:

- Run `npm run lint:a11y` in CI
- Add accessibility tests to test suite
- Use tools like axe-core in automated testing

## Common Issues and Solutions

### Issue: Missing alt text

**Solution**: Add descriptive alt text or `alt=""` for decorative images

### Issue: Click events without keyboard support

**Solution**: Add `onKeyDown` handler or use semantic elements like `<button>`

### Issue: Missing form labels

**Solution**: Use `<label>` elements or `aria-label` attributes

### Issue: Poor focus management

**Solution**: Implement proper focus management in modals and dynamic content

### Issue: Insufficient color contrast

**Solution**: Use WebAIM's contrast checker and adjust colors

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [eslint-plugin-jsx-a11y Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html)

## Getting Help

If you encounter accessibility issues or need guidance:

1. Check the browser console for axe-core warnings
2. Run `npm run lint:a11y` to see ESLint accessibility errors
3. Consult the resources above
4. Test with actual assistive technologies
5. Ask for help from team members familiar with accessibility

## Commitment

We are committed to maintaining and improving the accessibility of our website. All new features and changes must meet these accessibility standards before being merged into the main branch.
