const Maskapai = [
    {
        maskapai_id: "GA",
        maskapai_nama: "Garuda Indonesia",
        maskapai_logo: require('../images/Garuda.png'),
    },
    {
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",
        maskapai_logo: require('../images/Lion.png'),
    },
    {
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",
        maskapai_logo: require('../images/AirAsia.png'),
    },
    {
        maskapai_id: "CL",
        maskapai_nama: "Citilink",
        maskapai_logo: require('../images/Citilink.png'),
    },
    {
        maskapai_id: "SA",
        maskapai_nama: "Sriwijaya Air",
        maskapai_logo: require('../images/Sriwijaya.png'),
    },
]

const Bandara = [
    {
        bandara_kode: "CGK",
        bandara_nama: "Soekarno Hatta",
    },
    {
        bandara_kode: "HLM",
        bandara_nama: "Halim Perdanakusuma",
    },
    {
        bandara_kode: "SUB",
        bandara_nama: "Juanda",
    },
    {
        bandara_kode: "TKG",
        bandara_nama: "Raden Inten",
    },
]

const Jadwal = [
    {
        jadwal_id: "001",
        bandara_kode_lokasi: "HLM",
        bandara_kode_destinasi: "TKG",
        maskapai_id: "GA",
        tanggal: "12-03-2022"
    },
    {
        jadwal_id: "002",
        bandara_kode_lokasi: "HLM",
        bandara_kode_destinasi: "TKG",
        maskapai_id: "SA",
        tanggal: "13-03-2022"
    },
    {
        jadwal_id: "003",
        bandara_kode_lokasi: "CGK",
        bandara_kode_destinasi: "SUB",
        maskapai_id: "GA",
        tanggal: "12-03-2022"
    },
    {
        jadwal_id: "004",
        bandara_kode_lokasi: "CGK",
        bandara_kode_destinasi: "SUB",
        maskapai_id: "LA",
        tanggal: "13-03-2022"
    },
    {
        jadwal_id: "005",
        bandara_kode_lokasi: "CGK",
        bandara_kode_destinasi: "SUB",
        maskapai_id: "AA",
        tanggal: "14-03-2022"
    },
    {
        jadwal_id: "006",
        bandara_kode_lokasi: "CGK",
        bandara_kode_destinasi: "SUB",
        maskapai_id: "CL",
        tanggal: "14-03-2022"
    },
]

export {Maskapai, Bandara, Jadwal}