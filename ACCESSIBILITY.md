# Accessibility Guidelines

This document outlines the accessibility standards and practices for the DevFest Detroit website. We are committed to making our website accessible to all users, including those with disabilities.

## Standards

We follow the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/) at the AA level.

## Tools and Automation

### ESLint Accessibility Rules

We use `eslint-plugin-jsx-a11y` to catch accessibility issues during development:

```bash
# Run accessibility linting
npm run lint:a11y

# Run full accessibility check (linting + automated testing)
npm run a11y:check

# Run accessibility checks on staged files only
npm run a11y:check:staged

# Run lint-staged (includes accessibility checks)
npx lint-staged
```

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
