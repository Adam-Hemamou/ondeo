import { Translations } from './fr';

// Textes anglais du site : même structure que `fr.ts`, vérifiée par le type.
export const en: Translations = {
  routes: {
    home: '/en',
    legal: '/en/legal-notice',
    privacy: '/en/privacy-policy',
  },

  languageSwitcher: 'Language selection',

  nav: {
    tagline: 'Creative agency',
    menu: 'Menu',
    videos: 'Our videos',
    offers: 'Our offers',
    reviews: 'Reviews',
    book: 'Book a call',
  },

  hero: {
    title:
      'Ultra-captivating <span class="highlighted">videos</span> to win over your <span class="highlighted">audience.</span>',
    description:
      'Podcasts, <span class="bolded">promotional videos</span> or motion design: we are by your side at every stage of your project, until you are <span class="bolded">100% satisfied.</span>',
    cta: 'Book a call',
    videoCaption: 'Discover our agency in video',
    videoTitle: 'Video presentation of our services',
  },

  promise: {
    revisions: 'Unlimited revisions',
    noCommitment: 'No commitment',
    allInclusive: 'We handle everything',
  },

  videos: {
    title: (year: number) =>
      `Your most <span class="highlighted">innovative</span> video partner for ${year}`,
    iframeTitle: (category: string) => `${category} video`,
  },

  logoAlt: (name: string) => `${name} logo`,

  steps: {
    title:
      'The action plan to get <span class="highlighted">results</span>',
    strategy: {
      title: 'Strategy',
      description:
        'We write your video script together in a shared document.',
    },
    storyboard: {
      title: 'Storyboard',
      description: 'We send you a storyboard before production begins.',
    },
    production: {
      title: 'Production',
      description: 'We produce the video and send you a first version.',
    },
    feedback: {
      title: 'Feedback',
      description: 'Unlimited revisions until you are satisfied.',
    },
  },

  offers: {
    title:
      'The <span class="highlighted">performance</span> of top agencies, at affordable prices',
    popular: 'Popular',
    cta: 'Learn more',
    notIncluded: 'Not included:',
    podcast: {
      title: 'Podcast Pack',
      description:
        'Want to speak to your audience? <br />Come and record an interview in our studios!',
      videos: (count: number) => `${count}-video pack`,
      features: (count: number) => [
        'Analysis of viral topics in your industry',
        'Collaborative writing of the topics covered',
        'Studio set up to your taste',
        `Full production of ${count} videos`,
        'Unlimited revisions',
        '100% optimized to perform',
        'Results analysis',
        '5 motion design videos',
      ],
    },
    motion: {
      title: 'Motion Design Pack',
      description:
        'Ideal for a video presenting your company or a new offer',
      videos: (seconds: number) => `${seconds}-second video`,
      features: (seconds: number) => [
        `${seconds} seconds of motion design video`,
        'Script writing',
        'Storyboard / Illustrations',
        'Voice-over / Sound design',
        'Unlimited revisions',
        '3 format variations',
        'Subtitles',
        'Multiple languages',
      ],
    },
  },

  testimonials: {
    title: 'They <span class="highlighted">trusted</span> us',
    titleMobile: 'They <br /><span class="highlighted">trusted</span> us',
    showMore: 'Show more',
    showLess: 'Show less',
    caisseEpargne: {
      name: 'Project manager',
      title: 'Caisse d’Épargne',
      feedback:
        '“Thank you for this service. Communication was very smooth, the team worked autonomously and the result is very satisfying!”',
    },
    sneakmart: {
      name: 'Anthony Debrant',
      title: 'CEO Sneakmart',
      feedback:
        '“These videos are exceptional!! I needed podcast videos to feed Sneakmart’s Instagram account... over 1 million views in 6 videos!”',
    },
    arcachon: {
      name: 'Communications department',
      title: 'Mairie d’Arcachon',
      feedback:
        '“Attentive, responsive and full of ideas, Robin produced very high-quality videos. Thank you!”',
    },
    danone: {
      name: 'Production manager',
      title: 'Danone',
      feedback:
        '“This short ad was remarkable! Congratulations on your efficiency! We look forward to working together on a future project.”',
    },
    docaposte: {
      name: 'Philippe D.',
      title: 'Docaposte',
      feedback:
        '“The podcast service paid off! Thanks to the whole Ondeo team for your efficiency and professionalism”',
    },
    frenchMed: {
      name: 'Community Manager',
      title: 'French-Med',
      feedback:
        '“We loved working with Adam, and we actually saved money by going with them.”',
    },
    thatsYMedia: {
      name: 'Nathanaël Chouraki',
      title: 'Founder That’s Y Media',
      feedback:
        '“Robin and the team did exceptional work with impressive turnaround times! In the space of three weeks, we worked closely together to produce nearly 40 videos that made a lasting impression on our partners!”',
    },
    carlsberg: {
      name: 'Project manager',
      title: 'Carlsberg',
      feedback:
        '“Very well-organized production process and fast delivery. I recommend them, and we will surely work together again”',
    },
    wagmiTrends: {
      name: 'Marine Adatto',
      title: 'CEO Wagmi-Trends',
      feedback:
        '“I have been working with Robin for a while: very professional. For podcast formats, he sets up the set, handles absolutely everything and sends me the videos in record time.”',
    },
    skillsPlace: {
      name: 'Benjamin Catellier',
      title: 'CEO Skills Place',
      feedback:
        '“Working with Adam was more than perfect, you will not find a better motion designer!”',
    },
    storyW: {
      name: 'Adeline Percept',
      title: 'Story W',
      feedback:
        '“Exceptional! The video editing went beyond my expectations. The team’s talent and professionalism brought my project to life in spectacular fashion”',
    },
    powellSoftware: {
      name: 'Marketing and Communications',
      title: 'Powell Software',
      feedback:
        '“Great experience with Adam, he was very professional and very responsive. I recommend him! Thank you”',
    },
  },

  faq: {
    title: 'The <span class="highlighted">answers</span> to your questions',
    titleMobile:
      'The <span class="highlighted">answers</span> <br />to your questions',
    items: [
      {
        question: 'Why us and not another agency?',
        answer:
          'Over 20 million views. More than 20 videos produced every week. Always on the lookout for what is new, we are already preparing the very best for you.',
      },
      {
        question: 'Will it really be useful to me?',
        answer:
          'Today, you cannot grow without video. It is an essential lever for gaining visibility, and therefore revenue.',
      },
      {
        question: 'Do I have to commit for several months?',
        answer:
          'No commitment required. However, for a social media strategy, we recommend a daily presence over several months.',
      },
      {
        question: 'What are your payment terms?',
        answer:
          'Stripe link for secure payment. We offer discounts on repeat orders.',
      },
      {
        question: 'What are your delivery times?',
        answer:
          'It depends on the length and complexity of the project. Our average turnaround is 30 days. Under certain conditions, we also offer express delivery.',
      },
    ],
  },

  contact: {
    title: 'Want to talk about it?',
    description:
      'Nothing could be simpler: just fill in a few details about yourself and we will get back to you according to your availability to define together the message, length and deadline of your video project.<br /><br />So, ready to bring your project to life?',
    stepSlot: 'Pick a time slot',
    stepTalk: 'We discuss your project',
    stepProduction: 'We start production',
    calendarNotice:
      'The booking calendar is provided by Calendly, which sets its own cookies. It is displayed at your request.',
    showCalendar: 'Show the calendar',
    followUs: 'Join us',
  },

  footer: {
    rights: (year: number) => `${year} - Ondeo. All rights reserved.`,
    legalNav: 'Legal information',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    cookies: 'Cookie settings',
  },

  cookies: {
    banner:
      'We use cookies and trackers to measure site traffic and track our advertising campaigns. You can accept them, reject them or customize your choice, and change it at any time via “Cookie settings” at the bottom of the page.',
    learnMore: 'Learn more',
    refuse: 'Reject',
    accept: 'Accept',
    customize: 'Customize',
    panelTitle: '<span class="highlighted">Cookie</span> settings',
    panelIntro:
      'Choose which categories of cookies and trackers you allow. Your choice is kept for 6 months.',
    necessary: 'Necessary (always active)',
    necessaryDescription:
      'Site operation, remembering your choice and playback of Vimeo videos, embedded with the “Do Not Track” option.',
    statistics: 'Analytics',
    statisticsDescription:
      'Audience measurement when used (via Google Tag Manager) and automatic display of the Calendly booking calendar, which sets its own performance cookies.',
    marketing: 'Marketing',
    marketingDescription:
      'Tracking of our advertising campaigns: Meta Pixel, LinkedIn Insight and advertising tags loaded via Google Tag Manager.',
    refuseAll: 'Reject all',
    acceptAll: 'Accept all',
    save: 'Save my choices',
    close: 'Close',
  },
};
