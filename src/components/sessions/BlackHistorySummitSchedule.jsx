import PropTypes from 'prop-types'
import Timeline from './Timeline'

const blackHistorySummitSchedule = [
  {
    time: '8:00 AM',
    events: [
      {
        title: 'Check-In & Breakfast',
        description:
          'In-person session. Grab your badge, enjoy a delicious breakfast, and get ready for an amazing day of learning and networking.',
      },
    ],
  },
  {
    time: '8:15 AM',
    events: [
      {
        title: 'Morning Mindfulness & Meditative Yoga',
        description:
          'In-person session. Start your day mindfully with a relaxing meditation and yoga session to energize your body and clear your mind.',
      },
    ],
  },
  {
    time: '9:00 AM',
    events: [
      {
        title:
          "Powering Detroit's Future: AI-Driven Energy Innovation Fireside Chat with DTE x IBM",
        description:
          "Innovation Summit Keynote (Virtual & In-person, Leadership Track) - Join us for an inspiring keynote conversation between two visionary Black leaders transforming how Michigan powers its future. Steven Benyard, Vice President of Electric Capital Delivery at DTE Energy, and Jason Kelley, Global Head and Managing Partner of Core Business Applications at IBM, will explore how artificial intelligence is revolutionizing the energy sector while creating unprecedented opportunities for Michigan's communities. Topics include: The AI Revolution in Energy, Equity Through Innovation, Climate Action Meets Community Impact, Building Tomorrow's Workforce, and real-world examples of AI applications improving energy reliability across Southeast Michigan. Speakers: Steven Benyard (VP - Electric Capital Delivery, DTE Energy), Jason Kelley (Global Head, Managing Partner - Core Business Applications, IBM), Tabice Ward (CIO, Walker-Miller).",
      },
    ],
  },
  {
    time: '10:00 AM',
    events: [
      {
        title: 'AI Foundations Sessions',
        description: 'In-person AI Foundations track sessions.',
      },
      {
        title: 'Build with AI Workshops',
        description: 'In-person Build with AI track workshops.',
      },
      {
        title: 'Career Mentorship',
        description: 'Virtual & In-person career mentorship sessions.',
      },
      {
        title: 'Innovation Workshops',
        description: 'In-person Innovation track workshops.',
      },
      {
        title: 'Leadership Sessions',
        description: 'Virtual & In-person Leadership track sessions.',
      },
      {
        title: 'Level Up Sessions',
        description: 'In-person Level Up track sessions.',
      },
      {
        title: 'Resume Review',
        description: 'Virtual & In-person resume review sessions.',
      },
    ],
  },
  {
    time: '12:00 PM',
    events: [
      {
        title: 'Lunch Break & Networking',
        description:
          'In-person session. Take a break, enjoy lunch, and connect with fellow attendees, speakers, and sponsors.',
      },
    ],
  },
  {
    time: '1:00 PM',
    events: [
      {
        title:
          'Catalysts and Change Agents: Extending the Impact of Your Tech Leadership',
        description:
          'Innovation Summit Panel Discussion (Virtual & In-person, Leadership Track) - Join Sylvester Hester, Justin Turk, and W. Scott Richardson for a panel on bridging the gap between technical excellence and social responsibility. This session offers a "system architecture" for repeatable community impact, teaching early- and mid-career professionals and tech leaders across industries how to draw on executive and managerial frameworks to strengthen the communities they serve. Learn to maximize your influence while eliminating the "scope creep" of burnout and overcommitment. Speakers: Sylvester Hester (President & CEO, LM Manufacturing), Justin Turk (2X Tech Founder, ConStrat AI + Livegistics), W. Scott Richardson (Senior Specialist - Training Development, Altair Engineering).',
      },
    ],
  },
  {
    time: '2:00 PM',
    events: [
      {
        title: 'AI Foundations Sessions',
        description: 'In-person AI Foundations track sessions.',
      },
      {
        title: 'Build with AI Workshops',
        description: 'In-person Build with AI track workshops.',
      },
      {
        title: 'Career Mentorship',
        description: 'Virtual & In-person career mentorship sessions.',
      },
      {
        title: 'Innovation Workshops',
        description: 'In-person Innovation track workshops.',
      },
      {
        title: 'Leadership Sessions',
        description: 'Virtual & In-person Leadership track sessions.',
      },
      {
        title: 'Level Up Sessions',
        description: 'In-person Level Up track sessions.',
      },
      {
        title: 'Mock Interviews',
        description: 'Virtual & In-person mock interview sessions.',
      },
    ],
  },
  {
    time: '4:00 PM',
    events: [
      {
        title: 'Closing Remarks & Prizes',
        description:
          'In-person session. Join us for closing remarks, prize drawings, and final announcements.',
      },
    ],
  },
  {
    time: '4:30 PM',
    events: [
      {
        title: 'Techie Hour & Networking',
        description:
          'In-person session. Wind down the day with networking and connect with fellow tech professionals.',
      },
    ],
  },
]

const BlackHistorySummitSchedule = ({ compact = false }) => {
  return <Timeline schedule={blackHistorySummitSchedule} compact={compact} />
}

BlackHistorySummitSchedule.propTypes = {
  compact: PropTypes.bool,
}

export default BlackHistorySummitSchedule
