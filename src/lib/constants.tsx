interface NavItem {
  pageName: string;
  pagePath: string;
}

export const NavItems: NavItem[] = [
  { pageName: "Home", pagePath: "/" },
  { pageName: "Skills", pagePath: "/skills" },
  { pageName: "About Me", pagePath: "/about-me" },
  { pageName: "Projects", pagePath: "/projects" },
  { pageName: "Contact Me", pagePath: "/contact" },
];
