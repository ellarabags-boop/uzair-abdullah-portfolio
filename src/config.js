// Edit this file to update personal details and links. Empty links render as a disabled "coming soon" button.
export const profile = {
  name: 'Uzair Abdullah',
  role: 'MERN Stack Developer',
  email: 'uzairabbott02@gmail.com',
  phone: '0336-9576669',
  phoneHref: '+923369576669',
  location: 'Abbottabad, Pakistan',
  cv: '/Uzair_Abdullah_CV.pdf',
  links: {
    github: '', // e.g. 'https://github.com/your-username'
    linkedin: 'https://www.linkedin.com/in/uzair-abbott-a65151301/',
  },
};

export const skills = [
  { name: 'HTML5', mark: 'H5', text: 'Semantic, accessible page structure.' },
  { name: 'CSS3', mark: 'C3', text: 'Responsive layouts with Flexbox and Grid.' },
  { name: 'JavaScript', mark: 'JS', text: 'ES6+ for interactive, dynamic interfaces.' },
  { name: 'React.js', mark: 'Re', text: 'Reusable components and state management.' },
  { name: 'REST API Integration', mark: 'API', text: 'Connecting frontends to backend services.' },
  { name: 'Git', mark: 'Git', text: 'Version control for a clean daily workflow.' },
  { name: 'GitHub', mark: 'GH', text: 'Code hosting and collaboration.' },
];
export const extraSkills = ['AutoCAD', 'SketchUp', 'Civil 3D'];

export const project = {
  name: 'ArchLink Pakistan',
  url: 'https://archlinkpakistan.netlify.app/',
  purpose:
    'ArchLink Pakistan is an architecture and construction services marketplace that helps clients discover professionals, compare services and explore project portfolios in one place.',
  stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  features: [
    'User registration and secure login',
    'Architect and service provider profiles',
    'Service listings with detailed service views',
    'Search and filtering by keyword, city and category',
    'Client inquiry and booking request forms',
    'Provider dashboard to manage service listings',
    'Admin panel',
    'MongoDB database integration',
  ],
  deploy: 'React frontend on Netlify, Express API on Render, database on MongoDB Atlas.',
  shots: [
    { src: '/images/archlink-home.webp', alt: 'ArchLink Pakistan home page with service search', caption: 'Home: search services by keyword and city' },
    { src: '/images/archlink-services.webp', alt: 'ArchLink Pakistan services page with search and filters', caption: 'Services: listings with search, city and category filters' },
    { src: '/images/archlink-about.webp', alt: 'ArchLink Pakistan about page', caption: 'About: how the marketplace works' },
  ],
};

export const education = [
  { title: 'Web Development', place: 'Bano Qabil Institute, Abbottabad', note: 'Currently studying' },
  { title: 'AutoCAD Diploma (6 months)', place: 'Institute of Computer & IT Training, Abbottabad', note: '2025' },
  { title: 'Matriculation (Science)', place: '', note: '2024' },
];

export const experience = {
  role: 'AutoCAD Draftsman',
  company: 'Architive Associates, Abbottabad',
  period: '2025 – Present',
  points: [
    'Prepare architectural drawings, floor plans, elevations and precise 2D drafts using AutoCAD.',
    'Support drawing production according to project specifications while keeping a high level of technical detail.',
    'Use Civil 3D and related CAD tools to assist with site layouts and project-support deliverables.',
  ],
};
