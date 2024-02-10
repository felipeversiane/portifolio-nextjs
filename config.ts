import {Pathnames} from 'next-intl/navigation';

export const locales = ['pt-BR', 'en-US'] as const;

export const pathnames = {
  '/': '/',
  '/projects': {
    'en-US': '/projects',
    'pt-BR': '/projetos'
  },
  '/tools': {
    'en-US': '/tools',
    'pt-BR': '/ferramentas'
  },
  '/aboutme': {
    'en-US': '/aboutme',
    'pt-BR': '/sobremim'
  },
  '/contact': {
    'en-US': '/contact',
    'pt-BR': '/contato'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;