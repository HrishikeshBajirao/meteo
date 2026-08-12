const getCoordinatesApiResponse = [
  {
    name: 'Mumbai',
    local_names: {
      pl: 'Mumbaj',
      uk: 'Мумбаї',
      sd: 'ممبئي',
      ia: 'Mumbai',
      ps: 'ممبای',
      bn: 'মুম্বই',
      ur: 'ممبئی',
      eo: 'Mumbajo',
      ru: 'Мумбаи',
      ja: 'ムンバイ',
      gu: 'મુંબઈ',
      ta: 'மும்பை',
      ml: 'മുംബൈ',
      de: 'Mumbai',
      hi: 'मुंबई',
      hr: 'Mumbai',
      fa: 'مومبای',
      io: 'Mumbai',
      es: 'Bombay',
      oc: 'Mumbai',
      kn: 'ಮುಂಬೈ ನಗರ',
      ks: 'بَمبَے',
      ne: 'मुम्बई',
      fr: 'Mumbai',
      zh: '孟买',
      te: 'ముంబై',
      sr: 'Мумбај',
      sk: 'Bombaj',
      lt: 'Mumbajus',
      en: 'Mumbai',
      mr: 'मुंबई शहर जिल्हा',
      he: 'מומבאי',
      ar: 'مومباي',
      cs: 'Bombaj',
      bg: 'Мумбай'
    },
    lat: 18.9733536,
    lon: 72.82810491917377,
    country: 'IN',
    state: 'Maharashtra'
  }
]

const getTemperatureApiResponse = {
  latitude: 19.015816,
  longitude: 72.86982,
  generationtime_ms: 0.11491775512695312,
  utc_offset_seconds: 0,
  timezone: 'GMT',
  timezone_abbreviation: 'GMT',
  elevation: 5,
  current_units: {
    time: 'iso8601',
    interval: 'seconds',
    temperature_2m: '°C',
    precipitation: 'mm',
    rain: 'mm',
    relative_humidity_2m: '%',
    is_day: '',
    wind_speed_10m: 'km/h',
    wind_direction_10m: '°',
    pressure_msl: 'hPa'
  },
  current: {
    time: '2026-08-01T13:00',
    interval: 900,
    temperature_2m: 28.3,
    precipitation: 0.2,
    rain: 0.1,
    relative_humidity_2m: 79,
    is_day: 1,
    wind_speed_10m: 25,
    wind_direction_10m: 261,
    pressure_msl: 1001.6
  }
}

const geoApifyAutoCompleteAPiResponse = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "datasource": {
                    "sourcename": "openstreetmap",
                    "attribution": "© OpenStreetMap contributors",
                    "license": "Open Database License",
                    "url": "https://www.openstreetmap.org/copyright"
                },
                "name": "Mumbai",
                "old_name": "Bombay",
                "other_names": {
                    "name:am": "ሙምባይ",
                    "name:ar": "مومباي",
                    "name:az": "Mumbay",
                    "name:be": "Мумбаі",
                    "name:bg": "Мумбай",
                    "name:bn": "মুম্বই",
                    "name:cs": "Bombaj",
                    "name:el": "Μουμπάι",
                    "name:eo": "Mumbajo",
                    "name:es": "Bombay",
                    "name:fa": "ممبئی",
                    "name:gu": "મુંબઈ",
                    "name:he": "מומבאי",
                    "name:hi": "मुंबई",
                    "name:hy": "Մումբայ",
                    "name:ja": "ムンバイ",
                    "name:ka": "მუმბაი",
                    "name:kn": "ಮುಂಬೈ",
                    "name:ko": "뭄바이",
                    "name:ks": "بَمبَے",
                    "name:lt": "Mumbajus",
                    "name:ml": "മുംബൈ",
                    "name:mr": "मुंबई",
                    "name:ne": "मुम्बई",
                    "name:pl": "Mumbaj",
                    "name:ps": "ممبای",
                    "name:ru": "Мумбаи",
                    "name:sd": "ممبئي",
                    "name:sk": "Bombaj",
                    "name:sl": "Mumbaj",
                    "name:sr": "Мумбај",
                    "name:ta": "மும்பை",
                    "name:te": "ముంబై",
                    "name:uk": "Мумбаї",
                    "name:ur": "ممبئی",
                    "name:zh": "孟买",
                    "name:arz": "مومباى",
                    "name:azb": "بمبئی",
                    "name:ckb": "مومبای",
                    "name:crh": "Mumbayi",
                    "name:jbo": ".mumbais.",
                    "name:mzn": "مومبای",
                    "name:pnb": "ممبئی",
                    "old_name": "Bombay",
                    "old_name:ar": "بومباي",
                    "old_name:eo": "Bombajo",
                    "old_name:fa": "بمبئی",
                    "old_name:fr": "Bombai",
                    "old_name:hr": "Bombay",
                    "old_name:oc": "Bombai",
                    "old_name:pl": "Bombaj",
                    "old_name:ru": "Бомбей",
                    "old_name:sl": "Bombaj",
                    "old_name:sr": "Бомбај",
                    "old_name:uk": "Бомбей",
                    "old_name:ur": "بمبئی",
                    "old_name:mzn": "بمبئی"
                },
                "country": "India",
                "country_code": "in",
                "state": "Maharashtra",
                "county": "Mumbai Suburban District",
                "city": "Mumbai",
                "postcode": "400051",
                "iso3166_2": "IN-MH",
                "lon": 72.8692035,
                "lat": 19.054999,
                "state_code": "MH",
                "result_type": "city",
                "formatted": "Mumbai, MH, India",
                "address_line1": "Mumbai",
                "address_line2": "Mumbai, MH, India",
                "category": "populated_place",
                "timezone": {
                    "name": "Asia/Kolkata",
                    "offset_STD": "+05:30",
                    "offset_DST": "+05:30",
                    "offset_STD_seconds": 19800,
                    "offset_DST_seconds": 19800,
                    "abbreviation_STD": "IST",
                    "abbreviation_DST": "IST"
                },
                "plus_code": "7JFJ3V39+XM",
                "plus_code_short": "3V39+XM Mumbai, Mumbai Suburban District, India",
                "rank": {
                    "importance": 0.7153284564294777,
                    "confidence": 1,
                    "confidence_city_level": 1,
                    "match_type": "full_match"
                },
                "place_id": "516684b707a1375240590d501a6a140e3340f00103f901b3c8f60000000000c002089203064d756d626169"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    72.8692035,
                    19.054999
                ]
            },
            "bbox": [
                72.7092035,
                18.894999,
                73.0292035,
                19.214999
            ]
        },
        {
            "type": "Feature",
            "properties": {
                "datasource": {
                    "sourcename": "openstreetmap",
                    "attribution": "© OpenStreetMap contributors",
                    "license": "Open Database License",
                    "url": "https://www.openstreetmap.org/copyright"
                },
                "name": "Navi Mumbai",
                "other_names": {
                    "name:ar": "نافي مومباي",
                    "name:bg": "Нави Мумбай",
                    "name:bh": "नवी मुंबई",
                    "name:bn": "নাভি মুম্বাই",
                    "name:cs": "Nová Bombaj",
                    "name:eo": "Novmumbajo",
                    "name:fa": "ممبئی نو",
                    "name:gu": "નવી મુંબઈ",
                    "name:he": "נבי מומבאי",
                    "name:hi": "नवी मुम्बई",
                    "name:hy": "Նավի Մումբաի",
                    "name:ja": "ナビムンバイ",
                    "name:ka": "ნავი-მუმბაი",
                    "name:kn": "ನವೀ ಮುಂಬಯಿ",
                    "name:ko": "나비뭄바이",
                    "name:ml": "നവി മുംബൈ",
                    "name:mr": "नवी मुंबई",
                    "name:ne": "नवी मुम्बई",
                    "name:or": "ନବି ମୁମ୍ବାଇ",
                    "name:os": "Нави-Мумбаи",
                    "name:pa": "ਨਵੀ ਮੁੰਬਈ",
                    "name:ps": "ناوي مومبای",
                    "name:ru": "Нави Мумбай",
                    "name:sa": "नवमुम्बई",
                    "name:sr": "Нави Мумбај",
                    "name:ta": "நவி மும்பை",
                    "name:te": "నవీ ముంబై",
                    "name:th": "นวีมุมไบ",
                    "name:uk": "Наві-Мумбай",
                    "name:ur": "نوی ممبئی",
                    "name:zh": "新孟买",
                    "name:sat": "ᱱᱚᱣᱤ ᱢᱩᱢᱵᱟᱭ"
                },
                "country": "India",
                "country_code": "in",
                "state": "Maharashtra",
                "county": "Thane Subdistrict",
                "state_district": "Thane",
                "city": "Navi Mumbai",
                "iso3166_2": "IN-MH",
                "lon": 73.0198537,
                "lat": 19.0308262,
                "state_code": "MH",
                "result_type": "city",
                "formatted": "Navi Mumbai, MH, India",
                "address_line1": "Navi Mumbai",
                "address_line2": "MH, India",
                "category": "administrative",
                "timezone": {
                    "name": "Asia/Kolkata",
                    "offset_STD": "+05:30",
                    "offset_DST": "+05:30",
                    "offset_STD_seconds": 19800,
                    "offset_DST_seconds": 19800,
                    "abbreviation_STD": "IST",
                    "abbreviation_DST": "IST"
                },
                "plus_code": "7JFM22J9+8W",
                "plus_code_short": "J9+8W Navi Mumbai, Thane Subdistrict, India",
                "rank": {
                    "importance": 0.5143367741739235,
                    "confidence": 1,
                    "confidence_city_level": 1,
                    "match_type": "full_match"
                },
                "place_id": "51180d7448454152405926dcd039e4073340f00101f901d01fc90000000000c0020892030b4e617669204d756d626169"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.0198537,
                    19.0308262
                ]
            },
            "bbox": [
                72.9778898,
                18.9984479,
                73.0497037,
                19.1894691
            ]
        },
        {
            "type": "Feature",
            "properties": {
                "datasource": {
                    "sourcename": "openstreetmap",
                    "attribution": "© OpenStreetMap contributors",
                    "license": "Open Database License",
                    "url": "https://www.openstreetmap.org/copyright"
                },
                "name": "Muminobod District",
                "ref": "37",
                "other_names": {
                    "ref": "37",
                    "name": "Ноҳияи Мӯъминобод",
                    "name:fa": "ناحیۀ مومن آباد",
                    "name:ja": "ムミノバード地区",
                    "name:ru": "Муминабадский район",
                    "name:tg": "Ноҳияи Мӯъминобод"
                },
                "country": "Tajikistan",
                "country_code": "tj",
                "state": "Khatlon Region",
                "county": "Muminobod District",
                "iso3166_2": "TJ-KT",
                "lon": 70.0674053,
                "lat": 38.1728806,
                "result_type": "county",
                "formatted": "Muminobod District, Tajikistan",
                "address_line1": "Muminobod District",
                "address_line2": "Tajikistan",
                "category": "administrative",
                "timezone": {
                    "name": "Asia/Dushanbe",
                    "offset_STD": "+05:00",
                    "offset_DST": "+05:00",
                    "offset_STD_seconds": 18000,
                    "offset_DST_seconds": 18000
                },
                "plus_code": "8JCG53F8+5X",
                "rank": {
                    "importance": 0.3492426022163027,
                    "confidence": 1,
                    "match_type": "full_match"
                },
                "place_id": "51efc4515e5084514059728e95f320164340f00101f9011214320000000000c002099203124d756d696e6f626f64204469737472696374"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    70.0674053,
                    38.1728806
                ]
            },
            "bbox": [
                69.8851395,
                38.0044431,
                70.2326096,
                38.3418206
            ]
        },
        {
            "type": "Feature",
            "properties": {
                "datasource": {
                    "sourcename": "openstreetmap",
                    "attribution": "© OpenStreetMap contributors",
                    "license": "Open Database License",
                    "url": "https://www.openstreetmap.org/copyright"
                },
                "name": "Mumbwa",
                "country": "Zambia",
                "country_code": "zm",
                "state": "Central Province",
                "county": "Mumbwa District",
                "city": "Mumbwa",
                "iso3166_2": "ZM-02",
                "lon": 27.0613764,
                "lat": -14.9850046,
                "result_type": "city",
                "formatted": "Mumbwa, Central Province, Zambia",
                "address_line1": "Mumbwa",
                "address_line2": "Central Province, Zambia",
                "category": "populated_place",
                "timezone": {
                    "name": "Africa/Johannesburg",
                    "offset_STD": "+02:00",
                    "offset_DST": "+02:00",
                    "offset_STD_seconds": 7200,
                    "offset_DST_seconds": 7200,
                    "abbreviation_STD": "SAST",
                    "abbreviation_DST": "SAST"
                },
                "plus_code": "5GQ92376+XH",
                "plus_code_short": "76+XH Mumbwa, Mumbwa District, Zambia",
                "rank": {
                    "importance": 0.32076214465567665,
                    "confidence": 1,
                    "confidence_city_level": 1,
                    "match_type": "full_match"
                },
                "place_id": "5108bf1e5db60f3b4059b2d1de8552f82dc0f00103f901835c0e4400000000c002089203064d756d627761"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    27.0613764,
                    -14.9850046
                ]
            },
            "bbox": [
                27.0213764,
                -15.0250046,
                27.1013764,
                -14.9450046
            ]
        },
        {
            "type": "Feature",
            "properties": {
                "datasource": {
                    "sourcename": "openstreetmap",
                    "attribution": "© OpenStreetMap contributors",
                    "license": "Open Database License",
                    "url": "https://www.openstreetmap.org/copyright"
                },
                "name": "Cork",
                "other_names": {
                    "name:ar": "كورك",
                    "name:az": "Kork",
                    "name:ba": "Корк",
                    "name:be": "Корк",
                    "name:bg": "Корк",
                    "name:bn": "কর্ক",
                    "name:br": "Korkig",
                    "name:ce": "Корк",
                    "name:cy": "Corc",
                    "name:el": "Κορκ",
                    "name:fa": "کورک",
                    "name:ga": "Corcaigh",
                    "name:gd": "Corcaigh",
                    "name:gu": "કૉર્ક",
                    "name:gv": "Corkee",
                    "name:he": "קורק",
                    "name:hi": "कॉर्क",
                    "name:hy": "Կորկ",
                    "name:ja": "コーク (アイルランド)",
                    "name:ka": "კორკი",
                    "name:kk": "Корк",
                    "name:kn": "ಕಾರ್ಕ್",
                    "name:ko": "코크",
                    "name:la": "Corcagia",
                    "name:lt": "Korkas",
                    "name:lv": "Korka",
                    "name:mk": "Корк",
                    "name:mn": "Корк",
                    "name:mr": "कॉर्क",
                    "name:os": "Корк",
                    "name:ru": "Корк",
                    "name:sq": "Kork",
                    "name:sr": "Корк",
                    "name:ta": "கோர்க்",
                    "name:te": "కోర్క్",
                    "name:tg": "Корк",
                    "name:th": "คอร์ก (เมือง)",
                    "name:tk": "Kork",
                    "name:tt": "Корк",
                    "name:uk": "Корк",
                    "name:ur": "کورک (شہر)",
                    "name:uz": "Kork",
                    "name:vo": "Corcaigh",
                    "name:zh": "科克",
                    "name:ang": "Corcaig",
                    "name:arz": "كورك",
                    "name:got": "𐌺𐌰𐌿𐍂𐌺",
                    "name:pnt": "Κορκ",
                    "name:sgs": "Kuorks",
                    "name:wuu": "科克 (爱尔兰)",
                    "name:yue": "科克",
                    "alt_name:la": "Corcavia",
                    "name:bat-smg": "Kuorks",
                    "name:zh-Hans": "科克",
                    "name:zh-Hant": "科克",
                    "_place_name:ja": "コーク",
                    "name:be-tarask": "Корк",
                    "old_name:ga": "Corcach Mór na Mumhan"
                },
                "country": "Ireland",
                "country_code": "ie",
                "state": "Munster",
                "county": "County Cork",
                "city": "Cork",
                "iso3166_2": "IE-M",
                "iso3166_2_sublevel": "IE-CO",
                "lon": -8.4726423,
                "lat": 51.8985136,
                "state_code": "M",
                "result_type": "city",
                "county_code": "CO",
                "formatted": "Cork, M, Ireland",
                "address_line1": "Cork",
                "address_line2": "M, Ireland",
                "category": "administrative",
                "timezone": {
                    "name": "Europe/London",
                    "offset_STD": "+00:00",
                    "offset_DST": "+01:00",
                    "offset_STD_seconds": 0,
                    "offset_DST_seconds": 3600,
                    "abbreviation_STD": "GMT",
                    "abbreviation_DST": "BST"
                },
                "plus_code": "9C3HVGXG+CW",
                "plus_code_short": "XG+CW Cork, County Cork, Ireland",
                "rank": {
                    "importance": 0.6461937354371459,
                    "confidence": 0,
                    "confidence_city_level": 0,
                    "match_type": "full_match"
                },
                "place_id": "519669ea2bfef120c05970815f7e02f34940f00101f9018205b40000000000c00208920304436f726b"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -8.4726423,
                    51.8985136
                ]
            },
            "bbox": [
                -8.6378543,
                51.8273102,
                -8.3551315,
                51.9701415
            ]
        }
    ],
    "query": {
        "text": "mum",
        "parsed": {
            "city": "mum",
            "expected_type": "unknown"
        },
        "categories": []
    }
}