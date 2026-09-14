export const profile = {
  name: 'Hovsep Hunanyan',
  email: 'hoso9266@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/Hovsep9266', icon: 'github' },
    { label: 'Telegram', url: 'https://t.me/+37498259881', icon: 'telegram' },
  ],
  skills: [
    { name: 'HTML / CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'Git', level: 85 },
  ],
  projects: [
    {
      id: 'films',
      title: 'Hunanyans Films',
      image: '/projects/films.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://hunanyans-films.netlify.app/',
      github: 'https://github.com/Hovsep9266/Hunanyan',
    },
    {
      id: 'forthub',
      title: 'Fort Hub',
      image: '/projects/forthub.png',
      tags: ['React', 'API'],
      url: 'https://fort-hub.netlify.app',
      github: 'https://github.com/Hovsep9266/fortnite',
    },
    {
      id: 'taskflow',
      title: 'TaskFlow',
      image: '/projects/taskflow.png',
      tags: ['React', 'LocalStorage'],
      url: 'https://taskflow-the-app.netlify.app/',
      github: 'https://github.com/Hovsep9266/taskflow-the-app',
    },
  ],
}

export const navLinks = [
  { id: 'hero', key: 'hero' },
  { id: 'about', key: 'about' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' },
]

export function getEmailComposeUrl(email) {
  if (email.endsWith('@gmail.com')) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
  }
  return `mailto:${email}`
}
