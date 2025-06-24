export interface Item {
  text: string,
  path: string,
  items: {name: string, path: string}[]
}

// types/card.ts
export interface Card {
  title: string; // Заголовок карточки, например, "Gradient"
  text: string; // Описание, например, "Normal static gradient"
  codeTitle: string; // Название файла в окне кода, например, "gradient.vue"
  codeCopy: string; // код для копирования
  code: string; // Код для отображения в Code окне
  num: number; // для числа строк в коде
  content: {
    type: 'text' | 'button' | 'input' | 'loader' | 'checkbox' | 'map' | 'modal' | 'custom'; // Тип контента
    props?: Record<string, any>; // Пропсы для компонента (например, текст, классы, обработчики)
    children?: string | Card[]; // Дочерние элементы (текст или другие карточки для вложенных компонентов)
  };
}