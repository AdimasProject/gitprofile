// gitprofile.config.js

const config = {
  github: {
    username: 'AdimasProject', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 100, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: 'adimas.shadoet123',
    instagram: 'adimasproject',
    dribbble: 'AdimasProject',
    behance: '',
    medium: 'adimas.prakoso8',
    dev: '',
    stackoverflow: '20495959/adimas', // format: userid/username
    website: 'https://adimas.github.io',
    phone: '+6281291410009',
    email: 'adimasproject.api@gmail.com',
  },
  resume: {
    fileUrl: 'https://api.adimas.github.io', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Html',
    'JavaScript',
    'Python',
    'Node.js',
    'MySQL',
    'Git',
    'CSS'
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  education: [
    {
      institution: 'YOUTUBE',
      degree: '80%',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'GITHUB',
      degree: '90%',
      from: '2020',
      to: '2022',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-FNLWCV1BMG', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'fantasy',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
