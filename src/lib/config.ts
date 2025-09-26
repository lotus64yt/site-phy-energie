export const siteConfig = {
  name: "Énergies de France",
  title: "Énergies de France - Chaînes d'Énergie",
  description: "Découvrez les chaînes d'énergie des principales sources d'électricité en France : nucléaire et hydroélectrique. Un site éducatif pour comprendre ces technologies.",
  url: "https://energies-france.fr",
  author: "Projet Éducatif",
  keywords: ["énergie", "nucléaire", "hydroélectrique", "électricité", "France", "physique", "éducation"],

  pages: [
    {
      title: "Accueil",
      href: "/",
      description: "Page d'accueil avec présentation des énergies"
    },
    {
      title: "Énergie Nucléaire",
      href: "/nucleaire",
      description: "Découvrez le fonctionnement des centrales nucléaires"
    },
    {
      title: "Énergie Hydroélectrique",
      href: "/hydroelectrique",
      description: "Comprenez les installations hydroélectriques"
    },
    {
      title: "Comparaison",
      href: "/comparaison",
      description: "Comparaison détaillée entre nucléaire et hydroélectrique"
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Page de contact"
    },
    {
      title: "À propos",
      href: "/about",
      description: "À propos du projet"
    },
    {
      title: "Documentation",
      href: "/documentation",
      description: "Documentation technique"
    },
    {
      title: "Glossaire",
      href: "/glossaire",
      description: "Glossaire des termes techniques"
    }
  ],

  nav: [
    {
      title: "Nucléaire",
      href: "/nucleaire",
      description: "Énergie nucléaire en France"
    },
    {
      title: "Hydroélectrique",
      href: "/hydroelectrique",
      description: "Énergie hydroélectrique en France"
    },
    {
      title: "Comparaison",
      href: "/comparaison",
      description: "Comparaison des deux technologies"
    }
  ],

  social: {
    github: "https://github.com/lotus64yt/site-phy-energie",
  },

  theme: {
    colors: {
      primary: "indigo",
      nuclear: "red",
      hydro: "blue",
      comparison: "purple",
      contact: "green",
      about: "orange",
      documentation: "blue",
      glossary: "pink"
    }
  },

  features: {
    animations: true,
    loadingScreen: true,
    responsiveDesign: true,
    darkMode: true,
    mobileMenu: true
  }
};

export default siteConfig;