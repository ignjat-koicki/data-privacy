export class LangModel {
  Serbian: string = ''
  English: string = ''
  pages: RouteLink[] = []
  footer: Footer
  userPages: Pages[] = []
  pageTitles: PageTitles
}

export class PageTitles {
  [key: string]: {
    title: string
    description: string
  }
}

export class Footer {
  footerPages: FooterPages[] = []
}

export class FooterPages {
  name: string
  routes: RouteLink[] = []
}

export class RouteLink {
  route: string
  name: string
}

export class Pages {
  page: string
  title: string
  text: string[] = []
}
