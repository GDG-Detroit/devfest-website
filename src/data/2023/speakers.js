import AliElSharif from '@/assets/images/speakers/Ali El-Sharif.webp'
import AaronKaump from '@/assets/images/speakers/Aaron Kaump.jpg'
import AdamKaump from '@/assets/images/speakers/Adam Kaump.jpg'
import AlexRiviere from '@/assets/images/speakers/Alex Riviere.jpg'
import AllenFirstenberg from '@/assets/images/speakers/Allen Firstenberg.jpg'
import AmitRathi from '@/assets/images/speakers/Amit Rathi.jpg'
import BandhanKaur from '@/assets/images/speakers/Bandhan Kaur.jpg'
import BenJacques from '@/assets/images/speakers/Ben Jacques.jpg'
import BlakeLapum from '@/assets/images/speakers/Blake Lapum.png'
import BrianMcKeiver from '@/assets/images/speakers/BrianMcKeiver.png'
import CeclynnFielderSherrer from '@/assets/images/speakers/Ceclynn FielderSherrer.jpg'
import ChadHamdan from '@/assets/images/speakers/Chad Hamdan.jpg'
import ChrisDemars from '@/assets/images/speakers/Chris Demars.jpg'
import ChrisTurvey from '@/assets/images/speakers/Chris Turvey.jpg'
import DanSchnau from '@/assets/images/speakers/Dan Schnau.png'
import DanielHope from '@/assets/images/speakers/Daniel Hope.jpg'
import DonWard from '@/assets/images/speakers/Don Ward.png'
import EricaOlson from '@/assets/images/speakers/Erica Olson.png'
import GregMiller from '@/assets/images/speakers/Greg Miller.jpg'
import JennaRitten from '@/assets/images/speakers/Jenna Ritten.png'
import JuliaSuzuki from '@/assets/images/speakers/Julia Suzuki.png'
import KeithBourne from '@/assets/images/speakers/Keith Bourne.jpg'
import KeithKurak from '@/assets/images/speakers/Keith Kurak.jpg'
import MadonaWambua from '@/assets/images/speakers/Madona Wambua.png'
import MikeNimer from '@/assets/images/speakers/Mike Nimer.jpg'
import NavSingh from '@/assets/images/speakers/Nav Singh.png'
import NileshPatel from '@/assets/images/speakers/Nilesh Patel.jpg'
import PavelRyabov from '@/assets/images/speakers/Pavel Ryabov.jpg'
import RahulNethi from '@/assets/images/speakers/Rahul Nethi.webp'
import VikramTiwari from '@/assets/images/speakers/Vikram Tiwari.jpg'
import VyasBhuman from '@/assets/images/speakers/Vyas Bhuman.jpg'

export const SpeakersData = [
  {
    id: 1,
    name: 'Madona S. Wambua',
    email: 'madona.wambua@jibulabs.com',
    avatar: MadonaWambua,
    bio: 'Madona is the Founder & CTO of Jibu Labs, an Author, Keynote Speaker, Senior Android Engineer, and Google Developer Expert for Android with over years of experience building Android Applications. She is also a Women Tech Maker Ambassador, a host of Tech Talks with Madona, and a developer who enjoys sharing her Android knowledge and teaching others how to make Android applications.',
    twitter: 'madona_wambua',
    url: 'https://madonasyombua.com/',
    organization: 'Jibu Labs',
    position: 'Founder & CTO',
    session: {
      title:
        'Simplified App Navigation with Android Jetpack Compose Navigation',
      abstract:
        "Revolutionize Android app development with simplified navigation! Embrace modern best practices and make developers' lives easier. Join me and master the art of Navigation in the new Modern Android World.",
      description:
        "Android Jetpack Compose has revolutionized the way we build user interfaces in Android apps, and its integration with navigation components offers a modern and streamlined approach to app navigation. In this talk, Madona will explore the power and simplicity of Android Jetpack Compose Navigation.\n\nShe'll cover topics such as creating navigation graphs, handling deep linking, passing data between screens, and implementing complex navigation flows, all within the Jetpack Compose framework. Whether you’re a beginner looking to get started with Compose navigation or an experienced developer seeking best practices and advanced tips, this session will provide insights and techniques to enhance your app's navigation experience using the latest Android technologies.\n\nJoin Madona, and let's explore Modern Android Navigation with Jetpack Compose together.",
      tags: [
        'Android',
        'Jetpack Compose Navigation',
        'Modern Android Development',
      ],
      track: 'Mobile',
      time: '09:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 2,
    name: 'Brian McKeiver',
    email: 'bmckeiver@bizstream.com',
    avatar: BrianMcKeiver,
    bio: 'Brian McKeiver is Co-Owner at BizStream, a digital agency in Allendale, MI. At BizStream he is a solution architect, visionary, Microsoft Azure MVP, Kontent.ai MVP, and Kentico MVP. He has 21 years of experience leading his agency of more than 35 employees, about a hundred clients spread out across North America, and one heck of an interesting story of how it all started from a two-person team. In addition to his expertise in web development, cloud, integration, and digital marketing, Brian is active with the tech community via his blog at Mcbeev.com and podcast Kontent Rocks.',
    twitter: 'mcbeev',
    url: 'http://www.mcbeev.com',
    organization: 'BizStream',
    position: 'Co-Owner',
    session: {
      title: 'State-of-the-art Search with Azure AI Cognitive Search',
      abstract:
        'Join the session to see how you can leverage Azure AI Cognitive Services with Azure Search in your apps. With the newly minted semantic search and OpenAI abilities, this technology can provide results more accurately than ever.',
      description:
        'We all know that providing a good search experience for website visitors is hard. Everyone expects it to “just” work like Bing or Amazon. Maybe there is a better way, maybe we fix this with a little help from some AI or even our new friend Chat GPT.\n\nJoin the session to see how you can leverage Cognitive Services with Azure Cognitive Search in your apps. With the newly minted semantic search and OpenAI abilities this technology can provide results that are semantically closer to the intent of original query.\n\nYou can expect to walk away knowing how to generate your own power search experience that leverages the power of AI to solve your search woes.',
      tags: ['azure', 'search', 'web', 'webapps'],
      track: 'AI/ML',
      time: '10:30',
      room: 'Pizza Treat',
    },
  },

  {
    id: 3,
    name: 'Erica Olson',
    email: 'ejo.erica@gmail.com',
    avatar: EricaOlson,
    bio: 'Erica Olson is a Lead UX Designer with a specialization in experience design and user research, and a unique perspective gained from her background in video production. Her passion lies in connecting with audiences and users, uncovering their needs and desires through research, and crafting intuitive experiences that leave a lasting impact.',
    twitter: '',
    url: 'https://www.linkedin.com/in/ericajolson',
    organization: 'Little Caesars',
    position: 'Lead UX Designer',
    session: {
      title:
        'Thriving in Constraints: AI-Infused UX Strategies for Tight Timelines, Scarce Resources, and Modest Budgets',
      abstract:
        'For students, career-shifters, and developers: Learn to excel in UX, even with tight timelines, limited resources, and modest budgets. Explore AI-Infused strategies for success in this talk!',
      description:
        "In this talk, dive into the world of UX transformation with a speaker who's been there, done that, and led the way. From starting as a lone UX designer at Little Caesars to leading an award-winning UX team, Erica Olson brings invaluable insights and experiences to the podium.\n\nDiscover the secrets to thriving in the face of constraints, whether you're a student, career-shifter, or developer aspiring to excel in UX. With a background that spans the entire spectrum of UX evolution, Erica is the ideal guide to show you how AI-infused strategies can turn limitations into opportunities.\n\nJoin us and learn how to elevate your UX game, leverage AI as your ally, and create remarkable user experiences, all while staying within tight timelines, making the most of limited resources, and managing modest budgets. Don't miss this chance to gain a competitive edge from someone who's not just talking about success but has lived it, from solo designer to award-winning team leader. This is your opportunity to take your UX knowledge to new heights!",
      tags: ['UX', 'AI', 'ChatGPT'],
      track: 'Miscellaneous',
      time: '09:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 4,
    name: 'Dan Schnau',
    email: 'dsschnau@gmail.com',
    avatar: DanSchnau,
    bio: 'Dan Schnau has been writing code since 2011. Living in Metro Detroit, he loves board games, hockey, and solving problems with software.',
    twitter: 'danschnau',
    url: 'https://danschnau.com/',
    organization: 'Software Consultant',
    position: '',
    session: {
      title: 'Getting started with Blazor',
      abstract:
        'Blazor is a new technology from Microsoft that allows developers to write native .NET code that runs in both the server and the browser thanks to WebAssembly. If you are interested in leveraging your existing skills with .NET to build single-page applications, Blazor is the technology to learn.',
      description:
        'Blazor is a new technology from Microsoft that allows developers to write native .NET code that runs in both the server and the browser thanks to WebAssembly.\n\nIf you are interested in leveraging your existing skills with .NET to build single-page applications, Blazor is the technology to learn.',
      tags: ['Blazor', 'C#', 'WebAssembly', 'ASP.NET'],
      track: 'Fullstack',
      time: '03:30',
      room: 'Pizza Pizza',
    },
  },

  {
    id: 5,
    name: 'Don Ward',
    email: 'donward@google.com',
    avatar: DonWard,
    bio: '',
    twitter: '',
    url: '',
    organization: 'Google',
    position: 'Customer Engineer Specialist',
    session: {
      title: 'Lead Your Local Tech Community, Gain the Edge in your Career',
      abstract:
        "Have you ever had an interview where you knew the hiring team beforehand? How about when interviewing with a company that you have never 'formally' done business with?\n\nLeading a local tech community is the 'secret' to establishing this type of reputation and making these rare connections.",
      description:
        "Have you ever had an interview where you knew the hiring team beforehand? Additionally they knew your work ethic and had seen evidence of it before the interview? How about when interviewing with a company that you have never 'formally' done business with?\n\nLeading a local tech community is the 'secret' to establishing this type of reputation and making these rare connections. In addition, leading and giving back to your community just feels good.\n\nIn this talk, we'll discuss specific ways that leading a local tech community can give you a career edge in the hyper-competitive tech business. We'll also share case studies of developers who have used their community involvement to advance their careers.\n\nWhether you're a new developer or a seasoned professional, this talk will give you the tools you need to start leading your local tech community and gaining a competitive advantage in your career.",
      tags: [],
      track: 'Miscellaneous',
      time: '10:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 6,
    name: 'Vikram Tiwari',
    email: 'vikramtheone1@gmail.com',
    avatar: VikramTiwari,
    bio: 'Vikram Tiwari is Co-founder, tech at Omni Labs where they are building the future of work and automation. He focuses on the cloud and machine learning aspects of technology. Vikram focuses on finding novel solutions to tough problems because he believes there is always a way! Vikram enjoys public speaking and helping individuals and startups when he is not actively writing code.',
    twitter: 'Vikram_Tiwari',
    url: 'https://vikramtiwari.com',
    organization: 'Omni Labs, Inc.',
    position: 'Google Developer Expert For Cloud And ML',
    session: {
      title: 'Build Your Own GenAI Model',
      abstract:
        'In this talk, we will discuss the basics of generative AI and how to build your own GenAI model.',
      description:
        'In this talk, we will discuss the basics of generative AI and how to build your own GenAI model. We will cover the following topics:\n\n\u2022 What is generative AI?\n\u2022 How do GenAI models work?\n\u2022 The different types of GenAI models\n\u2022 How to build a GenAI model\n\u2022 How to deploy a GenAI model\n\nI will also provide hands-on examples of how to build GenAI models using open-source tools.',
      tags: ['machine learning', 'tensorflow', 'google cloud'],
      track: 'AI/ML',
      time: '03:30',
      room: 'Pizza Treat',
    },
  },
  {
    id: 7,
    name: 'Bandhan Kaur',
    email: 'kaur@bandhan.dev',
    avatar: BandhanKaur,
    bio: "Bandhan (pronounced bun-done) is a back-end software engineer, Google Women Tech Makers Ambassador, Change Collective's inaugural cohort member, diversity advocate with DEI Committee for her university's college of engineering, City Lead Coordinator for Venture For America Detroit, and an ex-volunteer AP computer science teacher for Microsoft TEALS. Bandhan has been coding for the last 10 years, loves building code using several languages and learning new tech while sharing her code processes via Medium articles. Growing up as a woman of color studying computer science, her aim is to break barriers on women in STEM through the new web design program for 8th grade brown and brown girls in Detroit Public Schools.",
    twitter: '',
    url: 'https://www.linkedin.com/in/bandhanpreet-kaur/',
    organization: 'Google Women Tech Makers Ambassador & Excelerate America',
    position: '',
    session: {
      title: 'Firebase Talk: Advanced queries and Authentication',
      abstract:
        "Learn to harness the power of real-time data retrieval with authentication processes. Discover the art of crafting efficient queries and ensuring secure user interactions. Elevate your app's back-end development and create dynamic, user-friendly experiences. Let's dive deep into Firebase's core.",
      description:
        "Join me for an insightful presentation on Firebase Queries and Authentication! In this session, we'll dive deep into Firebase, exploring the art of data retrieval from the database. Using a real-world example website, we'll walk through user queries, search queries with filters such as categories, prices, and city, and even delve into querying by ratings. But that's not all! Authentication is a crucial aspect of app development, and we'll cover it comprehensively. Learn about the power of anonymous authentication, password authentication, and email link authentication. Discover how to implement multi-factor authentication for enhanced security. Whether you're a beginner looking to master Firebase basics or an experienced developer seeking to optimize queries and fortify your app's security, this presentation has something for everyone. Join us for a knowledge-packed session that will elevate your Firebase skills and transform your app development game!",
      tags: ['Firebase', 'Google Cloud Platform'],
      track: 'Fullstack',
      time: '11:30',
      room: 'Pizza Pizza',
    },
  },
  {
    id: 8,
    name: 'Daniel Hope',
    email: 'm0b1us0099@gmail.com',
    avatar: DanielHope,
    bio: 'I started as an adult who had just aged out of foster care, and all of my support people insisted that I was doomed to being forever dependent on others. Living on disability was their plan for my life. I refused to forfeit my future.\n\nAfter meeting a friend in vocational rehabilitation services, and her helping me get out on my own, I immediately turned to technology for assistance in any way that I could. As technology developed and more things became available, I was constantly on the lookout for the next way to be more independent, even when I had to repurpose or outright modify something.\n\nNow, nearly a quarter century later, I have lived a successful life and continue to keep myself active as well as help and teach others what I have learned so that they can better their own lives.\n\nI see my life as a success and an many tell me that I am an inspiration.',
    twitter: '',
    url: '',
    organization: '',
    position: '',
    session: {
      title:
        'Technically designs and features that improve living with disabilities',
      abstract:
        "I have autism, ADHD, and am legally blind since birth, able to see but with a lower detail. I've lived by figuring out how to use technology in my favor as new things come about, and have taught others how to benefit. Some technology is intentionally beneficial, but a lot is accidentally helpful.",
      description:
        "Technology isn't only for making tasks easier or more efficient. It can greatly impact the quality of a life with disabilities. Anything from features to design choices can help not only make the technology more accessible, but can be used to give us independence in everyday life and the tasks that we do. I will show how I have used and manipulated technology and it's changes over the years to work around my own disabilities as much as possible, as well as the techniques I teach others to make their own lives easier. I will also discuss what features and design choices are unknowingly very beneficial to us, as well as caution against what make something difficult or impossible for us to use. This isn't a call for compliance, but instead is an eye opener into the usually unforeseen ways that a simple technological capability (or an unintended use) can be a game changer for someone with disabilities. I hope to be an inspiration for not only those struggling in the present, but also for those designing our future workarounds, as well as give thanks to those technologies that improved our lives.",
      tags: ['accessibility'],
      track: 'Miscellaneous',
      time: '11:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 9,
    name: 'Alex Riviere',
    email: 'fimion@gmail.com',
    avatar: AlexRiviere,
    bio: 'Alex Riviere is a Senior Frontend Developer for Nexcor Technology and the Co-Organizer for the Atlanta Vue.js Meetup, as well as the PyATL Meetup.',
    twitter: 'fimion',
    url: 'https://alex.party',
    organization: 'Nexcor Technology',
    position: 'Senior Frontend Developer',
    session: {
      title: 'Implementing Small Design Systems',
      abstract:
        "There is a lot of talk around Design Systems from companies like AirBnB, Microsoft, Dropbox, etc. that can be really confusing for developers that work for smaller companies. I'm here to tell you how you might use a design system if you are part of a small team, or even a lone developer.",
      description:
        "There is a lot of talk around Design Systems from companies like AirBnB, Microsoft, Dropbox, etc. that can be really confusing for developers that work for smaller companies. Maybe you don't have thousands of developers to work on maintaining a component library for your design system. Maybe you just make marketing sites with wordpress, python, or a more jamstack solution. \n\nWe'll talk through how to make a minimum design system, tooling to support it, and how to make some helpful code tools to use it!",
      tags: ['webdev', 'javascript', 'design systems', 'php'],
      track: 'Fullstack',
      time: '02:30',
      room: 'Pizza Pizza',
    },
  },

  {
    id: 10,
    name: 'Greg Miller',
    email: 'hello@gregmiller.io',
    avatar: GregMiller,
    bio: "Greg is a versatile professional with a solid educational foundation, holding an M.Ed. in Adult Learning and Technical Education from BGSU. His career journey began in eLearning and has since evolved into a Senior UX Engineer role.\n\nGreg's interests transcend his professional life. At the BiG Fab Lab makerspace, he passionately wields power tools while honing his skills in diverse technologies. Fueled by an innate curiosity, he's on a mission to make technology more accessible to everyone. Notably, he's dedicated to recruiting co-organizers for GDG Toledo, actively expanding his impact in the tech community.",
    twitter: 'grmiller',
    url: 'https://shrinkraylabs.com',
    organization: 'Shrinkray Interactive, LLC',
    position: 'UX Engineer',
    session: {
      title: 'Empowering Developers: Shipping Accessible Digital Experiences',
      abstract:
        "Close your eyes and imagine that you will use some assistive tech to code. Individuals with disabilities want to engage with your creations. How do we harness our ingenuity to build an inclusive user experience?  Join me on a journey to learn about auditing, what's broke, and how to ship for a11y.",
      description:
        "In today's world, we dream that the applications we build will become an integral part of others' daily lives. Picture a scenario where you rely on assistive technology to code. It's a powerful exercise in empathy because, in reality, millions of individuals with disabilities depend on assistive technology to access and engage with the digital world we create. As app developers, it's our responsibility to ensure that our applications meet a designer's expectations for functionality and inclusivity. The challenge we face is significant: How to harness our ingenuity to build applications that cater to a diverse and ever-expanding user base?\n\nJoin me on a journey where we will delve into auditing and coding for accessibility in app development.\n\n- Explore potential risks and pitfalls that can hinder an inclusive user experience, including the costs of a lawsuit and audit\n- Our quest will include learning about top a11y issues, auditing tools available today, and how to integrate tools into your workflow\n- And how AI is already having an impact on the industry\n\nBy the end of our journey, you'll be equipped with knowledge and awareness to successfully prioritize accessibility in your app development process. Build to make a positive impact on the lives of those who rely on assistive technology. ",
      tags: ['accessibility', 'code', 'audit'],
      track: 'Miscellaneous',
      time: '01:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 11,
    name: 'Nav Singh',
    email: 'navjot.singh637@gmail.com',
    avatar: NavSingh,
    bio: 'Android developer at Manulife\n\nGoogle Developer Expert for Android, Mobile Software Engineer at Manulife, Organizer at GDG-Montreal, Mentor for Android-Kotlin Nano-degree at Udacity, and write articles about Android and Kotlin.\n\nApart from his day-to-day job, He spends his time learning new technologies/frameworks.\n\nDuring his free, he loves to watch Netflix, or you can find him at Gym.',
    twitter: 'navczydev',
    url: 'https://medium.com/@navczydev',
    organization: 'Manulife',
    position: 'Google Developer Expert - Android',
    session: {
      title: "What's up with Android's back?",
      abstract:
        "We will walk through the history of Android's Back and its current state.\n- Activity's onBackPressed () and KeyEvent#KEYCODE_BACK are marked as deprecated so what's the solution?\n- As part of Android13, we will explore how to support the predictive back gesture in Android apps.",
      description:
        "In this session, We will walk through the history of Android's Back and its current state.\n\n- Activity's onBackPressed () is marked as deprecated so what's the solution?\n\n- As part of Android13, and 14, we will explore how to support the predictive back gesture in Android apps.\n\n- We will cover different scenarios for migrating to new APIs from older ones.\n  - Migrating apps that are using AndroidX\n  - Migrating apps that are not using AndroidX\n  - Apps that don't have custom back press code\n\nAndroid 14 - updates to this feature\n\n- Custom back animations for cross-activity transitions\n\n- Animating objects while the user performs back gestures using OnBackAnimationCallback\n\n- Integration of AndroidX's Transition API to animate UI elements with onBackPress\n\n- MaterialDesign components that support the predictive back gesture (BottomSheet, SideSheet, etc.)\n\nOr\n\nCan we still use older APIs?",
      tags: ['Android Android13 Android14'],
      track: 'Mobile',
      time: '10:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 12,
    name: 'Allen Firstenberg',
    email: 'prisoner@addventure.com',
    avatar: AllenFirstenberg,
    bio: "By day, Allen is a Senior Project Engineer at http://spiders.com/ where he's been instrumental in creating websites and mobile apps for companies and organizations, ranging from the American Booksellers Association to the National Science Foundation. By night he creates tools, software, and tutorials to help people share their stories and improve their digital lives. You'll find him contributing to the LangChainJS open source project, as one of the two hosts of the \"Two Voice Devs\" podcast, and co-author of the O'Reilly book “Designing and Developing for Google Glass”. He is a Google Developer Expert for Machine Learning, Google Workspace, and the Google Assistant and has been known to occasionally wear light primary shirts.",
    twitter: 'afirstenberg',
    url: 'https://prisoner.com/',
    organization: 'GDE',
    position: '',
    session: {
      title:
        'Using LLMs to bridge the Fuzzy Human / Digital Computer Bounday - tools for EVERY developer',
      abstract:
        "Large Language Models are all the rage these days, but what is most important is that they are increasingly a tool that any developer who can use an API can incorporate with your existing knowledge. You don't need to be a Machine Learning expert - YOU can use them in your code today. Here's how.",
      description:
        "Large Language Models, such as Google's PaLM model, have taken the world by storm. And while many people have fun with these Generative AI models - they are rapidly also becoming a tool that developers can now use, just like we use databases or GUIs.\n\nBut do you need to be a Machine Learning expert to use them? Not anymore! No matter what skill level you are as a developer, as long as you can use REST APIs, you can tap into the power of LLMs. We'll see how to use this tool can serve two big roles:\n\u2022 Helping turn \"fuzzy\" human thinking into more discrete structures traditional programs can use\n\u2022 Taking data structures that we are familiar with and turning them into human understandable output\n\nBy the end of this presentation, people will have:\n\u2022 Learned what the PaLM model is and how it fits into Google's AI strategy\n\u2022 Gained an insight how LLMs can be used in a wide range of applications\n\u2022 Seen concrete examples of using LangChainJS, a popular library for JavaScript and TypeScript, to access Google's PaLM model through the MakerSuite PaLM API and/or the Google Cloud Vertex AI API.\n\u2022 Understood why you, yes you, can and should learn to use LLMs as a tool",
      tags: [
        'Cloud',
        'ML',
        'GCP',
        'LLM',
        'GenerativeAI',
        'ConversationalAI',
        'Google PaLM API',
        'Google Vertex AI',
      ],
      track: 'AI/ML',
      time: '11:30',
      room: 'Pizza Treat',
    },
  },
  {
    id: 13,
    name: 'Nilesh Patel',
    email: 'patelnilesh@google.com',
    avatar: NileshPatel,
    bio: 'Nilesh Patel has been at Google since 2019. He is an Engineer Specialist, focusing on Infrastructure modernization and conversational AI. He has helped many businesses develop AI-powered bots at an enterprise scale and transform their contact center with AI capabilities.\nNilesh  has worn different hats in the past 24+ years. He began his career as an developer and transitioned into a cloud architect role helping enterprises with their digital transformation journey. He is  passionate about using technologies to solve the business challenges to drive outcomes for the customers. Most importantly, Nilesh loves telling stories based on his recent experience and sharing his excitement about new technologies with other devs.\nBesides his work at Google, he enjoys spending time traveling with his family and participating in local cultural dance events.',
    twitter: '',
    url: 'https://www.linkedin.com/in/nilesh-patel/',
    organization: 'Google',
    position: 'Customer Engineer Specialist',
    session: {
      title: 'Generative AI: The Next Frontier of Conversational AI',
      abstract:
        'Build generative AI-powered chatbots in minutes with Google GenAI technologies. No ML expertise required. Learn how in our demo-driven talk.',
      description:
        'Generative AI is transforming conversational AI experiences, enabling developers to create chatbots and virtual assistants that are more human-like, informative, and engaging. With the Generative AI App Builder, developers without ML expertise can quickly get started to reinvent customer conversational experiences and provide specific, actionable responses and complete transactions.\n\nJoin us for a demo-driven talk on how to use GenAI technologies to build generative AI-powered chatbots in minutes and improve  conversational experiences forever.',
      tags: ['Generative AI', 'AI'],
      track: 'AI/ML',
      time: '09:30',
      room: 'Pizza Treat',
    },
  },
  {
    id: 14,
    name: 'Chris DeMars',
    email: 'cdemars86@gmail.com',
    avatar: ChrisDemars,
    bio: 'Chris DeMars previously worked as a Senior Developer Advocate at Harness. He has over 20 years of technical experience and speaks all over the world on web accessibility, and CSS. For his community contributions, he holds awards as a Microsoft MVP, Cloudinary Media Developer Expert, Auth0 Ambassador, and Progress Ninja. Chris advocates, teaches, and speaks on web accessibility as well as modern CSS; building applications with both at the forefront. When he is not working on making the web great and accessible you can find him writing blog posts, rating Detroit Style pizza, and watching Horror movies.',
    twitter: 'saltnburnem',
    url: 'https://chrisdemars.net/',
    organization: '',
    position: 'Microsoft MVP, Cloudinary Media Developer Expert',
    session: {
      title: 'Demystifying The Dreaded A/B Test',
      abstract:
        "The A/B test! We've all thought it: \"What's the point? How much configuration do we need?\" If you're familiar with the scientific method, those steps carve out the path to experimentation and A/B testing.",
      description:
        "The A/B test! We've all thought it: \"What's the point? How much configuration do we need?\" If you're familiar with the scientific method, those steps carve out the path to experimentation and A/B testing. Everyone loves a good hypothesis right? I know I do. Melding the world of science and software can help alleviate the stresses of experiments and help to maximize impact of every feature. In this talk we will journey through what an A/B test is, defining goals for A/B testing your app, and rolling out features based on successful experiments.",
      tags: ['devops', 'ci/cd', 'SaaS', 'QA'],
      track: 'Fullstack',
      time: '09:30',
      room: 'Pizza Pizza',
    },
  },
  {
    id: 15,
    name: 'Ceclynn Fielder-Sherrer',
    email: 'ceclynnsherrer@yahoo.com',
    avatar: CeclynnFielderSherrer,
    bio: "Ceclynn Fielder-Sherrer is a dynamic and passionate staffing professional with a remarkable journey that spans industry giants to start-ups. Her unwavering dedication to the staffing industry is fueled by her love for helping people and her burning desire to make a positive impact in the tech world.\n\nAs the CEO and Founder of DataFielder, Inc.,Ceclynn's vision was born out of a dream to increase diversity and inclusion within the tech industry. With a vibrant entrepreneurial spirit, she embarked on a path to create a staffing and consulting services firm that goes beyond filling positions. Her goal is to foster a culture of belonging and empower individuals to excel in their careers.\n\nCeclynn's journey of self-discovery led her to find her own unique identity after following in the footsteps of well-known family members. With a bold determination, she paved her own way and carved a niche in the industry that aligns with her passions and aspirations. Along the way, she discovered the power of embracing her individuality and harnessing her own strengths to make a difference.\n\nWith an infectious energy and friendly approach, Ceclynn thrives on building strong relationships and delivering exceptional results. She understands the importance of creating a collaborative and supportive environment. Her goal is to create a staffing experience that is both effective and enjoyable, where clients and candidates alike can thrive.",
    twitter: '',
    url: 'https://datafielderinc.com',
    organization: 'DataFielder',
    position: 'CEO',
    session: {
      title:
        'Empowering Diversity in Tech: A Journey of Innovation and Inclusion',
      abstract:
        "Imagine a journey where diversity sparks innovation, inclusion drives success, and tech knows no boundaries. Join me as I take you on an extraordinary adventure through the world of tech, sharing the invaluable insights I've gained over a decade in the IT staffing and recruitment industry.",
      description:
        "In \"Empowering Diversity in Tech: A Journey of Innovation and Inclusion,\" we'll explore how embracing diversity isn't just a social imperative, it's a powerful catalyst for innovation, creativity, and profitability. My story is a testament to the incredible transformations that occur when you celebrate differences and encourage the talents of all.\nDiscover the keys to unlock a more inclusive and innovative tech world:\n- Learn how diversity fosters creative problem-solving.\n- Uncover the strategies to attract, retain, and nurture a diverse talent pool.\n- Explore the business case for a more inclusive and equitable tech ecosystem.\n- Hear inspiring success stories from organizations that have reaped the benefits of diversity.\n- Gain practical insights into promoting diversity at all levels of your organization.\n\nMy unique perspective as a woman-minority founder in the tech world will inspire you to break free from traditional boundaries, challenge the status quo, and create a tech landscape where every voice is heard, valued, and empowered.\nGet ready for an electrifying talk that will energize your commitment to diversity, propel your innovation initiatives, and open your eyes to the endless possibilities in tech.",
      tags: ['DiversityInTech'],
      track: 'Miscellaneous',
      time: '02:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 16,
    name: 'Keith Bourne',
    email: 'keithebourne@gmail.com',
    avatar: KeithBourne,
    bio: 'Keith Bourne is the founder of Gradient Valley, focused on machine learning consulting and development. He has been on the forefront of cutting edge technology since the 90’s, with extensive management and technical experience in web, mobile, and machine learning.  His focus has been on all aspects of building and selling incredible technology products and services, including a deep knowledge of user experience, agile programming methods, technology marketing, and most of the most popular programming languages and their capabilities. He holds an MBA from Babson College where he focused on technology entrepreneurship and marketing, which has provided a strong analytical base for approaching machine learning problems with an organization’s overall strategic direction in mind.  He has served in diverse roles in high growth start up environments, including Senior Software Engineer, Marketing Director, Chief Operations Officer, and Founder/Chief Executive Officer.',
    twitter: 'keithbourne',
    url: 'https://gradientvalley.com/',
    organization: 'Gradient Valley, Inc.',
    position: 'Senior Data Scientist, Generative AI Engineer',
    session: {
      title:
        'Production Ready Document Extraction with Generative AI, LangChain, and Vertex AI on GCP',
      abstract:
        'Document extraction is shaping up to be one of the first major areas across the enterprise for widespread Generative AI adoption. In this presentation, we will review the inner workings of setting up production ready generative AI pipelines that utilize LangChain and MLOps on Google Cloud Platform.',
      description:
        "Document extraction and the utilization of unstructured data are quickly emerging as pivotal domains for the integration of Generative AI within enterprise frameworks. The vast landscapes of data, once considered chaotic and hard to decipher, are now presenting themselves as invaluable reservoirs of insights, thanks to the advancements in Generative AI.\n\nCompanies across the board are recognizing the latent value within their information vaults. A significant portion of this data, which was previously underutilized, is now being harnessed in two primary ways:\n\n• Internal Optimization: Several enterprises are zooming in on their internal operations. They are converting their extensive repositories of internal documents into dynamic knowledge bases. This not only enhances operational efficiency but also drives productivity, fostering a culture of informed decision-making and proactive problem-solving.\n\n• Customer-Centric Approaches: In contrast, other organizations are casting their nets wider, diving deep into their vast data lakes filled with customer-centric documents. By leveraging Generative AI, these companies are crafting innovative methodologies to engage, serve, and exceed the expectations of their clientele. This not only strengthens brand loyalty but also paves the way for enhanced customer experiences.\n\nIt's worth noting that while the process of extracting and leveraging this data via Generative AI is intricate and challenging, the potential returns are massive. Companies that pioneer these initiatives — the first movers — stand to gain a significant competitive edge, enjoying benefits that range from increased profitability to enhanced market presence. We will cover the wealth of resources and tools provided by Google Cloud Platform (GCP) that provide the foundation for this effort.\n\nIn the forthcoming presentation, we aim to delve deep into the nuts and bolts of this process. We will provide a comprehensive overview of how to establish a production-grade generative AI pipeline. The discussion will spotlight cutting-edge tools such as LangChain, LangSmith, and Vertex AI Vector Search, emphasizing their role in data extraction and processing. Furthermore, we will elucidate the importance of having a robust MLOps infrastructure, ensuring scalability, flexibility, and efficiency in all AI-driven endeavors.",
      tags: [
        'LLMs',
        'generative AI',
        'machine learning',
        'google cloud platform',
        'GCP',
        'Vertex AI',
        'LangChain',
        'LangSmith',
        'MLOps',
        'document extraction',
        'NLP',
        'unstructured data',
        'data lakes',
        'BigQuery',
        'Vertex AI Vector Search',
        'Cloud Storage',
        'Cloud SQL',
        'PostgreSQL',
        'pgvector',
        'prompt engineering',
        'prompt design',
        'Generative AI Studio',
      ],
      track: 'AI/ML',
      time: '02:30',
      room: 'Pizza Treat',
    },
  },
  {
    id: 17,
    name: 'Vyas Bhuman',
    email: 'bhuman.vyas@gmail.com',
    avatar: VyasBhuman,
    bio: '',
    twitter: '',
    url: '',
    organization: 'Credit Acceptance',
    position: 'Senior Application Developer',
    session: {
      title: 'From Zero to Kafka Hero: A Comprehensive Introduction',
      abstract:
        'I am Bhuman Vyas having 12+ years of experience in building highly scalable and maintainable APIs. Currently working as a senior software developer in Credit Acceptance.\nI am fan of kafka as it solves Real-time, fault-tolerant event streaming for seamless data integration and processing.',
      description:
        "Apache Kafka is a high-throughput, fault-tolerant, and scalable distributed event streaming platform that enables real-time data processing and data integration in a highly efficient and reliable manner. It serves as the central nervous system for modern data-driven applications, providing a unified, durable, and real-time data pipeline for connecting various data sources and applications. With its distributed architecture and strong durability guarantees, Kafka is the go-to solution for building real-time data pipelines, event-driven microservices, and stream processing applications, ensuring your data flows smoothly and reliably across your organization.\n\nUse case : Fraud Detection\n\nReal-Time Data Streaming: Companies like Uber use Kafka to stream real-time data from various sources (e.g., mobile apps, GPS) for driver and rider matching, ETA calculations, and more.\n\nLog Aggregation: Large-scale systems and applications generate a vast amount of log data. Kafka is used to collect, aggregate, and analyze log data for troubleshooting and monitoring.\n\nMetrics and Monitoring: Kafka helps collect and process performance metrics and monitoring data to ensure the health and stability of systems and applications.\n\nEvent Sourcing: Event sourcing architectures use Kafka to store and process domain events, allowing for a complete history of changes in an application's state.\n\nIoT Data Ingestion: Internet of Things (IoT) devices generate massive streams of data. Kafka is used to ingest and process IoT data for real-time analytics and insights.\n\nFraud Detection: Financial institutions use Kafka to process large volumes of transaction data in real time to detect and prevent fraudulent activities.\n\nSocial Media Data Processing: Platforms like Twitter use Kafka to handle the high volume of tweets, track trending topics, and deliver real-time updates to users.\n\nRecommendation Engines: E-commerce companies use Kafka to process user behavior data and provide real-time product recommendations.\n\nCross-System Integration: Kafka serves as a central hub for integrating different systems and applications, ensuring data consistency and real-time communication.\n\nMicroservices Communication: Kafka is used for communication and event-driven architecture in microservices, allowing different services to react to events and maintain data consistency.",
      tags: ['kafka', 'springboot', 'Rest'],
      track: 'Fullstack',
      time: '02:30',
      room: 'Traning Room',
    },
  },

  {
    id: 18,
    name: 'Chris Turvey',
    email: 'christurvey@gmail.com',
    avatar: ChrisTurvey,
    bio: 'I am a cheap dad... A tech dad... a cheap tech dad.\nI feel like I am a jack of all trades and a master of none; but oftentimes better than master of one.\nI talk about things from time to time.\nI have been published in Make Magazine... It was a letter to the editor... but that counts as something right? I like reading as much as I can about AI/ML and IoT.',
    twitter: 'christurvey',
    url: '',
    organization: '',
    position: 'Tech Dad',
    session: {
      title: 'Seven Habits of Somewhat Effective Self-Taught Programmers',
      abstract:
        "I didn't have a mentor or formal path to programming... I still get stuff done. Using culture to guide me. The talk is a guide for those not on the formal path.",
      description:
        "I didn't have a mentor or formal path to programming... I still get stuff done. It was 5 years in before I knew what modulo was... it was 10 years in before I knew what levenstien distance was... Big O notation... no clue.\n\nFoundational philosophy takes from computer culture that I found here and there. Stories and quips that are guide posts. The end of the talk goes into where the self taught can backfill some of that computer science foundation.\n\nLearning from the culture of programming humor.",
      tags: [],
      track: 'Miscellaneous',
      time: '03:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 19,
    name: 'Amit Rathi',
    email: 'amit.rathi.k@gmail.com',
    avatar: AmitRathi,
    bio: 'A developer, traveler, and entrepreneur in the pursuit of a digital nomad lifestyle.\nFounder and Owner of The Mobile Dev -- a technology solution provider specializing in mobile-first application.\nHobbies include reading articles on Medium, attending Meetups, and sharing great memes.',
    twitter: 'amitrathik',
    url: 'https://amitrathik.com',
    organization: 'The Mobile Dev',
    position: 'Owner',
    session: {
      title: 'Data Sharing Issues with microservice architecture',
      abstract:
        'As an advocate for decoupled architecture, many projects I have worked on leverage microservices. The separation of concerns is great, but unfortunately, has introduced issues with sharing data across the services.',
      description:
        "I'll be sharing my experiences with working on various projects leveraging the decoupled, microservice architecture and the many pitfalls with sharing data.\n\nI'll also share some tips and tricks to mitigate them.",
      tags: ['Microservices', 'decoupled', 'headless', 'monoliths', 'devops'],
      track: 'Fullstack',
      time: '01:30',
      room: 'Pizza Pizza',
    },
  },
  {
    id: 20,
    name: 'Julia Suzuki',
    email: '',
    avatar: JuliaSuzuki,
    bio: `Julia is a people data science & social entrepreneur whose mission is to make the world a better place by operating at the intersection of well-being, data & AI, and business. Her primary focus is to address issues around the collective well-being of individuals, organizations, society, and the planet. She is a speaker, thought leader, and strategist in workplace well-being and has over 10 years of consulting experience with a global consulting company, helping its clients transform into data-driven enterprises.`,
    twitter: '',
    url: '',
    organization: 'Google Women Techmakers Ambassador',
    position: 'People Data Science & Social Entrepreneur',
    session: {
      title: 'Calling All Women in Technology',
      abstract: '',
      description: '',
      tags: [],
      track: 'Miscellaneous',
      time: '12:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 21,
    name: 'Keith Kurak',
    email: 'keith.kurak@gmail.com',
    avatar: KeithKurak,
    bio: "Keith is a Developer Success Engineer at Expo, helping fellow mobile developers build amazing React Native apps in record time. From the time he made a Dragon Quest knockoff on his TI-83 during study hall in high school, he can't remember not being interested in building for the small screen. When he's not slinging JavaScript, you might find Keith zipping through busy Cleveland streets on his bicycle, building a computer case out of Lego, or in the kitchen breaking new ground in the field of alternative omelette fillings.",
    twitter: 'llamaluvr',
    url: 'https://github.com/keith-kurak',
    organization: 'Expo',
    position: 'Developer Success Engineer',
    session: {
      title: 'Freaky Fast Universal Full-Stack With Firebase and Expo Router',
      abstract:
        "Firebase helps you ship faster by providing a backend for you. Expo Router, the first file system-based router for universal React apps, eliminates costly navigation boilerplate and works great with iOS, Android, and web right out of the box. Let's combine these two for a truly rapid dev experience.",
      description:
        "Firebase has long been a great way to lower the barrier to standing up a full-stack app, by eliminating the need to provide your own API layer, backing datastore, authentication, and more. It works great with many different front-end frameworks, including React and React Native. But things can still often get complex once it comes to targeting all the devices where you users are, with all the differences between web and native. Expo Router takes a big step forward in unifying the development experience between the platforms, offering to mobile the powerful, expressive, and easy-to-set-up routing web developers are familiar with. Your folder structure now represents your app navigation tree and each file becomes a page simply by exporting a React component, and deep linking automatically works everywhere, even between your mobile and web apps. Combined with Firebase, Expo Router lets us express our entire full-stack app in a single client front-end codebase that works great everywhere. Let's investigate an Expo Router app with Firebase Cloud Firestore and Authentication, and see how they can work together to help us ship great apps quickly.",
      tags: ['React', 'React Native', 'Expo', 'Firebase', 'Mobile', 'Web'],
      track: 'Mobile',
      time: '03:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 22,
    name: 'Ben Jacques',
    email: 'Ben.Jacques@spindance.com',
    avatar: BenJacques,
    bio: "With a dynamic professional journey spanning over 15 years, Ben Jacques is currently the Director of Engineering at SpinDance, a cutting-edge software development firm renowned for its innovation in connected digital products and IoT solutions. Ben's diverse technical background encompasses a broad spectrum of software development, including embedded systems, cloud technology, web, desktop, and mobile development. However, his true passion and expertise lie in the realms of computer vision and machine learning.\n\nAt SpinDance, Ben is instrumental in steering the engineering team towards excellence in creating smart, interconnected software systems that push the boundaries of modern IoT applications. His deep understanding of machine learning and computer vision not only contributes to the company's innovative edge but also ensures that projects harness the latest advancements in AI technology.\n\nA lifelong learner and AI enthusiast, Ben is continually experimenting with and exploring the newest trends and innovations in artificial intelligence. This passion not only keeps him at the forefront of technological advancement but also imbues his work and team with a forward-thinking, exploratory spirit.\n\nAway from the complexities of technology and software development, Ben finds solace and joy in the great outdoors. His love for nature is matched by his penchant for fixing broken machines, a hobby that not only satisfies his curiosity but also hones his problem-solving skills and attention to detail - traits that are invaluable in his professional role. Ben's balanced blend of high-tech expertise and hands-on practicality makes him a unique and respected leader at SpinDance.",
    twitter: '',
    url: 'https://www.linkedin.com/in/ben-jacques-aiml',
    organization: 'SpinDance',
    position: 'Director Of Engineering',
    session: {
      title: 'Getting Started with Flutter for Embedded Linux',
      abstract:
        "Creating appealing and responsive UIs for embedded systems has been a major pain for years. Flutter, initially designed for mobile app development, has emerged as a compelling option for these systems. We'll dive into how to get started and why it is so much better than the alternatives.",
      description:
        "Getting Started with Flutter for Embedded Linux\n\nAs embedded systems continue to evolve, so do the tools that developers use to create their user interfaces. Flutter, initially designed for mobile app development, has emerged as a compelling option for these systems. In this 45-minute presentation, we'll explore how and why Flutter can be integrated with Embedded Linux, offering developers a new avenue to craft efficient and responsive UIs.\n\n1. Introduction to Flutter: An overview of Flutter's fundamental concepts and its architecture.\n\n2. A Look at Existing UI Tools: A brief overview of some of the existing tools for building UIs on embedded linux platforms and some of their shortcomings.\n\n3. Flutter in Embedded Systems: A discussion on why developers might consider Flutter when working on embedded systems. This section will highlight the toolkit's adaptability and its fit for embedded environments.\n\n4. Quickstart: A practical guide on how to get Flutter operational on Embedded Linux. We'll go through the necessary steps and tools to ensure a seamless integration.\n\n5. Learnings and Challenges: A candid reflection on the experiences with Flutter in the embedded context. We'll share advice and highlight some of the challenges faced during integration and development.\n\nAttendees will leave with a clear understanding of Flutter's capabilities within the Embedded Linux environment and practical knowledge to get started.",
      tags: ['flutter', 'linux', 'UI', 'dart', 'embedded'],
      track: 'Mobile',
      time: '03:30',
      room: 'Traning Room',
    },
  },
  {
    id: 23,
    name: 'Mike Nimer',
    email: 'mikenimer@google.com',
    avatar: MikeNimer,
    bio: 'Mike Nimer is a Solution Specialist at Google, focused on Data Analytics. However, Mike has a been developing web applications for over 25 years. Before Google, Mike built middleware servers for Adobe, used by > 500k developers, has worked at multiple startups in the Social Media & InsTech spaces and he has work as a consultant for customers around the world. A frequent speaker at Adobe Max conferences, local meetups, and other developer conferences.\n\n*Fun Fact: Back in 1998, I was the first victim of a sql injection attack.',
    twitter: 'mnimer',
    url: '',
    organization: 'Google',
    position: 'Solutions Specialist',
    session: {
      title: 'Introduction to Flutter',
      abstract:
        'This presentation will cover what is flutter and the basics of building an application. Covering everything from Hello World to Widgets, Layouts, and Theming.',
      description:
        'This presentation will cover what is flutter and the basics of building an application. Covering everything from Hello World to Widgets, Layouts, and Theming.',
      tags: ['Flutter'],
      track: 'Mobile',
      time: '02:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 24,
    name: 'Chad Hamdan',
    email: 'chad.abou-hamdan@lcecorp.com',
    avatar: ChadHamdan,
    bio: 'Chad Hamdan is an iOS Developer at Little Caesars with a passion for technology. He graduated from University two years ago and has been making significant contributions to mobile ordering and order tracking throughout the Apple ecosystem. Outside of work, Chad enjoys spending time with his family and friends, exploring new technologies, and playing video games.',
    twitter: '',
    url: '',
    organization: 'Little Caesars',
    position: 'Mobile Developer',
    session: {
      title: 'Developing for the Apple Vision Pro',
      abstract: '',
      description:
        'Apple Vision Pro is a powerful new platform for augmented reality (AR) experiences. With its advanced sensors and vision processing capabilities, Vision Pro enables developers to create AR apps that are more immersive, interactive, and realistic than ever before.\n\nIn this introductory talk, we will cover the basics of developing AR apps for the Apple Vision Pro in SwiftUI. We will start by taking a tour of visionOS inside the Vision Pro simulator, then we will then dive into the specific tools and APIs that Apple provides on developing AR apps for visionOS.\n\nWe will also discuss how to run existing apps on Vision Pro. If you have an existing app that was developed for iOS or iPadOS, you may be able to port it to Vision Pro with minimal effort.\n\nWhether you are a beginner or an experienced AR developer, this talk will give you the foundation you need to start building amazing AR apps for Apple Vision Pro.',
      tags: [],
      track: 'Mobile',
      time: '01:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 26,
    name: 'Pavel Ryabov',
    email: '',
    avatar: PavelRyabov,
    bio: "I'm a Full-Stack Software Engineer with over 4 years of experience. My stack includes Flutter, Firebase, and AWS. After working with Firebase Extensions for some time and winning the Firebase Builders ‘23 competition with my project KnowWaste, I am excited to introduce developers to this amazing product. I have developed several extensions of my own, including FlowLinks (Dynamic Links alternative) and Object Detection with Cloud Vision.",
    twitter: '',
    url: '',
    organization: '',
    position: 'Full-Stack Software Engineer',
    session: {
      title: 'AI Firebase Extensions',
      abstract:
        'Intro to Firebase Extensions and their use cases. Showcase of AI-powered Extensions for text generation, object detection, and image labeling working together.',
      description:
        'Extensions are one of the newest Firebase products that greatly simplify and speed up the development process. These professionally crafted pre-packaged bundles of code provide must-have features like automatic email sending, data backups, user data management, payment handling, and much more.\n\nThe most interesting Extensions that have had a boom in recent years are the AI-powered Extensions. Using Google’s PaLM, Vertex AI, and Cloud Vision, these powerful solutions provide features like text generation and translation, various language tasks, chat, OCR, image labeling, and object detection. The true power of AI extensions comes with combining these solutions to build a fully automated pipeline, independent of your frontend framework. For example, you can trigger a complex pipeline of multi-level AI image processing with just a simple image upload to Cloud Storage.\n\nIn this talk, I will cover the basics of Firebase Extensions, explain their pros, mention some of the problems, and introduce the Extensions Hub. I will dedicate the rest of the talk to exploring AI Extensions and their capabilities, including a live demonstration of my AI-powered recycling companion application KnowWaste (fully open-source and available for iOS and Android), which uses over 5 AI Extensions in order to process scanned waste and output comprehensive recycling advice.',
      tags: ['Fullstack', 'AI/ML'],
      track: 'Fullstack',
      time: '10:30',
      room: 'Pizza Pizza',
    },
  },
  {
    id: 27,
    name: 'Adam Kaump',
    email: '',
    avatar: AdamKaump,
    bio: 'Senior iOS developer at Rocket Homes who in his free time enjoys playing guitar, disc golf, video games, and hanging out with his family.',
    twitter: '',
    url: '',
    organization: 'Rocket Homes',
    position: 'Senior IOS developer',
    session: {
      title: 'A history of native iOS development at Rocket Homes',
      abstract: '',
      description:
        'Adam and Aaron Kaump have worked on the Rocket Homes iOS app since it launched over 3 years ago in 2020. In that time the entire mobile landscape has evolved and so has how Rocket Homes considers building native apps. From supporting multiple platforms like iOS, iPadOS, macOS and now CarPlay, to dynamic layouts that scale from the smallest iPhones to the largest external displays - they’ll walk you through their history developing Rocket Homes for iOS. Along the way they’ll share learnings from Rocket Homes being featured as a Best App for Homebuyers and a Best App for iOS 17 by Apple earlier this year.',
      tags: [],
      track: 'Mobile',
      time: '11:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 28,
    name: 'Aaron Kaump',
    email: '',
    avatar: AaronKaump,
    bio: 'Senior Product Manager at Rocket Homes, focused on native mobile apps. Aaron likes trying out new electronics, cycling on his e-bike, and traveling with his wife and two kids.',
    twitter: '',
    url: '',
    organization: 'Rocket Homes',
    position: 'Senior Digital Product Manager',
    session: {
      title: 'A history of native iOS development at Rocket Homes',
      abstract: '',
      description:
        'Adam and Aaron Kaump have worked on the Rocket Homes iOS app since it launched over 3 years ago in 2020. In that time the entire mobile landscape has evolved and so has how Rocket Homes considers building native apps. From supporting multiple platforms like iOS, iPadOS, macOS and now CarPlay, to dynamic layouts that scale from the smallest iPhones to the largest external displays - they’ll walk you through their history developing Rocket Homes for iOS. Along the way they’ll share learnings from Rocket Homes being featured as a Best App for Homebuyers and a Best App for iOS 17 by Apple earlier this year.',
      tags: [],
      track: 'Mobile',
      time: '11:30',
      room: 'Hot N Ready',
    },
  },
  {
    id: 29,
    name: 'Jenna Ritten',
    email: '',
    avatar: JennaRitten,
    bio: `Jenna Ritten (@jritten) is Chief Architect and Chief Developer Advocate for InnerSource@IBM. She works on expanding the reach of open source technologies to Detroit and Austin's developer communities. Her areas of interest include hackathons, design-thinking workshops, NLU/NLP, gamified learning, and Blockchain. Jenna left Detroit to attend Dev Bootcamp San Francisco to learn full-stack web development before joining IBM Austin as part of the Tech Re-Entry program. She is an advocate for non-traditional people in tech, much like herself, and provides support by building and fostering communities for underrepresented people in tech.`,
    twitter: 'jritten',
    url: '',
    organization: 'InnerSource@IBM',
    position: 'Chief Architect & Chief Developer Advocate',
    session: {
      title: 'Calling All Women in Technology',
      abstract: '',
      description: '',
      tags: [],
      track: 'Miscellaneous',
      time: '12:30',
      room: 'Reserve & Ready',
    },
  },
  {
    id: 30,
    name: 'Blake Lapum',
    email: '',
    avatar: BlakeLapum,
    bio: `Blake Lapum has been working at SpinDance since graduating from Grand Valley State University in 2020 with a B.S. in Compute Science and has worked his way up to his current role of Senior Software Engineer and co-chair of the embedded guild (department). While embedded software is his bread and butter, Blake also enjoys staying up to date with the latest cloud developments, including AWS CDK, and working with open-sourced projects and technologies such as Flutter. Given his background in mobile application development during his college studies, his experience and certifications with AWS, and his passion for embedded software and tinkering with electronics, Blake has a deep understanding of the full IoT stack, which gives him an edge in both architecting and implementing end-to-end IoT solutions.`,
    twitter: '',
    url: '',
    organization: 'SpinDance',
    position: 'Senior Software Engineer',
    session: {
      title: 'Getting Started with Flutter for Embedded Linux',
      abstract:
        "Creating appealing and responsive UIs for embedded systems has been a major pain for years. Flutter, initially designed for mobile app development, has emerged as a compelling option for these systems. We'll dive into how to get started and why it is so much better than the alternatives.",
      description:
        "Getting Started with Flutter for Embedded Linux\n\nAs embedded systems continue to evolve, so do the tools that developers use to create their user interfaces. Flutter, initially designed for mobile app development, has emerged as a compelling option for these systems. In this 45-minute presentation, we'll explore how and why Flutter can be integrated with Embedded Linux, offering developers a new avenue to craft efficient and responsive UIs.\n\n1. Introduction to Flutter: An overview of Flutter's fundamental concepts and its architecture.\n\n2. A Look at Existing UI Tools: A brief overview of some of the existing tools for building UIs on embedded linux platforms and some of their shortcomings.\n\n3. Flutter in Embedded Systems: A discussion on why developers might consider Flutter when working on embedded systems. This section will highlight the toolkit's adaptability and its fit for embedded environments.\n\n4. Quickstart: A practical guide on how to get Flutter operational on Embedded Linux. We'll go through the necessary steps and tools to ensure a seamless integration.\n\n5. Learnings and Challenges: A candid reflection on the experiences with Flutter in the embedded context. We'll share advice and highlight some of the challenges faced during integration and development.\n\nAttendees will leave with a clear understanding of Flutter's capabilities within the Embedded Linux environment and practical knowledge to get started.",
      tags: [],
      track: 'Mobile',
      time: '03:30',
      room: 'Traning Room',
    },
  },
  {
    id: 31,
    name: 'Rahul Nethi',
    email: '',
    avatar: RahulNethi,
    bio: `Rahul Nethi is a Lead QA Engineer at Little Caesars with a relentless passion for ensuring the seamless functionality and reliability of web and mobile applications through automation. As a QA personnel, Rahul has honed his expertise in designing and implementing robust automation frameworks tailored for both web and mobile applications. In addition to his prowess in UI testing, he enjoys executing performance tests to ensure that software not only functions seamlessly but also performs optimally under various real world conditions.`,
    twitter: '',
    url: '',
    organization: 'Little Caesars',
    position: 'Lead QA Engineer',
    session: {
      title: 'Automate Apps with Appium',
      abstract: '',
      description:
        'Appium is an open-source automation tool for testing mobile applications on various platforms, including Android and iOS.\n\nIn this opening session, following topics will be covered:\n\n1.Introduction to Appium\n2.Appium Architecture\n3.Advantages and Disadvantages\n4.Appium Setup\n5.Locator Strategies\n6.Test Execution\n7.Parallel Execution\n8.Cloud-based testing platform',
      tags: [],
      track: 'Mobile',
      time: '10:30',
      room: 'Training Room',
    },
  },
  {
    id: 32,
    name: 'Ali El-Sharif',
    email: 'elsharifali@hotmail.com',
    avatar: AliElSharif,
    bio: 'Ali El-Sharif works as a professor at St. Clair College in Windsor, where he teaches Data Analytics and Cybersecurity.\n\nAli is currently co-authoring a book with Serg Masís and Nick Schmidt. The book title is “Building Responsible AI with Python - Identify, explain, and mitigate bias with hands-on code examples.”\n\nAli enjoys volunteering for GDG Windsor and encourages everyone to stay connected with this amazing community of developers.',
    twitter: '',
    url: '',
    organization: 'St. Clair College',
    position: 'Professor',
    session: {
      title: 'Optimizing for AI Fairness',
      abstract:
        'Developers would want to learn to identify biases in their models through statistical analysis and explanatory techniques, remediate biases in their models, and monitor their models post-launch so that they deliver ML solutions that can be safely deployed in support of high-stakes decisions.',
      description:
        'Is it possible to design machine learning models that “do no harm”?   Ideally, we want to build machine learning models that maximize predictive accuracy while minimizing process and outcome unfairness. In the imperfect real world, these objectives may conflict, and we may be forced to prioritize some objectives at the expense of others. This talk offers an overview of AI fairness concepts and the different intervention types that we use to optimize these potentially competing objectives.',
      tags: ['Machine Learning', 'Responsible AI', 'AI Fairness'],
      track: 'AI/ML',
      time: '01:30',
      room: 'Pizza Treat',
    },
  },
]
