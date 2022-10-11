let buttonStart1 = document.querySelector(`#buttonStart1`);
buttonStart1.addEventListener("click", () => startQuiz(letters1));
let buttonStart2 = document.querySelector(`#buttonStart2`);
buttonStart2.addEventListener("click", () => startQuiz(letters2));
let buttonProvinces = document.querySelector(`#buttonProvinces`);
buttonProvinces.addEventListener("click", () => startQuiz(provinces));
let buttonShow = document.querySelector("#buttonShow");
buttonShow.addEventListener('click', () => showAnswer())
let buttonNext = document.querySelector("#buttonNext");
buttonNext.addEventListener('click', () => showNext())

let letters1 = [
    {
        thai: 'ม',
        latin: 'm',
        isVowel: false
    },
    {
        thai: 'น',
        latin: 'n',
        isVowel: false
    },
    {
        thai: 'า',
        latin: "a",
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
        isVowel: false
    },
    {
        thai: 'บ',
        latin: 'b',
        isVowel: false
    },
    {
        thai: '◌ี',
        latin: 'i',
        isVowel: true
    },
    {
        thai: 'ช',
        latin: "ch",
        isVowel: false
    },
    {
        thai: 'ซ',
        latin: "s",
        isVowel: false
    },
    {
        thai: '◌ะ | ◌ั◌',
        latin: "a",
        isVowel: true
    },
    {
        thai: '◌ิ',
        latin: "i",
        isVowel: true
    },
    {
        thai: 'พ',
        latin: "ph",
        isVowel: false
    },
    {
        thai: 'ฟ',
        latin: "f",
        isVowel: false
    },
    {
        thai: '◌ุ',
        latin: "u",
        isVowel: true
    },
    {
        thai: '◌ู',
        latin: "u",
        isVowel: true
    },
    {
        thai: 'ค',
        latin: "kh",
        isVowel: false
    },
    {
        thai: "◌ึ",
        latin: "ue",
        isVowel: true
    },
    {
        thai: "◌ื",
        latin: "ue",
        isVowel: true
    },
    {
        thai: "ท",
        latin: "th",
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
        isVowel: true
    },
    {
        thai: "เ◌ะ | เ◌็◌",
        latin: "e",
        isVowel: true
    },
    {
        thai: "ร",
        latin: "r",
        isVowel: false
    },
    {
        thai: "ล",
        latin: "l",
        isVowel: false
    },
    {
        thai: "แ◌ะ | แ◌็◌",
        latin: "ae",
        isVowel: true
    },
    {
        thai: "แ◌",
        latin: "ae",
        isVowel: true
    }
]
let letters2 = [
    {
        thai: "จ",
        latin: "ch",
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
        isVowel: true
    },
    {
        thai: "โ◌",
        latin: "o",
        isVowel: true
    },
    {
        thai: "เ◌า",
        latin: "au",
        isVowel: true
    },
    {
        thai: "ไ◌",
        latin: "ai",
        isVowel: true
    },
    {
        thai: "ไ◌",
        latin: "ai",
        isVowel: true
    },
    {
        thai: "ข",
        latin: "kh",
        isVowel: false
    },
    {
        thai: "ฉ",
        latin: "ch",
        isVowel: false
    },
    {
        thai: "เ◌ียะ",
        latin: "ia",
        isVowel: true
    },
    {
        thai: "เ◌ีย",
        latin: "ia",
        isVowel: true
    },
    {
        thai: "ศ",
        latin: "s",
        isVowel: true
    },
    {
        thai: "ษ",
        latin: "s",
        isVowel: true
    },
    {
        thai: "ส",
        latin: "s",
        isVowel: true
    },
    {
        thai: "เ◌อะ",
        latin: "oe",
        isVowel: true
    },
    {
        thai: "เ◌อ | เ◌ิ◌",
        latin: "oe",
        isVowel: true
    },
    {
        thai: "ผ",
        latin: "ph",
        isVowel: false
    },
    {
        thai: "ฝ",
        latin: "f",
        isVowel: false
    },
    {
        thai: "เ◌ือะ",
        latin: "uea",
        isVowel: true
    },
    {
        thai: "เ◌ือ",
        latin: "uea",
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
        isVowel: true
    },
    {
        thai: "◌ัว",
        latin: "ua",
        isVowel: true
    },
    {
        thai: "ภ",
        latin: "ph",
        isVowel: false
    },
    {
        thai: "ธ",
        latin: "th",
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
        isVowel: false
    },
    {
        thai: "ำ",
        latin: "am",
        isVowel: true
    },
    {
        thai: "เ◌าะ",
        latin: "o",
        isVowel: true
    },
    {
        thai: "◌อ",
        latin: "o",
        isVowel: true
    }
]
let provinces = [{ thai: "กรุงเทพมหานคร", latin: "Bangkok"},
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
function startQuiz(vocab) {
    currentVocab = vocab.sort(function () {
        return Math.random() - 0.5;
    })
    buttonStart1.innerText = 'Restart Quiz'
    currentRound = 0;
    showNext()
}

function showNext() {
    let letterDisplay = document.querySelector('#letterDisplay');
    let answerDisplay = document.querySelector('#answerDisplay');

    answerDisplay.innerText = '';
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
    buttonShow.style.display="None";
    buttonNext.style.display="Inline";
    currentRound++;
}