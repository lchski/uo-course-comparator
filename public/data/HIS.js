const courses = [
    {
        "code": "HIS1101",
        "description": "Survey of the political, social and cultural evolution of Canada, from its origins to the present.",
        "language": "English",
        "restriction": "",
        "title": "The Making of Canada",
        "year": "1"
    },
    {
        "code": "HIS1110",
        "description": "A course of general interest which focuses on the roots of nationalism and the New Imperialism and on the social upheavals engendering conflict.",
        "language": "English",
        "restriction": "",
        "title": "The Twentieth-Century World to 1945",
        "year": "1"
    },
    {
        "code": "HIS1111",
        "description": "A course of general interest which focuses on the search for security and independence in a post-war world dominated by super powers and globalization.",
        "language": "English",
        "restriction": "",
        "title": "The Twentieth-Century World from 1945",
        "year": "1"
    },
    {
        "code": "HIS1120",
        "description": "Long term study of the changing nature of Europe, through geographical, political, economic, and cultural aspects.",
        "language": "English",
        "restriction": "",
        "title": "What is Europe? (16th-21th Century)",
        "year": "1"
    },
    {
        "code": "HIS1501",
        "description": "Survol de l'évolution politique, sociale et culturelle du Canada, depuis les débuts jusqu'à aujourd'hui.",
        "language": "French",
        "restriction": "",
        "title": "La formation du Canada",
        "year": "1"
    },
    {
        "code": "HIS1510",
        "description": "Cours d'intérêt général portant sur les racines du nationalisme et du nouvel impérialisme ainsi que sur les bouleversements sociaux à l'origine des conflits dans le monde.",
        "language": "French",
        "restriction": "",
        "title": "Le monde au XXe siècle jusqu'en 1945",
        "year": "1"
    },
    {
        "code": "HIS1511",
        "description": "Cours d'intérêt général portant sur les questions de sécurité et d'indépendance dans le monde d'après-guerre dominé par les grandes puissances et la mondialisation.",
        "language": "French",
        "restriction": "",
        "title": "Le monde au XXe siècle depuis 1945",
        "year": "1"
    },
    {
        "code": "HIS1520",
        "description": "Étude sur le long terme de la nature changeante de l'Europe, dans ses aspects géographiques, politiques, économiques et culturels.",
        "language": "French",
        "restriction": "",
        "title": "Qu'est-ce que l'Europe? (16e-21e siècle)",
        "year": "1"
    },
    {
        "code": "HIS2100",
        "description": "Introduction to historical methods identifying historical problems, formulating a hypothesis, research and writing.",
        "language": "English",
        "restriction": "Reserved for students registered in the Honours, Joint Honours or Major in History. (M).",
        "title": "The Historian's Craft",
        "year": "2"
    },
    {
        "code": "HIS2101",
        "description": "A general history of Greece from the Bronze Age to the eve of the Battle of Marathon (490 B.C.).",
        "language": "English",
        "restriction": "Also offered as CLA2101.",
        "title": "The Beginnings of Greek Civilization",
        "year": "2"
    },
    {
        "code": "HIS2102",
        "description": "A general history of Greece from the Battle of Marathon (490 B.C.) to the Battle of Mantinea and the General Peace (362 B.C.).",
        "language": "English",
        "restriction": "Also offered as CLA2102.",
        "title": "Athens, Persia, and Sparta",
        "year": "2"
    },
    {
        "code": "HIS2103",
        "description": "A general history of Rome from its foundation (753 B.C.) to the death of Caesar (44 B.C.).",
        "language": "English",
        "restriction": "Also offered as CLA2103.",
        "title": "The Republic",
        "year": "2"
    },
    {
        "code": "HIS2104",
        "description": "A general history of Rome from the \"first triumvirate\" (60 B.C.) to the accession of Septimius Severus (A.D. 193).",
        "language": "English",
        "restriction": "Also offered as CLA2104.",
        "title": "The Early Empire",
        "year": "2"
    },
    {
        "code": "HIS2105",
        "description": "Overview of the history of the Jewidh community in Canada from the English regime to the contemporary period.",
        "language": "English",
        "restriction": "Also offered as CDN2105. (C).",
        "title": "History of the Jews in Canada",
        "year": "2"
    },
    {
        "code": "HIS2116",
        "description": "Survey of the political, social, economic and intellectual history of Czarist Russia under the Romanov Dynasty (1613-1917).",
        "language": "English",
        "restriction": "Also offered as RUS2116. (E).",
        "title": "Imperial Russia from 1613 to the 1917 Revolution",
        "year": "2"
    },
    {
        "code": "HIS2117",
        "description": "Survey of the political, social, economic and intellectual history of the Soviet Union from the October Revolution.",
        "language": "English",
        "restriction": "Also offered as RUS2117. (E).",
        "title": "History of the USSR",
        "year": "2"
    },
    {
        "code": "HIS2129",
        "description": "Examination of the role of technology in social, economic and environmental change in industrial and \"post-industrial\" society.",
        "language": "English",
        "restriction": "",
        "title": "Technology, Society and Environment since 1800",
        "year": "2"
    },
    {
        "code": "HIS2130",
        "description": "Migration and settlement, voluntary and involuntary, of people in North America from the initial contacts of newcomers with Amerindians to the present.",
        "language": "English",
        "restriction": "",
        "title": "The Peopling of North America",
        "year": "2"
    },
    {
        "code": "HIS2151",
        "description": "The Seven Year War, the American Revolution, the new republics institutions, the Jacksonian democracy, territorial expansion, the Civil War and reconstruction.",
        "language": "English",
        "restriction": "(A).",
        "title": "The United States from 1750 to 1877",
        "year": "2"
    },
    {
        "code": "HIS2152",
        "description": "From Reconstruction to the end of World War II. The rise of the United States as an industrial and military power.",
        "language": "English",
        "restriction": "(A).",
        "title": "The United States from 1877 to 1945",
        "year": "2"
    },
    {
        "code": "HIS2153",
        "description": "A study of the main social, economic and political developments in the United States since 1945.",
        "language": "English",
        "restriction": "(A).",
        "title": "The United States from 1945 to the Present",
        "year": "2"
    },
    {
        "code": "HIS2160",
        "description": "Introduction to the history of the Arab world, Iran, Israel and Turkey from the First World War. Main political, economic and social developments in the region.",
        "language": "English",
        "restriction": "(N).",
        "title": "History of the Middle East from World War I",
        "year": "2"
    },
    {
        "code": "HIS2170",
        "description": "Covers the history of the Spanish and Portuguese colonial empires from 1415 to 1825, concentrating on the fate of the Indian, the colonial economy and the formation of a new society.",
        "language": "English",
        "restriction": "(N).",
        "title": "Latin America, Colonial Period",
        "year": "2"
    },
    {
        "code": "HIS2171",
        "description": "Latin American history since independence. This course will concentrate on the problems of political instability, underdevelopment and American Imperialism.",
        "language": "English",
        "restriction": "(N).",
        "title": "Latin America, Modern Period",
        "year": "2"
    },
    {
        "code": "HIS2175",
        "description": "Religious, cultural, social, and political traditions in Southeast Asia.",
        "language": "English",
        "restriction": "(N).",
        "title": "Southeast Asian Civilizations to the 18th Century",
        "year": "2"
    },
    {
        "code": "HIS2176",
        "description": "Historical events and trends in Southeast Asia from the 18th century to the Present.",
        "language": "English",
        "restriction": "(N).",
        "title": "Southeast Asian Civilizations from the 18th Century to the Present",
        "year": "2"
    },
    {
        "code": "HIS2177",
        "description": "Introduction to the civilizations of pre modern China, Japan, and Korea from antiquity to 1600. Emphasis on culture, society, and thought.",
        "language": "English",
        "restriction": "(N).",
        "title": "History of East Asia from antiquity to 1600",
        "year": "2"
    },
    {
        "code": "HIS2178",
        "description": "Introduction to East Asian civilizations after 1600. Focus primarily on China and Japan. Study of the internal changes in these countries as well as their external relations, and of transformations in thought and culture.",
        "language": "English",
        "restriction": "(N).",
        "title": "History of East Asia from 1600 to the present",
        "year": "2"
    },
    {
        "code": "HIS2182",
        "description": "A survey of the historical role of women in Canada, with particular reference to the economic and social changes of the 19th and 20th centuries.",
        "language": "English",
        "restriction": "Previously HIS3182. (C).",
        "title": "Women in Canada",
        "year": "2"
    },
    {
        "code": "HIS2183",
        "description": "Virgins, mothers, strumpets? Images of women from late Antiquity to the 18th century; survey of their social, cultural, economic and political roles.",
        "language": "English",
        "restriction": "(E).",
        "title": "Women in Western Societies to the Eighteenth Century",
        "year": "2"
    },
    {
        "code": "HIS2184",
        "description": "Housewives, ground breakers, suffragettes? Evolving images and roles of women in European and North American societies since the middle of the 18th century.",
        "language": "English",
        "restriction": "Prerequisite: Recommended, HIS2183.",
        "title": "Women in Western Societies from the Eighteenth Century to the Present",
        "year": "2"
    },
    {
        "code": "HIS2197",
        "description": "History as a type of knowledge and inquiry. Special reference to problems of explanation, objectivity, and causal analysis.",
        "language": "English",
        "restriction": "Reserved for students registered in the Honours, Joint Honours or Major in History. Also offered as PHI2197. (M).",
        "title": "Philosophy of History",
        "year": "2"
    },
    {
        "code": "HIS2307",
        "description": "Pre-contact Amerindian societies. Beginnings of European colonization (New France and New England) and the ensuing period of \"cooperation\". Métis, Inuit and the Natives of the West Coast. Amerindian resistance: self-government and confrontation.",
        "language": "English",
        "restriction": "Previously HIS2305 or HIS2306. (C).",
        "title": "History of the Native Peoples in Canada, from the origins to the present",
        "year": "2"
    },
    {
        "code": "HIS2326",
        "description": "A survey of the history of British colonial and imperial expansion from the sixteenth century to the period of decolonization after World War Two.",
        "language": "English",
        "restriction": "(E).",
        "title": "The History of the British Empire",
        "year": "2"
    },
    {
        "code": "HIS2335",
        "description": "Study of the Middle Ages in Western Europe: its creation by historians, its interpretation by large audiences, and its specific features in the history of humanity.",
        "language": "English",
        "restriction": "Previously HIS2337 and HIS2338. Also offered as CLA2335. (E).",
        "title": "Deciphering the Medieval Era: Western Europe from the 5th to the 15th century.",
        "year": "2"
    },
    {
        "code": "HIS2336",
        "description": "European history from the Renaissance to Napoleon: the Reformation, the Ancien Régime, the Enlightenment, and the French Revolution.",
        "language": "English",
        "restriction": "(E).",
        "title": "Early Modern Europe, 16th to 18th Century",
        "year": "2"
    },
    {
        "code": "HIS2341",
        "description": "European hegemony from Napoleon to the First World War. The industrial revolution. Social conflicts and revolutionary movements. National movements and imperialism.",
        "language": "English",
        "restriction": "(E).",
        "title": "Europe in the 19th Century",
        "year": "2"
    },
    {
        "code": "HIS2342",
        "description": "Europe's role in the crises of the 20th century: democratic and totalitarian responses to the Great War (1914-1918), the Russian Revolution, the economic upheaval of the inter-war period, World War II, the division of post-war Europe, decolonization and the end of the European world hegemony, the European Community, and the collapse of the communist block since 1989.",
        "language": "English",
        "restriction": "(E).",
        "title": "Europe in the 20th Century",
        "year": "2"
    },
    {
        "code": "HIS2350",
        "description": " ",
        "language": "English",
        "restriction": "",
        "title": "Selected Topics in Modern History",
        "year": "2"
    },
    {
        "code": "HIS2351",
        "description": " ",
        "language": "English",
        "restriction": "",
        "title": "Selected Topics in Contemporary History",
        "year": "2"
    },
    {
        "code": "HIS2355",
        "description": "Nationalism, state creation and disintegration in Central Europe since 1815.",
        "language": "English",
        "restriction": "(E).",
        "title": "Nation-Building in Central Europe",
        "year": "2"
    },
    {
        "code": "HIS2361",
        "description": "Economic, social and political development of the colony to the Treaty of Paris.",
        "language": "English",
        "restriction": "Previously HIS2201. (C).",
        "title": "New France",
        "year": "2"
    },
    {
        "code": "HIS2362",
        "description": "Economic, social and political development of British North America from the Treaty of Paris to Confederation.",
        "language": "English",
        "restriction": "Previously HIS2301 or HIS2302. (C).",
        "title": "British North America, 1763-1867",
        "year": "2"
    },
    {
        "code": "HIS2363",
        "description": "Economic, social and political development of Canada and Newfoundland from Confederation to the Great Depression.",
        "language": "English",
        "restriction": "Previously HIS2303. (C).",
        "title": "Canada, 1867-1939",
        "year": "2"
    },
    {
        "code": "HIS2364",
        "description": "Economic, social and political development of Canada from the Great Depression to the present; Canada's accession to independence and changing role on the world scene.",
        "language": "English",
        "restriction": "Previously HIS2304. (C).",
        "title": "Contemporary Canada",
        "year": "2"
    },
    {
        "code": "HIS2375",
        "description": "Early history of Africa in the world. Topics covered include migrations, Islamisation, commercial exchange circuits (Sahara, Indian Ocean, Atlantic), the slave trades, political, economic, and social transformations. Case studies.",
        "language": "English",
        "restriction": "(N).",
        "title": "History of Africa South of the Sahara, 1000-1850",
        "year": "2"
    },
    {
        "code": "HIS2376",
        "description": "Exploration of the economic and political conditions that led to the colonisation of the African continent following the abolition of the slave trade; the fabrication of colonial states; the impact of colonialism on African societies; anti-colonialist and nationalist movements; post-colonial period. Case studies.",
        "language": "English",
        "restriction": "(N).",
        "title": "History of Africa South of the Sahara since 1850",
        "year": "2"
    },
    {
        "code": "HIS2390",
        "description": "Assumptions, concepts, sources and research strategies of micro-history. Through a case-study approach, examination of the ways in which scholars address general historical questions by studying specific historical contexts.",
        "language": "English",
        "restriction": "Reserved for students registered in the Honours, Joint Honours or Major in History. (M).",
        "title": "Theory and Practice of Micro-History",
        "year": "2"
    },
    {
        "code": "HIS2391",
        "description": "The origins and development of history as a discipline focusing on the rise of critical approaches to historical writing and historicism. The course includes an examination of critiques of professional historiography and considers speculative alternatives.",
        "language": "English",
        "restriction": "Reserved for students registered in the Honours, Joint Honours or Major in History. (M).",
        "title": "History and Theory",
        "year": "2"
    },
    {
        "code": "HIS2500",
        "description": "Initiation aux méthodes historiques; repérage de questions historiques, formulation d'hypothèses, méthodes de recherche et de rédaction de dissertations historiques.",
        "language": "French",
        "restriction": "Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (M).",
        "title": "Le métier d'historien",
        "year": "2"
    },
    {
        "code": "HIS2501",
        "description": "Histoire générale de la Grèce, de l'âge du bronze à la veille de la bataille de Marathon (490 av. J.-C.).",
        "language": "French",
        "restriction": "Aussi offert sous la cote CLA2501.",
        "title": "Les Débuts de la civilisation grecque",
        "year": "2"
    },
    {
        "code": "HIS2502",
        "description": "Histoire générale de la Grèce, de la bataille de Marathon (490 av. J.-C.) à la bataille de Mantinée et à la Paix générale (362 av. J.-C.).",
        "language": "French",
        "restriction": "Aussi offert sous la cote CLA2502.",
        "title": "Athènes, la Perse et Sparte",
        "year": "2"
    },
    {
        "code": "HIS2503",
        "description": "Histoire générale de Rome, de sa fondation (753 av. J.-C.) à la mort de César (44 av. J.-C.).",
        "language": "French",
        "restriction": "Aussi offert sous la cote CLA2503.",
        "title": "La République",
        "year": "2"
    },
    {
        "code": "HIS2504",
        "description": "Histoire générale de Rome, du \"premier triumvirat\" (60 av. J.-C.) à l'accession au pouvoir de Septime Sévère (193 ap. J.-C.).",
        "language": "French",
        "restriction": "Aussi offert sous la cote CLA2504.",
        "title": "Le Haut-Empire",
        "year": "2"
    },
    {
        "code": "HIS2505",
        "description": "Survol de l'histoire de la communauté juive canadienne depuis les premières années du régime anglais jusqu'à la période contemporaine.",
        "language": "French",
        "restriction": "Aussi offert sous la cote CDN2505. (C).",
        "title": "Histoire des Juifs au Canada",
        "year": "2"
    },
    {
        "code": "HIS2516",
        "description": "Survol de l'histoire politique, sociale, économique et intellectuelle de la Russie tsariste sous les Romanov (1613-1917).",
        "language": "French",
        "restriction": "Aussi offert sous la cote RUS2516. (E).",
        "title": "La Russie impériale de 1613 à la Révolution de 1917",
        "year": "2"
    },
    {
        "code": "HIS2517",
        "description": "Survol de l'histoire politique, sociale, économique et intellectuelle de l'Union soviétique à partir de la révolution d'Octobre.",
        "language": "French",
        "restriction": "Aussi offert sous la cote RUS2517. (E).",
        "title": "Histoire de l'U.R.S.S.",
        "year": "2"
    },
    {
        "code": "HIS2521",
        "description": "Mise en application des principes de la critique textuelle: l'explication de texte. Introduction aux sciences connexes et aux techniques propres à l'histoire. Brève revue de l'historiographie à travers les âges.",
        "language": "French",
        "restriction": "Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (M).",
        "title": "Initiation à la critique historique",
        "year": "2"
    },
    {
        "code": "HIS2529",
        "description": "Analyse du rôle des technologies dans les changements sociaux, économiques et environnementaux des sociétés industrielles et post-industrielles.",
        "language": "French",
        "restriction": "Antérieurement HIS2739.",
        "title": "Technologies, société et environnement depuis 1800",
        "year": "2"
    },
    {
        "code": "HIS2551",
        "description": "La Guerre de Sept Ans, Révolution américaine, les institutions de la jeune république, la démocratie jacksonienne, l'expansion territoriale, la Guerre de Sécession et la Reconstruction.",
        "language": "French",
        "restriction": "(A).",
        "title": "Histoire des États-Unis de 1750 à 1877",
        "year": "2"
    },
    {
        "code": "HIS2552",
        "description": "De la Reconstruction à la fin de la Deuxième guerre mondiale. La montée des États-Unis en tant que puissance industrielle et militaire.",
        "language": "French",
        "restriction": "(A).",
        "title": "Histoire des États-Unis de 1877 à 1945",
        "year": "2"
    },
    {
        "code": "HIS2553",
        "description": "Histoire contemporaine des États-Unis portant sur les principaux développements économiques, sociaux, politiques et culturels.",
        "language": "French",
        "restriction": "(A).",
        "title": "Les États-Unis depuis 1945",
        "year": "2"
    },
    {
        "code": "HIS2560",
        "description": "Introduction à l'histoire du monde arabe, de l'Iran, d'Israël et de la Turquie depuis la Première Guerre mondiale. Principaux développements politiques, économiques et sociaux de la région.",
        "language": "French",
        "restriction": "Antérieurement HIS2760. (N).",
        "title": "Histoire du Moyen-Orient depuis la Première Guerre mondiale",
        "year": "2"
    },
    {
        "code": "HIS2570",
        "description": "Histoire des empires coloniaux espagnol et portugais de 1415 à 1825. Le sort de l'Indien, l'économie coloniale et la formation d'une société nouvelle.",
        "language": "French",
        "restriction": "Antérieurement HIS2770. (N).",
        "title": "Amérique latine, époque coloniale",
        "year": "2"
    },
    {
        "code": "HIS2571",
        "description": "Histoire de l'Amérique latine depuis l'indépendance. Instabilité du régime politique, sous-développement et impérialisme américain.",
        "language": "French",
        "restriction": "Antérieurement HIS2771. (N).",
        "title": "Amérique latine, époque contemporaine",
        "year": "2"
    },
    {
        "code": "HIS2575",
        "description": "Traditions religieuses, culturelles, sociales et politiques de l'Asie du Sud-Est",
        "language": "French",
        "restriction": "(N).",
        "title": "Civilisations de l'Asie du Sud-Est jusqu'au XVIIIe siècle",
        "year": "2"
    },
    {
        "code": "HIS2576",
        "description": "Événements et tendances historiques en Asie du Sud-Est du XVIIIe siècle à nos jours.",
        "language": "French",
        "restriction": "(N).",
        "title": "Civilisations de l'Asie du Sud-Est du XVIIIe siècle à nos jours",
        "year": "2"
    },
    {
        "code": "HIS2577",
        "description": "Introduction aux civilisations de la Chine, du Japon, et de la Corée de l'antiquité jusqu'à 1600. Attention particulière à la société, la culture et la pensée.",
        "language": "French",
        "restriction": "(N).",
        "title": "Histoire de l'Asie de l'Est de l'antiquité à 1600",
        "year": "2"
    },
    {
        "code": "HIS2578",
        "description": "Introduction aux civilisations de l'Asie de l'Est après 1600, en particulier de la Chine et du Japon. Étude des changements internes à ces pays ainsi que de leurs relations internationales et des transformations intellectuelles et culturelles.",
        "language": "French",
        "restriction": "(N).",
        "title": "Histoire de l'Asie de l'Est de 1600 à nos jours",
        "year": "2"
    },
    {
        "code": "HIS2582",
        "description": "Le rôle des femmes dans l'histoire canadienne, en particulier dans le contexte des changements économiques et sociaux des XIXe et XXe siècles.",
        "language": "French",
        "restriction": "(C).",
        "title": "Les femmes au Canada",
        "year": "2"
    },
    {
        "code": "HIS2583",
        "description": "Vierges, mères ou filles de joie? Images des femmes de l'Antiquité tardive au XVIIIe siècle; survol de leurs rôles sociaux, culturels, économiques et politiques.",
        "language": "French",
        "restriction": "(E).",
        "title": "Les femmes dans les sociétés occidentales jusqu'au XVIIIe siècle",
        "year": "2"
    },
    {
        "code": "HIS2584",
        "description": "Femmes au foyer, pionnières, suffragettes? Évolution des idées concernant les femmes et de leurs rôles dans les sociétés européennes et nord-américaines depuis le milieu du XVIIIe siècle.",
        "language": "French",
        "restriction": "Préalable : Recommandé, HIS2583.",
        "title": "Les femmes dans les sociétés occidentales du XVIIIe siècle à nos jours",
        "year": "2"
    },
    {
        "code": "HIS2597",
        "description": "L'histoire comme discipline; son épistémologie spécifique. Étude, en particulier, de problèmes tels que l'explication historique, l'objectivité et l'analyse causale.",
        "language": "French",
        "restriction": "Réservé aux étudiants et étudiantes insrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. Aussi offert sous la cote PHI2597. (M).",
        "title": "Philosophie de l'histoire",
        "year": "2"
    },
    {
        "code": "HIS2707",
        "description": "Les sociétés amérindiennes avant l'arrivée des Européens. Le début de la colonisation européenne (Nouvelle-France et Nouvelle-Angleterre) et la période de \"coopération\". Cas des Métis, des Inuits et des nations de la côte Ouest. Résistance amérindienne : confrontation et volonté d'autonomie.",
        "language": "French",
        "restriction": "Antérieurement HIS2705, HIS2706. (C).",
        "title": "Histoire des Amérindiens au Canada, des origines à nos jours",
        "year": "2"
    },
    {
        "code": "HIS2708",
        "description": "Histoire de la présence française en Amérique du Nord, y compris les francophonies minoritaires.",
        "language": "French",
        "restriction": "(C).",
        "title": "Histoire des francophonies nord-américaines",
        "year": "2"
    },
    {
        "code": "HIS2735",
        "description": "Étude du Moyen Age occidental : sa conception par les historiens, sa compréhension par le public, ses caractéristiques propres dans l'histoire de l'humanité.",
        "language": "French",
        "restriction": "Aussi offert sous la cote CLA2735. (E).",
        "title": "Décoder la période médiévale : L'occident du Ve au XVe siècle",
        "year": "2"
    },
    {
        "code": "HIS2736",
        "description": "Survol de l'histoire européenne depuis la Renaissance jusqu'à Napoléon: la Réforme, la société d'Ancien Régime, les Lumières et la Révolution française.",
        "language": "French",
        "restriction": "(E).",
        "title": "L'Europe moderne (XVIe-XVIIIe siècle)",
        "year": "2"
    },
    {
        "code": "HIS2741",
        "description": "L'hégémonie européenne, de Napoléon à la Première Guerre mondiale. La révolution industrielle. La lutte des classes et les mouvements révolutionnaires. Les mouvements nationaux et l'impérialisme.",
        "language": "French",
        "restriction": "Antérieurement HIS2541. (E).",
        "title": "L'Europe au XIXe siècle",
        "year": "2"
    },
    {
        "code": "HIS2742",
        "description": "L'Europe dans les grandes crises du XXe siècle : les deux conflits mondiaux, l'entre-deux-guerres, la décolonisation et la partition en deux camps après la Deuxième guerre mondiale, la Communauté européenne et l'effrondrement du bloc communiste depuis 1989.",
        "language": "French",
        "restriction": "Antérieurement HIS2542. (E).",
        "title": "L'Europe au XXe siècle",
        "year": "2"
    },
    {
        "code": "HIS2750",
        "description": " ",
        "language": "French",
        "restriction": "",
        "title": "Thèmes choisis en histoire moderne",
        "year": "2"
    },
    {
        "code": "HIS2751",
        "description": " ",
        "language": "French",
        "restriction": "",
        "title": "Thèmes choisis en histoire contemporaine",
        "year": "2"
    },
    {
        "code": "HIS2761",
        "description": "Évolution économique, sociale et politique de la colonie jusqu'au traité de Paris.",
        "language": "French",
        "restriction": "Antérieurement HIS2601. (C).",
        "title": "La Nouvelle-France",
        "year": "2"
    },
    {
        "code": "HIS2762",
        "description": "Évolution économique, sociale et politique de l'Amérique du Nord britannique du traité de Paris à la Confédération.",
        "language": "French",
        "restriction": "Antérieurement HIS2701 ou HIS2702. (C).",
        "title": "L'Amérique du Nord britannique 1763-1867",
        "year": "2"
    },
    {
        "code": "HIS2763",
        "description": "Évolution économique, sociale et politique du Canada et de Terre-Neuve et de la Confédération à la Grande Dépression.",
        "language": "French",
        "restriction": "Antérieurement HIS2703. (C).",
        "title": "Le Canada de 1867 à 1939",
        "year": "2"
    },
    {
        "code": "HIS2764",
        "description": "Évolution économique, sociale et politique du Canada de la Grande Dépression à nos jours; accession du Canada à l'indépendance et transformation de son rôle sur la scène mondiale.",
        "language": "French",
        "restriction": "Antérieurement HIS2704. (C).",
        "title": "Le Canada contemporain",
        "year": "2"
    },
    {
        "code": "HIS2775",
        "description": "Histoires de l'Afrique au sud du Sahara dans le monde pré-moderne. Les thèmes abordés seront, entre autres, les migrations, l'Islamisation, les réseaux de commerce (Sahara, Océan Indien, Atlantique), les traites esclavagistes, les transformations politiques, économiques et sociales. Études de cas.",
        "language": "French",
        "restriction": "(N).",
        "title": "Histoire de l'Afrique au sud du Sahara, 1000-1850",
        "year": "2"
    },
    {
        "code": "HIS2776",
        "description": "Étude des tendances économiques et politiques qui ont mené à la colonisation du continent africain après l abolition de la traite des esclaves; fabrication des états coloniaux; impact du colonialisme sur les sociétés africaines; mouvements anti-colonialistes et nationalistes; période post-coloniale. Études de cas.",
        "language": "French",
        "restriction": "(N).",
        "title": "Histoire de l'Afrique au sud du Sahara depuis 1850",
        "year": "2"
    },
    {
        "code": "HIS2901",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": "Reserved for students registered in a co-operative education program in History.   Réservé aux étudiants et étudiantes inscrits à un programme d'enseignement coopératif en histoire.",
        "title": "Stage coop I / CO-OP Work Term I",
        "year": "2"
    },
    {
        "code": "HIS3100",
        "description": "Different interpretations of Canadian history, particularly those written by authors of diverse cultural and linguistic backgrounds.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. Also offered as CDN3100.",
        "title": "Histories and Perceptions of History in Canada",
        "year": "3"
    },
    {
        "code": "HIS3104",
        "description": "The major political, social, and cultural trends in the development of modern Ontario.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (C).",
        "title": "Ontario Since Confederation",
        "year": "3"
    },
    {
        "code": "HIS3107",
        "description": "Economic, social, political and intellectual development of Quebec in the nineteenth century.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (C).",
        "title": "Quebec in the 19th Century",
        "year": "3"
    },
    {
        "code": "HIS3108",
        "description": "Economic, social, political and intellectual development of Quebec in the twentieth century.",
        "language": "English",
        "restriction": "Prerequisite: 12 credits in HIS including 6 credits at the 2000-level. (C).",
        "title": "Quebec in the 20th Century",
        "year": "3"
    },
    {
        "code": "HIS3109",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (C).",
        "title": "Selected Topics in Native History",
        "year": "3"
    },
    {
        "code": "HIS3110",
        "description": "Major issues in Greek or Roman history. Topics to be offered in rotation as advertised by the Department.",
        "language": "English",
        "restriction": "Also offered as CLA3110. This course may require some background knowledge. Please consult the Department of Classics and Religious Studies.",
        "title": "Topics in Ancient History",
        "year": "3"
    },
    {
        "code": "HIS3116",
        "description": "Impact of the Mongol invasions on Russian society and institutions; role of the Orthodox Church; rise of autocracy and extension of serfdom.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "Russian Social and Institutional History prior to Peter The Great",
        "year": "3"
    },
    {
        "code": "HIS3120",
        "description": " ",
        "language": "English",
        "restriction": "",
        "title": "Selected Topics in the History of Canada's Regions",
        "year": "3"
    },
    {
        "code": "HIS3124",
        "description": "The British Isles from the advent of the Tudors to the Union with Ireland: an examination of the main social and political realities as background to the growth of British power prior to the industrial revolution.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. Previously HIS2324. (E).",
        "title": "Britain from 1485 to 1800",
        "year": "3"
    },
    {
        "code": "HIS3125",
        "description": "The British Isles since the industrial revolution, focusing on the main trends of modern British society, from the height of its power in the Victorian age to its comparative decline in the 20th century.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. Previously HIS2325. (E).",
        "title": "Britain from 1800 to the Present",
        "year": "3"
    },
    {
        "code": "HIS3150",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (A).",
        "title": "Selected Topics in American History",
        "year": "3"
    },
    {
        "code": "HIS3154",
        "description": "Aspects of American foreign policy since Independence.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (A).",
        "title": "History of American Diplomacy",
        "year": "3"
    },
    {
        "code": "HIS3175",
        "description": "Colonisation and decolonisation in Vietnam from 111 B.C.E.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (N).",
        "title": "A History of the Vietnam Wars",
        "year": "3"
    },
    {
        "code": "HIS3180",
        "description": "Study of a theme related to the history of Asia. Themes may vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (N).",
        "title": "Selected Topics in Asian History",
        "year": "3"
    },
    {
        "code": "HIS3185",
        "description": "Study of a theme related to the history of Africa south of the Sahara. Themes may vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (N).",
        "title": "Selected Topics in African History south of the Sahara",
        "year": "3"
    },
    {
        "code": "HIS3190",
        "description": "Study of a theme related to the history of the Middle East and/or North Africa. Themes may vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (N).",
        "title": "Selected Topics in the History of the Middle East and North Africa",
        "year": "3"
    },
    {
        "code": "HIS3195",
        "description": "Study of a theme related to the history of Latin America and/or the Caribbean. Themes may vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (N).",
        "title": "Selected Topics in Latin American History",
        "year": "3"
    },
    {
        "code": "HIS3314",
        "description": "An examination of the relationship between society, diplomacy and warfare from 1939 to 1945, incorporating North American, European and Asian perspectives.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level.",
        "title": "The Second World War",
        "year": "3"
    },
    {
        "code": "HIS3315",
        "description": "An exploration of the origins of the struggle between the postwar superpowers, the changing nature of their rivalry and the way other nations were drawn into the conflict.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level.",
        "title": "The Cold War",
        "year": "3"
    },
    {
        "code": "HIS3320",
        "description": "A survey of the history of Western European integration since World War II, its influence on European political, social and economic development, and on inter-state relations.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "Building Europe, 1945 to the Present",
        "year": "3"
    },
    {
        "code": "HIS3328",
        "description": "Overview of the history of European anti-semitism, and analysis of the development of Nazi policies of extermination of the Jews, with a focus on European political and social developments between 1933 and 1945, and of responses, including victims', to state-legislated anti-semitism.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "The Holocaust",
        "year": "3"
    },
    {
        "code": "HIS3330",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "Selected Topics in European History",
        "year": "3"
    },
    {
        "code": "HIS3355",
        "description": "Evolution of Slovak identity from the 5th century to the reign of Joseph II, with emphasis upon the great Moravian empire, the Renaissance and Reformation, and the Enlightenment in the Hapsburg empire.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "The Slovaks and their Neighbours in Central Europe to 1780",
        "year": "3"
    },
    {
        "code": "HIS3356",
        "description": "Persistence of Slovak identity in the Hapsburg empire, the dual monarchy of Austria-Hungary, and the Czecho-Slovak republics.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "The Slovaks and their Neighbours in Central Europe since 1780",
        "year": "3"
    },
    {
        "code": "HIS3357",
        "description": "History of Czechoslovakia from its creation in 1918 to its dissolution in 1992: centralism versus federalism.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (E).",
        "title": "The Rise and Fall of Czechoslovakia",
        "year": "3"
    },
    {
        "code": "HIS3375",
        "description": "Study of a theme related to the history of Canada. Themes may vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level. (C).",
        "title": "Selected Topics in Canadian History",
        "year": "3"
    },
    {
        "code": "HIS3391",
        "description": "Ways in which history is shaped by governments, public institutions, the information and entertainment media, and artists for presentation to the general public.",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level.",
        "title": "Studies in Public History",
        "year": "3"
    },
    {
        "code": "HIS3397",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 12 HIS credits including 6 credits at the 2000-level.",
        "title": "Selected Topics in History",
        "year": "3"
    },
    {
        "code": "HIS3398",
        "description": "Study of a theme through translated primary sources. The theme may vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: Recommended, HIS2335. (E).",
        "title": "Selected Topics in Medieval History",
        "year": "3"
    },
    {
        "code": "HIS3500",
        "description": "Étude des différentes interprétations de l'histoire canadienne, particulièrement celles avancées par des historiens d'origines culturelles et linguistiques diverses.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. Aussi offert sous la cote CDN3500.",
        "title": "Histoire et perceptions de l'histoire au Canada",
        "year": "3"
    },
    {
        "code": "HIS3507",
        "description": "Évolution économique, sociale, politique et intellectuelle du Québec au XIXe siècle.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (C).",
        "title": "Le Québec au XIXe siècle",
        "year": "3"
    },
    {
        "code": "HIS3508",
        "description": "Évolution économique, sociale, politique et intellectuelle du Québec au XXe siècle.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits au niveau 2000. Ouvert sans préalable aux étudiants et étudiantes en Études des francophonies. (C).",
        "title": "Le Québec au XXe siècle",
        "year": "3"
    },
    {
        "code": "HIS3509",
        "description": "Étude d'un thème lié à l'histoire amérindienne. Les thèmes peuvent varier d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (C).",
        "title": "Thèmes choisis en histoire amérindienne",
        "year": "3"
    },
    {
        "code": "HIS3510",
        "description": "Études de thèmes choisis en histoire grecque ou romaine. Les thèmes varient tous les ans. Consulter la brochure du Département.",
        "language": "French",
        "restriction": "Aussi offert sous la cote CLA3510. Ce cours peut exiger une certaine connaissance préalable du sujet. Consulter le Département d'études anciennes et de sciences des religions.",
        "title": "Thèmes choisis en histoire ancienne",
        "year": "3"
    },
    {
        "code": "HIS3520",
        "description": " ",
        "language": "French",
        "restriction": "",
        "title": "Thèmes choisis en histoire des régions du Canada",
        "year": "3"
    },
    {
        "code": "HIS3550",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (A).",
        "title": "Thèmes choisis en histoire américaine",
        "year": "3"
    },
    {
        "code": "HIS3575",
        "description": "Colonisation et décolonisation au Vietnam depuis 111 avant notre ère.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (N).",
        "title": "Histoire des guerres du Vietnam",
        "year": "3"
    },
    {
        "code": "HIS3580",
        "description": "Étude d'un thème lié à l'histoire de l'Asie. Les thèmes peuvent varier d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (N).",
        "title": "Thèmes choisis en histoire de l'Asie",
        "year": "3"
    },
    {
        "code": "HIS3585",
        "description": "Étude d'un thème lié à l'histoire de l'Afrique au sud du Sahara. Les thèmes peuvent varier d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (N).",
        "title": "Thèmes choisis en histoire de l'Afrique au sud du Sahara",
        "year": "3"
    },
    {
        "code": "HIS3590",
        "description": "Étude d'un thème lié à l'histoire du Moyen-Orient et/ou de l'Afrique du Nord. Les thèmes peuvent varier d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (N).",
        "title": "Thèmes choisis en histoire du Moyen-Orient et de l'Afrique du Nord",
        "year": "3"
    },
    {
        "code": "HIS3595",
        "description": "Étude d'un thème lié à l'histoire de l'Amérique Latine et/ou des Caraïbes. Les thèmes peuvent varier d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (N).",
        "title": "Thèmes choisis en histoire de l'Amérique Latine",
        "year": "3"
    },
    {
        "code": "HIS3714",
        "description": "Aspects politiques, diplomatiques, sociaux, économiques, technologiques et militaires de la Deuxième Guerre mondiale en Europe, en Asie et en Amérique.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000.",
        "title": "La Deuxième Guerre mondiale",
        "year": "3"
    },
    {
        "code": "HIS3728",
        "description": "Survol de l'histoire de l'antisémitisme européen et analyse du développement de la politique d'extermination des Juifs menée par les Nazis; étude de la situation socio-politique européenne entre 1933 et 1945 et des réactions, y compris celles des victimes, face à la répression étatique. E.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (E).",
        "title": "L'holocauste",
        "year": "3"
    },
    {
        "code": "HIS3730",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (E).",
        "title": "Thèmes choisis en histoire de l'Europe",
        "year": "3"
    },
    {
        "code": "HIS3764",
        "description": "Permanences et transformations de la société française, de la Renaissance à la Révolution.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. Antérieurement HIS2730. (E).",
        "title": "La France de l'Ancien Régime de 1500 à 1799",
        "year": "3"
    },
    {
        "code": "HIS3765",
        "description": "Permanences et transformations de la société française contemporaine, dans le contexte d'une Europe en construction, de Napoléon à la Communauté européenne.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. Antérieurement HIS2731. (E).",
        "title": "La France des XIXe et XXe siècles",
        "year": "3"
    },
    {
        "code": "HIS3775",
        "description": "Étude d'un thème lié à l'histoire du Canada. Les thèmes peuvent varier d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. (C).",
        "title": "Thèmes choisis en histoire du Canada",
        "year": "3"
    },
    {
        "code": "HIS3781",
        "description": "La présence française sur le territoire de l'Ontario depuis la venue des premiers explorateurs et missionnaires jusqu'à nos jours.",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000. Antérieurement HIS2781. Ouvert sans préalable aux étudiants et étudiantes en Études des francophonies. (C).",
        "title": "Histoire de l'Ontario français",
        "year": "3"
    },
    {
        "code": "HIS3797",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 12 crédits HIS dont 6 crédits de niveau 2000.",
        "title": "Thèmes choisis en histoire",
        "year": "3"
    },
    {
        "code": "HIS3798",
        "description": "Étude d'un thème à partir de sources traduites. Le thème peut changer d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : recommandé, HIS2735. (E).",
        "title": "Thèmes choisis en histoire médiévale",
        "year": "3"
    },
    {
        "code": "HIS3901",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": "Reserved for students registered in a co-operative education program in History.   Réservé aux étudiants et étudiantes inscrits à un programme d'enseignement coopératif en histoire.",
        "title": "Stage coop II / CO-OP Work Term II",
        "year": "3"
    },
    {
        "code": "HIS3902",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": "Reserved for students registered in a co-operative education program in History.   Réservé aux étudiants et étudiantes inscrits à un programme d'enseignement coopératif en histoire.",
        "title": "Stage coop III / CO-OP Work Term III",
        "year": "3"
    },
    {
        "code": "HIS4135",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (C).",
        "title": "Seminar in Canadian History",
        "year": "4"
    },
    {
        "code": "HIS4138",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (C).",
        "title": "Seminar in Quebec History",
        "year": "4"
    },
    {
        "code": "HIS4140",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Seminar in Diplomatic History",
        "year": "4"
    },
    {
        "code": "HIS4141",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Seminar in Comparative History",
        "year": "4"
    },
    {
        "code": "HIS4142",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Seminar in Medical History",
        "year": "4"
    },
    {
        "code": "HIS4150",
        "description": "Focused investigation of selected themes and topics in Greek or Roman history.",
        "language": "English",
        "restriction": "Prerequisite: CLA3110 or HIS3110. Also offered as CLA4150. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Ancient History Seminar",
        "year": "4"
    },
    {
        "code": "HIS4151",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (A).",
        "title": "Seminar in American History",
        "year": "4"
    },
    {
        "code": "HIS4182",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Seminar in Women's History",
        "year": "4"
    },
    {
        "code": "HIS4184",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (N).",
        "title": "Seminar in Asian history",
        "year": "4"
    },
    {
        "code": "HIS4186",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (N).",
        "title": "Seminar in African history",
        "year": "4"
    },
    {
        "code": "HIS4192",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (N).",
        "title": "Seminar in the history of the Middle East and North Africa",
        "year": "4"
    },
    {
        "code": "HIS4300",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (M).",
        "title": "Seminar in Historical Methodology",
        "year": "4"
    },
    {
        "code": "HIS4320",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits, HIS2335 is recommended. Reserved for students registered in the Honours, Joint Honours or Major in History, or in the Major in Medieval Studies.",
        "title": "Seminar in Medieval History",
        "year": "4"
    },
    {
        "code": "HIS4355",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Seminar in Slovak History",
        "year": "4"
    },
    {
        "code": "HIS4360",
        "description": "The themes will vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (C).",
        "title": "Selected Topics in Canadian History",
        "year": "4"
    },
    {
        "code": "HIS4361",
        "description": "The themes will vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (A).",
        "title": "Selected Topics in American History",
        "year": "4"
    },
    {
        "code": "HIS4362",
        "description": "The themes will vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (E).",
        "title": "Selected Topics in European History",
        "year": "4"
    },
    {
        "code": "HIS4363",
        "description": "The themes will vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (N).",
        "title": "Selected Topics in Non-Western History",
        "year": "4"
    },
    {
        "code": "HIS4364",
        "description": "The themes will vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Also offered as EAS4364. Reserved for students registered in the Honours, Joint Honours or Major in History, or in the Major in Arboriginal Studies.",
        "title": "Selected Topics in Aboriginal History",
        "year": "4"
    },
    {
        "code": "HIS4365",
        "description": "The themes will vary from year to year.",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (C).",
        "title": "Selected Topics in History",
        "year": "4"
    },
    {
        "code": "HIS4370",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (A).",
        "title": "Seminar in Latin American History",
        "year": "4"
    },
    {
        "code": "HIS4380",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (A).",
        "title": "Seminar in North American History",
        "year": "4"
    },
    {
        "code": "HIS4391",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History.",
        "title": "Seminar in Canadian Material History",
        "year": "4"
    },
    {
        "code": "HIS4397",
        "description": " ",
        "language": "English",
        "restriction": "Prerequisite: 81 university credits. Reserved for students registered in the Honours, Joint Honours or Major in History. (E).",
        "title": "Seminar in European History",
        "year": "4"
    },
    {
        "code": "HIS4535",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (C).",
        "title": "Séminaire en histoire du Canada",
        "year": "4"
    },
    {
        "code": "HIS4538",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (C).",
        "title": "Séminaire en histoire du Québec",
        "year": "4"
    },
    {
        "code": "HIS4540",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire.",
        "title": "Séminaire en histoire des relations internationales",
        "year": "4"
    },
    {
        "code": "HIS4541",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire.",
        "title": "Séminaire en histoire comparée",
        "year": "4"
    },
    {
        "code": "HIS4542",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire.",
        "title": "Séminaire en histoire de la médecine",
        "year": "4"
    },
    {
        "code": "HIS4550",
        "description": "Étude approfondie de thèmes choisis en histoire grecque ou romaine.",
        "language": "French",
        "restriction": "Préalable : CLA3510 ou HIS3510. Aussi offert sous la cote CLA4550. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire.",
        "title": "Séminaire en histoire ancienne",
        "year": "4"
    },
    {
        "code": "HIS4551",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (A).",
        "title": "Séminaire en histoire des États-Unis",
        "year": "4"
    },
    {
        "code": "HIS4582",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire.",
        "title": "Séminaire en histoire des femmes",
        "year": "4"
    },
    {
        "code": "HIS4584",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (N).",
        "title": "Séminaire en histoire de l'Asie",
        "year": "4"
    },
    {
        "code": "HIS4586",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (N).",
        "title": "Séminaire en histoire de l'Afrique",
        "year": "4"
    },
    {
        "code": "HIS4592",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (N).",
        "title": "Séminaire en histoire du Moyen-Orient et de l'Afrique du Nord",
        "year": "4"
    },
    {
        "code": "HIS4700",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (M).",
        "title": "Séminaire en méthodologie historique",
        "year": "4"
    },
    {
        "code": "HIS4720",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires, HIS2735 est recommandé. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire, ou à la majeure en études médiévales.",
        "title": "Séminaire en histoire médiévale",
        "year": "4"
    },
    {
        "code": "HIS4760",
        "description": "Les thèmes varient d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (C).",
        "title": "Thèmes choisis en histoire canadienne",
        "year": "4"
    },
    {
        "code": "HIS4761",
        "description": "Les thèmes varient d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (A).",
        "title": "Thèmes choisis en histoire américaine",
        "year": "4"
    },
    {
        "code": "HIS4762",
        "description": "Les thèmes varient d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (E).",
        "title": "Thèmes choisis en histoire européenne",
        "year": "4"
    },
    {
        "code": "HIS4763",
        "description": "Les thèmes varient d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (N).",
        "title": "Thèmes choisis en histoire non occidentale",
        "year": "4"
    },
    {
        "code": "HIS4764",
        "description": "Les thèmes varient d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Aussi offert sous la cote EAS4764. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire, ou à la majeure en études autochtones.",
        "title": "Thèmes choisis en histoire autochtone",
        "year": "4"
    },
    {
        "code": "HIS4765",
        "description": "Les thèmes varient d'une année à l'autre.",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire.",
        "title": "Thèmes choisis en histoire",
        "year": "4"
    },
    {
        "code": "HIS4770",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (A).",
        "title": "Séminaire en histoire de l'Amérique latine",
        "year": "4"
    },
    {
        "code": "HIS4780",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (A).",
        "title": "Séminaire en histoire de l'Amérique du Nord",
        "year": "4"
    },
    {
        "code": "HIS4797",
        "description": " ",
        "language": "French",
        "restriction": "Préalable : 81 crédits universitaires. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé, bidisciplinaire ou à la majeure en histoire. (E).",
        "title": "Séminaire en histoire de l'Europe",
        "year": "4"
    },
    {
        "code": "HIS4900",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": "Prerequisite: Permission of the Department. Enrolment will be strictly limited. Reserved for students registered in the Honours or Joint Honours History.   Préalable : Permission du Département. Inscriptions contingentées. Réservé aux étudiants et étudiantes inscrits au Baccalauréat spécialisé ou bidisciplinaire en histoire.",
        "title": "Mémoire de recherche en histoire / History Research Essay",
        "year": "4"
    },
    {
        "code": "HIS4901",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": "Reserved for students registered in a co-operative education program in History.   Réservé aux étudiants et étudiantes inscrits à un programme d'enseignement coopératif en histoire.",
        "title": "Stage coop IV / CO-OP Work Term IV",
        "year": "4"
    },
    {
        "code": "HIS4902",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": " ",
        "title": "Stage coop V / CO-OP Work Term V",
        "year": "4"
    }
];

export default courses;
