import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'light',
    text: '🌕 Light'
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'emerald',
    text: '✳️ Emerald'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'halloween',
    text: '🎃 Halloween'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'winter',
    text: '❄️ Winter'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Projects',
      link: '/projects'
    },
    {
      text: 'About me',
      link: '/aboutme'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    },
    {
      text: 'Github',
      link: 'https://github.com/MohammadBnei',
      dataTip: '🗄 /MohammadBnei 🗄'
    },
    {
      text: 'Linkedin',
      link: 'https://www.linkedin.com/in/mbnei',
      dataTip: '🧳 /mbnei 🧳'
    }
  ]
}

export const date: DateConfig = {
  toPublishedString: {
    locales: 'en-GB',
    options: {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }
  },
  toUpdatedString: {
    locales: 'en-GB',
    options: {
      year: '2-digit',
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    }
  }
}

export const feed: FeedConfig = {}
