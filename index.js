document.querySelector("#buttonShow").addEventListener('click', () => showAnswer())
document.querySelector("#buttonNext").addEventListener('click', () => showNext())
document.querySelector("#buttonBengali").addEventListener('click', () => switchToBengali())
document.querySelector("#buttonThai").addEventListener('click', () => switchToThai())

let htmlBengali = `
<div id=gamemode-section">
    <button id="buttonConsonants">Consonants</button>
    <button id="buttonDistricts">Districts</button>
</div>
`

let htmlThai = `
<div id="font-section">
    <button id="buttonLoopFont">Font with loops</button>
    <button id="buttonLooplessFont">Font without loops</button>
</div>
<div id="gamemode-section">
    <button id="buttonStart1">Day 1</button>
    <button id="buttonStart2">Day 2</button>
    <button id="buttonStart3">Day 3</button>
    <button id="buttonConsonants">All Consonants</button>
    <button id="buttonVowels">All Vowels</button>
    <button id="buttonAll">All Letters</button>
    <button id="buttonProvinces">Provinces</button>
    <button id="buttonAbbreviations">Abbreviations</button>
</div>`

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
    {thai: "นย", latin: "Nakhon Nayok"},
    {thai: "นฐ", latin: "Nakhon Pathom"},
    {thai: "นว", latin: "Nakhon Sawan"},
    {thai: "นบ", latin: "Nonthaburi"},
    {thai: "ปท", latin: "Pathum Thani"},
    {thai: "อย", latin: "Phra Nakhon Si Ayutthaya"},
    {thai: "พจ", latin: "Phichit"},
    {thai: "พล", latin: "Phitsanulok"},
    {thai: "พช", latin: "Phetchabun"},
    {thai: "ลบ", latin: "Lop Buri"},
    {thai: "สป", latin: "Samut Prakan"},
    {thai: "สส", latin: "Samut Songkhram"},
    {thai: "สค", latin: "Samut Sakhon"},
    {thai: "สบ", latin: "Saraburi"},
    {thai: "สห", latin: "Sing Buri"},
    {thai: "สท", latin: "Sukhothai"},
    {thai: "สพ", latin: "Suphan Buri"},
    {thai: "อท", latin: "Ang Thong"},
    {thai: "อน", latin: "Uthai Thani"},
    {thai: "จบ", latin: "Chanthaburi"},
    {thai: "ฉช", latin: "Chachoengsao"},
    {thai: "ชบ", latin: "Chon Buri"},
    {thai: "ตร", latin: "Trat"},
    {thai: "ปจ", latin: "Prachin Buri"},
    {thai: "รย", latin: "Rayong"},
    {thai: "สก", latin: "Sa Kaeo"},
    {thai: "กจ", latin: "Kanchanaburi"},
    {thai: "ตก", latin: "Tak"},
    {thai: "ปข", latin: "Prachuap Khiri Khan"},
    {thai: "พบ", latin: "Phetchaburi"},
    {thai: "รบ", latin: "Ratchaburi"},
    {thai: "กบ", latin: "Krabi"},
    {thai: "ชพ", latin: "Chumphon"},
    {thai: "ตง", latin: "Trang"},
    {thai: "นศ", latin: "Nakhon Si Thammarat"},
    {thai: "นธ", latin: "Narathiwat"},
    {thai: "ปน", latin: "Pattani"},
    {thai: "พง", latin: "Phangnga"},
    {thai: "พท", latin: "Phatthalung"},
    {thai: "ภก", latin: "Phuket"},
    {thai: "ยล", latin: "Yala"},
    {thai: "รน", latin: "Ranong"},
    {thai: "สต", latin: "Satun"},
    {thai: "สข", latin: "Songkhla"},
    {thai: "สฎ", latin: "Surat Thani"}]
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

let bengaliConsonants = [
    {thai: "ঢ", latin: "DH"},
    {thai: "ক", latin: "K"},
    {thai: "ট", latin: "T"},
    {thai: "স", latin: "S"},
    {thai: "ল", latin: "L"},
    {thai: "ম", latin: "M"},
    {thai: "ব", latin: "B"},
    {thai: "জ", latin: "J/Z"},
    {thai: "গ", latin: "G"},
    {thai: "হ", latin: "H"},
    {thai: "ন", latin: "N"},
    {thai: "য়", latin: "Y/A"},
    {thai: "প", latin: "P"},
    {thai: "ণ", latin: "N"},
    {thai: "শ", latin: "SH"},
    {thai: "দ", latin: "D"},
    {thai: "ড়", latin: "R"},
    {thai: "ফ", latin: "PH/F"},
    {thai: "ঠ", latin: "TH"},
    {thai: "চ", latin: "CH"},
    {thai: "খ", latin: "KH"},
    {thai: "ড", latin: "D"},
    {thai: "য", latin: "J"},
    {thai: "ভ", latin: "BH/V"},
    {thai: "ত", latin: "T"},
    {thai: "ছ", latin: "CH"},
    {thai: "র", latin: "R"}
]

let banglaDistricts = [
    {thai: "সিলেট", latin: "Sylhet"},
    {thai: "মৌলভীবাজার", latin: "Moulvibazar"},
    {thai: "হবিগঞ্জ", latin: "Habiganj"},
    {thai: "সুনামগঞ্জ", latin: "S  Sunamganj"},
    {thai: "ময়মনসিংহ", latin: "Mymensingh"},
    {thai: "জামালপুর", latin: "Jamalpur"},
    {thai: "নেত্রকোণা", latin: "Netrokona"},
    {thai: "শেরপুর", latin: "Sherpur"},
    {thai: "রংপুর", latin: "Rangpur"},
    {thai: "দিনাজপুর", latin: "Dinajpur"},
    {thai: "কুড়িগ্রাম", latin: "Kurigram"},
    {thai: "গাইবান্ধা", latin: "Gaibandha"},
    {thai: "লালমনিরহাট", latin: "Lalmonirhat"},
    {thai: "নীলফামারী", latin: "Nilphamari"},
    {thai: "পঞ্চগড়", latin: "Panchagarh"},
    {thai: "ঠাকুরগাঁও", latin: "Thakurgaon"},
    {thai: "রাজশাহ   হী", latin: "Rajshahi"},
    {thai: "বগুড়া", latin: "Bogura"},
    {thai: "জয়পুরহাট", latin: "Jaipurhat"},
    {thai: "নওগাঁ", latin: "Naogaon"},
    {thai: "নাটোর", latin: "Natore"},
    {thai: "চাঁপাইনবাবগঞ্জ", latin: "Chapai Nawabganj"},
    {thai: "পাবনা", latin: "Pabna"},
    {thai: "সিরাজগঞ্জ", latin: "Sirajganj"},
    {thai: "খুলনা", latin: "Khulna"},
    {thai: "বাগেরহাট", latin: "Bagerhat"},
    {thai: "চুয়াডাঙ্গা", latin: "Chuadanga"},
    {thai: "যশোর", latin: "Jashore"},
    {thai: "ঝিনাইদহ", latin: "Jhenaidah"},
    {thai: "কুষ্টিয়া", latin: "Kushtia"},
    {thai: "মাগুরা", latin: "Magura"},
    {thai: "মেহেরপুর", latin: "Meherpur"},
    {thai: "নড়াইল", latin: "Narail"},
    {thai: "সাতক্ষীরা", latin: "Satkhira"},
    {thai: "বরিশাল", latin: "Barishal"},
    {thai: "বরগুনা", latin: "Barguna"},
    {thai: "ভোলা", latin: "Bhola"},
    {thai: "ঝালকাঠি", latin: "Jhalokathi"},
    {thai: "পটুয়াখালী", latin: "Patuakhali"},
    {thai: "পিরোজপুর", latin: "Pirojpur"},
    {thai: "ঢাকা", latin: "Dhaka"},
    {thai: "ফরিদপুর", latin: "Faridpur"},
    {thai: "গাজীপুর", latin: "Gazipur"},
    {thai: "গোপালগঞ্জ", latin: "Gopalganj"},
    {thai: "কিশোরগঞ্জ", latin: "Kishoreganj"},
    {thai: "মাদারিপুর", latin: "Madaripur"},
    {thai: "মানিকগঞ্জ", latin: "Manikganj"},
    {thai: "মুন্সিগঞ্জ", latin: "Munshiganj"},
    {thai: "নারায়ণগঞ্জ", latin: "Narayanganj"},
    {thai: "নরসিংদী", latin: "Narsingdi"},
    {thai: "রাজবাড়ী", latin: "Rajbari"},
    {thai: "শরিয়তপুর", latin: "Shariatpur"},
    {thai: "টাঙ্গাইল", latin: "Tangail"},
    {thai: "চট্টগ্রাম", latin: "Chattagram"},
    {thai: "বান্দরবান", latin: "Bandarban"},
    {thai: "ব্রাহ্মণবাড়িয়া", latin: "Brahmanbaria"},
    {thai: "চাঁদপুর", latin: "Chandpur"},
    {thai: "কক্সবাজার", latin: "Cox's Bazar"},
    {thai: "ফেনী", latin: "Feni"},
    {thai: "খাগড়াছড়ি", latin: "Khagrachhari"},
    {thai: "কুমিল্লা", latin: "Cumilla"},
    {thai: "লক্ষ্মীপুর", latin: "Lakshmipur"},
    {thai: "নোয়াখালী", latin: "Noakhali"},
    {thai: "রাঙ্গামাটি", latin: "Rangamati"}
]

let currentRound = 0;

let currentVocab = null
let lastGamemodeButton = null

switchToThai();

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        e.preventDefault();
        if (buttonNext.style.display != "none") {
            showNext();
        } else if (buttonShow.style.display != "none") {
            showAnswer();
        }
    }
  }

function toLoopFont() {
    let letterDisplay = document.querySelector('#letterDisplay');
    letterDisplay.style.fontFamily = "'courier', sans-serif";
    buttonLoopFont.style.color = "blue"
    buttonLoopFont.style.border = "2px solid red"
    buttonLooplessFont.style.color = "black"
    buttonLooplessFont.style.border = "2px solid black"
}

function toLooplessFont() {
    let letterDisplay = document.querySelector('#letterDisplay');
    letterDisplay.style.fontFamily = "'Noto Sans Thai', sans-serif";
    buttonLooplessFont.style.color = "blue"
    buttonLooplessFont.style.border = "2px solid red"
    buttonLoopFont.style.color = "black"
    buttonLoopFont.style.border = "2px solid black"
}

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

function clearQuiz() {
    let letterDisplay = document.querySelector('#letterDisplay');
    let answerDisplay = document.querySelector('#answerDisplay');
    let noteDisplay = document.querySelector('#noteDisplay')

    answerDisplay.innerText = '';
    noteDisplay.innerText = '';
    letterDisplay.innerText = '';
    
    buttonNext.style.display="None"
    buttonShow.style.display="None"
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

function switchToBengali() {
    clearQuiz();
    document.querySelector("#language-quiz").innerHTML = htmlBengali;
    document.querySelector("#buttonConsonants").addEventListener("click", () => startQuiz(bengaliConsonants));
    document.querySelector("#buttonDistricts").addEventListener("click", () => startQuiz(banglaDistricts));
}

function switchToThai() {
    clearQuiz();
    document.querySelector("#language-quiz").innerHTML = htmlThai;
    document.querySelector(`#buttonStart1`).addEventListener("click", () => startQuiz(letters1));
    document.querySelector(`#buttonStart2`).addEventListener("click", () => startQuiz(letters2));
    document.querySelector(`#buttonStart3`).addEventListener("click", () => startQuiz(letters3));
    document.querySelector(`#buttonProvinces`).addEventListener("click", () => startQuiz(provinces));
    document.querySelector(`#buttonConsonants`).addEventListener("click", () => prepareConsonantQuiz())
    document.querySelector("#buttonVowels").addEventListener("click", () => prepareVowelQuiz())
    document.querySelector("#buttonAll").addEventListener("click", () => startQuiz(letters1.concat(letters2).concat(letters3)))
    document.querySelector("#buttonAbbreviations").addEventListener('click', () => startQuiz(provincesAbb))
    document.querySelector("#buttonLoopFont").addEventListener('click', () => toLoopFont())
    document.querySelector("#buttonLooplessFont").addEventListener('click', () => toLooplessFont())
    toLoopFont()
}