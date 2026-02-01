
import React from 'react';
import { SlideData, NewsItem, ReportItem, Project, Service, OfficeLocation, Partner } from './types';

export const ABOUT_STATS = [
  { label: "Founded", value: "2025", sub: "Established to meet the growing operational demands of Iraq's energy and industrial sectors." },
  { label: "Specialized Divisions", value: "04", sub: "Civil Construction, Marine Services, General Trading, and Oil & Gas Support." },
  { label: "Core Focus", value: "HSEQ", sub: "Maintaining strict adherence to Health, Safety, Environment, and Quality standards." },
  { label: "Headquarters", value: "Basra", sub: "Strategically located in Basra, Iraq to serve the regional industrial landscape." },
  { label: "Key Partnership", value: "Sika®", sub: "Authorized Agent and Local Representative for Sika® products in key projects." },
  { label: "Market Presence", value: "Global", sub: "Supported by a reliable global supplier network and cross-border sourcing capability." }
];

export const PROJECTS: Project[] = [
  {
    id: "al-faw-tunnel",
    title: "Al-Faw Immersed Tunnel",
    category: "CIVIL ENGINEERING",
    summary: "Authorized representative for Sika® products under the management of DAEWOO E&C.",
    image: "https://picsum.photos/id/110/1200/800?grayscale",
    description: [
      "Kumzar has been appointed as an Authorized Agent and Local Representative for Sika® products on a project-based scope within the Al-Faw Immersed Tunnel Project.",
      "The project is executed under the management of DAEWOO E&C, demonstrating our capability to support large-scale international infrastructure developments.",
      "Our role involves technical coordination and the supply of specialized construction materials to ensure the tunnel's structural integrity and longevity."
    ],
    stats: [
      { label: "Management", value: "DAEWOO E&C" },
      { label: "Key Partner", value: "Sika®" },
      { label: "Location", value: "Al-Faw, Iraq" }
    ]
  },
  {
    id: "ardh-al-multaqa-collab",
    title: "Strategic Logistics Hub",
    category: "LOGISTICS & SUPPORT",
    summary: "Collaboration with Ardh Al-Multaqa for large-scale infrastructure and logistics coordination.",
    image: "https://picsum.photos/id/111/1200/800?grayscale",
    description: [
      "Kumzar maintains a strategic working relationship with Ardh Al-Multaqa, a well-established Iraqi contracting company.",
      "This collaboration supports project execution through complementary capabilities, local market expertise, and operational coordination across Iraq.",
      "Together, we deliver integrated logistics and general contracting solutions for major energy sector clients."
    ],
    stats: [
      { label: "Partner", value: "Ardh Al-Multaqa" },
      { label: "Focus", value: "Logistics" },
      { label: "Reach", value: "Nationwide" }
    ]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "sika",
    name: "Sika®",
    role: "Authorized Agent & Representative",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Sika_Logo.svg/1200px-Sika_Logo.svg.png",
    image: "https://picsum.photos/id/190/1200/800?grayscale",
    description: [
      "Kumzar has been appointed as an Authorized Agent and Local Representative for Sika® products on a project-based scope within the Al-Faw Immersed Tunnel Project.",
      "This partnership allows us to provide world-class construction chemicals and technical expertise directly to Iraq's most ambitious infrastructure projects.",
      "The collaboration ensures that international standards of quality and material science are applied to local engineering challenges."
    ],
    collaborationDetails: "Authorized Representative for Sika® products in the Al-Faw Immersed Tunnel Project, executed under DAEWOO E&C management."
  },
  {
    id: "ardh-al-multaqa",
    name: "Ardh Al-Multaqa",
    role: "Contracting & Logistics Partner",
    logo: "https://picsum.photos/id/191/200/100?grayscale",
    image: "https://picsum.photos/id/192/1200/800?grayscale",
    description: [
      "Kumzar maintains a strategic working relationship with Ardh Al-Multaqa, a well-established Iraqi contracting company with extensive experience in logistics and large-scale infrastructure.",
      "This collaboration supports project execution through complementary capabilities, local market expertise, and operational coordination.",
      "Together, we bridge the gap between global standards and local execution, delivering seamless logistics solutions for the energy sector."
    ],
    collaborationDetails: "Joint operational coordination for logistics, general contracting, and infrastructure projects across Iraq."
  }
];

export const SERVICES: Service[] = [
  {
    id: "civil-construction",
    title: "Civil Engineering & Construction",
    summary: "Comprehensive construction solutions tailored for the oil & gas and industrial sectors.",
    image: "https://picsum.photos/id/120/1200/800?grayscale",
    description: [
      "From initial ground-breaking to final handover, our team ensures strict adherence to QA/QC and HSE standards.",
      "We specialize in site preparation, earthworks, and infrastructure development essential for the energy sector's growth in Iraq.",
      "Our services include the design and build of accommodation camps, site offices, and warehouses to support remote operations."
    ],
    features: [
      { title: "Site Preparation", text: "Excavation, leveling, grading, and soil stabilization for oil pads." },
      { title: "Infrastructure", text: "Construction of access roads, drainage systems, and concrete foundations." },
      { title: "Civil Maintenance", text: "Structural renovation, concrete repairs, and facility upgrades." }
    ]
  },
  {
    id: "marine-services",
    title: "Marine Services & Offshore Support",
    summary: "Bridging the logistical gap between land and sea operations for ports and offshore terminals.",
    image: "https://picsum.photos/id/121/1200/800?grayscale",
    description: [
      "Kumzar offering specialized marine solutions that support Iraq's vital port infrastructure and offshore terminals.",
      "We provide vessel chartering, marine logistics, and dredging services with a focus on operational safety and efficiency.",
      "Our team manages the safe transport of heavy equipment and personnel to offshore locations under challenging conditions."
    ],
    features: [
      { title: "Vessel Chartering", text: "Supply of tugs, barges, utility boats, and support vessels." },
      { title: "Port Support", text: "Stevedoring, cargo handling, jetty maintenance, and fenders supply." },
      { title: "Dredging", text: "Support for waterfront projects and channel maintenance." }
    ]
  },
  {
    id: "procurement-trading",
    title: "Procurement & General Trading",
    summary: "Leveraging a robust global supply chain to ensure timely supply of critical materials.",
    image: "https://picsum.photos/id/122/1200/800?grayscale",
    description: [
      "We ensure the cost-effective supply of critical materials to keep industrial operations running without interruption.",
      "Our global sourcing network allows us to provide specialized oilfield supplies and heavy machinery leasing.",
      "We provide MRO supplies and electrical instrumentation components for diverse industrial plants."
    ],
    features: [
      { title: "Heavy Equipment", text: "Leasing of Cranes, Excavators, Loaders, and Generators." },
      { title: "MRO Supplies", text: "Maintenance, Repair, and Operations consumables for industrial use." },
      { title: "Electrical & Instrumentation", text: "Supply of cables, panels, and control system components." }
    ]
  },
  {
    id: "logistics-support",
    title: "Support Services & Logistics",
    summary: "The essential backbone for project sites, handling day-to-day operations.",
    image: "https://picsum.photos/id/123/1200/800?grayscale",
    description: [
      "We provide integrated facility management and manpower supply that allow our clients to focus on their core technical operations.",
      "Our logistics team handles heavy haulage and personnel transport services across the region."
    ],
    // Added missing features property to fix error in line 129
    features: [
      { title: "Manpower", text: "Supply of skilled and semi-skilled personnel for various sectors." },
      { title: "Logistics", text: "Comprehensive transportation and warehouse management solutions." },
      { title: "Camp Services", text: "Full catering, cleaning, and maintenance for remote accommodation." }
    ]
  }
];

// Exporting missing constants to fix module errors in Hero.tsx, Home.tsx, WhatWeDo.tsx, NewsMedia.tsx, and ContactUs.tsx
export const SLIDES: SlideData[] = [
  {
    id: 1,
    label: "Multidisciplinary Excellence",
    headline: ["Building Iraq's", "Industrial Future"],
    image: "https://picsum.photos/id/124/1920/1080?grayscale",
    tabLabel: "Overview"
  },
  {
    id: 2,
    label: "Civil Engineering",
    headline: ["Advanced Construction", "Solutions for Energy"],
    image: "https://picsum.photos/id/125/1920/1080?grayscale",
    tabLabel: "Civil"
  },
  {
    id: 3,
    label: "Marine Logistics",
    headline: ["Bridging the Gap", "Between Land & Sea"],
    image: "https://picsum.photos/id/126/1920/1080?grayscale",
    tabLabel: "Marine"
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    date: "15 Jan 2025",
    category: "Corporate",
    title: "Kumzar Appointed Sika® Agent for Al-Faw Project",
    summary: "Kumzar secures strategic partnership for the landmark Al-Faw Immersed Tunnel project.",
    image: "https://picsum.photos/id/127/800/600?grayscale"
  },
  {
    id: 2,
    date: "20 Dec 2024",
    category: "Operations",
    title: "New Marine Support Vessel Joins Fleet",
    summary: "Expansion of offshore capabilities with the addition of a specialized support vessel.",
    image: "https://picsum.photos/id/128/800/600?grayscale"
  }
];

export const WHAT_WE_DO_FEATURES = [
  { title: "Civil Works", label: "Learn more", img: "https://picsum.photos/id/129/400/300?grayscale" },
  { title: "Marine Services", label: "Learn more", img: "https://picsum.photos/id/130/400/300?grayscale" },
  { title: "Global Procurement", label: "Learn more", img: "https://picsum.photos/id/131/400/300?grayscale" },
  { title: "Technical Manpower", label: "Learn more", img: "https://picsum.photos/id/132/400/300?grayscale" },
  { title: "Project Management", label: "Learn more", img: "https://picsum.photos/id/133/400/300?grayscale" }
];

export const WHAT_WE_DO_SECTION_LINKS = [
  { id: "civil-construction", title: "Engineering", text: "Strategic construction for the energy sector.", img: "https://picsum.photos/id/134/600/400?grayscale" },
  { id: "marine-services", title: "Marine", text: "Offshore and port logistics solutions.", img: "https://picsum.photos/id/135/600/400?grayscale" },
  { id: "procurement-trading", title: "Trading", text: "Global supply chain management.", img: "https://picsum.photos/id/136/600/400?grayscale" }
];

export const OFFICES: OfficeLocation[] = [
  {
    region: "Iraq",
    city: "Basra",
    address: "Al-Zubair Industrial Area, Basra, Iraq",
    phone: "+964 780 000 0000",
    email: "basra@kumzar.com"
  },
  {
    region: "Iraq",
    city: "Baghdad",
    address: "Mansour District, Baghdad, Iraq",
    phone: "+964 770 000 0000",
    email: "baghdad@kumzar.com"
  }
];
