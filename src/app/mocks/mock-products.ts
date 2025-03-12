// File: src/app/mocks/mock-products.ts
// מספק נתוני דמה למוצרים (פיצות, שתייה, קינוחים, תוספות ועוד).
import { Product } from '../products';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Margherita Pizza',
    description: 'פיצה קלאסית עם עגבניות, מוצרלה ובזיליקום.',
    price: 12.99,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/assets/67751daed0f4bf3205127df1?w=600',
    isFavorite: 1,
    sellNo: 150,
    openDate: 20250101,
  },
  {
    id: 2,
    title: 'Pepperoni Pizza',
    description: 'פיצה חריפה עם פרוסות פפרוני וגבינה.',
    price: 14.99,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5def78458ac76e19c9391986/34d0275a-44e9-11ef-8db9-d683cdfbc057_______.jpg?w=600',
    isFavorite: 0,
    sellNo: 200,
    openDate: 20250101,
  },
  {
    id: 3,
    title: 'Veggie Pizza',
    description: 'פיצה עם מבחר ירקות טריים, מוצרלה ורוטב עגבניות.',
    price: 13.99,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5f02e603dd4567e18e92b562/5b7c93ca-b8af-11ec-b936-16a046c59c88_untitled_capture5896.jpeg?w=600',
    isFavorite: 1,
    sellNo: 120,
    openDate: 20250101,
  },
  {
    id: 4,
    title: 'BBQ Goose Pizza',
    description: 'פיצה עם אווז בגריל, רוטב ברביקיו, בצל ובזיליקום.',
    price: 15.99,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5def78458ac76e19c9391986/46dfa858-44e9-11ef-9821-2652fa6505d0__________.jpg?w=600',
    isFavorite: 0,
    sellNo: 180,
    openDate: 20250101,
  },
  {
    id: 5,
    title: 'Hawaiian Pizza',
    description: 'פיצה עם עגבניות, מוצרלה, אננס ופרוסות חזיר.',
    price: 14.49,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/assets/67751dc4d0f4bf3205127df2?w=600',
    isFavorite: 0,
    sellNo: 140,
    openDate: 20250101,
  },
  {
    id: 6,
    title: 'Coke',
    description: 'משקה קולה קר ומרענן.',
    price: 2.99,
    category: 'Drinks',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5cb3013615e40d000d751c49/0d786f88-6ae4-11eb-8194-52fec692898a_coca_cola_350ml.jpeg?w=600',
    isFavorite: 0,
    sellNo: 300,
    openDate: 20250101,
  },
  {
    id: 7,
    title: 'Pepsi',
    description: 'משקה קולה נוסף לבחירתך.',
    price: 2.99,
    category: 'Drinks',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5e690c4e1397810eb62b5cf8/15d3189a-4d2a-11eb-9a37-661400a9d3f9____________.jpeg?w=600',
    isFavorite: 0,
    sellNo: 280,
    openDate: 20250101,
  },
  {
    id: 8,
    title: 'Lemonade',
    description: 'לימונדה סחוטה טרייה.',
    price: 3.49,
    category: 'Drinks',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5c935c20f26820000db72f68/dfa16974-b7d4-11ef-93db-162d035f1d23________.jpg?w=600',
    isFavorite: 0,
    sellNo: 250,
    openDate: 20250101,
  },
  {
    id: 9,
    title: 'Iced Tea',
    description: 'תה קר מרענן במגוון טעמים.',
    price: 3.29,
    category: 'Drinks',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5cb3013615e40d000d751c49/4476593c-6ae4-11eb-b8a8-66c532d4a8c6_ft_peach_500ml.jpeg?w=600',
    isFavorite: 0,
    sellNo: 220,
    openDate: 20250101,
  },
  {
    id: 10,
    title: 'Chocolate Cake',
    description: 'עוגת שוקולד עשירה ומפנקת לקינוח.',
    price: 5.99,
    category: 'Desserts',
    image: 'https://imageproxy.wolt.com/menu/menu-images/656c80cf9718f85a81a21137/d2a8655a-9f30-11ee-b8a6-02eddde8cdfc______________________.jpg?w=600',
    isFavorite: 1,
    sellNo: 180,
    openDate: 20250101,
  },
  {
    id: 11,
    title: 'Cheesecake',
    description: 'עוגת גבינה קלאסית עם בסיס עוגיות.',
    price: 6.49,
    category: 'Desserts',
    image: 'https://imageproxy.wolt.com/menu/menu-images/656c80cf9718f85a81a21137/c978676e-a88b-11ee-ae03-dae9cd580ac5_______.png?w=600',
    isFavorite: 1,
    sellNo: 160,
    openDate: 20250101,
  },
  {
    id: 12,
    title: 'Tiramisu',
    description: 'קינוח איטלקי עם קפה, מסקרפונה וקקאו.',
    price: 6.99,
    category: 'Desserts',
    image: 'https://imageproxy.wolt.com/menu/menu-images/21599f0c-879e-11e9-a99e-0a5864600e13_Karela-4687.jpeg?w=600',
    isFavorite: 1,
    sellNo: 150,
    openDate: 20250101,
  },
  {
    id: 13,
    title: 'Garlic Bread',
    description: '.לחם שום חם ופריך',
    price: 4.99,
    category: 'Sides',
    image: 'https://imageproxy.wolt.com/menu/menu-images/4956e2e8-32da-11ea-abf2-0a586468f380________.jpeg?w=600',
    isFavorite: 0,
    sellNo: 220,
    openDate: 20250101,
  },
  {
    id: 14,
    title: 'French Fries',
    description: 'צ׳יפס פריך ומלוח, להגשה לצד הפיצה.',
    price: 3.99,
    category: 'Sides',
    image: 'https://imageproxy.wolt.com/assets/67769413a2a1ca7bbf5b300e?w=600',
    isFavorite: 0,
    sellNo: 250,
    openDate: 20250101,
  },
  {
    id: 15,
    title: 'Onion Rings',
    description: 'טבעות בצל מטוגנות, פריכות מושלמת.',
    price: 4.49,
    category: 'Sides',
    image: 'https://imageproxy.wolt.com/menu/menu-images/b9000ee2-9c00-11e9-800c-0a586460bc7b______________.jpeg?w=600',
    isFavorite: 0,
    sellNo: 230,
    openDate: 20250101,
  },
  {
    id: 16,
    title: 'Garden Salad',
    description: 'סלט ירקות וגבינה בולגרית.',
    price: 5.49,
    category: 'Sides',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5efc7a31e7f959b7290478d2/c2f67212-bc3c-11ea-adb9-062d7d192f61__________.jpeg?w=600',
    isFavorite: 1,
    sellNo: 180,
    openDate: 20250101,
  },
  {
    id: 17,
    title: 'Meat Lovers Pizza',
    description: 'פיצה עשירה במגוון בשרים – בקר, חזיר ועוף.',
    price: 16.99,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5f02e603dd4567e18e92b562/9681dd04-b8af-11ec-a7ca-d24550c83aea_untitled_capture5872.jpeg?w=600',
    isFavorite: 1,
    sellNo: 190,
    openDate: 20250101,
  },
  {
    id: 18,
    title: 'Artichoke Pizza',
    description: 'פיצה עם מבחר ירקות ובשרים לשילוב מושלם.',
    price: 17.49,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5cb3013615e40d000d751c49/836db55e-63f9-11ec-819a-e2b03c26ceca_________.jpeg?w=600',
    isFavorite: 0,
    sellNo: 170,
    openDate: 20250101,
  },
  {
    id: 19,
    title: 'Spicy Italian Pizza',
    description: 'פיצה עם תערובת תבלינים חריפה, בשר ואיטלקיות.',
    price: 15.99,
    category: 'Pizza',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5cb3013615e40d000d751c49/e5bf7eb4-63f8-11ec-81b5-16921d01e11e_____________.jpeg?w=600',
    isFavorite: 0,
    sellNo: 160,
    openDate: 20250101,
  },
  {
    id: 20,
    title: 'דיפ עגבניות',
    description: 'תוספת עגבניות נוספת לכל סוג פיצה.',
    price: 2.49,
    category: 'Extras',
    image: 'https://imageproxy.wolt.com/menu/menu-images/5f02e603dd4567e18e92b562/6f2aa4ce-b8b0-11ec-8f58-6a3b43500eb3_untitled_capture5939.jpeg?w=600',
    isFavorite: 0,
    sellNo: 300,
    openDate: 20250101,
  },
];
