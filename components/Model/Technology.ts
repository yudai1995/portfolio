export class Technology {
  constructor(public id: number, public name: string) {}
}

export const technology = [
  'HTML',
  'CSS',
  'Sass',
  'JavaScript',
  'TypeScript',
  'Three.js',
  'React',
  'Next.js',
  'Redux',
  'Node.js',
  'Express',
  'MySQL',
  'Socket.IO',
  'Tailwind CSS',
  'MongoDB',
  'Vue.js',
];

export const technologyList = technology.map(
  (tec, index) => new Technology(index, tec)
);
