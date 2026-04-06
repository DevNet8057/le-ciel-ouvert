import type { DressCodeColor, StoryStep, Venue, WeddingEvent } from "@/types";

export const WEDDING = {
  groomFirstName: "Elvis",
  groomLastName: "Dirane",
  brideFirstName: "Ange Esther",
  brideLastName: "",
  coupleNames: "Ange Esther & Elvis Dirane",
  theme: "Le Ciel Ouvert",
  bibleVerse:
    "« La femme n'est pas sans l'homme, ni l'homme sans la femme, dans le Seigneur. »",
  bibleRef: "1 Corinthiens 11:11",

  dates: {
    wedding: new Date("2026-05-16T10:00:00"),
    civil: new Date("2026-05-14T09:00:00"),
    rsvpDeadline: "1er Mai 2026",
  },

  events: [
    {
      id: "traditional",
      date: "14 Mai 2026",
      day: "Jeudi",
      title: "Mariage Coutumier",
      time: "À préciser",
      location: "Mewoulou",
      address: "Yaoundé Mewoulou, Cameroun",
      mapsUrl: "https://maps.google.com/?q=Mewoulou+Yaounde",
      icon: "🎊",
      description: "Célébration traditionnelle et familiale",
    },
    {
      id: "civil",
      date: "16 Mai 2026",
      day: "Samedi",
      title: "Mariage Civil",
      time: "À préciser",
      location: "Mairie de Yaoundé III (Nsam Efoulan)",
      address: "Yaoundé III, Nsam Efoulan, Cameroun",
      mapsUrl: "https://maps.google.com/?q=Mairie+de+Yaounde+III+Nsam+Efoulan",
      icon: "⚖️",
      description: "Union civile devant les autorités",
    },
    {
      id: "religious",
      date: "16 Mai 2026",
      day: "Samedi",
      title: "Cérémonie Religieuse",
      time: "À préciser",
      location: "Paroisse EEC Melen",
      address: "Melen, Yaoundé",
      mapsUrl: "https://maps.google.com/?q=EEC+Melen+Yaounde",
      icon: "✝️",
      description: "Célébration de l'union devant Dieu",
    },
    {
      id: "reception",
      date: "16 Mai 2026",
      day: "Samedi",
      title: "Cocktail Dînatoire ",
      time: "À préciser",
      location: "Salle de fêtes Helen Hôtel pres du Rond point GP (Mvog - Betsi)",
      address: "GP-Melen Yaoundé, Cameroun",
      mapsUrl: "https://maps.google.com/?q=Helen+Hotel+Yaounde",
      icon: "🥂",
      description: "Dîner, danse et célébration",
    },
  ] as WeddingEvent[],

  venues: [
    {
      name: "Maison familiale Mewoulou",
      role: "Mariage Civil — 14 Mai",
      address: "Mewoulou, Yaoundé, Cameroun",
      mapsUrl: "https://maps.google.com/?q=Mewoulou+Yaounde",
    },
    {
      name: "Nsam-Efoulan",
      role: "Rassemblement familial",
      address: "Nsam-Efoulan, Yaoundé, Cameroun",
      mapsUrl: "https://maps.google.com/?q=Nsam+Efoulan+Yaounde",
    },
    {
      name: "EEC Melen",
      role: "Cérémonie Religieuse — 16 Mai",
      address: "Melen, Yaoundé, Cameroun",
      mapsUrl: "https://maps.google.com/?q=EEC+Melen+Yaounde",
    },
    {
      name: "Helen Hôtel",
      role: "Réception — 16 Mai",
      address: "Yaoundé, Cameroun",
      mapsUrl: "https://maps.google.com/?q=Helen+Hotel+Yaounde",
    },
  ] as Venue[],

  dressCode: {
    title: "Dress Code",
    subtitle: "Élégance & Grâce",
    description:
      "Pour honorer ce jour béni, nous vous invitons à revêtir l'élégance. Adoptez des tenues dans les tons de la cérémonie : bleu gris, or et blanc. Votre présence illuminera notre journée sous un Ciel Ouvert.",
    note: "Privilégiez ces trois couleurs pour créer une harmonie visuelle dans les photos et moments de célébration.",
    colors: [
      { name: "Bleu Gris", hex: "#6B8E99", label: "Principal" },
      { name: "Or Doré", hex: "#D4AF37", label: "Accent" },
      { name: "Blanc Pur", hex: "#FFFFFF", label: "Classique" },
    ] as DressCodeColor[],
  },

  story: [
    {
      id: 1,
      year: "2022",
      title: "L'Appel Divin",
      description: `La révélation décisive intervient lorsque le Seigneur lui fait comprendre que **Ange Esther doit jouer un rôle majeur (80 %)** dans l'accomplissement de son appel au ministère. Face à cette vérité, Elvis comprend que **refuser cette union reviendrait à compromettre toute sa destinée**.`,
      imageSrc: "/images/couple/Images mariage/ED--5.JPG",
      imageAlt: "L'appel divin reçu",
    },
    {
      id: 2,
      year: "2022",
      title: "La Demande en Mariage",
      description: `Dans un acte d'**obéissance et de soumission à la volonté divine**, il accepte finalement le plan de Dieu.

**Le 11 octobre 2022**, dans un cadre simple mais chargé de sens, au **restaurant Tam-Tam**, Elvis Dirane fait sa demande en mariage. Malgré quelques imprévus (dont un plat particulièrement salé), ce moment devient **un tournant décisif** pour leur avenir commun.`,
      imageSrc: "/images/couple/Images mariage/ED--17.JPG",
      imageAlt: "La demande en mariage",
    },
    {
      id: 3,
      year: "2023",
      title: "L'Acceptation - Le Oui",
      description: `Après un temps de réflexion et de discernement, Ange Esther, également convaincue de la direction divine, **donne son accord le 1er février 2023**.

Commence alors pour eux **un nouveau chapitre : celui d'un pèlerinage commun**. Un chemin marqué par des épreuves, des oppositions, des combats, mais aussi par la **fidélité inébranlable de Dieu**.

Comme le rappelle 2 Pierre 3 : 8-9, Dieu agit selon Son propre temps, avec patience, pour **accomplir parfaitement Ses promesses** envers ceux qui lui font confiance.`,
      imageSrc: "/images/couple/Images mariage/ED--16.JPG",
      imageAlt: "L'acceptation du mariage",
    },
    {
      id: 4,
      year: "2026",
      title: "Le Ciel Ouvert - Notre Destinée",
      description: `Conscients de leur appel et de leur mise à part pour un impact global, ils reçoivent l’instruction divine de placer leur union sous le thème : « Le Ciel Ouvert », inspiré de Jean 1 : 50-51.
Ce thème n\'’est pas simplement symbolique, mais prophétique. Il annonce une saison où la présence de Dieu devient tangible, où les réalités célestes influencent directement leur vie terrestre.

Le Ciel Ouvert représente : une saison de bénédictions abondantes; une intensification des révélations divines
des visitations surnaturelles; une transformation profonde: une manifestation accrue de la gloire de Dieu; un afflux de ressources spirituelles et matérielles un impact visible dans toutes les sphères de la société. `,
      imageSrc: "/images/couple/Images mariage/ED-.JPG",
      imageAlt: "Le Ciel Ouvert - notre union",
    },
    ,
    {
      id: 5,
      year: "2026",
      title: "Resume - Ciel ouvert",
      description: `En somme, le Ciel Ouvert signifie que Dieu devient une réalité vivante, agissante et évidente dans leur quotidien, afin qu’à travers eux, les nations soient impactées de manière holistique pour Sa seule gloire.`,
      imageSrc: "/images/couple/Images mariage/ED--13.JPG",
      imageAlt: "Le Ciel Ouvert - resume",
    },
  ] as StoryStep[],

  /* 18 photos — images réelles du couple */
  gallery: [
    {
      src: "/images/couple/Images mariage/ED--5.JPG",
      alt: "Ange Esther & Elvis — portrait",
    },
    {
      src: "/images/couple/Images mariage/ED--6.JPG",
      alt: "Moment de complicité",
    },
    {
      src: "/images/couple/Images mariage/ED--7.JPG",
      alt: "Séance photo couple",
    },
    { src: "/images/couple/Images mariage/ED--8.JPG", alt: "Regard amoureux" },
    {
      src: "/images/couple/Images mariage/ED--9.JPG",
      alt: "Promenade en nature",
    },
    { src: "/images/couple/Images mariage/ED--10.JPG", alt: "Éclats de rire" },
    {
      src: "/images/couple/Images mariage/ED--11.JPG",
      alt: "Moment de tendresse",
    },
    { src: "/images/couple/Images mariage/ED--12.JPG", alt: "Les fiançailles" },
    {
      src: "/images/couple/Images mariage/ED--13.JPG",
      alt: "Portrait romantique",
    },
    {
      src: "/images/couple/Images mariage/ED--14.JPG",
      alt: "Coucher de soleil",
    },
    { src: "/images/couple/Images mariage/ED--15.JPG", alt: "Séance en ville" },
    {
      src: "/images/couple/Images mariage/ED--16.JPG",
      alt: "Complicité naturelle",
    },
    { src: "/images/couple/Images mariage/ED--17.JPG", alt: "Lumière dorée" },
    {
      src: "/images/couple/Images mariage/ED--18.JPG",
      alt: "Souvenir précieux",
    },
    { src: "/images/couple/Images mariage/ED--19.JPG", alt: "Instant de joie" },
    { src: "/images/couple/Images mariage/ED--3.JPG", alt: "Regard complice" },
    {
      src: "/images/couple/Images mariage/ED--4.JPG",
      alt: "Portrait en nature",
    },
    { src: "/images/couple/Images mariage/ED--5.JPG", alt: "Notre histoire" },
  ],

  visionMission: {
    vision: {
      title: "Notre Vision",
      text: "Être des vases de Dieu pour un impact holistique dans le monde.",
      bibleRef: "Ésaïe 60 : 1 & 22",
      icon: "🕊️",
    },
    mission: {
      title: "Notre Mission",
      text: "Unis sous un Ciel Ouvert pour impacter toutes les sphères des nations pour Dieu.",
      bibleRef: "Ésaïe 42 : 1 & 6 ; Matthieu 5 : 16",
      icon: "✨",
    },
  },
} as const;
