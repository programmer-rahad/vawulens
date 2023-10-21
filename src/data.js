import { SiOpenaigym } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Program One",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Program Two",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Program Three",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Program Four",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

 

export const trainers = [
  {
    id: 1,
    image: require("./images/trainer1.jpg"),
    name: "John Doe",
    job: "Aerobic Trainer", 
    socials: [
      {
        link: "https://instagram.com/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/",
        icon: <AiOutlineTwitter />,
      },
      {
        link: "https://facebook.com/",
        icon: <FaFacebookF />,
      },

      {
        link: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 2,
    image: require("./images/trainer2.jpg"),
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      {
        link: "https://instagram.com/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/",
        icon: <AiOutlineTwitter />,
      },
      {
        link: "https://facebook.com/",
        icon: <FaFacebookF />,
      },

      {
        link: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ]
  },
  {
    id: 3,
    image: require("./images/trainer3.jpg"),
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      {
        link: "https://instagram.com/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/",
        icon: <AiOutlineTwitter />,
      },
      {
        link: "https://facebook.com/",
        icon: <FaFacebookF />,
      },

      {
        link: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ]
  },
  {
    id: 4,
    image: require("./images/trainer4.jpg"),
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      {
        link: "https://instagram.com/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/",
        icon: <AiOutlineTwitter />,
      },
      {
        link: "https://facebook.com/",
        icon: <FaFacebookF />,
      },

      {
        link: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ]
  },
  {
    id: 5,
    image: require("./images/trainer5.jpg"),
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      {
        link: "https://instagram.com/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/",
        icon: <AiOutlineTwitter />,
      },
      {
        link: "https://facebook.com/",
        icon: <FaFacebookF />,
      },

      {
        link: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ]
  },
  {
    id: 6,
    image: require("./images/trainer6.jpg"),
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      {
        link: "https://instagram.com/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/",
        icon: <AiOutlineTwitter />,
      },
      {
        link: "https://facebook.com/",
        icon: <FaFacebookF />,
      },

      {
        link: "https://linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ]
  },
];
