const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/titusdishon/',
  title: 'Fullstack web developer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Titus Mutiso Dishon',
  role: 'Fullstack Software Engineer',
  description:
    'Over the past 4+ years I have been developing software solutions for both co-orporate and startup companies. I have gained advanced skills in both frontend and backend development. I have worked In several industries including  Fintech, Transport and Logistics and I am now a working in the supply chain management system development.  I love learning and growing my technical skills. ',
  resume: 'https://titusdishon.com/TITUS_DISHON_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/titusdishon/',
    github: 'https://github.com/titusdishon/',
  },
}

const projects = [
  {
    name: 'Go ambassador',
    description:
      'A proof of concept marketting system that can be adapted by an business framework.',
    stack: ['Golang', 'Mysql', 'Docker', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/titusdishon/go-shopping-app',
    livePreview: 'Work In Progress',
  },
  {
    name: 'Ecommerce with MERN Stack',
    description:
      'An ecommerce website build with MERN stack, Allows for products setup and system administration ',
    stack: ['MERN STACK'],
    sourceCode: 'https://github.com/titusdishon/shoply-frontend',
    livePreview: 'No live preview',
  },
  {
    name: 'React Boiler Plate',
    description:
      'A boiler template that can be used for any react project setup',
    stack: ['React', 'TypeScript', 'Redux', 'Material Ui'],
    sourceCode: 'https://github.com/titusdishon/boilerplate',
    livePreview: 'Awesome One',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Golang',
  'Docker',
  'Mysql',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'React Testing Library',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'titusdishon@gmail.com',
}

export { header, about, projects, skills, contact }
