import java.io.IOException;

public class ProvinceParser {

    static String provinceHtml = "";

    static String[] provincesLatin = new String[]{"Bangkok", "Amnatcharoen", "Ang Thong", "Bueng Kan", "Buriram", "Chachoengsao", "Chainat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chonburi", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Lampang", "Lamphun", "Loei", "Lopburi", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phang Nga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachinburi", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sakaeo", "Sakon Nakhon", "Samutphakhan", "Samut Sakhon", "Samut Songkhram", "Saraburi", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphanburi", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthaithani", "Uttaradit", "Yala", "Yasothon"};
    static String[] provincesThai = new String[]{"กรุงเทพมหานคร", "อำนาจเจริญ", "อ่างทอง", "บึงกาฬ", "บุรีรัมย์", "ฉะเชิงเทรา", "ชัยนาท", "ชัยภูมิ", "จันทบุรี", "เชียงใหม่", "เชียงราย", "ชลบุรี", "ชุมพร", "กาฬสินธุ์", "กำแพงเพชร", "กาญจนบุรี", "ขอนแก่น", "กระบี่", "ลำปาง", "ลำพูน", "เลย", "ลพบุรี", "แม่ฮ่องสอน", "มหาสารคาม", "มุกดาหาร", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครสวรรค์", "นครศรีธรรมราช", "น่าน", "นราธิวาส", "หนองบัวลำภู", "หนองคาย", "นนทบุรี", "ปทุมธานี", "ปัตตานี", "พังงา", "พัทลุง", "พะเยา", "เพชรบูรณ์", "เพชรบุรี", "พิจิตร", "พิษณุโลก", "พระนครศรีอยุธยา", "แพร่", "ภูเก็ต", "ปราจีนบุรี", "ประจวบคีรีขันธ์", "ระนอง", "ราชบุรี", "ระยอง", "ร้อยเอ็ด", "สระแก้ว", "สกลนคร", "สมุทรปราการ", "สมุทรสาคร", "สมุทรสงคราม", "สระบุรี", "สตูล", "สิงห์บุรี", "ศรีสะเกษ", "สงขลา", "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์", "ตาก", "ตรัง", "ตราด", "อุบลราชธานี", "อุดรธานี", "อุทัยธานี", "อุตรดิตถ์", "ยะลา", "ยโสธร"};

    public static void main(String[] args) throws IOException {
        String result = "[";
        for (int i = 0; i < provincesLatin.length; i++) {
            result += "{ thai: \"" + provincesThai[i] + "\", latin: \"" + provincesLatin[i] + "\"},\n";
        }
        result += "]";
        System.out.println(result);
    }
}
