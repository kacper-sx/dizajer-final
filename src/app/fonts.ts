import { Karla, Prompt } from 'next/font/google'

export const karla = Karla({
  subsets: ['latin-ext'],
  variable: '--font-karla',
})
export const prompt = Prompt({
  subsets: ['latin-ext'],
  variable: '--font-prompt',
  weight: ['400', '900'],
})
