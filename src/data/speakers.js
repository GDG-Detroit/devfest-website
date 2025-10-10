import BrianMcKeiver from '@/assets/images/speakers/Brian_McKeiver.png'
import ChrisDemars from '@/assets/images/speakers/Chris_Demars.jpg'

export const SpeakersData = [
  {
    id: 1,
    name: 'Michael Bower',
    email: 'thebowershow@gmail.com',
    avatar: 'https://placehold.co/600x400/DB4437/FFFFFF?text=Michael+Bower',
    bio: "Michael Bower is a veteran broadcaster, podcaster, and audiobook narrator with 30+ years behind the mic. He's covered 9/11, the Boston Marathon bombing, and Uvalde for outlets like NBC News Radio, ESPN, and WDFN Detroit. As an audiobook narrator, he's produced more than 150 titles on Audible and brings stories to life with clarity and authenticity. Today, he helps businesses, teams, and audiences understand how AI is reshaping communication and why authenticity has become the most radical—and essential—tool we have.",
    twitter: 'thebowershow',
    linkedIn: 'linkedin.com/in/thebowershow',
    url: null,
    organization: '',
    position: '',
    session: {
      title:
        'The Ethics of Voice & Storytelling: Who Gets Heard in the Age of AI',
      abstract:
        "In January 2024, a finance worker in Hong Kong authorized $25.5 million in transfers after a video call with their CFO and colleagues. The devastating truth came later: every person on that call was a deepfake. This wasn't just fraud—it was a direct assault on the trust infrastructure modern business runs on. Michael Bower argues that when voices can be cloned, authenticity itself becomes radical. With real-world examples and a practical 3-step framework, this talk shows developers and leaders how to defend trust in the age of AI.",
      description:
        'AI can clone any voice in seconds—including yours. What happens when trust in voice collapses? From $25M deepfake scams to fake "kidnap" calls, discover why authenticity is now radical—and how developers and leaders can protect trust in the AI era.',
      tags: [
        'AI',
        'ethics',
        'voice',
        'trust',
        'security',
        'storytelling',
        'communication',
        'leadership',
      ],
      track: 'AI/ML',
      time: '',
      room: '',
    },
  },
  {
    id: 2,
    name: 'Brian McKeiver',
    email: 'bmckeiver@bizstream.com',
    avatar: BrianMcKeiver,
    bio: 'Brian McKeiver is Co-Owner at BizStream, a digital agency in Allendale, MI. He is a solution architect, visionary, Microsoft Azure AI MVP, and Kentico MVP. He has 23 years of experience leading his agency of more than 40 employees and about a hundred clients spread out across North America. In addition to his expertise in web development, cloud, integration, and digital marketing, Brian is active with the tech community via his blog at Mcbeev.com.',
    twitter: 'mcbeev',
    url: 'mcbeev.com',
    organization: 'BizStream',
    position: 'Co-Owner',
    session: {
      title: 'Blending Product Thinking with Software Modernization',
      abstract:
        "In the world of software, products and systems don't just remain static—they evolve, accumulate technical debt, and sometimes become an unmanageable mess. This session explores how blending product thinking with software modernization leads to better outcomes through the lens of long-term product strategy, user needs, and business value. Using real-world lessons from a long-running SaaS product, we'll highlight how to balance technical constraints with customer expectations. Whether you're leading a legacy transformation or trying to avoid one in the future, this talk will showcase smart modernization decisions that don't make the business take a full stop.",
      description:
        "Using real-world lessons from a long-running SaaS product, this session is a case study in modernizing a complex legacy platform. When dealing with a 15-year-old platform, the question isn't just how to modernize but what to modernize. Should you refactor piece by piece or rewrite from scratch?",
      tags: ['modernization', 'leadership', 'product', 'saas'],
      track: 'Miscellaneous',
      time: '',
      room: '',
    },
  },
  {
    id: 3,
    name: 'Chris DeMars',
    email: 'cdemars86@gmail.com',
    avatar: ChrisDemars,
    bio: "Chris DeMars is a Senior Developer Advocate with over 20 years of technical experience. He speaks globally on various frontend topics and has received accolades including the prestigious Microsoft MVP and Progress Champion awards. Chris is passionate about enhancing web development and helping developers achieve their goals. In his free time, he enjoys rating Detroit-style pizza, searching for Bigfoot, and investigating UFO's.",
    twitter: 'saltnburnem',
    url: null,
    organization: 'TuxCare',
    position: 'Senior Developer Advocate',
    session: {
      title: 'Know Your JS: SBOMs for Frontend Devs',
      abstract:
        "This talk will shine a beam on SBOMs (Software Bills of Materials), explaining why frontend developers should care and how to generate one using tools like CycloneDX and Syft. You'll leave with the skills to map your entire dependency galaxy, integrate SBOM creation into your build process, and spot known vulnerabilities before they abduct your users. No security clearance required, just your JavaScript and an explorer's mindset.",
      description:
        "Ever wonder what's lurking in the dark corners of your node_modules, like unidentified flying dependencies sneaking aboard your project? In an age of escalating software supply chain attacks, knowing exactly what you're shipping is as vital as tracking strange lights in the sky.",
      tags: ['javascript', 'cybersecurity', 'frontend', 'open source', 'sbom'],
      track: 'Fullstack',
      time: '',
      room: '',
    },
  },
]
