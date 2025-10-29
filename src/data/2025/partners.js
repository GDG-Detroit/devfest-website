import CompassDetroit from '@/assets/images/sponsors/Compass_Detroit_logo.webp'
import Google from '@/assets/images/sponsors/Google_logo.webp'
import SHPEDetroit from '@/assets/images/organizations/org-shpe-logo.webp'
import WomenTechmakers from '@/assets/images/organizations/org-wtm-logo.webp'
import GDGDetroit from '@/assets/images/organizations/org-gdg-detroit.webp'
import GDGAnnArbor from '@/assets/images/organizations/org-gdg-a2.webp'
import GDGToledo from '@/assets/images/organizations/org-gdg-toledo.webp'
import GDGWindsor from '@/assets/images/organizations/org-gdg-windsor.webp'
import GDGUofMDearborn from '@/assets/images/organizations/org-gdg-umd.webp'
import GDGWSU from '@/assets/images/organizations/org-gdg-wsu.webp'
import NSBEDetroit from '@/assets/images/organizations/org-nsbe-logo.webp'
import WSU from '@/assets/images/sponsors/spo-wsu-logo.webp'
import IBM from '@/assets/images/sponsors/spo-ibm-logo.webp'
import DTE from '@/assets/images/sponsors/spo-dte-logo.webp'
import CCS from '@/assets/images/sponsors/spo-ccs-logo.webp'
// Partners data combining sponsors and organizations
// Organized by tier: Platinum, Diamond, Gold, and Organizations

export const partnersData = {
  platinum: [
    {
      id: 1,
      name: 'Google',
      logo: Google,
      desc: `Our mission is to organize the world's information and make it universally accessible and useful.

We are committed to significantly improving the lives of as many people as possible by protecting users, building belonging, expanding opportunity, responding to crises, and advancing sustainability.`,
      url: 'https://google.com/',
      tier: 'Platinum Sponsor',
    },
  ],
  diamond: [
    {
      id: 2,
      name: 'Compass Detroit',
      logo: CompassDetroit,
      desc: `The Collective of Minority Professionals and STEAM Societies (formerly COMPES) was formed in 2000 as an initiative between the NSBE, SHPE, and SWE Detroit professional chapters. The mission of this collaborative partnership is to support the local Detroit community in upskilling, career growth, networking, and to provide access to new opportunities.`,
      url: 'hhttps://bit.ly/bhm-summit-website',
      tier: 'Diamond Sponsor',
    },
    {
      id: 3,
      name: 'Wayne State University',
      logo: WSU,
      desc: 'Wayne State University is a premier urban research university offering more than 380 academic programs through 13 schools and colleges.',
      url: 'https://wayne.edu/',
      tier: 'Diamond Sponsor',
    },
  ],
  gold: [
    {
      id: 4,
      name: 'IBM',
      logo: IBM,
      desc: 'IBM is a global technology and innovation company with expertise in hybrid cloud, AI, and consulting services.',
      url: 'https://www.ibm.com/',
      tier: 'Gold Sponsor',
    },
    {
      id: 5,
      name: 'DTE',
      logo: DTE,
      desc: 'DTE Energy is a Detroit-based diversified energy company involved in the development and management of energy-related businesses and services.',
      url: 'https://www.dteenergy.com/',
      tier: 'Gold Sponsor',
    },
    {
      id: 6,
      name: 'CCS',
      logo: CCS,
      desc: 'College for Creative Studies is a private art and design school in Detroit, Michigan.',
      url: 'https://www.collegeforcreativestudies.edu/',
      tier: 'Gold Sponsor',
    },
  ],
  organizations: [
    {
      id: 7,
      name: 'GDG Detroit',
      logo: GDGDetroit,
      desc: 'Google Developer Group Detroit is a community of developers interested in Google technologies.',
      url: 'https://gdg.community.dev/gdg-detroit/',
      tier: 'Organization',
    },
    {
      id: 8,
      name: 'GDG Ann Arbor',
      logo: GDGAnnArbor,
      desc: 'Google Developer Group Ann Arbor is a community of developers interested in Google technologies.',
      url: 'https://gdg.community.dev/gdg-ann-arbor/',
      tier: 'Organization',
    },
    {
      id: 9,
      name: 'GDG Toledo',
      logo: GDGToledo,
      desc: 'Google Developer Group Toledo is a community of developers interested in Google technologies.',
      url: 'https://gdg.community.dev/gdg-toledo/',
      tier: 'Organization',
    },
    {
      id: 10,
      name: 'GDG Windsor',
      logo: GDGWindsor,
      desc: 'Google Developer Group Windsor is a community of developers interested in Google technologies.',
      url: 'https://gdg.community.dev/gdg-windsor/',
      tier: 'Organization',
    },
    {
      id: 11,
      name: 'GDG UofM Dearborn',
      logo: GDGUofMDearborn,
      desc: 'Google Developer Group at University of Michigan-Dearborn is a student chapter interested in Google technologies.',
      url: 'https://gdg.community.dev/gdg-on-campus-university-of-michigan-dearborn-dearborn-united-states/',
      tier: 'Organization',
    },
    {
      id: 12,
      name: 'GDG Wayne State University',
      logo: GDGWSU,
      desc: 'Google Developer Group at Wayne State University is a student chapter interested in Google technologies.',
      url: null,
      tier: 'Organization',
    },
    {
      id: 13,
      name: 'Women Techmakers',
      logo: WomenTechmakers,
      desc: 'Women Techmakers is a global program providing visibility, community, and resources for women in technology.',
      url: 'https://www.womentechmakers.com/',
      tier: 'Organization',
    },
    {
      id: 14,
      name: 'NSBE Detroit',
      logo: NSBEDetroit,
      desc: 'National Society of Black Engineers Detroit Professional Chapter supports Black engineers and their communities.',
      url: 'https://nsbedetroitprofessionals.org/',
      tier: 'Organization',
    },
    {
      id: 15,
      name: 'SHPE Detroit',
      logo: SHPEDetroit,
      desc: 'Society of Hispanic Professional Engineers Detroit chapter empowers the Hispanic community to realize their full potential.',
      url: 'https://www.shpedetroit.org/',
      tier: 'Organization',
    },
  ],
}
