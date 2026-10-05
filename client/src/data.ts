export interface PortfolioItem {
  id: string;
  title: string;
  category: 'real-estate' | 'sports' | 'events' | 'commercials';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  videoUrl: string;
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
  image: string;
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
    id: 'autotoja',
    title: 'Autotoja Toyota auto salonas',
    category: 'commercials',
    categoryLabel: 'Reklama',
    location: 'Kaunas, Lietuva',
    year: '2025',
    image: '/images/autotoja.webp',
    videoUrl: '/images/hero2-1.mp4',
    videoPlaceholderText: 'Žiūrėti 4K HDR skrydžio epizodą',
    description: 'Vienu nepertraukiamu FPV skrydžiu praskrieta pro visą auto saloną.',
    stats: [
      { label: 'Maks. greitis', value: '10 km/h' },
      { label: 'Rezoliucija', value: '4k 60fps 10-bit' },
      { label: 'Formatas', value: 'D-Log M RAW' }
    ],
    tags: ['Vieno kadro skrydis', 'Kaunas', '4K', 'Toyota', 'Autotoja']
  },
  {
    id: 'drift-action-kachergine',
    title: 'Nemuno žiedo šoninio slydimo (Drift) persekiojimas',
    category: 'sports',
    categoryLabel: 'Motorsportas ir veiksmas',
    location: 'Nemuno žiedas, Kačerginė',
    year: '2026',
    image: '/manus-storage/sports-action-fpv_6397dda8.jpg',
    videoUrl: '/images/comparison-fpv.mp4',
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
    videoUrl: '/images/hero2-1.mp4',
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
    videoUrl: '/images/comparison-fpv.mp4',
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
    videoUrl: '/images/hero2-1.mp4',
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
    id: 'bee25',
    name: 'Bee25',
    class: 'Uždaroms patalpoms / Arti žmonių',
    speed: 'Iki 60 km/h (itin lėtas manevravimas)',
    flightTime: '5-9 min/baterija - virš 30 baterijų',
    camera: 'DJI O4 Pro (4K 60/120fps)',
    usage: 'Nekilnojamasis turtas, koncertai, įmonių renginiai, vestuvės',
    safety: 'Propeleriai turi apsaugas. Saugu prie žmonių / baldų.',
    description: 'Mūsų kasdienis arkliukas interjero filmavimams. Mažiukas, todėl gali skristi per koridorius, įskristi pro langus, duris.',
    highlightBadge: 'Saugiausias viduje ir šalia žmonių',
    image: '/images/bee25.webp'
  },
  {
    id: 'Master 3x',
    name: 'Master 3x',
    class: '',
    speed: 'Iki 140 km/h',
    flightTime: '4.5 min/baterija - virš 30 baterijų',
    camera: 'DJI O4 Pro (4K 60/120fps)',
    usage: 'Naudojame ten kur reikia greičio. Pvz. Filmuojant automobilius, lėktuvus ir t.t.',
    safety: 'Saugumo ir greičio balansas. Patikima ryšio sistema',
    description: 'Naudojame ten kur reikia greičio. Pvz. Filmuojant automobilius, lėktuvus ir t.t.',
    highlightBadge: 'Greitis ne bėda',
    image: '/images/master3x.webp'
  },
  {
    id: 'Master 5 v3',
    name: 'Master 5 v3',
    class: '',
    speed: 'Iki 170 km/h',
    flightTime: '4-6 min intensyvaus lėkimo',
    camera: 'DJI O4 Pro (4K 60/120fps) ',
    usage: 'Driftas, motociklai, lenktyniniai laivai, kalnų dviračiai, ekstremalus sportas',
    safety: 'Ultra tvirtas 6mm anglies pluoštas, GPS gelbėjimo sistema, didelio atstumo ryšys.',
    description: 'Sukurtas ten, kur reikalingas maksimalus pagreitis ir aštrūs posūkiai. Geba sekti 180 km/h slystančius automobilius per centimetrus nuo asfalto.',
    highlightBadge: 'Pats greičiausias ir galingiausias',
    image: '/images/master5v3.webp'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Markas',
    role: 'Pilotas ir projektų vadovas',
    callsign: '',
    experience: 'Įkūrėjas / projektų planavimas, komunikacija ir pilotavimas',
    gearPreference: '5" cinematic rig, DJI Goggles ir aiškus kadro planas',
    image: '/images/dron1.webp',
    bio: '', //Markas sujungia dvi puses: žmogų, kuris klauso kliento, ir pilotą, kuris mato kadrą dar prieš pakildamas. Jis koordinuoja lokaciją, saugą, komandą ir pasirūpina, kad filmavimo diena būtų rami bei produktyvi.
    certifications: ['Skrydžių planavimas ir rizikos vertinimas', 'Komercinių skrydžių procedūros', 'Projekto koordinavimas filmavimo aikštelėje']
  },
  {
    name: 'Valdemaras',
    role: 'FPV pilotas / Pardavimai',
    callsign: '',
    experience: 'Renginiai, automobiliai, NT',
    gearPreference: 'Greitas 5" pursuit dronas ir GoPro 13',
    image: '/images/dron1.webp',
    bio: '', //Valdemaras mėgsta kadrus, kuriuose nėra vietos antram bandymui. Jo stiprybė – švarios trajektorijos, greitas reagavimas ir gebėjimas išlaikyti ritmą net tada, kai objektas juda nenuspėjamai.
    certifications: ['FPV kino skrydžių praktika', 'Saugos protokolai lauko lokacijose', 'Veiksmo scenų paruošimas']
  },
  {
    name: 'Gustas',
    role: 'FPV pilotas',
    callsign: '',
    experience: 'Auto renginiai, šventės, vestuvės',
    gearPreference: 'Cinewhoop su 360° propelerių apsaugomis',
    image: '/images/dron1.webp',
    bio: '', //Gustas geriausiai jaučiasi ten, kur reikia artumo: tarp durų, žmonių, šviesų ir architektūros. Jis moka sulėtinti skrydį tiek, kad žiūrovas pastebėtų detales, bet kadras neprarastų gyvybės
    certifications: ['Indoor Cinewhoop skrydžiai', 'Darbas su renginių komandomis', 'Lokacijos saugos patikra']
  },
  {
    name: 'Justas',
    role: 'Montavimas, spalvos ir socialiniai tinklai',
    callsign: '',
    experience: 'Sugeba paversti atskirus klipus į vieną profesionalų video',
    gearPreference: 'DaVinci Resolve, garso dizainas ir vertikalūs formatai',
    image: '/images/dron1.webp',
    bio: '', //Justas iš skrydžio medžiagos sudėlioja istoriją: parenka tempą, sutvarko spalvas, sukuria garso pojūtį ir paruošia versijas svetainei, reklamai ar socialiniams tinklams. Jis padeda gerą kadrą paversti veikiančiu turiniu.
    certifications: ['Montažas ir spalvų korekcija', 'Socialinių tinklų formatų paruošimas', 'Garso dizaino pagrindai']
  },
  {
    name: 'Dominykas Č.',
    role: 'Atsarginis pilotas ir techninė pagalba',
    callsign: '',
    experience: 'Komandos rezervas ir įrangos paruošimas aikštelėje',
    gearPreference: 'Cinewhoop ir atsarginės sistemos',
    image: '/images/dron1.webp',
    bio: '', //Dominykas Č. užtikrina, kad filmavimo dieną komanda turėtų planą B. Jis tikrina ryšį, baterijas ir atsarginius komponentus, o prireikus perima pultą. Tai ramus žmogus, kurio labiausiai reikia tada, kai situacija tampa neplanuota.
    certifications: ['Techninis pasiruošimas', 'Atsarginio piloto procedūros', 'Baterijų ir ryšio patikra']
  },
  {
    name: 'Dominykas B.',
    role: 'Techninė pagalba, transportas ir kamerinis filmavimas',
    callsign: '',
    experience: 'Aikštelės logistika, kameros ir įrangos judėjimas',
    gearPreference: 'Kameros, šviesa ir tvarkingas filmavimo planas',
    image: '/images/dron1.webp',
    bio: '', //Dominykas B. pasirūpina tuo, ko žiūrovas nemato, bet dėl ko filmavimas vyksta sklandžiai: transportu, baterijų stotele, kamerine dalimi ir tvarkinga aikštelės logistika. Jis gali papildyti FPV skrydį ir įprastos kameros kadrais.
    certifications: ['Filmavimo aikštelės logistika', 'Kamerinis filmavimas', 'Techninė pagalba ir transportas']
  }
];
export const TESTIMONIALS = [
  { quote: 'Šitie vyrukai, toli eis! Nuo pirmų minučių supratau, kad bus gerai! Rezultatai wow! Ilgai neužtrukom filmuojant, puikus drono valdymas ir video vizijos turėjimas sukūrė nuostabų video. Už tokią kainą tikrai verta. Kelkit kainas, nes greit eilės bus!', author: 'Darius', type: 'Kliento atsiliepimas' },
  { quote: 'Puikiai padarė video, padėjo greičiau parduoti savo butą. Viskas atlikta greitai, kokybiškai. Rekomenduoju!', author: 'Emilija', type: 'NT video' },
  { quote: 'Puikiai nufilmavo mūsų renginį. Greitai, kokybiškai ir su gera energija viso proceso metu.', author: 'Lukas', type: 'Renginio filmavimas' },
  { quote: 'Vestuvės buvo įamžintos nuostabiai! Drono kadrai suteikė video dar daugiau emocijos ir išskirtinumo', author: 'Karolina', type: 'Vestuvės' },
  { quote: 'Užsakėme reklaminį video savo verslui – rezultatas pranoko lūkesčius. Profesionaliai, greitai ir labai kokybiškai.', author: 'Gabija', type: 'Reklaminis video' },
  { quote: 'Labai patiko mūsų sodybos pristatymo video. Gražiai parodė erdves ir padėjo pritraukti daugiau klientų.', author: 'Justas', type: 'Sodybos video' }
];
//Pagalvoti del faq
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
