// ================== إعدادات صوفيه ==================

const PHONE = "+218 928939273";     // رقم الواتساب حقك
const INSTAGRAM = "";                 // رابط انستغرام، مثلاً "https://instagram.com/sofia" (اتركه "" إذا ما عندك)
const TIKTOK = "";                    // رابط تيك توك (اتركه "" إذا ما عندك)
// ================== الأقسام ==================
// اكتب أقسام محلك هنا بالترتيب اللي تبيه يظهر في الموقع
const CATEGORIES = ["مجففات الشعر", "مصففات الشعر", "مكينات حلاقة", "فرش شعر حلا", "فرش شعر مها", "فرش شعر أليسا"];

// ================== المنتجات ==================
// لإضافة منتج: انسخ منتج كامل من { إلى }, والصقه تحته وغيّر المعلومات
// لحذف منتج: امسحه من { إلى },
//
// name        اسم المنتج
// price       السعر الحالي
// oldPrice    السعر القديم (للتخفيض) — اكتب 0 إذا ما فيه تخفيض
// category    الفئة (شفاه، عيون، بشرة...)
// image       اسم الصورة داخل مجلد images
// description وصف قصير (الماركة، اللون، الحجم...)
// isNew       true = تظهر شارة "جديد"   ،  false = ما تظهر
// soldOut     true = نفدت الكمية        ،  false = متوفر

const PRODUCTS = [
  {
    name: "أحمر شفاه مطفي",
    price: 45,
    oldPrice: 60,
    category: "شفاه",
    image: "lipstick.jpg",
    description: "لون وردي ترابي، ثبات طويل طول اليوم.",
    isNew: true,
    soldOut: false,
  },
  {
    name: "ماسكارا مقاومة للماء",
    price: 60,
    oldPrice: 0,
    category: "عيون",
    image: "mascara.jpg",
    description: "تكثيف وتطويل للرموش، لا تتكتل.",
    isNew: false,
    soldOut: false,
  },
  {
    name: "كريم أساس",
    price: 85,
    oldPrice: 0,
    category: "بشرة",
    image: "foundation.jpg",
    description: "تغطية متوسطة بلمسة نهائية طبيعية، حجم 30 مل.",
    isNew: false,
    soldOut: true,
  },
    {
    name: "ظل عيون",
    price: 70,
    oldPrice: 0,
    category: "عيون",
    image: "",
    description: "12 لون، ثبات عالي.",
    isNew: true,
    soldOut: false,
  },
];