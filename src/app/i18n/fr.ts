// Textes français du site. `en.ts` doit suivre exactement la même structure.
export const fr = {
  routes: {
    home: '/',
    legal: '/mentions-legales',
    privacy: '/politique-confidentialite',
  },

  languageSwitcher: 'Choix de la langue',

  nav: {
    tagline: 'Agence créative',
    menu: 'Menu',
    videos: 'Nos vidéos',
    offers: 'Nos offres',
    reviews: 'Vos avis',
    book: 'Prendre RDV',
  },

  hero: {
    title:
      'Des <span class="highlighted">vidéos</span> ultracaptivantes pour séduire votre <span class="highlighted">audience.</span>',
    description:
      'Podcasts, <span class="bolded">vidéos promotionnelles</span> ou motion design, nous sommes à vos côtés à chaque étape de votre projet, jusqu\'à ce que vous soyez <span class="bolded">100% satisfait.</span>',
    cta: 'Prendre rendez-vous',
    videoCaption: 'Découvrez notre agence en vidéo',
    videoTitle: 'Vidéo de présentation de nos services',
  },

  promise: {
    revisions: 'Modifications illimitées',
    noCommitment: 'Sans engagement',
    allInclusive: 'On s’occupe de tout',
  },

  videos: {
    title: (year: number) =>
      `Votre partenaire vidéo le plus <span class="highlighted">innovant</span> pour ${year}`,
    iframeTitle: (category: string) => `Vidéo ${category}`,
  },

  logoAlt: (name: string) => `Logo ${name}`,

  steps: {
    title:
      'Le plan d’action pour obtenir des <span class="highlighted">résultats</span>',
    strategy: {
      title: 'Stratégie',
      description:
        'Nous élaborons ensemble le script de votre vidéo via un document partagé.',
    },
    storyboard: {
      title: 'Storyboard',
      description:
        'Nous vous proposons un storyboard avant de lancer la production.',
    },
    production: {
      title: 'Production',
      description:
        'Nous réalisons la vidéo et vous proposons une première version.',
    },
    feedback: {
      title: 'Feedback',
      description: "Retours illimités jusqu'à satisfaction.",
    },
  },

  offers: {
    title:
      'La <span class="highlighted">performance</span> des grandes agences, à des prix abordables',
    popular: 'Populaire',
    cta: 'En savoir plus',
    notIncluded: 'Non inclus :',
    podcast: {
      title: 'Pack Podcast',
      description:
        'Vous souhaitez parler à votre audience ? <br />Venez réaliser une interview dans nos studios !',
      videos: (count: number) => `pack ${count} vidéos`,
      features: (count: number) => [
        'Analyse des thématiques virales pour votre secteur',
        'Rédaction en collaboration des sujets abordés',
        'Aménagement du studio selon vos goûts',
        `Production complète de ${count} vidéos`,
        'Modifications illimitées',
        'Optimisation à 100% pour performer',
        'Analyse des résultats',
        '5 vidéos motion design',
      ],
    },
    motion: {
      title: 'Pack Motion Design',
      description:
        'Idéal pour une vidéo de présentation d’entreprise ou d’une nouvelle offre',
      videos: (seconds: number) => `video ${seconds} secondes`,
      features: (seconds: number) => [
        `${seconds} secondes de vidéo motion design`,
        'Écriture du script',
        'Storyboard / Illustrations',
        'Voix off / Sound Design',
        'Modifications illimitées',
        '3 formats déclinés',
        'Sous-titres',
        'Plusieurs langues',
      ],
    },
  },

  testimonials: {
    title: 'Ils nous ont fait <span class="highlighted">confiance</span>',
    titleMobile:
      'Ils nous ont <br />fait <span class="highlighted">confiance</span>',
    showMore: 'Voir plus',
    showLess: 'Voir moins',
    caisseEpargne: {
      name: 'Chargé de projet',
      title: 'Caisse d’Épargne',
      feedback:
        '“Merci pour cette prestation. Le contact a été très fluide, l’équipe autonome et le résultat est très satisfaisant !”',
    },
    sneakmart: {
      name: 'Anthony Debrant',
      title: 'CEO Sneakmart',
      feedback:
        '“Exceptionnelles ces vidéos !! J’avais besoin de vidéos podcast pour alimenter le compte Instagram de Sneakmart... + d’1 million de vues en 6 vidéos !”',
    },
    arcachon: {
      name: 'Service Communication',
      title: 'Mairie d’Arcachon',
      feedback:
        '“À l’écoute, réactif et force de proposition, Robin a réalisé des vidéos très grande qualité. Merci !”',
    },
    danone: {
      name: 'Chargée de production',
      title: 'Danone',
      feedback:
        '“Cette petite publicité a été remarquable ! Félicitations pour cette éfficacité ! Au plaisir de travailler ensemble sur un prochain projet. ”',
    },
    docaposte: {
      name: 'Philippe D.',
      title: 'Docaposte',
      feedback:
        '“Le service de Podcast a porté ses fruits ! Merci à toute l’équipe Ondeo pour votre efficacité et pour votre professionnalisme”',
    },
    frenchMed: {
      name: 'Community Manager',
      title: 'French-Med',
      feedback:
        '“Nous avons adoré travailler avec Adam et nous avons actuellement économisé en passant avec eux.”',
    },
    thatsYMedia: {
      name: 'Nathanaël Chouraki',
      title: 'Founder That’s Y Media',
      feedback:
        "“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l'espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”",
    },
    carlsberg: {
      name: 'Chargé de projet',
      title: 'Carlsberg',
      feedback:
        '“Process de production très bien organisé et livraison rapide, je recommande et nous travaillerons sûrement de nouveau ensemble”',
    },
    wagmiTrends: {
      name: 'Marine Adatto',
      title: 'CEO Wagmi-Trends',
      feedback:
        '“Je travaille depuis un moment avec Robin, très professionnel, pour les formats podcast, il monte le set, gère absolument tout et m’envoie les vidéos en un temps record.”',
    },
    skillsPlace: {
      name: 'Benjamin Catellier',
      title: 'CEO Skills Place',
      feedback:
        '“La collaboration avec Adam a eté plus que parfaite, vous ne trouverez pas meilleur motion designer !”',
    },
    storyW: {
      name: 'Adeline Percept',
      title: 'Story W',
      feedback:
        '“Exceptionnel ! Le montage vidéo est au-delà de mes attentes. Le talent et le professionnalisme de l’équipe a donné vie à mon projet de manière spectaculaire”',
    },
    powellSoftware: {
      name: 'Marketing et Communication',
      title: 'Powell Software',
      feedback:
        '“Super expérience avec Adam, il a été très professionnel, très réactif, je recommande ! Merci”',
    },
  },

  faq: {
    title: 'Les <span class="highlighted">réponses</span> à vos questions',
    titleMobile:
      'Les <span class="highlighted">réponses</span> <br />à vos questions',
    items: [
      {
        question: 'Pourquoi nous et pas une autre agence ?',
        answer:
          "Plus de 20 millions de vues. Plus de 20 vidéos produites par semaine. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu'il se fait de mieux. ",
      },
      {
        question: 'Ça va vraiment m’être utile ?',
        answer:
          'Aujourd’hui, impossible de vouloir se développer sans vidéo. C’est un levier essentiel pour gagner en visibilité et ainsi en CA. ',
      },
      {
        question: 'Faut-il s’engager sur plusieurs mois ?',
        answer:
          'Aucune obligation d’engagement. En revanche pour une stratégie sur les réseaux sociaux, nous recommandons d’avoir une présence quotidienne pendant plusieurs mois.',
      },
      {
        question: 'Quelles sont vos conditions de paiement ?',
        answer:
          'Lien Stripe pour un paiement sécurisé. Nous offrons des réductions en cas de commandes répétées.',
      },
      {
        question: 'Quels sont vos délais de livraison  ?',
        answer:
          'Ça dépend de la durée et de la complexité du projet. Nous sommes en moyenne sur un délai de 30 jours. Dans certaines conditions, nous proposons aussi des livraisons express. ',
      },
    ],
  },

  contact: {
    title: 'Vous voulez en discuter ?',
    description:
      'Rien de plus simple : remplissez simplement quelques informations sur vous et nous vous recontacterons selon vos disponibilités pour définir ensemble le message, la durée et la deadline du projet vidéo.<br /><br />Alors, prêt à donner vie à votre projet ?',
    stepSlot: 'Choisissez un créneau',
    stepTalk: 'On discute de votre projet',
    stepProduction: 'On lance la production',
    calendarNotice:
      'Le calendrier de prise de rendez-vous est fourni par Calendly, qui dépose ses propres cookies. Il s’affiche à votre demande.',
    showCalendar: 'Afficher le calendrier',
    followUs: 'Rejoignez - nous',
  },

  footer: {
    rights: (year: number) => `${year} - Ondeo. Tous droits réservés.`,
    legalNav: 'Informations légales',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    cookies: 'Gestion des cookies',
  },

  cookies: {
    banner:
      'Nous utilisons des cookies et traceurs pour mesurer l’audience du site et suivre nos campagnes publicitaires. Vous pouvez les accepter, les refuser ou personnaliser votre choix, et le modifier à tout moment via « Gestion des cookies » en bas de page.',
    learnMore: 'En savoir plus',
    refuse: 'Refuser',
    accept: 'Accepter',
    customize: 'Personnaliser',
    panelTitle: 'Gestion des <span class="highlighted">cookies</span>',
    panelIntro:
      'Choisissez les catégories de cookies et traceurs que vous autorisez. Votre choix est conservé 6 mois.',
    necessary: 'Nécessaires (toujours actifs)',
    necessaryDescription:
      'Fonctionnement du site, mémorisation de votre choix et lecture des vidéos Vimeo, intégrées avec l’option « Do Not Track ».',
    statistics: 'Statistiques',
    statisticsDescription:
      'Mesure d’audience lorsqu’elle est utilisée (via Google Tag Manager) et affichage automatique du calendrier de rendez-vous Calendly, qui dépose ses propres cookies de performance.',
    marketing: 'Marketing',
    marketingDescription:
      'Suivi de nos campagnes publicitaires : Meta Pixel, LinkedIn Insight et balises publicitaires chargées via Google Tag Manager.',
    refuseAll: 'Tout refuser',
    acceptAll: 'Tout accepter',
    save: 'Enregistrer mes choix',
    close: 'Fermer',
  },
};

export type Translations = typeof fr;
