import { type Product } from "../lib/types";

export const stationeryProducts: Product[] = [
  {
    id: 1,
    name: "Линейка 'Власть'",
    price: "150 ₽",
    image: "📏",
    description: "Идеально ровная. Позволяет мерить авторитет коллег.",
  },
  {
    id: 2,
    name: "Ручка 'Бесконечная'",
    price: "450 ₽",
    image: "🖊️",
    description: "Пишет даже в космосе и во время депрессии.",
  },
  {
    id: 3,
    name: "Ластик 'Забыватель'",
    price: "99 ₽",
    image: "🧽",
    description: "Стирает карандаш, ошибки прошлого и плохие воспоминания.",
  },
];

export const weaponProducts: Product[] = [
  {
    id: 101,
    name: "Меч Квазар",
    price: "12,500 🪙",
    image: "⚔️",
    description: "Заточка +15. Пробивает код джуниоров с первого удара.",
  },
  {
    id: 102,
    name: "Плазмоган 'React-19'",
    price: "85,000 🪙",
    image: "🔫",
    description:
      "Стреляет нестабильными бета-версиями. Выжигает баги намертво.",
  },
  {
    id: 103,
    name: "Святая Граната",
    price: "5,000 🪙",
    image: "💣",
    description:
      "Уничтожает сервер вместе с дедлайнами. Использовать осторожно.",
  },
];
