let buttonStart1 = document.querySelector(`#buttonStart1`);
buttonStart1.addEventListener("click", () => startQuiz(letters1));
let buttonStart2 = document.querySelector(`#buttonStart2`);
buttonStart2.addEventListener("click", () => startQuiz(letters2));
let buttonStart3 = document.querySelector(`#buttonStart3`);
buttonStart3.addEventListener("click", () => startQuiz(letters3));
let buttonProvinces = document.querySelector(`#buttonProvinces`);
buttonProvinces.addEventListener("click", () => startQuiz(provinces));
let buttonConsonants = document.querySelector(`#buttonConsonants`);
buttonConsonants.addEventListener("click", () => prepareConsonantQuiz())
let buttonVowels = document.querySelector("#buttonVowels");
buttonVowels.addEventListener("click", () => prepareVowelQuiz())
let buttonAllLetters = document.querySelector("#buttonAll");
buttonAllLetters.addEventListener("click", () => startQuiz(letters1.concat(letters2).concat(letters3)))
let buttonShow = document.querySelector("#buttonShow");
buttonShow.addEventListener('click', () => showAnswer())
let buttonNext = document.querySelector("#buttonNext");
buttonNext.addEventListener('click', () => showNext())
let buttonAbbreviations = document.querySelector("#buttonAbbreviations");
buttonAbbreviations.addEventListener('click', () => startQuiz(provincesAbb))

let letters1 = [
    {
        thai: 'ม',
        latin: 'm',
        isVowel: false,
    },
    {
        thai: 'น',
        latin: 'n',
        isVowel: false
    },
    {
        thai: 'า',
        latin: "a",
        note: "long sound",
        isVowel: true
    },
    {
        thai: 'ง',
        latin: "ng",
        isVowel: false
    },
    {
        thai: 'ย',
        latin: "y",
        note: "At end of syllable: n",
        isVowel: false
    },
    {
        thai: 'ว',
        latin: "w",
        isVowel: false
    },
    {
        thai: 'ก',
        latin: 'k',
        isVowel: false
    },
    {
        thai: 'ด',
        latin: 'd',
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: 'บ',
        latin: 'b',
        note: "At end of syllable: p",
        isVowel: false
    },
    {
        thai: '◌ี',
        latin: 'i',
        note: "long sound",
        isVowel: true
    },
    {
        thai: 'ช',
        latin: "ch",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: 'ซ',
        latin: "s",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: '◌ะ | ◌ั◌',
        latin: "a",
        note: "short sound",
        isVowel: true
    },
    {
        thai: '◌ิ',
        latin: "i",
        note: "short sound",
        isVowel: true
    },
    {
        thai: 'พ',
        latin: "ph",
        note: "At end of syllable: p",
        isVowel: false
    },
    {
        thai: 'ฟ',
        latin: "f",
        note: "At end of syllable: p",
        isVowel: false
    },
    {
        thai: '◌ุ',
        latin: "u",
        note: "short sound",
        isVowel: true
    },
    {
        thai: '◌ู',
        latin: "u",
        note: "long sound",
        isVowel: true
    },
    {
        thai: 'ค',
        latin: "kh",
        note: "At end of syllable: k",
        isVowel: false
    },
    {
        thai: "◌ึ",
        latin: "ue",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "◌ื",
        latin: "ue",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "ท",
        latin: "th",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: "ฮ",
        latin: "h",
        isVowel: false
    },
    {
        thai: "เ◌",
        latin: "e",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "เ◌ะ | เ◌็◌",
        latin: "e",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "ร",
        latin: "r",
        note: "At end of syllable: n",
        isVowel: false
    },
    {
        thai: "ล",
        latin: "l",
        note: "At end of syllable: n",
        isVowel: false
    },
    {
        thai: "แ◌ะ | แ◌็◌",
        latin: "ae",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "แ◌",
        latin: "ae",
        note: "long sound",
        isVowel: true
    }
]
let letters2 = [
    {
        thai: "จ",
        latin: "ch",
        note: "At end of syllable: t",
        isVowel: false,
    },
    {
        thai: "ต",
        latin: "t",
        isVowel: false
    },
    {
        thai: "ป",
        latin: "p",
        isVowel: false
    },
    {
        thai: "โ◌ะ",
        latin: "o",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "โ◌",
        latin: "o",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "เ◌า",
        latin: "ao",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "ไ◌ | ใ◌",
        latin: "ai",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "ข",
        latin: "kh",
        note: "At end of syllable: k",
        isVowel: false
    },
    {
        thai: "ฉ",
        latin: "ch",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: "เ◌ียะ",
        latin: "ia",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "เ◌ีย",
        latin: "ia",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "ศ",
        latin: "s",
        note: "At end of syllable: t",
        isVowel: true
    },
    {
        thai: "ษ",
        latin: "s",
        note: "At end of syllable: t",
        isVowel: true
    },
    {
        thai: "ส",
        latin: "s",
        note: "At end of syllable: t",
        isVowel: true
    },
    {
        thai: "เ◌อะ",
        latin: "oe",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "เ◌อ | เ◌ิ◌",
        latin: "oe",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "ผ",
        latin: "ph",
        note: "At end of syllable: p",
        isVowel: false
    },
    {
        thai: "ฝ",
        latin: "f",
        note: "At end of syllable: p",
        isVowel: false
    },
    {
        thai: "เ◌ือะ",
        latin: "uea",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "เ◌ือ",
        latin: "uea",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "ห",
        latin: "h",
        isVowel: false
    },
    {
        thai: "◌ัวะ",
        latin: "ua",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "◌ัว",
        latin: "ua",
        note: "long sound",
        isVowel: true
    },
    {
        thai: "ภ",
        latin: "ph",
        note: "At end of syllable: p",
        isVowel: false
    },
    {
        thai: "ธ",
        latin: "th",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: "ณ",
        latin: "n",
        isVowel: false
    },
    {
        thai: "ญ",
        latin: "y",
        note: "At end of syllable: n",
        isVowel: false
    },
    {
        thai: "ำ",
        latin: "am",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "เ◌าะ",
        latin: "o",
        note: "short sound",
        isVowel: true
    },
    {
        thai: "◌อ",
        latin: "o",
        note: "long sound",
        isVowel: true
    }
]
let letters3 = [
    {
        thai: "ถ",
        latin: "th",
        note: "At endo of syllable: t",
        isVowel: false
    },
    {
        thai: "ฐ",
        latin: "th",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: "ฎ",
        latin: "d",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: "ฏ",
        latin: "t",
        isVowel: false
    },
    {
        thai: "ฑ",
        latin: "th or d",
        note: "At end of syllable: t",
        isVowel: false
    },
    {
        thai: "ฒ",
        latin: "th",
        note: "At end of syllable: t",
        isVowel: false,
    },
    {
        thai: "ฬ",
        latin: "l",
        note: "At end of syllable: n",
        isVowel: false
    },
    {
        thai: "ฆ",
        latin: "kh",
        note: "At end of syllable: k",
        isVowel: false
    },
    {
        thai: "ฤ",
        latin: "rue, ri or roe",
        isVowel: true,
        note: "short sound"
    },
    {
        thai: "ฤๅ",
        latin: "rue",
        isVowel: true,
        note: "long sound"
    },
    {
        thai: "ฦ",
        latin: "lue",
        isVowel: true,
        note: "short sound"
    },
    {
        thai: "ฦๅ",
        latin: "lue",
        isVowel: true,
        note: "long sound"
    }
]
let provincesAbb = [
    {thai: "ชม", latin: "Chiang Mai"},
    {thai: "นน", latin: "Nan"},
    {thai: "พย", latin: "Phayao"},
    {thai: "พร", latin: "Phrae"},
    {thai: "มส", latin: "Mae Hong Son"},
    {thai: "ลป", latin: "Lampang"},
    {thai: "ลพ", latin: "Lamphun"},
    {thai: "อต", latin: "Uttaradit"},
    {thai: "กส", latin: "Kalasin"},
    {thai: "ขก", latin: "Khon Kaen"},
    {thai: "ชย", latin: "Chaiyaphum"},
    {thai: "นพ", latin: "Nakhon Phanom"},
    {thai: "นม", latin: "Nakhon Ratchasima"},
    {thai: "บก", latin: "Bueng Kan"},
    {thai: "บร", latin: "Buri Ram"},
    {thai: "มค", latin: "Maha Sarakham"},
    {thai: "มห", latin: "Mukdahan"},
    {thai: "ยส", latin: "Yasothon"},
    {thai: "รอ", latin: "Roi Et"},
    {thai: "ลย", latin: "Loei"},
    {thai: "ศก", latin: "Si Sa Ket"},
    {thai: "สน", latin: "Sakon Nakhon"},
    {thai: "สร", latin: "Surin"},
    {thai: "นค", latin: "Nong Khai"},
    {thai: "นภ", latin: "Nong Bua Lam Phu"},
    {thai: "อด", latin: "Udon Thani"},
    {thai: "อบ", latin: "Ubon Ratchathani"},
    {thai: "อจ", latin: "Amnat Charoen"},
    {thai: "กท", latin: "Bangkok"},
    {thai: "กพ", latin: "Kamphaeng Phet"},
    {thai: "ชน", latin: "Chai Nat"},
    {thai: "นย", latin: "Nakhon Nayok"}, {thai: "นฐ", latin: "Nakhon Pathom"}, {thai: "นว", latin: "Nakhon Sawan"}, {thai: "นบ", latin: "Nonthaburi"}, {thai: "ปท", latin: "Pathum Thani"}, {thai: "อย", latin: "Phra Nakhon Si Ayutthaya"}, {thai: "พจ", latin: "Phichit"}, {thai: "พล", latin: "Phitsanulok"}, {thai: "พช", latin: "Phetchabun"}, {thai: "ลบ", latin: "Lop Buri"}, {thai: "สป", latin: "Samut Prakan"}, {thai: "สส", latin: "Samut Songkhram"}, {thai: "สค", latin: "Samut Sakhon"}, {thai: "สบ", latin: "Saraburi"}, {thai: "สห", latin: "Sing Buri"}, {thai: "สท", latin: "Sukhothai"}, {thai: "สพ", latin: "Suphan Buri"}, {thai: "อท", latin: "Ang Thong"}, {thai: "อน", latin: "Uthai Thani"}, {thai: "จบ", latin: "Chanthaburi"}, {thai: "ฉช", latin: "Chachoengsao"}, {thai: "ชบ", latin: "Chon Buri"}, {thai: "ตร", latin: "Trat"}, {thai: "ปจ", latin: "Prachin Buri"}, {thai: "รย", latin: "Rayong"}, {thai: "สก", latin: "Sa Kaeo"}, {thai: "กจ", latin: "Kanchanaburi"}, {thai: "ตก", latin: "Tak"}, {thai: "ปข", latin: "Prachuap Khiri Khan"}, {thai: "พบ", latin: "Phetchaburi"}, {thai: "รบ", latin: "Ratchaburi"}, {thai: "กบ", latin: "Krabi"}, {thai: "ชพ", latin: "Chumphon"}, {thai: "ตง", latin: "Trang"}, {thai: "นศ", latin: "Nakhon Si Thammarat"}, {thai: "นธ", latin: "Narathiwat"}, {thai: "ปน", latin: "Pattani"}, {thai: "พง", latin: "Phangnga"}, {thai: "พท", latin: "Phatthalung"}, {thai: "ภก", latin: "Phuket"}, {thai: "ยล", latin: "Yala"}, {thai: "รน", latin: "Ranong"}, {thai: "สต", latin: "Satun"}, {thai: "สข", latin: "Songkhla"}, {thai: "สฎ", latin: "Surat Thani"}]

let provinces = [{ thai: "กรุงเทพมหานคร", latin: "Bangkok (Krung Thep Maha Nakhon)"},
    { thai: "อำนาจเจริญ", latin: "Amnatcharoen"},
    { thai: "อ่างทอง", latin: "Ang Thong"},
    { thai: "บึงกาฬ", latin: "Bueng Kan"},
    { thai: "บุรีรัมย์", latin: "Buriram"},
    { thai: "ฉะเชิงเทรา", latin: "Chachoengsao"},
    { thai: "ชัยนาท", latin: "Chainat"},
    { thai: "ชัยภูมิ", latin: "Chaiyaphum"},
    { thai: "จันทบุรี", latin: "Chanthaburi"},
    { thai: "เชียงใหม่", latin: "Chiang Mai"},
    { thai: "เชียงราย", latin: "Chiang Rai"},
    { thai: "ชลบุรี", latin: "Chonburi"},
    { thai: "ชุมพร", latin: "Chumphon"},
    { thai: "กาฬสินธุ์", latin: "Kalasin"},
    { thai: "กำแพงเพชร", latin: "Kamphaeng Phet"},
    { thai: "กาญจนบุรี", latin: "Kanchanaburi"},
    { thai: "ขอนแก่น", latin: "Khon Kaen"},
    { thai: "กระบี่", latin: "Krabi"},
    { thai: "ลำปาง", latin: "Lampang"},
    { thai: "ลำพูน", latin: "Lamphun"},
    { thai: "เลย", latin: "Loei"},
    { thai: "ลพบุรี", latin: "Lopburi"},
    { thai: "แม่ฮ่องสอน", latin: "Mae Hong Son"},
    { thai: "มหาสารคาม", latin: "Maha Sarakham"},
    { thai: "มุกดาหาร", latin: "Mukdahan"},
    { thai: "นครนายก", latin: "Nakhon Nayok"},
    { thai: "นครปฐม", latin: "Nakhon Pathom"},
    { thai: "นครพนม", latin: "Nakhon Phanom"},
    { thai: "นครราชสีมา", latin: "Nakhon Ratchasima"},
    { thai: "นครสวรรค์", latin: "Nakhon Sawan"},
    { thai: "นครศรีธรรมราช", latin: "Nakhon Si Thammarat"},
    { thai: "น่าน", latin: "Nan"},
    { thai: "นราธิวาส", latin: "Narathiwat"},
    { thai: "หนองบัวลำภู", latin: "Nong Bua Lamphu"},
    { thai: "หนองคาย", latin: "Nong Khai"},
    { thai: "นนทบุรี", latin: "Nonthaburi"},
    { thai: "ปทุมธานี", latin: "Pathum Thani"},
    { thai: "ปัตตานี", latin: "Pattani"},
    { thai: "พังงา", latin: "Phang Nga"},
    { thai: "พัทลุง", latin: "Phatthalung"},
    { thai: "พะเยา", latin: "Phayao"},
    { thai: "เพชรบูรณ์", latin: "Phetchabun"},
    { thai: "เพชรบุรี", latin: "Phetchaburi"},
    { thai: "พิจิตร", latin: "Phichit"},
    { thai: "พิษณุโลก", latin: "Phitsanulok"},
    { thai: "พระนครศรีอยุธยา", latin: "Phra Nakhon Si Ayutthaya"},
    { thai: "แพร่", latin: "Phrae"},
    { thai: "ภูเก็ต", latin: "Phuket"},
    { thai: "ปราจีนบุรี", latin: "Prachinburi"},
    { thai: "ประจวบคีรีขันธ์", latin: "Prachuap Khiri Khan"},
    { thai: "ระนอง", latin: "Ranong"},
    { thai: "ราชบุรี", latin: "Ratchaburi"},
    { thai: "ระยอง", latin: "Rayong"},
    { thai: "ร้อยเอ็ด", latin: "Roi Et"},
    { thai: "สระแก้ว", latin: "Sakaeo"},
    { thai: "สกลนคร", latin: "Sakon Nakhon"},
    { thai: "สมุทรปราการ", latin: "Samutphakhan"},
    { thai: "สมุทรสาคร", latin: "Samut Sakhon"},
    { thai: "สมุทรสงคราม", latin: "Samut Songkhram"},
    { thai: "สระบุรี", latin: "Saraburi"},
    { thai: "สตูล", latin: "Satun"},
    { thai: "สิงห์บุรี", latin: "Sing Buri"},
    { thai: "ศรีสะเกษ", latin: "Sisaket"},
    { thai: "สงขลา", latin: "Songkhla"},
    { thai: "สุโขทัย", latin: "Sukhothai"},
    { thai: "สุพรรณบุรี", latin: "Suphanburi"},
    { thai: "สุราษฎร์ธานี", latin: "Surat Thani"},
    { thai: "สุรินทร์", latin: "Surin"},
    { thai: "ตาก", latin: "Tak"},
    { thai: "ตรัง", latin: "Trang"},
    { thai: "ตราด", latin: "Trat"},
    { thai: "อุบลราชธานี", latin: "Ubon Ratchathani"},
    { thai: "อุดรธานี", latin: "Udon Thani"},
    { thai: "อุทัยธานี", latin: "Uthaithani"},
    { thai: "อุตรดิตถ์", latin: "Uttaradit"},
    { thai: "ยะลา", latin: "Yala"},
    { thai: "ยโสธร", latin: "Yasothon"},
];

let currentRound = 0;

let currentVocab = null

function prepareConsonantQuiz() {
    let vocabs = letters1.filter(vocab => !vocab.isVowel);
    vocabs = vocabs.concat(letters2.filter(vocab => !vocab.isVowel));
    vocabs = vocabs.concat(letters3.filter(vocab => !vocab.isVowel));
    startQuiz(vocabs)
}

function prepareVowelQuiz() {
    let vocabs = letters1.filter(vocab => vocab.isVowel);
    vocabs = vocabs.concat(letters2.filter(vocab => vocab.isVowel));
    vocabs = vocabs.concat(letters3.filter(vocab => vocab.isVowel));
    startQuiz(vocabs)
}

function startQuiz(vocab) {
    currentVocab = vocab.sort(function () {
        return Math.random() - 0.5;
    })
    currentRound = 0;
    showNext()
}

function showNext() {
    let letterDisplay = document.querySelector('#letterDisplay');
    let answerDisplay = document.querySelector('#answerDisplay');
    let noteDisplay = document.querySelector('#noteDisplay')

    answerDisplay.innerText = '';
    noteDisplay.innerText = '';
    buttonNext.style.display="None"

    if (currentRound >= currentVocab.length) {
        letterDisplay.innerText = 'Done'
        return
    }

    letterDisplay.innerText = currentVocab[currentRound].thai

    buttonShow.style.display="Inline";
}

function showAnswer() {
    let answerDisplay = document.querySelector('#answerDisplay');
    answerDisplay.innerText = currentVocab[currentRound].latin
    if (currentVocab[currentRound].hasOwnProperty("note")) {
        let noteDisplay = document.querySelector("#noteDisplay")
        noteDisplay.innerText = " (" + currentVocab[currentRound].note + ")"
    }
    buttonShow.style.display="None";
    buttonNext.style.display="Inline";
    currentRound++;
}