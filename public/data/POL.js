const courses = [
    {
        "code": "POL1101",
        "description": "Comparative study of the ideas, concepts and issues leading to an understanding of political phenomena and of their impact on the lives of individuals and societies. Reflection on power, citizenship and political participation. Introduction to research tasks (e.g. bibliographic research, writing a research or reading report).",
        "language": "English",
        "restriction": "",
        "title": "Introduction to Political Science",
        "year": "1"
    },
    {
        "code": "POL1102",
        "description": "Understanding globalization in its political, economic, social and cultural dimensions. Relationship between globalization and politics: new roles for the nation-state, international organizations, social movements, local communities. Introduction to research tasks (e.g. bibliographic research, writing a research or reading report).",
        "language": "English",
        "restriction": "",
        "title": "Politics and Globalization",
        "year": "1"
    },
    {
        "code": "POL1501",
        "description": "Étude comparative des idées, concepts et enjeux permettant une compréhension des phénomènes politiques et de leur importance dans la vie des individus et des collectivités. Questionnement sur le pouvoir, la citoyenneté et la participation politique. Introduction au travail de recherche (ex. : recherche bibliographique, rédaction d'un rapport de recherche ou de lecture).",
        "language": "French",
        "restriction": "",
        "title": "Introduction à la science politique",
        "year": "1"
    },
    {
        "code": "POL1502",
        "description": "Examen du phénomène de la mondialisation : ses dimensions politiques, économiques, sociales, culturelles. Rapports entre la mondialisation et la politique : changements dans le rôle de l'État-nation, des organisations internationales, des mouvements sociaux, des communautés locales. Introduction au travail de recherche (ex. : recherche bibliographique, rédaction d'un rapport de recherche ou de lecture).",
        "language": "French",
        "restriction": "",
        "title": "Politique et mondialisation",
        "year": "1"
    },
    {
        "code": "POL2101",
        "description": "Foundations of the Canadian political space. Constitution, parliamentary government, federalism. Political parties and elections. Overview of political forces (classes, groups, movements). (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL1101 or 18 university course credits.",
        "title": "Introduction to Canadian Politics",
        "year": "2"
    },
    {
        "code": "POL2103",
        "description": "Study of international relations and the dynamics within global order with an emphasis on key concepts, theories and analytic frameworks. Analysis of contemporary issues and their impact on globalization and global relations. (INT)",
        "language": "English",
        "restriction": "Prerequisite: POL1101 or POL1102 or 18 university course credits.",
        "title": "Introduction to International Relations and Global Politics",
        "year": "2"
    },
    {
        "code": "POL2104",
        "description": "Introduction to the comparative study of political phenomena within states, in various historical, cultural and institutional contexts. Methods, theoretical frameworks, typologies and concepts commonly used in the comparative study of political phenomena. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL1101 or POL1102 or 18 university course credits.",
        "title": "Introduction to Comparative Politics",
        "year": "2"
    },
    {
        "code": "POL2107",
        "description": "Origins and development of political thought. Study of the principal themes of ancient and medieval political thought; brief discussion of nascent themes of modernity. (PPT)",
        "language": "English",
        "restriction": "Prerequisite : POL1101 or 18 university course credits.",
        "title": "Introduction to Political Thought",
        "year": "2"
    },
    {
        "code": "POL2108",
        "description": "Origins and development of early modern political thought (from the 16th to the 18th centuries). (PPT)",
        "language": "English",
        "restriction": "Prerequisite : POL2107.",
        "title": "Modern Political Thought I",
        "year": "2"
    },
    {
        "code": "POL2156",
        "description": "Introduction to the fundamental dimensions of research. Presentation of several epistemological approaches and the questions they raise. Study of diverse logics of enquiry and their modes of inference. Introduction to some techniques and methods. Elaboration of a research project covering all of the required steps.",
        "language": "English",
        "restriction": "Prerequisite: 18 university credits. This course is equivalent to CMN2101, CRM2303, FEM2103, PSY2174, SCS2150, SOC2111.",
        "title": "Foundations of Research in Political Science",
        "year": "2"
    },
    {
        "code": "POL2501",
        "description": "Fondements de l'espace politique canadien. Constitution, parlementarisme et fédéralisme. Partis politiques et élections. Aperçu des forces politiques (classes, groupes, mouvements). (CAN)",
        "language": "French",
        "restriction": "Préalable : POL1501 ou 18 crédits de cours universitaires.",
        "title": "Introduction à la politique canadienne",
        "year": "2"
    },
    {
        "code": "POL2503",
        "description": "Étude des relations internationales et des dynamiques planétaires avec une place centrale accordée aux concepts, théories et cadres analytiques. Analyse des enjeux contemporains et de leurs conséquences sur la mondialisation et les relations planétaires. (INT)",
        "language": "French",
        "restriction": "Préalable : POL1501 ou POL1502 ou 18 crédits de cours universitaires.",
        "title": "Introduction aux relations internationales et à la politique mondiale",
        "year": "2"
    },
    {
        "code": "POL2504",
        "description": "Introduction à l'étude comparative de phénomènes politiques internes aux États, dans différents contextes historiques, culturels et institutionnels. Méthodes, approches théoriques, typologies et concepts utilisés dans l'analyse comparée des phénomènes politiques. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL1501 ou POL1502 ou 18 crédits de cours universitaires.",
        "title": "Introduction à la politique comparée",
        "year": "2"
    },
    {
        "code": "POL2507",
        "description": "Origines et développement de la pensée politique. Études des principaux thèmes de la pensée politique ancienne et médiévale. Brève introduction aux principaux thèmes de la pensée politique moderne naissante. (PPT)",
        "language": "French",
        "restriction": "Préalable : POL1501 ou 18 crédits de cours universitaires.",
        "title": "Introduction à la pensée politique",
        "year": "2"
    },
    {
        "code": "POL2508",
        "description": "Origines et développement de la pensée politique moderne (du 16e au 18e siècle). (PPT)",
        "language": "French",
        "restriction": "Préalable : POL2507.",
        "title": "Pensée politique moderne I",
        "year": "2"
    },
    {
        "code": "POL2556",
        "description": "Introduction aux dimensions fondamentales du processus de recherche. Présentation de plusieurs approches épistémologiques et de leurs enjeux. Étude de diverses logiques d'enquête et des modes d'inférences et des méthodes de recherche s'y rapportant. Élaboration d'un projet couvrant les diverses étapes de la recherche.",
        "language": "French",
        "restriction": "Préalable : 18 crédits universitaires. Ce cours est équivalent à CMN2501, CRM2703, FEM2503, PSY2574, SCS2550, SOC2511.",
        "title": "Fondements de la recherche en science politique",
        "year": "2"
    },
    {
        "code": "POL2901",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": " ",
        "title": "Stage coop I / CO-OP Work Term I",
        "year": "2"
    },
    {
        "code": "POL3102",
        "description": "Origins and development of later modern political thought (from the 19th century onwards). (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2107, POL2108.",
        "title": "Modern Political Thought II",
        "year": "3"
    },
    {
        "code": "POL3103",
        "description": "Study of the relationship between the state and the market in capitalist societies. Examination of political economy as a critical method of analysis of contemporary political phenomena. Analysis of the impact of social structures and political institutions on the socio-economic orientations of states. (CAN/COMP/INT/PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2101 or POL2103 or POL2104 or POL2107.",
        "title": "Introduction to Political Economy",
        "year": "3"
    },
    {
        "code": "POL3105",
        "description": "Origins, evolution and key concepts of various theories of democracy (e.g. direct, representative, liberal democracy). Main historical and contemporary debates and issues about democratic politics. (PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108.",
        "title": "Theories of Democracy",
        "year": "3"
    },
    {
        "code": "POL3106",
        "description": "Theoretical study of the intellectual roots of totalitarianism and fascism. Importance of these historical phenomena and of the issues they raise. (PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108.",
        "title": "Totalitarianism and Authoritarianism",
        "year": "3"
    },
    {
        "code": "POL3109",
        "description": "Critical analysis of the ideas of nation and nationalism. Nation, ethnicity, peuple, fatherland, nation-state, citizenship, national sovereignty. Relationship between nationalism and various globalizing and particularizing phenomena. (CAN/COMP/INT/PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108.",
        "title": "Nationalism",
        "year": "3"
    },
    {
        "code": "POL3110",
        "description": "Study of non-Western political thought (e.g. in Asia, Africa, the Muslim world, indigenous people). Analysis of critical non-Western political thought, including anti-colonialism, post-colonialism, critique of liberalism and neotraditionalism. (PPT/COMP/INT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108.",
        "title": "Non-Western Political Thought",
        "year": "3"
    },
    {
        "code": "POL3113",
        "description": "Study of different forms of international mobility and the political, economic and identity issues they raise. Themes can include historical and contemporary modes of governing migration and mobility; changes in migration as a result of global economic restructuring; the role that concepts of borders, nations and citizenship play in shaping relevant political spaces; theoretical, methodological and ethical issues associated with the study of mobility and migration. (INT/COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104.",
        "title": "Migration, Mobility, Borders and Citizenship",
        "year": "3"
    },
    {
        "code": "POL3114",
        "description": "Comparative study of development processes and institutions in different countries of Asia. Examination of the relationship between politics, culture and society. Analysis of the regional dimensions of Asian politics. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104 or 54 university credits.",
        "title": "Comparative Politics: Asia",
        "year": "3"
    },
    {
        "code": "POL3115",
        "description": "Comparative political analysis of development in various regions of the world (Africa, Asia, the Middle East, and Latin America & the Caribbean). Theories of political and economic development. The role of international organizations, states, and non-state actors in the politics of development. Effects on societies of their incorporation into the global economy. Study of selected issues such as self-determination, state-society relations and democracy, sustainable development and social justice. Case studies drawn mainly from countries having adopted different approaches to development. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104. The courses POL3115, SOC3331, DVM3350 cannot be combined for credits.",
        "title": "Comparative Politics of Development",
        "year": "3"
    },
    {
        "code": "POL3116",
        "description": "A study of the relationship between culture and politics in one or more national and linguistic contexts. The themes explored will vary from year to year. (INT/CAN/PPT/COMP).",
        "language": "English",
        "restriction": "Prerequisite: 54 university course credits.",
        "title": "Politics and Culture",
        "year": "3"
    },
    {
        "code": "POL3123",
        "description": "Theoretical and empirical issues raised when gender is taken into consideration in the analysis of international relations. Examination of various themes: environment, militarism, international political economy, international development, human rights. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103. Previously POL4123.",
        "title": "Gender Studies and Feminist Theories in International Relations",
        "year": "3"
    },
    {
        "code": "POL3124",
        "description": "Introduction to the study of strategies, tactics, institutions, theories, and practices of international security broadly defined. Topics examined may include: insecurity, war, surveillance, borders, technologies, environment, terror, and militarization. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 or POL2104 or ECH2330. Previously POL4124.",
        "title": "The Politics of Security",
        "year": "3"
    },
    {
        "code": "POL3125",
        "description": "Study of political, social and economic issues confronted by cities in Canada and elsewhere. Theories and approaches to the analysis of urban governance. Examination of the role of cities and of regions in the new global economy. Relations between federal, provincial and municipal governments in Canada. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Urban Politics in Canada",
        "year": "3"
    },
    {
        "code": "POL3126",
        "description": "Historical survey of the relationships between women and politics. Theories pertaining to the dynamic interactions of ideologies, attitudes, institutions, as well as economic, social and cultural phenomena affecting women's positions in political life. Analysis of selected aspects of the political role of women. (CAN/COMP/PPT)",
        "language": "English",
        "restriction": "Prerequisite: 54 university credits.",
        "title": "Women and Politics",
        "year": "3"
    },
    {
        "code": "POL3128",
        "description": "The political system and major transformations in Quebec : from a traditional to a modern society; problems of urbanization. Ideological foundations : federalism and independentism, Quebecois socialism. Social classes in Quebec. Political personal and public administration. Union forces in Quebec. Elections and electoral reforms. Future outlook. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Political Life in Quebec",
        "year": "3"
    },
    {
        "code": "POL3133",
        "description": "Study of the relationship between media and politics in Canada and elsewhere. Changing models of information access and their influence on political authority figures. Information as power and the conflict between media and government. Television debates, political campaigns, and political conventions as pseudo-events. Mediated realities. (CAN/COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2101 or 54 university credits. Also offered as CMN3133.",
        "title": "Political Communication",
        "year": "3"
    },
    {
        "code": "POL3135",
        "description": "Study of questions and policies dealing with Francophones in Ontario. This course's aim is twofold: on the one hand, to ensure a better understanding of the Francophone presence in the 20th century, of Francophone groups and movements in Ontario, of the role played by Francophones in Ontario politics; and on the other hand, to allow a theoretical reflection on culture, on the being and becoming of the French-speaking citizen living in a minority context (outside the province of Quebec) in the Canadian federation. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Politics and Francophonie in Ontario",
        "year": "3"
    },
    {
        "code": "POL3136",
        "description": "Analysis of the origins of Socialist political thought and its most important texts, with a particular focus on the development of Marxism and the ideology of Communism in the 20th century. (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108. Previously POL4136.",
        "title": "Socialism and Marxism",
        "year": "3"
    },
    {
        "code": "POL3137",
        "description": "Analysis of the main concepts (e.g. individual, citizen, liberty, equality, justice, culture) of liberalism and neo-liberalism as methods of understanding modern societies and their transformation. Main debates within liberalism and between liberalism and other political and ideological traditions. (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108. Previously POL4137.",
        "title": "Liberalism",
        "year": "3"
    },
    {
        "code": "POL3141",
        "description": "Analysis of the origins and key concepts of conservatism and neoconservatism. (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108. Previously POL4140.",
        "title": "Conservatism and Neoconservatism",
        "year": "3"
    },
    {
        "code": "POL3144",
        "description": "Comparative study of development processes and institutions in different countries of Africa. Relationship between politics, culture and society. National and regional particularities. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104.",
        "title": "Comparative Politics: Africa",
        "year": "3"
    },
    {
        "code": "POL3145",
        "description": "Comparative study of development processes and institutions in different countries in Latin America. Relationship between politics, culture and society. National and regional particularities. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104 or 54 university credits.",
        "title": "Comparative Politics: Latin America",
        "year": "3"
    },
    {
        "code": "POL3157",
        "description": "Study of theoretical understandings and justifications of the public legal system and its role in politics. Evaluation of contemporary political-legal issues (e.g. activist courts, charter rights, separation of religion and politics). (PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108.",
        "title": "Political Legal Theory",
        "year": "3"
    },
    {
        "code": "POL3159",
        "description": "Historical and contemporary challenges in the relationship between Indigenous peoples and the State in Canada. Indigenous rights in a comparative perspective. Indigenous approaches to governance. (CAN/COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Indigenous Politics in Canada",
        "year": "3"
    },
    {
        "code": "POL3162",
        "description": "Causes and forms of violence aimed at changing policies, controlling a state, overthrowing a regime, or altering political boundaries. Forms of social, ethnic, and fundamentalist violence, including riots, massacres, terrorism, ethnic cleansing, and genocide. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2104.",
        "title": "Political Violence",
        "year": "3"
    },
    {
        "code": "POL3164",
        "description": "Comparative study of development processes and institutions in different countries of the Middle East and the Arab World. Examination of the relationship between politics, culture and society. Analysis of the regional dimensions of the Arab World and Middle Eastern Politics. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104.",
        "title": "Comparative Politics: Middle East and Arab World",
        "year": "3"
    },
    {
        "code": "POL3170",
        "description": "Study of the role of Canadian provinces in the Canadian political system. Comparative study of political cultures, of public policy and of provincial political systems. Analysis of the similarities and differences between provinces in their responses to social and economic challenges. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Comparative Provincial Politics",
        "year": "3"
    },
    {
        "code": "POL3171",
        "description": "Theories and perspective in the analysis of immigration and citizenship policies in Canada and Québec. The politics of multiculturalism and interculturalism, the challenges of ethnocultural and religious diversity in Canada. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Immigration, Multiculturalism and Citizenship in Canada and Quebec",
        "year": "3"
    },
    {
        "code": "POL3172",
        "description": "Analysis of factors influencing the political participation of Canadian citizens. The electoral system, the role of political parties, the influence of interest groups, social movements and other forms of collective action in Canadian democracy. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101.",
        "title": "Political Participation and Mobilization in Canada",
        "year": "3"
    },
    {
        "code": "POL3174",
        "description": "Main concepts and theoretical approaches in the analysis of federalism. Normative foundations of federalism. The Canadian federal system in a comparative perspective. Central themes in the study of federalism (e.g. identity and diversity, regional inequalities, secession). (CAN/COMP/PPT/INT)",
        "language": "English",
        "restriction": "Prerequisite: POL2101 or POL2103 or POL2104.",
        "title": "Federalism",
        "year": "3"
    },
    {
        "code": "POL3175",
        "description": "Analysis of major debates about the politics of the environment. Focus on environmental political theory, environmental movements, green political parties and environmental public policies in various countries, including Canada, as well as at the international level. (CAN/COMP/PPT/INT)",
        "language": "English",
        "restriction": "Prerequisite: POL2101 or POL2103 or POL2104.",
        "title": "Ecopolitics",
        "year": "3"
    },
    {
        "code": "POL3176",
        "description": "Introduction to the study of historical and contemporary issues in the global political economy, from a variety of theoretical perspectives. Topics examined may include: the role of the state in the global economy, international finance, the international division of labour, international trade and global development. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103. Previously POL4176.",
        "title": "International Political Economy",
        "year": "3"
    },
    {
        "code": "POL3177",
        "description": "Theoretical approaches used to study the practices, strategies and political discourse of social movements and civil society actors. Relationship between social movements, economic restructuring and the changing role of the State in the context of globalization. Political significance and impact of social movements within and across state borders. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103. Previously POL4171.",
        "title": "Politics, Social Movements and Globalisation",
        "year": "3"
    },
    {
        "code": "POL3178",
        "description": "Study of main constitutional and institutional frameworks, forces and factors influencing Canadian foreign policy. Canada's role in international organizations such as NATO, the UN, and the Francophonie. Canadian relations with North American governments and social/economic actors (Mexico and USA). Major issues in North American politics, including NAFTA, continental security, democracy, and the possibility of a North American political community. (INT/CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2103.",
        "title": "Canadian Foreign Policy and North American Relations",
        "year": "3"
    },
    {
        "code": "POL3179",
        "description": "Introduction to the study of international organizations, transnational networks and institutions and practices of regulation within the context of global governance and globalization. Topics examined may include: the role of the United Nations and UN agencies, collective security, promotion of global norms and justice, international law, forces of resistance, transnational flows, economic and social development, NGOs. (INT)",
        "language": "English",
        "restriction": "Prerequisite: POL2103.",
        "title": "International Organizations and Global Governance",
        "year": "3"
    },
    {
        "code": "POL3180",
        "description": "Comparative analysis of institutions and political processes of European countries (Western and/or Eastern Europe) and/or the European Union. Covered topics may include: state formation; European integration; transformation of the welfare-state; public policies; formation and transformation of political regimes (democracy, authoritarianism, post-communism); political parties and social movements; political violence; nationalisms and regional identities. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2104.",
        "title": "Comparative Politics : Europe",
        "year": "3"
    },
    {
        "code": "POL3370",
        "description": "Epistemology and logics of qualitative analysis. Introduction to a variety of approaches and methodologies. Observation techniques (participatory and non-participatory observation); historical analysis of documents; comparative method, discourse analysis, political ethnography, interviews, and the multimethods approach.",
        "language": "English",
        "restriction": "Prerequisite: POL2156 or SCS2150. This course is equivalent to CMN3103.",
        "title": "Qualitative Analysis in Political Science",
        "year": "3"
    },
    {
        "code": "POL3371",
        "description": "Epistemology and logic of quantitative analysis. Introduction to descriptive statistics and to the main steps inherent in quantitative research, such as data gathering, measurement scales, measures of dispersion and of central tendencies, probability, sampling techniques. Practice of elementary techniques of analysis with dataset software: association measurement, test of hypothesis, regression analysis, bivariate and multivariate analyses, correlation. Multimethods approach.",
        "language": "English",
        "restriction": "Prerequisite: POL2156 or SCS2150. This course is equivalent to CMN3102.",
        "title": "Quantitative Analysis in Political Science",
        "year": "3"
    },
    {
        "code": "POL3502",
        "description": "Origine et développement de la pensée politique de la modernité avancée (du 19e siècle à aujourd'hui). (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2507, POL2508.",
        "title": "Pensée politique moderne II",
        "year": "3"
    },
    {
        "code": "POL3503",
        "description": "Étude des relations entre l'État et le marché dans les sociétés capitalistes. Exploration de l'économie politique comme méthode d'analyse critique des phénomènes politiques contemporains. Analyse de l'impact des structures sociales et des institutions politiques sur l'orientation socio-économique des États. (CAN/COMP/INT/PPT)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "Introduction à l'économie politique",
        "year": "3"
    },
    {
        "code": "POL3505",
        "description": "Origines et évolution des concepts et théories associés à la démocratie. Débats autour des différentes formes historiques de la démocratie : démocratie directe, démocratie représentative et libérale. Enjeux contemporains de la démocratie. (PPT)",
        "language": "French",
        "restriction": "Préalable : POL2508.",
        "title": "Théories sur la démocratie",
        "year": "3"
    },
    {
        "code": "POL3506",
        "description": "Examen théorique et étude des origines intellectuelles des expériences totalitaires et fascistes. L'importance de ces expériences historiques et les enjeux qu'elles soulèvent. (PPT)",
        "language": "French",
        "restriction": "Préalable : POL2508.",
        "title": "Le totalitarisme et l'autoritarisme",
        "year": "3"
    },
    {
        "code": "POL3509",
        "description": "Analyse critique des idées de la nation et du nationalisme. Nation, ethnie, peuple, patrie, État-nation, citoyenneté, souveraineté nationale. Rapports du nationalisme avec des phénomènes de mondialisation et de particularisation. (CAN/COMP/INT/PPT)",
        "language": "French",
        "restriction": "Préalable : POL2508.",
        "title": "Le nationalisme",
        "year": "3"
    },
    {
        "code": "POL3510",
        "description": "Étude de la pensée politique non-occidentale (ex. : en Asie, en Afrique, dans le monde musulman, chez les peuples autochtones). Études des pensées critiques non-occidentales, notamment anticoloniale et postcoloniale, critique du libéralisme et du néotraditionalisme. (PPT/COMP/INT)",
        "language": "French",
        "restriction": "Préalable : POL2508 ou POL2503 ou POL2504.",
        "title": "La pensée politique non occidentale",
        "year": "3"
    },
    {
        "code": "POL3513",
        "description": "Étude de diverses formes de mobilité internationale et de leurs enjeux politiques, économiques et identitaires. Les thèmes abordés peuvent inclure les formes historiques et contemporaines de gestion de la migration et de la mobilité; les mutations de la migration engendrées par les restructurations économiques mondiales; le rôle des notions de frontières, nations et de citoyenneté dans la construction du politique; les enjeux théoriques, méthodologiques et éthiques associés à l'étude de la mobilité et de la migration. (INT/COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504.",
        "title": "Migration, mobilité, frontières et citoyenneté",
        "year": "3"
    },
    {
        "code": "POL3514",
        "description": "Étude comparée des processus et institutions politiques de différents pays asiatiques. Rapports entre la politique, la culture et la société. Analyse de la collaboration, des processus d'intégration et des rapports qui se dessinent au sein des régions. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504 ou 54 crédits universitaires.",
        "title": "Politique comparée : Asie",
        "year": "3"
    },
    {
        "code": "POL3515",
        "description": "Analyse politique comparée du développement dans différentes régions du monde (Afrique, Amérique Latine et Caraïbes, Asie et Moyen-Orient). Théories du développement politique et économique. Le rôle des organisations internationales, des états, et des acteurs non-étatiques dans les politiques de développement. Effets sur les sociétés de leur incorporation dans l'économie mondiale. Autodétermination, rapports états-société et démocratie, développement durable et équité. Études de cas tirées de pays ayant adopté des stratégies différentes de développement. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504. Les cours POL3515, SOC3731, DVM3750 ne peuvent être combinés pour l'obtention de crédits.",
        "title": "Politique comparée du développement",
        "year": "3"
    },
    {
        "code": "POL3516",
        "description": "Étude des liens entre la culture et la politique dans un ou plusieurs contextes nationaux et linguistiques. Les thèmes particuliers varieront d'année en année. (INT/CAN/COMP/PPT).",
        "language": "French",
        "restriction": "Préalable : 54 crédits de cours universitaires.",
        "title": "Politique et culture",
        "year": "3"
    },
    {
        "code": "POL3523",
        "description": "Questions théoriques et pratiques soulevées par la prise en considération des rapports sociaux de sexe dans les analyses des relations internationales. Examen de divers thèmes : environnement, militarisme, économie politique internationale, développement international, droits de la personne. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503. Antérieurement POL4523.",
        "title": "Études du genre et théories féministes en relations internationales",
        "year": "3"
    },
    {
        "code": "POL3524",
        "description": "Introduction à l'analyse des stratégies, tactiques, institutions, théories, et pratiques de la sécurité internationale. Analyse de la sécurité humaine, environnementale, économique et militaire. Étude de certaines thématiques tel que : insécurité, guerre, surveillance, frontières, technologies, environnement, terreur, militarisation. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503 ou POL2504 ou ECH2730. Antérieurement POL4524.",
        "title": "Politique et sécurité",
        "year": "3"
    },
    {
        "code": "POL3525",
        "description": "Étude des enjeux politiques, sociaux et économiques auxquels sont confrontées les villes au Canada et ailleurs. Théories et approches de l'analyse des dynamiques de la gouvernance urbaine et municipale. Exploration du rôle des villes et des régions dans la nouvelle économie mondiale. Les relations entre les gouvernements fédéral, provinciaux et municipaux au Canada. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "La politique urbaine au Canada",
        "year": "3"
    },
    {
        "code": "POL3526",
        "description": "Historique des rapports entre les femmes et la politique. Théories visant à expliquer les relations dynamiques entre les idéologies, les attitudes, les institutions, les phénomènes économiques, sociaux et culturels qui sous-tendent la position des femmes à l'intérieur de la vie politique. Analyse de certains aspects particuliers du rôle politique des femmes. (CAN/COMP/PPT)",
        "language": "French",
        "restriction": "Préalable : 54 crédits universitaires.",
        "title": "Les femmes et la politique",
        "year": "3"
    },
    {
        "code": "POL3528",
        "description": "Le système politique et les transformations majeures du Québec : d'une société traditionnelle à une société moderne; problèmes de l'urbanisation. Fondements idéologiques : fédéralisme et indépendantisme, socialisme québécois. Classes sociales au Québec. Personnel politique et administration publique. Forces syndicales au Québec. Élections et réformes électorales. Perspectives d'avenir. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "La vie politique au Québec",
        "year": "3"
    },
    {
        "code": "POL3533",
        "description": "Rapports entre les médias et la politique au Canada et à l'étranger. Influence des médias sur la politique et de la politique sur les médias. Les médias comme intermédiaires engagés entre citoyens et autorités politiques. Rôle des médias dans la définition des enjeux politiques en général et dans les campagnes électorales en particulier. Réalité et images médiatisées. Études de cas. (CAN/COMP)",
        "language": "French",
        "restriction": "Préalable : POL2501 ou 54 crédits universitaires. Aussi offert sous la cote CMN3533.",
        "title": "Politique et médias",
        "year": "3"
    },
    {
        "code": "POL3535",
        "description": "Étude des questions et des politiques concernant les francophones en Ontario. Ce cours vise un double but : d'une part, assurer une meilleure compréhension du fait français au XXe siècle, des groupes et mouvements francophones en Ontario, du rôle des francophones dans la dynamique politique ontarienne et, d'autre part, permettre une réflexion théorique sur la culture, l'être et le devenir du citoyen d'expression française vivant en milieu minoritaire (hors Québec) dans la fédération canadienne. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "Politique et francophonie en Ontario",
        "year": "3"
    },
    {
        "code": "POL3536",
        "description": "Origines de la pensée socialiste et études de ses oeuvres les plus importantes, notamment à travers le développement du marxisme et des idéologies communistes du XXe siècle. (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508. Antérieurement POL4536.",
        "title": "Socialisme et marxisme",
        "year": "3"
    },
    {
        "code": "POL3537",
        "description": "Analyse des principaux concepts (individu, citoyen, liberté, égalité, justice, culture) du libéralisme et du néo-libéralisme comme instruments d'analyse et d'explication des sociétés modernes et de leurs processus de transformation. Débats à l'intérieur du libéralisme et entre le libéralisme et d'autres courants politiques et idéologiques. (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508. Antérieurement POL 4537.",
        "title": "Le libéralisme",
        "year": "3"
    },
    {
        "code": "POL3541",
        "description": "Analyse des origines et des principaux concepts du conservatisme et du néoconservatisme. La critique de la modernité et de la notion de tradition. (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508. Antérieurement POL4540.",
        "title": "Conservatisme et néoconservatisme",
        "year": "3"
    },
    {
        "code": "POL3544",
        "description": "Étude des processus politiques, des institutions, en relation avec la culture et les systèmes sociaux différents d'une région ou d'un groupe de pays d Afrique. Spécificités nationales ou régionales. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504.",
        "title": "Politique comparée : Afrique",
        "year": "3"
    },
    {
        "code": "POL3545",
        "description": "Étude des processus politiques et des institutions, en relation avec la culture et les systèmes sociaux différents d'une région ou d'un groupe de pays de l'Amérique latine. Spécificités nationales ou régionales. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504 ou 54 crédits universitaires.",
        "title": "Politique comparée : Amérique latine",
        "year": "3"
    },
    {
        "code": "POL3557",
        "description": "Étude des théories et justifications du système juridique et de son rôle en politique. Évaluation de divers enjeux politique et légaux (activisme judiciaire, séparation du légal et du politique, etc.). (PPT)",
        "language": "French",
        "restriction": "Préalable: POL2508.",
        "title": "Pensée politique juridique",
        "year": "3"
    },
    {
        "code": "POL3559",
        "description": "Étude des enjeux historiques et contemporains de la relation entre les peuples autochtones et l'État canadien. Les droits des peuples autochtones dans une perspective comparée. Conceptions autochtones de la gouvernance. (CAN/COMP)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "La politique des peuples autochtones au Canada",
        "year": "3"
    },
    {
        "code": "POL3562",
        "description": "Causes et formes de la violence visant le changement politique, le contrôle de l'État, le renversement d'un régime ou la modification des frontières politiques. Formes de la violence à caractère social, ethnique et fondamentaliste, incluant les émeutes, les massacres, le terrorisme, le nettoyage ethnique et le génocide. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2504.",
        "title": "Violence politique",
        "year": "3"
    },
    {
        "code": "POL3564",
        "description": "Étude comparée des processus et des institutions politiques de divers pays du Moyen-Orient et du monde arabe. Rapports entre la politique, la culture et la société. Analyse de la collaboration, des processus d'intégration et des rapports qui se dessinent au sein de ces régions. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504.",
        "title": "Politique comparée : Moyen-Orient et monde arabe",
        "year": "3"
    },
    {
        "code": "POL3570",
        "description": "Étude du rôle des provinces canadiennes dans le système politique canadien. Étude comparée des cultures politiques, des politiques publiques et des systèmes politiques provinciaux. Analyse des convergences et des divergences entre les provinces dans leurs réponses aux défis sociaux et économiques. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "La politique provinciale comparée",
        "year": "3"
    },
    {
        "code": "POL3571",
        "description": "Théories et approches dans le domaine de l'étude des politiques d'immigration et de citoyenneté au Canada et au Québec. Les politiques du multiculturalisme et de l'interculturalisme, les enjeux de la diversité ethnoculturelle et religieuse au Canada. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501.",
        "title": "Immigration, multiculturalisme et citoyenneté au Canada et au Québec",
        "year": "3"
    },
    {
        "code": "POL3572",
        "description": "Étude des facteurs influençant la participation politique des citoyens au Canada. Exploration du système électoral, du rôle des partis politiques et de la place des groupes d'intérêts, des mouvements sociaux et des autres formes d actions collectives dans la vie démocratique canadienne. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501. Antérieurement POL4551.",
        "title": "La participation et la mobilisation politique au Canada",
        "year": "3"
    },
    {
        "code": "POL3574",
        "description": "Principaux concepts et approches théoriques servant à l'étude du fédéralisme. Les fondements normatifs du fédéralisme. Le régime fédéral canadien comparé. Parmi les thèmes qui seront abordés : la diversité identitaire, les inégalités régionales, la sécession. (CAN/COMP/PPT/INT)",
        "language": "French",
        "restriction": "Préalable : POL2501 ou POL2503 ou POL2504.",
        "title": "Le fédéralisme",
        "year": "3"
    },
    {
        "code": "POL3575",
        "description": "Étude des principaux débats concernant l'écopolitique. L'accent sera mis sur la pensée politique environnementale, sur les mouvements écologiques et les partis politiques verts ainsi que sur les politiques publiques environnementales au Canada, dans un certain nombre de pays et au niveau international. (CAN/COMP/PPT/INT)",
        "language": "French",
        "restriction": "Préalable : POL2501 ou POL2503 ou POL2504.",
        "title": "Écopolitique",
        "year": "3"
    },
    {
        "code": "POL3576",
        "description": "Introduction à l'analyse des enjeux contemporains et historiques dans l'économie politique mondiale, à partir de perspectives théoriques variées. Les enjeux étudiés peuvent inclure : le rôle de l'État dans l'économie politique mondiale, la finance internationale, la division internationale du travail, le commerce international et le développement planétaire. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503. Antérieurement POL4576.",
        "title": "Économie politique internationale",
        "year": "3"
    },
    {
        "code": "POL3577",
        "description": "Approches théoriques utilisées pour l'étude des pratiques, des stratégies et du discours politique des mouvements sociaux et des acteurs de la société civile. Relations entre les mouvements sociaux, la restructuration économique et le rôle changeant des États dans le contexte de la mondialisation. La signification politique et l'impact des mouvements sociaux à l'intérieur et au-delà des frontières étatiques. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503. Antérieurement POL4571.",
        "title": "Politique, mouvements sociaux et mondialisation",
        "year": "3"
    },
    {
        "code": "POL3578",
        "description": "Analyse des principaux cadres constitutionnels et institutionnels, forces et facteurs conditionnant la politique étrangère canadienne. Le rôle du Canada au sein de l'ONU, l'OTAN, le Commonwealth, la Francophonie et d'autres organismes internationaux. Relations du Canada avec les gouvernements et les acteurs sociaux et économiques des États-Unis et du Mexique. Les grands enjeux de la politique nord-américaine, incluant l'ALÉNA, la sécurité continentale, la démocratie et la possibilité d'une communauté politique nord-américaine. (INT/CAN)",
        "language": "French",
        "restriction": "Préalable : POL2503.",
        "title": "Politique étrangère canadienne et relations nord-américaines",
        "year": "3"
    },
    {
        "code": "POL3579",
        "description": "Introduction à l'analyse des organisations internationales, des réseaux transnationaux et des institutions et pratiques de régulation dans le contexte de la gouvernance mondiale et de la mondialisation. Les enjeux étudiés peuvent inclure : le rôle des Nations Unies et des agences de l'ONU, la sécurité collective, la promotion de normes mondiales et de la justice mondiale, le droit international, les forces de résistance, les flux transnationaux, le développement social et économique, les ONG. (INT)",
        "language": "French",
        "restriction": "Préalable : POL2503.",
        "title": "Organisations internationales et gouvernance mondiale",
        "year": "3"
    },
    {
        "code": "POL3580",
        "description": "Analyse comparée des institutions et processus politiques des États européens (Europe occidentale et/ou orientale) et/ou de l'Union européenne. Les thèmes abordés peuvent inclure: formation des États européens; intégration européenne; transformations de l'État-Providence; politiques publiques; formation et transformation des régimes politiques (démocratie, autoritarisme, post-communisme); partis politiques et mouvements sociaux; violence politique; nationalismes et identités régionales. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2504.",
        "title": "Politique comparée : Europe",
        "year": "3"
    },
    {
        "code": "POL3770",
        "description": "Épistémologie et logiques de l'analyse qualitative. Introduction à diverses approches et méthodologies. Techniques d'observation (observation participante et non participante); analyse historique documentaire, méthode comparative, analyse du discours, ethnographie politique, entrevues, approche multi-méthodes.",
        "language": "French",
        "restriction": "Préalable : POL2556 ou SCS2550. Ce cours est équivalent à CMN3503.",
        "title": "Analyse qualitative en science politique",
        "year": "3"
    },
    {
        "code": "POL3771",
        "description": "Épistémologie et logique de l'analyse quantitative. Introduction à la statistique descriptive et aux principales étapes sous-jacentes à la recherche quantitative, telles que la collecte de données, échelles de mesure, mesures de tendance centrale et de dispersion, probabilité, techniques d'échantillonnage. Mise en pratique de techniques élémentaires d'analyse à l'aide d'un logiciel de traitement de données (mesures d'association, tests d'hypothèse, analyse de régression, méthodes d'analyse bivariées et multivariées et corrélation). Approches multi-méthodes.",
        "language": "French",
        "restriction": "Préalable : POL2556 ou SCS2550. Ce cours est équivalent à CMN3502.",
        "title": "Analyse quantitative en science politique",
        "year": "3"
    },
    {
        "code": "POL3901",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": " ",
        "title": "Stage coop II / CO-OP Work Term II",
        "year": "3"
    },
    {
        "code": "POL3902",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": " ",
        "title": "Stage coop III / CO-OP Work Term III",
        "year": "3"
    },
    {
        "code": "POL4108",
        "description": "French political thought and the role played by intellectuals in politics in France. Case studies, such as nationalism, artistic avant-gardes, the Enlightenment, personalism, existentialism. (PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108 and 51 university course credits.",
        "title": "French Political Thought",
        "year": "4"
    },
    {
        "code": "POL4126",
        "description": "Study of the relationship between space, the political and power through the examination of identity-based, territorial, political, socio-economic, and cultural dynamics. A thematic analysis of the main issues, conflicts, challenges and rules of the global contemporary order. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 and 51 university course credits.",
        "title": "Contemporary Geopolitics",
        "year": "4"
    },
    {
        "code": "POL4127",
        "description": "This course studies the foreign policy of the United States from a critical and historical perspective, exploring the constitutive role played by culture, ideologies, political practices and institutions. Drawing from diverse analytic traditions, it examines some of the key issues that shape the political development and construction of the nation: immigration, technologies, national security, racial relations, military activities, intellectual traditions, popular culture, and gender relations. (INT/COMP)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 or POL2104 and 51 university course credits.",
        "title": "Critical and Historical Perspectives of United States Foreign Policy",
        "year": "4"
    },
    {
        "code": "POL4134",
        "description": "Study of modern constitutionalism. Relationships between politics and law and their impact on the political life in Canada. Constitution and constitutional claims. The Charter of rights and freedoms. Respective roles of executive power and courts. (CAN)",
        "language": "English",
        "restriction": "Prerequisites: POL2101 and 51 university course credits.",
        "title": "Law, Politics, and the Constitution in Canada",
        "year": "4"
    },
    {
        "code": "POL4135",
        "description": "Study of sociopolitical issues relating to Francophonie in its local, regional, national, and international dimensions. Examination of debates on relations between diversity and citizenship among the countries and the international organization of the Francophonie. Analysis of citizenship policies and of the recognition and management policies of diversity. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: 54 university course credits.",
        "title": "Francophonie, Diversity, Citizenship",
        "year": "4"
    },
    {
        "code": "POL4138",
        "description": "Study of the concepts of Empire and imperialism. Examination of different forms of authority and sovereignty in imperial or imperialist societies in light of classical and contemporary theories. (INT/PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 and 51 university course credits.",
        "title": "Empire and Imperialism",
        "year": "4"
    },
    {
        "code": "POL4141",
        "description": "Major characteristics of government and political life in the United States: Constitution and institutions, political culture, political processes and representation. Political parties, social movements, social and racial disparities, electoral issues, current events. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2104 and 51 university course credits. Previously POL3140.",
        "title": "Comparative Politics: United States",
        "year": "4"
    },
    {
        "code": "POL4142",
        "description": "Ethical evaluation of specific historical and contemporary political issues (e.g. charter challenges, civil disobedience, humanitarian intervention, lying and promising in politics, euthanasia, linguistic and immigration policies, practices of public deliberation) using political and ethical theories. (CAN/COMP/INT/PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108 and 51 university credits. Reserved for students registered in the specialization programs: Honours, Major, Joint Honours.",
        "title": "Applied Political Ethics",
        "year": "4"
    },
    {
        "code": "POL4145",
        "description": "Comparative study of issues related to identities and their political expression in different regions of the world. Discourses, representations, political practices and power relations constructed on the basis of identity (national, religious, ethnic, linguistic, racial, gender). Demographic, economic, institutional, territorial, historical and cultural dimensions. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL 2104 and 51 university course credits.",
        "title": "Comparative Politics: Identity Issues",
        "year": "4"
    },
    {
        "code": "POL4150",
        "description": "Analysis of the main electoral systems and theories regarding political parties and electoral behaviour. Role of electoral systems, parties and elections in political representation, with an emphasis on the Canadian context. (CAN/COMP)",
        "language": "English",
        "restriction": "Prerequisites: POL2101 and 51 university course credits.",
        "title": "Electoral Systems and Political Parties",
        "year": "4"
    },
    {
        "code": "POL4154",
        "description": "Principles of parliamentary government. Evolution of parliamentary system, role of Parliament and Members of Parliament, legislative process, parliamentary committees, accountability. Organization of executive and central agencies. Relations between Parliament and executive. Comparisons with other parliamentary systems. (CAN)",
        "language": "English",
        "restriction": "Prerequisites: POL2101 and 51 university course credits.",
        "title": "Parliamentary Government in Canada",
        "year": "4"
    },
    {
        "code": "POL4162",
        "description": "Analysis of the main themes and issues that animate health care debate in Canada. Concepts of health and illness. Respective roles of interest groups and patients' associations. Structure of government decision-making in the field of health. Selected cases studies. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101 and 51 university course credits. Previously POL3160.",
        "title": "Health Politics and Policy in Canada",
        "year": "4"
    },
    {
        "code": "POL4163",
        "description": "Study of sexual diversity (heterosexuality, homosexuality, bisexuality, transvestism, transsexuality) and of its relationship to identity construction. Sexual diversity as a political phenomenon: social movement politics, representation within formal political institutions, role of the state and of public policy. Case studies. (CAN/COMP)",
        "language": "English",
        "restriction": "Prerequisite: 54 university course credits.",
        "title": "Politics and Sexual Diversity",
        "year": "4"
    },
    {
        "code": "POL4165",
        "description": "Analysis of the movements of social and political thought that have most influenced Quebec's society, such as liberalism, ultramontanism, nationalism, and socialism. Study of the thought of the great social movements and of important ideological conflicts. (CAN/PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108 and 51 university course credits.",
        "title": "Developement of Social and Political Ideologies in Quebec",
        "year": "4"
    },
    {
        "code": "POL4166",
        "description": "Analysis of the main social and political ideologies that have influenced the development of Canadian society (e.g. liberalism, neo-liberalism, conservatism, socialism, populism, nationalism). (CAN/PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108 and 51 university course credits.",
        "title": "Social and Political Thought in Canada",
        "year": "4"
    },
    {
        "code": "POL4170",
        "description": "Analysis of issues relating to the politics of international development and foreign aid. Origins, evolution and modes of development assistance. The role and motivations of specific multilateral and bilateral donors. Aid policies and practices. Critiques of aid. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 or POL2104 and 51 university course credits.",
        "title": "Politics of Foreign Aid",
        "year": "4"
    },
    {
        "code": "POL4173",
        "description": "Political theories and debates surrounding the production, commodification, access, distribution and regulation of foods in industrialized as well as rural societies. Study of the political economy of agriculture, including analysis of transformations in land tenure, labour organization, and property rights regimes. Study of various social responses to these changes, as well as the roles of food in global politics, including the use of food as a weapon. (INT/COMP)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 or POL2104 and 51 university course credits. Previously POL3173.",
        "title": "The Politics of Food",
        "year": "4"
    },
    {
        "code": "POL4178",
        "description": "Critical analysis of political dilemmas and controversies relating to development. Examination of topics such as the place and role of the state, development strategies, the role of multinational firms, crises. (INT/COMP)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 or POL2104 and 51 university course credits.",
        "title": "Political Economy of Development",
        "year": "4"
    },
    {
        "code": "POL4179",
        "description": "Analysis of the main concepts of postmodernism as a theoretical and political method of understanding and critiquing modern societies. Origins of postmodernism and key debates (e.g. cultural relativism, political resistance, modernity s drive towards homogeneity). Postmodernism in relation to other approaches. (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108 and 51 university course credits.",
        "title": "Political Thought and Postmodernism",
        "year": "4"
    },
    {
        "code": "POL4180",
        "description": "Analysis of the main concepts of feminist political thought as a method of analysing the impact of gender on political and social thought. Diversity of perspectives in feminist political thought. Origins and key debates (e.g. nature of patriarchy, women's human rights, conceptions of women in traditional political thought). Feminist analyses of other systems of power and oppression (e.g. racism, homophobia, class oppression). (PPT)",
        "language": "English",
        "restriction": "Prerequisite: POL2108 or 54 university course credits.",
        "title": "Feminist Political Thought",
        "year": "4"
    },
    {
        "code": "POL4181",
        "description": "Analysis of selected major works in German political thought (in translation) from the eighteenth to the twentieth century. Themes of freedom, autonomy, right, relation of state and economy. Recent interpretations and critical debates. (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108 and 51 university course credits.",
        "title": "German Political Thought",
        "year": "4"
    },
    {
        "code": "POL4184",
        "description": "Analysis of theories of democratization and their applicability to case studies taken from different regions. Key concepts, such as democracy, transition and consolidation. Role of economic, historical, cultural and other structural factors, institutional design, key domestic and international actors. (COMP/INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2104 or POL2103 and 51 university course credits.",
        "title": "Democratization and Authoritarianism",
        "year": "4"
    },
    {
        "code": "POL4188",
        "description": "Analysis of the ways that political theorists have understood international relations and the international, and the ways that international relations have shaped political theory. Relationship between major historical and contemporary political theories and key themes in international relations such as state sovereignty, order, imperialism, globalisation, war, justice, power and inequality. (INT/PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 and 51 university course credits.",
        "title": "International Relations as Political Theory",
        "year": "4"
    },
    {
        "code": "POL4189",
        "description": "Study of the relationship between politics, democracy and human rights. Foundations of rule of law, norms, justice and legitimacy; dynamics and organizations of national and international human rights; change in theories and practices of human rights in contemporary situations, in particular situations of violence, such as state violence, conflicts and extreme crises. (COMP/INT/PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2104 and 51 university credits.",
        "title": "Politics of Human Rights",
        "year": "4"
    },
    {
        "code": "POL4190",
        "description": "Theories and approaches in the study of global environmental politics. Interstate and transnational collaboration and new practices of global governance with respect to the environment. Actors and material forces shaping the political responses to global environmental challenges. Case studies and contemporary debates in global environmental politics. (INT)",
        "language": "English",
        "restriction": "Prerequisites: POL2103 and 51 university course credits.",
        "title": "Global Environmental Politics",
        "year": "4"
    },
    {
        "code": "POL4191",
        "description": "This advanced seminar examines the development of a set of critical approaches that recast the study of war, security and militarism. The seminar will be organized around a principal theme, depending on the instructor's research interest (e.g. mobility and borders, surveillance and biometrics, infrastructure, terrorism, warfare and weapons, environmental security and cultures of militarism). Particular attention will be given to the role of discourses, popular culture, and identity to introduce different theoretical and methodological approaches for the assessment and analysis of policies and practices of contemporary military and security issues. (INT)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 and 51 university course credits.",
        "title": "Advanced Topics in Critical Security and War Studies",
        "year": "4"
    },
    {
        "code": "POL4192",
        "description": "This advanced seminar examines the development of a set of critical approaches that recast the study of topics in international political economy (IPE) and/or global governance (GG). Themes will vary from year to year but may include: international banking and financial crises, intellectual property rights, labour and environmental politics, North-South relations, the control of illicit activities, global inequality, transnational norms and institutions, and the changing character of global power and authority. (INT)",
        "language": "English",
        "restriction": "Prerequisite: POL2103 and 51 university course credits.",
        "title": "Advanced Topics in International Political Economy and/or Global Governance",
        "year": "4"
    },
    {
        "code": "POL4193",
        "description": "Theories of public policy and analysis of state intervention in various fields in Canada. Study of the impact of federalism on the formulation of public policies by federal and provincial governments. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: POL2101 and 51 university course credits.",
        "title": "Advanced Studies in Canadian Public Policy",
        "year": "4"
    },
    {
        "code": "POL4300",
        "description": "Analysis of a specific theme in political science. The theme will differ from year to year to reflect the availability of exceptional resources.",
        "language": "English",
        "restriction": "Prerequisite: 54 university credits.",
        "title": "Selected Topics in Political Science",
        "year": "4"
    },
    {
        "code": "POL4310",
        "description": "Advanced synthesis and critique of the main debates, analytical approaches and political projects of modern political thought. (PPT)",
        "language": "English",
        "restriction": "Prerequisite: 81 university course credits.",
        "title": "Honours Seminar in Political Thought",
        "year": "4"
    },
    {
        "code": "POL4320",
        "description": "Advanced synthesis and critique of the main debates and analytical approaches in the field of Canadian politics. (CAN)",
        "language": "English",
        "restriction": "Prerequisite: 81 university course credits.",
        "title": "Honours Seminar in Canadian Politics",
        "year": "4"
    },
    {
        "code": "POL4330",
        "description": "Advanced synthesis and critique of the main debates and analytical approaches in the field of international relations and global politics. (INT)",
        "language": "English",
        "restriction": "Prerequisite: 81 university course credits. This course cannot be combined with POL4930.",
        "title": "Honours Seminar in International Relations and Global Politics",
        "year": "4"
    },
    {
        "code": "POL4350",
        "description": "Advanced synthesis and critique of the main debates and analytical approaches in the field of comparative politics. (COMP)",
        "language": "English",
        "restriction": "Prerequisite: 81 university coursecredits.",
        "title": "Honours Seminar in Comparative Politics",
        "year": "4"
    },
    {
        "code": "POL4370",
        "description": "Study of discourse and of its analysis, in its epistemological, theoretical and methodological dimensions. Practical study of a variety of research strategies and techniques, such as critical discourse analysis, Cambridge School contextualist analysis, content analysis, bibliometric approach, hermeneutics, postructuralism and semiotics.",
        "language": "English",
        "restriction": "Prerequisite: POL3370 or POL3371.",
        "title": "Discourse Analysis",
        "year": "4"
    },
    {
        "code": "POL4375",
        "description": "Analysis of social rights and redistributive justice, especially the historical and institutional evolution of income security and social policy in Canada and elsewhere. Theories and approaches to the study of the development and transformation of the welfare state in a comparative perspective. (CAN/COMP)",
        "language": "English",
        "restriction": "Prerequisites: POL2101 and 51 university credits.",
        "title": "Social Citizenship and the Welfare State: Canada in a Comparative Perspective",
        "year": "4"
    },
    {
        "code": "POL4376",
        "description": "Study of the idea of the good life in classical and contemporary political thought (e.g. relationship between education, political judgment and regime; vice and evil in the history of ideas; role of emotions in politics). (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108 and 51 university credits.",
        "title": "Politics and Morality",
        "year": "4"
    },
    {
        "code": "POL4377",
        "description": "Analysis of the development, debates and crises of 20th and 21st century Western Marxism; the re-evaluation of this tradition by critical theories; their analyses of the logic of cultural and symbolic production in advanced capitalism; contemporary theorizations of social and political emancipation. (PPT)",
        "language": "English",
        "restriction": "Prerequisites: POL2108 and 51 university credits.",
        "title": "Post-Marxism and Critical Theories",
        "year": "4"
    },
    {
        "code": "POL4378",
        "description": "Introduction to the political history of the People's Republic of China. Analysis of institutions and public policy. Examination of state-society relations. (COMP)",
        "language": "English",
        "restriction": "Prerequisites: POL2104 and 51 university coursecredits.",
        "title": "Comparative Politics: China",
        "year": "4"
    },
    {
        "code": "POL4508",
        "description": "La pensée politique française et le rôle joué par les intellectuels en politique en France. Études de cas, tels que le nationalisme, les avant-gardes artistiques, les Lumières, le personnalisme, l'existentialisme. (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508 et 51 crédits de cours universitaires.",
        "title": "Pensée politique française",
        "year": "4"
    },
    {
        "code": "POL4526",
        "description": "Étude du rapport entre l'espace, le politique et le pouvoir d'une part, et les dynamiques identitaires, territoriales, politiques, socio-économiques et culturelles d'autre part. Couverture thématique de l'actualité internationale récente par l'analyse politique des points de tension et de rupture, des nouveaux enjeux, conflits, défis et règles de l'ordre mondial contemporain. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503 et 51 crédits de cours universitaires.",
        "title": "Géopolitique contemporaine",
        "year": "4"
    },
    {
        "code": "POL4527",
        "description": "Ce cours a pour objectif l'étude critique de la politique étrangère états-unienne dans sa contemporanéité et dans son histoire, en traitant du rôle constitutif de la culture, des idéologies, ainsi que des pratiques et des institutions politiques. À la lumière de diverses traditions analytiques, les réflexions porteront sur certains enjeux-clés qui ont joué et jouent un rôle dans le processus de construction nationale même et le développement politique états-uniens, dont l'immigration, la technologie, la sécurité nationale, les relations raciales, l'activité militaire, les traditions intellectuelles, la culture populaire et le rapport au genre. (INT/COMP)",
        "language": "French",
        "restriction": "Préalables : POL2503 ou POL2504 et 51 crédits de cours universitaires.",
        "title": "Regards critiques et historiques sur la politique étrangère états-unienne",
        "year": "4"
    },
    {
        "code": "POL4534",
        "description": "Étude du constitutionnalisme moderne. Rapports entre la politique et le droit : leur impact sur la vie politique canadienne. La constitution et les revendications constitutionnelles au Canada. La Charte des droits et libertés. Rôles respectifs du pouvoir exécutif et des tribunaux. (CAN)",
        "language": "French",
        "restriction": "Préalables : POL2501 et 51 crédits de cours universitaires.",
        "title": "Politique, droit et constitution au Canada",
        "year": "4"
    },
    {
        "code": "POL4535",
        "description": "Études des enjeux sociopolitiques concernant la francophonie dans ses dimensions locales, régionales, nationales et internationales. Examen des débats sur les rapports entre diversité et citoyenneté au sein des pays et de l'organisation internationale de la francophonie. Analyse des politiques de citoyenneté, de gestion et de reconnaissance de la diversité.",
        "language": "French",
        "restriction": "Préalable : 54 crédits universitaires.",
        "title": "Francophonie, diversité, citoyenneté",
        "year": "4"
    },
    {
        "code": "POL4538",
        "description": "Étude des concepts d'empire et d'impérialisme. Examen des différentes conceptions de l'autorité et de la souveraineté dans les sociétés impériales ou impérialistes à la lumière des théories classiques et récentes. (INT/PPT)",
        "language": "French",
        "restriction": "Préalables : POL2503 et 51 crédits de cours universitaires.",
        "title": "Empire et impérialisme",
        "year": "4"
    },
    {
        "code": "POL4541",
        "description": "Analyse des caractéristiques majeures du gouvernement et de la vie politique aux États-Unis : constitution et institutions, culture politique, processus politiques et représentation (notamment les partis politiques et les mouvements sociaux). Introduction à quelques problématiques afférentes : alignements électoraux, inégalités sociales et raciales, questions d'actualité. (COMP)",
        "language": "French",
        "restriction": "Préalable : POL2504 et 51 crédits de cours universitaires. Antérieurement POL3540.",
        "title": "Politique comparée : États-Unis",
        "year": "4"
    },
    {
        "code": "POL4542",
        "description": "Évaluation éthique d'enjeux politiques historiques et contemporains (ex. : les défis liés aux chartes des droits et libertés, la désobéissance civile, la promesse et le mensonge en politique, l'intervention humanitaire, l'euthanasie, les politiques linguistiques et d'immigration, les pratiques de délibération publique) en utilisant diverses théories éthiques et politiques. (CAN/COMP/INT/PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508 et 51 crédits universitaires. Réservé aux étudiants et étudiantes inscrits dans les programmes spécialisés, majeure, bidisciplinaire.",
        "title": "Politiques et questions éthiques",
        "year": "4"
    },
    {
        "code": "POL4545",
        "description": "Étude comparée des problématiques relatives aux identités et de leurs expressions politiques dans différentes régions du monde. Discours, représentations et pratiques politiques et rapports de pouvoirs construits sur des bases identitaires, qu'elles soient nationales, religieuses, ethniques, linguistiques, raciales, ou liées aux genres. Dimensions démographiques, économiques, institutionnelles, territoriales, historiques et culturelles. (COMP)",
        "language": "French",
        "restriction": "Préalables : POL2504 et 51 crédits de cours universitaires.",
        "title": "Politique comparée : questions identitaires",
        "year": "4"
    },
    {
        "code": "POL4550",
        "description": "Analyse des principaux systèmes électoraux et des principales théories sur le vote et les partis politiques. Rôle des systèmes électoraux, des partis et des élections dans la représentation politique, avec un accent particulier sur le Canada. (CAN/COMP)",
        "language": "French",
        "restriction": "Préalables : POL2501 et 51 crédits de cours universitaires.",
        "title": "Les systèmes électoraux et les partis politiques",
        "year": "4"
    },
    {
        "code": "POL4554",
        "description": "Principes du parlementarisme. Évolution du système parlementaire, rôle du Parlement et des parlementaires, processus législatif, commissions parlementaires, imputabilité. Organisation de l'exécutif et des agences centrales. Rapports entre le Parlement et l'exécutif. Comparaison avec d'autres systèmes parlementaires. (CAN)",
        "language": "French",
        "restriction": "Préalables : POL2501 et 51 crédits de cours universitaires.",
        "title": "Le parlementarisme au Canada",
        "year": "4"
    },
    {
        "code": "POL4562",
        "description": "Analyse des principaux thèmes et enjeux des débats politiques sur la santé publique et les systèmes de soins de santé au Canada. Concepts de santé et de maladie. Rôle des groupes d'intérêts et des associations de patients. Processus décisionnels des gouvernements dans le domaine de la santé.",
        "language": "French",
        "restriction": "Préalable : POL2501 et 51 crédits de cours universitaires. Antérieurement POL3560.",
        "title": "Politique de la santé au Canada",
        "year": "4"
    },
    {
        "code": "POL4563",
        "description": "Étude de l'éventail de la diversité sexuelle (par exemple : hétérosexualité, homosexualité, bisexualité, travestisme et transsexualité) et de ses rapports avec la construction identitaire. La diversité sexuelle comme phénomène politique : politique des mouvements sociaux, représentation au sein des institutions politiques formelles, rôle de l'État et des politiques publiques. Études de cas. (CAN/COMP)",
        "language": "French",
        "restriction": "Préalable : 54 crédits de cours universitaires. Antérieurement POL3563.",
        "title": "Politique et diversité sexuelle",
        "year": "4"
    },
    {
        "code": "POL4565",
        "description": "Analyse des mouvements de pensée politique et sociale ayant le plus marqué l'évolution de la société québécoise, notamment le libéralisme, l'ultramontanisme, le nationalisme et le socialisme. Étude de la pensée des grands mouvements sociaux et de conflits idéologiques importants. (CAN/PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508 et 51 crédits universitaires. Réservé aux étudiants et étudiantes inscrits dans les programmes spécialiés, majeure, bidisciplinaire.",
        "title": "Développement des idéologies sociales et politiques au Québec",
        "year": "4"
    },
    {
        "code": "POL4566",
        "description": "Analyse de quelques-uns des principaux mouvements de pensée sociale et politique permettant une meilleure compréhension de la vie politique canadienne. L'on insistera particulièrement sur des thèmes comme le libéralisme, le conservatisme, le socialisme, le populisme, le nationalisme. (CAN/PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508 et 51 crédits universitaires. Réservé aux étudiants et étudiantes inscrits dans les programmes spécialisés, majeure, bidisciplinaire.",
        "title": "Développement des idéologies sociales et politiques au Canada",
        "year": "4"
    },
    {
        "code": "POL4570",
        "description": "Analyse des enjeux concernant la politique de l'aide au développement international. Origines, évolution et formes de l'aide au développement. Rôle et motivations des donateurs bilatéraux et multilatéraux. Politiques et pratiques de l'aide au développement. Critique de l'aide au développement. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503 ou POL2504 et 51 crédits de cours universitaires.",
        "title": "Politique de l'aide au développement",
        "year": "4"
    },
    {
        "code": "POL4573",
        "description": "Théories et débats politiques entourant la production, la marchandisation, l'accès, la distribution et la régulation de l'alimentation dans les pays industrialisés et les sociétés rurales. Étude de l'économie politique de l'agriculture, y compris l'analyse des transformations dans la gestion de la propriété foncière, l'organisation du travail et les régimes de droits de propriété. Étude de diverses réponses sociales à ces changements ainsi que du rôle de l'alimentation au sein de la politique mondiale, incluant l'utilisation de la nourriture comme arme. (INT/COMP)",
        "language": "French",
        "restriction": "Préalable : POL2503 ou POL2504 et 51 crédits de cours universitaires. Antérieurement POL3573.",
        "title": "Politique agroalimentaire",
        "year": "4"
    },
    {
        "code": "POL4578",
        "description": "Analyse critique des dilemmes et controverses politiques liés à la problématique du développement. Les thèmes choisis varient d'une année à l'autre : la place et le rôle de l'État, les stratégies de développement, le rôle des firmes multinationales, les crises, etc. (INT/COMP)",
        "language": "French",
        "restriction": "Préalables : POL2503 ou POL2504 et 51 crédits de cours universitaires.",
        "title": "Économie politique du développement",
        "year": "4"
    },
    {
        "code": "POL4579",
        "description": "Analyse des principaux concepts du postmodernisme comme approche théorique et politique pour comprendre et critiquer les sociétés modernes. Origines du postmodernisme et principaux débats (ex. : relativisme culturel, résistance politique, la modernité comme mouvement d'homogénéisation). Comparaison avec d'autres approches. (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508 et 51 crédtis de cours universitaires.",
        "title": "Pensée politique et postmodernisme",
        "year": "4"
    },
    {
        "code": "POL4580",
        "description": "Analyse des principaux concepts de la pensée politique féministe en tant que méthode d'analyse des impacts du genre sur la pensée politique et sociale. Diversité des points de vue dans la pensée politique féministe. Origines et principaux débats (ex. : la nature du patriarcat, droits des femmes, conceptions de la femme dans la pensée féministe). Analyse féministe des autres systèmes de pouvoir et d'oppression (e.g. racisme, homophobie, oppression de classe). (PPT)",
        "language": "French",
        "restriction": "Préalable : POL2508 ou 54 crédits de cours universitaires.",
        "title": "Pensée politique féministe",
        "year": "4"
    },
    {
        "code": "POL4581",
        "description": "Analyse des principaux travaux de la pensée politique allemande (traduits) du 18e au 20e siècle. Thèmes de liberté, autonomie, droit, relation entre État et économie. Interprétations récentes et débats critiques. (PPT)",
        "language": "French",
        "restriction": "Préalable : POL2508 et 51 crédits de cours universitaires.",
        "title": "Pensée politique allemande",
        "year": "4"
    },
    {
        "code": "POL4584",
        "description": "Analyse des théories de la démocratisation et de leur utilisation pour l'étude de cas issus de diverses régions. Concepts clés, tel que la démocratie, la transition et la consolidation. Rôle des facteurs économiques, historiques et culturels, de l'architecture institutionnelle, et des acteurs nationaux et internationaux. (COMP/INT)",
        "language": "French",
        "restriction": "Préalables : POL2504 ou POL2503 et 51 crédits de cours universitaires.",
        "title": "Démocratisation et autoritarisme",
        "year": "4"
    },
    {
        "code": "POL4588",
        "description": "Analyse des façons que les théoriciens politiques ont compris les relations internationales, la politique mondiale et l'international et comment celles-ci ont forgé la théorie politique. Relation entre les principales théories politiques historiques et contemporaines et les thèmes-clés en relations internationales, tels que souveraineté étatique, ordre, impérialisme, mondialisation, guerre, pouvoir et inégalité. (INT/PPT)",
        "language": "French",
        "restriction": "Préalable : POL2503 et 51 crédits de cours universitaires.",
        "title": "Les relations internationales comme théorie politique",
        "year": "4"
    },
    {
        "code": "POL4589",
        "description": "Étude des relations entre politique, démocratie et droits humains. Fondements de l'État de droit, normes, justice et légitimité; organisations et dynamiques nationales et internationales des droits humains; transformation des théories et pratiques des droits humains dans les situations contemporaines, en particulier les situations de violence, notamment d'État, les conflits et les crises extrêmes. (COMP/INT/PPT)",
        "language": "French",
        "restriction": "Préalables : POL2504 et 51 crédits universitaires.",
        "title": "Politique et droits humains",
        "year": "4"
    },
    {
        "code": "POL4590",
        "description": "Théories et approches pour l'étude de la politique mondiale de l'environnement. Collaboration interétatique et transnationale et nouvelles pratiques de gouvernance en relation aux défis environnementaux. Acteurs et forces matérielles déterminant les réponses politiques aux défis environnementaux planétaires. Études de cas et débats contemporains sur la politique mondiale de l'environnement. (INT)",
        "language": "French",
        "restriction": "Préalables : POL2503 et 51 crédits de cours universitaires.",
        "title": "Politique environnementale mondiale",
        "year": "4"
    },
    {
        "code": "POL4591",
        "description": "Études approfondies du développement des efforts critiques pour repenser l'analyse de la guerre, de la sécurité et du militarisme. La thématique centrale du séminaire variera selon les intérêts de recherche du professeur (mobilité et frontières, surveillance et biométrie, infrastructure, terrorisme, guerre et armes, sécurité environnementale et cultures du militarisme). Une attention particulière sera donnée au rôle des discours, de la culture populaire et de l'identité pour y introduire différentes approches théoriques et méthodologiques pour l'évaluation des politiques et des pratiques liées à des enjeux contemporains militaires et sécuritaires. (INT)",
        "language": "French",
        "restriction": "Préalable : POL2503 et 51 crédits de cours universitaires.",
        "title": "Études approfondies en études critiques de sécurité et de la guerre",
        "year": "4"
    },
    {
        "code": "POL4592",
        "description": "Études approfondies du développement des efforts critiques pour repenser l'analyse d'enjeux en économie politique internationale (EPI) et/ou gouvernance mondiale (GM). Les thèmes varieront d'une année à l'autre, mais pourraient inclure : le domaine bancaire international et les crises financières, les droits de propriété intellectuelle, la politique environnementale et les relations de travail, les relations Nord-Sud, le contrôle des activités illicites, l'inégalité mondiale, les normes et institutions transnationales et le caractère changeant du pouvoir et de l'autorité planétaires. (INT)",
        "language": "French",
        "restriction": "Préalable : POL2503 et 51 crédits de cours universitaires.",
        "title": "Études approfondies en économie politique internationale et/ou gouvernance mondiale",
        "year": "4"
    },
    {
        "code": "POL4593",
        "description": "Théories des politiques publiques et analyse de l'intervention étatique dans différents domaines au Canada. Étude de l'incidence du fédéralisme sur la formulation des politiques publiques par les gouvernements fédéral et provinciaux. (CAN)",
        "language": "French",
        "restriction": "Préalable : POL2501 et 51 crédits de cours universitaires.",
        "title": "Études approfondies en politiques publiques canadiennes",
        "year": "4"
    },
    {
        "code": "POL4700",
        "description": "Présentations et discussions portant sur un thème particulier choisi en fonction de ressources exceptionnelles.",
        "language": "French",
        "restriction": "Préalable : 54 crédits universitaires.",
        "title": "Thèmes particuliers en science politique",
        "year": "4"
    },
    {
        "code": "POL4710",
        "description": "Étude des analyses et interprétations concernant l'évolution des sociétés et des idéologies modernes. (PPT)",
        "language": "French",
        "restriction": "Préalable : 81 crédits de cours universitaires.",
        "title": "Séminaire de synthèse en pensée politique",
        "year": "4"
    },
    {
        "code": "POL4720",
        "description": "Étude des principales contributions ayant marqué le développement de l'analyse de la vie politique canadienne et l'application des principales théories et approches à ce domaine. (CAN)",
        "language": "French",
        "restriction": "Préalable : 81 crédits de cours universitaires.",
        "title": "Séminaire de synthèse en politique canadienne",
        "year": "4"
    },
    {
        "code": "POL4730",
        "description": "Étude des principales contributions ayant marqué le développement de l'analyse des relations internationales et de la politique mondiale et l'application des principales théories et approches de ce domaine. (INT)",
        "language": "French",
        "restriction": "Préalable : 81 crédits de cours universitaires. Ce cours ne peut être combiné à POL4930.",
        "title": "Séminaire de synthèse en relations internationales et politique mondiale",
        "year": "4"
    },
    {
        "code": "POL4750",
        "description": "Étude des principales contributions ayant marqué le développement de l'analyse de la politique comparée et application des principales théories et approches de ce domaine. (COMP)",
        "language": "French",
        "restriction": "Préalable : 81 crédits de cours universitaires.",
        "title": "Séminaire de synthèse en politique comparée",
        "year": "4"
    },
    {
        "code": "POL4770",
        "description": "Étude du discours et de son analyse, dans ses dimensions épistémologiques, théoriques et méthodologiques. Étude pratique de diverses stratégies et techniques de recherche, telles que l'analyse critique du discours, l'analyse contextualiste de l'École de Cambridge, l'analyse de contenu, la bibliométrie, l'approche herméneutique, l'approche poststructuraliste et l'analyse sémiotique.",
        "language": "French",
        "restriction": "Préalable : POL3770 ou POL3771.",
        "title": "Analyse du discours",
        "year": "4"
    },
    {
        "code": "POL4775",
        "description": "Étude comparée de la question des droits sociaux et des principes de la justice redistributive, en particulier l'évolution historique et institutionnelle des politiques de sécurité du revenu et des services sociaux. Exploration des principales théories expliquant le développement et les transformations de l'État-providence dans une perspective comparée. (CAN/COMP)",
        "language": "French",
        "restriction": "Préalables : POL2501 et 51 crédits universitaires.",
        "title": "La citoyenneté sociale et l'État-providence: le Canada dans une perspective comparée",
        "year": "4"
    },
    {
        "code": "POL4776",
        "description": "Étude de l'idée de vie bonne en pensée politiques classique et contemporaine (ex. : rapports entre éducation, jugement politique et régime; le vice et le mal dans l'histoire des idées; rôle des émotions en politique). (PPT)",
        "language": "French",
        "restriction": "Préalables: POL2508 et 51 crédits universitaires.",
        "title": "Politique et moralité",
        "year": "4"
    },
    {
        "code": "POL4777",
        "description": "Analyse du développement, des débats et des crises du marxisme occidental au vingtième et vingt-et-unième siècles. Poursuite et révision de l'analyse marxienne à travers l'apport des théories critiques à l'étude de la logique de la production culturelle et symbolique dans le contexte du capitalisme avancé. Contributions contemporaines à la question de l'émancipation sociale et politique. (PPT)",
        "language": "French",
        "restriction": "Préalables : POL2508 et 51 crédits universitaires.",
        "title": "Postmarxisme et théories critiques",
        "year": "4"
    },
    {
        "code": "POL4778",
        "description": "Introduction à l'histoire politique de la Chine populaire. Analyse des institutions et des politiques publiques chinoises. Examen du rapport entre l'État et la société. (COMP)",
        "language": "French",
        "restriction": "Préalables : POL2504 et 51 crédits de cours universitaires.",
        "title": "Politique comparée : Chine",
        "year": "4"
    },
    {
        "code": "POL4901",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": " ",
        "title": "Stage coop IV / CO-OP Work Term IV",
        "year": "4"
    },
    {
        "code": "POL4902",
        "description": " ",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": " ",
        "title": "Stage coop V / CO-OP Work Term V",
        "year": "4"
    },
    {
        "code": "POL4930",
        "description": "Bilingual seminar. Advanced synthesis and critique of the main debates and analytical approaches in the field of international relations and global politics. The seminar is taught in both languages alternately; one week in French, one week in English. (INT)   Séminaire bilingue. Étude des principales contributions ayant marqué le développement de l'analyse des relations internationales et de la politique mondiale et l'application des principales théories et approches de ce domaine. Le séminaire est enseigné dans les deux langues en alternance; une semaine en français, une semaine en anglais. (INT)",
        "language": "Bilingual/Unofficial/Unspecified",
        "restriction": "Prerequisite: 81 university credits. Courses POL4330, POL4730, POL4930 cannot be combined for credits. Reserved for students registered in the Joint Honours and Honours programs in Political Science or in the International Studies and Modern Languages program. Spoken and written proficiency in French and English is required.   Préalable : 81 crédits universitaires. Les cours POL4330, POL4730, POL4930 ne peuvent être combinés pour l'obtention de crédits. Réservé aux étudiants et étudiantes inscrits aux programmes bidisciplinaires et spécialisé en science politique ou au programme d'études internationales et langues modernes. Une compétence linguistique active en français et en anglais est requise.",
        "title": "Séminaire de synthèse en relations internationales et politique mondiale / Honours Seminar in International Relations and Global Politics",
        "year": "4"
    }
];

export default courses;