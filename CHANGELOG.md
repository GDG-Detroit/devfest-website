# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.2] - 2026-02-01

### Added

- Add new tab in navigation, "Pathways"
- Careers Hub, Connections, and Media grouped under a single “Pathways” item with caret
- Golden (primary) underline on hover for Pathways subnav items (desktop)
- Mobile: active pathway page highlighted with yellow (primary) background; Pathways section auto-expands when on a pathway page

### Changed

- Navbar z-index raised (z-30) so it stays in front of LandingSection and other content
- Removed overflow-hidden from nav and inner grid so Pathways dropdown is no longer clipped
- Pathways trigger aligned with other nav items (items-baseline, inline-flex) so “Pathways” sits on the same line
- Pathways dropdown panel nudged up slightly (-mt-0.5) for cleaner alignment

## [0.1.1] - 2026-01-30

### Added

- New pages: Connections, Media, Careers Hub
- Media section and Connections page
- Community and membership content on home

### Changed

- Navigation and copyright updates; navbar items reorganized
- Home section and sub-sections restructured
- Broader description area on home
- Team section migrated to leadership with new tabs
- Partners section refactored
- Speakers section refactored
- Remove Past Events page and redirect to Previous Events page

### Fixed

- Fixed git remote configuration (origin now points to Compass-Detroit/compass-website)
- Fixed incorrect variable name usage

## [0.1.0] - 2026-01-28

### Added

- Initial Compass Detroit website setup
- Yoda404 component with floating animation
- Custom Tailwind color palette (primary, charcoal, pumpkin, burnt, lime, indigo)
- Custom font families (Montserrat, BioRhyme, Orbitron, Asimovian)
- Accessibility documentation (ACCESSIBILITY.md, CONTRAST-ANALYSIS.md)
- Git hooks for linting, formatting, and commit message validation
- ESLint and Prettier configuration
- VS Code extension recommendations

### Fixed

- Fixed git remote configuration (origin now points to Compass-Detroit/compass-website)
- Fixed Montserrat font weight to use Medium (500) instead of Thin (100)
- Fixed incorrect variable name usage

[Unreleased]: https://github.com/Compass-Detroit/compass-website/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/Compass-Detroit/compass-website/releases/tag/v0.1.2
[0.1.1]: https://github.com/Compass-Detroit/compass-website/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Compass-Detroit/compass-website/releases/tag/v0.1.0
