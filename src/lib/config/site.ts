import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'bnei.dev',
  title: 'Bnei',
  subtitle: 'Developper, DevOps, Speaker',
  lang: 'fr-FR',
  descr: 'Blog & Portfolio | Mohammad-Amine BANAEI | Developper, DevOps, Teacher',
  author: {
    name: 'Mohammad-Amine BANAEI',
    photo: '/assets/maskable@512.png',
    status: '🧑🏻‍💻',
    bio: "Young independent developper, i have a passion for computers. I have acquired strong knowledge in fullstack and devops development. Since I graduated, i started teaching microservices' concepts and performance testing in multiple french schools. I enjoy traveling, boxing and reading."
  },
  themeColor: '#3D4451'
}

export const dev: boolean = import.meta.env.DEV ? true : false
