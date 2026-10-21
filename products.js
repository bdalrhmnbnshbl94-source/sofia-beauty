// ================== إعدادات صوفيه ==================

const PHONE = "0928939273";     // رقم الواتساب حقك
const INSTAGRAM = "";                 // رابط انستغرام (اتركه "" إذا ما عندك)
const TIKTOK = "";                    // رابط تيك توك (اتركه "" إذا ما عندك)

// ================== الأقسام ==================
// اكتب أقسام محلك هنا بالترتيب اللي تبيه يظهر في الموقع
const CATEGORIES = ["مجففات الشعر","مصففات الشعر","ماكينات حلاقة","فرش شعر"];

// الأقسام الفرعية: لما الزبون يضغط على القسم تظهر تحته هذي الأقسام
const SUBCATEGORIES = {
  "فرش شعر": ["حلا","مها","أليسا"],
};

// ================== المنتجات ==================
// name الاسم · price السعر · oldPrice السعر القديم (0 = بدون تخفيض)
// category القسم · sub القسم الفرعي · image اسم الصورة داخل images
// description الوصف · isNew جديد؟ · soldOut نفدت الكمية؟

const PRODUCTS = [
  {
    name: "مجفف شعر هومر 1800 وات",
    price: 144,
    oldPrice: 0,
    category: "مجففات الشعر",
    image: "p1792608944734.jpg",
    description: "مجفف شعر هومر 1800 وات",
    isNew: true,
    soldOut: false,
  },
  {
    name: "صالون",
    price: 500,
    oldPrice: 0,
    category: "ماكينات حلاقة",
    image: "p1792609863072.jpg",
    description: "",
    isNew: true,
    soldOut: false,
  },
  {
    name: "كمبيوتر",
    price: 4000,
    oldPrice: 0,
    category: "فرش شعر",
    sub: "حلا",
    image: "p1792610837354.jpg",
    description: "",
    isNew: true,
    soldOut: false,
  },
];
