export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: 'telegram' | 'github' | 'phone';
}

export const contacts: Contact[] = [
  {
    label: 'Telegram',
    value: '@Ka3Vladimir',
    href: 'https://t.me/Ka3Vladimir',
    icon: 'telegram',
  },
  {
    label: 'GitHub',
    value: 'VladimirKaz',
    href: 'https://github.com/VladimirKaz',
    icon: 'github',
  },
  {
    label: 'Телефон',
    value: '+7 (932) 200-18-19',
    href: 'tel:+79322001819',
    icon: 'phone',
  },
];