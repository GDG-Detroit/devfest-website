import BandhanKaur from '@/assets/images/speakers/Bandhan_Kaur.jpeg'
import BrianMcKeiver from '@/assets/images/speakers/Brian_McKeiver.png'
import ChrisDemars from '@/assets/images/speakers/Chris_Demars.jpg'
import CynthiaRespert from '@/assets/images/speakers/Cynthia_Respert.jpeg'
import HafeezJimoh from '@/assets/images/speakers/Hafeez_Jimoh.png'
import JC_Escalante from '@/assets/images/speakers/JC_Escalante.jpeg'
import JeseekiaVaughn from '@/assets/images/speakers/Jeseekia_Vaughn.jpeg'
import KavithaBangalore from '@/assets/images/speakers/Kavitha_Bangalore.jpg'
import MadonaSWambua from '@/assets/images/speakers/Madona_S_Wambua.jpeg'
import MichaelBower from '@/assets/images/speakers/Michael_Bower.jpg'
import StephanieFrantz from '@/assets/images/speakers/Stephanie_Frantz.jpeg'
import WEDaCruz from '@/assets/images/speakers/WE_Da_Cruz.jpeg'
import WScottRichardson from '@/assets/images/speakers/W_Scott_Richardson.jpeg'

export const SpeakersData = [
  {
    id: 1,
    name: 'Michael Bower',
    email: 'thebowershow@gmail.com',
    avatar: MichaelBower,
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
      track: 'Build with AI',
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
      track: 'Innovation',
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
      track: 'Tech+Design',
      time: '',
      room: '',
    },
  },
  {
    name: 'W. Scott Richardson',
    email: 'zurielseven@gmail.com',
    avatar: WScottRichardson,
    bio: `
      W. Scott Richardson is an award-winning Aerospace Engineer, working for Altair Engineering as an Architect of Learning Experience Design for Computer Aided Engineering.  Scott has been an active volunteer both as the Global Community Outreach chair for Altair's ABERN ERG community development as well as with the National Society of Black Engineers Metro Detroit chapter over the past half decade.

      Wherever Scott goes, you'll find him teaching or learning, from core professional competencies to historical minutae, from Star Trek trivia to his latest hobbies.  In this way, he hopes to give to the communities around him and better them.`,
    twitter: 'zurielseven',
    linkedIn: 'https://www.linkedin.com/in/zurielseven',
    organization: 'Altair Engineering',
    position: '',
    session: {
      title: 'Getting started with Microcontrollers and Sensors',
      abstract:
        "Ever thought about expanding on your software skills with hardware?  Let's start with a Make-and-Take with lasers and microcontrollers!  We'll teach some basics of electronics in a hands-on workshop while building and coding a light detector. Time to find your new maker path!  (Laptop required)",
      description: `
        This workshop is for beginners to electronics that want to get their hands on something physical.  We'll use a handful of simple pieces to assemble a Make-and-Take light detector that we can test with a laser.  We'll code the microcontroller to pick up the analog signal from the laser.  Why a laser? Well, we could test with a flashlight too, but lasers are just way cooler.

        Along the way, we'll start from practically no electronics knowledge at all and discuss how and why these electronics work together the way that they do, ideate and improve code to make our microcontroller run, and practice good breadboarding skills.  Let this be the start of a new maker identity!`,
      tags: [
        'Electronics',
        'Microcontrollers',
        'Lasers',
        'Basic Optics',
        'Getting Started',
        'Hands-On',
        'Take-Home',
      ],
      track: 'Workshops',
      time: '',
      room: '',
    },
  },
  {
    name: 'Hafeez Jimoh',
    email: 'jimohafeezco@gmail.com',
    avatar: HafeezJimoh,
    bio: `I am a Robotics Engineer with active research in teaching robots how to see and move. More importantly, I love to teach and break down seemingly hard concepts into simple bits for people to understand.`,
    twitter: 'jimohhafeezco',
    linkedIn: 'https://www.linkedin.com/in/jimohafeezco/',
    url: '',
    organization: 'Lawrence Technological University',
    position: 'Robotics Engineer & Instructor',
    session: {
      title: 'Robotics in the Age of Generative AI',
      abstract:
        'Robots can see and move, but can they think? This session explores how new AI tools are teaching machines to learn from data, reason like humans, and act in the real world. Attendees will learn how developers can start building the next wave of intelligent robots today.',
      description: `
        Robotics has made huge progress in recent years, but we’re still far from having a robot that can learn, reason, and act in the physical world the way humans do. This talk explores what’s changing that.

        We will dive into how Generative AI is transforming robotics, from motion planning to perception to simulation, and why the future of robotics depends on building Physical AI. You’ll see what’s happening in research labs and startups working on embodied intelligence, and why challenges like data scarcity and real-world generalization still stand in the way of your robot butler dreams.

        We’ll also look at the ecosystem of open tools that make this field accessible to anyone. From LeRobot and Hugging Face to NVIDIA Isaac Sim and Google’s contributions with Gemini Robotics to simulation and reinforcement learning, you’ll learn how to get started experimenting today.

        Whether you’re a developer, researcher, or simply AI-curious, this session will show you how generative models are teaching robots to see, move, and interact more intelligently, and how you can be part of that future.

        Walk away understanding what Physical AI really means, the key players shaping it, and how to join the next generation of developers building smarter, more capable robots.`,
      tags: [
        'Robotics Gen AI',
        'Gen AI and Robotics',
        'Robotics',
        'Physical AI',
      ],
      track: 'Build with AI',
      time: '',
      room: '',
    },
  },
  {
    name: 'Madona S. Wambua',
    email: 'syombuamadona@gmail.com',
    avatar: MadonaSWambua,
    bio: `Madona S. Wambua is a Principal Software Engineer at Capital One, a Google Developer Expert for Android, an Author, and a Keynote Speaker with over a decade of experience in software engineering. She also serves as a Women Techmakers Ambassador and AnitaB.org Co-Chair, where she advocates for diversity and inclusion in technology. Madona hosts the podcast Tech Talks with Madona and is passionate about sharing her Android expertise, teaching others how to build impactful mobile applications, and inspiring the next generation of developers.`,
    twitter: 'madona_wambua',
    linkedIn: 'https://www.linkedin.com/in/madona-wambua/',
    url: 'https://madonasyombua.com/',
    organization: 'Capital One',
    position: 'Principal Software Engineer',
    session: {
      title: 'Gemini Nano on Android: Building with on-device GenAI',
      abstract:
        'Madona will show you how to build on-device Gen AI with Gemini Nano, prioritizing privacy and offline use. She’ll explore app use cases and introduce new APIs that make it easy to summarize, proofread, rewrite text, and generate image descriptions.',
      description:
        "Learn to build on-device gen AI with Gemini Nano, with a priority on user privacy and offline functionality. We'll talk about how to think through on-device use-cases for your app, and introduce a new set of generative AI APIs that harness the power of Gemini Nano. These new APIs make it easy to implement use cases to summarize, proofread, and rewrite text, as well as to generate image descriptions.",
      tags: ['Gemini', 'AI', 'Android'],
      track: 'Tech+Design',
      time: '',
      room: '',
    },
  },
  {
    name: 'Kavitha Bangalore',
    email: 'kavibcmh21@gmail.com',
    bio: `
      Kavitha Bangalore is a seasoned technology leader with over 20 years of experience in developing, integrating, and managing IT, Cloud, and Cybersecurity initiatives across India, Singapore, and the United States. She currently serves as a Cybersecurity Analyst at a leading healthcare organization, where she focuses on securing Cloud environments, AI systems, and software applications.
      
      Kavitha holds a Bachelor’s degree in Engineering (Instrumentation Technology) and a Master’s in Information Technology, complemented by certifications from UT Austin, MIT Sloan, and The Ohio State University. She has earned numerous professional credentials in IT, Agile, Cybersecurity, ITIL, and Six Sigma (Black Belt). Her excellence has been recognized through awards such as the Action-Oriented, Customer-Focused Employee Award and a Certificate of Acknowledgment for Innovation.
      
      An active Senior Member of IEEE, Kavitha also participates in PMI, WiCyS, ISSA, and serves as a Google Women Techmakers Ambassador. Passionate about advancing women in technology, sustainability, and cultural inclusion, she regularly speaks at conferences on Women in Tech and Cybersecurity.
      
      Connect with her on LinkedIn: www.linkedin.com/in/kavithabli
    `,
    avatar: KavithaBangalore,
    twitter: 'kavitbang',
    linkedIn: 'https://www.linkedin.com/in/kavithabli/',
    url: 'https://www.kavithabangalore.com/',
    organization: 'Cleveland Clinic',
    position: 'Cybersecurity Analyst',
    session: {
      title: 'Build Securely: How Developers Can Protect the AI Ecosystem',
      abstract:
        'AI is evolving fast, from large language models to multimodal systems, autonomous agents, and security has to keep in pace too. In this talk, I’ll explore how developers can build securely across the entire AI ecosystem and attendees will walk away with a developer’s playbook for building secure AI.',
      description: `
        As artificial intelligence rapidly expands across every layer of technology—from large language models (LLMs) and multimodal systems to autonomous agents and API-driven pipelines—the attack surface is growing just as fast. Traditional application security practices aren’t enough to protect this new ecosystem, where data, prompts, and model outputs all become potential threat vectors.

        This session equips developers with practical tactics to secure AI from code to cloud. Attendees will learn how to identify and defend against prompt injection, data poisoning, and model exfiltration; harden agents and RAG pipelines; and integrate AI security checks into your CI/CD workflow.


        I'll also cover emerging frameworks like the EU AI Act and NIST AI RMF, translating them into actionable engineering practices.


        By the end, attendees will walk away with a developer’s playbook for building AI systems that are not just innovative, but also secure, transparent, and resilient.
      `,
      tags: ['Software Security', 'AI Security', 'Application Security'],
      track: 'Build with AI',
      time: '',
      room: '',
    },
  },
  {
    name: 'Bandhan Kaur',
    email: 'kaur@bandhan.dev',
    bio: 'Bandhan (pronounced bun-done) works as a Data and AI Engineer at EA, Google Ambassador for Women Techmakers, x-volunteer AP computer science teacher for Microsoft TEALS at Detroit International Academy for Young Women and Cass Tech. Bandhan has been coding for the last 10 years, loves building code using several languages and learning new tech while sharing her code processes via Medium articles. Certified as a Google Cloud Digital Leader, she combines her deep technical expertise in Google Cloud Platform and AI/ML model development with profound and sustained commitment to global mentorship, community leadership, and advancing diversity, equity, and inclusion in technology.',
    avatar: BandhanKaur,
    twitter: '',
    linkedIn: 'https://www.linkedin.com/in/bandhanpreet-kaur/',
    url: 'https://bandhan.dev',
    organization: 'Google Women Tech Makers Ambassador & EA',
    position: 'Data and AI Engineer',
    session: {
      title: 'Women Shaping the Future Panel',
      abstract:
        'Join us as we spotlight the powerful role of women in technology. This panel will feature inspiring stories of overcoming challenges, driving innovation, and shaping a more inclusive tech landscape. Gain insights, build connections, and leave empowered to push boundaries in your career!',
      description:
        'This panel offers an opportunity for everyone in tech to learn from the experiences of leaders, engineers, entrepreneurs who are driving change in the industry. We’ll discuss strategies for overcoming obstacles, fostering diversity, and creating inclusive environments where all voices are heard. Whether you’re an ally, a mentor, or someone navigating your own career path, you’ll gain valuable insights on how to build a more equitable and innovative tech community.',
      tags: [],
      track: 'Level Up',
      time: '',
      room: '',
    },
  },
  {
    name: 'W.E. Da’ Cruz',
    email: null,
    avatar: WEDaCruz,
    bio: null,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/wedacruz/',
    url: null,
    organization: 'The Digital Diplomat',
    position: 'Entrepreneur',
    session: {
      title: 'Women Shaping the Future Panel',
      abstract:
        'Join us as we spotlight the powerful role of women in technology. This panel will feature inspiring stories of overcoming challenges, driving innovation, and shaping a more inclusive tech landscape. Gain insights, build connections, and leave empowered to push boundaries in your career!',
      description:
        'This panel offers an opportunity for everyone in tech to learn from the experiences of leaders, engineers, entrepreneurs who are driving change in the industry. We’ll discuss strategies for overcoming obstacles, fostering diversity, and creating inclusive environments where all voices are heard. Whether you’re an ally, a mentor, or someone navigating your own career path, you’ll gain valuable insights on how to build a more equitable and innovative tech community.',
      tags: [],
      track: 'Level Up',
      time: '',
      room: '',
    },
  },
  {
    name: 'Jeseekia Vaughn',
    email: null,
    avatar: JeseekiaVaughn,
    bio: null,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/jeseekiavaughn/',
    url: null,
    organization: 'Detroit Black Tech and 313 Connect at TechTown',
    position: null,
    session: {
      title: 'Women Shaping the Future Panel',
      abstract:
        'Join us as we spotlight the powerful role of women in technology. This panel will feature inspiring stories of overcoming challenges, driving innovation, and shaping a more inclusive tech landscape. Gain insights, build connections, and leave empowered to push boundaries in your career!',
      description:
        'This panel offers an opportunity for everyone in tech to learn from the experiences of leaders, engineers, entrepreneurs who are driving change in the industry. We’ll discuss strategies for overcoming obstacles, fostering diversity, and creating inclusive environments where all voices are heard. Whether you’re an ally, a mentor, or someone navigating your own career path, you’ll gain valuable insights on how to build a more equitable and innovative tech community.',
      tags: [],
      track: 'Level Up',
      time: '',
      room: '',
    },
  },
  {
    name: 'Stephanie Frantz',
    email: null,
    avatar: StephanieFrantz,
    bio: null,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/stephanielage/',
    url: null,
    organization: 'Cengage Education',
    position: 'Lead DevOps Engineer',
    session: {
      title: 'Women Shaping the Future Panel',
      abstract:
        'Join us as we spotlight the powerful role of women in technology. This panel will feature inspiring stories of overcoming challenges, driving innovation, and shaping a more inclusive tech landscape. Gain insights, build connections, and leave empowered to push boundaries in your career!',
      description:
        'This panel offers an opportunity for everyone in tech to learn from the experiences of leaders, engineers, entrepreneurs who are driving change in the industry. We’ll discuss strategies for overcoming obstacles, fostering diversity, and creating inclusive environments where all voices are heard. Whether you’re an ally, a mentor, or someone navigating your own career path, you’ll gain valuable insights on how to build a more equitable and innovative tech community.',
      tags: [],
      track: 'Level Up',
      time: '',
      room: '',
    },
  },
  {
    name: 'Cynthia Respert',
    email: null,
    avatar: CynthiaRespert,
    bio: null,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/cynthiarespert/',
    url: null,
    organization: 'BuildHer Academy and Rebrand City',
    position: 'Founder & COO + Strategic Partner',
    session: {
      title: 'Women Shaping the Future Panel',
      abstract:
        'Join us as we spotlight the powerful role of women in technology. This panel will feature inspiring stories of overcoming challenges, driving innovation, and shaping a more inclusive tech landscape. Gain insights, build connections, and leave empowered to push boundaries in your career!',
      description:
        'This panel offers an opportunity for everyone in tech to learn from the experiences of leaders, engineers, entrepreneurs who are driving change in the industry. We’ll discuss strategies for overcoming obstacles, fostering diversity, and creating inclusive environments where all voices are heard. Whether you’re an ally, a mentor, or someone navigating your own career path, you’ll gain valuable insights on how to build a more equitable and innovative tech community.',
      tags: [],
      track: 'Level Up',
      time: '',
      room: '',
    },
  },
  {
    name: 'JC Escalante',
    email: 'jcskalant@gmail.com',
    avatar: JC_Escalante,
    bio: `
      Hi, I'm JC. For over 20 years, my focus has been translating deep technical vision into tangible business value and guiding products from concept to launch.
      
      As a hands-on leader, I work with globally distributed, cross-functional teams to drive enterprise AI strategy, helping users in the insights industry achieve their full potential with AI. I'm also a Google Developer Expert, and I love getting into the weeds, whether it's building on Google Cloud or coding a new RAG pipeline.

      I earned my MBA from MIT, and I'm passionate about sharing what I've learned about building scalable and responsible AI with the developer community.
    `,
    twitter: 'jcskalant',
    linkedIn: null,
    url: null,
    organization: 'Ipsos',
    position: 'President, of Artificial Intelligence',
    session: {
      title:
        'Beyond the Black Box - Designing for trust and transparency with Google Cloud',
      abstract: `
        As companies rush to update their AI governance frameworks and adopt Generative AI, user trust often gets sidelined.  
        
        This session offers actionable steps to translate ethics into practice, including hallucination reduction, embedded transparency, and safety evaluations with Vertex AI tools.
      `,
      description: `
        Adopting AI governance frameworks and an AI Code of Conduct is a crucial first step for any company adopting Generative AI. Still, principles on paper alone don't build trust in production. The real challenge is translating ideals such as trust, fairness, and transparency into architecture and product decisions that keep your users in control.

        This session covers Google Cloud tools that every practitioner should consider as part of their solutions. We will move beyond theory and demonstrate how to increase trust with production-ready AI applications.

        Attendees will learn to:
        1. Mitigate hallucinations and build a foundation of reliability using Vertex AI's grounding features.
        2. Embed transparency by design with clear source attribution and inline citations.
        3. Use Vertex AI Model Evaluations to objectively measure and report on model safety and quality.

        You will leave with a practical playbook for building generative AI applications that are not only powerful but also verifiably trustworthy.
      `,
      tags: ['trust', 'transparency'],
      track: 'Build with AI',
      time: '',
      room: '',
    },
  },
]
