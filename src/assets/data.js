import { MapPin, Phone, Mail } from "lucide-react";
import {
  doct1,
  doct2,
  doct3,
  doct4,
  doct5,
  specialities2,
  specialities3,
  specialities4,
  specialities5,
} from "./images";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
} from "./images";

export const navLinks = [
  {
    name: "Doctors",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const footerLinks = [
  {
    title: "Categories",
    links: [
      {
        name: "Baby Essentials",
        link: "#",
      },
      {
        name: "Bag Emporium",
        link: "#",
      },
      {
        name: "Books",
        link: "/#",
      },
      {
        name: "Christmas",
        link: "/#",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Collections",
        link: "#",
      },
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Blog",
        link: "/#",
      },
      {
        name: "Offers",
        link: "/#",
      },
    ],
  },
  {
    title: "Help Center",
    links: [
      {
        name: "My Account",
        link: "#",
      },
      {
        name: "My Orders",
        link: "#",
      },
      {
        name: "Contact Us",
        link: "#",
      },
      {
        name: "Wishlist",
        link: "#",
      },
    ],
  },
  {
    title: "Store Information",
    links: [
      {
        name: "BerryCare Demo Store, Demo Store Pak 345-659",
        icon: MapPin,
        link: "#",
      },
      {
        name: "Call Us: 123-456-7898",
        icon: Phone,
        link: "#",
      },
      {
        name: "Support@BerryCare.com",
        icon: Mail,
        link: "#",
      },
    ],
  },
];



export const doctorsData = [
  {
    id: 1,
    name: "Prof. Dr. Saba Naeem",
    slug: "prof-dr-saba-naeem",
    description: "MDS - Periodontology and Oral Implantology, BDS",
    speciality: "Dentist",
    speciality_img: specialities5,
    next_available: "Available on Fri, 22 Mar",
    fee: 1000,
    lat: -33.847927,
    lng: 150.6517938,
    profileImage: doct1,
    clinicImages: [feature1, feature2, feature3, feature4, feature5, feature6],
    address: {
      city: "Lahore",
      province: "Punjab",
    },
    review: {
      rating: 4,
      review_count: 17,
    },
    likes: 12,
  },
  {
    id: 2,
    name: "Dr. Naveed Ahmed",
    slug: "dr-naveed-ahmed",
    description: "BDS, MDS - Oral & Maxillofacial Surgery",
    speciality: "Dentist",
    speciality_img: specialities5,
    next_available: "Available on Fri, 23 Mar",
    fee: 300,
    lat: -37.9722342,
    lng: 144.7729561,
    profileImage: doct2,
    clinicImages: [feature5, feature6, feature3, feature4],
    address: {
      city: "Quitta",
      province: "Balochistan",
    },
    review: {
      rating: 33,
      review_count: 14,
    },
    likes: 13,
  },
  {
    id: 3,
    name: "Dr. Sofia Brient",
    slug: "dr-sofia-brient",
    description: "MBBS, MD - General Medicine, DNB - Cardiology",
    speciality: "Cardiologist",
    speciality_img: specialities4,
    next_available: "Available on Fri, 24 Mar",
    fee: 400,
    lat: -31.9546904,
    lng: 112.8350292,
    profileImage: doct3,
    clinicImages: [feature1, feature2, feature3, feature4],
    address: {
      city: "Karachi",
      province: "Sindh",
    },
    review: {
      rating: 41,
      review_count: 15,
    },
    likes: 13,
  },
  {
    id: 4,
    name: "Dr. Murtaza Ahmed",
    slug: "dr-murtaza-ahmed",
    description: "MBBS, MS - General Surgery, MCh - Urology",
    speciality: "Urologist",
    speciality_img: specialities3,
    address: "Louisiana, USA",
    next_available: "Available on Fri, 25 Mar",
    fee: 250,
    lat: -32.9546904,
    lng: 115.8350292,
    profileImage: doct4,
    clinicImages: [feature1, feature2, feature3, feature4],
    address: {
      city: "Islamabad",
      province: "Capital Territory",
    },
    review: {
      rating: 4,
      review_count: 37,
    },
    likes: 22,
  },
  {
    id: 5,
    name: "Dr. Mehran Khan",
    slug: "dr-mehran-khan",
    description: "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
    speciality: "Orthopedic Surgeon",
    speciality_img: specialities2,
    next_available: "Available on Fri, 25 Mar",
    fee: 700,
    lat: -34.9546904,
    lng: 125.8650292,
    profileImage: doct5,
    clinicImages: [feature1, feature2, feature3, feature4],
    address: {
      city: "Peshawar",
      province: "KPK",
    },
    review: {
      rating: 33,
      review_count: 47,
    },
    likes: 32,
  },
];



export const availableTimings = [
  {
    slug: "prof-dr-saba-naeem",
    days: [
      {
        day: "Monday",
        slots: [
          { start: "4:00", end: "6:00" },
          { start: "6:00", end: "8:00" },
          { start: "8:00", end: "10:00" },
          { start: "10:00", end: "12:00" },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
          { start: "9:00", end: "10:00" },
          { start: "10:00", end: "11:00" },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Friday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      // {
      //   day: "Saturday",
      //   slots: [
      //     { start: "6:00", end: "7:00" },
      //     { start: "7:00", end: "8:00" },
      //     { start: "8:00", end: "9:00" },
      //   ],
      // },
      // {
      //   day: "Sunday",
      //   slots: [
      //     { start: "6:00", end: "7:00" },
      //     { start: "7:00", end: "8:00" },
      //     { start: "8:00", end: "9:00" },
      //   ],
      // },
      {
        day: "Monday",
        slots: [
          { start: "4:00", end: "6:00" },
          { start: "6:00", end: "8:00" },
          { start: "8:00", end: "10:00" },
          { start: "10:00", end: "12:00" },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
          { start: "9:00", end: "10:00" },
          { start: "10:00", end: "11:00" },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Friday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Saturday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
    //   {
    //     day: "Sunday",
    //     slots: [
    //       { start: "6:00", end: "7:00" },
    //       { start: "7:00", end: "8:00" },
    //       { start: "8:00", end: "9:00" },
    //     ],
    //   },
    ],
  },
  {
    slug: "dr-naveed-ahmed",
    days: [
      {
        day: "Monday",
        slots: [
          { start: "3:00", end: "6:00" },
          { start: "6:00", end: "8:00" },
          { start: "8:00", end: "10:00" },
          { start: "10:00", end: "12:00" },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
          { start: "9:00", end: "10:00" },
          { start: "10:00", end: "11:00" },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Friday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Saturday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Sunday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Monday",
        slots: [
          { start: "4:00", end: "6:00" },
          { start: "6:00", end: "8:00" },
          { start: "8:00", end: "10:00" },
          { start: "10:00", end: "12:00" },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
          { start: "9:00", end: "10:00" },
          { start: "10:00", end: "11:00" },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Friday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Saturday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
      {
        day: "Sunday",
        slots: [
          { start: "6:00", end: "7:00" },
          { start: "7:00", end: "8:00" },
          { start: "8:00", end: "9:00" },
        ],
      },
    ],
  },
];
