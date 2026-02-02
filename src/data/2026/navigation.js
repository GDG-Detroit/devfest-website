// Navigation sections used in Navbar and Footer
export const sections = [
  { id: 'location', text: 'About' },
  { id: 'schedule', text: 'Schedule' },
  { id: 'community', text: 'Community' },
  { id: 'members', text: 'Members' },
  { id: 'speakers', text: 'Speakers' },
  { id: 'partners', text: 'Partners' },
  { id: 'leadership', text: 'Leadership' },
]

// Pathways dropdown: careers-hub, connections, media (used in Navbar)
export const pathways = {
  text: 'Pathways',
  children: [
    { to: '/careers-hub', text: 'Careers Hub' },
    { to: '/connections', text: 'Connections' },
    { to: '/media', text: 'Media' },
  ],
}

// Flat list of pathway links (used in Footer)
export const externalLinks = pathways.children
