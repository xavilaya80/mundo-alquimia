// 1. MEGA BASE DE DATOS DE ELEMENTOS (Unificada, depurada y sin duplicados)
const elementsDB = {
    // === BÁSICOS Y CLIMA ===
    "agua": { name: "Agua", emoji: "💧", group: "basico" },
    "fuego": { name: "Fuego", emoji: "🔥", group: "basico" },
    "tierra": { name: "Tierra", emoji: "🪨", group: "basico" },
    "aire": { name: "Aire", emoji: "💨", group: "basico" },
    "vapor": { name: "Vapor", emoji: "☁️", group: "naturaleza" },
    "nube": { name: "Nube", emoji: "☁️", group: "naturaleza" },
    "lluvia": { name: "Lluvia", emoji: "🌧️", group: "naturaleza" },
    "nieve": { name: "Nieve", emoji: "❄️", group: "naturaleza" },
    "hielo": { name: "Hielo", emoji: "🧊", group: "naturaleza" },
    "tormenta": { name: "Tormenta", emoji: "⛈️", group: "naturaleza" },
    "rayo": { name: "Rayo", emoji: "⚡", group: "naturaleza" },
    "tornado": { name: "Tornado", emoji: "🌪️", group: "naturaleza" },
    "huracan": { name: "Huracán", emoji: "🌀", group: "naturaleza" },
    "tsunami": { name: "Tsunami", emoji: "🌊", group: "naturaleza" },
    "terremoto": { name: "Terremoto", emoji: "🌍", group: "naturaleza" },
    "barro": { name: "Barro", emoji: "💩", group: "naturaleza" },
    "pantano": { name: "Pantano", emoji: "🤢", group: "naturaleza" },
    "ceniza": { name: "Ceniza", emoji: "🌪️", group: "naturaleza" },
    "polvo": { name: "Polvo", emoji: "🌫️", group: "naturaleza" },
    "luz": { name: "Luz", emoji: "💡", group: "naturaleza" },
    "tiempo": { name: "Tiempo", emoji: "⏳", group: "naturaleza" },
    "arcoiris": { name: "Arcoíris", emoji: "🌈", group: "naturaleza" },
    "sonido": { name: "Sonido", emoji: "🔊", group: "naturaleza" },
    "viento": { name: "Viento", emoji: "🌬️", group: "naturaleza" },
    "montana": { name: "Montaña", emoji: "⛰️", group: "naturaleza" },
    "desierto": { name: "Desierto", emoji: "🏜️🐪", group: "naturaleza" },
    "mina": { name: "Mina", emoji: "🕳️", group: "naturaleza" },
    "geyser": { name: "Géiser", emoji: "🌋💦", group: "naturaleza" },
    "rio": { name: "Río", emoji: "🏞️", group: "naturaleza" },
    "lago": { name: "Lago", emoji: "🏞️", group: "naturaleza" },

    // === GEOLOGÍA Y MATERIALES ===
    "lava": { name: "Lava", emoji: "🌋", group: "materiales" },
    "volcan": { name: "Volcán", emoji: "🌋", group: "materiales" },
    "piedra": { name: "Piedra", emoji: "🪨", group: "materiales" },
    "arena": { name: "Arena", emoji: "🏜️", group: "materiales" },
    "cristal": { name: "Cristal", emoji: "💎", group: "materiales" },
    "lente": { name: "Lente", emoji: "👓", group: "materiales" },
    "arcilla": { name: "Arcilla", emoji: "🏺", group: "materiales" },
    "ladrillo": { name: "Ladrillo", emoji: "🧱", group: "materiales" },
    "metal": { name: "Metal", emoji: "⚙️", group: "materiales" },
    "engranaje": { name: "Engranaje", emoji: "⚙️", group: "materiales" },
    "oro": { name: "Oro", emoji: "🥇", group: "materiales" },
    "hierro": { name: "Hierro", emoji: "🗜️", group: "materiales" },
    "acero": { name: "Acero", emoji: "🛡️", group: "materiales" },
    "carbon": { name: "Carbón", emoji: "🪨", group: "materiales" },
    "diamante": { name: "Diamante", emoji: "💎", group: "materiales" },
    "petroleo": { name: "Petróleo", emoji: "🛢️", group: "materiales" },
    "plastico": { name: "Plástico", emoji: "🛍️", group: "materiales" },
    "cuero": { name: "Cuero", emoji: "👞", group: "materiales" },
    "lana": { name: "Lana", emoji: "🧶", group: "materiales" },
    "hilo": { name: "Hilo / Cuerda", emoji: "🧵", group: "materiales" },
    "marmol": { name: "Mármol", emoji: "🪨✨", group: "materiales" },
    "granito": { name: "Granito", emoji: "🪨", group: "materiales" },
    "obsidiana": { name: "Obsidiana", emoji: "🖤🪨", group: "materiales" },
    "azufre": { name: "Azufre", emoji: "🟡", group: "materiales" },
    "mercurio": { name: "Mercurio", emoji: "☿️", group: "materiales" },
    "grafito": { name: "Grafito", emoji: "✏️", group: "materiales" },

    // === NATURALEZA Y PLANTAS + OCEANOGRAFÍA ===
    "energia": { name: "Energía", emoji: "✨", group: "plantas" },
    "vida": { name: "Vida", emoji: "🧬", group: "plantas" },
    "bacteria": { name: "Bacteria", emoji: "🦠", group: "plantas" },
    "alga": { name: "Alga", emoji: "🌿", group: "plantas" },
    "musgo": { name: "Musgo", emoji: "🥬", group: "plantas" },
    "hierba": { name: "Hierba / Pasto", emoji: "🌿🌱", group: "plantas" },
    "semilla": { name: "Semilla", emoji: "🌱", group: "plantas" },
    "flor": { name: "Flor", emoji: "🌸", group: "plantas" },
    "rosa": { name: "Rosa", emoji: "🌹", group: "plantas" },
    "arbol": { name: "Árbol", emoji: "🌳", group: "plantas" },
    "hoja": { name: "Hoja", emoji: "🍃", group: "plantas" },
    "cactus": { name: "Cactus", emoji: "🌵", group: "plantas" },
    "hongo": { name: "Hongo", emoji: "🍄", group: "plantas" },
    "bosque": { name: "Bosque", emoji: "🌲🌲", group: "plantas" },
    "selva": { name: "Selva", emoji: "🌴", group: "plantas" },
    "oasis": { name: "Oasis", emoji: "🏝️", group: "plantas" },
    "jardin": { name: "Jardín", emoji: "🏡🌺", group: "plantas" },
    "bambu": { name: "Bambú", emoji: "🎍", group: "plantas" },
    "vid": { name: "Vid", emoji: "🍇", group: "plantas" },
    "manzano": { name: "Manzano", emoji: "🍎🌳", group: "plantas" },
    "plancton": { name: "Plancton", emoji: "🌊🦠", group: "oceanografia" },
    "coral": { name: "Coral", emoji: "🪸", group: "oceanografia" },
    "arrecife": { name: "Arrecife", emoji: "🪸🌊", group: "oceanografia" },
    "fosa_mariana": { name: "Fosa de las Marianas", emoji: "🌊🕳️", group: "oceanografia" },
    "perla": { name: "Perla", emoji: "🟡", group: "oceanografia" },

    // === INSECTOS Y BICHOS ===
    "gusano": { name: "Gusano", emoji: "🪱", group: "insectos" },
    "bicho": { name: "Bicho (Base)", emoji: "🪲", group: "insectos" },
    "arana": { name: "Araña", emoji: "🕷️", group: "insectos" },
    "abeja": { name: "Abeja", emoji: "🐝", group: "insectos" },
    "mariposa": { name: "Mariposa", emoji: "🦋", group: "insectos" },
    "mosca": { name: "Mosca", emoji: "🪰", group: "insectos" },
    "mosquito": { name: "Mosquito", emoji: "🦟", group: "insectos" },
    "cucaracha": { name: "Cucaracha", emoji: "🪳", group: "insectos" },
    "garrapata": { name: "Garrapata", emoji: "🪲🩸", group: "insectos" },
    "cienpies": { name: "Ciempiés", emoji: "🐛", group: "insectos" },
    "oruga": { name: "Oruga", emoji: "🐛🍃", group: "insectos" },
    "libelula": { name: "Libélula", emoji: "🧚‍♂️🪲", group: "insectos" },
    "hormiga": { name: "Hormiga", emoji: "🐜", group: "insectos" },
    "escarabajo": { name: "Escarabajo", emoji: "🪲🪨", group: "insectos" },
    "mantis": { name: "Mantis", emoji: "🦗", group: "insectos" },
    "grillo": { name: "Grillo", emoji: "🦗🎵", group: "insectos" },
    "caracol": { name: "Caracol", emoji: "🐌", group: "insectos" },
    "escorpion": { name: "Escorpión", emoji: "🦂", group: "insectos" },
    "pulga": { name: "Pulga", emoji: "🐕🪲", group: "insectos" },
    "polilla": { name: "Polilla", emoji: "🦋💡", group: "insectos" },
    "luciernaga": { name: "Luciérnaga", emoji: "🪲✨", group: "insectos" },
    "avispa": { name: "Avispa", emoji: "🐝⚡", group: "insectos" },
    "termita": { name: "Termita", emoji: "🐛", group: "insectos" },
    "saltamontes": { name: "Saltamontes", emoji: "🦗", group: "insectos" },

    // === ANIMALES ===
    "pez": { name: "Pez", emoji: "🐟", group: "animales" },
    "tiburon": { name: "Tiburón", emoji: "🦈", group: "animales" },
    "ballena": { name: "Ballena", emoji: "🐋", group: "animales" },
    "delfin": { name: "Delfín", emoji: "🐬", group: "animales" },
    "pulpo": { name: "Pulpo", emoji: "🐙", group: "animales" },
    "rana": { name: "Rana", emoji: "🐸", group: "animales" },
    "reptil": { name: "Reptil", emoji: "🦎", group: "animales" },
    "serpiente": { name: "Serpiente", emoji: "🐍", group: "animales" },
    "cocodrilo": { name: "Cocodrilo", emoji: "🐊", group: "animales" },
    "tortuga": { name: "Tortuga", emoji: "🐢", group: "animales" },
    "huevo": { name: "Huevo", emoji: "🥚", group: "animales" },
    "pajaro": { name: "Pájaro", emoji: "🦅", group: "animales" },
    "murcielago": { name: "Murciélago", emoji: "🦇", group: "animales" },
    "bestia": { name: "Bestia", emoji: "🐅", group: "animales" },
    "humano": { name: "Humano", emoji: "🧍", group: "animales" },
    "perro": { name: "Perro", emoji: "🐕", group: "animales" },
    "lobo": { name: "Lobo", emoji: "🐺", group: "animales" },
    "zorro": { name: "Zorro", emoji: "🦊", group: "animales" },
    "gato": { name: "Gato", emoji: "🐈", group: "animales" },
    "leon": { name: "León", emoji: "🦁", group: "animales" },
    "tigre": { name: "Tigre", emoji: "🐅🌿", group: "animales" },
    "vaca": { name: "Vaca", emoji: "🐄", group: "animales" },
    "cerdo": { name: "Cerdo", emoji: "🐖", group: "animales" },
    "caballo": { name: "Caballo", emoji: "🐎", group: "animales" },
    "burro": { name: "Burro", emoji: "🫏", group: "animales" },
    "mula": { name: "Mula", emoji: "🐴", group: "animales" },
    "oveja": { name: "Oveja", emoji: "🐑", group: "animales" },
    "conejo": { name: "Conejo", emoji: "🐇", group: "animales" },
    "mono": { name: "Mono", emoji: "🐒", group: "animales" },
    "raton": { name: "Ratón", emoji: "🐁", group: "animales" },
    "oso": { name: "Oso", emoji: "🐻", group: "animales" },
    "elefante": { name: "Elefante", emoji: "🐘", group: "animales" },
    "jirafa": { name: "Jirafa", emoji: "🦒", group: "animales" },
    "pinguino": { name: "Pingüino", emoji: "🐧", group: "animales" },
    "tortuga_marina": { name: "Tortuga Marina", emoji: "🐢🌊", group: "oceanografia" },
    "calamar": { name: "Calamar", emoji: "🦑", group: "oceanografia" },
    "estrellamar": { name: "Estrella de Mar", emoji: "⭐🌊", group: "oceanografia" },

    // === MITOLOGÍA Y MAGIA ===
    "magia": { name: "Magia", emoji: "✨", group: "mitologia" },
    "piedra_filosofal": { name: "Piedra Filosofal", emoji: "🔴💎", group: "mitologia" },
    "golem": { name: "Golem", emoji: "🗿", group: "mitologia" },
    "fantasma": { name: "Fantasma", emoji: "👻", group: "mitologia" },
    "cadaver": { name: "Cadáver", emoji: "☠️", group: "mitologia" },
    "zombie": { name: "Zombie", emoji: "🧟", group: "mitologia" },
    "vampiro": { name: "Vampiro", emoji: "🧛", group: "mitologia" },
    "hombre_lobo": { name: "Hombre Lobo", emoji: "🐺🧍", group: "mitologia" },
    "frankenstein": { name: "Frankenstein", emoji: "🧟‍♂️", group: "mitologia" },
    "momia": { name: "Momia", emoji: "🧻", group: "mitologia" },
    "dragon": { name: "Dragón", emoji: "🐉", group: "mitologia" },
    "unicornio": { name: "Unicornio", emoji: "🦄", group: "mitologia" },
    "fenix": { name: "Fénix", emoji: "🦅🔥", group: "mitologia" },
    "sirena": { name: "Sirena", emoji: "🧜‍♀️", group: "mitologia" },
    "bruja": { name: "Bruja", emoji: "🧙‍♀️", group: "mitologia" },
    "mago": { name: "Mago", emoji: "🧙‍♂️", group: "mitologia" },
    "hechicero": { name: "Hechicero", emoji: "🧙‍♂️", group: "mitologia" },
    "nigromante": { name: "Nigromante", emoji: "🧙‍♂️☠️", group: "mitologia" },
    "hechizo": { name: "Hechizo", emoji: "📜✨", group: "mitologia" },
    "maldicion": { name: "Maldición", emoji: "☠️✨", group: "mitologia" },
    "pocion": { name: "Poción", emoji: "🧪", group: "mitologia" },
    "duende": { name: "Duende", emoji: "🧝‍♂️", group: "mitologia" },
    "elfo": { name: "Elfo", emoji: "🧝", group: "mitologia" },
    "orco": { name: "Orco", emoji: "👹", group: "mitologia" },
    "troll": { name: "Troll", emoji: "🧌", group: "mitologia" },
    "hada": { name: "Hada", emoji: "🧚", group: "mitologia" },
    "cerbero": { name: "Cerbero", emoji: "🐕‍🦺🔥", group: "mitologia" },
    "pegaso": { name: "Pegaso", emoji: "🐎👼", group: "mitologia" },
    "centauro": { name: "Centauro", emoji: "🐎🧍", group: "mitologia" },
    "minotauro": { name: "Minotauro", emoji: "🐂🧍", group: "mitologia" },
    "grifo": { name: "Grifo", emoji: "🦅🦁", group: "mitologia" },
    "kraken": { name: "Kraken", emoji: "🦑🌊", group: "mitologia" },
    "hidra": { name: "Hidra", emoji: "🐉🐉", group: "mitologia" },
    "zeus": { name: "Zeus / Júpiter", emoji: "⚡🧔", group: "mitologia" },
    "poseidon": { name: "Poseidón", emoji: "🔱🌊", group: "mitologia" },
    "hades": { name: "Hades", emoji: "🔥💀", group: "mitologia" },
    "olimpo": { name: "El Olimpo", emoji: "⛰️🏛️", group: "mitologia" },
    "medusa": { name: "Medusa", emoji: "🐍👁️", group: "mitologia" },
    "valhalla": { name: "Valhalla", emoji: "🏰⚔️", group: "mitologia" },
    "odin": { name: "Odín", emoji: "👁️🦅", group: "mitologia" },
    "yggdrasil": { name: "Yggdrasil", emoji: "🌳🌌", group: "mitologia" },
    "quetzalcoatl": { name: "Quetzalcóatl", emoji: "🐍🪽", group: "mitologia" },
    "ra": { name: "Ra", emoji: "🦅☀️", group: "mitologia" },
    "inti": { name: "Inti", emoji: "☀️🟡", group: "mitologia" },
    "apolo": { name: "Apolo", emoji: "☀️🏹", group: "mitologia" },
    "escoba_magica": { name: "Escoba Mágica", emoji: "🧹✨", group: "mitologia" },
    "bola_cristal": { name: "Bola de Cristal", emoji: "🔮", group: "mitologia" },
    "grimoire": { name: "Grimorio", emoji: "📖✨", group: "mitologia" },
    "amuleto": { name: "Amuleto", emoji: "🧿", group: "mitologia" },
    "talisman": { name: "Talismán", emoji: "🪬", group: "mitologia" },
    "ritual": { name: "Ritual Mágico", emoji: "🕯️🔯", group: "mitologia" },
    "portal": { name: "Portal", emoji: "🌀", group: "mitologia" },
    "invocacion": { name: "Invocación", emoji: "🎇👹", group: "mitologia" },
    "homunculo": { name: "Homúnculo", emoji: "🫙👶", group: "mitologia" },
    "quimera": { name: "Quimera", emoji: "🦁🐐", group: "mitologia" },
    "familiar": { name: "Familiar Mágico", emoji: "🐈‍⬛✨", group: "mitologia" },
    "polvo_hada": { name: "Polvo de Hada", emoji: "🧚✨", group: "mitologia" },
    "elixir": { name: "Elixir de Vida", emoji: "🍶✨", group: "mitologia" },
    "sombrero_bruja": { name: "Sombrero de Bruja", emoji: "🧙‍♀️🎩", group: "mitologia" },
    "tarot": { name: "Tarot", emoji: "🃏🔮", group: "mitologia" },
    "runa": { name: "Runa", emoji: "ᚱ🪨", group: "mitologia" },
    "necronomicon": { name: "Necronomicón", emoji: "📖💀", group: "mitologia" },
    "vudu": { name: "Muñeco Vudú", emoji: "🪆💀", group: "mitologia" },
    "ouija": { name: "Ouija", emoji: "🎴👻", group: "mitologia" },
    "caldero": { name: "Caldero Mágico", emoji: "🥘✨", group: "mitologia" },

    // === RELIGIÓN Y ESPIRITUALIDAD ===
    "religion": { name: "Religión", emoji: "🛐", group: "religion" },
    "dios": { name: "Dios", emoji: "👑", group: "religion" },
    "fe": { name: "Fe / Oración", emoji: "🙏", group: "religion" },
    "angel": { name: "Ángel", emoji: "👼", group: "religion" },
    "demonio": { name: "Demonio", emoji: "👿", group: "religion" },
    "cielo_religion": { name: "El Cielo", emoji: "☁️🕊️", group: "religion" },
    "infierno": { name: "Infierno", emoji: "🔥👹", group: "religion" },
    "pecado": { name: "Pecado", emoji: "🍎🐍", group: "religion" },
    "cruz": { name: "Cruz", emoji: "✝️", group: "religion" },
    "jesus": { name: "Jesús", emoji: "🧔🏽‍♂️✝️", group: "religion" },
    "biblia": { name: "Biblia", emoji: "📖", group: "religion" },
    "iglesia": { name: "Iglesia", emoji: "⛪", group: "religion" },
    "parroquia": { name: "Parroquia", emoji: "🏘️⛪", group: "religion" },
    "catedral": { name: "Catedral", emoji: "🕍", group: "religion" },
    "agua_bendita": { name: "Agua Bendita", emoji: "💧✨", group: "religion" },
    "islam": { name: "Islam", emoji: "☪️", group: "religion" },
    "mezquita": { name: "Mezquita", emoji: "🕌", group: "religion" },
    "coran": { name: "Corán", emoji: "📗", group: "religion" },
    "judaismo": { name: "Judaísmo", emoji: "✡️", group: "religion" },
    "sinagoga": { name: "Sinagoga", emoji: "🕍✡️", group: "religion" },
    "tora": { name: "Torá", emoji: "📜✡️", group: "religion" },
    "budismo": { name: "Budismo", emoji: "☸️", group: "religion" },
    "budas": { name: "Buda", emoji: "🧘‍♂️", group: "religion" },
    "nirvana": { name: "Nirvana / Paz", emoji: "🧘‍♀️✨", group: "religion" },
    "hinduismo": { name: "Hinduismo", emoji: "🕉️", group: "religion" },
    "karma": { name: "Karma", emoji: "♻️⚖️", group: "religion" },
    "incienso": { name: "Incienso", emoji: "🚬✨", group: "religion" },
    "templo": { name: "Templo", emoji: "🏛️", group: "religion" },

    // === HISTORIA Y ANTIGÜEDAD ===
    "vikingo": { name: "Vikingo", emoji: "🪓🛡️", group: "historia" },
    "azteca": { name: "Azteca", emoji: "🦅🪨", group: "historia" },
    "inca": { name: "Inca", emoji: "☀️⛰️", group: "historia" },
    "maya": { name: "Maya", emoji: "🗿⏳", group: "historia" },
    "piramide": { name: "Pirámide", emoji: "🔺", group: "historia" },
    "sacrificio": { name: "Sacrificio", emoji: "🩸🔪", group: "historia" },

    // === MEDIEVAL Y FANTASÍA ===
    "reina": { name: "Reina", emoji: "👸", group: "medieval" },
    "corona": { name: "Corona", emoji: "👑", group: "medieval" },
    "trono": { name: "Trono", emoji: "🪑👑", group: "medieval" },
    "armadura": { name: "Armadura", emoji: "🛡️", group: "medieval" },
    "espada_legendaria": { name: "Espada Legendaria", emoji: "⚔️✨", group: "medieval" },
    "torneo": { name: "Torneo", emoji: "🏟️⚔️", group: "medieval" },
    "reino": { name: "Reino / Imperio", emoji: "👑🗺️", group: "medieval" },
    "asedio": { name: "Asedio", emoji: "🏹🏰", group: "medieval" },

    // === SOCIEDAD Y CIVILIZACIÓN ===
    "herramienta": { name: "Herramienta", emoji: "🔨", group: "sociedad" },
    "tijera": { name: "Tijera", emoji: "✂️", group: "sociedad" }, 
    "martillo": { name: "Martillo", emoji: "🔨", group: "sociedad" }, 
    "lapiz": { name: "Lápiz", emoji: "✏️", group: "sociedad" }, 
    "papel": { name: "Papel", emoji: "📄", group: "sociedad" },
    "carta": { name: "Carta", emoji: "✉️", group: "sociedad" }, 
    "periodico": { name: "Periódico", emoji: "📰", group: "sociedad" }, 
    "libro": { name: "Libro", emoji: "📘", group: "sociedad" },
    "biblioteca": { name: "Biblioteca", emoji: "📚", group: "sociedad" },
    "escuela": { name: "Escuela", emoji: "🏫", group: "sociedad" },
    "dinero": { name: "Dinero", emoji: "💵", group: "sociedad" },
    "banco": { name: "Banco", emoji: "🏦", group: "sociedad" },
    "medicina": { name: "Medicina", emoji: "💊", group: "sociedad" },
    "farmaco": { name: "Fármaco / Droga", emoji: "💊🧪", group: "sociedad" }, 
    "ropa": { name: "Ropa", emoji: "👕", group: "sociedad" },
    "zapatos": { name: "Zapatos", emoji: "👟", group: "sociedad" },
    "joya": { name: "Joya", emoji: "💎✨", group: "sociedad" }, 
    "anillo": { name: "Anillo", emoji: "💍", group: "sociedad" }, 
    "pendientes": { name: "Pendientes", emoji: "✨👂", group: "sociedad" }, 
    "collar": { name: "Collar", emoji: "📿", group: "sociedad" }, 
    "brazalete": { name: "Brazalete", emoji: "💫", group: "sociedad" }, 
    "pala": { name: "Pala", emoji: "⛏️", group: "sociedad" },
    "rastrillo": { name: "Rastrillo", emoji: "🧹", group: "sociedad" },
    "azada": { name: "Azada", emoji: "🌾⛏️", group: "sociedad" },
    "escoba": { name: "Escoba", emoji: "🧹", group: "sociedad" }, 
    "juego": { name: "Juego", emoji: "🎲", group: "sociedad" },
    "reloj": { name: "Reloj", emoji: "⌚", group: "sociedad" },
    "ley": { name: "Ley / Orden", emoji: "📜", group: "sociedad" },
    "casa": { name: "Casa", emoji: "🏠", group: "sociedad" },
    "edificio": { name: "Edificio", emoji: "🏢", group: "sociedad" },
    "rascacielos": { name: "Rascacielos", emoji: "🏙️", group: "sociedad" },
    "ciudad": { name: "Ciudad", emoji: "🌆", group: "sociedad" },
    "incendio": { name: "Incendio", emoji: "🔥🏢", group: "sociedad" },
    "carcel": { name: "Cárcel", emoji: "⛓️", group: "sociedad" },

    // === HOGAR Y MUEBLES ===
    "mueble": { name: "Mueble", emoji: "🪑", group: "hogar" },
    "mesa": { name: "Mesa", emoji: "🪚", group: "hogar" },
    "silla": { name: "Silla", emoji: "🪑", group: "hogar" },
    "sillon": { name: "Sillón / Sofá", emoji: "🛋️", group: "hogar" },
    "cama": { name: "Cama", emoji: "🛏️", group: "hogar" },
    "lampara": { name: "Lámpara", emoji: "🪔", group: "hogar" },
    "electrodomestico": { name: "Electrodoméstico", emoji: "🔌", group: "hogar" },
    "refrigerador": { name: "Refrigerador", emoji: "❄️🔌", group: "hogar" },
    "horno": { name: "Horno", emoji: "🍳", group: "hogar" },
    "microondas": { name: "Microondas", emoji: "🍱", group: "hogar" },
    "tetera": { name: "Tetera", emoji: "🫖", group: "hogar" },
    "hervidor": { name: "Hervidor", emoji: "♨️🔌", group: "hogar" },
    "olla": { name: "Olla / Cazuela", emoji: "🥘", group: "hogar" }, 

    // === MÚSICA E INSTRUMENTOS ===
    "musica": { name: "Música", emoji: "🎵", group: "musica_grupo" },
    "instrumento": { name: "Instrumento", emoji: "🪕", group: "musica_grupo" },
    "guitarra": { name: "Guitarra", emoji: "🎸", group: "musica_grupo" },
    "guitarra_electrica": { name: "Guitarra Eléctrica", emoji: "🎸⚡", group: "musica_grupo" },
    "bajo": { name: "Bajo Eléctrico", emoji: "🎸⬇️", group: "musica_grupo" },
    "piano": { name: "Piano", emoji: "🎹", group: "musica_grupo" },
    "sintetizador": { name: "Sintetizador", emoji: "🎹⚡", group: "musica_grupo" },
    "tambor": { name: "Tambor", emoji: "🥁", group: "musica_grupo" },
    "bateria_musical": { name: "Batería (Música)", emoji: "🛢️🥁", group: "musica_grupo" },
    "arpa": { name: "Arpa", emoji: "🪕✨", group: "musica_grupo" },
    "violin": { name: "Violín", emoji: "🎻", group: "musica_grupo" },
    "flauta": { name: "Flauta", emoji: "🪈", group: "musica_grupo" },
    "trompeta": { name: "Trompeta", emoji: "🎺", group: "musica_grupo" },
    "microfono": { name: "Micrófono", emoji: "🎤", group: "musica_grupo" },
    "parlante": { name: "Parlante / Altavoz", emoji: "🔊", group: "musica_grupo" },
    "vinilo": { name: "Vinilo", emoji: "💿", group: "musica_grupo" },
    "cancion": { name: "Canción", emoji: "🎼", group: "musica_grupo" },

    // === ARTE Y CULTURA ===
    "arte": { name: "Arte", emoji: "🎭🎨", group: "cultura" },
    "pintura": { name: "Pintura", emoji: "🎨", group: "cultura" },
    "cuadro": { name: "Cuadro", emoji: "🖼️", group: "cultura" },
    "pintor": { name: "Pintor", emoji: "👨‍🎨", group: "cultura" },
    "escultura": { name: "Escultura", emoji: "🗽", group: "cultura" },
    "escultor": { name: "Escultor", emoji: "🗿👨‍🎨", group: "cultura" },
    "museo": { name: "Museo", emoji: "🏛️", group: "cultura" },
    "teatro": { name: "Teatro", emoji: "🎭", group: "cultura" },
    "actor": { name: "Actor", emoji: "🕺", group: "cultura" },
    "director": { name: "Director", emoji: "💺🎬", group: "cultura" }, 
    "cineasta": { name: "Cineasta", emoji: "🎥👨‍🎨", group: "cultura" }, 
    "poesia": { name: "Poesía", emoji: "📜❤️", group: "cultura" },
    "escritor": { name: "Escritor", emoji: "✍️", group: "cultura" },
    "camara": { name: "Cámara", emoji: "📷", group: "cultura" },
    "fotografia": { name: "Fotografía", emoji: "📸", group: "cultura" },
    "comic": { name: "Cómic", emoji: "🗯️", group: "cultura" }, 

    // === PROFESIONES Y OFICIOS ===
    "profesor": { name: "Profesor", emoji: "👨‍🏫", group: "profesiones" },
    "abogado": { name: "Abogado", emoji: "👨‍⚖️", group: "profesiones" },
    "juez": { name: "Juez", emoji: "⚖️", group: "profesiones" },
    "policia": { name: "Policía", emoji: "👮", group: "profesiones" },
    "bombero": { name: "Bombero", emoji: "👨‍🚒", group: "profesiones" },
    "medico": { name: "Médico", emoji: "👨‍⚕️", group: "profesiones" },
    "obrero": { name: "Obrero", emoji: "👷", group: "profesiones" },
    "zapatero": { name: "Zapatero", emoji: "👞👨‍🔧", group: "profesiones" },
    "peluquero": { name: "Peluquero", emoji: "✂️💈", group: "profesiones" }, 
    "guardia": { name: "Guardia", emoji: "💂", group: "profesiones" },
    "espia": { name: "Espía", emoji: "🕵️", group: "profesiones" },
    "cocinero": { name: "Cocinero", emoji: "👨‍🍳", group: "profesiones" },
    "bartender": { name: "Bartender", emoji: "🍸👨‍🍳", group: "profesiones" }, 
    "herrero": { name: "Herrero", emoji: "⚒️", group: "profesiones" },
    "minero": { name: "Minero", emoji: "⛏️", group: "profesiones" }, 
    "granjero": { name: "Granjero", emoji: "🧑‍🌾", group: "profesiones" },
    "politico": { name: "Político", emoji: "👔", group: "profesiones" },
    "periodista": { name: "Periodista", emoji: "📰", group: "profesiones" },
    "fotografo": { name: "Fotógrafo", emoji: "📸👨‍🎨", group: "profesiones" }, 
    "cartero": { name: "Cartero", emoji: "📬🏃", group: "profesiones" }, 
    "piloto": { name: "Piloto", emoji: "👨‍✈️", group: "profesiones" },
    "marinero": { name: "Marinero", emoji: "⚓", group: "profesiones" },
    "chofer": { name: "Chofer", emoji: "🚕", group: "profesiones" },
    "ladron": { name: "Ladrón", emoji: "🥷", group: "profesiones" },
    "pirata": { name: "Pirata", emoji: "🏴‍☠️", group: "profesiones" }, 
    "asesino": { name: "Asesino", emoji: "🩸", group: "profesiones" },
    "payaso": { name: "Payaso", emoji: "🤡", group: "profesiones" }, 
    "cantante": { name: "Cantante", emoji: "🧑‍🎤", group: "profesiones" },
    "musico": { name: "Músico", emoji: "🎸👨‍🎤", group: "profesiones" },
    "alquimista": { name: "Alquimista", emoji: "👨‍🔬✨", group: "profesiones" }, 

    // === MILITAR Y GUERRA ===
    "arma": { name: "Arma Base", emoji: "🗡️", group: "militar" },
    "espada": { name: "Espada", emoji: "⚔️", group: "militar" },
    "martillo_guerra": { name: "Martillo de Guerra", emoji: "🔨⚔️", group: "militar" },
    "hacha": { name: "Hacha", emoji: "🪓", group: "militar" },
    "arco": { name: "Arco", emoji: "🏹", group: "militar" },
    "flecha": { name: "Flecha", emoji: "🏹🎯", group: "militar" },
    "ballesta": { name: "Ballesta", emoji: "💘", group: "militar" },
    "maza": { name: "Maza", emoji: "🪵", group: "militar" },
    "garras": { name: "Garras", emoji: "🐾⚔️", group: "militar" },
    "veneno": { name: "Veneno Mortífero", emoji: "☠️🧪", group: "militar" },
    "arma_envenenada": { name: "Arma Envenenada", emoji: "🤢🗡️", group: "militar" },
    "escudo": { name: "Escudo", emoji: "🛡️", group: "militar" },
    "canon": { name: "Cañón", emoji: "🏴‍☠️💣", group: "militar" },
    "tanque": { name: "Tanque", emoji: "🚜🔫", group: "militar" },
    "misil": { name: "Misil", emoji: "🚀💣", group: "militar" },
    "bomba_atomica": { name: "Bomba Atómica", emoji: "🍄💥", group: "militar" },
    "base_militar": { name: "Base Militar", emoji: "🏕️🪖", group: "militar" },
    "submarino_nuclear": { name: "Sub. Nuclear", emoji: "☢️🛥️", group: "militar" },
    "general": { name: "General", emoji: "🎖️👨‍✈️", group: "militar" },

    // === COMERCIOS Y OCIO ===
    "tienda": { name: "Tienda Pequeña", emoji: "🏪", group: "comercio" },
    "centro_comercial": { name: "Mall / Centro Comercial", emoji: "🛍️", group: "comercio" },
    "supermercado": { name: "Supermercado", emoji: "🛒", group: "comercio" },
    "restaurante": { name: "Restaurante", emoji: "🍽️", group: "comercio" },
    "cafeteria": { name: "Cafetería", emoji: "☕", group: "comercio" },
    "heladeria": { name: "Heladería", emoji: "🍦", group: "comercio" },
    "zapateria": { name: "Zapatería", emoji: "👞", group: "comercio" },
    "ferreteria": { name: "Ferretería", emoji: "🛠️", group: "comercio" },
    "licoreria": { name: "Licorería", emoji: "🍾", group: "comercio" },
    "peluqueria": { name: "Peluquería / Barbería", emoji: "💈✂️", group: "comercio" }, 
    "gasolinera": { name: "Servicentro / Gasolinera", emoji: "⛽", group: "comercio" }, 
    "farmacia": { name: "Farmacia", emoji: "🏪⚕️", group: "comercio" }, 
    "industria": { name: "Industria / Empresa", emoji: "🏭", group: "comercio" },
    "cine": { name: "Cine", emoji: "🎬", group: "comercio" },
    "pelicula": { name: "Película", emoji: "🎞️", group: "comercio" },
    "discoteca": { name: "Discoteca", emoji: "🪩", group: "comercio" },
    "bar": { name: "Bar", emoji: "🍺", group: "comercio" },
    "concierto": { name: "Concierto", emoji: "🎫🎸", group: "comercio" },

    // === GOBIERNO Y CONSPIRACIONES ===
    "gobierno": { name: "Gobierno", emoji: "🏛️", group: "gobierno" },
    "onu": { name: "ONU", emoji: "🇺🇳", group: "gobierno" },
    "fbi": { name: "FBI", emoji: "🕵️‍♂️🛡️", group: "gobierno" },
    "cia": { name: "CIA", emoji: "🕵️‍♂️👁️", group: "gobierno" },
    "nasa": { name: "NASA", emoji: "🚀🔭", group: "gobierno" },
    "vaticano": { name: "El Vaticano", emoji: "🇻🇦", group: "gobierno" },
    "hombres_de_negro": { name: "Hombres de Negro", emoji: "🕴️🕶️", group: "conspiracion" },
    "conspiracion": { name: "Conspiración", emoji: "👁️🔺", group: "conspiracion" },
    "illuminati": { name: "Illuminati", emoji: "👁️🔺", group: "conspiracion" },
    "nuevo_orden_mundial": { name: "Nuevo Orden Mundial", emoji: "🌍👁️", group: "conspiracion" },
    "area_51": { name: "Área 51", emoji: "👽🏕️", group: "conspiracion" },
    "masoneria": { name: "Masonería", emoji: "📐👁️", group: "conspiracion" },

    // === DEPORTES ===
    "deporte": { name: "Deporte", emoji: "🏃", group: "deporte" },
    "pelota": { name: "Pelota", emoji: "⚽", group: "deporte" },
    "futbol": { name: "Fútbol", emoji: "🥅", group: "deporte" },
    "basquetbol": { name: "Básquetbol", emoji: "🏀", group: "deporte" },
    "tenis": { name: "Tenis", emoji: "🎾", group: "deporte" },
    "natacion": { name: "Natación", emoji: "🏊", group: "deporte" },
    "estadio": { name: "Estadio", emoji: "🏟️", group: "deporte" },
    "gimnasio": { name: "Gimnasio", emoji: "🏋️", group: "deporte" },
    "pesa": { name: "Pesa", emoji: "🏋️‍♂️", group: "deporte" },
    "musculo": { name: "Músculo", emoji: "💪", group: "deporte" },
    "sudor": { name: "Sudor", emoji: "💦", group: "deporte" },
    "boxeo": { name: "Boxeo", emoji: "🥊", group: "deporte" },
    "esqui": { name: "Esquí", emoji: "⛷️", group: "deporte" },
    "patinaje": { name: "Patinaje", emoji: "⛸️", group: "deporte" },

    // === COMIDA ===
    "carne": { name: "Carne", emoji: "🥩", group: "comida" },
    "sangre": { name: "Sangre", emoji: "🩸", group: "comida" },
    "leche": { name: "Leche", emoji: "🥛", group: "comida" },
    "trigo": { name: "Trigo", emoji: "🌾", group: "comida" },
    "harina": { name: "Harina", emoji: "🥡", group: "comida" },
    "masa": { name: "Masa", emoji: "🥟", group: "comida" },
    "pan": { name: "Pan", emoji: "🍞", group: "comida" },
    "azucar": { name: "Azúcar", emoji: "🍬", group: "comida" },
    "pastel": { name: "Pastel", emoji: "🎂", group: "comida" },
    "queso": { name: "Queso", emoji: "🧀", group: "comida" },
    "tocino": { name: "Tocino", emoji: "🥓", group: "comida" },
    "fruta": { name: "Fruta", emoji: "🍎", group: "comida" }, 
    "verdura": { name: "Verdura", emoji: "🥦", group: "comida" }, 
    "ensalada": { name: "Ensalada", emoji: "🥗", group: "comida" }, 
    "jugo": { name: "Jugo / Zumo", emoji: "🧃", group: "comida" }, 
    "alcohol": { name: "Alcohol", emoji: "🍷", group: "comida" },
    "cerveza": { name: "Cerveza", emoji: "🍺", group: "comida" },
    "cafe_bebida": { name: "Café Servido", emoji: "☕", group: "comida" },
    "helado": { name: "Helado", emoji: "🍦", group: "comida" },

    // === TECNOLOGÍA Y VEHÍCULOS ===
    "polvora": { name: "Pólvora", emoji: "💣", group: "tecnologia" },
    "bomba": { name: "Bomba", emoji: "🧨", group: "tecnologia" },
    "arma_fuego": { name: "Arma de Fuego", emoji: "🔫", group: "tecnologia" },
    "electricidad": { name: "Electricidad", emoji: "⚡", group: "tecnologia" },
    "bateria": { name: "Batería", emoji: "🔋", group: "tecnologia" },
    "bombilla": { name: "Bombilla", emoji: "💡", group: "tecnologia" },
    "laser": { name: "Láser", emoji: "💥", group: "tecnologia" },
    "computadora": { name: "Computadora", emoji: "💻", group: "tecnologia" },
    "internet": { name: "Internet", emoji: "🌐", group: "tecnologia" },
    "fibra_optica": { name: "Fibra Óptica", emoji: "🔌", group: "tecnologia" },
    "hacker": { name: "Hacker", emoji: "🕵️", group: "tecnologia" },
    "robot": { name: "Robot", emoji: "🤖", group: "tecnologia" },
    "ia": { name: "I. Artificial", emoji: "🧠", group: "tecnologia" },
    "ciborg": { name: "Ciborg", emoji: "🦾", group: "tecnologia" },
    "celular": { name: "Celular", emoji: "📱", group: "tecnologia" },
    "reloj_inteligente": { name: "Smartwatch", emoji: "⌚", group: "tecnologia" },
    "television": { name: "Televisor", emoji: "📺", group: "tecnologia" },
    "radio_aparato": { name: "Radio (Aparato)", emoji: "📻", group: "tecnologia" }, 
    "videojuego": { name: "Videojuego", emoji: "🎮", group: "tecnologia" },
    "consola": { name: "Consola", emoji: "🕹️", group: "tecnologia" },
    "realidad_virtual": { name: "Realidad Virtual", emoji: "🥽", group: "tecnologia" },
    "criptomoneda": { name: "Criptomoneda", emoji: "🪙", group: "tecnologia" },
    "impresora": { name: "Impresora", emoji: "🖨️", group: "tecnologia" },
    "impresora_3d": { name: "Impresora 3D", emoji: "🧊", group: "tecnologia" },
    "motor": { name: "Motor", emoji: "🗜️⚡", group: "tecnologia" },
    "iman": { name: "Imán", emoji: "🧲", group: "tecnologia" }, 
    "carro": { name: "Carro", emoji: "🛒", group: "transporte" },
    "bicicleta": { name: "Bicicleta", emoji: "🚲", group: "transporte" },
    "skate": { name: "Skate", emoji: "🛹", group: "transporte" },
    "scooter": { name: "Scooter", emoji: "🛴", group: "transporte" },
    "motocicleta": { name: "Motocicleta", emoji: "🏍️", group: "transporte" },
    "coche": { name: "Automóvil", emoji: "🚗", group: "transporte" },
    "camion": { name: "Camión", emoji: "🚚", group: "transporte" },
    "autobus": { name: "Autobús", emoji: "🚌", group: "transporte" },
    "tractor": { name: "Tractor", emoji: "🚜", group: "transporte" },
    "tren": { name: "Tren", emoji: "🚄", group: "transporte" },
    "barco": { name: "Barco", emoji: "⛵", group: "transporte" },
    "lancha": { name: "Lancha", emoji: "🚤", group: "transporte" },
    "crucero": { name: "Crucero", emoji: "🛳️", group: "transporte" },
    "submarino": { name: "Submarino", emoji: "🛥️", group: "transporte" },
    "avion": { name: "Avión", emoji: "✈️", group: "transporte" },
    "avioneta": { name: "Avioneta", emoji: "🛩️", group: "transporte" },
    "helicoptero": { name: "Helicóptero", emoji: "🚁", group: "transporte" },
    "globo": { name: "Globo Aerostático", emoji: "🎈", group: "transporte" },
    "dron": { name: "Dron", emoji: "🚁🤖", group: "transporte" },
    "carruaje": { name: "Carruaje", emoji: "🐴🛒", group: "transporte" },
    "ambulancia": { name: "Ambulancia", emoji: "📶", group: "transporte" },

    // === COSMOS ===
    "cielo": { name: "Cielo", emoji: "🌌", group: "cosmos" },
    "sol": { name: "Sol", emoji: "☀️", group: "cosmos" },
    "luna": { name: "Luna", emoji: "🌙", group: "cosmos" },
    "estrella": { name: "Estrella", emoji: "⭐", group: "cosmos" },
    "meteorito": { name: "Meteorito", emoji: "☄️", group: "cosmos" },
    "planeta": { name: "Planeta", emoji: "🪐", group: "cosmos" },
    "sistema_solar": { name: "Sistema Solar", emoji: "🌌", group: "cosmos" },
    "galaxia": { name: "Galaxia", emoji: "🌀", group: "cosmos" },
    "agujero_negro": { name: "Agujero Negro", emoji: "🕳️", group: "cosmos" },
    "alienigena": { name: "Alienígena", emoji: "👽", group: "cosmos" },
    "ovni": { name: "OVNI", emoji: "🛸", group: "cosmos" },
    "astronauta": { name: "Astronauta", emoji: "👨‍🚀", group: "cosmos" },
    "cohete": { name: "Cohete", emoji: "🚀", group: "cosmos" },

    // === CIENCIA Y QUÍMICA 🔬🧪 ===
    "conocimiento": { name: "Conocimiento", emoji: "🧠", group: "ciencia" },
    "ciencia": { name: "Ciencia", emoji: "🔬", group: "ciencia" },
    "cientifico": { name: "Científico", emoji: "👨‍🔬", group: "ciencia" },
    "laboratorio": { name: "Laboratorio", emoji: "🧪🏢", group: "ciencia" },
    "biologia": { name: "Biología", emoji: "🌱🔬", group: "ciencia" },
    "quimica": { name: "Química", emoji: "⚗️", group: "ciencia" },
    "fisica": { name: "Física", emoji: "⚛️", group: "ciencia" },
    "microscopio": { name: "Microscopio", emoji: "🔬", group: "ciencia" },
    "celula": { name: "Célula", emoji: "🦠", group: "ciencia" },
    "adn": { name: "ADN", emoji: "🧬", group: "ciencia" },
    "atomo": { name: "Átomo", emoji: "⚛️", group: "ciencia" },
    "molecula": { name: "Molécula", emoji: "⚛️⚛️", group: "ciencia" },
    "experimento": { name: "Experimento", emoji: "💥🧪", group: "ciencia" },
    "matematicas": { name: "Matemáticas", emoji: "🧮", group: "ciencia" },
    "numero": { name: "Número", emoji: "🔢", group: "ciencia" },
    "ecuacion": { name: "Ecuación", emoji: "✖️➗", group: "ciencia" },
    "calculadora": { name: "Calculadora", emoji: "🖩", group: "ciencia" },
    "geometria": { name: "Geometría", emoji: "📐", group: "ciencia" },
    "infinito": { name: "Infinito", emoji: "♾️", group: "ciencia" },
    "tabla_periodica": { name: "Tabla Periódica", emoji: "🔠🧪", group: "elementos_quimicos" }, 
    "oxigeno": { name: "Oxígeno (O)", emoji: "💨🫧", group: "elementos_quimicos" }, 
    "hidrogeno": { name: "Hidrógeno (H)", emoji: "💧🫧", group: "elementos_quimicos" }, 
    "helio": { name: "Helio (He)", emoji: "🎈🫧", group: "elementos_quimicos" }, 
    "radio_elemento": { name: "Radio (Ra)", emoji: "☢️🪨", group: "elementos_quimicos" }, 
    "polonio": { name: "Polonio (Po)", emoji: "☢️🔵", group: "elementos_quimicos" }, 
    "uranio": { name: "Uranio (U)", emoji: "☢️🟢", group: "elementos_quimicos" }, 
    "plutonio": { name: "Plutonio (Pu)", emoji: "☢️🔴", group: "elementos_quimicos" }, 

    // === MEDICINA Y ENFERMEDADES ===
    "virus": { name: "Virus", emoji: "🦠☣️", group: "medicina" },
    "epidemia": { name: "Epidemia", emoji: "😷🌍", group: "medicina" },
    "pandemia": { name: "Pandemia", emoji: "😷🌍", group: "medicina" },
    "vacuna": { name: "Vacuna", emoji: "💉", group: "medicina" },
    "antibiotico": { name: "Antibiótico", emoji: "💊", group: "medicina" },
    "inmunidad": { name: "Inmunidad", emoji: "🛡️🦠", group: "medicina" },
    "cirugia": { name: "Cirugía", emoji: "🪚💉", group: "medicina" },
    "cancer": { name: "Cáncer", emoji: "🦠", group: "medicina" },

    // === CÓMICS Y SUPERHÉROES ===
    "mutante": { name: "Mutante", emoji: "🧬🦸", group: "comics" },
    "superheroe": { name: "Superhéroe", emoji: "🦸‍♂️", group: "comics" },
    "villano": { name: "Villano", emoji: "🦹‍♂️", group: "comics" },
    "spiderman": { name: "Spiderman", emoji: "🕷️🦸‍♂️", group: "comics" },
    "duende_verde": { name: "Duende Verde", emoji: "🧝‍♂️💣", group: "comics" },
    "hombre_arena": { name: "Hombre de Arena", emoji: "🏜️🦹", group: "comics" },
    "flash": { name: "Flash", emoji: "⚡🏃", group: "comics" },
    "venom": { name: "Venom", emoji: "👽🕷️", group: "comics" },
    "capitan_america": { name: "Capitán América", emoji: "🛡️🦸‍♂️", group: "comics" },
    "batman": { name: "Batman", emoji: "🦇🦸‍♂️", group: "comics" },
    "superman": { name: "Superman", emoji: "👽🦸‍♂️", group: "comics" },
    "joker": { name: "Joker", emoji: "🤡🦹‍♂️", group: "comics" },
    "black_widow": { name: "Black Widow", emoji: "🕷️👩‍🦰", group: "comics" },
    "black_panther": { name: "Black Panther", emoji: "🐆🦸🏿‍♂️", group: "comics" },
    "aquaman": { name: "Aquaman", emoji: "🔱🦸‍♂️", group: "comics" },
    "wolverine": { name: "Wolverine", emoji: "🐺⚔️", group: "comics" },
    "thor": { name: "Thor", emoji: "⚡🔨", group: "comics" },
    "deadpool": { name: "Deadpool", emoji: "⚔️🤪", group: "comics" },
    "hulk": { name: "Hulk", emoji: "🟢😡", group: "comics" },
    "doctor_strange": { name: "Doctor Strange", emoji: "✨🧙‍♂️", group: "comics" },
    "catwoman": { name: "Catwoman", emoji: "🐈‍⬛🦹‍♀️", group: "comics" },
    "robin": { name: "Robin", emoji: "🐦🦸‍♂️", group: "comics" },
    "scarlet_witch": { name: "Bruja Escarlata", emoji: "🔴🧙‍♀️", group: "comics" },
    "la_mole": { name: "La Mole", emoji: "🪨🦸‍♂️", group: "comics" },
    "thanos": { name: "Thanos", emoji: "🟣🧤", group: "comics" },
    "ant_man": { name: "Ant-Man", emoji: "🐜🦸‍♂️", group: "comics" },
    "green_lantern": { name: "Linterna Verde", emoji: "💍🟢", group: "comics" },
    "iron_man": { name: "Iron Man", emoji: "🤖🦸‍♂️", group: "comics" },
    "magneto": { name: "Magneto", emoji: "🧲🦹‍♂️", group: "comics" },
    "lex_luthor": { name: "Lex Luthor", emoji: "🧪🦹‍♂️", group: "comics" },
    "wonder_woman": { name: "Wonder Woman", emoji: "🛡️🦸‍♀️", group: "comics" },

    // === ELEMENTOS AGREGADOS (REPARACIÓN: antes eran "fantasmas" en las recetas) ===
    "mar": { name: "Mar", emoji: "🌊", group: "naturaleza" },
    "madera": { name: "Madera", emoji: "🪵", group: "materiales" },
    "rueda": { name: "Rueda", emoji: "🛞", group: "tecnologia" },
    "onda_radio": { name: "Onda de Radio", emoji: "📡", group: "tecnologia" },
    "lagarto": { name: "Lagarto", emoji: "🦎", group: "animales" },
    "varita": { name: "Varita Mágica", emoji: "🪄", group: "mitologia" },
    "alma": { name: "Alma", emoji: "👻✨", group: "mitologia" },
    "muerte": { name: "Muerte", emoji: "💀", group: "mitologia" },
    "sacerdote": { name: "Sacerdote", emoji: "✝️🧍", group: "religion" },
    "papa": { name: "Papa", emoji: "✝️👑", group: "religion" },
    "monje": { name: "Monje", emoji: "📿🧘", group: "religion" },
    "monasterio": { name: "Monasterio", emoji: "⛪⛰️", group: "religion" },
    "rabino": { name: "Rabino", emoji: "✡️🧔", group: "religion" },
    "profeta": { name: "Profeta", emoji: "📜🧔", group: "religion" },
    "rey": { name: "Rey", emoji: "🤴", group: "medieval" },
    "castillo": { name: "Castillo", emoji: "🏰", group: "medieval" },
    "caballero": { name: "Caballero", emoji: "🤺🛡️", group: "medieval" },
    "guerrero": { name: "Guerrero", emoji: "⚔️💪", group: "militar" },
    "soldado": { name: "Soldado", emoji: "🪖", group: "militar" },
    "ejercito": { name: "Ejército", emoji: "🪖🪖", group: "militar" },
    "guerra": { name: "Guerra", emoji: "⚔️🔥", group: "militar" },
    "cazador": { name: "Cazador", emoji: "🏹🧍", group: "profesiones" },
    "trabajo": { name: "Trabajo", emoji: "💼", group: "sociedad" },
    "secreto": { name: "Secreto", emoji: "🤫", group: "sociedad" },
    "hospital": { name: "Hospital", emoji: "🏥", group: "sociedad" },
    "banda": { name: "Banda Musical", emoji: "🎸🥁", group: "musica_grupo" },
    "amor": { name: "Amor", emoji: "❤️", group: "emociones" },
    "corazon": { name: "Corazón", emoji: "💗", group: "emociones" },
    "felicidad": { name: "Felicidad", emoji: "😄", group: "emociones" },
    "tristeza": { name: "Tristeza", emoji: "😢", group: "emociones" },
    "miedo": { name: "Miedo", emoji: "😱", group: "emociones" },
    "enojo": { name: "Enojo", emoji: "😡", group: "emociones" },
    "odio": { name: "Odio", emoji: "💢", group: "emociones" },
    "risa": { name: "Risa", emoji: "😂", group: "emociones" },
    "justicia": { name: "Justicia", emoji: "⚖️✨", group: "emociones" },
    "paz": { name: "Paz", emoji: "🕊️", group: "emociones" },
    "clon": { name: "Clon", emoji: "👥🧬", group: "futurismo" },
    "singularidad": { name: "Singularidad", emoji: "🧠🌀", group: "futurismo" },
    "biotecnologia": { name: "Biotecnología", emoji: "🧬⚙️", group: "futurismo" },
    "nanotecnologia": { name: "Nanotecnología", emoji: "🔬🤖", group: "futurismo" },
    "teletransporte": { name: "Teletransporte", emoji: "🌀🧍", group: "futurismo" },
    "terraformacion": { name: "Terraformación", emoji: "🪐🌱", group: "futurismo" },
    "motor_antimateria": { name: "Motor de Antimateria", emoji: "⚛️🚀", group: "futurismo" },

    // === DOODLE GOD: EPISODIO 1 (COMIENZO) Y NATURALEZA ===
    "chispa": { name: "Chispa", emoji: "✨🔥", group: "naturaleza" },
    "hoguera": { name: "Hoguera", emoji: "🔥🪵", group: "naturaleza" },
    "humo": { name: "Humo", emoji: "💨🌫️", group: "naturaleza" },
    "isla": { name: "Isla", emoji: "🏝️", group: "naturaleza" },
    "playa": { name: "Playa", emoji: "🏖️", group: "naturaleza" },
    "acantilado": { name: "Acantilado", emoji: "⛰️🌊", group: "naturaleza" },
    "cueva": { name: "Cueva", emoji: "🕳️⛰️", group: "naturaleza" },
    "palo": { name: "Palo", emoji: "🦯🪵", group: "materiales" },
    "piedra_afilada": { name: "Piedra Afilada", emoji: "🪨🔪", group: "materiales" },
    "hueso": { name: "Hueso", emoji: "🦴", group: "materiales" },
    "pluma": { name: "Pluma", emoji: "🪶", group: "materiales" },
    "tela": { name: "Tela", emoji: "🧶🟪", group: "materiales" },
    "lienzo": { name: "Lienzo", emoji: "🧵⬜", group: "materiales" },
    "concha": { name: "Concha", emoji: "🐚", group: "oceanografia" },
    "piedra_caliza": { name: "Piedra Caliza", emoji: "🪨⚪", group: "materiales" },
    "cemento": { name: "Cemento", emoji: "🏗️🪣", group: "materiales" },
    "hormigon": { name: "Hormigón", emoji: "🧱🏗️", group: "materiales" },
    "fertilizante": { name: "Fertilizante", emoji: "💩🌱", group: "plantas" },
    "salitre": { name: "Salitre", emoji: "🧂💥", group: "materiales" },
    "pegamento": { name: "Pegamento", emoji: "🧴", group: "materiales" },
    "plata": { name: "Plata", emoji: "🥈", group: "materiales" },
    "campo": { name: "Campo de Cultivo", emoji: "🌾🚜", group: "plantas" },
    "cana": { name: "Caña", emoji: "🎋", group: "plantas" },
    "helecho": { name: "Helecho", emoji: "🌿🍃", group: "plantas" },
    "arbusto": { name: "Arbusto", emoji: "🪴", group: "plantas" },
    "palmera": { name: "Palmera", emoji: "🌴🥥", group: "plantas" },
    "girasol": { name: "Girasol", emoji: "🌻", group: "plantas" },
    "tabaco": { name: "Tabaco", emoji: "🌿🚬", group: "plantas" },
    "dinosaurio": { name: "Dinosaurio", emoji: "🦖", group: "animales" },
    "rata": { name: "Rata", emoji: "🐀", group: "animales" },
    "halcon": { name: "Halcón", emoji: "🦅🏜️", group: "animales" },
    "muro": { name: "Muro", emoji: "🧱🧱", group: "sociedad" },
    "choza": { name: "Choza", emoji: "🛖", group: "sociedad" },
    "cana_pescar": { name: "Caña de Pescar", emoji: "🎣", group: "sociedad" },
    "deuda": { name: "Deuda", emoji: "💸", group: "sociedad" },
    "tarjeta_credito": { name: "Tarjeta de Crédito", emoji: "💳", group: "sociedad" },
    "alcoholico": { name: "Alcohólico", emoji: "🍺🥴", group: "sociedad" },
    "comerciante": { name: "Comerciante", emoji: "🧳💰", group: "profesiones" },
    "taberna": { name: "Taberna", emoji: "🍻🏠", group: "comercio" },

    // === COMIDA Y BEBIDAS (DOODLE GOD) ===
    "sal": { name: "Sal", emoji: "🧂", group: "comida" },
    "bayas": { name: "Bayas", emoji: "🍓", group: "comida" },
    "coco": { name: "Coco", emoji: "🥥", group: "comida" },
    "filete": { name: "Filete", emoji: "🥩🔥", group: "comida" },
    "cecina": { name: "Cecina", emoji: "🥩🧂", group: "comida" },
    "caviar": { name: "Caviar", emoji: "🫙🐟", group: "comida" },
    "galletas": { name: "Galletas", emoji: "🍪", group: "comida" },
    "dieta": { name: "Dieta", emoji: "🥗⚖️", group: "comida" },
    "comida_rapida": { name: "Comida Rápida", emoji: "🍔", group: "comida" },
    "comida_congelada": { name: "Comida Congelada", emoji: "🥶🍱", group: "comida" },
    "chicle": { name: "Chicle", emoji: "🍬😬", group: "comida" },
    "vodka": { name: "Vodka", emoji: "🍸", group: "bebidas" },
    "ron": { name: "Ron", emoji: "🥃🏴‍☠️", group: "bebidas" },
    "tequila": { name: "Tequila", emoji: "🥃🌵", group: "bebidas" },
    "absenta": { name: "Absenta", emoji: "🍸🟢", group: "bebidas" },
    "b52": { name: "B-52", emoji: "🍸🔥", group: "bebidas" },
    "ruso_blanco": { name: "Ruso Blanco", emoji: "🍸🥛", group: "bebidas" },
    "resaca": { name: "Resaca", emoji: "🤕🍺", group: "bebidas" },
    "cigarrillo": { name: "Cigarrillo", emoji: "🚬", group: "bebidas" },
    "ruleta_rusa": { name: "Ruleta Rusa", emoji: "🔫🎲", group: "bebidas" },

    // === MILITAR Y TECNOLOGÍA (DOODLE GOD) ===
    "lanza": { name: "Lanza", emoji: "🗡️🦯", group: "militar" },
    "coctel_molotov": { name: "Cóctel Molotov", emoji: "🍾🔥", group: "militar" },
    "ak47": { name: "AK-47", emoji: "🔫💥", group: "militar" },
    "bazooka": { name: "Bazuca", emoji: "🧨🔫", group: "militar" },
    "caldera": { name: "Caldera", emoji: "♨️⚙️", group: "tecnologia" },
    "maquina_vapor": { name: "Máquina de Vapor", emoji: "🚂♨️", group: "tecnologia" },
    "mecanismo": { name: "Mecanismo", emoji: "⚙️🔩", group: "tecnologia" },
    "petardo": { name: "Petardo", emoji: "🧨🎉", group: "tecnologia" },
    "vacio": { name: "Vacío", emoji: "🌌⚫", group: "cosmos" },
    "plasma": { name: "Plasma", emoji: "🔆⚛️", group: "ciencia" },
    "radiacion": { name: "Radiación", emoji: "☢️✨", group: "ciencia" },
    "satelite": { name: "Satélite", emoji: "🛰️", group: "cosmos" },
    "modulo_lunar": { name: "Módulo Lunar", emoji: "🌙🛸", group: "cosmos" },
    "estacion_espacial": { name: "Estación Espacial", emoji: "🛰️🏠", group: "cosmos" },
    "locomotora": { name: "Locomotora", emoji: "🚂", group: "transporte" },
    "barco_vapor": { name: "Barco de Vapor", emoji: "🚢♨️", group: "transporte" },
    "fragata": { name: "Fragata", emoji: "⛵⚔️", group: "transporte" },
    "balsa": { name: "Balsa", emoji: "🛶", group: "transporte" },
    "vela_barco": { name: "Vela de Barco", emoji: "⛵🧵", group: "transporte" },
    "auto_hibrido": { name: "Auto Híbrido", emoji: "🚗🔋", group: "transporte" },

    // === MÚSICA Y CULTURA (DOODLE GOD) ===
    "death_metal": { name: "Death Metal", emoji: "🤘💀", group: "musica_grupo" },
    "rock_n_roll": { name: "Rock and Roll", emoji: "🎸🎵", group: "musica_grupo" },
    "estatua": { name: "Estatua", emoji: "🗿🎨", group: "cultura" },

    // === RELIGIÓN Y MITOLOGÍA (DOODLE GOD) ===
    "mandamientos": { name: "Mandamientos", emoji: "📜🪨", group: "religion" },
    "oracion": { name: "Oración", emoji: "🙏✨", group: "religion" },
    "semidios": { name: "Semidiós", emoji: "✨🧔", group: "mitologia" },
    "necrofago": { name: "Necrófago", emoji: "🧟💀", group: "mitologia" },
    "diablillo": { name: "Diablillo", emoji: "😈", group: "mitologia" },
    "basilisco": { name: "Basilisco", emoji: "🦎👁️", group: "mitologia" },

    // === FANTASÍA Y MAZMORRAS (EPISODIO 4) ===
    "oscuridad": { name: "Oscuridad", emoji: "🌑", group: "fantasia" },
    "sombra": { name: "Sombra", emoji: "👤🌑", group: "fantasia" },
    "ilusion": { name: "Ilusión", emoji: "🎭✨", group: "fantasia" },
    "bola_fuego": { name: "Bola de Fuego", emoji: "🔥🟠", group: "fantasia" },
    "cono_frio": { name: "Cono de Frío", emoji: "❄️🔵", group: "fantasia" },
    "pergamino": { name: "Pergamino", emoji: "📜✨", group: "fantasia" },
    "curacion": { name: "Curación", emoji: "💚✨", group: "fantasia" },
    "resurreccion": { name: "Resurrección", emoji: "⚰️✨", group: "fantasia" },
    "subterraneo": { name: "Subterráneo", emoji: "🕳️🌑", group: "fantasia" },
    "torre": { name: "Torre de Mago", emoji: "🗼🧙", group: "fantasia" },
    "paladin": { name: "Paladín", emoji: "🛡️✨", group: "fantasia" },
    "bardo": { name: "Bardo", emoji: "🎻🎩", group: "fantasia" },
    "druida": { name: "Druida", emoji: "🌿🧙", group: "fantasia" },
    "semielfo": { name: "Semielfo", emoji: "🧝🧍", group: "fantasia" },
    "enano": { name: "Enano", emoji: "🧔⛏️", group: "fantasia" },
    "drow": { name: "Drow", emoji: "🧝🌑", group: "fantasia" },
    "duergar": { name: "Duergar", emoji: "🧔🌑", group: "fantasia" },
    "mithril": { name: "Mithril", emoji: "⛓️✨", group: "fantasia" },
    "adamantita": { name: "Adamantita", emoji: "🪨⚫", group: "fantasia" },
    "picaro": { name: "Pícaro", emoji: "🗡️🎭", group: "fantasia" },
    "caos": { name: "Caos", emoji: "🌀🟣", group: "fantasia" },
    "orden": { name: "Orden", emoji: "📏✨", group: "fantasia" },
    "astral": { name: "Plano Astral", emoji: "🌌✨", group: "fantasia" },
    "illithid": { name: "Illithid", emoji: "🦑🧠", group: "fantasia" },
    "modron": { name: "Modron", emoji: "⚙️🤖", group: "fantasia" },
    "treant": { name: "Treant", emoji: "🌳🧍", group: "fantasia" },

    // === AVENTURAS Y TESOROS (QUESTS) ===
    "refugio": { name: "Refugio", emoji: "⛺", group: "aventura" },
    "brujula": { name: "Brújula", emoji: "🧭", group: "aventura" },
    "mapa": { name: "Mapa", emoji: "🗺️", group: "aventura" },
    "catalejo": { name: "Catalejo", emoji: "🔭", group: "aventura" },
    "tesoro": { name: "Tesoro", emoji: "💰👑", group: "aventura" },
    "llave": { name: "Llave", emoji: "🗝️", group: "aventura" },
    "trampa": { name: "Trampa", emoji: "🪤", group: "aventura" },
    "mision": { name: "Misión", emoji: "📜🗺️", group: "aventura" },
    "aventurero": { name: "Aventurero", emoji: "🗺️⚔️", group: "aventura" },
    "heroe": { name: "Héroe", emoji: "🦸‍♂️⚔️", group: "aventura" },
    "princesa": { name: "Princesa", emoji: "👸", group: "aventura" },
    "guarida": { name: "Guarida del Dragón", emoji: "🏔️🐉", group: "aventura" },
    "laberinto": { name: "Laberinto", emoji: "🌀🧱", group: "aventura" },

    // === ANTIGUO EGIPTO (QUEST) ===
    "nilo": { name: "Río Nilo", emoji: "🏞️🐊", group: "historia" },
    "papiro": { name: "Papiro", emoji: "📜🌾", group: "historia" },
    "faraon": { name: "Faraón", emoji: "👑🏺", group: "historia" },
    "horus": { name: "Horus", emoji: "🦅👁️", group: "historia" },
    "bastet": { name: "Bastet", emoji: "🐈‍⬛👑", group: "historia" },
    "sobek": { name: "Sobek", emoji: "🐊👑", group: "historia" },
    "sarcofago": { name: "Sarcófago", emoji: "⚰️✨", group: "historia" },

    // === VIRTUDES (QUEST PECADOS VS VIRTUD) ===
    "nacimiento": { name: "Nacimiento", emoji: "👶", group: "virtudes" },
    "diversion": { name: "Diversión", emoji: "🎉", group: "virtudes" },
    "regalo": { name: "Regalo", emoji: "🎁", group: "virtudes" },
    "disciplina": { name: "Disciplina", emoji: "📏🧘", group: "virtudes" },
    "caridad": { name: "Caridad", emoji: "🤲❤️", group: "virtudes" },
    "generosidad": { name: "Generosidad", emoji: "🎁❤️", group: "virtudes" },
    "diligencia": { name: "Diligencia", emoji: "💼⭐", group: "virtudes" },
    "virtud": { name: "Virtud", emoji: "😇✨", group: "virtudes" },
    "esperanza": { name: "Esperanza", emoji: "🌅🙏", group: "virtudes" },
    "tranquilidad": { name: "Tranquilidad", emoji: "🧘✨", group: "virtudes" },
    "modestia": { name: "Modestia", emoji: "😊🙏", group: "virtudes" },
    "humildad": { name: "Humildad", emoji: "🙇", group: "virtudes" },
    "tolerancia": { name: "Tolerancia", emoji: "🤝", group: "virtudes" },
    "salvacion": { name: "Salvación", emoji: "🕊️✨", group: "virtudes" },
    "orgullo": { name: "Orgullo", emoji: "🦚", group: "virtudes" },
    "ayuno": { name: "Ayuno", emoji: "🚫🍽️", group: "virtudes" },
    "vegetarianismo": { name: "Vegetarianismo", emoji: "🥦😇", group: "virtudes" },
    "abstencion": { name: "Abstención", emoji: "🚫🍷", group: "virtudes" },

    // === INVENTOS DEL SIGLO XX (GRANDES INVENTOS) ===
    "semiconductor": { name: "Semiconductor", emoji: "🔌🧪", group: "inventos" },
    "transistor": { name: "Transistor", emoji: "📻🔬", group: "inventos" },
    "tubo_vacio": { name: "Tubo de Vacío", emoji: "💡🔌", group: "inventos" },
    "microchip": { name: "Microchip", emoji: "🔲✨", group: "inventos" },
    "microprocesador": { name: "Microprocesador", emoji: "🧠🔲", group: "inventos" },
    "software": { name: "Software", emoji: "💾🧠", group: "inventos" },
    "sistema_operativo": { name: "Sistema Operativo", emoji: "🖥️⚙️", group: "inventos" },
    "mouse": { name: "Mouse", emoji: "🖱️", group: "inventos" },
    "disquete": { name: "Disquete", emoji: "💾", group: "inventos" },
    "casete": { name: "Casete", emoji: "📼", group: "inventos" },
    "cd": { name: "CD", emoji: "💿", group: "inventos" },
    "dvd": { name: "DVD", emoji: "📀", group: "inventos" },
    "usb": { name: "Memoria USB", emoji: "🔌💾", group: "inventos" },
    "mp3": { name: "Reproductor MP3", emoji: "🎧", group: "inventos" },
    "karaoke": { name: "Karaoke", emoji: "🎤🎶", group: "inventos" },
    "fax": { name: "Fax", emoji: "📠", group: "inventos" },
    "camara_digital": { name: "Cámara Digital", emoji: "📷💾", group: "inventos" },
    "camara_web": { name: "Cámara Web", emoji: "📷🌐", group: "inventos" },
    "fotocopiadora": { name: "Fotocopiadora", emoji: "🖨️📄", group: "inventos" },
    "polaroid": { name: "Polaroid", emoji: "📸🖼️", group: "inventos" },
    "maquina_escribir": { name: "Máquina de Escribir", emoji: "⌨️📜", group: "inventos" },
    "radar": { name: "Radar", emoji: "📡✈️", group: "inventos" },
    "radiotelescopio": { name: "Radiotelescopio", emoji: "📡🌌", group: "inventos" },
    "caja_negra": { name: "Caja Negra", emoji: "⬛✈️", group: "inventos" },
    "motor_reaccion": { name: "Motor a Reacción", emoji: "🚀⚙️", group: "inventos" },
    "aire_acondicionado": { name: "Aire Acondicionado", emoji: "❄️🏠", group: "inventos" },
    "linea_montaje": { name: "Línea de Montaje", emoji: "🏭⚙️", group: "inventos" },
    "relatividad": { name: "Teoría de la Relatividad", emoji: "🧠⏳", group: "inventos" },
    "big_bang": { name: "Teoría del Big Bang", emoji: "💥🌌", group: "inventos" },
    "celofan": { name: "Celofán", emoji: "🎁📄", group: "inventos" },
    "aspiradora": { name: "Aspiradora", emoji: "🧹🔌", group: "inventos" },
    "crayones": { name: "Crayones", emoji: "🖍️", group: "inventos" },
    "lavadora": { name: "Lavadora", emoji: "🧺🔌", group: "inventos" },
    "zeppelin": { name: "Zepelín", emoji: "🎈✈️", group: "inventos" },
    "acero_inoxidable": { name: "Acero Inoxidable", emoji: "🍴✨", group: "inventos" },
    "crucigrama": { name: "Crucigrama", emoji: "🔠📰", group: "inventos" },
    "mascara_gas": { name: "Máscara de Gas", emoji: "😷🪖", group: "inventos" },
    "tostadora": { name: "Tostadora", emoji: "🍞🔌", group: "inventos" },
    "detector_mentiras": { name: "Detector de Mentiras", emoji: "🤥📈", group: "inventos" },
    "vitamina": { name: "Vitamina", emoji: "💊🍊", group: "medicina" },
    "lampara_neon": { name: "Lámpara de Neón", emoji: "💡🌈", group: "inventos" },
    "cremallera": { name: "Cremallera", emoji: "🤐", group: "inventos" },
    "curita": { name: "Curita", emoji: "🩹", group: "inventos" },
    "cinta_adhesiva": { name: "Cinta Adhesiva", emoji: "📼🩹", group: "inventos" },
    "superpegamento": { name: "Superpegamento", emoji: "🧴💪", group: "inventos" },
    "gafas_sol": { name: "Gafas de Sol", emoji: "🕶️", group: "inventos" },
    "semaforo": { name: "Semáforo", emoji: "🚦", group: "inventos" },
    "yoyo": { name: "Yo-Yo", emoji: "🪀", group: "inventos" },
    "monopolio": { name: "Monopoly", emoji: "🎲💰", group: "inventos" },
    "carrito_compras": { name: "Carrito de Compras", emoji: "🛒✨", group: "inventos" },
    "parquimetro": { name: "Parquímetro", emoji: "🅿️⏱️", group: "inventos" },
    "equipo_buceo": { name: "Equipo de Buceo", emoji: "🤿", group: "inventos" },
    "codigo_barras": { name: "Código de Barras", emoji: "🏷️", group: "inventos" },
    "reactor_nuclear": { name: "Reactor Nuclear", emoji: "☢️🏭", group: "inventos" },
    "bikini": { name: "Bikini", emoji: "👙", group: "inventos" },
    "reloj_digital": { name: "Reloj Digital", emoji: "⌚🔢", group: "inventos" },
    "celda_solar": { name: "Celda Solar", emoji: "☀️🔋", group: "inventos" },
    "holograma": { name: "Holograma", emoji: "👤✨", group: "inventos" },
    "cajero_automatico": { name: "Cajero Automático", emoji: "🏧", group: "inventos" },
    "kevlar": { name: "Kevlar", emoji: "🦺", group: "inventos" },
    "corazon_artificial": { name: "Corazón Artificial", emoji: "🫀⚙️", group: "inventos" },
    "gps": { name: "GPS", emoji: "📍🛰️", group: "inventos" },
    "circulos_cultivo": { name: "Círculos de Cultivo", emoji: "🌾👽", group: "conspiracion" },

    // === ARTEFACTOS LEGENDARIOS ===
    "esfinge": { name: "Esfinge", emoji: "🦁👤", group: "artefactos" },
    "torre_eiffel": { name: "Torre Eiffel", emoji: "🗼✨", group: "artefactos" },
    "godzilla": { name: "Godzilla", emoji: "🦖🏙️", group: "artefactos" },
    "santo_grial": { name: "Santo Grial", emoji: "🏆✨", group: "artefactos" },
    "sable_luz": { name: "Sable de Luz", emoji: "⚔️💡", group: "artefactos" },
    "caja_pandora": { name: "Caja de Pandora", emoji: "📦🌑", group: "artefactos" },
    "movimiento_perpetuo": { name: "Móvil Perpetuo", emoji: "♾️⚙️", group: "artefactos" },
    "anillo_unico": { name: "Anillo Único", emoji: "💍🌋", group: "artefactos" },
    "stonehenge": { name: "Stonehenge", emoji: "🪨⭕", group: "artefactos" },
    "titanic": { name: "Titanic", emoji: "🚢🧊", group: "artefactos" },
    "pinocho": { name: "Pinocho", emoji: "🤥🪵", group: "artefactos" },
    "trineo_santa": { name: "Trineo de Papá Noel", emoji: "🛷🎅", group: "artefactos" },
    "arbol_navidad": { name: "Árbol de Navidad", emoji: "🎄", group: "artefactos" },
    "ceramica": { name: "Cerámica", emoji: "🏺✨", group: "materiales" },
    "piramide_keops": { name: "Pirámide de Keops", emoji: "🔺✨", group: "artefactos" },
    "estrella_muerte": { name: "Estrella de la Muerte", emoji: "💀🌑", group: "artefactos" },

    // === MARVEL Y DC: NUEVOS HÉROES, VILLANOS E INSUMOS ===
    "arana_radiactiva": { name: "Araña Radiactiva", emoji: "🕷️☢️", group: "comics" },
    "multimillonario": { name: "Multimillonario", emoji: "🤵💰", group: "sociedad" },
    "suero": { name: "Suero de Supersoldado", emoji: "🧪💪", group: "comics" },
    "vibranium": { name: "Vibranium", emoji: "🪨💜", group: "comics" },
    "simbionte": { name: "Simbionte", emoji: "🖤🧪", group: "comics" },
    "hawkeye": { name: "Hawkeye", emoji: "🏹🦸", group: "comics" },
    "daredevil": { name: "Daredevil", emoji: "😈🦸", group: "comics" },
    "punisher": { name: "Punisher", emoji: "💀🦸", group: "comics" },
    "red_skull": { name: "Red Skull", emoji: "💀🔴", group: "comics" },
    "carnage": { name: "Carnage", emoji: "🔴🕷️", group: "comics" },
    "doctor_octopus": { name: "Doctor Octopus", emoji: "🐙🦹", group: "comics" },
    "doctor_doom": { name: "Doctor Doom", emoji: "🤖👑", group: "comics" },
    "loki": { name: "Loki", emoji: "😈⚡", group: "comics" },
    "galactus": { name: "Galactus", emoji: "🟣🌌", group: "comics" },
    "nightwing": { name: "Nightwing", emoji: "🦇💙", group: "comics" },
    "green_arrow": { name: "Green Arrow", emoji: "🏹🟢", group: "comics" },
    "shazam": { name: "Shazam", emoji: "⚡🦸", group: "comics" },
    "martian_manhunter": { name: "Martian Manhunter", emoji: "👽🟢", group: "comics" },
    "constantine": { name: "John Constantine", emoji: "🚬✨", group: "comics" },
    "harley_quinn": { name: "Harley Quinn", emoji: "🔨🤡", group: "comics" },
    "darkseid": { name: "Darkseid", emoji: "🪨👿", group: "comics" },
    "riddler": { name: "Riddler", emoji: "❓🟢", group: "comics" },
    "penguin": { name: "El Pingüino", emoji: "🐧🎩", group: "comics" },
    "two_face": { name: "Two-Face", emoji: "🪙👤", group: "comics" },
    "bane": { name: "Bane", emoji: "🎭💪", group: "comics" },
    "poison_ivy": { name: "Poison Ivy", emoji: "🌿🦹‍♀️", group: "comics" },
    "deathstroke": { name: "Deathstroke", emoji: "🗡️🟠", group: "comics" },
    "reverse_flash": { name: "Reverse-Flash", emoji: "⚡🟡", group: "comics" },
    "amazona": { name: "Amazona", emoji: "🛡️👸", group: "mitologia" },
    "detective": { name: "Detective", emoji: "🕵️🔎", group: "profesiones" },
    "venganza": { name: "Venganza", emoji: "🗡️💢", group: "emociones" },
    "locura": { name: "Locura", emoji: "🤪🌀", group: "emociones" },
    "tirania": { name: "Tiranía", emoji: "👑⛓️", group: "emociones" },
    "hambre": { name: "Hambre", emoji: "🍽️🕳️", group: "emociones" },

    // === SCI-FI Y FANTASÍA ÉPICA: CONCEPTOS BASE ===
    "noche": { name: "Noche", emoji: "🌃", group: "naturaleza" },
    "espacio": { name: "Espacio", emoji: "🌌⬛", group: "cosmos" },
    "gravedad": { name: "Gravedad", emoji: "🌍⬇️", group: "cosmos" },
    "forja": { name: "Forja", emoji: "🔥⚒️", group: "materiales" },
    "mente": { name: "Mente", emoji: "🧠✨", group: "ciencia" },
    "conciencia": { name: "Conciencia", emoji: "💭", group: "ciencia" },
    "espiritu": { name: "Espíritu", emoji: "👻💨", group: "mitologia" },
    "nomada": { name: "Nómada", emoji: "🏜️🚶", group: "sociedad" },
    "tecnologia": { name: "Tecnología", emoji: "🔧💡", group: "scifi" },
    "androide": { name: "Androide", emoji: "🤖🧍", group: "scifi" },
    "nave_espacial": { name: "Nave Espacial", emoji: "🚀✨", group: "scifi" },
    "la_fuerza": { name: "La Fuerza", emoji: "🌀✨", group: "scifi" },
    "jedi": { name: "Jedi", emoji: "🧘✨", group: "scifi" },
    "sith": { name: "Sith", emoji: "😈🔴", group: "scifi" },
    "stormtrooper": { name: "Stormtrooper", emoji: "🪖⬜", group: "scifi" },
    "darth_vader": { name: "Darth Vader", emoji: "🖤🪖", group: "scifi" },
    "luke_skywalker": { name: "Luke Skywalker", emoji: "🌅⚔️", group: "scifi" },
    "palpatine": { name: "Emperador Palpatine", emoji: "⚡👴", group: "scifi" },
    "yoda": { name: "Yoda", emoji: "🟢🧘", group: "scifi" },
    "han_solo": { name: "Han Solo", emoji: "😏🚀", group: "scifi" },
    "uss_enterprise": { name: "USS Enterprise", emoji: "🛸🖖", group: "scifi" },
    "vulcano": { name: "Vulcano", emoji: "🖖", group: "scifi" },
    "borg": { name: "Borg", emoji: "🤖⬛", group: "scifi" },
    "kirk": { name: "Capitán Kirk", emoji: "🖖👨‍✈️", group: "scifi" },
    "spock": { name: "Spock", emoji: "🖖🧠", group: "scifi" },
    "dilatacion_temporal": { name: "Dilatación Temporal", emoji: "⏳🌀", group: "scifi" },
    "teseracto": { name: "Teseracto", emoji: "📐♾️", group: "scifi" },
    "tars": { name: "TARS", emoji: "🤖⬛", group: "scifi" },
    "cooper": { name: "Cooper", emoji: "👨‍🚀🌽", group: "scifi" },
    "especia": { name: "Especia (Melange)", emoji: "✨🟠", group: "scifi" },
    "arrakis": { name: "Arrakis", emoji: "🏜️🪐", group: "scifi" },
    "shai_hulud": { name: "Shai-Hulud", emoji: "🪱🏜️", group: "scifi" },
    "fremen": { name: "Fremen", emoji: "🏜️🥷", group: "scifi" },
    "bene_gesserit": { name: "Bene Gesserit", emoji: "🧕✨", group: "scifi" },
    "paul_atreides": { name: "Paul Atreides", emoji: "🏜️👁️", group: "scifi" },
    "baron_harkonnen": { name: "Barón Harkonnen", emoji: "😈🛢️", group: "scifi" },
    "matrix": { name: "Matrix", emoji: "🟩💻", group: "scifi" },
    "pildora_roja": { name: "Píldora Roja", emoji: "🔴💊", group: "scifi" },
    "agente_smith": { name: "Agente Smith", emoji: "🕴️🕶️", group: "scifi" },
    "neo": { name: "Neo", emoji: "🕶️🟩", group: "scifi" },
    "morfeo": { name: "Morfeo", emoji: "🕶️💊", group: "scifi" },
    "trinity": { name: "Trinity", emoji: "🕶️🖤", group: "scifi" },
    "replicante": { name: "Replicante", emoji: "🧍🤖", group: "scifi" },
    "blade_runner": { name: "Blade Runner", emoji: "🕵️🌧️", group: "scifi" },
    "cyberpunk": { name: "Cyberpunk", emoji: "🌆🤖", group: "scifi" },
    "roy_batty": { name: "Roy Batty", emoji: "🤖🌧️", group: "scifi" },
    "deckard": { name: "Rick Deckard", emoji: "🕵️🌃", group: "scifi" },
    "monolito": { name: "Monolito", emoji: "⬛", group: "scifi" },
    "hal9000": { name: "HAL 9000", emoji: "🔴💻", group: "scifi" },
    "dave_bowman": { name: "Dave Bowman", emoji: "👨‍🚀🔴", group: "scifi" },
    "xenomorfo": { name: "Xenomorfo", emoji: "👽🖤", group: "scifi" },
    "depredador": { name: "Depredador (Yautja)", emoji: "👽🗡️", group: "scifi" },
    "ripley": { name: "Ellen Ripley", emoji: "👩‍🚀🔥", group: "scifi" },
    "delorean": { name: "DeLorean", emoji: "🚗⚡", group: "scifi" },
    "viaje_tiempo": { name: "Viaje en el Tiempo", emoji: "⏰🌀", group: "scifi" },
    "doc_brown": { name: "Doc Brown", emoji: "👨‍🔬⚡", group: "scifi" },
    "marty_mcfly": { name: "Marty McFly", emoji: "🛹⏰", group: "scifi" },
    "pandora": { name: "Pandora (Luna Selvática)", emoji: "🪐🌺", group: "scifi" },
    "avatar": { name: "Avatar", emoji: "🔵🧍", group: "scifi" },
    "navi": { name: "Na'vi", emoji: "🔵🏹", group: "scifi" },
    "jake_sully": { name: "Jake Sully", emoji: "🔵🪖", group: "scifi" },
    "neytiri": { name: "Neytiri", emoji: "🔵🌺", group: "scifi" },

    // === FANTASÍA ÉPICA: LOTR Y HARRY POTTER ===
    "magia_oscura": { name: "Magia Oscura", emoji: "🌑✨", group: "fantasia" },
    "hobbit": { name: "Hobbit", emoji: "🦶🏡", group: "fantasia" },
    "palantir": { name: "Palantír", emoji: "🔮🪨", group: "fantasia" },
    "uruk_hai": { name: "Uruk-hai", emoji: "👹⚔️", group: "fantasia" },
    "balrog": { name: "Balrog", emoji: "🔥👹", group: "fantasia" },
    "gandalf": { name: "Gandalf", emoji: "🧙‍♂️⚪", group: "fantasia" },
    "frodo": { name: "Frodo Bolsón", emoji: "🦶💍", group: "fantasia" },
    "gollum": { name: "Gollum", emoji: "👤💍", group: "fantasia" },
    "sauron": { name: "Sauron", emoji: "👁️🔥", group: "fantasia" },
    "aragorn": { name: "Aragorn", emoji: "👑⚔️", group: "fantasia" },
    "hogwarts": { name: "Hogwarts", emoji: "🏰✨", group: "fantasia" },
    "horrocrux": { name: "Horrocrux", emoji: "💀🔮", group: "fantasia" },
    "hipogrifo": { name: "Hipogrifo", emoji: "🦅🐴", group: "fantasia" },
    "mortifago": { name: "Mortífago", emoji: "🧙‍♂️🌑", group: "fantasia" },
    "harry_potter": { name: "Harry Potter", emoji: "⚡👓", group: "fantasia" },
    "voldemort": { name: "Lord Voldemort", emoji: "🐍💀", group: "fantasia" },
    "dumbledore": { name: "Albus Dumbledore", emoji: "🧙‍♂️✨", group: "fantasia" },
    "snape": { name: "Severus Snape", emoji: "🖤🧪", group: "fantasia" },

    // === DEPORTES: CONCEPTOS Y DISCIPLINAS NUEVAS ===
    "resistencia": { name: "Resistencia", emoji: "💪⏳", group: "deporte" },
    "pasion": { name: "Pasión", emoji: "❤️‍🔥", group: "emociones" },
    "velocidad": { name: "Velocidad", emoji: "💨⚡", group: "deporte" },
    "raqueta": { name: "Raqueta", emoji: "🏸", group: "deporte" },
    "cancha": { name: "Cancha", emoji: "🏟️🟩", group: "deporte" },
    "ciclismo": { name: "Ciclismo", emoji: "🚴", group: "deporte" },
    "atletismo": { name: "Atletismo", emoji: "🏃🥇", group: "deporte" },
    "artes_marciales": { name: "Artes Marciales", emoji: "🥋", group: "deporte" },
    "mma": { name: "MMA", emoji: "🥊🤼", group: "deporte" },
    "automovilismo": { name: "Automovilismo", emoji: "🏎️", group: "deporte" },
    "beisbol": { name: "Béisbol", emoji: "⚾", group: "deporte" },
    "hockey": { name: "Hockey sobre Hielo", emoji: "🏒", group: "deporte" },
    "surf": { name: "Surf", emoji: "🏄", group: "deporte" },
    "futbol_americano": { name: "Fútbol Americano", emoji: "🏈", group: "deporte" },
    "golf": { name: "Golf", emoji: "⛳", group: "deporte" },
    "gimnasia": { name: "Gimnasia Artística", emoji: "🤸", group: "deporte" },
    "victoria": { name: "Victoria", emoji: "🏆✨", group: "deporte" },
    "trofeo": { name: "Trofeo", emoji: "🏆", group: "deporte" },
    "legado": { name: "Legado", emoji: "📜🏆", group: "deporte" },
    "goat": { name: "Leyenda (GOAT)", emoji: "🐐", group: "deporte" },
    "record_mundial": { name: "Récord Mundial", emoji: "⏱️🥇", group: "deporte" },
    "copa_mundo": { name: "Copa del Mundo", emoji: "🏆🌍", group: "deporte" },
    "campeonato_nba": { name: "Campeonato NBA", emoji: "💍🏀", group: "deporte" },
    "pole_position": { name: "Pole Position", emoji: "🏁", group: "deporte" },
    "grand_slam": { name: "Grand Slam", emoji: "👑🎾", group: "deporte" },
    "futbol_total": { name: "Fútbol Total", emoji: "🧠⚽", group: "deporte" },
    "tiki_taka": { name: "Tiki-Taka", emoji: "🔄⚽", group: "deporte" },
    "jogo_bonito": { name: "Jogo Bonito", emoji: "✨⚽", group: "deporte" },
    "elegancia": { name: "Elegancia", emoji: "🎩✨", group: "deporte" },
    "regate": { name: "Regate Imparable", emoji: "⚡⚽", group: "deporte" },
    "destruccion_tableros": { name: "Destrucción de Tableros", emoji: "💥🏀", group: "deporte" },

    // === LEYENDAS DEL DEPORTE ===
    "pele": { name: "Pelé", emoji: "👑⚽", group: "leyendas" },
    "maradona": { name: "Diego Maradona", emoji: "✋⚽", group: "leyendas" },
    "messi": { name: "Lionel Messi", emoji: "🔟⚽", group: "leyendas" },
    "cristiano": { name: "Cristiano Ronaldo", emoji: "💪⚽", group: "leyendas" },
    "zidane": { name: "Zinedine Zidane", emoji: "🎩⚽", group: "leyendas" },
    "ronaldinho": { name: "Ronaldinho", emoji: "😁⚽", group: "leyendas" },
    "ronaldo_nazario": { name: "Ronaldo Nazário", emoji: "9️⃣⚽", group: "leyendas" },
    "cruyff": { name: "Johan Cruyff", emoji: "🧠🟠", group: "leyendas" },
    "jordan": { name: "Michael Jordan", emoji: "✈️🏀", group: "leyendas" },
    "kobe": { name: "Kobe Bryant", emoji: "🐍🏀", group: "leyendas" },
    "lebron": { name: "LeBron James", emoji: "👑🏀", group: "leyendas" },
    "shaq": { name: "Shaquille O'Neal", emoji: "🚛🏀", group: "leyendas" },
    "wilt_chamberlain": { name: "Wilt Chamberlain", emoji: "💯🏀", group: "leyendas" },
    "stephen_curry": { name: "Stephen Curry", emoji: "🎯🏀", group: "leyendas" },
    "ali": { name: "Muhammad Ali", emoji: "🦋🥊", group: "leyendas" },
    "tyson": { name: "Mike Tyson", emoji: "🐯🥊", group: "leyendas" },
    "mayweather": { name: "Floyd Mayweather", emoji: "🛡️🥊", group: "leyendas" },
    "khabib": { name: "Khabib Nurmagomedov", emoji: "🦅🤼", group: "leyendas" },
    "mcgregor": { name: "Conor McGregor", emoji: "💰🥊", group: "leyendas" },
    "bruce_lee": { name: "Bruce Lee", emoji: "🐉🥋", group: "leyendas" },
    "jackie_chan": { name: "Jackie Chan", emoji: "😅🥋", group: "leyendas" },
    "chuck_norris": { name: "Chuck Norris", emoji: "👊♾️", group: "leyendas" },
    "senna": { name: "Ayrton Senna", emoji: "🌧️🏎️", group: "leyendas" },
    "schumacher": { name: "Michael Schumacher", emoji: "🔴🏎️", group: "leyendas" },
    "hamilton": { name: "Lewis Hamilton", emoji: "⚡🏎️", group: "leyendas" },
    "alonso": { name: "Fernando Alonso", emoji: "🦊🏎️", group: "leyendas" },
    "nadal": { name: "Rafael Nadal", emoji: "🟠🎾", group: "leyendas" },
    "federer": { name: "Roger Federer", emoji: "🎩🎾", group: "leyendas" },
    "djokovic": { name: "Novak Djokovic", emoji: "🐺🎾", group: "leyendas" },
    "bolt": { name: "Usain Bolt", emoji: "⚡🏃", group: "leyendas" },
    "phelps": { name: "Michael Phelps", emoji: "🐬🏊", group: "leyendas" },
    "babe_ruth": { name: "Babe Ruth", emoji: "⚾👑", group: "leyendas" },
    "gretzky": { name: "Wayne Gretzky", emoji: "🏒👑", group: "leyendas" },
    "merckx": { name: "Eddy Merckx", emoji: "🚴👑", group: "leyendas" },
    "comaneci": { name: "Nadia Comăneci", emoji: "🔟🤸", group: "leyendas" },
    "biles": { name: "Simone Biles", emoji: "🥇🤸", group: "leyendas" },
    "slater": { name: "Kelly Slater", emoji: "🌊🏄", group: "leyendas" },
    "brady": { name: "Tom Brady", emoji: "💍🏈", group: "leyendas" },
    "tiger_woods": { name: "Tiger Woods", emoji: "🐯⛳", group: "leyendas" },

    // === HITOS HISTÓRICOS ===
    "asentamiento": { name: "Asentamiento", emoji: "🛖🛖", group: "sociedad" },
    "civilizacion": { name: "Civilización", emoji: "🏛️🌍", group: "sociedad" },
    "escritura": { name: "Escritura", emoji: "✍️📜", group: "sociedad" },
    "navegacion": { name: "Navegación", emoji: "🧭⛵", group: "sociedad" },
    "imprenta": { name: "Imprenta", emoji: "🖨️📜", group: "inventos" },
    "telecomunicacion": { name: "Telecomunicación", emoji: "📡📞", group: "inventos" },
    "www": { name: "World Wide Web", emoji: "🌐✨", group: "inventos" },
    "trinchera": { name: "Trinchera", emoji: "🕳️🪖", group: "militar" },
    "codigo_hammurabi": { name: "Código de Hammurabi", emoji: "📜⚖️", group: "hitos" },
    "conquista": { name: "Conquista", emoji: "⚔️🗺️", group: "hitos" },
    "revolucion": { name: "Revolución", emoji: "✊🔥", group: "hitos" },
    "revolucion_industrial": { name: "Revolución Industrial", emoji: "🏭⚙️", group: "hitos" },
    "carrera_espacial": { name: "Carrera Espacial", emoji: "🚀🏁", group: "hitos" },
    "giza": { name: "Pirámides de Giza", emoji: "🔺🔺", group: "hitos" },
    "democracia": { name: "Nacimiento de la Democracia", emoji: "🏛️🗳️", group: "hitos" },
    "gran_muralla": { name: "Gran Muralla China", emoji: "🧱🐉", group: "hitos" },
    "imperio_romano": { name: "Imperio Romano", emoji: "🦅🏛️", group: "hitos" },
    "caida_roma": { name: "Caída de Roma", emoji: "🏛️🔥", group: "hitos" },
    "carta_magna": { name: "Carta Magna", emoji: "📜👑", group: "hitos" },
    "expansion_vikinga": { name: "Expansión Vikinga", emoji: "⛵🪓", group: "hitos" },
    "caida_constantinopla": { name: "Caída de Constantinopla", emoji: "🏰💥", group: "hitos" },
    "gutenberg": { name: "Imprenta de Gutenberg", emoji: "📖🖨️", group: "hitos" },
    "descubrimiento_america": { name: "Descubrimiento de América", emoji: "⛵🌎", group: "hitos" },
    "reforma": { name: "Reforma Protestante", emoji: "📖✊", group: "hitos" },
    "revolucion_cientifica": { name: "Revolución Científica", emoji: "🔭📚", group: "hitos" },
    "independencia_usa": { name: "Independencia de EE.UU.", emoji: "🗽🎆", group: "hitos" },
    "revolucion_francesa": { name: "Revolución Francesa", emoji: "⚜️🔥", group: "hitos" },
    "guerras_napoleonicas": { name: "Guerras Napoleónicas", emoji: "🎩⚔️", group: "hitos" },
    "primera_guerra": { name: "Primera Guerra Mundial", emoji: "🪖🌍", group: "hitos" },
    "revolucion_rusa": { name: "Revolución Rusa", emoji: "✊❄️", group: "hitos" },
    "crack_29": { name: "Caída de Wall Street", emoji: "📉💸", group: "hitos" },
    "segunda_guerra": { name: "Segunda Guerra Mundial", emoji: "💣🌍", group: "hitos" },
    "dia_d": { name: "Desembarco de Normandía", emoji: "🏖️🪖", group: "hitos" },
    "hiroshima": { name: "Hiroshima y Nagasaki", emoji: "🍄☁️", group: "hitos" },
    "guerra_fria": { name: "Guerra Fría", emoji: "🧊⚔️", group: "hitos" },
    "muro_berlin": { name: "Muro de Berlín", emoji: "🧱🕊️", group: "hitos" },
    "alunizaje": { name: "Alunizaje del Apolo 11", emoji: "👨‍🚀🌙", group: "hitos" },
    "chernobil": { name: "Desastre de Chernóbil", emoji: "☢️🏭", group: "hitos" },
    "caida_muro": { name: "Caída del Muro de Berlín", emoji: "🧱🎉", group: "hitos" },

    // === CULTURAS Y MITOS DEL MUNDO ===
    "cosmovision": { name: "Cosmovisión", emoji: "🌀🌎", group: "culturas" },
    "chaman": { name: "Chamán", emoji: "🪶🧙", group: "culturas" },
    "jeroglifico": { name: "Jeroglífico", emoji: "📜👁️", group: "culturas" },
    "cordillera": { name: "Cordillera", emoji: "⛰️⛰️", group: "naturaleza" },
    "valle_fertil": { name: "Valle Fértil", emoji: "🌾🏞️", group: "naturaleza" },
    "astronomia": { name: "Astronomía", emoji: "🔭⭐", group: "ciencia" },
    "inframundo": { name: "Inframundo", emoji: "🕳️💀", group: "culturas" },
    "observatorio": { name: "Observatorio Sagrado", emoji: "🗿🔭", group: "culturas" },
    "piramide_escalonada": { name: "Pirámide Escalonada", emoji: "🛕", group: "culturas" },
    "planta_sagrada": { name: "Planta Sagrada", emoji: "🌿✨", group: "culturas" },
    "plumas_sagradas": { name: "Plumas Sagradas", emoji: "🪶✨", group: "culturas" },
    "maiz": { name: "Maíz", emoji: "🌽", group: "comida" },
    "hombre_maiz": { name: "Hombre de Maíz", emoji: "🌽🧍", group: "culturas" },
    "chichen_itza": { name: "Chichén Itzá", emoji: "🛕🐍", group: "culturas" },
    "huitzilopochtli": { name: "Huitzilopochtli", emoji: "☀️🗡️", group: "culturas" },
    "tlaloc": { name: "Tláloc", emoji: "🌧️🗿", group: "culturas" },
    "tenochtitlan": { name: "Tenochtitlan", emoji: "🏞️🦅", group: "culturas" },
    "calendario_azteca": { name: "Calendario Solar Azteca", emoji: "🗿☀️", group: "culturas" },
    "cacao": { name: "Cacao", emoji: "🍫🌱", group: "comida" },
    "xocolatl": { name: "Xocolatl", emoji: "🍫🥤", group: "comida" },
    "pachamama": { name: "Pachamama", emoji: "🌎💚", group: "culturas" },
    "tahuantinsuyo": { name: "Tahuantinsuyo", emoji: "☀️🗺️", group: "culturas" },
    "machu_picchu": { name: "Machu Picchu", emoji: "⛰️🏛️", group: "culturas" },
    "quipu": { name: "Quipu", emoji: "🪢🔢", group: "culturas" },
    "el_dorado": { name: "El Dorado", emoji: "💛🏞️", group: "culturas" },
    "capac_cocha": { name: "Capac Cocha", emoji: "⛰️🕯️", group: "culturas" },
    "nazca": { name: "Líneas de Nazca", emoji: "🏜️🐒", group: "culturas" },
    "machi": { name: "Machi", emoji: "🌿🧙‍♀️", group: "culturas" },
    "canelo": { name: "Canelo Sagrado (Foye)", emoji: "🌳✨", group: "culturas" },
    "rehue": { name: "Rehue", emoji: "🪵🪜", group: "culturas" },
    "trentren_caicai": { name: "Trentren y Caicai Vilu", emoji: "🐍🌊", group: "culturas" },
    "hain": { name: "Ceremonia Hain", emoji: "🎭🔥", group: "culturas" },
    "amazonia": { name: "Amazonía Sagrada", emoji: "🌳💚", group: "culturas" },
    "ayahuasca": { name: "Ayahuasca", emoji: "🌿🌀", group: "culturas" },
    "bufalo": { name: "Búfalo", emoji: "🦬", group: "animales" },
    "totem": { name: "Tótem", emoji: "🪵🦅", group: "culturas" },
    "thunderbird": { name: "Thunderbird", emoji: "🦅⚡", group: "culturas" },
    "pipa_paz": { name: "Pipa de la Paz", emoji: "🚬🕊️", group: "culturas" },
    "danza_espiritus": { name: "Danza de los Espíritus", emoji: "💃👻", group: "culturas" },
    "mesopotamia": { name: "Mesopotamia", emoji: "🏺🏞️", group: "culturas" },
    "zigurat": { name: "Zigurat", emoji: "🛕🧱", group: "culturas" },
    "gilgamesh": { name: "Epopeya de Gilgamesh", emoji: "📜🦁", group: "culturas" },
    "ishtar": { name: "Ishtar", emoji: "💫👸", group: "culturas" },
    "egipto": { name: "Egipto Antiguo", emoji: "🏜️🏛️", group: "culturas" },
    "valle_reyes": { name: "Valle de los Reyes", emoji: "⚱️🏜️", group: "culturas" },
    "anubis": { name: "Anubis", emoji: "🐺⚱️", group: "culturas" },
    "pesaje_corazon": { name: "Pesaje del Corazón", emoji: "🫀⚖️", group: "culturas" },
    "seth": { name: "Seth", emoji: "🏜️⚡", group: "culturas" },
    "atenea": { name: "Atenea", emoji: "🦉🛡️", group: "mitologia" },
    "ares": { name: "Ares", emoji: "⚔️🔥", group: "mitologia" },
    "prometeo": { name: "Prometeo", emoji: "🔥⛓️", group: "mitologia" },
    "banshee": { name: "Banshee", emoji: "👻😱", group: "mitologia" },
    "dinastia": { name: "Dinastía Ancestral", emoji: "🐉🏮", group: "culturas" },
    "mandato_cielo": { name: "Mandato del Cielo", emoji: "👑☁️", group: "culturas" },
    "yin_yang": { name: "Yin y Yang", emoji: "☯️", group: "religion" },
    "taoismo": { name: "Taoísmo", emoji: "☯️📜", group: "religion" },
    "amaterasu": { name: "Amaterasu", emoji: "☀️⛩️", group: "culturas" },
    "samurai": { name: "Samurái", emoji: "🗡️👺", group: "culturas" },
    "ragnarok": { name: "Ragnarök", emoji: "⚔️🌅", group: "culturas" },

    // === GAMING Y HARDWARE ===
    "silicio": { name: "Silicio", emoji: "🪨🔌", group: "materiales" },
    "pantalla": { name: "Pantalla", emoji: "🖥️", group: "gaming" },
    "cpu": { name: "CPU", emoji: "🧠🔲", group: "gaming" },
    "gpu": { name: "GPU", emoji: "🎨🔲", group: "gaming" },
    "ray_tracing": { name: "Ray Tracing", emoji: "✨🖥️", group: "gaming" },
    "dlss": { name: "DLSS", emoji: "🤖📈", group: "gaming" },
    "ssd": { name: "SSD NVMe", emoji: "⚡💾", group: "gaming" },
    "refrigeracion_liquida": { name: "Refrigeración Líquida", emoji: "💧❄️", group: "gaming" },
    "placa_base": { name: "Placa Base", emoji: "🟩🔌", group: "gaming" },
    "pc_gamer": { name: "PC Gamer", emoji: "🖥️🔥", group: "gaming" },
    "mando": { name: "Mando", emoji: "🎮", group: "gaming" },
    "consola_portatil": { name: "Consola Portátil", emoji: "🎮📱", group: "gaming" },
    "headset": { name: "Auriculares Gamer", emoji: "🎧", group: "gaming" },
    "programador": { name: "Programador", emoji: "👨‍💻", group: "profesiones" },
    "desarrollador": { name: "Desarrollador de Videojuegos", emoji: "🎮👨‍💻", group: "profesiones" },
    "estudio_aaa": { name: "Estudio AAA", emoji: "🏢🎮", group: "gaming" },
    "juego_indie": { name: "Juego Indie", emoji: "💎🎮", group: "gaming" },
    "multijugador": { name: "Multijugador Online", emoji: "🌐🎮", group: "gaming" },
    "esports": { name: "eSports", emoji: "🏆🎮", group: "gaming" },
    "streaming": { name: "Streaming", emoji: "📹🎮", group: "gaming" },
    "steam": { name: "Steam", emoji: "💨🎮", group: "gaming" },
    "mundo_abierto": { name: "Mundo Abierto", emoji: "🗺️🎮", group: "gaming" },
    "nextgen": { name: "Nueva Generación", emoji: "🚀🎮", group: "gaming" },
    "ps5": { name: "PlayStation 5", emoji: "🎮⬜", group: "gaming" },
    "xbox_series": { name: "Xbox Series X", emoji: "🎮🟩", group: "gaming" },
    "switch": { name: "Nintendo Switch", emoji: "🎮🔴", group: "gaming" },
    "steam_deck": { name: "Steam Deck", emoji: "🎮💨", group: "gaming" },
    "consola_retro": { name: "Consola Retro", emoji: "🕹️", group: "gaming" },
    "cartucho": { name: "Cartucho", emoji: "🟫🎮", group: "gaming" },
    "game_boy": { name: "Game Boy", emoji: "🎮⬜", group: "gaming" },
    "gbc": { name: "Game Boy Color", emoji: "🎮🌈", group: "gaming" },
    "gba": { name: "Game Boy Advance", emoji: "🎮🟪", group: "gaming" },
    "nintendo_ds": { name: "Nintendo DS", emoji: "🎮📖", group: "gaming" },
    "psp": { name: "PSP", emoji: "🎮⬛", group: "gaming" },
    "ps2": { name: "PlayStation 2", emoji: "🎮🔷", group: "gaming" },
    "gamecube": { name: "GameCube", emoji: "🎲🎮", group: "gaming" },
    "wii": { name: "Nintendo Wii", emoji: "🎮🤍", group: "gaming" },

    // === VIDEOJUEGOS LEGENDARIOS ===
    "gow_ragnarok": { name: "God of War Ragnarök", emoji: "🪓❄️", group: "juegos" },
    "spiderman2_juego": { name: "Marvel's Spider-Man 2", emoji: "🕷️🎮", group: "juegos" },
    "the_last_of_us": { name: "The Last of Us", emoji: "🍄🧟", group: "juegos" },
    "horizon": { name: "Horizon Forbidden West", emoji: "🦖🤖", group: "juegos" },
    "ghost_tsushima": { name: "Ghost of Tsushima", emoji: "🗡️🍂", group: "juegos" },
    "bloodborne": { name: "Bloodborne", emoji: "🩸🎩", group: "juegos" },
    "gran_turismo_7": { name: "Gran Turismo 7", emoji: "🏎️🎮", group: "juegos" },
    "ratchet_clank": { name: "Ratchet & Clank", emoji: "🔧🌀", group: "juegos" },
    "returnal": { name: "Returnal", emoji: "🔁👽", group: "juegos" },
    "astro_bot": { name: "Astro Bot", emoji: "🤖⭐", group: "juegos" },
    "zelda_totk": { name: "Zelda: Tears of the Kingdom", emoji: "⚔️🌤️", group: "juegos" },
    "mario_odyssey": { name: "Super Mario Odyssey", emoji: "🎩🌍", group: "juegos" },
    "mario_kart_8": { name: "Mario Kart 8 Deluxe", emoji: "🏁🐢", group: "juegos" },
    "smash_ultimate": { name: "Smash Bros. Ultimate", emoji: "👊⭐", group: "juegos" },
    "pokemon_escarlata": { name: "Pokémon Escarlata/Púrpura", emoji: "🔴🟣", group: "juegos" },
    "metroid_dread": { name: "Metroid Dread", emoji: "🤖😱", group: "juegos" },
    "animal_crossing_nh": { name: "Animal Crossing: New Horizons", emoji: "🏝️🦝", group: "juegos" },
    "bayonetta": { name: "Bayonetta 3", emoji: "🧙‍♀️🔫", group: "juegos" },
    "fire_emblem_3h": { name: "Fire Emblem: Three Houses", emoji: "⚔️🏫", group: "juegos" },
    "splatoon": { name: "Splatoon 3", emoji: "🦑🎨", group: "juegos" },
    "halo": { name: "Halo Infinite", emoji: "🪖💍", group: "juegos" },
    "forza": { name: "Forza Horizon 5", emoji: "🏎️🌵", group: "juegos" },
    "starfield": { name: "Starfield", emoji: "🚀⭐", group: "juegos" },
    "flight_simulator": { name: "Microsoft Flight Simulator", emoji: "✈️🌍", group: "juegos" },
    "sea_of_thieves": { name: "Sea of Thieves", emoji: "🏴‍☠️🌊", group: "juegos" },
    "gears": { name: "Gears 5", emoji: "⚙️💀", group: "juegos" },
    "hifi_rush": { name: "Hi-Fi RUSH", emoji: "🎸🤖", group: "juegos" },
    "hellblade": { name: "Hellblade II", emoji: "🗡️🧠", group: "juegos" },
    "pentiment": { name: "Pentiment", emoji: "📜🖋️", group: "juegos" },
    "grounded": { name: "Grounded", emoji: "🐜🌱", group: "juegos" },
    "elden_ring": { name: "Elden Ring", emoji: "💍🌳", group: "juegos" },
    "rdr2": { name: "Red Dead Redemption 2", emoji: "🤠🐴", group: "juegos" },
    "gta5": { name: "Grand Theft Auto V", emoji: "🚗💰", group: "juegos" },
    "minecraft": { name: "Minecraft", emoji: "⛏️🟫", group: "juegos" },
    "fortnite": { name: "Fortnite", emoji: "🔫🏗️", group: "juegos" },
    "counter_strike": { name: "Counter-Strike 2 / Valorant", emoji: "🔫💣", group: "juegos" },
    "hades_juego": { name: "Hades II", emoji: "💀🔥", group: "juegos" },
    "baldurs_gate": { name: "Baldur's Gate 3", emoji: "🎲🐉", group: "juegos" },
    "wukong": { name: "Black Myth: Wukong", emoji: "🐒👑", group: "juegos" },
    "ea_fc": { name: "EA Sports FC", emoji: "⚽🎮", group: "juegos" },
    "tetris": { name: "Tetris", emoji: "🟦🟨", group: "juegos" },
    "pokemon_rojo_azul": { name: "Pokémon Rojo/Azul", emoji: "🔴🔵", group: "juegos" },
    "links_awakening": { name: "Zelda: Link's Awakening", emoji: "🏝️🥚", group: "juegos" },
    "kirby": { name: "Kirby's Dream Land", emoji: "🌸😋", group: "juegos" },
    "mario_land": { name: "Super Mario Land", emoji: "👨‍🔧🛸", group: "juegos" },
    "pokemon_oro_plata": { name: "Pokémon Oro/Plata", emoji: "🥇🥈", group: "juegos" },
    "zelda_oracle": { name: "Zelda: Oracle of Seasons/Ages", emoji: "🍂⏳", group: "juegos" },
    "dq_monsters": { name: "Dragon Quest Monsters", emoji: "🐉👾", group: "juegos" },
    "wario_land": { name: "Wario Land 3", emoji: "💰😈", group: "juegos" },
    "mgs_ghost_babel": { name: "Metal Gear: Ghost Babel", emoji: "📦🚬", group: "juegos" },
    "pokemon_rubi_zafiro": { name: "Pokémon Rubí/Zafiro", emoji: "🔻🔷", group: "juegos" },
    "golden_sun": { name: "Golden Sun", emoji: "☀️⚗️", group: "juegos" },
    "metroid_fusion": { name: "Metroid Fusion", emoji: "🤖🦠", group: "juegos" },
    "castlevania_aria": { name: "Castlevania: Aria of Sorrow", emoji: "🧛🗡️", group: "juegos" },
    "phoenix_wright": { name: "Phoenix Wright: Ace Attorney", emoji: "👆⚖️", group: "juegos" },
    "advance_wars": { name: "Advance Wars", emoji: "🚜💥", group: "juegos" },
    "fire_emblem_blazing": { name: "Fire Emblem: Blazing Blade", emoji: "⚔️🔥", group: "juegos" },
    "minish_cap": { name: "Zelda: The Minish Cap", emoji: "🧢🐜", group: "juegos" },
    "mario_advance": { name: "Super Mario Advance 4", emoji: "🍄🍂", group: "juegos" },
    "warioware": { name: "WarioWare, Inc.", emoji: "🎲⚡", group: "juegos" },
    "pokemon_diamante": { name: "Pokémon Diamante/Perla", emoji: "💎🤍", group: "juegos" },
    "pokemon_heartgold": { name: "Pokémon HeartGold/SoulSilver", emoji: "💛🤍", group: "juegos" },
    "castlevania_dawn": { name: "Castlevania: Dawn of Sorrow", emoji: "🏰🌙", group: "juegos" },
    "zelda_phantom": { name: "Zelda: Phantom Hourglass", emoji: "⌛⛵", group: "juegos" },
    "profesor_layton": { name: "Profesor Layton", emoji: "🎩❓", group: "juegos" },
    "new_super_mario": { name: "New Super Mario Bros.", emoji: "🍄🆕", group: "juegos" },
    "mario_kart_ds": { name: "Mario Kart DS", emoji: "🏁📱", group: "juegos" },
    "nintendogs": { name: "Nintendogs", emoji: "🐶📱", group: "juegos" },
    "chrono_trigger": { name: "Chrono Trigger DS", emoji: "⏰🐸", group: "juegos" },
    "twewy": { name: "The World Ends with You", emoji: "🎧🏙️", group: "juegos" },
    "gow_psp": { name: "God of War: Chains of Olympus", emoji: "⛓️🏛️", group: "juegos" },
    "crisis_core": { name: "Crisis Core: FF VII", emoji: "⚔️🧬", group: "juegos" },
    "peace_walker": { name: "MGS: Peace Walker", emoji: "📦🕊️", group: "juegos" },
    "monster_hunter": { name: "Monster Hunter Freedom Unite", emoji: "🐲🗡️", group: "juegos" },
    "dissidia": { name: "Dissidia Final Fantasy", emoji: "⚔️💫", group: "juegos" },
    "wipeout": { name: "WipEout Pure", emoji: "🏎️💨", group: "juegos" },
    "socom": { name: "SOCOM: Fireteam Bravo", emoji: "🪖🎯", group: "juegos" },
    "lumines": { name: "Lumines", emoji: "🟧🎵", group: "juegos" },
    "patapon": { name: "Patapon", emoji: "👁️🥁", group: "juegos" },
    "gta_liberty": { name: "GTA: Liberty City Stories", emoji: "🚕🌃", group: "juegos" },
    "wind_waker": { name: "Zelda: The Wind Waker", emoji: "⛵🌊", group: "juegos" },
    "luigis_mansion": { name: "Luigi's Mansion", emoji: "👻🔦", group: "juegos" },
    "metroid_prime": { name: "Metroid Prime", emoji: "🔫🪐", group: "juegos" },
    "animal_crossing_gc": { name: "Animal Crossing", emoji: "🦝🏡", group: "juegos" },
    "double_dash": { name: "Mario Kart: Double Dash!!", emoji: "🏁👥", group: "juegos" },
    "melee": { name: "Smash Bros. Melee", emoji: "👊🎲", group: "juegos" },
    "resident_evil_4": { name: "Resident Evil 4", emoji: "🧟🏘️", group: "juegos" },
    "mario_sunshine": { name: "Super Mario Sunshine", emoji: "☀️💦", group: "juegos" },
    "eternal_darkness": { name: "Eternal Darkness", emoji: "🧠🌑", group: "juegos" },
    "fzero": { name: "F-Zero GX", emoji: "🏎️🌌", group: "juegos" },
    "san_andreas": { name: "GTA: San Andreas", emoji: "🚲🌴", group: "juegos" },
    "god_of_war_ps2": { name: "God of War", emoji: "🗡️😡", group: "juegos" },
    "mgs3": { name: "MGS 3: Snake Eater", emoji: "🐍🌿", group: "juegos" },
    "shadow_colossus": { name: "Shadow of the Colossus", emoji: "🗿🐴", group: "juegos" },
    "pes6": { name: "Pro Evolution Soccer 6", emoji: "⚽6️⃣", group: "juegos" },
    "ffx": { name: "Final Fantasy X", emoji: "💧⚔️", group: "juegos" },
    "kingdom_hearts": { name: "Kingdom Hearts II", emoji: "🗝️👑", group: "juegos" },
    "silent_hill_2": { name: "Silent Hill 2", emoji: "🌫️📻", group: "juegos" },
    "jak_daxter": { name: "Jak and Daxter", emoji: "🦊🔫", group: "juegos" },
    "gran_turismo_4": { name: "Gran Turismo 4", emoji: "🏎️4️⃣", group: "juegos" },
    "wii_sports": { name: "Wii Sports", emoji: "🎾🕹️", group: "juegos" },
    "mario_galaxy": { name: "Super Mario Galaxy", emoji: "🍄🌌", group: "juegos" },
    "skyward_sword": { name: "Zelda: Skyward Sword", emoji: "⚔️☁️", group: "juegos" },
    "brawl": { name: "Smash Bros. Brawl", emoji: "👊🌌", group: "juegos" },
    "mario_kart_wii": { name: "Mario Kart Wii", emoji: "🏁🛞", group: "juegos" },
    "sports_resort": { name: "Wii Sports Resort", emoji: "🏝️🎳", group: "juegos" },
    "xenoblade": { name: "Xenoblade Chronicles", emoji: "⚔️🤖", group: "juegos" },
    "dk_country": { name: "Donkey Kong Country Returns", emoji: "🦍🍌", group: "juegos" },
    "epic_mickey": { name: "Epic Mickey", emoji: "🐭🖌️", group: "juegos" },
    "no_more_heroes": { name: "No More Heroes", emoji: "🗡️😎", group: "juegos" },

    // === EXPANSIÓN: GENERACIONES PS3/PS4/XBOX ===
    "blu_ray": { name: "Disco Blu-ray", emoji: "💿🔵", group: "gaming" },
    "cell": { name: "Procesador Cell", emoji: "🧠⚡", group: "gaming" },
    "xbox_live": { name: "Xbox Live", emoji: "🌐🟢", group: "gaming" },
    "kinect": { name: "Kinect", emoji: "📷🕺", group: "gaming" },
    "rrod": { name: "Luces Rojas de la Muerte", emoji: "🎮🔥", group: "gaming" },
    "xbox_clasica": { name: "Xbox Clásica", emoji: "🎮🟢", group: "gaming" },
    "xbox_360": { name: "Xbox 360", emoji: "🎮🔘", group: "gaming" },
    "ps3": { name: "PlayStation 3", emoji: "🎮🖤", group: "gaming" },
    "ps4": { name: "PlayStation 4", emoji: "🎮🔵", group: "gaming" },
    "halo_ce": { name: "Halo: Combat Evolved", emoji: "💍🪖", group: "juegos" },
    "halo_2": { name: "Halo 2", emoji: "💍⚔️", group: "juegos" },
    "kotor": { name: "Star Wars: KOTOR", emoji: "⚔️🌌", group: "juegos" },
    "ninja_gaiden": { name: "Ninja Gaiden Black", emoji: "🥷⚔️", group: "juegos" },
    "fable_juego": { name: "Fable", emoji: "🧙📖", group: "juegos" },
    "splinter_cell": { name: "Splinter Cell", emoji: "🕶️🔦", group: "juegos" },
    "pgr2": { name: "Project Gotham Racing 2", emoji: "🏙️🏎️", group: "juegos" },
    "doa3": { name: "Dead or Alive 3", emoji: "👊🌸", group: "juegos" },
    "jet_set_radio": { name: "Jet Set Radio Future", emoji: "🛼🎨", group: "juegos" },
    "riddick": { name: "Chronicles of Riddick", emoji: "👁️⛓️", group: "juegos" },
    "gears_of_war": { name: "Gears of War", emoji: "⚙️🪚", group: "juegos" },
    "halo_3": { name: "Halo 3", emoji: "💍🏁", group: "juegos" },
    "mass_effect": { name: "Mass Effect", emoji: "🚀🌌", group: "juegos" },
    "skyrim": { name: "Skyrim", emoji: "🐉❄️", group: "juegos" },
    "bioshock": { name: "BioShock", emoji: "🌊🔫", group: "juegos" },
    "forza_horizon_1": { name: "Forza Horizon", emoji: "🏎️🛣️", group: "juegos" },
    "alan_wake": { name: "Alan Wake", emoji: "✍️🔦", group: "juegos" },
    "dead_rising": { name: "Dead Rising", emoji: "🧟🛒", group: "juegos" },
    "fable_2": { name: "Fable II", emoji: "🧙🐕", group: "juegos" },
    "cod4": { name: "CoD 4: Modern Warfare", emoji: "🔫🪖", group: "juegos" },
    "uncharted_2": { name: "Uncharted 2", emoji: "🗺️💰", group: "juegos" },
    "gow3": { name: "God of War III", emoji: "🗡️🏛️", group: "juegos" },
    "heavy_rain": { name: "Heavy Rain", emoji: "🌧️📄", group: "juegos" },
    "littlebigplanet": { name: "LittleBigPlanet", emoji: "🧸🌍", group: "juegos" },
    "infamous": { name: "inFAMOUS", emoji: "⚡🏙️", group: "juegos" },
    "resistance": { name: "Resistance: Fall of Man", emoji: "👽🔫", group: "juegos" },
    "killzone": { name: "Killzone 2", emoji: "🔴🪖", group: "juegos" },
    "demons_souls": { name: "Demon's Souls", emoji: "💀🗡️", group: "juegos" },
    "mgs4": { name: "MGS 4: Guns of the Patriots", emoji: "🐍👴", group: "juegos" },
    "gow_2018": { name: "God of War (2018)", emoji: "🪓👦", group: "juegos" },
    "spiderman_ps4": { name: "Marvel's Spider-Man", emoji: "🕷️🏙️", group: "juegos" },
    "horizon_zero": { name: "Horizon Zero Dawn", emoji: "🏹🦖", group: "juegos" },
    "uncharted_4": { name: "Uncharted 4", emoji: "🗺️🏝️", group: "juegos" },
    "tlou2": { name: "The Last of Us Part II", emoji: "🍄🏹", group: "juegos" },
    "death_stranding": { name: "Death Stranding", emoji: "📦👶", group: "juegos" },
    "persona5": { name: "Persona 5", emoji: "🎭🔴", group: "juegos" },
    "detroit": { name: "Detroit: Become Human", emoji: "🤖💙", group: "juegos" },

    // === EL MUNDO DEL TRABAJO ===
    "sueldo": { name: "Sueldo", emoji: "💵📅", group: "sociedad" },
    "empleo": { name: "Empleo", emoji: "💼✅", group: "sociedad" },
    "contrato": { name: "Contrato de Trabajo", emoji: "📄✍️", group: "sociedad" },
    "sindicato": { name: "Sindicato", emoji: "✊💼", group: "sociedad" },
    "huelga": { name: "Huelga", emoji: "🪧✊", group: "sociedad" },
    "curriculum": { name: "Currículum", emoji: "📄🎓", group: "sociedad" },
    "taller": { name: "Taller", emoji: "🔨🏠", group: "sociedad" },
    "oficina": { name: "Oficina", emoji: "🏢📄", group: "sociedad" },
    "empresa": { name: "Empresa", emoji: "🏢💼", group: "sociedad" },
    "teletrabajo": { name: "Teletrabajo", emoji: "🏠💻", group: "sociedad" },
    "emprendimiento": { name: "Emprendimiento", emoji: "🚀💡", group: "sociedad" },
    "finanzas": { name: "Finanzas", emoji: "📈💰", group: "sociedad" },
    "marketing": { name: "Marketing", emoji: "📣💼", group: "sociedad" },
    "rrhh": { name: "Recursos Humanos", emoji: "👥💼", group: "sociedad" },
    "analista_datos": { name: "Analista de Datos", emoji: "📊💼", group: "profesiones" },
    "albanil": { name: "Albañil", emoji: "🧱👷", group: "profesiones" },
    "carpintero": { name: "Carpintero", emoji: "🪚🪵", group: "profesiones" },
    "fontanero": { name: "Fontanero", emoji: "🔧🚿", group: "profesiones" },
    "electricista": { name: "Electricista", emoji: "⚡👷", group: "profesiones" },
    "ganadero": { name: "Ganadero", emoji: "🐄🤠", group: "profesiones" },
    "pescador": { name: "Pescador", emoji: "🎣🧔", group: "profesiones" },
    "sastre": { name: "Sastre", emoji: "✂️🧵", group: "profesiones" },
    "panadero": { name: "Panadero", emoji: "🥖👨‍🍳", group: "profesiones" },
    "camarero": { name: "Camarero", emoji: "🍽️🤵", group: "profesiones" },
    "barrendero": { name: "Barrendero", emoji: "🧹🗑️", group: "profesiones" },
    "mecanico": { name: "Mecánico", emoji: "🔧🚗", group: "profesiones" },
    "enfermero": { name: "Enfermero", emoji: "💉🏥", group: "profesiones" },
    "dentista": { name: "Dentista", emoji: "🦷🪥", group: "profesiones" },
    "psicologo": { name: "Psicólogo", emoji: "🛋️🧠", group: "profesiones" },
    "farmaceutico": { name: "Farmacéutico", emoji: "💊🥼", group: "profesiones" },
    "bibliotecario": { name: "Bibliotecario", emoji: "📚🤓", group: "profesiones" },
    "contador": { name: "Contador", emoji: "🧮💼", group: "profesiones" },
    "gerente": { name: "Gerente / CEO", emoji: "👔📊", group: "profesiones" },
    "disenador": { name: "Diseñador Gráfico", emoji: "🎨💻", group: "profesiones" },
    "ingeniero": { name: "Ingeniero", emoji: "🛠️📐", group: "profesiones" }
};

// Nombres de categorías actualizados
const categoryNames = {
    "basico": "Elementos Básicos 🌟",
    "naturaleza": "Clima y Naturaleza 🌪️",
    "materiales": "Materiales y Geología 💎",
    "plantas": "Naturaleza y Plantas 🌱",
    "oceanografia": "Oceanografía 🌊",
    "insectos": "Insectos y Bichos 🪲",
    "animales": "Reino Animal 🐾",
    "mitologia": "Magia y Mitología 🦄",
    "religion": "Religión y Espiritualidad 🙏",
    "historia": "Historia y Antigüedad 📜",
    "medieval": "Medieval y Fantasía 🏰",
    "sociedad": "Sociedad y Civilización 🏙️",
    "hogar": "Hogar y Muebles 🛋️",
    "profesiones": "Profesiones y Oficios 🧑‍🌾",
    "musica_grupo": "Música e Instrumentos 🎵",
    "cultura": "Arte y Cultura 🎨",
    "militar": "Militar y Guerra ⚔️",
    "comercio": "Comercios y Ocio 🛍️",
    "gobierno": "Gobernanza y Naciones 🏛️",
    "deporte": "Deportes y Actividad ⚽",
    "comida": "Comida y Bebidas 🍞",
    "tecnologia": "Tecnología y Motores ⚙️",
    "transporte": "Transportes y Vehículos 🚗",
    "cosmos": "Cosmos y Espacio 🪐",
    "ciencia": "Ciencia y Matemáticas 🔬",
    "elementos_quimicos": "Química y Elementos 🧪",
    "medicina": "Medicina y Enfermedades 🩺",
    "emociones": "Emociones y Abstractos 💖",
    "futurismo": "Futurismo y Transhumanismo 🦾",
    "comics": "Cómics y Superhéroes 🦸‍♂️",
    "conspiracion": "Conspiraciones 👁️",
    "fantasia": "Fantasía y Mazmorras 🐉",
    "aventura": "Aventuras y Tesoros 🗺️",
    "bebidas": "Tragos y Vicios 🍸",
    "virtudes": "Virtudes 😇",
    "inventos": "Inventos del Siglo XX 💡",
    "artefactos": "Artefactos Legendarios 🗿",
    "scifi": "Sci-Fi y Sagas Épicas 🚀",
    "leyendas": "Leyendas del Deporte 🏅",
    "hitos": "Hitos Históricos 🗓️",
    "culturas": "Culturas y Mitos del Mundo 🌎",
    "gaming": "Gaming y Hardware 🕹️",
    "juegos": "Videojuegos Legendarios 🎮"
};

// 2. RECETAS (todas las originales + nuevas)
const rawRecipes = {
    "mar+agua": "tsunami",
    "tormenta+mar": "tsunami",
    "agua+coral": "arrecife",
    "plancton+pez": "ballena",
    "virus+bacteria": "epidemia",
    "medicina+virus": "vacuna",
    "humano+armadura": "caballero",
    "espada+metal": "espada_legendaria",
    "rey+castillo": "reino",
    "virus+humano": "epidemia",
    "vacuna+virus": "inmunidad",
    "plancton+piedra": ["coral", "concha"],
    "coral+pez": "arrecife",
    "fuego+castillo": "asedio",
    "rey+corona": "reino",
    "armadura+caballo": "caballero",
    "agua+fuego": ["vapor", "alcohol"],
    "agua+tierra": "barro",
    "fuego+tierra": "lava",
    "aire+fuego": "energia",
    "aire+tierra": "polvo",
    "agua+aire": "nube",
    "agua+nube": "lluvia",
    "aire+nube": "tormenta",
    "energia+tormenta": "rayo",
    "agua+viento": "hielo",
    "aire+aire": "viento",
    "tormenta+viento": "tornado",
    "nube+nube": "tormenta",
    "aire+hielo": "nieve",
    "fuego+polvo": "ceniza",
    "electricidad+cristal": ["bombilla", "luz"],
    "arena+cristal": "tiempo", 
    "vida+tiempo": "cadaver", 
    "fuego+semilla": "cafe_bebida", 
    "agua+luz": "arcoiris", 
    "aire+energia": "sonido", 
    "agua+lava": "piedra",
    "aire+piedra": "arena",
    "arena+fuego": "cristal",
    "cristal+metal": "lente",
    "agua+barro": "pantano",
    "fuego+arcilla": "ladrillo",
    "arena+pantano": "arcilla",
    "tierra+tierra": "piedra",
    "lava+tierra": "volcan",
    "carbon+tiempo": "diamante", 
    "piedra+carbon": "diamante", 
    "metal+energia": "electricidad",
    "tierra+metal": ["oro", "hierro"],
    "fuego+hierro": "acero",
    "pantano+tiempo": "petroleo",
    "petroleo+herramienta": "plastico",
    "bestia+arma": ["carne", "sangre", "cuero", "garras"],
    "rueda+metal": "engranaje",
    "engranaje+tiempo": "reloj",
    "energia+pantano": "vida",
    "vida+pantano": "bacteria",
    "agua+bacteria": "plancton",
    "pantano+bacteria": ["gusano", "azufre"],
    "agua+vida": "alga",
    "tierra+vida": "semilla", 
    "barro+vida": "bacteria",
    "tierra+bacteria": "hongo",
    "alga+tierra": "musgo",
    "semilla+agua": "hierba",
    "hierba+tierra": "arbol",
    "hierba+agua": "arbol",
    "hierba+tiempo": "arbol", 
    "arbol+arbol": "bosque",
    "arbol+tiempo": ["bosque", "fruta"], 
    "flor+arbol": "fruta",
    "bosque+lluvia": "selva",
    "arbol+lluvia": "selva",
    "arena+hierba": "cactus",
    "arena+arena": "desierto",
    "arena+arbol": "oasis",
    "flor+magia": "rosa",
    "arbol+aire": "hoja", 
    "arbol+fuego": ["ceniza", "carbon", "fuego"],
    "hoja+tierra": "barro", 
    "casa+hierba": "jardin",
    "casa+flor": "jardin",
    "tierra+piedra": "montana", 
    "herramienta+tierra": ["mina", "pala", "azada", "campo"],
    "herramienta+piedra": ["pala", "maza"],
    "herramienta+hierba": "rastrillo",
    "herramienta+hoja": "rastrillo",
    "madera+carbon": "lapiz", 
    "oveja+herramienta": "lana",
    "lana+herramienta": ["ropa", "hilo", "tela"],
    "hilo+madera": "guitarra",
    "gusano+hierba": ["bicho", "oruga"], 
    "gusano+tierra": "bicho",
    "bicho+aire": ["mosca", "libelula"],
    "bicho+sangre": ["mosquito", "garrapata"],
    "mosca+sangre": "mosquito",
    "bicho+ciudad": "cucaracha",
    "bicho+edificio": "cucaracha",
    "bicho+madera": "cienpies",
    "gusano+piedra": "caracol",
    "bicho+azucar": "hormiga",
    "tierra+azucar": "hormiga",
    "bicho+piedra": "escarabajo",
    "bicho+cazador": "mantis",
    "bicho+musica": "grillo",
    "bicho+veneno": ["escorpion", "arana"],
    "arana+arena": "escorpion",
    "bicho+perro": ["pulga", "garrapata"],
    "gusano+aire": "mariposa",
    "mariposa+luz": "polilla",
    "bicho+luz": "luciernaga",
    "bicho+flor": "abeja",
    "hilo+bestia": "arana",
    "gusano+pantano": "serpiente",
    "serpiente+agua": "pez",
    "pez+bestia": "delfin",
    "sangre+pez": "tiburon",
    "serpiente+gusano": "reptil",
    "pantano+reptil": ["rana", "cocodrilo"],
    "piedra+vida": "huevo",
    "arena+huevo": "tortuga",
    "aire+huevo": "pajaro",
    "lagarto+tierra": "bestia",
    "bestia+humano": ["perro", "gato"],
    "bestia+luna": "lobo",
    "bestia+bosque": "oso",
    "perro+bosque": "zorro",
    "gato+magia": "leon",
    "bestia+selva": "tigre", 
    "gato+selva": "tigre", 
    "hierba+bestia": ["vaca", "caballo", "oveja", "conejo"], 
    "caballo+tierra": "burro", 
    "bestia+trabajo": "burro",
    "caballo+burro": "mula", 
    "barro+bestia": "cerdo",
    "arbol+bestia": "mono",
    "queso+bestia": "raton",
    "pajaro+raton": "murcielago",
    "magia+piedra": ["piedra_filosofal", "runa"],
    "piedra_filosofal+metal": "oro", 
    "pocion+metal": "oro",
    "magia+vida": "alma",
    "arcilla+vida": "golem",
    "fuego+humano": ["cadaver", "fantasma"],
    "cadaver+vida": "zombie",
    "magia+cadaver": "zombie", 
    "sangre+humano": "vampiro",
    "vampiro+bestia": "hombre_lobo",
    "humano+lobo": "hombre_lobo", 
    "zombie+electricidad": "frankenstein",
    "cadaver+papel": "momia",
    "fuego+lagarto": "dragon",
    "caballo+magia": "unicornio",
    "pajaro+fuego": "fenix",
    "pez+humano": "sirena",
    "magia+humano": ["mago", "bruja", "hechicero"],
    "mago+zombie": "nigromante",
    "magia+madera": "varita",
    "varita+mago": "hechizo",
    "hechicero+magia": "hechizo", 
    "hechizo+demonio": "maldicion",
    "magia+agua": "pocion",
    "tierra+magia": "duende",
    "magia+arbol": "elfo",
    "magia+mariposa": "hada",
    "humano+dios": "religion",
    "humano+religion": "fe",
    "mago+dios": "angel",
    "humano+cielo": "angel",
    "angel+fuego": "demonio",
    "humano+maldicion": "demonio",
    "demonio+fuego": "infierno",
    "pecado+muerte": "infierno",
    "alma+cielo": "cielo_religion",
    "humano+cruz": "jesus",
    "libro+religion": "biblia",
    "casa+religion": "iglesia",
    "iglesia+iglesia": "catedral",
    "humano+iglesia": "sacerdote",
    "religion+agua": "agua_bendita",
    "religion+templo": "monasterio",
    "islam+edificio": "mezquita",
    "judaismo+edificio": "sinagoga",
    "tiempo+religion": ["budismo", "hinduismo"],
    "humano+budismo": "budas",
    "budas+tiempo": "nirvana",
    "hinduismo+tiempo": "karma",
    "humano+libro": ["dios", "conocimiento"],
    "dios+rayo": ["zeus", "thor"],
    "dios+agua": "poseidon",
    "dios+infierno": "hades",
    "montana+dios": "olimpo",
    "humano+serpiente": "medusa",
    "guerrero+barco": ["vikingo", "pirata"],
    "cielo_religion+guerrero": "valhalla",
    "arbol+galaxia": "yggdrasil",
    "guerrero+selva": ["azteca", "maya"],
    "guerrero+montana": "inca",
    "piedra+desierto": "piramide",
    "piramide+selva": "maya",
    "serpiente+pajaro": "quetzalcoatl",
    "sangre+religion": "sacrificio",
    "sol+dios": ["ra", "inti", "apolo"],
    "escoba+magia": "escoba_magica",
    "cristal+magia": "bola_cristal",
    "libro+magia": "grimoire",
    "joya+magia": ["amuleto", "talisman"],
    "magia+fuego": "ritual",
    "magia+sangre": "ritual",
    "magia+cielo": "portal",
    "magia+agujero_negro": "portal",
    "ritual+demonio": "invocacion",
    "barro+sangre": "homunculo",
    "leon+serpiente": "quimera",
    "bruja+gato": "familiar",
    "hada+magia": "polvo_hada",
    "pocion+vida": "elixir",
    "humano+piedra_filosofal": "alquimista",
    "humano+pocion": "alquimista",
    "ropa+bruja": "sombrero_bruja",
    "carta+magia": "tarot",
    "libro+demonio": "necronomicon",
    "libro+cadaver": "necronomicon",
    "ropa+maldicion": "vudu",
    "juego+fantasma": "ouija",
    "olla+magia": "caldero",
    "humano+musica": ["arte", "musico"],
    "aire+humano": "musica", 
    "magia+aire": "musica",
    "madera+musica": "instrumento",
    "instrumento+herramienta": "guitarra",
    "guitarra+electricidad": "guitarra_electrica",
    "guitarra_electrica+herramienta": "bajo",
    "instrumento+madera": "piano",
    "piano+electricidad": "sintetizador",
    "madera+cuero": "tambor",
    "tambor+metal": "bateria_musical",
    "tambor+tambor": "bateria_musical",
    "hilo+arco": "arpa",
    "madera+aire": "flauta",
    "metal+aire": "trompeta",
    "guitarra+arco": "violin",
    "metal+sonido": "microfono",
    "electricidad+sonido": "parlante",
    "madera+sonido": "parlante",
    "humano+microfono": "cantante",
    "musico+cantante": "banda",
    "musico+musico": "banda",
    "banda+estadio": "concierto",
    "plastico+musica": "vinilo",
    "papel+musica": "cancion",
    "agua+flor": "pintura",
    "agua+arcoiris": "pintura",
    "humano+pintura": "pintor",
    "pintor+papel": "cuadro",
    "barro+herramienta": "escultura",
    "humano+escultura": "escultor",
    "cuadro+cuadro": "museo",
    "casa+musica": "teatro",
    "humano+teatro": "actor",
    "humano+pelicula": ["cineasta", "director"], 
    "camara+humano": ["fotografo", "cineasta", "periodista"],
    "libro+musica": "poesia",
    "lente+computadora": "camara",
    "camara+luz": "fotografia",
    "humano+risa": "payaso",
    "papel+arte": "comic",
    "papel+superheroe": "comic", 
    "metal+herramienta": ["arma", "tijera", "espada", "hacha", "martillo", "olla"], 
    "acero+herramienta": ["espada", "hacha"],
    "madera+herramienta": ["papel", "hacha", "maza", "mueble", "escoba", "rueda"],
    "madera+hierba": "escoba",
    "madera+piedra": "maza",
    "madera+arma": "arco",
    "arco+madera": "flecha",
    "arco+metal": "ballesta",
    "arco+acero": "ballesta",
    "hongo+pantano": "veneno",
    "arma+veneno": "arma_envenenada",
    "espada+veneno": "arma_envenenada",
    "humano+arma": ["asesino", "guerrero", "soldado", "enojo"], 
    "soldado+soldado": "ejercito",
    "ejercito+ejercito": "guerra",
    "coche+arma_fuego": "tanque",
    "tractor+arma": "tanque",
    "cohete+bomba": "misil",
    "bomba+energia": "bomba_atomica",
    "atomo+energia": "bomba_atomica", 
    "casa+piedra": "castillo",
    "guerrero+caballo": "caballero",
    "polvora+arma": "canon",
    "casa+ejercito": "base_militar",
    "humano+guerra": "general",
    "submarino+bomba_atomica": "submarino_nuclear",
    "espada+espada": "tijera",
    "papel+papel": "libro",
    "papel+lapiz": "carta", 
    "humano+carta": "cartero", 
    "libro+edificio": "biblioteca",
    "oro+papel": "dinero",
    "dinero+casa": "banco",
    "veneno+magia": "medicina",
    "humano+ladrillo": "casa",
    "casa+ladrillo": "edificio",
    "casa+casa": "edificio", 
    "edificio+edificio": "rascacielos",
    "edificio+casa": "ciudad",
    "libro+libro": "ley", 
    "humano+tiempo": "trabajo", 
    "fuego+casa": "incendio",
    "medicina+edificio": "hospital", 
    "casa+ladron": "carcel", 
    "asesino+humano": "cadaver", 
    "dinero+trabajo": "tienda", 
    "tienda+tienda": "centro_comercial",
    "tienda+pan": "supermercado",
    "casa+carne": "restaurante",
    "tienda+cafe_bebida": "cafeteria",
    "hielo+leche": "helado",
    "tienda+helado": "heladeria",
    "cuero+herramienta": "zapatos",
    "tienda+zapatos": "zapateria",
    "tienda+herramienta": "ferreteria",
    "tienda+alcohol": "licoreria",
    "trabajo+edificio": "industria",
    "computadora+cristal": "pelicula",
    "edificio+pelicula": "cine",
    "casa+alcohol": "bar",
    "bar+musica": "discoteca",
    "casa+libro": "escuela",
    "petroleo+edificio": "gasolinera", 
    "coche+tienda": "gasolinera",
    "periodista+papel": "periodico", 
    "oro+diamante": "joya",
    "joya+oro": ["anillo", "collar", "brazalete", "pendientes"],
    "joya+metal": ["anillo", "collar", "brazalete", "pendientes"],
    "mueble+madera": "mesa",
    "mesa+madera": "silla",
    "mueble+humano": "silla",
    "silla+lana": "sillon",
    "silla+cuero": "sillon",
    "mueble+lana": "cama",
    "madera+lana": "cama",
    "bombilla+metal": "lampara",
    "bombilla+cristal": "lampara",
    "metal+electricidad": ["bateria", "computadora", "iman", "electrodomestico"],
    "motor+electricidad": "electrodomestico",
    "electrodomestico+hielo": "refrigerador",
    "electrodomestico+fuego": "horno",
    "piedra+fuego": ["horno", "metal"], 
    "horno+electricidad": "microondas",
    "electrodomestico+uranio": "microondas",
    "metal+vapor": "tetera",
    "arcilla+vapor": "tetera",
    "tetera+electricidad": "hervidor",
    "tetera+electrodomestico": "hervidor",
    "medicina+quimica": "farmaco",
    "tienda+medicina": "farmacia",
    "humano+espada": "guerrero",
    "humano+arco": "cazador",
    "humano+flecha": "cazador",
    "humano+ley": ["policia", "abogado"], 
    "abogado+ley": "juez",
    "humano+abogado": "juez", 
    "humano+incendio": "bombero", 
    "humano+medicina": "medico",
    "humano+herramienta": "obrero",
    "humano+zapatos": "zapatero",
    "humano+escudo": "guardia",
    "ley+secreto": "espia",
    "humano+secreto": "espia",
    "ladron+policia": ["carcel", "espia"],
    "asesino+policia": "carcel",
    "humano+carne": "cocinero",
    "humano+metal": "herrero",
    "humano+acero": "herrero",
    "humano+hierba": "granjero",
    "humano+tractor": "granjero",
    "humano+castillo": "rey",
    "humano+ciudad": "politico",
    "humano+avion": "piloto",
    "humano+barco": ["marinero", "pirata"], 
    "barco+ladron": "pirata",
    "humano+coche": "chofer",
    "tienda+arma": "ladron", 
    "dinero+asesino": "ladron", 
    "sacerdote+sacerdote": "papa",
    "humano+templo": "monje",
    "humano+judaismo": "rabino",
    "humano+escuela": "profesor",
    "humano+mina": "minero", 
    "humano+bar": "bartender", 
    "humano+tijera": "peluquero", 
    "peluquero+tienda": "peluqueria",
    "humano+juego": "deporte",
    "cuero+aire": "pelota",
    "pelota+hierba": "futbol",
    "pelota+madera": "basquetbol",
    "humano+agua": "natacion",
    "deporte+ciudad": "estadio",
    "deporte+casa": "gimnasio",
    "metal+deporte": "pesa",
    "deporte+agua": "sudor",
    "guerrero+deporte": "boxeo",
    "hielo+deporte": "patinaje",
    "vaca+humano": "leche",
    "cerdo+fuego": "tocino",
    "leche+bacteria": "queso",
    "tierra+semilla": ["trigo", "hierba", "flor", "verdura"],
    "hierba+granjero": "verdura",
    "verdura+verdura": "ensalada",
    "fruta+agua": "jugo",
    "piedra+trigo": "harina",
    "agua+harina": "masa",
    "fuego+masa": "pan",
    "agua+trigo": "cerveza",
    "polvora+metal": "bomba",
    "arma+bomba": "arma_fuego",
    "luz+energia": "laser",
    "computadora+computadora": "internet",
    "computadora+juego": "videojuego",
    "television+videojuego": "consola",
    "lente+videojuego": "realidad_virtual",
    "internet+dinero": "criptomoneda",
    "computadora+vida": "ia",
    "metal+vida": "robot",
    "papel+computadora": "impresora",
    "computadora+internet": "celular",
    "onda_radio+metal": "radio_aparato", 
    "bombilla+onda_radio": "television",
    "madera+rueda": ["carro", "skate"], 
    "rueda+rueda": "bicicleta",
    "skate+metal": "scooter",
    "bicicleta+motor": "motocicleta",
    "carro+motor": "coche",
    "coche+coche": "camion", 
    "coche+ciudad": "autobus",
    "coche+tierra": "tractor",
    "madera+agua": "barco",
    "barco+motor": "lancha",
    "barco+ciudad": "crucero",
    "barco+pez": "submarino",
    "motor+pajaro": "avion",
    "avion+pajaro": "avioneta", 
    "avion+engranaje": "helicoptero",
    "ropa+aire": "globo", 
    "avion+robot": "dron",
    "caballo+carro": "carruaje",
    "coche+hospital": "ambulancia",
    "cielo+fuego": "sol",
    "cielo+piedra": "luna",
    "cielo+energia": "estrella",
    "piedra+estrella": "meteorito",
    "tierra+cielo": "planeta",
    "estrella+estrella": "galaxia",
    "energia+galaxia": "agujero_negro",
    "vida+planeta": "alienigena",
    "alienigena+metal": "ovni",
    "humano+cohete": "astronauta",
    "metal+cielo": "cohete",
    "cientifico+casa": "laboratorio",
    "cientifico+magia": "ciencia",
    "ciencia+vida": "biologia",
    "ciencia+pocion": "quimica",
    "ciencia+energia": "fisica",
    "cristal+biologia": "microscopio",
    "biologia+microscopio": "celula",
    "celula+celula": "adn",
    "ciencia+herramienta": "matematicas",
    "libro+conocimiento": "matematicas",
    "matematicas+papel": "numero",
    "matematicas+computadora": "calculadora",
    "matematicas+cielo": "geometria", 
    "numero+cielo": "infinito",
    "ciencia+tierra": "atomo", 
    "atomo+atomo": "molecula", 
    "quimica+libro": "tabla_periodica",
    "ciencia+papel": "tabla_periodica",
    "quimica+tierra": ["radio_elemento", "polonio", "uranio"],
    "ciencia+uranio": "plutonio",
    "amor+humano": "felicidad",
    "cadaver+humano": "tristeza",
    "corazon+arma": "tristeza",
    "humano+fantasma": "miedo",
    "enojo+humano": "odio",
    "felicidad+humano": "risa",
    "amor+sangre": "corazon",
    "ley+amor": "justicia", 
    "robot+humano": "ciborg",
    "ia+computadora": "singularidad",
    "ia+biologia": "biotecnologia",
    "robot+atomo": "nanotecnologia",
    "adn+ciencia": "clon",
    "planeta+ia": "terraformacion",
    "energia+agujero_negro": "motor_antimateria",
    "singularidad+ciborg": "teletransporte",
    "humano+radio_elemento": "mutante",
    "humano+uranio": "mutante",
    "mutante+justicia": "superheroe",
    "mutante+asesino": "villano",
    "superheroe+odio": "villano",
    "superheroe+arana": "spiderman",
    "villano+duende": "duende_verde",
    "villano+arena": "hombre_arena",
    "superheroe+rayo": "flash",
    "spiderman+alienigena": "venom",
    "superheroe+escudo": "capitan_america",
    "soldado+superheroe": "capitan_america",
    "superheroe+murcielago": "batman",
    "superheroe+alienigena": "superman",
    "villano+payaso": "joker",
    "arana+asesino": "black_widow",
    "gato+superheroe": "black_panther",
    "bestia+superheroe": "black_panther",
    "agua+superheroe": "aquaman",
    "lobo+mutante": "wolverine",
    "acero+mutante": "wolverine",
    "garras+mutante": "wolverine",
    "martillo+dios": "thor",
    "mutante+risa": "deadpool",
    "mutante+enojo": "hulk",
    "uranio+enojo": "hulk",
    "mago+superheroe": "doctor_strange",
    "gato+ladron": "catwoman",
    "batman+humano": "robin",
    "bruja+mutante": "scarlet_witch",
    "piedra+mutante": "la_mole",
    "alienigena+villano": "thanos",
    "infinito+villano": "thanos",
    "hormiga+superheroe": "ant_man",
    "anillo+superheroe": "green_lantern",
    "metal+superheroe": "iron_man",
    "iman+mutante": "magneto",
    "cientifico+villano": "lex_luthor",
    "dios+superheroe": "wonder_woman",
    "politico+ley": "gobierno",
    "ciudad+ley": "gobierno",
    "gobierno+planeta": "onu",
    "paz+gobierno": "onu",
    "policia+gobierno": "fbi",
    "espia+gobierno": "cia",
    "ciencia+cohete": "nasa",
    "gobierno+cohete": "nasa",
    "iglesia+ciudad": "vaticano",
    "papa+ciudad": "vaticano",
    "religion+gobierno": "vaticano",
    "secreto+internet": "conspiracion",
    "secreto+conocimiento": "conspiracion",
    "alienigena+fbi": "hombres_de_negro",
    "secreto+alienigena": "hombres_de_negro",
    "dinero+secreto": ["illuminati", "ladron"], 
    "gobierno+secreto": "illuminati",
    "illuminati+planeta": "nuevo_orden_mundial",
    "conspiracion+gobierno": "nuevo_orden_mundial",
    "alienigena+base_militar": "area_51",
    "secreto+base_militar": "area_51",
    "herramienta+secreto": ["masoneria", "espia"],

    // === RECETAS AGREGADAS (REPARACIÓN: hacen alcanzable el 100% del árbol) ===
    // Raíces fundamentales
    "humano+piedra": "herramienta",
    "golem+vida": "humano",
    "arbol+herramienta": "madera",
    "agua+agua": "mar",
    "estrella+energia": "magia",
    "arcoiris+vida": "magia",
    "aire+luz": "cielo",
    "pantano+huevo": "lagarto",
    // Emociones
    "humano+humano": ["amor", "nacimiento"],
    "amor+planeta": "paz",
    // Religión
    "fe+humano": "profeta",
    "madera+religion": "cruz",
    "religion+piedra": "templo",
    "religion+desierto": ["judaismo", "islam"],
    "islam+libro": "coran",
    "judaismo+libro": "tora",
    "religion+fuego": "incienso",
    "fruta+serpiente": "pecado",
    "iglesia+casa": "parroquia",
    "cadaver+tiempo": "muerte",
    // Mitología
    "dios+valhalla": "odin",
    "calamar+magia": "kraken",
    "dragon+dragon": "hidra",
    "pajaro+leon": "grifo",
    "caballo+cielo": "pegaso",
    "caballo+humano": "centauro",
    "vaca+maldicion": "minotauro",
    "perro+infierno": "cerbero",
    "humano+pantano": "orco",
    "orco+piedra": "troll",
    // Medieval y militar
    "metal+ropa": "armadura",
    "oro+rey": "corona",
    "rey+amor": "reina",
    "silla+rey": "trono",
    "caballero+caballero": "torneo",
    "martillo+guerra": "martillo_guerra",
    "metal+guerrero": "escudo",
    "azufre+carbon": "polvora",
    // Ciencia y química
    "humano+conocimiento": "cientifico",
    "ciencia+laboratorio": "experimento",
    "numero+numero": "ecuacion",
    "quimica+agua": "hidrogeno",
    "quimica+aire": "oxigeno",
    "quimica+sol": "helio",
    "metal+agua": "mercurio",
    "carbon+carbon": "grafito",
    "piedra+piedra": "granito",
    "piedra+tiempo": "marmol",
    "lava+hielo": "obsidiana",
    // Medicina
    "medicina+bacteria": "antibiotico",
    "humano+bacteria": "virus",
    "epidemia+planeta": "pandemia",
    "medico+herramienta": "cirugia",
    "celula+radio_elemento": "cancer",
    // Deporte
    "pesa+humano": "musculo",
    "nieve+deporte": "esqui",
    "deporte+pelota": "tenis",
    "humano+pelota": "juego",
    // Comida y plantas
    "fruta+sol": "azucar",
    "masa+azucar": "pastel",
    "fruta+hierba": "vid",
    "hierba+selva": "bambu",
    "arbol+fruta": "manzano",
    // Naturaleza y océano
    "agua+montana": "rio",
    "rio+tierra": "lago",
    "agua+volcan": "geyser",
    "tierra+energia": "terremoto",
    "tornado+mar": "huracan",
    "mar+terremoto": "fosa_mariana",
    "mar+pez": "pulpo",
    "pulpo+fosa_mariana": "calamar",
    "estrella+mar": "estrellamar",
    "tortuga+mar": "tortuga_marina",
    "cristal+mar": "perla",
    // Animales e insectos
    "pajaro+hielo": "pinguino",
    "vaca+arbol": "jirafa",
    "bestia+montana": "elefante",
    "abeja+enojo": "avispa",
    "bicho+hierba": "saltamontes",
    "hormiga+madera": "termita",
    // Tecnología y cosmos
    "sol+planeta": "sistema_solar",
    "engranaje+energia": "motor",
    "electricidad+aire": "onda_radio",
    "cristal+internet": "fibra_optica",
    "computadora+ladron": "hacker",
    "impresora+plastico": "impresora_3d",
    "reloj+celular": "reloj_inteligente",
    "carro+vapor": "tren",
    // Sociedad y cultura
    "conocimiento+ladron": "secreto",
    "humano+lapiz": "escritor",

    // === RECETAS DE DOODLE GOD: EPISODIO 1 (COMIENZO) ===
    "olla+vapor": "caldera",
    "caldera+carbon": "maquina_vapor",
    "carro+maquina_vapor": "locomotora",
    "barco+maquina_vapor": "barco_vapor",
    "barco+tela": "fragata",
    "huevo+tierra": "dinosaurio",
    "dinosaurio+fuego": "dragon",
    "zombie+cadaver": "necrofago",
    "mago+energia": "semidios",
    "guerrero+dragon": ["heroe", "sangre"],
    "pajaro+cazador": ["carne", "pluma", "sangre"],
    "pluma+papel": "libro",
    "agua+alcohol": "vodka",
    "humano+alcohol": "alcoholico",
    "alcoholico+casa": "taberna",
    "campo+semilla": "trigo",
    "pantano+hierba": "cana",
    "cana+campo": "azucar",
    "cana+herramienta": "papel",
    "pantano+musgo": "helecho",
    "arbol+vida": "treant",
    "fuego+hierba": "tabaco",
    "tabaco+papel": "cigarrillo",
    "arena+gusano": "serpiente",
    "agua+carbon": "petroleo",
    "mar+sol": "sal",
    "fuego+carne": "filete",
    "carne+sal": "cecina",
    "pez+huevo": "caviar",
    "bestia+medicina": "rata",
    "vaca+hierba": ["leche", "fertilizante"],
    "piedra_caliza+fertilizante": "salitre",
    "salitre+azufre": "polvora",
    "concha+piedra": "piedra_caliza",
    "arcilla+piedra_caliza": "cemento",
    "agua+cemento": "hormigon",
    "tela+humano": "ropa",
    "bestia+casa": ["gato", "perro"],

    // === RECETAS: EPISODIO 2 (TECNOLOGÍA) ===
    "aire+cielo": "vacio",
    "energia+fuego": "plasma",
    "onda_radio+onda_radio": "radiacion",
    "sol+hierba": "flor",
    "sol+flor": "girasol",
    "cohete+vacio": "satelite",
    "laser+vinilo": "cd",
    "cd+cd": "dvd",
    "celular+fruta": "oro",
    "vida+vacio": "alienigena",

    // === RECETAS: EPISODIO 3 (EDAD MODERNA) ===
    "dios+piedra": "mandamientos",
    "mandamientos+humano": "religion",
    "engranaje+engranaje": "mecanismo",
    "mecanismo+libro": "maquina_escribir",
    "guerrero+arma_fuego": "soldado",
    "ley+soldado": "policia",
    "conocimiento+virus": "medicina",
    "juego+risa": "diversion",
    "cana+humano": "musica",
    "cadaver+electricidad": "death_metal",
    "alcohol+musica": "rock_n_roll",
    "alcohol+hierba": "absenta",
    "computadora+virus": "hacker",
    "cafe_bebida+vodka": "b52",
    "alcohol+pirata": "ron",
    "azucar+pan": "galletas",
    "alcoholico+dinero": "resaca",
    "banco+dinero": "deuda",
    "deuda+dinero": "tarjeta_credito",
    "arma_fuego+vodka": "ruleta_rusa",
    "fuego+vodka": "coctel_molotov",
    "leche+vodka": "ruso_blanco",
    "gusano+vodka": "tequila",
    "ovni+trigo": "circulos_cultivo",
    "pan+carne": "comida_rapida",

    // === RECETAS: EPISODIO 4 (MUNDO DE MAGIA) ===
    "magia+vacio": ["oscuridad", "luz"],
    "magia+conocimiento": "hechizo",
    "magia+musica": "bardo",
    "magia+religion": "sacerdote",
    "magia+sacerdote": "oracion",
    "magia+papel": "pergamino",
    "luz+oscuridad": "sombra",
    "aire+hechizo": "ilusion",
    "hechizo+hielo": "cono_frio",
    "fuego+hechizo": "bola_fuego",
    "grimoire+humano": "mago",
    "oracion+sacerdote": "curacion",
    "luz+vida": "angel",
    "oscuridad+tierra": "subterraneo",
    "casa+mago": "torre",
    "bestia+oscuridad": "demonio",
    "energia+oscuridad": "muerte",
    "curacion+muerte": "resurreccion",
    "guerrero+sacerdote": "paladin",
    "magia+tormenta": "caos",
    "ley+magia": "orden",
    "caos+vacio": "astral",
    "astral+hechizo": "teletransporte",
    "astral+muerte": "illithid",
    "astral+metal": "plata",
    "asesino+ley": "picaro",
    "mecanismo+vida": "modron",
    "elfo+humano": "semielfo",
    "arbol+humano": "druida",
    "humano+montana": "enano",
    "elfo+oscuridad": "drow",
    "elfo+metal": "mithril",
    "arma+elfo": "arco",
    "armadura+casa": "castillo",
    "arma+sacerdote": "maza",
    "drow+metal": "adamantita",
    "enano+oscuridad": "duergar",
    "arma+enano": ["hacha", "martillo"],
    "demonio+risa": "diablillo",
    "piedra+serpiente": "basilisco",

    // === RECETAS: AVENTURAS Y QUESTS ===
    "guerrero+mago": "aventurero",
    "aventurero+rey": "mision",
    "dragon+montana": "guarida",
    "castillo+minotauro": "laberinto",
    "cazador+herramienta": "trampa",
    "metal+secreto": "llave",
    "nacimiento+reina": "princesa",
    "cueva+oro": "tesoro",
    "herramienta+iman": "brujula",
    "brujula+papel": "mapa",
    "barco+lente": "catalejo",
    "humano+tienda": "comerciante",
    "mar+tierra": "isla",
    "arena+mar": "playa",
    "mar+montana": "acantilado",
    "acantilado+humano": "cueva",
    "bosque+humano": "arbusto",
    "arbusto+sol": "bayas",
    "arbol+playa": "palmera",
    "humano+palmera": "coco",
    "humano+madera": "palo",
    "palo+piedra": "piedra_afilada",
    "palo+piedra_afilada": "lanza",
    "hoja+palo": "refugio",
    "metal+piedra": "chispa",
    "chispa+hoja": "hoguera",
    "hoguera+hoja": "humo",
    "hilo+palo": ["cana_pescar", "arco", "raqueta"],
    "hilo+tela": "lienzo",
    "lienzo+palo": "vela_barco",
    "madera+mar": "balsa",
    "cadaver+desierto": "hueso",
    "ladrillo+ladrillo": "muro",
    "muro+refugio": "choza",

    // === RECETAS: ANTIGUO EGIPTO ===
    "desierto+rio": "nilo",
    "lagarto+nilo": "cocodrilo",
    "cana+piedra_afilada": "papiro",
    "humano+piramide": "faraon",
    "desierto+pajaro": "halcon",
    "faraon+halcon": "horus",
    "faraon+gato": "bastet",
    "cocodrilo+faraon": "sobek",
    "faraon+piedra": "estatua",
    "momia+oro": "sarcofago",
    "cadaver+tela": "momia",
    "casa+faraon": "templo",

    // === RECETAS: VIRTUDES ===
    "amor+vida": "nacimiento",
    "dinero+humano": "regalo",
    "humano+orden": "disciplina",
    "amor+regalo": "caridad",
    "caridad+humano": "generosidad",
    "humano+trabajo": "diligencia",
    "luz+pecado": "virtud",
    "fe+virtud": "esperanza",
    "energia+virtud": "tranquilidad",
    "corona+humano": "orgullo",
    "orgullo+virtud": "modestia",
    "enojo+virtud": "humildad",
    "humano+virtud": "tolerancia",
    "cielo_religion+fe": "salvacion",
    "agua+pan": "dieta",
    "dieta+religion": "ayuno",
    "dieta+verdura": "vegetarianismo",
    "orden+vodka": "abstencion",

    // === RECETAS: INVENTOS DEL SIGLO XX ===
    "conocimiento+electricidad": "semiconductor",
    "electricidad+semiconductor": "transistor",
    "bombilla+semiconductor": "tubo_vacio",
    "transistor+transistor": "microchip",
    "computadora+conocimiento": "software",
    "microchip+software": "microprocesador",
    "computadora+software": "sistema_operativo",
    "computadora+raton": "mouse",
    "casete+software": "disquete",
    "celofan+musica": "casete",
    "petroleo+tela": "celofan",
    "libro+microchip": "usb",
    "onda_radio+satelite": "gps",
    "microchip+musica": "mp3",
    "musica+videojuego": "karaoke",
    "celular+papel": "fax",
    "camara+microchip": "camara_digital",
    "camara+internet": "camara_web",
    "fotografia+papel": "fotocopiadora",
    "fotografia+tiempo": "polaroid",
    "avion+onda_radio": "radar",
    "radar+vacio": "radiotelescopio",
    "avion+tierra": "caja_negra",
    "fuego+mecanismo": "motor_reaccion",
    "aire+refrigerador": "aire_acondicionado",
    "orden+trabajo": "linea_montaje",
    "conocimiento+tiempo": "relatividad",
    "conocimiento+vacio": "big_bang",
    "polvo+vacio": "aspiradora",
    "petroleo+piedra_caliza": "crayones",
    "agua+ropa": "lavadora",
    "aire+tela": "zeppelin",
    "conocimiento+metal": "acero_inoxidable",
    "conocimiento+juego": "crucigrama",
    "aire+armadura": "mascara_gas",
    "electricidad+pan": "tostadora",
    "conocimiento+pecado": "detector_mentiras",
    "fruta+medicina": "vitamina",
    "electricidad+lampara": "lampara_neon",
    "mecanismo+ropa": "cremallera",
    "pegamento+tela": "curita",
    "plastico+quimica": "pegamento",
    "celofan+pegamento": "cinta_adhesiva",
    "pegamento+tiempo": "superpegamento",
    "cristal+sol": "gafas_sol",
    "azucar+diversion": "chicle",
    "coche+orden": "semaforo",
    "carne+refrigerador": "comida_congelada",
    "diversion+juego": "yoyo",
    "dinero+juego": "monopolio",
    "carro+tienda": "carrito_compras",
    "coche+dinero": "parquimetro",
    "arma_fuego+magia": "ak47",
    "agua+mascara_gas": "equipo_buceo",
    "numero+tienda": "codigo_barras",
    "arma+misil": "bazooka",
    "energia+plutonio": "reactor_nuclear",
    "ropa+sol": "bikini",
    "reloj+transistor": "reloj_digital",
    "electricidad+sol": "celda_solar",
    "fotografia+laser": "holograma",
    "banco+mecanismo": "cajero_automatico",
    "armadura+tela": "kevlar",
    "cohete+luna": "modulo_lunar",
    "astronauta+satelite": "estacion_espacial",
    "coche+electricidad": "auto_hibrido",
    "mecanismo+medicina": "corazon_artificial",
    "fuego+polvora": "petardo",

    // === RECETAS: ARTEFACTOS LEGENDARIOS ===
    "estatua+leon": "esfinge",

    // === RESCATADAS DEL TXT (2ª pasada) ===
    "aire+lava": "piedra",
    "agua+piedra": "arena",
    "alcohol+pan": "cerveza",
    "bestia+cazador": ["carne", "lana", "sangre"],
    "humano+arcilla": "ceramica",
    "arcilla+hoguera": "ceramica",
    "hormigon+ladrillo": "casa",
    "petroleo+carro": "coche",
    "cristal+casa": "rascacielos",
    "cristal+vacio": "bombilla",
    "electricidad+vacio": "onda_radio",
    "energia+semiconductor": "onda_radio",
    "television+libro": "computadora",
    "metal+radiacion": "plutonio",
    "plutonio+arma": "bomba_atomica",
    "plutonio+plutonio": "bomba_atomica",
    "computadora+onda_radio": "celular",
    "semilla+energia": "cafe_bebida",
    "avion+vacio": "cohete",
    "fuego+onda_radio": "laser",
    "mercurio+semidios": "piedra_filosofal",
    "magia+mercurio": "piedra_filosofal",
    "humano+computadora": "ciborg",
    "herramienta+ley": "mecanismo",
    "alcoholico+barco": "pirata",
    "agua+cristal": "hielo",
    "conocimiento+pez": "pulpo",
    "escarabajo+trabajo": "hormiga",
    "masa+fruta": "pastel",
    "hielo+mecanismo": "refrigerador",
    "dinero+rascacielos": "banco",
    "diversion+ley": "juego",
    "vodka+pirata": "ron",
    "maquina_escribir+humano": "periodista",
    "alienigena+cohete": "ovni",
    "bestia+magia": "unicornio",
    "arma+magia": "varita",
    "dragon+sacerdote": "ceniza",
    "guerrero+trampa": "cadaver",
    "humano+isla": ["playa", "acantilado", "bosque"],
    "humano+mapa": "tesoro",
    "humo+vela_barco": "comerciante",
    "arbol+hacha": "madera",
    "hacha+palo": "lanza",
    "lanza+mar": "pez",
    "carne+hoguera": "filete",
    "agua+desierto": "nilo",
    "humano+sol": "faraon",
    "faraon+sol": "ra",
    "nilo+humano": "campo",
    "aire+coche": "avion",
    "arma+cohete": "misil",
    "conocimiento+vida": "adn",
    "aire+mecanismo": "helicoptero",
    "mecanismo+trabajo": "robot",
    "coche+vacio": "modulo_lunar",
    "satelite+satelite": "estacion_espacial",
    "disquete+laser": "cd",
    "humano+muerte": "zombie",
    "humano+trigo": "pan",
    "arma+vacio": "estrella_muerte",
    "muerte+religion": "sacrificio",
    "bomba_atomica+semidios": "flor",

    // === COMBINACIONES DE 3 ELEMENTOS (ARTEFACTOS ORIGINALES) ===
    "arena+cadaver+piedra": "piramide_keops",
    "bestia+humano+piedra": "esfinge",
    "metal+rascacielos+torre": "torre_eiffel",
    "dinosaurio+mar+radiacion": "godzilla",
    "resurreccion+sangre+semidios": "santo_grial",
    "energia+espada+luz": "sable_luz",
    "caos+muerte+oscuridad": "caja_pandora",
    "energia+mecanismo+vacio": "movimiento_perpetuo",
    "demonio+lava+magia": "anillo_unico",
    "piedra+piedra+piedra": "stonehenge",
    "barco+hielo+muerte": "titanic",
    "herramienta+madera+vida": "pinocho",
    "humano+madera+nieve": "trineo_santa",
    "lagarto+piedra+veneno": "basilisco",

    // === MARVEL ===
    "arana+radiacion": "arana_radiactiva",
    "humano+arana_radiactiva": "spiderman",
    "dinero+dinero": "multimillonario",
    "multimillonario+armadura": "iron_man",
    "farmaco+musculo": "suero",
    "soldado+suero": "capitan_america",
    "cientifico+radiacion": "hulk",
    "soldado+espia": "black_widow",
    "superheroe+flecha": "hawkeye",
    "metal+mutante": "wolverine",
    "curacion+soldado": "deadpool",
    "magia+medico": "doctor_strange",
    "meteorito+metal": "vibranium",
    "rey+vibranium": "black_panther",
    "ladron+ropa": "ant_man",
    "magia+mutante": "scarlet_witch",
    "abogado+superheroe": "daredevil",
    "justicia+odio": "venganza",
    "soldado+venganza": "punisher",
    "soldado+odio": "red_skull",
    "alienigena+veneno": "simbionte",
    "asesino+simbionte": "carnage",
    "periodista+simbionte": "venom",
    "cientifico+pulpo": "doctor_octopus",
    "magia+rey": "doctor_doom",
    "miedo+miedo": "locura",
    "multimillonario+locura": "duende_verde",
    "dios+secreto": "loki",
    "dieta+tiempo": "hambre",
    "espacio+hambre": "galactus",

    // === DC COMICS ===
    "multimillonario+murcielago": "batman",
    "alienigena+sol": "superman",
    "guerrero+isla": "amazona",
    "amazona+justicia": "wonder_woman",
    "cientifico+rayo": "flash",
    "anillo+piloto": "green_lantern",
    "mar+rey": "aquaman",
    "robin+tiempo": "nightwing",
    "arco+multimillonario": "green_arrow",
    "nacimiento+rayo": "shazam",
    "alienigena+conocimiento": "martian_manhunter",
    "policia+secreto": "detective",
    "demonio+detective": "constantine",
    "payaso+quimica": "joker",
    "amor+joker": "harley_quinn",
    "multimillonario+odio": "lex_luthor",
    "corona+odio": "tirania",
    "dios+tirania": "darkseid",
    "crucigrama+ladron": "riddler",
    "ladron+pinguino": "penguin",
    "juez+veneno": "two_face",
    "carcel+farmaco": "bane",
    "flor+veneno": "poison_ivy",
    "asesino+suero": "deathstroke",
    "flash+odio": "reverse_flash",

    // === SCI-FI: CONCEPTOS PRIMORDIALES ===
    "fuego+metal": "forja",
    "conocimiento+energia": "mente",
    "humano+mente": "conciencia",
    "cielo+luna": "noche",
    "cielo+noche": "espacio",
    "espacio+energia": "gravedad",
    "espacio+luz": "estrella",
    "estrella+gravedad": "agujero_negro",
    "espacio+vida": "alienigena",
    "humano+espacio": "astronauta",
    "humano+energia": "espiritu",
    "espiritu+mente": "magia",
    "magia+oscuridad": "magia_oscura",
    "espacio+espiritu": "la_fuerza",
    "ciencia+metal": "tecnologia",
    "metal+tecnologia": "robot",
    "conciencia+robot": "androide",
    "espacio+tecnologia": "nave_espacial",
    "medicina+tecnologia": "clon",
    "humano+paz": "hobbit",
    "desierto+humano": "nomada",

    // === SCI-FI: STAR WARS ===
    "la_fuerza+luz": "jedi",
    "la_fuerza+oscuridad": "sith",
    "energia+espada": "sable_luz",
    "laser+nave_espacial": "estrella_muerte",
    "armadura+soldado": "stormtrooper",
    "jedi+oscuridad": "darth_vader",
    "desierto+jedi": "luke_skywalker",
    "sith+tirania": "palpatine",
    "alienigena+la_fuerza": "yoda",
    "nave_espacial+pirata": "han_solo",

    // === FANTASÍA: LOTR Y HARRY POTTER ===
    "forja+magia_oscura": "anillo_unico",
    "bola_cristal+piedra": "palantir",
    "guerra+orco": "uruk_hai",
    "demonio+lava": "balrog",
    "luz+mago": "gandalf",
    "anillo_unico+hobbit": "frodo",
    "hobbit+locura": "gollum",
    "anillo_unico+magia_oscura": "sauron",
    "corona+guerrero": "aragorn",
    "escuela+magia": "hogwarts",
    "magia+muerte": "horrocrux",
    "caballo+pajaro": "hipogrifo",
    "mago+oscuridad": "mortifago",
    "hogwarts+rayo": "harry_potter",
    "horrocrux+mago": "voldemort",
    "conocimiento+mago": "dumbledore",
    "mago+pocion": "snape",

    // === SCI-FI: STAR TREK, INTERSTELLAR, DUNE ===
    "brujula+nave_espacial": "uss_enterprise",
    "humano+matematicas": "vulcano",
    "androide+virus": "borg",
    "humano+uss_enterprise": "kirk",
    "uss_enterprise+vulcano": "spock",
    "agujero_negro+tiempo": "dilatacion_temporal",
    "geometria+tiempo": "teseracto",
    "risa+robot": "tars",
    "astronauta+dilatacion_temporal": "cooper",
    "desierto+polvo": "especia",
    "desierto+especia": "arrakis",
    "desierto+gusano": "shai_hulud",
    "desierto+nomada": "fremen",
    "adn+humano": "bene_gesserit",
    "especia+fremen": "paul_atreides",
    "bene_gesserit+tirania": "baron_harkonnen",

    // === SCI-FI: MATRIX, BLADE RUNNER, 2001, ALIEN, BTTF, AVATAR ===
    "ia+realidad_virtual": "matrix",
    "farmaco+secreto": "pildora_roja",
    "androide+espia": "agente_smith",
    "matrix+pildora_roja": "neo",
    "fe+matrix": "morfeo",
    "amor+matrix": "trinity",
    "androide+humano": "replicante",
    "detective+replicante": "blade_runner",
    "ciudad+tecnologia": "cyberpunk",
    "lluvia+replicante": "roy_batty",
    "blade_runner+conciencia": "deckard",
    "espacio+piedra": "monolito",
    "ia+nave_espacial": "hal9000",
    "astronauta+hal9000": "dave_bowman",
    "alienigena+gusano": "xenomorfo",
    "alienigena+cazador": "depredador",
    "soldado+xenomorfo": "ripley",
    "coche+tiempo": "delorean",
    "teletransporte+tiempo": "viaje_tiempo",
    "cientifico+delorean": "doc_brown",
    "skate+viaje_tiempo": "marty_mcfly",
    "planeta+selva": "pandora",
    "adn+alienigena": "avatar",
    "pandora+vida": "navi",
    "avatar+soldado": "jake_sully",
    "espiritu+navi": "neytiri",

    // === DEPORTES: CONCEPTOS Y DISCIPLINAS ===
    "humano+tierra": "resistencia",
    "amor+fuego": "pasion",
    "humano+viento": "velocidad",
    "campo+deporte": "cancha",
    "bicicleta+humano": "ciclismo",
    "deporte+velocidad": "atletismo",
    "deporte+monje": "artes_marciales",
    "artes_marciales+boxeo": "mma",
    "motor+deporte": "automovilismo",
    "pelota+palo": "beisbol",
    "pelota+hielo": "hockey",
    "mar+deporte": "surf",
    "armadura+pelota": "futbol_americano",
    "cancha+palo": "golf",
    "arte+gimnasio": "gimnasia",
    "pasion+torneo": "victoria",
    "dinero+victoria": "trofeo",
    "tiempo+trofeo": "legado",
    "humano+legado": "goat",
    "reloj+velocidad": "record_mundial",
    "futbol+victoria": "copa_mundo",
    "anillo+basquetbol": "campeonato_nba",
    "automovilismo+velocidad": "pole_position",
    "corona+tenis": "grand_slam",
    "conocimiento+futbol": "futbol_total",
    "futbol_total+musica": "tiki_taka",
    "futbol+magia": "jogo_bonito",
    "arte+deporte": "elegancia",
    "futbol+velocidad": "regate",
    "basquetbol+musculo": "destruccion_tableros",

    // === LEYENDAS DEL DEPORTE ===
    "corona+futbol": "pele",
    "dios+futbol": "maradona",
    "copa_mundo+futbol": "messi",
    "futbol+musculo": "cristiano",
    "elegancia+futbol": "zidane",
    "futbol+jogo_bonito": "ronaldinho",
    "futbol+regate": "ronaldo_nazario",
    "futbol+futbol_total": "cruyff",
    "aire+basquetbol": "jordan",
    "basquetbol+serpiente": "kobe",
    "basquetbol+tiempo": "lebron",
    "basquetbol+destruccion_tableros": "shaq",
    "basquetbol+numero": "wilt_chamberlain",
    "basquetbol+infinito": "stephen_curry",
    "boxeo+poesia": "ali",
    "bestia+boxeo": "tyson",
    "boxeo+escudo": "mayweather",
    "mma+montana": "khabib",
    "dinero+mma": "mcgregor",
    "artes_marciales+conocimiento": "bruce_lee",
    "artes_marciales+risa": "jackie_chan",
    "artes_marciales+infinito": "chuck_norris",
    "automovilismo+lluvia": "senna",
    "automovilismo+fuego": "schumacher",
    "automovilismo+record_mundial": "hamilton",
    "automovilismo+zorro": "alonso",
    "arcilla+tenis": "nadal",
    "elegancia+tenis": "federer",
    "grand_slam+tenis": "djokovic",
    "atletismo+rayo": "bolt",
    "natacion+record_mundial": "phelps",
    "beisbol+musculo": "babe_ruth",
    "hockey+numero": "gretzky",
    "ciclismo+resistencia": "merckx",
    "gimnasia+numero": "comaneci",
    "gimnasia+oro": "biles",
    "surf+tsunami": "slater",
    "anillo+futbol_americano": "brady",
    "fuego+golf": "tiger_woods",

    // === HITOS HISTÓRICOS ===
    "campo+humano": "asentamiento",
    "asentamiento+asentamiento": "ciudad",
    "ciudad+conocimiento": "civilizacion",
    "humano+papiro": "escritura",
    "arcilla+escritura": "codigo_hammurabi",
    "escritura+mecanismo": "imprenta",
    "barco+mar": "navegacion",
    "guerra+reino": "conquista",
    "fuego+salitre": "polvora",
    "industria+maquina_vapor": "revolucion_industrial",
    "carbon+maquina_vapor": "revolucion_industrial",
    "tirania+humano": "revolucion",
    "ciencia+electricidad": "telecomunicacion",
    "polvora+odio": "trinchera",
    "ciencia+radiacion": "reactor_nuclear",
    "guerra+reactor_nuclear": "bomba_atomica",
    "cielo+cohete": "carrera_espacial",
    "telecomunicacion+computadora": "internet",
    "faraon+piramide": "giza",
    "ciudad+justicia": "democracia",
    "muro+reino": "gran_muralla",
    "ley+reino": "imperio_romano",
    "imperio_romano+tiempo": "caida_roma",
    "ley+rey": "carta_magna",
    "navegacion+vikingo": "expansion_vikinga",
    "canon+muro": "caida_constantinopla",
    "biblia+imprenta": "gutenberg",
    "mapa+navegacion": "descubrimiento_america",
    "religion+revolucion": "reforma",
    "ciencia+experimento": "revolucion_cientifica",
    "dinero+tirania": "independencia_usa",
    "carcel+revolucion": "revolucion_francesa",
    "conquista+revolucion_francesa": "guerras_napoleonicas",
    "guerra+trinchera": "primera_guerra",
    "nieve+revolucion": "revolucion_rusa",
    "banco+miedo": "crack_29",
    "primera_guerra+tirania": "segunda_guerra",
    "playa+segunda_guerra": "dia_d",
    "bomba_atomica+ciudad": "hiroshima",
    "dinero+revolucion_rusa": "guerra_fria",
    "guerra_fria+muro": "muro_berlin",
    "astronauta+modulo_lunar": "alunizaje",
    "incendio+reactor_nuclear": "chernobil",
    "muro_berlin+paz": "caida_muro",
    "internet+conocimiento": "www",

    // === CULTURAS Y MITOS DEL MUNDO ===
    "espiritu+tierra": "cosmovision",
    "humano+ritual": "chaman",
    "escritura+piedra": "jeroglifico",
    "montana+montana": "cordillera",
    "agua+rio": "valle_fertil",
    "estrella+conocimiento": "astronomia",
    "muerte+subterraneo": "inframundo",
    "muerte+ritual": "momia",
    "astronomia+piedra": "observatorio",
    "templo+piramide": "piramide_escalonada",
    "hierba+ritual": "planta_sagrada",
    "pluma+ritual": "plumas_sagradas",
    "campo+sol": "maiz",
    "cosmovision+maiz": "hombre_maiz",
    "piramide_escalonada+serpiente": "chichen_itza",
    "plumas_sagradas+serpiente": "quetzalcoatl",
    "sacrificio+sol": "huitzilopochtli",
    "agua+templo": "tlaloc",
    "ciudad+lago": "tenochtitlan",
    "piedra+sol": "calendario_azteca",
    "selva+semilla": "cacao",
    "agua+cacao": "xocolatl",
    "tierra+fe": "pachamama",
    "cordillera+reino": "tahuantinsuyo",
    "cordillera+templo": "machu_picchu",
    "hilo+numero": "quipu",
    "oro+ritual": "el_dorado",
    "montana+sacrificio": "capac_cocha",
    "desierto+pintura": "nazca",
    "arbol+chaman": "machi",
    "arbol+ritual": "canelo",
    "machi+madera": "rehue",
    "mar+serpiente": "trentren_caicai",
    "pintura+ritual": "hain",
    "selva+fe": "amazonia",
    "chaman+selva": "ayahuasca",
    "bestia+campo": "bufalo",
    "madera+espiritu": "totem",
    "espiritu+viento": "thunderbird",
    "humo+paz": "pipa_paz",
    "mente+ritual": "danza_espiritus",
    "arcilla+valle_fertil": "mesopotamia",
    "mesopotamia+templo": "zigurat",
    "escritura+heroe": "gilgamesh",
    "inframundo+amor": "ishtar",
    "nilo+valle_fertil": "egipto",
    "piedra+sarcofago": "valle_reyes",
    "inframundo+justicia": "anubis",
    "anubis+corazon": "pesaje_corazon",
    "desierto+tormenta": "seth",
    "conocimiento+escudo": "atenea",
    "dios+guerra": "ares",
    "fuego+olimpo": "prometeo",
    "espiritu+miedo": "banshee",
    "dragon+rio": "dinastia",
    "cielo+rey": "mandato_cielo",
    "espiritu+sombra": "yin_yang",
    "yin_yang+humano": "taoismo",
    "montana+sol": "amaterasu",
    "guerrero+karma": "samurai",
    "dios+conocimiento": "odin",
    "guerra+valhalla": "ragnarok",

    // === GAMING Y HARDWARE ===
    "arena+quimica": "silicio",
    "silicio+electricidad": "microchip",
    "metal+microchip": "cpu",
    "cristal+tecnologia": "pantalla",
    "microchip+pantalla": "gpu",
    "gpu+luz": "ray_tracing",
    "gpu+ia": "dlss",
    "microchip+velocidad": "ssd",
    "agua+cpu": "refrigeracion_liquida",
    "silicio+tecnologia": "placa_base",
    "cpu+gpu+placa_base": "pc_gamer",
    "plastico+videojuego": "mando",
    "mando+pantalla": "consola_portatil",
    "microfono+sonido": "headset",
    "humano+software": "programador",
    "arte+programador": "desarrollador",
    "desarrollador+dinero": "estudio_aaa",
    "desarrollador+amor": "juego_indie",
    "videojuego+internet": "multijugador",
    "videojuego+torneo": "esports",
    "videojuego+camara_web": "streaming",
    "pc_gamer+tienda": "steam",
    "videojuego+mapa": "mundo_abierto",
    "cpu+gpu+ssd": "nextgen",
    "nextgen+consola": "ps5",
    "nextgen+pc_gamer": "xbox_series",
    "consola_portatil+television": "switch",
    "consola_portatil+steam": "steam_deck",
    "consola+tiempo": "consola_retro",
    "plastico+microchip": "cartucho",
    "cartucho+pantalla": "game_boy",
    "arcoiris+game_boy": "gbc",
    "gbc+tecnologia": "gba",
    "gba+pantalla": "nintendo_ds",
    "consola_portatil+dvd": "psp",
    "consola+dvd": "ps2",
    "consola+mando": "gamecube",
    "gamecube+deporte": "wii",

    // === VIDEOJUEGOS LEGENDARIOS: GENERACIÓN ACTUAL ===
    "hacha+ps5": "gow_ragnarok",
    "ps5+spiderman": "spiderman2_juego",
    "hongo+ps5": "the_last_of_us",
    "dinosaurio+ps5": "horizon",
    "ps5+samurai": "ghost_tsushima",
    "ps5+sangre": "bloodborne",
    "automovilismo+ps5": "gran_turismo_7",
    "portal+ps5": "ratchet_clank",
    "muerte+ps5": "returnal",
    "ps5+robot": "astro_bot",
    "espada_legendaria+switch": "zelda_totk",
    "globo+switch": "mario_odyssey",
    "switch+tortuga": "mario_kart_8",
    "switch+torneo": "smash_ultimate",
    "huevo+switch": "pokemon_escarlata",
    "miedo+switch": "metroid_dread",
    "isla+switch": "animal_crossing_nh",
    "bruja+switch": "bayonetta",
    "guerra+switch": "fire_emblem_3h",
    "calamar+switch": "splatoon",
    "anillo+xbox_series": "halo",
    "automovilismo+xbox_series": "forza",
    "espacio+xbox_series": "starfield",
    "avion+xbox_series": "flight_simulator",
    "pirata+xbox_series": "sea_of_thieves",
    "guerra+xbox_series": "gears",
    "musica+xbox_series": "hifi_rush",
    "locura+xbox_series": "hellblade",
    "libro+xbox_series": "pentiment",
    "hormiga+xbox_series": "grounded",
    "arbol+mundo_abierto": "elden_ring",
    "caballo+mundo_abierto": "rdr2",
    "ladron+mundo_abierto": "gta5",
    "ladrillo+mundo_abierto": "minecraft",
    "multijugador+muro": "fortnite",
    "arma_fuego+pc_gamer": "counter_strike",
    "inframundo+juego_indie": "hades_juego",
    "dragon+multijugador": "baldurs_gate",
    "mono+videojuego": "wukong",
    "futbol+videojuego": "ea_fc",

    // === VIDEOJUEGOS LEGENDARIOS: ERA RETRO ===
    "game_boy+ladrillo": "tetris",
    "game_boy+huevo": "pokemon_rojo_azul",
    "game_boy+isla": "links_awakening",
    "game_boy+rosa": "kirby",
    "game_boy+hongo": "mario_land",
    "gbc+oro": "pokemon_oro_plata",
    "gbc+tiempo": "zelda_oracle",
    "dragon+gbc": "dq_monsters",
    "dinero+gbc": "wario_land",
    "espia+gbc": "mgs_ghost_babel",
    "gba+joya": "pokemon_rubi_zafiro",
    "alquimista+gba": "golden_sun",
    "gba+virus": "metroid_fusion",
    "gba+vampiro": "castlevania_aria",
    "abogado+gba": "phoenix_wright",
    "gba+tanque": "advance_wars",
    "espada+gba": "fire_emblem_blazing",
    "duende+gba": "minish_cap",
    "gba+hoja": "mario_advance",
    "gba+locura": "warioware",
    "diamante+nintendo_ds": "pokemon_diamante",
    "corazon+nintendo_ds": "pokemon_heartgold",
    "castillo+nintendo_ds": "castlevania_dawn",
    "nintendo_ds+reloj": "zelda_phantom",
    "nintendo_ds+secreto": "profesor_layton",
    "hongo+nintendo_ds": "new_super_mario",
    "coche+nintendo_ds": "mario_kart_ds",
    "nintendo_ds+perro": "nintendogs",
    "nintendo_ds+viaje_tiempo": "chrono_trigger",
    "ciudad+nintendo_ds": "twewy",
    "olimpo+psp": "gow_psp",
    "psp+soldado": "crisis_core",
    "espia+psp": "peace_walker",
    "dragon+psp": "monster_hunter",
    "psp+torneo": "dissidia",
    "psp+velocidad": "wipeout",
    "ejercito+psp": "socom",
    "musica+psp": "lumines",
    "psp+tambor": "patapon",
    "ladron+psp": "gta_liberty",
    "gamecube+mar": "wind_waker",
    "fantasma+gamecube": "luigis_mansion",
    "gamecube+laser": "metroid_prime",
    "deuda+gamecube": "animal_crossing_gc",
    "coche+gamecube": "double_dash",
    "gamecube+torneo": "melee",
    "gamecube+zombie": "resident_evil_4",
    "gamecube+playa": "mario_sunshine",
    "gamecube+locura": "eternal_darkness",
    "automovilismo+gamecube": "fzero",
    "bicicleta+ps2": "san_andreas",
    "dios+ps2": "god_of_war_ps2",
    "ps2+selva": "mgs3",
    "caballo+ps2": "shadow_colossus",
    "futbol+ps2": "pes6",
    "magia+ps2": "ffx",
    "llave+ps2": "kingdom_hearts",
    "miedo+ps2": "silent_hill_2",
    "arma+ps2": "jak_daxter",
    "motor+ps2": "gran_turismo_4",
    "raqueta+wii": "wii_sports",
    "galaxia+wii": "mario_galaxy",
    "espada+wii": "skyward_sword",
    "torneo+wii": "brawl",
    "rueda+wii": "mario_kart_wii",
    "isla+wii": "sports_resort",
    "mundo_abierto+wii": "xenoblade",
    "mono+wii": "dk_country",
    "pintura+wii": "epic_mickey",
    "sable_luz+wii": "no_more_heroes",

    // === GENERACIONES PS3/PS4/XBOX: HARDWARE Y CONSOLAS ===
    "dvd+laser": "blu_ray",
    "cpu+tecnologia": "cell",
    "consola+internet": "xbox_live",
    "camara+mando": "kinect",
    "consola+pc_gamer": "xbox_clasica",
    "dvd+xbox_live": "xbox_360",
    "fuego+xbox_360": "rrod",
    "blu_ray+cell+mando": "ps3",
    "blu_ray+pc_gamer": "ps4",

    // === JUEGOS XBOX CLÁSICA Y XBOX 360 ===
    "anillo+xbox_clasica": "halo_ce",
    "multijugador+xbox_clasica": "halo_2",
    "jedi+xbox_clasica": "kotor",
    "espada+xbox_clasica": "ninja_gaiden",
    "heroe+xbox_clasica": "fable_juego",
    "espia+xbox_clasica": "splinter_cell",
    "automovilismo+xbox_clasica": "pgr2",
    "torneo+xbox_clasica": "doa3",
    "skate+xbox_clasica": "jet_set_radio",
    "carcel+xbox_clasica": "riddick",
    "guerra+xbox_360": "gears_of_war",
    "anillo+xbox_360": "halo_3",
    "espacio+xbox_360": "mass_effect",
    "dragon+xbox_360": "skyrim",
    "submarino+xbox_360": "bioshock",
    "automovilismo+xbox_360": "forza_horizon_1",
    "escritor+xbox_360": "alan_wake",
    "xbox_360+zombie": "dead_rising",
    "heroe+xbox_360": "fable_2",
    "soldado+xbox_360": "cod4",

    // === JUEGOS PS3 Y PS4 ===
    "ps3+tesoro": "uncharted_2",
    "hongo+ps3": "the_last_of_us",
    "olimpo+ps3": "gow3",
    "lluvia+ps3": "heavy_rain",
    "hilo+ps3": "littlebigplanet",
    "electricidad+ps3": "infamous",
    "alienigena+ps3": "resistance",
    "guerra+ps3": "killzone",
    "demonio+ps3": "demons_souls",
    "espia+ps3": "mgs4",
    "ps4+sangre": "bloodborne",
    "hacha+ps4": "gow_2018",
    "ps4+spiderman": "spiderman_ps4",
    "dinosaurio+ps4": "horizon_zero",
    "ps4+samurai": "ghost_tsushima",
    "ladron+ps4": "uncharted_4",
    "ps4+venganza": "tlou2",
    "cartero+ps4": "death_stranding",
    "escuela+ps4": "persona5",
    "androide+ps4": "detroit",

    // === EL MUNDO DEL TRABAJO ===
    "dinero+reloj": "sueldo",
    "sueldo+trabajo": "empleo",
    "empleo+papel": "contrato",
    "contrato+justicia": "sindicato",
    "enojo+sindicato": "huelga",
    "conocimiento+papel": "curriculum",
    "herramienta+casa": "taller",
    "mesa+papel": "oficina",
    "dinero+oficina": "empresa",
    "casa+oficina": "teletrabajo",
    "dinero+pasion": "emprendimiento",
    "dinero+empresa": "finanzas",
    "empresa+tienda": "marketing",
    "empresa+humano": "rrhh",
    "empresa+numero": "analista_datos",
    "humano+muro": "albanil",
    "madera+taller": "carpintero",
    "agua+herramienta": "fontanero",
    "electricidad+humano": "electricista",
    "bestia+granjero": "ganadero",
    "cana_pescar+humano": "pescador",
    "tela+tijera": "sastre",
    "cocinero+masa": "panadero",
    "humano+restaurante": "camarero",
    "escoba+humano": "barrendero",
    "herramienta+motor": "mecanico",
    "hospital+humano": "enfermero",
    "azucar+medico": "dentista",
    "medico+mente": "psicologo",
    "farmacia+humano": "farmaceutico",
    "biblioteca+humano": "bibliotecario",
    "finanzas+numero": "contador",
    "empresa+trabajo": "gerente",
    "arte+computadora": "disenador",
    "conocimiento+herramienta": "ingeniero",
    "metal+torre": "torre_eiffel",
    "dinosaurio+radiacion": "godzilla",
    "jesus+sangre": "santo_grial",
    "espada+laser": "sable_luz",
    "caos+muerte": "caja_pandora",
    "engranaje+infinito": "movimiento_perpetuo",
    "anillo+maldicion": "anillo_unico",
    "piedra+ritual": "stonehenge",
    "crucero+hielo": "titanic",
    "madera+vida": "pinocho",
    "carruaje+nieve": "trineo_santa",
    "arbol+nieve": "arbol_navidad"
};

// 3. PROCESAR RECETAS AL INICIO
const recipes = {};
for (let key in rawRecipes) {
    let sortedKey = key.split('+').sort().join('+');
    let result = rawRecipes[key];
    recipes[sortedKey] = Array.isArray(result) ? result : [result];
}

// Validador de datos: avisa por consola (F12) si alguna receta queda rota al editar
for (let key in recipes) {
    key.split('+').forEach(ing => {
        if (!elementsDB[ing]) console.warn(`⚠️ Receta "${key}": el ingrediente "${ing}" no existe en elementsDB.`);
    });
    recipes[key].forEach(r => {
        if (!elementsDB[r]) console.warn(`⚠️ Receta "${key}": el resultado "${r}" no existe en elementsDB.`);
    });
}

// === ÍNDICES PARA LA ENCICLOPEDIA ===
const recipesByResult = {};     // id -> recetas que lo producen
const recipesByIngredient = {}; // id -> recetas donde participa
for (let key in recipes) {
    const parts = key.split('+'); // 2 o 3 ingredientes
    const entry = { parts, results: recipes[key] };
    recipes[key].forEach(r => {
        if (!recipesByResult[r]) recipesByResult[r] = [];
        recipesByResult[r].push(entry);
    });
    [...new Set(parts)].forEach(ing => {
        if (!recipesByIngredient[ing]) recipesByIngredient[ing] = [];
        recipesByIngredient[ing].push(entry);
    });
}

// Los demás ingredientes de una receta, quitando UNA aparición del elemento dado
// (importante para recetas con repetidos, como piedra+piedra+piedra)
function otrosIngredientes(parts, elementId) {
    const otros = [...parts];
    otros.splice(otros.indexOf(elementId), 1);
    return otros;
}

const totalElements = Object.keys(elementsDB).length;
document.getElementById('total-elements').innerText = totalElements;

// Total de elementos por categoría (para progreso y logros)
const categoryTotals = {};
for (const id in elementsDB) {
    const g = elementsDB[id].group;
    categoryTotals[g] = (categoryTotals[g] || 0) + 1;
}
document.getElementById('progressBar').max = totalElements;

// 4. El resto del código (estado del juego, funciones, etc.) es exactamente igual al que tenías
let unlockedElements = [];
let slot1 = null;
let slot2 = null;
let slot3 = null;

function loadProgress() {
    const savedData = localStorage.getItem("alquimiaSave");
    if (savedData) {
        unlockedElements = JSON.parse(savedData).filter(id => elementsDB[id]);
        ["agua", "fuego", "tierra", "aire"].forEach(id => {
            if (!unlockedElements.includes(id)) unlockedElements.push(id);
        });
    } else {
        unlockedElements = ["agua", "fuego", "tierra", "aire"];
    }
}

function saveProgress() {
    localStorage.setItem("alquimiaSave", JSON.stringify(unlockedElements));
}

function resetGame() {
    if (confirm("¿Estás seguro de que quieres borrar todo tu progreso y empezar desde cero?")) {
        localStorage.removeItem("alquimiaSave");
        localStorage.removeItem("alquimiaLogros");
        unlockedElements = ["agua", "fuego", "tierra", "aire"];
        slot1 = null; slot2 = null; slot3 = null;
        updateSlots();
        document.getElementById('searchBar').value = "";
        showMessage("El mundo ha vuelto a su estado original.", "orange");
        renderInventory();
    }
}

// ¿Este elemento aún puede crear algo nuevo con el inventario actual?
function hasNewCombos(elementId, unlockedSet) {
    const entries = recipesByIngredient[elementId];
    if (!entries) return false;
    return entries.some(r => {
        const otros = otrosIngredientes(r.parts, elementId);
        return otros.every(o => unlockedSet.has(o)) &&
               r.results.some(res => elementsDB[res] && !unlockedSet.has(res));
    });
}

function renderInventory() {
    const inventoryDiv = document.getElementById('inventory');
    const unlockedSet = new Set(unlockedElements);
    const unlockedCount = unlockedElements.length;
    document.getElementById('count').innerText = unlockedCount;
    document.getElementById('progressBar').value = unlockedCount;
    inventoryDiv.innerHTML = '';

    let groupedElements = {};
    unlockedElements.forEach(elementId => {
        const el = elementsDB[elementId];
        if(el) {
            if (!groupedElements[el.group]) groupedElements[el.group] = [];
            groupedElements[el.group].push(elementId);
        }
    });

    const sortedGroupKeys = Object.keys(groupedElements).sort((a, b) => {
        // Los Elementos Básicos siempre primero: son la mesa de trabajo del jugador
        if (a === "basico") return -1;
        if (b === "basico") return 1;
        const nameA = categoryNames[a] || "Otros";
        const nameB = categoryNames[b] || "Otros";
        return nameA.localeCompare(nameB);
    });

    sortedGroupKeys.forEach(groupKey => {
        groupedElements[groupKey].sort((a, b) => elementsDB[a].name.localeCompare(elementsDB[b].name));

        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-block';
        
        const title = document.createElement('h3');
        title.className = 'category-title';
        const enCat = groupedElements[groupKey].length;
        const totalCat = categoryTotals[groupKey] || enCat;
        const completa = enCat === totalCat ? " 🏆" : "";
        title.innerText = `${categoryNames[groupKey] || "Otros"} · ${enCat}/${totalCat}${completa}`;
        groupDiv.appendChild(title);

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'category-items';

        groupedElements[groupKey].forEach(elementId => {
            const el = elementsDB[elementId];
            const btn = document.createElement('div');
            btn.className = 'element';
            btn.innerHTML = `<span class="el-emoji">${el.emoji}</span><span class="el-nombre">${el.name}</span>`;
            let tooltip = "Clic/Enter: seleccionar · Arrastrar a un espacio · Clic derecho o tecla E: enciclopedia";
            if (hasNewCombos(elementId, unlockedSet)) {
                btn.classList.add('has-combos');
                tooltip = "● ¡Aún puede crear algo nuevo! · " + tooltip;
            }
            btn.title = tooltip;
            btn.setAttribute('role', 'button');
            btn.setAttribute('tabindex', '0');
            btn.setAttribute('aria-label', el.name);
            btn.onclick = () => {
                if (btn._longPressFired) { btn._longPressFired = false; return; }
                selectElement(elementId);
            };
            // Gestos táctiles: toque = seleccionar · mantener ~0.25s y mover = arrastrar
            // · mantener quieto 0.6s = enciclopedia · deslizar de inmediato = scroll
            btn.addEventListener('touchstart', (e) => {
                const t = e.touches[0];
                btn._touch = { x: t.clientX, y: t.clientY, dragReady: false, dragging: false, ghost: null, scrolled: false };
                btn._dragReadyTimer = setTimeout(() => {
                    if (btn._touch && !btn._touch.scrolled) {
                        btn._touch.dragReady = true;
                        btn.classList.add('drag-ready');
                        if (navigator.vibrate) navigator.vibrate(30);
                    }
                }, 250);
                btn._pressTimer = setTimeout(() => {
                    if (btn._touch && !btn._touch.dragging && !btn._touch.scrolled) {
                        btn._longPressFired = true;
                        limpiarGestoTactil(btn);
                        openEncyclopedia(elementId);
                    }
                }, 600);
            }, { passive: true });

            btn.addEventListener('touchmove', (e) => {
                const st = btn._touch;
                if (!st) return;
                const t = e.touches[0];
                const dist = Math.hypot(t.clientX - st.x, t.clientY - st.y);
                if (!st.dragReady && !st.dragging) {
                    if (dist > 12) { // movimiento inmediato: es scroll, cancelar gestos
                        st.scrolled = true;
                        clearTimeout(btn._dragReadyTimer);
                        clearTimeout(btn._pressTimer);
                    }
                    return;
                }
                e.preventDefault(); // ya es un arrastre: bloquear el scroll
                if (!st.dragging && dist > 6) {
                    st.dragging = true;
                    clearTimeout(btn._pressTimer);
                    st.ghost = btn.cloneNode(true);
                    st.ghost.className = 'element drag-ghost';
                    document.body.appendChild(st.ghost);
                }
                if (st.dragging) {
                    st.ghost.style.left = t.clientX + 'px';
                    st.ghost.style.top = t.clientY + 'px';
                    marcarSlotBajo(t.clientX, t.clientY);
                    // Auto-scroll hacia los slots si el dedo llega al borde de la pantalla
                    if (t.clientY < 100) window.scrollBy(0, -12);
                    else if (t.clientY > window.innerHeight - 100) window.scrollBy(0, 12);
                }
            }, { passive: false });

            btn.addEventListener('touchend', (e) => {
                clearTimeout(btn._dragReadyTimer);
                clearTimeout(btn._pressTimer);
                const st = btn._touch;
                if (st && st.dragging) {
                    const t = e.changedTouches[0];
                    const idx = slotBajoPunto(t.clientX, t.clientY);
                    if (idx > 0) ponerEnSlot(idx, elementId);
                    btn._longPressFired = true; // suprime el click sintético que sigue
                }
                limpiarGestoTactil(btn);
            });

            btn.addEventListener('touchcancel', () => {
                clearTimeout(btn._dragReadyTimer);
                clearTimeout(btn._pressTimer);
                limpiarGestoTactil(btn);
            });
            btn.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectElement(elementId);
                } else if (e.key === 'e' || e.key === 'E' || e.key === 'ContextMenu') {
                    e.preventDefault();
                    openEncyclopedia(elementId);
                }
            };
            btn.draggable = true;
            btn.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', elementId);
                e.dataTransfer.effectAllowed = 'copy';
            };
            btn.oncontextmenu = (e) => {
                e.preventDefault();
                openEncyclopedia(elementId);
            };
            itemsDiv.appendChild(btn);
        });

        groupDiv.appendChild(itemsDiv);
        inventoryDiv.appendChild(groupDiv);
    });
}

function filterInventory() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const elements = document.querySelectorAll('.element');
    elements.forEach(el => {
        if (el.innerText.toLowerCase().includes(searchTerm)) {
            el.style.display = 'flex';
        } else {
            el.style.display = 'none';
        }
    });
}

function selectElement(elementId) {
    if (!slot1) { slot1 = elementId; updateSlots(); }
    else if (!slot2) { slot2 = elementId; updateSlots(); }
    else if (!slot3) { slot3 = elementId; updateSlots(); }
    else { showMessage("Los espacios están llenos. ¡Combínalos!", "orange"); }
}

function clearSlot(slotNumber) {
    if (slotNumber === 1) slot1 = null;
    if (slotNumber === 2) slot2 = null;
    if (slotNumber === 3) slot3 = null;
    updateSlots();
    showMessage("¡Combina elementos para crear cosas nuevas!");
}

function updateSlots() {
    [[1, slot1], [2, slot2], [3, slot3]].forEach(([n, id]) => {
        const div = document.getElementById('slot' + n);
        div.innerHTML = id ? `${elementsDB[id].emoji}<br><span>${elementsDB[id].name}</span>` : "?";
    });
}

function showMessage(text, color = "#4cc9f0") {
    const msgDiv = document.getElementById('message');
    msgDiv.innerText = text;
    msgDiv.style.color = color;
}

function getAvailableRecipes() {
    const unlockedSet = new Set(unlockedElements);
    const available = [];
    for (const key in recipes) {
        const parts = key.split('+');
        if (!parts.every(p => unlockedSet.has(p))) continue;
        const results = recipes[key];
        if (results.some(r => elementsDB[r] && !unlockedSet.has(r))) {
            available.push({ parts, results });
        }
    }
    return available;
}

// === PISTAS CON COOLDOWN ===
const HINT_COOLDOWN_MS = 30000; // 30 segundos por botón
const hintButtons = {
    elemento: { btnId: "btnHintElement", label: "Pista Elemento 💡" },
    grupo: { btnId: "btnHintCombo", label: "Pista Grupo 🧩" }
};

function getHintCooldowns() {
    try { return JSON.parse(localStorage.getItem("alquimiaHintCd")) || {}; }
    catch (e) { return {}; }
}

function hintRemainingMs(kind) {
    const cd = getHintCooldowns();
    return Math.max(0, (cd[kind] || 0) + HINT_COOLDOWN_MS - Date.now());
}

function startHintCooldown(kind) {
    const cd = getHintCooldowns();
    cd[kind] = Date.now();
    localStorage.setItem("alquimiaHintCd", JSON.stringify(cd));
    updateHintButtons();
}

function updateHintButtons() {
    for (const kind in hintButtons) {
        const { btnId, label } = hintButtons[kind];
        const btn = document.getElementById(btnId);
        const rem = hintRemainingMs(kind);
        if (rem > 0) {
            btn.disabled = true;
            btn.innerText = `⏳ ${Math.ceil(rem / 1000)}s`;
        } else {
            btn.disabled = false;
            btn.innerText = label;
        }
    }
}

setInterval(updateHintButtons, 1000);

function giveElementHint() {
    if (hintRemainingMs("elemento") > 0) return;
    let available = getAvailableRecipes();
    if(available.length === 0) return showMessage("¡Ya descubriste todo lo posible con tu inventario actual!", "gold");
    let randomRecipe = available[Math.floor(Math.random() * available.length)];
    let missingResults = randomRecipe.results.filter(r => !unlockedElements.includes(r));
    let targetId = missingResults[0];
    let target = elementsDB[targetId];
    showMessage(`💡 Pista: Aún puedes crear "${target.name} ${target.emoji}". ¡Descubre cómo!`, "#fca311");
    startHintCooldown("elemento");
}

function giveComboHint() {
    if (hintRemainingMs("grupo") > 0) return;
    let available = getAvailableRecipes();
    if(available.length === 0) return showMessage("¡Ya descubriste todo lo posible con tu inventario actual!", "gold");
    let randomRecipe = available[Math.floor(Math.random() * available.length)];
    const cats = randomRecipe.parts.map(p => `"${categoryNames[elementsDB[p].group]}"`);
    showMessage(`🧩 Pista: Combina algo de ${cats.join(" con algo de ")}.`, "#fca311");
    startHintCooldown("grupo");
}

// === EFECTOS DE SONIDO (sintetizados con Web Audio, sin archivos) ===
let audioCtx = null;
let soundOn = localStorage.getItem("alquimiaSound") !== "off";

function toggleSound() {
    soundOn = !soundOn;
    localStorage.setItem("alquimiaSound", soundOn ? "on" : "off");
    document.getElementById('btnSound').innerText = soundOn ? "🔊" : "🔇";
    if (soundOn) playTone(660, 0.1, 'sine', 0.15);
}

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playTone(freq, duration, type = 'sine', volume = 0.2, delay = 0) {
    if (!soundOn) return;
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t0 = ctx.currentTime + delay;
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t0);
        gain.gain.setValueAtTime(0, t0);
        gain.gain.linearRampToValueAtTime(volume, t0 + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + duration + 0.05);
    } catch (e) { /* audio no disponible: seguir en silencio */ }
}

// Arpegio ascendente brillante: ¡descubrimiento nuevo!
function soundDiscover() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => playTone(f, 0.35, 'triangle', 0.18, i * 0.09));
    playTone(2093, 0.5, 'sine', 0.06, 0.36);
}

// Pop suave: combinación válida pero ya conocida
function soundCombine() {
    playTone(440, 0.12, 'sine', 0.15);
    playTone(660, 0.15, 'sine', 0.12, 0.07);
}

// Zumbido grave descendente: no reaccionan
function soundFail() {
    playTone(180, 0.25, 'sawtooth', 0.08);
    playTone(130, 0.3, 'sawtooth', 0.08, 0.12);
}

// Fanfarria: ¡logro desbloqueado!
function soundAchievement() {
    [392, 523.25, 659.25, 783.99].forEach((f, i) => playTone(f, 0.3, 'square', 0.07, i * 0.12));
    playTone(1046.5, 0.7, 'triangle', 0.14, 0.48);
}

// === SISTEMA DE LOGROS ===
const MILESTONES = [
    { n: 10, nombre: "Aprendiz de Alquimista", emoji: "🧪" },
    { n: 25, nombre: "Iniciado", emoji: "📜" },
    { n: 50, nombre: "Adepto", emoji: "⚗️" },
    { n: 100, nombre: "Experto", emoji: "🔮" },
    { n: 200, nombre: "Maestro Alquimista", emoji: "🧙" },
    { n: 300, nombre: "Gran Maestro", emoji: "👑" },
    { n: 500, nombre: "Archimago", emoji: "🌟" },
    { n: 700, nombre: "Leyenda Viviente", emoji: "🐉" },
    { n: totalElements, nombre: "Dios de la Alquimia", emoji: "🌌" }
];

function getLogrosGuardados() {
    try { return JSON.parse(localStorage.getItem("alquimiaLogros")) || []; }
    catch (e) { return []; }
}

function contarPorCategoria() {
    const conteo = {};
    unlockedElements.forEach(id => {
        const el = elementsDB[id];
        if (el) conteo[el.group] = (conteo[el.group] || 0) + 1;
    });
    return conteo;
}

function logrosActuales() {
    const ids = [];
    const n = unlockedElements.length;
    MILESTONES.forEach(m => { if (n >= m.n) ids.push("hito_" + m.n); });
    const conteo = contarPorCategoria();
    for (const g in conteo) {
        if (conteo[g] === categoryTotals[g]) ids.push("cat_" + g);
    }
    return ids;
}

function nombreDeLogro(id) {
    if (id.startsWith("hito_")) {
        const m = MILESTONES.find(m => m.n === parseInt(id.slice(5)));
        return m ? `${m.emoji} ${m.nombre} (${m.n} elementos)` : id;
    }
    const g = id.slice(4);
    return `📁 Categoría completa: ${categoryNames[g] || g}`;
}

function mostrarToast(texto) {
    const cont = document.getElementById('toasts');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerText = texto;
    cont.appendChild(t);
    setTimeout(() => t.remove(), 4100);
}

function checkAchievements(silencioso = false) {
    const antes = new Set(getLogrosGuardados());
    const ahora = logrosActuales();
    const nuevos = ahora.filter(id => !antes.has(id));
    if (nuevos.length === 0) return;
    localStorage.setItem("alquimiaLogros", JSON.stringify(ahora));
    if (!silencioso) {
        nuevos.forEach((id, i) => {
            setTimeout(() => {
                mostrarToast(`🏆 ¡Logro desbloqueado! ${nombreDeLogro(id)}`);
                soundAchievement();
            }, 600 + i * 900);
        });
    }
}

function openAchievements() {
    document.getElementById('encModal').classList.add('open');
    document.getElementById('encTitle').innerText = "🏆 Logros";
    const n = unlockedElements.length;
    const conteo = contarPorCategoria();

    let hitosHTML = "";
    MILESTONES.forEach(m => {
        const logrado = n >= m.n;
        hitosHTML += `<div class="logro-fila ${logrado ? 'logrado' : ''}">
            <span>${logrado ? m.emoji : '🔒'} ${m.nombre}</span>
            <span class="logro-progreso">${Math.min(n, m.n)}/${m.n}${logrado ? ' ✓' : ''}</span>
        </div>`;
    });

    let catsHTML = "";
    const clavesOrdenadas = Object.keys(categoryTotals).sort((a, b) =>
        (categoryNames[a] || a).localeCompare(categoryNames[b] || b));
    clavesOrdenadas.forEach(g => {
        const x = conteo[g] || 0;
        const y = categoryTotals[g];
        if (x === 0) {
            catsHTML += `<div class="logro-fila"><span>🔒 Categoría por descubrir</span><span class="logro-progreso">0/${y}</span></div>`;
        } else {
            const completa = x === y;
            catsHTML += `<div class="logro-fila ${completa ? 'logrado' : ''}">
                <span>${completa ? '🏆' : '📁'} ${categoryNames[g] || g}</span>
                <span class="logro-progreso">${x}/${y}${completa ? ' ✓' : ''}</span>
            </div>`;
        }
    });

    document.getElementById('encBody').innerHTML = `
        <div class="enc-section-title">⭐ Hitos de descubrimiento</div>
        ${hitosHTML}
        <div class="enc-section-title">📚 Categorías (${Object.keys(conteo).filter(g => conteo[g] === categoryTotals[g]).length}/${Object.keys(categoryTotals).length} completas)</div>
        ${catsHTML}
    `;
    document.getElementById('encBody').scrollTop = 0;
}

// === REVELACIÓN DIVINA (descubrimiento estilo Doodle God) ===
const CITAS = [
    "«Todo fluye, nada permanece.» — Heráclito",
    "«Como es arriba, es abajo.» — Hermes Trismegisto",
    "«El agua es el principio de todas las cosas.» — Tales de Mileto",
    "«Todo está lleno de dioses.» — Tales de Mileto",
    "«La naturaleza no hace nada en vano.» — Aristóteles",
    "«De la nada, nada sale.» — Lucrecio",
    "«La dosis hace el veneno.» — Paracelso",
    "«Conócete a ti mismo.» — Oráculo de Delfos",
    "«El universo es cambio; la vida, opinión.» — Marco Aurelio",
    "«En cada cosa hay una parte de todo.» — Anaxágoras",
    "«El fuego vive la muerte del aire, y el aire la del fuego.» — Heráclito",
    "«Nada es; todo deviene.» — Heráclito",
    "«El mundo es un ser viviente.» — Platón",
    "«El amor y la discordia mueven los elementos.» — Empédocles",
    "«Lo seco se humedece, lo húmedo se seca.» — Heráclito",
    "«El sol es nuevo cada día.» — Heráclito"
];

let fxCola = [];
let fxActivo = false;

function playDiscoveryFx(newIds) {
    fxCola.push(...newIds);
    procesarFxCola();
}

function procesarFxCola() {
    if (fxActivo || fxCola.length === 0) return;
    fxActivo = true;
    const el = elementsDB[fxCola.shift()];
    const cita = CITAS[Math.floor(Math.random() * CITAS.length)];
    document.getElementById('discoveryFx').innerHTML = `
        <div class="dg-overlay" onclick="cerrarFx()" title="Toca para continuar">
            <div class="dg-rays"></div>
            <div class="dg-flash"></div>
            <div class="dg-centro">
                <div class="dg-emoji">${el.emoji}</div>
                <div class="dg-titulo">Elemento descubierto</div>
                <div class="dg-nombre">${el.name}</div>
                <div class="dg-cita">${cita}</div>
            </div>
        </div>`;
    procesarFxCola._timer = setTimeout(cerrarFx, 2400);
}

function cerrarFx() {
    clearTimeout(procesarFxCola._timer);
    document.getElementById('discoveryFx').innerHTML = '';
    fxActivo = false;
    procesarFxCola();
}

function combineElements() {
    const seleccionados = [slot1, slot2, slot3].filter(Boolean);
    if (seleccionados.length < 2) {
        showMessage("Necesitas al menos 2 elementos para combinar.", "orange");
        return;
    }
    const combinationKey = seleccionados.sort().join('+');
    const results = (recipes[combinationKey] || []).filter(r => elementsDB[r]);
    if (results.length > 0) {
        let discoveredNew = false;
        let generatedNames = [];
        let newIds = [];
        results.forEach(resultId => {
            if (elementsDB[resultId]) {
                const elInfo = elementsDB[resultId];
                generatedNames.push(`${elInfo.name} ${elInfo.emoji}`);
                if (!unlockedElements.includes(resultId)) {
                    unlockedElements.push(resultId);
                    newIds.push(resultId);
                    discoveredNew = true;
                }
            }
        });
        const resultText = generatedNames.join(" y ");
        if (discoveredNew) {
            showMessage(`✨ ¡Creaste: ${resultText}! ✨`, "#00f5d4");
            soundDiscover();
            playDiscoveryFx(newIds);
            document.body.style.backgroundColor = "#2a0a2a";
            setTimeout(() => document.body.style.backgroundColor = "var(--bg-color)", 300);
            saveProgress();
            document.getElementById('searchBar').value = "";
            renderInventory();
            checkAchievements();
        } else {
            showMessage(`Creaste ${resultText}, pero ya los tenías.`, "white");
            soundCombine();
        }
    } else {
        showMessage("Esos elementos no reaccionan...", "gray");
        soundFail();
    }
    slot1 = null;
    slot2 = null;
    slot3 = null;
    updateSlots();
}

// === HELPERS DEL ARRASTRE TÁCTIL ===
function slotBajoPunto(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el) return 0;
    if (el.closest('#slot1')) return 1;
    if (el.closest('#slot2')) return 2;
    if (el.closest('#slot3')) return 3;
    return 0;
}

function ponerEnSlot(idx, elementId) {
    if (idx === 1) slot1 = elementId;
    else if (idx === 2) slot2 = elementId;
    else if (idx === 3) slot3 = elementId;
    updateSlots();
}

function marcarSlotBajo(x, y) {
    const idx = slotBajoPunto(x, y);
    [1, 2, 3].forEach(n =>
        document.getElementById('slot' + n).classList.toggle('drag-over', idx === n));
}

function limpiarGestoTactil(btn) {
    if (btn._touch && btn._touch.ghost) btn._touch.ghost.remove();
    btn.classList.remove('drag-ready');
    btn._touch = null;
    [1, 2, 3].forEach(n =>
        document.getElementById('slot' + n).classList.remove('drag-over'));
}

// === ARRASTRAR Y SOLTAR EN LOS SLOTS ===
["slot1", "slot2", "slot3"].forEach((slotId, idx) => {
    const div = document.getElementById(slotId);
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', `Espacio de combinación ${idx + 1} (Enter para vaciar)`);
    div.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Delete' || e.key === 'Backspace') {
            e.preventDefault();
            clearSlot(idx + 1);
        }
    };
    div.ondragover = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        div.classList.add('drag-over');
    };
    div.ondragleave = () => div.classList.remove('drag-over');
    div.ondrop = (e) => {
        e.preventDefault();
        div.classList.remove('drag-over');
        const id = e.dataTransfer.getData('text/plain');
        if (elementsDB[id] && unlockedElements.includes(id)) {
            ponerEnSlot(idx + 1, id);
        }
    };
});

// === ENCICLOPEDIA ===
function openEncyclopedia(elementId = null) {
    document.getElementById('encModal').classList.add('open');
    if (elementId && unlockedElements.includes(elementId)) {
        showEncDetail(elementId);
    } else {
        renderEncIndex();
    }
}

function closeEncyclopedia() {
    document.getElementById('encModal').classList.remove('open');
}

document.getElementById('encModal').addEventListener('click', (e) => {
    if (e.target.id === 'encModal') closeEncyclopedia();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEncyclopedia();
});

function encChip(elementId) {
    const el = elementsDB[elementId];
    return `<span class="enc-chip" role="button" tabindex="0" aria-label="${el.name}"
        onclick="showEncDetail('${elementId}')"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();showEncDetail('${elementId}');}">${el.emoji} ${el.name}</span>`;
}

function renderEncIndex() {
    document.getElementById('encTitle').innerText = "📖 Enciclopedia";
    const sorted = [...unlockedElements].sort((a, b) => elementsDB[a].name.localeCompare(elementsDB[b].name));
    const chips = sorted.map(id => encChip(id)).join('');
    document.getElementById('encBody').innerHTML = `
        <input type="text" id="encSearch" class="enc-search" placeholder="Buscar en tus ${sorted.length} descubrimientos..." oninput="filterEncIndex()">
        <div id="encList">${chips}</div>
    `;
}

function filterEncIndex() {
    const term = document.getElementById('encSearch').value.toLowerCase();
    document.querySelectorAll('#encList .enc-chip').forEach(chip => {
        chip.style.display = chip.innerText.toLowerCase().includes(term) ? 'inline-flex' : 'none';
    });
}

function showEncDetail(elementId) {
    const el = elementsDB[elementId];
    document.getElementById('encTitle').innerText = "📖 Enciclopedia";
    const conocido = (id) => unlockedElements.includes(id);

    // Recetas que lo crean (solo si ya conoces ambos ingredientes)
    let creadoHTML = "";
    let creadoOcultas = 0;
    (recipesByResult[elementId] || []).forEach(r => {
        if (r.parts.every(conocido)) {
            creadoHTML += `<div class="enc-recipe">${r.parts.map(encChip).join(' + ')}</div>`;
        } else {
            creadoOcultas++;
        }
    });
    if (!recipesByResult[elementId]) {
        creadoHTML = `<div class="enc-none">Es un elemento primordial: no se crea, siempre existió. 🌟</div>`;
    } else if (creadoHTML === "") {
        creadoHTML = `<div class="enc-none">Aún no conoces sus ingredientes.</div>`;
    }
    if (creadoOcultas > 0) {
        creadoHTML += `<div class="enc-locked">🔒 ${creadoOcultas} receta(s) secreta(s) más para crearlo.</div>`;
    }

    // Recetas donde participa (solo si conoces al otro ingrediente y todos los resultados)
    let usosHTML = "";
    let usosOcultos = 0;
    (recipesByIngredient[elementId] || []).forEach(r => {
        const otros = otrosIngredientes(r.parts, elementId);
        if (otros.every(conocido) && r.results.every(conocido)) {
            const ingredientes = [encChip(elementId), ...otros.map(encChip)].join(' + ');
            const resultados = r.results.map(id => encChip(id)).join(' y ');
            usosHTML += `<div class="enc-recipe">${ingredientes} = ${resultados}</div>`;
        } else {
            usosOcultos++;
        }
    });
    if (usosHTML === "" && usosOcultos === 0) {
        usosHTML = `<div class="enc-none">No participa en ninguna combinación. Es un elemento final.</div>`;
    }
    if (usosOcultos > 0) {
        usosHTML += `<div class="enc-locked">🔒 ¡Este elemento aún esconde ${usosOcultos} combinación(es) por descubrir!</div>`;
    }

    document.getElementById('encBody').innerHTML = `
        <button class="btn btn-info enc-back" onclick="renderEncIndex()">← Volver al índice</button>
        <div class="enc-hero">
            <div class="enc-emoji">${el.emoji}</div>
            <h3>${el.name}</h3>
            <div class="enc-cat">${categoryNames[el.group] || "Otros"}</div>
        </div>
        <div class="enc-section-title">🧪 Se crea con</div>
        ${creadoHTML}
        <div class="enc-section-title">⚗️ Combinaciones conocidas</div>
        ${usosHTML}
    `;
    document.getElementById('encBody').scrollTop = 0;
}

// Iniciar
loadProgress();
renderInventory();
updateHintButtons();
document.getElementById('btnSound').innerText = soundOn ? "🔊" : "🔇";

// Mensaje inicial adaptado a pantallas táctiles (sin arrastrar ni clic derecho)
if (window.matchMedia("(pointer: coarse)").matches) {
    showMessage("¡Toca 2 elementos, o mantenlos pulsados y arrástralos! Quieto un momento = enciclopedia.");
}

// Sincronizar logros ya obtenidos sin mostrar toasts (ej. partidas antiguas)
checkAchievements(true);

// PWA: registrar el service worker (solo sobre http/https; en file:// no aplica)
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* sin conexión o no soportado */ });
}

    