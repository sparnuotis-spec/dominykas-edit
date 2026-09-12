export interface PortfolioItem {
  id: string;
  title: string;
  category: 'real-estate' | 'sports' | 'events' | 'commercials';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  videoPlaceholderText: string;
  description: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

export interface DroneSpec {
  id: string;
  name: string;
  class: string;
  speed: string;
  flightTime: string;
  camera: string;
  usage: string;
  safety: string;
  description: string;
  highlightBadge: string;
}

export interface TeamMember {
  name: string;
  role: string;
  callsign: string;
  experience: string;
  gearPreference: string;
  image: string;
  bio: string;
  certifications: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'nemuno-vingis-sunset',
    title: 'Kauno senamiesčio ir Nemuno santakos skrydis',
    category: 'commercials',
    categoryLabel: 'Miesto kinas / Reklama',
    location: 'Kaunas, Lietuva',
    year: '2026',
    image: '/manus-storage/hero-fpv_aaf565b5.jpg',
    videoPlaceholderText: 'Žiūrėti 4K HDR skrydžio epizodą',
    description: 'Vienu nepertraukiamu FPV manevru praskrieta pro Kauno pilies bokštus, nusileista virš upės vos 30 cm nuo vandens ir pakilta į auksinį saulėlydį.',
    stats: [
      { label: 'Maks. greitis', value: '135 km/h' },
      { label: 'Rezoliucija', value: '5.3K 60fps 10-bit' },
      { label: 'Formatas', value: 'D-Log M RAW' }
    ],
    tags: ['Vieno kadro skrydis', 'Kaunas', '5.3K Cinema', 'Saulėlydis']
  },
  {
    id: 'drift-action-kachergine',
    title: 'Nemuno žiedo šoninio slydimo (Drift) persekiojimas',
    category: 'sports',
    categoryLabel: 'Motorsportas ir veiksmas',
    location: 'Nemuno žiedas, Kačerginė',
    year: '2026',
    image: '/manus-storage/sports-action-fpv_6397dda8.jpg',
    videoPlaceholderText: 'Žiūrėti dinamišką lenktynių klipą',
    description: 'Agresyvus sekimas 10–20 cm atstumu nuo dūmų kamuolyje slystančio automobilio. Dinaminis pagreitis, atkartojantis vairuotojo trajektoriją be jokių kompromisų.',
    stats: [
      { label: 'Maks. greitis', value: '158 km/h' },
      { label: 'Kamera', value: 'GoPro Bones Cinema' },
      { label: 'Dronas', value: '5" Custom Apex Quad' }
    ],
    tags: ['Nemuno žiedas', 'Driftas', 'Ekstremalus artumas', 'Greitis']
  },
  {
    id: 'modern-villa-flythrough',
    title: 'Modernios pušyno vilos praskridimas Kauno rajone',
    category: 'real-estate',
    categoryLabel: 'Nekilnojamasis turtas',
    location: 'Kauno r. (Kulautuva)',
    year: '2026',
    image: '/manus-storage/real-estate-fpv_775b2002.jpg',
    videoPlaceholderText: 'Žiūrėti interjero ir eksterjero turą',
    description: 'Apsaugoto Cinewhoop drono lėtas, plastiškas skrydis iš pušyno terasos tiesiai pro atvirą vitriną į virtuvę, svetainę ir antro aukšto terasą. Jokio streso šeimininkams – propeleriai visiškai apsaugoti minkštais gaubtais.',
    stats: [
      { label: 'Drono tipas', value: 'Cinewhoop 3.5"' },
      { label: 'Saugumo lygis', value: '100% apsaugoti propeleriai' },
      { label: 'Stabilizavimas', value: 'Gyroflow Cinema Smooth' }
    ],
    tags: ['Interjeras', 'NT pristatymas', 'Cinewhoop', 'Saugu viduje']
  },
  {
    id: 'music-festival-livestream',
    title: 'Gyvos muzikos festivalio tiesioginė transliacija',
    category: 'events',
    categoryLabel: 'Renginiai ir tiesioginis eteris',
    location: 'Kauno marių pakrantė',
    year: '2026',
    image: '/manus-storage/event-livestream-fpv_4273f4e1.jpg',
    videoPlaceholderText: 'Žiūrėti tiesioginės transliacijos FPV signalą',
    description: 'Realaus laiko HD SDI signalas tiesiai į režisūrinį pultą. Minios energija, scenos šviesos ir skrydis virš 10 000 žiūrovų galvų pagal griežčiausius CAA saugumo reikalavimus.',
    stats: [
      { label: 'Vėlavimas (Latency)', value: '< 28 ms' },
      { label: 'Signalo išvestis', value: '1080p 60fps HDMI/SDI' },
      { label: 'Transliacija', value: 'Tiesiogiai į LED ekranus' }
    ],
    tags: ['Tiesioginis eteris', 'Festivalis', 'Režisūrinis pultas', 'Masinis renginys']
  },
  {
    id: 'industrial-robotics-reel',
    title: 'Išmanios gamyklos ir logistikos centro pristatymas',
    category: 'commercials',
    categoryLabel: 'Industrinė reklama',
    location: 'Kauno LEZ',
    year: '2025',
    image: '/manus-storage/commercial-factory-fpv_f410793a.jpg',
    videoPlaceholderText: 'Žiūrėti gamybos linijos vieno kadro video',
    description: 'Skrydis tarp robotizuotų staklių rankų, aukštų stelažų ir automatinių kroviklių. Sukuria pažangios, futuristinės gamyklos įvaizdį B2B partneriams ir investuotojams.',
    stats: [
      { label: 'Skrydžio zona', value: 'Pramoninis cechas' },
      { label: 'Tikslumas', value: '+/- 5 cm trajektorija' },
      { label: 'Tikslas', value: 'Investicinis reprezentacinis video' }
    ],
    tags: ['Kauno LEZ', 'Industrija', 'Robotika', 'Reklama']
  }
];

export const DRONE_SPECS: DroneSpec[] = [
  {
    id: 'cinewhoop-35',
    name: 'GELTONA CineProtekt 3.5"',
    class: 'Uždarų patalpų ir NT drakonas',
    speed: 'Iki 65 km/h (itin lėtas manevravimas)',
    flightTime: '7-9 min vienu akumuliatoriumi',
    camera: 'GoPro Naked 12 Black / DJI O3 Pro (4K 60/120fps)',
    usage: 'Nekilnojamasis turtas, biurai, restoranai, žmonių apsuptyje',
    safety: 'Propeleriai 100% apgaubti minkštu poliuretanu. Saugu liesti žmones ir baldus.',
    description: 'Mūsų kasdienis arkliukas interjero filmavimams. Sveria vos 245 gramus, todėl gali skristi per durų plyšius, aplink skulptūras ar po baldais.',
    highlightBadge: 'Saugiausias interjerui'
  },
  {
    id: 'cinelifter-x8',
    name: 'GELTONA Heavy-Lift X8 Pro',
    class: 'Kino kamerų nešėjas (Cinema Lifter)',
    speed: 'Iki 150 km/h',
    flightTime: '8-12 min',
    camera: 'RED Komodo 6K / BMPCC 6K / Sony FX3 su anamorfine optika',
    usage: 'Didelio biudžeto TV reklamos, vaidybiniai filmai, prabangūs prekių ženklai',
    safety: '8 galingi varikliai su koaksialine dubliavimo sistema – net sugedus varikliui saugiai nusileidžia.',
    description: 'Tikras kino žvėris. Skraidina pilno kadro kino kameras su belaidžiu fokusavimu (Focus Puller) ir realaus laiko režisieriaus monitoriumi.',
    highlightBadge: 'Didžiausiam kino biudžetui'
  },
  {
    id: 'apex-freestyle-5',
    name: 'GELTONA Vector 5" Pursuit',
    class: 'Didelio greičio veiksmo ir sporto drakonas',
    speed: 'Iki 170 km/h (0–100 km/h per 1.3 s)',
    flightTime: '4-6 min intensyvaus lėkimo',
    camera: 'GoPro 13 Black 5.3K 10-bit / Full Gyro data',
    usage: 'Driftas, motociklai, lenktyniniai laivai, kalnų dviračiai, ekstremalus sportas',
    safety: 'Ultra tvirtas 6mm anglies pluoštas, GPS gelbėjimo sistema, didelio atstumo ryšys.',
    description: 'Sukurtas ten, kur reikalingas maksimalus pagreitis ir aštrūs posūkiai. Geba sekti 140 km/h slystančius automobilius per centimetrus nuo asfalto.',
    highlightBadge: 'Galingiausias greičiui'
  },
  {
    id: 'long-range-7',
    name: 'GELTONA SkyScout 7" Long Range',
    class: 'Tolimųjų distancijų ir kalnų/upų skrydžiai',
    speed: 'Iki 115 km/h',
    flightTime: '20-25 min (Li-Ion baterijos)',
    camera: 'DJI O4 HD + 4K HDR Cinema',
    usage: 'Kraštovaizdžiai, miškai, upių vingiai, architektūriniai panoraminiai kadrai',
    safety: 'Dual GPS, Return-to-Home automatika, kryžminis ryšio dubliavimas iki 10 km.',
    description: 'Idealiai tinka, kai reikia aprėpti didelius plotus – Kauno marias, piliakalnius ar dideles infrastruktūros statybas iš paukščio skrydžio.',
    highlightBadge: 'Ilgiausias skrydžio laikas'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Markas',
    role: 'Pilotas ir projektų vadovas',
    callsign: '„Markas“',
    experience: 'Skrydžio planavimas, klientų komunikacija ir pilotavimas',
    gearPreference: '5" cinematic rig, DJI Goggles ir aiškus kadro planas',
    image: '/manus-storage/pilot-portrait_a9dfddaf.jpg',
    bio: 'Markas sujungia dvi puses: žmogų, kuris klauso kliento, ir pilotą, kuris mato kadrą dar prieš pakildamas. Jis koordinuoja lokaciją, saugą, komandą ir pasirūpina, kad filmavimo diena būtų rami bei produktyvi.',
    certifications: ['Skrydžių planavimas ir rizikos vertinimas', 'Komercinių skrydžių procedūros', 'Projekto koordinavimas filmavimo aikštelėje']
  },
  {
    name: 'Valdemaras',
    role: 'FPV pilotas',
    callsign: '„Valdas“',
    experience: 'Tikslūs vieno kadro skrydžiai ir veiksmo scenos',
    gearPreference: 'Greitas 5" pursuit dronas ir GoPro 13',
    image: '/manus-storage/pilot-portrait_a9dfddaf.jpg',
    bio: 'Valdemaras mėgsta kadrus, kuriuose nėra vietos antram bandymui. Jo stiprybė – švarios trajektorijos, greitas reagavimas ir gebėjimas išlaikyti ritmą net tada, kai objektas juda nenuspėjamai.',
    certifications: ['FPV kino skrydžių praktika', 'Saugos protokolai lauko lokacijose', 'Veiksmo scenų paruošimas']
  },
  {
    name: 'Gustas',
    role: 'FPV pilotas',
    callsign: '„Gustas“',
    experience: 'Interjerai, renginiai ir skrydžiai žmonių aplinkoje',
    gearPreference: 'Cinewhoop su 360° propelerių apsaugomis',
    image: '/manus-storage/tech-engineer-portrait_98acea2a.jpg',
    bio: 'Gustas geriausiai jaučiasi ten, kur reikia artumo: tarp durų, žmonių, šviesų ir architektūros. Jis moka sulėtinti skrydį tiek, kad žiūrovas pastebėtų detales, bet kadras neprarastų gyvybės.',
    certifications: ['Indoor Cinewhoop skrydžiai', 'Darbas su renginių komandomis', 'Lokacijos saugos patikra']
  },
  {
    name: 'Justas',
    role: 'Montavimas, spalvos ir socialiniai tinklai',
    callsign: '„Justas“',
    experience: 'Nuo žaliavos iki paruošto klipo skirtingiems kanalams',
    gearPreference: 'DaVinci Resolve, garso dizainas ir vertikalūs formatai',
    image: '/manus-storage/tech-engineer-portrait_98acea2a.jpg',
    bio: 'Justas iš skrydžio medžiagos sudėlioja istoriją: parenka tempą, sutvarko spalvas, sukuria garso pojūtį ir paruošia versijas svetainei, reklamai ar socialiniams tinklams. Jis padeda gerą kadrą paversti veikiančiu turiniu.',
    certifications: ['Montažas ir spalvų korekcija', 'Socialinių tinklų formatų paruošimas', 'Garso dizaino pagrindai']
  },
  {
    name: 'Dominykas Č.',
    role: 'Atsarginis pilotas ir techninė pagalba',
    callsign: '„DČ“',
    experience: 'Komandos rezervas ir įrangos paruošimas aikštelėje',
    gearPreference: 'Cinewhoop ir atsarginės sistemos',
    image: '/manus-storage/gear-drone_d25d5c2f.jpg',
    bio: 'Dominykas Č. užtikrina, kad filmavimo dieną komanda turėtų planą B. Jis tikrina ryšį, baterijas ir atsarginius komponentus, o prireikus perima pultą. Tai ramus žmogus, kurio labiausiai reikia tada, kai situacija tampa neplanuota.',
    certifications: ['Techninis pasiruošimas', 'Atsarginio piloto procedūros', 'Baterijų ir ryšio patikra']
  },
  {
    name: 'Dominykas B.',
    role: 'Techninė pagalba, transportas ir kamerinis filmavimas',
    callsign: '„DB“',
    experience: 'Aikštelės logistika, kameros ir įrangos judėjimas',
    gearPreference: 'Kameros, šviesa ir tvarkingas filmavimo planas',
    image: '/manus-storage/commercial-factory-fpv_f410793a.jpg',
    bio: 'Dominykas B. pasirūpina tuo, ko žiūrovas nemato, bet dėl ko filmavimas vyksta sklandžiai: transportu, baterijų stotele, kamerine dalimi ir tvarkinga aikštelės logistika. Jis gali papildyti FPV skrydį ir įprastos kameros kadrais.',
    certifications: ['Filmavimo aikštelės logistika', 'Kamerinis filmavimas', 'Techninė pagalba ir transportas']
  }
];
export const TESTIMONIALS = [
  { quote: 'Pagaliau gavome NT video, kuris ne tik parodo erdves, bet ir leidžia pajusti, kaip jose būti.', author: 'Aistė, NT projektų vadovė', type: 'Nekilnojamasis turtas' },
  { quote: 'Komanda labai aiškiai paaiškino visą procesą. Atvykome su idėja, o išėjome su filmu, kurį norisi rodyti klientams.', author: 'Mantas, renginio organizatorius', type: 'Renginys' },
  { quote: 'Svarbiausia – jie moka būti komanda. Kai reikia, aikštelėje turime daugiau nei vieną pilotą ir techninę pagalbą.', author: 'Tomas, reklamos prodiuseris', type: 'Reklama' }
];
export const FAQ_ITEMS = [
  {
    question: 'Ar skraidyti patalpų viduje yra saugu žmonėms ir baldams?',
    answer: 'Taip, absoliučiai. Patalpoms naudojame specialius „Cinewhoop“ dronus, kurių propeleriai turi ištisines minkštas 360° apsaugas. Dronas sveria vos apie 250 g, todėl net netyčia palietus žmogų ar baldą, nepadaroma jokia žala.'
  },
  {
    question: 'Kiek laiko trunka pasiruošimas ir pats filmavimas?',
    answer: 'Paprastai į lokaciją atvykstame 30–45 min prieš filmavimą, kad apžiūrėtume erdvę, suplanuotume saugius skrydžio koridorius ir paruoštume įrangą. Pats skrydžių procesas priklausomai nuo poreikio trunka nuo poros valandų iki visos pamainos.'
  },
  {
    question: 'Ar galite filmuoti už Kauno ribų?',
    answer: 'Mūsų bazė ir dirbtuvės yra Kaune, tačiau reguliariai filmuojame Vilniuje, Klaipėdoje, Nidoje, Panevėžyje bei visoje Lietuvoje. Esant poreikiui vykstame ir į užsienį.'
  },
  {
    question: 'Kuo FPV dronas skiriasi nuo įprasto „DJI Mavic“ drono?',
    answer: 'Įprastas dronas skrenda horizontaliai tarsi ore kabantis trikojis – jis puikiai tinka ramioms bendroms nuotraukoms. FPV (First Person View) droną pilotuojame per specialius virtualios realybės akinius – jis atlieka dinamiškus posūkius, praskrenda pro plyšius, pasiekia 160 km/h greitį ir perteikia tikrą laisvo skrydžio dinamiką bei adrenaliną.'
  },
  {
    question: 'Kaip formuojama kaina – valandinis ar projekto tarifas?',
    answer: 'Jei filmavimas trunka kelias valandas nedidelėje lokacijoje (pvz., buto ar kavinės turas) – taikome lankstų valandinį tarifą. Jei tai visos dienos pamaina, renginys, komercinis reklaminis klipas su planavimu ir montažu – fiksuojame aiškią projekto sąmatą be paslėptų mokesčių.'
  }
];
