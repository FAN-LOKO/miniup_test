// config/themeConfig.js
// Конфигурация бренда/проекта для Telegram Mini App
// Для создания нового проекта измените поля в этом файле

const themeConfig = {
  // ======================
  // Общая информация
  // ======================
  id: "kadtsin-digital",
  displayName: "Kadtsin Digital",
  serviceTitle: "AI FIT CENTER",  // Название сервиса в шапке

  // ======================
  // Логотипы
  // ======================
  logo: {
    light: "/assets/logos/logo-light.svg",    // Светлый логотип
    dark: "/assets/logos/logo-dark.svg",      // Тёмный логотип
    alt: "AI FIT CENTER Logo"
  },

  // ======================
  // Цветовая схема бренда
  // ======================
  colors: {
    primary: "#3b82f6",      // Основной цвет бренда (синий)
    secondary: "#0b3c78",    // Дополнительный цвет (тёмно-синий)
    accent: "#7ec8ff",       // Акцентный цвет (голубой)
    background: "#ffffff",   // Цвет фона контейнера
    text: "#1a1a1a",         // Цвет основного текста
    textSecondary: "#6b7280" // Цвет второстепенного текста
  },

  // ======================
  // Настройки анимированного фона
  // ======================
  animatedBackground: {
    enabled: true,
    colors: [
      "#cfe9ff",  // Очень светлый голубой
      "#7ec8ff",  // Мягкий голубой
      "#3b82f6",  // Насыщенный синий
      "#0b3c78"   // Тёмный морской синий
    ],
    animationDuration: 30,  // Длительность анимации (секунды)
    gradientAngle: -45       // Угол градиента (градусы)
  },

  // ======================
  // Тексты первого экрана (авторизация)
  // ======================
  screen0: {
    title: "AI FIT CENTER",
    subtitle: "Добро пожаловать!",
    privacyText: "Согласен с политикой конфиденциальности",
    dataProcessingText: "Согласен с обработкой персональных данных",
    buttonText: "Продолжить"
  }
};

// Экспорт конфигурации
if (typeof module !== 'undefined' && module.exports) {
  module.exports = themeConfig;
}
