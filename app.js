const screenStart = document.getElementById('screen-start')
const screenQuestion = document.getElementById('screen-question')
const screenResults = document.getElementById('screen-results')
const startButton = document.getElementById('start-button')
const startButtonBottom = document.getElementById('start-button-bottom')
const buttonOptionA = document.getElementById('button-option-A')
const buttonOptionB = document.getElementById('button-option-B')
const buttonOptionNONE = document.getElementById('button-option-none')
const buttonRedoQuiz = document.getElementById('button-redo')
const buttonRandomize = document.getElementById('button-randomize')
const burgerbutton = document.getElementById('burger-button')
const toplinks = document.getElementById('top-links')
startButton.addEventListener('click', startQuiz)
startButtonBottom.addEventListener('click', startQuizBottom)

let currentQuestion = 0;
let amountQuestion = 0;
let questionAmountOrg = 0;
let questionAmountDel = 0;
let questionAmountMod = 0;
let questionAmountLux = 0;
let questionAmountSer = 0;

let paramOrg = 0;
let paramDel = 0;
let paramMod = 0;
let paramLux = 0;
let paramSer = 0;
let paramArt = 0;
let paramPow = 0;
let paramCla = 0;
let paramInc = 0;
let paramFun = 0;

let parameterTier = 0;

let parameterFinalR = [0,0]
let parameterFinalH = [0,0]

let totalParameters = {
    totalOrg: 4,
    totalDel: 4,
    totalMod: 4,
    totalLux: 4,
    totalSer: 4
};

let answeredQuestions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let questionTextData = [
    "Your brand feels more comfortable working with its...",
    'How does your brand deliver important messages?',
    'On vacation, your brand prefers to be in the...',
    "Your brand's pet is a...",
    "Your brand would rather freshen up with a...",

    'On a date, your brand would rather go see a...',
    'Which movie genre does your brand prefer?',
    'Your brand would love playing the...',
    "When saluting friends, your brand prefers a...",
    "On your brand's desktop, there's always a jar with...",

    'What does your brand use to write reminders?',
    'Looking for inspiration, your brand digs into the...',
    "If your brand was a building, it would be a...",
    'If your brand was a tree, it would be a...',
    'Your brand would rather read a book about...',

    'When choosing clothes, your brand values mostly...',
    "Your brand can't celebrate without...",
    'Which present will make your brand happier?',
    'Day by day, your brand goes to work on a...',
    "Your brand's home is, most of all...",

    "Your brand can't throw a party without a...",
    "What's the TV program your brand can't stop watching?",
    "Your brand won't leave home without its...",
    "How does your brand break the ice?",
    "It's game night! Your brand can't wait to play..."
];

let buttonTextDataA = [
    'Hands',
    'Talk',
    'Countryside',
    'Dog',
    'Smoothie',

    'Play',
    'Romance',
    'Harp',
    'Hug',
    'Flowers',

    'Cellphone',
    'Future',
    'Windmill',
    'Bamboo',
    'Sci-fi',

    'Fashion',
    'Champagne',
    'Diamond',
    'Limousine',
    'Luxurious',

    'Waiter',
    'Documentary',
    'Tie',
    'Anecdotes',
    'Chess'
];

let buttonTextDataB = [
    'Mouse',
    'E-mail',
    'City',
    'Robot',
    'Soda',

    'Game',
    'Action',
    'Drums',
    'Fist bump',
    'Cactuses',

    'Notebook',
    'Past',
    'Castle',
    'Sequoia',
    'History',

    'Comfort',
    'Pizza',
    'Doughnut',
    'Metro',
    'Cozy',

    'Karaoke',
    'Sitcom',
    'Cute socks',
    'Jokes',
    'Charades'
];

var valueData = [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1]
];

let illustrationDataA = [
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-hands.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-talk.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-countryside.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-dog.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-smoothie.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-play.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-romance.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-harp.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-hug.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-flowers.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-cellphone.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-future.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-windmill.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-bamboo.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-sci-fi.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-fashion.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-champagne.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-diamond.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-limousine.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-luxurious.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-waiter.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-documentary.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-tie.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-anecdotes.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-chess.svg',
];

let illustrationDataB = [
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-mouse.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-e-mail.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-city.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-robot.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-soda.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-game.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-action.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-drums.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-fist.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-cactuses.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-notebook.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-past.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-castle.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-sequoia.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-history.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-comfort.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-pizza.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-donut.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-metro.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-cozy.svg',

    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-karaoke.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-sitcom.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-cute.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-jokes.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-answer-charades.svg',
];

var resultsTitle1 = [
    'Organic',
    'Delicate',
    'Disruptive',
    'Exclusive',
    'Serious',
    'High-tech',
    'Power',
    'Classic',
    'Inclusive',
    'Fun',
];

var resultsTitle2 = [
    'Organic',
    'Delicate',
    'Disruptive',
    'Exclusive',
    'Serious',
    'High-tech',
    'Power',
    'Classic',
    'Inclusive',
    'Fun',
];

let root = document.documentElement;




//Intro

var resultsIntro1Hi = [
    "Your brand is mostly organic. Like biting a freshly picked apple, all natural, no artificial flavor. Organicity can be translated visually by using handmade shapes and earthy colors.",
    "Your brand is mostly delicate. Light and sensible, caring and lovely. Delicateness can be translated visually by using pastel tones, blurry shapes and thin minimal filigrees.",
    "Your brand is mostly disruptive. Strives for novelty, breaking the norm and embracing the latest craze. Visually, aim for unevenness, contrasted compositions and varied shapes and mediums.",
    "Your brand is mostly exclusive. Desired by many, but only a chosen few can afford it. Clean, spacious and neatly arranged layouts are your domain. Gold, silver and royal blue, your allies.",
    "Your brand is mostly serious, professional and will get the job done. Seriousness can be translated visually by using horizontal compositions, tertiary dark colors and shades of gray.",
    "Your brand is mostly technologic, a precision brand-machine eager to impress by showing how advanced it is. Technology can be expressed visually by using black backgrounds with saturated details.",
    "Your brand is mostly powerful. Not a bird or a plane, it’s your brand! Visually, diagonal compositions, outlined letters, contrasting values and bold fonts will make your brand look stronger and dynamic.",
    "Your brand is mostly classic, does things the way it used to. Your logo is a reassuring sight of quality and tradition. Work with old illustrations, historical typefaces and non-saturated colors.",
    "Your brand is mostly inclusive, for all to enjoy, no matter your age or status, it is guaranteed to make your life easier! Visually, tend to primary colors, simple layouts and geometric shapes.",
    "Your brand is mostly fun. Orange you glad it brings a smile on everyone’s faces? Sometimes even a light chuckle! Go for primary colors on white, expressive fonts and maybe a fun character too!",
];

var resultsIntro1Mi = [
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly organic. Organicity can be translated visually by using handmade shapes and earthy colors.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly delicate. Delicateness can be translated visually by using pastel tones, blurry shapes and thin minimal filigrees.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly disruptive. Visually, aim for unevenness, contrasted compositions and varied shapes and mediums.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly exclusive. Clean, spacious and neatly arranged layouts are your domain. Gold, silver and royal blue, your allies.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly serious. Seriousness can be translated visually by using horizontal compositions, tertiary dark colors and shades of gray.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly technologic. Technology can be expressed visually by using black backgrounds with saturated details.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly powerful. Visually, diagonal compositions, outlined letters, contrasting values and bold fonts will make your brand look stronger and dynamic.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly classic. Work with old illustrations, historical typefaces and non-saturated colors.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly inclusive. Visually, tend to primary colors, simple layouts and geometric shapes.",
    "I couldn’t see any predominant parameter in your answers, but your brand feels mostly fun. Go for primary colors on white, expressive fonts and maybe a fun character too!",
];
var resultsIntro2Hi = [
    "Curiously, another strong facet of your brand is its organicity or natural feel. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its delicateness. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its disruptiveness or taste for novelty. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its exclusiveness. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its seriousness. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its taste for technology and precision. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its powerful might. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its traditional and classic approach. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its inclusiveness. You can blend both sides and create something unique!",
    "Curiously, another strong facet of your brand is its fun way of doing things. You can blend both sides and create something unique!",
];
var resultsIntro2Mi = [
    "A lesser facet of your brand is its organicity or natural feel. Adding an organic element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its delicateness. Adding a delicate element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its disruptiveness or taste for novelty. Adding a disruptive element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its exclusiveness. Adding a luxurious element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its seriousness. Adding a serious element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its taste for technology and precision. Adding a technologic element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its powerful might. Adding a powerful element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its traditional and classic approach. Adding a classic element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its inclusiveness. Adding an inclusive element will cause contrast and make your brand a little bit different, more interesting.",
    "A lesser facet of your brand is its fun way of doing things. Adding a fun element will cause contrast and make your brand a little bit different, more interesting.",
];



//Logo

var resultsInfoLogoHi = [
    'Irregular shapes that ape primitive ways of writing can make an organic-looking logo. Take inspiration from natural elements like fruits and leaves and experiment with finger paint, brushed ink or charcoal to achieve this look.',
    "Choose a very light font weight and give it plenty of space to make a delicate-looking logo. An ample wavy stroke will contrast with the font's shape, it can be abstract or figurative, depending on your needs.",
    "Using new graphic technology can lead to the creation of disruptive logos. New tools will make unusual, never seen before, shapes that can cause division and controversy about the boundaries of design. Strive for something never seen before!",
    "Monograms are made by overlapping letters to create a distinctive symbol. They have been used by royalty and bourgeoisie to indicate ownership of valuable items. If you're working on an exclusivity-centered brand, a monogram should be your logo.",
    "Serious logos are practical and matter-of-factly. Usually horizontal, grid-based and easy to read, they're optimized to be printed on stationery and can work on an empty canvas, a presentation card or a corporate folder.",
    'A logo for a technology-centric brand can be designed by using modular characters with sharp corners and abstract minimal representations of technologic concepts. Using a very thin font weight or reducing the height of the characters will also make it look lean.',
    'A powerful logo, in the sense of physical strength, takes inspiration from super hero movie titles and football team logos, has thick bulky characters with strong outlines and can be tilted or slanted to express dynamism and movement.',
    "Old roman or gothic serif typefaces are a great basis for classic-feel brand logos. The font must be chosen depending on the epoch that needs to be referenced. Other ornaments like horizontal lines and inner strokes will also convey an old fashioned sense of stability.",
    'Inclusive logos are simple and easy to remember, normally aided by a simple geometric shape or a dash. These logos have big letters and can be reproduced easily, anywhere. They can be read from far away and are visually pleasing to look at.',
    'Fun logos subvert expectations. They dance, wave, jump, have oversized characters (some of which are upside down) and may even break a few common design rules to create a sense of momentary oddness and twist expectations. Just for laughs!',
    "A bold Grotesque sans serif typeface such as Helvetica, Neue Haas or Franklin Gothic can easily make a neutral logo simply by tightly adjusting the letter spacing of the characters.",
];

var resultsInfoLogoMi = [
    'A natural logo has a little of heritage on its back, reminds you of old brands and seems a little naive at times. Thick serif fonts with rounded edges can convey this type of feel. Adding elements referencing natural elements is good too.',
    'A soft looking logo is delicate but compact and humble too. Modest serif fonts or regular serif fonts with modified details can be easily used for this type of logo. Although they tend to be very minimalistic, a sensible perk can be added too.',
    "A modern looking logo takes advantage of trends that are now established as part of the norm. They don't look extravagant or daring, instead, they feel like they're updated for today's market. A sans serif font paired with abstract rounded shapes is a very common way to design modern logos.",
    'A luxury logo has a slight remainder of an old, traditional logo but updated with the times. They have lots of space and look neatly ordered. Customized fonts can be very useful on a logo of this type, modified didones are welcome.',
    "A logo for a friendly business is still a serious logo on it's core, but it wants to feel a little closer to its client. Light fonts and abstract shapes, modern monograms, simplicity and clarity are a few of the elements that can be used to convey this feel.",
    "A logo with a synthetic feel can be expressed by cautiously using some technology tropes, such as dot matrixes or overgrown pixels. They're usually simple and use minimalistic fonts with a medium to large weight.",
    "Strong logos are simple and effective. They're made out of very thick, blocky fonts, little letter spacing and slight tilts to give them a certain dynamism or sense of speed.",
    "Vintage logos have an air of antiquity, but feel recent enough to be hip and perky. They may vary widely depending on the age they reference and, usually, they naively break a few typeface rules, which gives them a slight warm feel.",
    'A global logo is a logo thought to be used and understood all around the world. This type of logo is easy to modify if it needs to be translated and may include extra space for taglines to be added to them when necessary.',
    'A witty logo usually has a message, symbol or illustration hidden on it. When revealed, the reaction is usually positive and pleasing, which makes it memorable and unique too. Fun witty logos are usually simple, thick and clear.',
    "A bold Grotesque sans serif typeface such as Helvetica, Neue Haas or Franklin Gothic can easily make a neutral logo simply by tightly adjusting the letter spacing of the characters.",
];

var resultsLogoHi = [
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-organic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-delicate.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-disruptive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-luxury.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-serious.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-technologic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-strong.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-classic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-inclusive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-high-fun.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-neutral.svg'
];
var resultsLogoMi = [
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-organic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-delicate.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-disruptive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-luxury.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-serious.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-technologic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-strong.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-classic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-inclusive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-mild-fun.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-logo-neutral.svg'
];


//Color

var resultsInfoColorHi = [
    'A color palette for an organic-looking brand will remind of a natural landscape. Greens, browns and blues will give an earthy feeling. Light blue and clear tones will dominate the layout, while darker tones can be used for details.',
    'Delicate palettes use warm pastel colors. The lightest ones are used for backgrounds while the darker ones for details and paragraphs. To avoid aggresive unwanted contrast, never use absolute black or white with this type of palette.',
    'A disruptive palette breaks all conventionalities and tries new, bold things. Use highly saturated contrasting colors, black and white and freeform gradients to surprise and create strident effects. Limit your palette, though, to keep it recognizable.',
    'A color palette for an exclusive-looking brand makes use of colors traditionally tied to luxury. Royal blue or red wine for backgrounds and gold, silver and gray for details. Split the layout a little as possible, create big spaces of color instead.',
    'A color palette for a serious-looking brand will be composed mostly of tertiary colors that can be used as little highlights or separator areas. The rest of materials will work with white backgrounds and charcoal black text.',
    'The colors used on a coding console are automatically associated with technology. Black is used as background color and highlights in saturated colors or white. Gradients and grayscales ca be used to convey a more modern approach.',
    'A color palette for a powerful-looking brand uses highly contrasting colors. A dark semi-saturated color can work as background, while a very saturated highlight color splits it by half. White and gray will be used on the rest of the elements.',
    'A color palette for a classic-looking brand will be subtle, with mostly washed down tones. Imagine colors found in flags or coats of arms with its saturation divided by half and a way lower light value.',
    "A color palette thought for an inclusive brand makes use of very basic primary colors as a sure way to catch the viewer's eye. White and highlight colors are equally predominant and usually, the color areas are splitted evenly.",
    'A fun palette uses medium to high saturated colors that complement each other over a light background that makes them pop. Slight colorfull sprinkles over a white or beige background will create a playful and fun layout.',
    "A neutral palette uses black, white and a primary color as highlight, usually blue. These colors' functions on the layout can be exchanged. Grey can be added for an extra hierarchy layer.",
];

var resultsInfoColorMi = [
    'A coulour palette for a natural-looking brand uses slightly saturated tones found in nature. A lighter tone can be used as background color and a distictivly saturated color as highlight.',
    'Soft-looking palettes use slightly saturated hues of pastel colors with a darker tone for texts or titles. On a layout, the color areas can be split evenly and should contrast nicely between each other.',
    'A palette for a modern-looking brand will make use of white and a dark cold tone as background. A couple saturated colors will work as highlight and can be fused into a gradient.',
    'A luxurious palette uses contrasted pastel tones with a dark unsaturated and cold color that can be used as background on some layouts. Freeform gradients can work if used lightly.',
    'A friendly business palette uses white as background color and a darker tone for contrast. Many highlight colors can be added and used to diferentiate branches or services inside the brand, do not use them together in the same layout.',
    'A palette for a synthetic-looking brand will use a dark cold color as background and play with the lightness of the other highly saturated colors. Composition-wise, the layout can work even when split into diferent color sections.',
    'A palette for a strong-looking brand relies on the high contrast between dark background and a saturated highlight color. 70% of the composition will be backgroun color, while the other 30% will be white or highlight.',
    'Vintage palettes may use washed down colors to simulate age. Instead of white use either a dark or light color for the background. As highlight, add earthy tone like copper orange or tin yellow.',
    "A palette for a global brand usually makes use of easy to spot colors with high contrast, similar to those used on direction signals. On a layout, color areas will work even when split to create diferent sections.",
    "A witty palette makes use of a few complimentary colors to create playful contrast. Limit it to four or five tones, it may be hard to recognise if there's more! White or black can be added as background or text color if the hierarchy requires it.",
    "A neutral palette uses black, white and a primary color as highlight, usually blue. These colors' functions on the layout can be exchanged. Grey can be added for an extra hierarchy layer.",
];

var resultsColorHi = [
    ['#25404f','#8c8968','#b0d182','#dcf1f9'],
    ['#a98d84','#d8c9b9','#dfd2cb','#eae9e7'],
    ['#010101','#efb0f6','#9af939','#ffffff'],
    ['#12352f','#997c54','#6f7f72','#ccc6ba'],
    ['#0f2530','#732519','#af663e','#fbf7f6'],
    ['#0A0A0A','#a8a8a8','#87e83a','#ffffff'],
    ['#08194a','#ff0100','#dee1e9','#ffffff'],
    ['#392821','#195e97','#ad5145','#f4e5ae'],
    ['#0050a9','#e60a14','#ffef01','#ffffff'],
    ['#0988af','#41b149','#ffde17','#f1f1f1'],
    ['#191919','#6491f9','#dadfe8','#ffffff'],
];

var resultsColorMi = [
    ['#004346','#15807a','#ff6c4d','#fcdacf'],
    ['#feb29b','#527690','#cddcdf','#eeefea'],
    ['#231a6d','#fd2a65','#22cdff','#ffffff'],
    ['#2e394c','#c3a38c','#eddbc7','#ffffff'],
    ['#0b2644','#e57853','#62b7cb','#ffffff'],
    ['#160041','#0005ee','#d75544','#ffffff'],
    ['#232b3b','#4c5e7a','#ffd900','#ffffff'],
    ['#23303a','#47738e','#f9b264','#fbdae8'],
    ['#e21836','#015da8','#5aabe2','#ffffff'],
    ['#014751','#c5b6f1','#00d27f','#c6f221'],
    ['#191919','#6491f9','#dadfe8','#ffffff'],
];


//Font

var resultsInfoFontHi = [
    'Use an organic-looking font for headlines, look for fonts with details similar to leaves or blossoms with a certain hand-drawn quality to them. For paragraphs, use a sans serif font with little twig-like perks.',
    'For a delicate font pairing, use a classic looking serif with detailed soft traits on paragraphs and a contrasting thin geometric one with lots of spacing on headlines.',
    "A disruptive font pairing will contrast as highly as possible. Depending on the degree of disruptiveness you're aiming for, you can even use abstract fonts with a lower degree of readability for headlines.",
    'Exclusive-looking brands use font pairings conformed by a classic sharp display serif and a secondary classic book one with a higher degree of readability. Playing with both fonts weights will produce contrast when needed.',
    "A serious-looking brand will use a font pairing similar to a classic newspaper's. Headlines will be written with a bold sans serif grotesk while the paragraphs use a roman with a high degree of readability.",
    "Technology-centered brands can use modular square or hexagonal pixel-looking fonts as headlines, paired with a modern thin sans serif on paragraphs for contrast. Titles can be squeezed or trimmed for expressiveness' sake.",
    "Sans serifs with straight, thick traits make for great, powerful-looking font pairings. Headlines can be bold or condensed as long as its texture looks dense and tight. Tilting brief copy can also create an impression of dynamism and speed.",
    'Classic font pairings have headlines inspired in old display serif roman letters that use thick weights and a more simple humanist or grotesk sans serif for paragraphs to cause contrast.',
    'Inclusive-aimed brands use simple-looking, highly readable fonts like sans serifs or humanists with subtle touches of hand-drawn-looking details. Width contrast can be used to differentiate headers from paragraphs.',
    'Fun-looking brands choose unusually detailed header fonts with peculiar characters, which are often the center of attention on a composition. A secondary simple sans serif font can be used for paragraphs.',
    'A neutral-looking brand may use different thicknesses of the same font to tell headers and paragraphs apart.',
];

var resultsInfoFontMi = [
    'A slightly thick display serif font for headers and a simple sans serif for paragraphs will make a natural-looking brand font pairing. Ideally, the display font will have a few perky details to make it more memorable.',
    'A soft-looking brand will combine two thin fonts. One of them, a roman serif, will be used for headers while the other, a sans serif, will be used for longer texts or paragraphs.',
    'A quirky modular sans serif header will fit a modern-looking brand, even better if it is designed specifically for it. A highly readable secondary sans serif will be the choice for paragraphs.',
    'A luxury brand will use a notorious didone font with contrasting widths as header and a geometric futura-like for long texts and paragraphs. The more spacious the layout is, the better.',
    'In typographic terms, a friendly business look can be achieved by using a font paring of a medium thickness serif humanist for headlines and a simple sans serif secondary font for paragraphs.',
    'A friendly technologic feel can be achieved by using slightly modular fonts with odd, straight details on them or monospaced characters. A secondary, slightly geometric sans serif font can be used for paragraphs.',
    "A strong-looking brand can use a combination of two sans serif fonts. For the headlines, we'll use a slightly distinctive one, with subtle dynamic traits and thicker weight. The other will be simpler and used only for paragraphs.",
    'A vintage-looking brand can choose from many quirky old-school fonts. Art deco, slab serifs or egyptian fonts can work depending on the referenced period. A secondary, more austere sans serif font will do for paragraphs.',
    "A global scope brand needs highly readable fonts that include all the necessary characters for the languages it will be used with. Both fonts should be sans serif and readable from far away. Thickness can be used for contrasting purposes.",
    'A perky display font for headlines and a more humble one for paragraphs will work for a witty spirited brand. The headline can have unusual proportions with overly thick traits or exaggerated perks that will give it a fun personality.',
    'A neutral-looking brand may use different thicknesses of the same font to tell headers and paragraphs apart.',
];

var resultsFontHi = [
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-organic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-delicate.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-disruptive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-luxury.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-serious.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-technologic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-strong.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-classic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-inclusive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-high-fun.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-neutral.svg'
];
var resultsFontMi = [
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-organic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-delicate.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-disruptive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-luxury.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-serious.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-technologic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-strong.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-classic.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-inclusive.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-mild-fun.svg',
    'img/visualittle-svg/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-font-neutral.svg'
];


//Second

var resultsInfoSecondHi = [
    'Dented, flat shapes that may simulate landscapes are a versatile element that can be used on an organic-looking brand. These shapes can be placed differently to create different layouts or be used as masks for images.',
    'Overlaying suggestive shadows on your layout will make for a very delicate looking design. Generate them virtually or set a photographic session for a more authentic look. Make it seem lighter by giving lots of breathing space to the composition.',
    'Collage is disruptive by definition, blend elements of different style and origin, put them together to generate something new. Exaggerate contrast, distort images and play with unusual layouts.',
    'Perfectly ordered patterns are reminders of expensive wallpaper, furniture and architecture. Use them with wide empty spaces around to give an exclusive look to your brand.',
    "Orderly morphing lines are a serious-looking brand's obvious choice. Their abstractness can be interpreted as evolution, growth or progress. They look clean, constant and can be generated easily. Stick to one color for the lines.",
    "Bright particle elements on a black layout will make your brand look highly technologic. These are unconsciously linked to advanced-looking UI's in fiction. Use 3D software to simulate the depth effect, with simple camera rotations you'll easily get many more composition options.",
    'Diagonally broken layouts will help create a sense of dynamism and movement for your powerful-looking brand. They can be easily generated and used as masks for images. Combine them with cursive, bold, sans-serif fonts to maximize the effect.',
    'Renaissance-inspired illustrations add richness and detail to a classic brand. Use them as little background details on wine labels or restaurant menus. If using full color illustrations, reduce the contrast and use them sparingly, only one per layout.',
    "Inclusive brands often have mascots of their own, they're memorable and apt for all ages. A 3D mascot will look current and, if done properly, can be easy to animate to create little promotional sketches.",
    "A fun brand will have a cast of colorful mascots doing cute stuff while interacting with the layout and products. Depending on the brand's tone, they can be more abstract or more figurative.",
    'Swiss design principles can be used to create unbiased, neutral and clean layouts, which can be turned into handy templates. It is a practical starting point for a brand that can slowly grow and develop its own visual identity.',
];

var resultsInfoSecondMi = [
    'Matisse inspired shapes will give your brand an honest, natural feel. Achieve this look by illustrating elements simply, as if they had been quickly cut from a piece of paper. Arrange them organically through the composition or use them as masks for images.',
    'Thin line, delicate, tatoo-like illustrations will work perfectly on a soft-looking brand. Lower the color contrast, some elements in the composition can be just half-suggested. Add visual variety by using different kinds of stroke, like brushes or dotted lines.',
    'Modern-looking brands often take inspiration from dadaist poem compositions. Message and typography are the sole protagonists here. Tweak the bare distance, size and rotation to generate tension between objects in the composition.',
    'Keep the minimum bare elements needed in your composition and add a big, spacious freeform gradient on the background to make your layout look refreshing and luxurious. If you have the chance, using foil reflective effects on print will emphasize this effect.',
    'A serious-but-friendly looking brand can use abstract logos or geometric illustrations to help differentiate visually its many services or branches. It is important to define a style and stick to it. The icons have to look different from each other but be visually related too.',
    "Gradient colored, neatly bent, uniform strokes will give your brand a synthetic yet approachable feel. They're useful for creating varied layouts and can be combined with photography elements to create effective images for promotional purposes.",
    "Repetition can be used to create vibration and movement, track-like thick lines can work well on a strong-looking brand. They can be easily made and produce different looking layouts. Prevent excessive saturation by sticking to just two contrasting colors.",
    'Vintage illustrations will give a quirky, distinct air of authenticity to your brand. Add some little imperfections, they will make them look more convincing and sincere. Use them as characters, product illustrations or visual aid for abstract concepts.',
    'Geometric shapes are a great asset to generate varied but uniform-looking layouts. For a global scope brand, simple squares, rectangles and circles will work efficiently as clearly distinguishable containers for text or masks for images.',
    "Stickers can be a very versatile secondary element for a witty brand, they are easy to apply and can be effortlessly made into promotional material. They're also very fun to have in your physical corporate materials too!",
    'Swiss design principles can be used to create unbiased, neutral and clean layouts, which can be turned into handy templates. It is a practical starting point for a brand that can slowly grow and develop its own visual identity.',
];

var resultsSecondHi = [
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-organic.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-delicate.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-disruptive.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-luxury.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-serious.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-technologic.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-strong.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-classic.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-inclusive.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-high-fun.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-neutral.webp'
];
var resultsSecondMi = [
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-organic.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-delicate.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-disruptive.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-luxury.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-serious.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-technologic.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-strong.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-classic.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-inclusive.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-mild-fun.webp',
    'img/visualittle-webp/visualittle-branding-visual-identity-graphic-design-quiz-ramon-bosch-secondary-element-neutral.webp'
];


buttonOptionA.addEventListener('click', chooseOptionA)
buttonOptionB.addEventListener('click', chooseOptionB)
buttonOptionNONE.addEventListener('click', chooseOptionNONE)
buttonRandomize.addEventListener('click', randomize)



const toggleDarkMode = document.getElementById('toggle-dark-mode')
toggleDarkMode.addEventListener('click', toggleTheme)

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'style-visualittle.css') {
        theme.setAttribute('href', 'style-visualittle-dark.css');
    } else {
        theme.setAttribute('href', 'style-visualittle.css');
    }
}

function startQuiz() {
    if (amountQuestion === 0) {
        screenStart.classList.add('hide');
        startButtonBottom.classList.add('hide');
        screenQuestion.classList.remove('hide');
        root.style.setProperty('--main-color', "#ecce92");
    }
    if (amountQuestion < 20) {
        var correctQuestionNumber = false;
        while (correctQuestionNumber !== true) {
            currentQuestion = Math.floor(Math.random() * 25);
            if (currentQuestion >= 0 && currentQuestion <= 4 && questionAmountOrg !== 4 && answeredQuestions[currentQuestion] === 0) {
                correctQuestionNumber = true;
                answeredQuestions[currentQuestion] = 1;
                questionAmountOrg++;
                questionAmountLux, questionAmountSer;
                setAnswers();
                break;
            } else if (currentQuestion >= 5 && currentQuestion <= 9 && questionAmountDel !== 4 && answeredQuestions[currentQuestion] === 0) {
                correctQuestionNumber = true;
                answeredQuestions[currentQuestion] = 1;
                questionAmountDel++;
                questionAmountLux, questionAmountSer;
                setAnswers();
                break;
            } else if (currentQuestion >= 10 && currentQuestion <= 14 && questionAmountMod !== 4 && answeredQuestions[currentQuestion] === 0) {
                correctQuestionNumber = true;
                answeredQuestions[currentQuestion] = 1;
                questionAmountMod++;
                questionAmountLux, questionAmountSer;
                setAnswers();
                break;
            } else if (currentQuestion >= 15 && currentQuestion <= 19 && questionAmountLux !== 4 && answeredQuestions[currentQuestion] === 0) {
                correctQuestionNumber = true;
                answeredQuestions[currentQuestion] = 1;
                questionAmountLux++;
                questionAmountLux, questionAmountSer;
                setAnswers();
                break;
            } else if (currentQuestion >= 20 && currentQuestion <= 24 && questionAmountSer !== 4 && answeredQuestions[currentQuestion] === 0) {
                correctQuestionNumber = true;
                answeredQuestions[currentQuestion] = 1;
                questionAmountSer++;
                questionAmountLux, questionAmountSer;
                setAnswers();
                break;
            }
        }

        function setAnswers() {
            document.getElementById("buttonTextA").innerHTML = buttonTextDataA[currentQuestion];
            document.getElementById("buttonTextB").innerHTML = buttonTextDataB[currentQuestion];
            document.getElementById("questionText").innerHTML = questionTextData[currentQuestion];
            document.getElementById('percent-progress-top').style.width = ((amountQuestion + 1) * 5) + "%";
            document.getElementById('percent-progress-number').innerHTML = `Question ${amountQuestion + 1} of 20`;
            document.getElementById("buttonIllustrationA").src = illustrationDataA[currentQuestion];
            document.getElementById("buttonIllustrationB").src = illustrationDataB[currentQuestion];
            amountQuestion++
            let randBool = Math.random() < 0.5;
            if (randBool < 0.5) {
                document.getElementById('sectionButtonsFrame').style.flexDirection = 'row';
            } else {
                document.getElementById('sectionButtonsFrame').style.flexDirection = 'row-reverse';
            }

        }
        
    } else {
        screenQuestion.classList.add('hide')
        screenResults.classList.remove('hide')
        root.style.setProperty('--main-color', "#aacea0");
        switch (totalParameters.totalOrg) {
            case 0: paramOrg = 0; paramArt = 3; break;
            case 1: paramOrg = 0; paramArt = 2; break;
            case 2: paramOrg = 0; paramArt = 2; break;
            case 3: paramOrg = 0; paramArt = 1; break;
            case 4: paramOrg = 0; paramArt = 0; break;
            case 5: paramOrg = 1; paramArt = 0; break;
            case 6: paramOrg = 2; paramArt = 0; break;
            case 7: paramOrg = 2; paramArt = 0; break;
            case 8: paramOrg = 3; paramArt = 0; break;
        }
        switch (totalParameters.totalDel) {
            case 0: paramDel = 0; paramPow = 3; break;
            case 1: paramDel = 0; paramPow = 2; break;
            case 2: paramDel = 0; paramPow = 2; break;
            case 3: paramDel = 0; paramPow = 1; break;
            case 4: paramDel = 0; paramPow = 0; break;
            case 5: paramDel = 1; paramPow = 0; break;
            case 6: paramDel = 2; paramPow = 0; break;
            case 7: paramDel = 2; paramPow = 0; break;
            case 8: paramDel = 3; paramPow = 0; break;
        }
        switch (totalParameters.totalMod) {
            case 0: paramMod = 0; paramCla = 3; break;
            case 1: paramMod = 0; paramCla = 2; break;
            case 2: paramMod = 0; paramCla = 2; break;
            case 3: paramMod = 0; paramCla = 1; break; 
            case 4: paramMod = 0; paramCla = 0; break; 
            case 5: paramMod = 1; paramCla = 0; break; 
            case 6: paramMod = 2; paramCla = 0; break; 
            case 7: paramMod = 2; paramCla = 0; break; 
            case 8: paramMod = 3; paramCla = 0; break;
        }
        switch (totalParameters.totalLux) {
            case 0: paramLux = 0; paramInc = 3; break; 
            case 1: paramLux = 0; paramInc = 2; break; 
            case 2: paramLux = 0; paramInc = 2; break; 
            case 3: paramLux = 0; paramInc = 1; break; 
            case 4: paramLux = 0; paramInc = 0; break; 
            case 5: paramLux = 1; paramInc = 0; break; 
            case 6: paramLux = 2; paramInc = 0; break; 
            case 7: paramLux = 2; paramInc = 0; break; 
            case 8: paramLux = 3; paramInc = 0; break;
        }
        switch (totalParameters.totalSer) {
            case 0: paramSer = 0; paramFun = 3; break; 
            case 1: paramSer = 0; paramFun = 2; break; 
            case 2: paramSer = 0; paramFun = 2; break; 
            case 3: paramSer = 0; paramFun = 1; break; 
            case 4: paramSer = 0; paramFun = 0; break; 
            case 5: paramSer = 1; paramFun = 0; break; 
            case 6: paramSer = 2; paramFun = 0; break; 
            case 7: paramSer = 2; paramFun = 0; break; 
            case 8: paramSer = 3; paramFun = 0; break;
        }
        
        document.getElementById('percent-progress-org').style.width = ((paramOrg * 32) + 4) + "%";
        document.getElementById('percent-progress-del').style.width = ((paramDel * 32) + 4) + "%";
        document.getElementById('percent-progress-mod').style.width = ((paramMod * 32) + 4) + "%";
        document.getElementById('percent-progress-lux').style.width = ((paramLux * 32) + 4) + "%";
        document.getElementById('percent-progress-ser').style.width = ((paramSer * 32) + 4) + "%";
        document.getElementById('percent-progress-art').style.width = ((paramArt * 32) + 4) + "%";
        document.getElementById('percent-progress-pow').style.width = ((paramPow * 32) + 4) + "%";
        document.getElementById('percent-progress-cla').style.width = ((paramCla * 32) + 4) + "%";
        document.getElementById('percent-progress-inc').style.width = ((paramInc * 32) + 4) + "%";
        document.getElementById('percent-progress-fun').style.width = ((paramFun * 32) + 4) + "%";
        let allParameters = [paramOrg,paramDel,paramMod,paramLux,paramSer,paramArt,paramPow,paramCla,paramInc,paramFun]
        let parameterHi = 0
        let parameterMi = 0
        let parameterLo = 0
        let parameterNull = 0

        for (let i = 0; i < 10; i += 1){
            if (allParameters[i] === 3){
                parameterHi++
            } else if (allParameters[i] === 2){
                parameterMi++
            } else if (allParameters[i] === 1){
                parameterLo++
            } else {
                parameterNull++
            }
        }
        for (let i = 0; i < 2; i += 1){
            if (parameterHi === 0){
                if (parameterMi === 0){
                    if (parameterLo === 0){
                        parameterFinalH[i] = 0;
                        parameterFinalR[i] = 10;
                    } else {
                        parameterLo--
                        parameterTier = 1;
                        parameterFinalH[i] = 1;
                        chooseParameter();
                        parameterFinalR[i] = paramPrev;
                    }
                } else {
                    parameterMi--
                    parameterTier = 2;
                    parameterFinalH[i] = 2;
                    chooseParameter();
                    parameterFinalR[i] = paramPrev;
                }
            } else {
                parameterHi--
                parameterTier = 3;
                parameterFinalH[i] = 3;
                chooseParameter();
                parameterFinalR[i] = paramPrev;
            }
        }
        
        var resultsRandomFrequency = [0,0,0,0];

        if (parameterFinalH[0] === parameterFinalH[1]) {
            resultsRandomFrequency[0] = 0;
            resultsRandomFrequency[1] = 0;
            resultsRandomFrequency[2] = 1;
            resultsRandomFrequency[3] = 1;

        } else {
            resultsRandomFrequency[0] = 0;
            resultsRandomFrequency[1] = 0;
            resultsRandomFrequency[2] = 0;
            resultsRandomFrequency[3] = 1;
        }
        
        let decidedLogo = 0;
        let decidedColor = 0;
        let decidedFonts = 0;
        let decidedSecond = 0;
        let currentDecision = 0;

        for (let i = 0; i < 4; i += 1){
            makeNewDecision = true;
            while (makeNewDecision = true) {

                currentDecision = Math.floor(Math.random() * 4);

                if (currentDecision === 0 && decidedLogo === 0){

                    if (resultsRandomFrequency[i] === 0){
                        

                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoLogo").innerHTML = resultsInfoLogoHi[parameterFinalR[0]];
                            document.getElementById("resultsDivLogo").src = resultsLogoHi[parameterFinalR[0]];
                            makeNewDecision = false;
                            decidedLogo++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoLogo").innerHTML = resultsInfoLogoMi[parameterFinalR[0]];
                            document.getElementById("resultsDivLogo").src = resultsLogoMi[parameterFinalR[0]];
                            makeNewDecision = false;
                            decidedLogo++;
                            break;

                        }

                    } else {
                        

                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoLogo").innerHTML = resultsInfoLogoHi[parameterFinalR[1]];
                            document.getElementById("resultsDivLogo").src = resultsLogoHi[parameterFinalR[1]];
                            makeNewDecision = false;
                            decidedLogo++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoLogo").innerHTML = resultsInfoLogoMi[parameterFinalR[1]];
                            document.getElementById("resultsDivLogo").src = resultsLogoMi[parameterFinalR[1]];
                            makeNewDecision = false;
                            decidedLogo++;
                            break;

                        }

                    }

                } else if (currentDecision === 1 && decidedColor === 0){

                    if (resultsRandomFrequency[i] === 0){
                        
                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoColor").innerHTML = resultsInfoColorHi[parameterFinalR[0]];
                            document.getElementById("resultsDivColor1").style.backgroundColor = resultsColorHi[parameterFinalR[0]][0];
                            document.getElementById("resultsDivColor2").style.backgroundColor = resultsColorHi[parameterFinalR[0]][1];  
                            document.getElementById("resultsDivColor3").style.backgroundColor = resultsColorHi[parameterFinalR[0]][2];  
                            document.getElementById("resultsDivColor4").style.backgroundColor = resultsColorHi[parameterFinalR[0]][3];
                            makeNewDecision = false;
                            decidedColor++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoColor").innerHTML = resultsInfoColorMi[parameterFinalR[0]];
                            document.getElementById("resultsDivColor1").style.backgroundColor = resultsColorMi[parameterFinalR[0]][0];
                            document.getElementById("resultsDivColor2").style.backgroundColor = resultsColorMi[parameterFinalR[0]][1];  
                            document.getElementById("resultsDivColor3").style.backgroundColor = resultsColorMi[parameterFinalR[0]][2];  
                            document.getElementById("resultsDivColor4").style.backgroundColor = resultsColorMi[parameterFinalR[0]][3];
                            makeNewDecision = false;
                            decidedColor++;
                            break;

                        }

                    } else {
                        
                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoColor").innerHTML = resultsInfoColorHi[parameterFinalR[1]];
                            document.getElementById("resultsDivColor1").style.backgroundColor = resultsColorHi[parameterFinalR[1]][0];
                            document.getElementById("resultsDivColor2").style.backgroundColor = resultsColorHi[parameterFinalR[1]][1];  
                            document.getElementById("resultsDivColor3").style.backgroundColor = resultsColorHi[parameterFinalR[1]][2];  
                            document.getElementById("resultsDivColor4").style.backgroundColor = resultsColorHi[parameterFinalR[1]][3];
                            makeNewDecision = false;
                            decidedColor++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoColor").innerHTML = resultsInfoColorMi[parameterFinalR[1]];
                            document.getElementById("resultsDivColor1").style.backgroundColor = resultsColorMi[parameterFinalR[1]][0];
                            document.getElementById("resultsDivColor2").style.backgroundColor = resultsColorMi[parameterFinalR[1]][1];  
                            document.getElementById("resultsDivColor3").style.backgroundColor = resultsColorMi[parameterFinalR[1]][2];  
                            document.getElementById("resultsDivColor4").style.backgroundColor = resultsColorMi[parameterFinalR[1]][3];
                            makeNewDecision = false;
                            decidedColor++;
                            break;

                        }

                    }


                } else if (currentDecision === 2 && decidedFonts === 0){

                    if (resultsRandomFrequency[i] === 0){
                        
                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoFont").innerHTML = resultsInfoFontHi[parameterFinalR[0]];
                            document.getElementById("resultsDivFont").src = resultsFontHi[parameterFinalR[0]];
                            makeNewDecision = false;
                            decidedFonts++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoFont").innerHTML = resultsInfoFontMi[parameterFinalR[0]];
                            document.getElementById("resultsDivFont").src = resultsFontMi[parameterFinalR[0]];
                            makeNewDecision = false;
                            decidedFonts++;
                            break;

                        }

                    } else {
                        
                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoFont").innerHTML = resultsInfoFontHi[parameterFinalR[1]];
                            document.getElementById("resultsDivFont").src = resultsFontHi[parameterFinalR[1]];
                            makeNewDecision = false;
                            decidedFonts++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoFont").innerHTML = resultsInfoFontMi[parameterFinalR[1]];
                            document.getElementById("resultsDivFont").src = resultsFontMi[parameterFinalR[1]];
                            makeNewDecision = false;
                            decidedFonts++;
                            break;

                        }

                    }

                } else if (currentDecision === 3 && decidedSecond === 0){

                    if (resultsRandomFrequency[i] === 0){
                        
                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoSecond").innerHTML = resultsInfoSecondHi[parameterFinalR[0]];
                            document.getElementById("resultsDivSecond").src = resultsSecondHi[parameterFinalR[0]];
                            makeNewDecision = false;
                            decidedSecond++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoSecond").innerHTML = resultsInfoSecondMi[parameterFinalR[0]];
                            document.getElementById("resultsDivSecond").src = resultsSecondMi[parameterFinalR[0]];
                            makeNewDecision = false;
                            decidedSecond++;
                            break;

                        }

                    } else {
                        
                        if (parameterFinalH[resultsRandomFrequency[i]] === 3){

                            document.getElementById("resultsDivInfoSecond").innerHTML = resultsInfoSecondHi[parameterFinalR[1]];
                            document.getElementById("resultsDivSecond").src = resultsSecondHi[parameterFinalR[1]];
                            makeNewDecision = false;
                            decidedSecond++;
                            break;

                        } else {

                            document.getElementById("resultsDivInfoSecond").innerHTML = resultsInfoSecondMi[parameterFinalR[1]];
                            document.getElementById("resultsDivSecond").src = resultsSecondMi[parameterFinalR[1]];
                            makeNewDecision = false;
                            decidedSecond++;
                            break;

                        }

                    }
                }
            }
        }
        function applyResults() {
            if (parameterFinalH[0] === 3){
                if (parameterFinalH[1] === 3){
                    document.getElementById("resultsDivHeader").innerHTML = resultsTitle1[parameterFinalR[0]] + ' ' + resultsTitle1[parameterFinalR[1]];
                    document.getElementById("resultsDivIntro1").innerHTML = resultsIntro1Hi[parameterFinalR[0]];
                    document.getElementById("resultsDivIntro2").innerHTML = resultsIntro2Hi[parameterFinalR[1]];

                } else if (parameterFinalH[1] === 2 || parameterFinalH[1] === 1){
                    document.getElementById("resultsDivHeader").innerHTML = resultsTitle1[parameterFinalR[0]] + ' ' + resultsTitle2[parameterFinalR[1]];
                    document.getElementById("resultsDivIntro1").innerHTML = resultsIntro1Hi[parameterFinalR[0]];
                    document.getElementById("resultsDivIntro2").innerHTML = resultsIntro2Mi[parameterFinalR[1]];
                } else if (parameterFinalH[1] === 0){
                    document.getElementById("resultsDivHeader").innerHTML = resultsTitle1[parameterFinalR[0]] + ' Neutral';
                    document.getElementById("resultsDivIntro1").innerHTML = resultsIntro1Hi[parameterFinalR[0]];
                    document.getElementById("resultsDivIntro2").innerHTML = "Also, adding a neutral element will help you to highlight the rest.";
                }
            } else if (parameterFinalH[0] === 2 || parameterFinalH[0] === 1){
                if (parameterFinalH[1] === 2 || parameterFinalH[1] === 1){
                    document.getElementById("resultsDivHeader").innerHTML = resultsTitle2[parameterFinalR[0]] + ' ' + resultsTitle2[parameterFinalR[1]];
                    document.getElementById("resultsDivIntro1").innerHTML = resultsIntro1Mi[parameterFinalR[0]];
                    document.getElementById("resultsDivIntro2").innerHTML = resultsIntro2Mi[parameterFinalR[1]];
                } else if (parameterFinalH[1] === 0){
                    document.getElementById("resultsDivHeader").innerHTML = resultsTitle2[parameterFinalR[0]] + ' Neutral';
                    document.getElementById("resultsDivIntro1").innerHTML = resultsIntro1Mi[parameterFinalR[0]];
                    document.getElementById("resultsDivIntro2").innerHTML = "Also, adding a neutral element will help you to highlight the rest.";
                }
            } else if (parameterFinalH[0] === 0){
                document.getElementById("resultsDivHeader").innerHTML = 'Absolute Neutral';
                document.getElementById("resultsDivIntro1").innerHTML = "Hmmm. I really couldn't come to a clear conclusion about what your brand should look like. A neutral look is a good place to start, you can evolve from there and make it your own.";
                document.getElementById("resultsDivIntro2").innerHTML = " ";
            }
        }
        applyResults()
    }
};

function chooseOptionA() {
    totalParameters.totalOrg += valueData[currentQuestion][0];
    totalParameters.totalDel += valueData[currentQuestion][1];
    totalParameters.totalMod += valueData[currentQuestion][2];
    totalParameters.totalLux += valueData[currentQuestion][3];
    totalParameters.totalSer += valueData[currentQuestion][4];
    startQuiz();

};

function chooseOptionB() {
    totalParameters.totalOrg -= valueData[currentQuestion][0];
    totalParameters.totalDel -= valueData[currentQuestion][1];
    totalParameters.totalMod -= valueData[currentQuestion][2];
    totalParameters.totalLux -= valueData[currentQuestion][3];
    totalParameters.totalSer -= valueData[currentQuestion][4];
    startQuiz();

};

function chooseOptionNONE() {
    startQuiz();
};

function redoQuiz() {
    location.reload();
}

var paramPrev = 12;
var resultNum = 0;

function chooseParameter() {
    var correctParameter=false;
    let currentParameter=0;
    resultNum = resultNum++;
    while (correctParameter !==true) {
        currentParameter=Math.floor(Math.random() * 10);
        if (currentParameter===0 && paramOrg===parameterTier && paramPrev !== 0) {
            correctParameter=true;
            paramPrev = 0;
            
        }
        else if (currentParameter===1 && paramDel===parameterTier && paramPrev !== 1) {
            correctParameter=true;
            paramPrev = 1;
            
        }
        else if (currentParameter===2 && paramMod===parameterTier && paramPrev !== 2) {
            correctParameter=true;
            paramPrev = 2;
            
        }
        else if (currentParameter===3 && paramLux===parameterTier && paramPrev !== 3) {
            correctParameter=true;
            paramPrev = 3;
            
        }
        else if (currentParameter===4 && paramSer===parameterTier && paramPrev !== 4) {
            correctParameter=true;
            paramPrev = 4;
            
        }
        else if (currentParameter===5 && paramArt===parameterTier && paramPrev !== 5) {
            correctParameter=true;
            paramPrev = 5;
            
        }
        else if (currentParameter===6 && paramPow===parameterTier && paramPrev !== 6) {
            correctParameter=true;
            paramPrev = 6;
            
        }
        else if (currentParameter===7 && paramCla===parameterTier && paramPrev !== 7) {
            correctParameter=true;
            paramPrev = 7;
            
        }
        else if (currentParameter===8 && paramInc===parameterTier && paramPrev !== 8) {
            correctParameter=true;
            paramPrev = 8;
            
        }
        else if (currentParameter===9 && paramFun===parameterTier && paramPrev !== 9) {
            correctParameter=true;
            paramPrev = 9;
            
        }
    }
}

function randomize() {
    startQuiz();
    document.getElementById('scrollStop').scrollIntoView();
}

function startQuizBottom() {
    startQuiz();
    window.scrollTo(0,0);
}