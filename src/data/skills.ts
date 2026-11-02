export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Разметка и стили',
    items: ['HTML5', 'CSS3', 'SCSS', 'БЭМ', 'Адаптивная вёрстка'],
  },
  {
    title: 'Инструменты',
    items: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
  {
    title: 'Изучаю',
    items: ['Astro.js', 'Vue.js', 'TypeScript'],
  },
];