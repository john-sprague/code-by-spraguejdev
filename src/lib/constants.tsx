interface NavItem {
  pageName: string;
  pagePath: string;
}

export const NavItems: NavItem[] = [
  { pageName: "Home", pagePath: "/" },
  { pageName: "Skills", pagePath: "/skills" },
  { pageName: "My Journey", pagePath: "/my-journey" },
  { pageName: "Projects", pagePath: "/projects" },
  { pageName: "Get In Touch", pagePath: "/get-in-touch" },
];
