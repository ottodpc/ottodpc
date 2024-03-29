const filesSrcPrefix = process.env.NODE_ENV === 'development' ? '' : '/ottodpc';
export const CONSTANTES = {
  githubPage: 'https://ottodpc.github.io/ottodpc/',
  name: 'OTTO Cyprien',
  job: 'Cloud Engineer DevOps & Application Designer Developer',
  rythme: '',
  FILES_SRC: {
    favicon: filesSrcPrefix + '/favicon.ico',
    avatar: filesSrcPrefix + '/avatar@2x.png',
    email: filesSrcPrefix + '/email.svg',
    phone: filesSrcPrefix + '/phone.svg',
    address: filesSrcPrefix + '/address.svg',
  },
  colors: {
    white: '#fff',
    dimgray: {
      100: '#686868',
      200: '#5e5e5e',
      300: '#555',
      400: '#525252',
    },
    black: '#000',
    darkblue: '#002abc',
    gainsboro: '#e3e3e3',
    darkgray: '#9ba1ab',
  },
  fontFamily: {
    montserrat: 'Montserrat',
    unna: 'Unna',
  },
  borderRadius: {
    '8xs': '5px',
    '10xs-6': '2.6px',
    '10xs-9': '2.9px',
  },
  fontSize: {
    '4xs': '0.56rem',
    '6xs': '0.44rem',
    '5xs': '0.5rem',
    base: '1rem',
    xs: '0.75rem',
    '5xs-5': '0.47rem',
    '6xs-5': '0.41rem',
    '3xs': '0.63rem',
    '2xs': '0.69rem',
  },
  COMPETENCES: [
    {
      theme: 'Techniques',
      competences: [
        'TypeScript',
        'MongoDB',
        'JavaScript',
        'Docker',
        'Symfony',
        'Kubernetes',
        'Ansible',
        'Git',
        'Rust',
        'React',
        'Redis',
        'PostgreSQL',
        'NodeJS',
        'MongoDB',
        'PHP',
      ],
    },
    {
      theme: 'Professionnelles',
      competences: [
        'Communication avec clarté',
        'Empathie',
        'Adaptation au changement',
        'Leadership',
      ],
    },
    {
      theme: 'Autres',
      competences: ['Méthodologie Agile : SCRUM / Kanban'],
    },
  ],
  LANGUES: [
    {
      percent: 100,
      langue: 'Français',
    },
    {
      percent: 75,
      langue: 'Anglais',
    },
    {
      percent: 100,
      langue: 'Sango',
    },
  ],
  HOBBIES: [
    {
      percent: 100,
      name: 'Cuisine',
      icon: '👨🏿‍🍳',
    },
    {
      percent: 100,
      name: 'Course à pied',
      icon: '🏃🏿‍♂️',
    },
    {
      percent: 100,
      name: 'Danse',
      icon: '🕺🏿',
    },
    {
      percent: 100,
      name: 'Football',
      icon: '⚽️',
    },
    {
      percent: 100,
      name: "Tech's News",
      icon: '💻',
    },
    {
      percent: 100,
      name: 'Jeux vidéo',
      icon: '🎮',
    },
  ],
  EDUCATION: [
    {
      link: 'https://cfa-insta.fr/',
      date: 'Septembre 2022 - Juillet 2023',
      company: 'CFA INSTA',
      position: 'Concepteur Développeur d’application, Bac +3',
      descriptionText: [],
      competences: [],
      rythme: '',
    },
    {
      link: 'https://www.doranco.fr/',
      date: 'Septembre 2020 - Mai 2021',
      company: 'Doranco - École Supérieur des technologies',
      position: 'Technicien supérieur système et réseaux, Bac+2',
      descriptionText: [],
      competences: [],
      rythme: '',
    },
  ],
  EXPERIENCES: [
    {
      date: '8 mai 2022 - 27 juin 2023',
      type: 'Alternance',
      company: 'NV GALLERY',
      link: 'https://www.nvgallery.com/',
      position: 'Software Engineer Full-Stack Symfony / React',
      descriptionText: [
        "Développement de nouvelles fonctionnalités sur l'application",
        'Maintenance applicative',
        'Diagnostiquer et correction des bugs',
      ],
      competences: [
        'Docker Compose',
        'Symfony',
        'Kubernetes',
        'React.js',
        'Twig',
        'TypeScript',
        'JavaScript',
        'PHP',
        'MySQL',
        'Docker',
        'CI/CD',
        'A/B Testing',
        'HTML/CSS',
      ],
    },
    {
      date: 'Octobre 2021 - 2 janvier 2023',
      company: 'ALKWELO',
      link: 'https://alkwelo.app/',
      type: 'Indenpendant',
      position: 'Ingénierie DevOps & Développemenet Full-Stack React / Node.js',
      descriptionText: [
        "Développement de nouvelles fonctionnalités sur l'application web & mobile",
        'Maintenance applicative web & mobile',
        'Diagnostiquer et correction des bugs',
      ],
      competences: [
        'React Native',
        'MongoDB',
        'Nginx',
        'Redis',
        'Next.js',
        'Docker',
        'CI/CD',
        'Kubernetes',
        'React.js',
        'TypeScript',
        'Rust',
        'HTML/CSS',
      ],
    },
    {
      date: 'Janvier 2021 - Juin 2022',
      link: 'https://jeconsommenoir.com/',
      company: 'JeConsommeNoir.com',
      type: 'Bénévolat',
      position: 'Développeur Full-Stack React / PHP - Node.js',
      descriptionText: [
        'Développement du site',
        'Développement du back-office',
      ],
      competences: [
        'React.js',
        'PHP',
        'CI/CD',
        'React.js',
        'TypeScript',
        'Next.js',
        'HTML/CSS',
      ],
    },
    {
      date: 'Octobre 2021 - mai 2022',
      link: 'https://www.savane-mousson.fr/',
      company: 'Savane & Mousson',
      type: 'Indenpendant',
      position: 'Développeur WordPress',
      descriptionText: ['Développement du site'],
      competences: ['WordPress', 'HTML/CSS', 'PHP', 'JavaScript'],
    },
  ],
};
