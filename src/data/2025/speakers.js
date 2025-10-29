import AdonaiVera from '@/assets/images/speakers/Adonai_Vera.png'
import AlexPatterson from '@/assets/images/speakers/Alex_Patterson.png'
import BandhanKaur from '@/assets/images/speakers/Bandhan_Kaur.jpeg'
import BorisWilfriedNyasse from '@/assets/images/speakers/Boris_Wilfried_Nyasse.png'
import BrianMcKeiver from '@/assets/images/speakers/Brian_McKeiver.png'
import ChrisDemars from '@/assets/images/speakers/Chris_Demars.jpg'
import CynthiaRespert from '@/assets/images/speakers/Cynthia_Respert.jpeg'
import DavidGiard from '@/assets/images/speakers/David_Giard.jpeg'
import HafeezJimoh from '@/assets/images/speakers/Hafeez_Jimoh.png'
import HodaSolati from '@/assets/images/speakers/Hoda_Solati.jpg'
import JC_Escalante from '@/assets/images/speakers/JC_Escalante.jpeg'
import JayWhitsitt from '@/assets/images/speakers/Jay_Whitsitt.jpeg'
import JeseekiaVaughn from '@/assets/images/speakers/Jeseekia_Vaughn.jpeg'
import JoelVasallo from '@/assets/images/speakers/Joel_Vasallo.jpg'
import KavithaBangalore from '@/assets/images/speakers/Kavitha_Bangalore.jpg'
import MadonaSWambua from '@/assets/images/speakers/Madona_S_Wambua.jpeg'
import MichaelBower from '@/assets/images/speakers/Michael_Bower.jpg'
import NileshPatel from '@assets/images/speakers/Nilesh_Patel.jpg'
import ShimaSolati from '@/assets/images/speakers/Shima_Solati.jpg'
import StephanieFrantz from '@/assets/images/speakers/Stephanie_Frantz.jpeg'
import StephenWylie from '@/assets/images/speakers/Stephen_Wylie.jpeg'
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
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 2,
    name: 'Brian McKeiver',
    email: 'bmckeiver@bizstream.com',
    avatar: BrianMcKeiver,
    bio: 'Brian McKeiver is Co-Owner at BizStream, a digital agency in Allendale, MI. He is a solution architect, visionary, Microsoft Azure AI MVP, and Kentico MVP. He has 23 years of experience leading his agency of more than 40 employees and about a hundred clients spread out across North America. In addition to his expertise in web development, cloud, integration, and digital marketing, Brian is active with the tech community via his blog at Mcbeev.com.',
    twitter: 'mcbeev',
    url: 'https://www.mcbeev.com/',
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
    isWTM: false,
    isGDE: false,
    mastodon: null,
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
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 4,
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
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 5,
    name: 'Hafeez Jimoh',
    email: 'jimohafeezco@gmail.com',
    avatar: HafeezJimoh,
    bio: `I am a Robotics Engineer with active research in teaching robots how to see and move. More importantly, I love to teach and break down seemingly hard concepts into simple bits for people to understand.`,
    twitter: 'jimohhafeezco',
    linkedIn: 'https://www.linkedin.com/in/jimohafeezco/',
    url: null,
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
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 6,
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
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 7,
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
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 8,
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
    isWTM: true,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 9,
    name: 'W.E. Da’Cruz',
    email: 'wedacruz@thevgcgroup.com',
    avatar: WEDaCruz,
    bio: `
      Wendy Ekua (W.E.) Da’Cruz is widely recognized as The Digital Diplomat™ a global speaker, advisor, & strategist leading at the intersection of entrepreneurship, innovation, and strategy. Currently a doctoral candidate at the University of Michigan-Flint, she is writing her dissertation on nonmarket strategy to explore how influence beyond capital shapes people, policies, and processes in the marketplace.

      As a sought-after global voice, W.E. Da’Cruz has spoken on economic development, innovation, and digital trade at high-level convenings such as the U.S.-Africa Business Summit (Mozambique), World Export Development Forum (Ethiopia), Africa Fintech Summit (Ethiopia), and DHL eCommerce Conference (Ghana). Through the U.S. Department of State’s U.S. Speaker Program, she has led workshops for the Academy of Women Entrepreneurs (AWE) and provided training in Uganda, Kenya, Rwanda, Zimbabwe, Kuwait, & South Africa, helping thousands of entrepreneurs navigate people, policies, & processes in global business.

      She is the co-founder of The Virtual Global Consultant (VGC) Group, a global IT consultancy that helps businesses leverage digital tools to access new revenue and value-producing opportunities. Under her leadership, VGC has generated millions in digital sales and at-will donations for entrepreneurs and organizations, particularly across the U.S. and Africa.

      During the COVID-19 pandemic, she and her husband launched The Mushroom Angel Company, a tech-forward consumer-packaged goods (CPG) food manufacturer based in Detroit. Their flagship product, Mushroom Burgers, is now available in over 100 retail locations across the Midwest. 

      Da’Cruz’s influence extends into policy and advisory roles. She was appointed by the U.S. Secretary of Commerce to serve on the District Export Council for Eastern Michigan and elected as an At-Large Board Member for its national association. She was also appointed by the U.S. Secretary of Agriculture to the Agricultural Technical Advisory Committee for Trade in Processed Foods, and selected as a Next Gen Global Leader with the U.S. Global Leadership Coalition, where she continues to shape foreign policy conversations around trade, food, and technology.

      A proud Ghanaian-American, wife, and mother of three, Da’Cruz resides in Detroit, Michigan. She is a member of Delta Sigma Theta Sorority, Inc., and a lecturer at the University of Michigan - Dearborn.
    `,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/wedacruz/',
    url: ['https://thevgcgroup.com/', 'https://thedigitaldiplomat.com/home'],
    organization: 'The Virtual Global Consultant Group',
    position: 'Cofounder',
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
    isWTM: true,
    isGDE: false,
  },
  {
    id: 10,
    name: 'Jeseekia Vaughn',
    email: null,
    avatar: JeseekiaVaughn,
    bio: null,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/jeseekiavaughn/',
    url: null,
    organization: 'Detroit Black Tech and TechTown Detroit',
    position: 'Tech Strategist',
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
    isWTM: true,
    isGDE: false,
  },
  // For future reference, Stephanie Frantz does not want her email listed
  {
    id: 11,
    name: 'Stephanie Frantz',
    email: null,
    avatar: StephanieFrantz,
    bio: `
      Stephanie Frantz, a Lead DevOps Engineer at Cengage Group, combines a 'dreamer's' vision with a 'creator's' drive. As a neighborhood friendly DevOps engineer who hangs out in security spaces, she brings a unique blend of development operations and security awareness to cloud infrastructure. Specializing in containerization and pipeline automation, she crafts robust and scalable cloud solutions, working closely with developers to ensure seamless deployments. She is passionate about leveraging technology to build efficient and impactful systems, and strives to make the cloud a safer place, one container at a time.
    `,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/stephanielage/',
    url: 'https://www.stephaniefrantz.com/',
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
    isWTM: true,
    isGDE: false,
    mastodon: 'https://defcon.social/@handsomezebra',
  },
  {
    id: 12,
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
    isWTM: true,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 13,
    name: 'JC Escalante',
    email: 'jcskalant@gmail.com',
    avatar: JC_Escalante,
    bio: `
      Hi, I'm JC. For over 20 years, my focus has been translating deep technical vision into tangible business value and guiding products from concept to launch.
      
      As a hands-on leader, I work with globally distributed, cross-functional teams to drive enterprise AI strategy, helping users in the insights industry achieve their full potential with AI. I'm also a Google Developer Expert, and I love getting into the weeds, whether it's building on Google Cloud or coding a new RAG pipeline.

      I earned my MBA from MIT, and I'm passionate about sharing what I've learned about building scalable and responsible AI with the developer community.
    `,
    twitter: 'jcskalant',
    linkedIn: 'https://www.linkedin.com/in/jcskalant/',
    url: null,
    organization: 'Ipsos',
    position: 'President of Artificial Intelligence',
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
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 14,
    name: 'Alex Patterson',
    email: 'alex@codingcat.dev',
    avatar: AlexPatterson,
    bio: `
      Alex has over a decade of development experience within Enterprise.  Founder of CodingCatDev, a community for Web development, podcasts, and courses. He specializes in Firebase Web development in and React (Next.js).
    `,
    twitter: 'codingcatdev',
    linkedIn: 'https://www.linkedin.com/in/codercatdev/',
    url: 'https://codingcat.dev',
    organization: 'CodingCatDev',
    position: null,
    session: {
      title:
        'Building Your First AI Tool Server with Firebase Auth & Cloud Functions',
      abstract: `
        Connect your app to AI securely. In this session, I'll show you how to build a serverless "tool server" with Firebase Auth & Cloud Functions. You'll learn how to let LLMs and AI agents safely call your app's functions through a secure API, complete with a live demo.
      `,
      description: `
        The rise of Large Language Models and AI agents has created a massive opportunity for developers to make their applications smarter and more integrated. But how can we securely expose our app's core functions—like fetching user data or posting a message—to these external services? The answer lies in building a dedicated "tool server," and this session will show you exactly how to do it, step-by-step.
        This talk provides a practical, hands-on guide to building a secure, serverless tool server using the powerhouse combination of Firebase Authentication and Google Cloud Functions. We will start from a blank canvas and architect a simple, yet robust, API that allows authenticated clients to execute predefined functions.
        Attendees will leave with actionable knowledge and the confidence to:
        Structure a simple Machine-to-Machine Communication (MCP) API from scratch.
        Implement a bulletproof authentication layer using Firebase Auth ID tokens to protect their endpoints.
        Write, deploy, and manage a scalable "tool" using a Google Cloud Function.
        Understand the token validation flow required for any external service to securely interact with their backend.
        The session will culminate in a live demo where we will call our newly built, secure tool from an external client, showcasing a complete, end-to-end workflow. Join this session to learn how to unlock your application's potential in the new era of connected intelligence.
      `,
      tags: ['AI', 'Firebase', 'Google Cloud'],
      track: 'Build with AI',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 15,
    name: 'Boris-Wilfried Nyasse',
    email: 'risbonyasse@gmail.com',
    avatar: BorisWilfriedNyasse,
    bio: `
      Passionate Developer & Google Developer Expert
      I enjoy my journey to ensure that the engineering trains run on time by creating an ideal environment for passionate people.
      My goal is just to inspire others to continuously improve and raise their standards at all levels of the team.
    `,
    twitter: 'bwnyasse',
    linkedIn: 'https://www.linkedin.com/in/bwnyasse/',
    url: 'https://bwnyasse.net/',
    organization: null,
    position: 'Google Developer Expert',
    session: {
      title:
        'Building the Chain of Trust: A Google ADK Blueprint for Grounded Legal AI Agents',
      abstract: `
        Transform unreliable AI into trustworthy legal assistants. Learn to build a "Chain of Trust" using Google ADK + Vertex AI Search + Cloud Run + Flutter to eliminate hallucinations and prove every AI claim with verifiable sources.
      `,
      description: `
        Legal AI demands zero tolerance for hallucinations. When legal professionals rely on an AI assistant for document analysis, "creative" answers aren't innovative—they're liability risks waiting to happen. How do you transform a Gemini model from an eloquent improviser into a rigorous legal expert? How do you build an AI system that doesn't just cite sources, but *proves* every claim with verifiable documentation?

        This session reveals the architecture of a "Chain of Trust"—a production-tested pipeline for building AI agents that earn credibility through verification. Drawing from a real-world legal assistant project, we'll trace the complete journey of a fact-checked response, from document ingestion to the final Flutter interface.

        **You will learn how to:**

        - **Engineer a grounded agent with Google ADK**, constraining a Gemini model to reason exclusively over your private legal corpus using Vertex AI Search, eliminating hallucinations at the source
        - **Architect a hybrid AI backend** that orchestrates lightweight Cloud Functions for rapid document classification alongside a powerful Cloud Run agent for complex multi-step legal analysis
        - **Build a critical Python validation pipeline** that acts as an automated fact-checker, mapping AI outputs to canonical sources in Firestore and providing an audit trail for every claim
        - **Design a trust-first Flutter UI** that uses reactive services to asynchronously enrich responses with source verification, ensuring users see proof alongside every answer
        - **Orchestrate bulletproof data flows** across Firestore and Cloud Storage that maintain data integrity throughout the entire pipeline

        This isn't academic theory—it's a battle-tested playbook from the legal domain. Walk away with the architectural blueprint and practical knowledge to build AI applications that don't just answer questions, but earn institutional trust through verifiable proof.

        **Key Takeaways:**

        - Production-ready architecture for grounded AI agents using Google ADK

        - Hybrid backend patterns for AI workloads (Cloud Functions vs Cloud Run)

        - Validation pipelines that eliminate hallucinations through source verification

        - Trust-first UI patterns that display proof alongside AI responses

        - Real-world lessons from high-stakes AI deployment in legal domain
      `,
      tags: [
        'AI',
        'Machine Learning',
        'Google Cloud',
        'Flutter',
        'Vertex AI',
        'Google ADK',
        'Legal Tech',
        'Grounding',
        'Production AI',
      ],
      track: 'Build with AI',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 16,
    name: 'Adonai Vera',
    email: 'adonai.vera@gmail.com',
    avatar: AdonaiVera,
    bio: `
      I'm Adonaí Vera, a Machine Learning Engineer with VIII years of expertise. Specialized in computer vision models and machine learning algorithms using TensorFlow, Docker, OpenCV, and more.

      Career journey: Software Developer ➡️AI Developer ➡️ AI Leader ➡️ CTO. My diverse roles have sharpened my skills in creating customer-focused AI products. 

      Proudly one of Google's top 10 TensorFlow certified Developers in Colombia.  Author of “Curso Profesional de Redes neuronales con TensorFlow” & “Curso Profesional de computer vision con TensorFlow” at Platzi. Winner of Covid19 Hackathon & Innovate2019 with Ecopetrol Colombia. 

      Passionate about contributing to open-source projects like FiftyOne, Keras, and Supervision. 🤖 Constantly learning and growing in the ever-evolving field of AI and Machine Learning.
    `,
    twitter: 'AdonaiVera19',
    linkedIn: null,
    url: 'https://www.adonaivera.com/',
    organization: 'Voxel51',
    position: 'Machine Learning and DevRel',
    session: {
      title:
        'From Data Gaps to Data Gold: Boosting Computer Vision with Nano Banana (Gemini) + FiftyOne',
      abstract: `
        Most autonomous vehicle failures happen on rare edge cases like night, rain, glare, unusual viewpoints. In this session, we’ll build an end-to-end vision pipeline: audit datasets with FiftyOne, generate missing cases using Gemini “Nano Banana”, retrain models and evaluate safety on edge cases.
      `,
      description: `
        Most autonomous vehicle failures don’t happen on the common cases, they happen on the rare ones:
        a pedestrian crossing in heavy rain, a cyclist at night under glare, or an object half-hidden at the edge of the frame.
        These are exactly the scenarios datasets miss and models struggle with.

        In this talk, we’ll explore how to close that gap by combining **FiftyOne**, the open-source dataset curation tool, with **Gemini “Nano Banana”**, Google’s synthetic image generator. You’ll see how to:

        - Audit and explore your dataset to uncover blind spots  
        - Identify the edge cases that put safety at risk  
        - Generate realistic, high-quality synthetic images to fill those gaps  
        - Retrain and validate models to track measurable improvements on tough scenarios

        This is a practical, hands-on session focused on building a **vision pipeline that turns data weaknesses into strengths**. Expect real examples from autonomous vehicle datasets, code you can reuse, and lessons learned from applying this workflow in the field.

        By the end, you’ll leave with a new toolkit for creating **smarter, safer computer vision systems, without waiting weeks to collect data.**
      `,
      tags: [
        'Computer Vision',
        'Machine Learning',
        'AI',
        'Synthetic Data',
        'Gemini',
        'Nano Banana',
        'FiftyOne',
        'Autonomous Vehicles',
        'Dataset Curation',
        'Edge Cases',
      ],
      track: 'Build with AI',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 17,
    name: 'Stephen Wylie',
    email: 't3h.stevo@gmail.com',
    avatar: StephenWylie,
    bio: `
      Stephen is a Google Developer Expert in Machine Learning who has found himself taking on some very interesting projects over the years, owing to a bit of creativity and entrepreneurial spirit. Having worked on all sorts of hardware from tiny 8-bit microcontrollers to big-iron blade servers for enterprises, and in age from PDP-11 clones to cloud-based GPU instances, he has co-authored over 110 granted US patents in the realm of AR/VR, AI/ML, IoT, and blockchain. He enjoys speaking on topics such as machine learning, cloud-native applications, hardware hacking old computers and video game systems, or whatever other tech topic he can make slides on in due time. When it’s time to de-stress, Stephen can be found tending to his collection of vintage computers and pinball machines or watching classic television game shows.
    `,
    twitter: 'SWebCEO',
    linkedIn: 'https://www.linkedin.com/in/stephen-wylie-009a631b/',
    url: 'https://goshtastic.blogspot.com/',
    organization: 'OpenBrite, LLC',
    position: null,
    session: {
      title: 'The Universal Adapter: Building and Scaling MCP Servers',
      abstract: `
        Go beyond REST. Learn to build secure, scalable MCP (Model Context Protocol) servers that give AI agents and applications real-time access to your tools and data. From protocol design to enterprise-grade security, it's time to join the agentic revolution.
      `,
      description: `
        ## Abstract

        Giving AI agents access to real-world tools is powerful, but how do you do it safely and at scale? Model Context Protocol (MCP) provides a standard, but building a robust server is key. Learn how to build and deploy MCP servers, integrate them with clients, and address the critical challenges of security, data governance, and scalability.

        ## Specifics

        First, we will cover the foundational components of the MCP client-server architecture, defining a clear contract between server and client based on a minimal MCP server in Python with FastAPI and/or Google's ADK. You will see how a client connects, discovers these capabilities, and invokes them, forming the core of agentic interaction.

        It is fun enough to build a local MCP server, but it is exciting to deploy one that runs remotely. In addition, we will explore communication patterns that unlock more sophisticated, real-time interactions, such as Server-Sent Events (SSE) or WebSockets for bidirectional communication, allowing servers to push updates to clients within dynamic applications like live dashboards or collaborative tools.

        Finally, we touch on the critical concerns around deploying your MCP server to a production-ready service. This includes:

        * Security: essential protections like Transport Layer Security (TLS) and OAuth 2.1
        * Data governance strategies: how to limit AI agents to specific data they are permitted to, while creating an auditable and compliant system
        * Scalability: how to handle thousands of concurrent clients efficiently and with resilience by using containerized MCP services

        ## Audience

        This session is designed for developers and platform engineers looking to explore the world of MCP and agentic workflows. It is not an exhaustive guide to every feature of the MCP specification but serves as a practical introduction to building servers that can prove the value of agentic AI. As attendees explore their own use cases, they should continue to ask questions about security, safety, and scalability using the knowledge presented here as a framework to guide the discussion.
      `,
      tags: [],
      track: 'Build with AI',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 18,
    name: 'Joel Vasallo',
    email: 'joelvasallo@gmail.com',
    avatar: JoelVasallo,
    bio: `
      Joel is the Senior Director of Platform Engineering at TAG - The Aspen Group where he leads teams focused on DevOps, SRE, and Delivery Engineering. Together, these teams aim to build and architect highly available cloud environments, develop infrastructure and development tools, and empower developers through fully automated deployment pipelines. In his spare time, he runs monthly meetups in Chicago through the Google Developers program. When he isn’t working, he loves exploring Sweet Home Chicago!
    `,
    twitter: 'justjoelv',
    linkedIn: 'https://www.linkedin.com/in/joelvasallo/',
    url: 'https://joelvasallo.com',
    organization: 'TAG - The Aspen Group',
    position: 'Senior Director of Platform Engineering',
    session: {
      title: 'Practical AI: Within SRE, Delivery and Cloud Engineering',
      abstract: `
        I gave this talk to students, and with a little bit more work, I can probably deliver this for the general audience around industry professionals!
      `,
      description: `
        While AI conversations often center on data science and machine learning teams, the reality is that SRE, delivery, and cloud engineering teams are sitting on a goldmine of opportunities to leverage AI in their daily workflows—no ML expertise required. This talk bridges the gap between AI hype and practical implementation, demonstrating how infrastructure and operations teams can harness AI tools today to eliminate toil, accelerate incident response, and optimize cloud operations.

        Through real-world examples and live demonstrations, we'll explore creative applications of AI that go beyond basic chatbot assistance: using LLMs for intelligent runbook generation and execution, implementing AI-powered log analysis that actually reduces MTTR, automating post-mortem creation with context-aware insights, and leveraging AI for capacity planning and cost optimization.

        We'll also address common pitfalls, security considerations, and how to measure the actual impact of AI adoption in operations. Whether you're skeptical about AI or eager to adopt it, this session provides a pragmatic roadmap for enhancing your engineering effectiveness without waiting for your organization's official AI strategy.
      `,
      tags: ['AI', 'SRE', 'DevOps', 'Platform Engineering', 'Delivery'],
      track: 'Build with AI',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: true,
    mastodon: null,
  },
  {
    id: 19,
    name: 'David Giard',
    email: 'davidjgiard@yahoo.com',
    avatar: DavidGiard,
    bio: `
      David Giard is a former accountant and a former biochemist, who has been developing solutions using Microsoft technologies for over three decades. Currently, David helps people design and build solutions in his role as a Partner Solution Architect at Microsoft. David has been very active in the developer community, speaking at numerous major conferences, code camps, and user groups around the world; helping to lead user groups; and helping to organize conferences and other geek events. He is the host and producer of the mildly popular online TV shows Technology and Friends and GCast. He is the co-author of the Wrox book Real World .NET, C#, and Silverlight. You can read his latest thoughts at DavidGiard.com. His hobbies include video, photography, sports, and embarrassing his sons.
    `,
    twitter: 'davidgiard',
    linkedIn: 'https://www.linkedin.com/in/davidgiard/',
    url: 'https://davidgiard.com/',
    organization: 'Microsoft',
    position: 'Partner Solution Architect',
    session: {
      title: 'Blood, Sweat, & Code Reviews',
      abstract:
        'In this session, I will discuss the importance of Code Reviews and show some ways you can make your code reviews more productive, enjoyable, and successful.',
      description: `
        Code Reviews can sometimes be painful and time-consuming, but they are an important part of delivering quality software. A Code Review provides an opportunity to share knowledge, improve code and catch potential problems before they go to production. This can be a positive experience or a negative experience.

        In this session, I will discuss the importance of Code Reviews and show some ways you can make your code reviews more productive, enjoyable, and successful.
      `,
      tags: ['Code Reviews', 'ALM', 'DevOps', 'Pull Requests'],
      track: 'Level Up',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 20,
    name: 'Jay Whitsitt',
    email: 'jay.whitsitt@gmail.com',
    avatar: JayWhitsitt,
    bio: `
      Jay Whitsitt is an experienced mobile app developer with a passion for crafting user-centric experiences across platforms for users wherever they are. Since starting a career as a native iOS developer, he has released both personal and professional apps for iOS, Android, Wear OS, Google Assistant, and the web, leveraging both native and multiplatform tools like Flutter.

      Jay is also a community leader, co-organizing GDG Kansas City and DevFest KC, connecting developers with the latest in and around Googletechnologies.
    `,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/davidgiard/',
    url: 'https://jaywhitsitt.com',
    organization: 'Commerce Bank',
    position: null,
    session: {
      title: 'Iterating on Applications from a Browser with Firebase Studio',
      abstract:
        'You just realized you forgot a semicolon or maybe you want to change that one word in your app. Normally you would have to open your computer, sign in, launch your IDE, make the change, then push to your repo. Is there a better way? Introducing Firebase Studio!',
      description: `
        You just realized you forgot a semicolon or maybe you want to change that one word in your app. Normally you would have to open your computer, sign in, launch your IDE, make the change, then push to your repo. Is there a better way?

        Absolutely! Google released IDX which has now become Firebase Studio and it has been a game charger for the times when you don't need a full dev machine, and sometimes even when you do. Join this session to see how to quickly make changes to an application from just your browser, even your phone!
      `,
      tags: ['Firebase', 'AI', 'coding assistant'],
      track: 'Build with AI',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 21,
    name: 'Nilesh Patel',
    email: 'patelnilesh@google.com',
    avatar: NileshPatel,
    bio: `
      Nilesh Patel has been at Google since 2019. He is an Engineer Specialist, focusing on Infrastructure modernization and conversational AI. He has helped many businesses develop AI-powered bots at an enterprise scale and transform their contact center with AI capabilities.\nNilesh  has worn different hats in the past 24+ years. He began his career as an developer and transitioned into a cloud architect role helping enterprises with their digital transformation journey. He is  passionate about using technologies to solve the business challenges to drive outcomes for the customers. Most importantly, Nilesh loves telling stories based on his recent experience and sharing his excitement about new technologies with other devs.\nBesides his work at Google, he enjoys spending time traveling with his family and participating in local cultural dance events.
    `,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/nilesh-patel/',
    url: null,
    organization: 'Google',
    position: 'Customer Engineer Specialist',
    session: {
      title: 'The Agentic Shift - From Prompt to Action',
      abstract: `Welcome to The Agentic Shift—the evolution of AI from passive tools into active partners. In this new reality, we move From Prompt to Action, creating systems that don't just answer questions, but get things done. This session is your practical guide to building Agentic AI with Google's powerful agentic platform and Google Cloud's latest GenAI ecosystem. We will demystify what makes an AI Agent truly “agentic”—its ability to reason, use tools, and work autonomously to help users. Through a live, hands-on demonstration, you will learn how to construct a smart agent from the ground up, proving that you have the power to build the next generation of AI.`,
      description: `Welcome to The Agentic Shift—the evolution of AI from passive tools into active partners. In this new reality, we move From Prompt to Action, creating systems that don't just answer questions, but get things done. This session is your practical guide to building Agentic AI with Google's powerful agentic platform and Google Cloud's latest GenAI ecosystem. We will demystify what makes an AI Agent truly “agentic”—its ability to reason, use tools, and work autonomously to help users. Through a live, hands-on demonstration, you will learn how to construct a smart agent from the ground up, proving that you have the power to build the next generation of AI.`,
      tags: [
        'AI',
        'Machine Learning',
        'Google',
        'Google Cloud',
        'Generative AI',
      ],
      track: 'Level Up',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 22,
    name: 'Hoda Solati',
    email: null,
    avatar: HodaSolati,
    bio: `
      Hoda Solati is an award-winning UX designer working at BraunAbility blending creativity, technology, and innovation to craft inclusive, user-centered experiences. With advanced degrees in UX Design and Animation, she explores cutting-edge technologies such as VR, AR, and robotics to solve complex design challenges. Recognized at global events including DDX’25 NYC, IEEE Smart Mobility, and Ars Electronica, Hoda is passionate about redefining the future of user experience through innovation and accessibility.
    `,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/hoda-solati',
    url: null,
    organization: 'BraunAbility',
    position: 'UX Designer',
    session: {
      title:
        'Experience Innovation: Designing for Engagement in Immersive Environments',
      abstract: null,
      description: `Design is no longer just about aesthetics or usability, it’s about crafting memorable and meaningful experiences. As immersive technologies like AR and VR evolve, designers are challenged to think beyond screens and start shaping how people feel within digital spaces. This session introduces the concept of Experience Innovation, a mindset that blends creativity, empathy, and strategy to design experiences that are not only functional but emotionally engaging and deeply human. \n\nWe’ll explore the core principles of experience innovation and how they can transform the way we design for immersive environments. Attendees will learn how to use these principles to create interactions that feel natural, intuitive, and inspiring, while balancing novelty with user comfort.`,
      tags: ['Design', 'User Experience', 'User Interface', 'AR', 'VR'],
      track: 'Tech+Design',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 23,
    name: 'Shima Solati',
    email: null,
    avatar: ShimaSolati,
    bio: `
      Shima Solati is an award-winning UX/UI designer and researcher at BraunAbility, leading efforts to advance mobility and accessibility through innovative, user-centered design. With a Master’s in User Experience Design from the College for Creative Studies and dual degrees in fashion and textiles, Shima brings a rare multidisciplinary perspective to solving complex challenges. Her expertise spans immersive and assistive technologies, VR, AR, robotics, and her portfolio includes impactful work for KUKA Robotics, the Augmented Reality Center, General Motors, and Ford. Passionate about inclusive design and emerging technologies, Shima is dedicated to creating intuitive solutions that empower all users.
    `,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/shima-solati/',
    url: null,
    organization: 'BraunAbility',
    position: 'UX/UI Designer and Researcher',
    session: {
      title:
        'Designing for the Mind: Bridging Human Experience and Emerging Technologies',
      abstract: null,
      description: `The boundary between the physical and digital worlds is fading, AI and immersive environments are transforming how people interact, learn, and connect. Yet, when these systems overlook human experience, even the most advanced technologies can feel distant or uncomfortable. Building on the principles of Experience Innovation, this session explores how UX design can bridge the gap between human behavior and emerging technologies. The focus is on creating experiences that prioritize comfort, emotional resonance, and intuitive interaction, ensuring that technology adapts to people, not the other way around. Through examples and design insights, we’ll look at how to use AI and human-centered design principles to make immersive systems more adaptive, personalized, and emotionally intelligent.`,
      tags: ['Design', 'User Experience', 'User Interface'],

      track: 'Tech+Design',
      time: '',
      room: '',
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
]
