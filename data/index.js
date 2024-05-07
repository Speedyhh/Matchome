import logoDark from "@/images/logo.png";
import logoTim from "@/images/logo-tim.png";

export const Logo = {
  dark: logoDark
};

export const NavLinksData = [
  {
    name: "Home",
    url: "/#",

  },
  {
    name: "Luce",
    url: "/tim-details"
  },
  {
    name: "Gas",
    url: "/tim-details"
   
  },
  {
    name: "ADSL e Fibra",
    url: "/tim-details"
   
  },
  {
    name: "Mobile",
    url: "/tim-details"
   
  },
  {
    name: "Sicurezza",
    url: "/tim-details"
   
  },
  
  
 
];

export const TopbarInfos = [


  {
    icon: "fa fa-envelope",
    tagLine: "placeholder@mail.com",
    
    url: "#"
  }
];


import slideOneImage2 from "@/images/slider/slider-2.jpg";


export const SlideOneData = [
  {
    backgroundImage: slideOneImage2,
    title: "Selezioniamo le Migliori Proposte per le tue utilities e la tua casa.",
    text: "Compariamo noi per te",
    button: "SCOPRI DI PIU'",
    url:"#feature"
    
  },

];



export const FeatureOneData = [
  {
    icon: "fa fa-lightbulb-o",
    title: "Luce",
    url: "/service-details",
    text: "Risparmia sulla bolletta "
  },
  {
    icon: "fa fa-fire",
    title: "Gas",
    url: "/service-details",
    text: " Taglia sulla bolletta"
  },

  {
    icon: "fa fa-globe",
    title: "ADSL e Fibra",
    url: "/service-details",
    text: "Naviga veloce e a prezzi bassi"
  },
  {
    icon: "fa fa-mobile",
    title: "Mobile",
    url: "/service-details",
    text: "Offerta del momento"
  },
  {
    icon: "icon-mechanic",
    title: "Sicurezza",
    url: "/service-details",
    text: "Proteggi la tua casa"
  }
];

export const AboutOneData = {
  title: "La vetrina dove noi selezioniamo per te.",
  tagLine: "Benvenuti in MATCHOME",
  content:
    "Un MATCH tra maggior risparmio e soddisfazione clienti. Le nostre proposte nascono da un’attenta analisi del mercato. Ogni mese troverai un’unica offerta per ogni settore. Il miglior pacchetto possibile, che soddisfi le esigenze delle tue tasche e della tua casa.",
  button: {
    url: "#feature",
    label: "SCOPRI DIÙ"
  }
};

import ecoSolar from "@/images/services/ecoSolar.jpeg";
import timBusiness from "@/images/services/timBusiness.png";
import linear from "@/images/services/linear.jpg";

export const ServiceOneData = {
  title: "In Evidenza",
  posts: [
    {
      image: ecoSolar,
      icon: "fa fa-sun-o",
      title: "E.ON EcoSolar Plus",

      text: "Impianto fotovoltaico con sistema di accumulo ancora più convenienti  ",
      price:"a partire da 8.940€.",
      button: {
        label: "RICHIEDI INFO",
        url: "/"
      }
    },
    {
      image: timBusiness,
      icon: "fa fa-mobile",
      title: "TIM BUSINESS",
      text: "Rispondi al fisso ovunque, anche dal tuo smartphone.  Attivazione gratuita  ",
      price:"Tua da 10€/mese.",
      button: {
        label: "RICHIEDI INFO",
        url: "/"
      }
    },
    {
      image: linear,
      icon: "fa fa-university",
      title: "Linear Assicurazioni",
      text: "Assicurazione casa e famiglia, richiedi ora più informazioni",
      price:"A partire da soli 71 Euro.",
      button: {
        label: "RICHIEDI INFO",
        url: "/"
      }
    },
   
  ]
};

export const CallToActionOneData = {
  title: "NON PERDERE TEMPO, SCEGLI L'OFFERTA ",
  button: {
    url: "#feature",
    label: "Scopri di più"
  }
};

export const CallToActionTwoData = {
  left: {
    text: "Air Conditioning Services",
    title: "Cool it down"
  },
  right: {
    text: "Heating Services",
    title: "Heat it up"
  }
};

import funfactShape from "@/images/shape/about-shape.png";

export const FunfactOneData = {
  shapeImage: funfactShape,
  title: "Numbers Speakers.",
  posts: [
    {
      count: 8870,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 4760,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 9032,
      text: "Air Conditioning Repairs and Install"
    }
  ]
};





export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-instagram",
      url: "#"
    },
    {
      icon: "fa fa-facebook-f",
      url: "#"
    },
 
   
  ]
};

export const FooterInfo = [
  {
 
  },
  {
    icon: "icon-contact",
    tagLine: "Email",
    text: "help@Matchome.com",
    url: "mailto:help@Matchome.com"
  },
  {
   
  }
];

export const FooterWidgets = {
  about: {
    title: "About Matchome",
    text: "Selezioniamo le Migliori Proposte per le tue utilities e la tua casa",
  
  },
  linkOne: {
    title: "Scopri le Offerte",
    menu: [
      {
        lable: "Luce",
        url: "/tim-details"
      },
      {
        lable: "Gas",
        url: "/tim-details"
      },
      {
        lable: "ADSL e Fibra",
        url: "/tim-details"
      },
      {
        lable: "Mobile",
        url: "/tim-details"
      },
      {
        lable: "Sicurezza",
        url: "/tim-details"
      }
    ]
  },
  linkTwo: {

    menu: [
      {
        lable: "Cookie Policy",
        url: "/Cookie"
      },
      {
        lable: "Privacy Policy",
        url: "/Privacy"
      },
 
    ]
  }
};






export const TimSidebarListData = [
  {
    icon: "icon-snow",
    title: "Cooling Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  },
  {
    icon: "icon-fire",
    title: "Heating Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  }
];

export const TimSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Contact with us </span>666 888 000"
    }
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Contact with us </span>666 888 000"
    }
  }
];



