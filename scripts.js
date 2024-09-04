// Функция для тестовых данных
function getTestInitData() {
  return {
      user: {
          id: 12345678,
          first_name: "John",
          last_name: "Doe",
          username: "johndoe"
      },
      auth_date: 1609459200,
      hash: "testhash"
  };
}

// Функция для отладки, чтобы убедиться, что скрипт загружен
console.log('Скрипт запущен. Проверяем Telegram WebApp.');

// Проверим, доступен ли объект Telegram
if (typeof Telegram === 'undefined' || typeof Telegram.WebApp === 'undefined') {
  console.error('Telegram WebApp недоступен. Используем только тестовые данные.');
  document.getElementById('status').textContent = 'Telegram WebApp недоступен, используем тестовые данные.';
  
  // Используем тестовые данные
  const testInitData = getTestInitData();
  const testDataString = JSON.stringify(testInitData, null, 2);
  document.getElementById('testData').textContent = testDataString;

  // Если Telegram недоступен, покажем сообщение, что InitData недоступен
  document.getElementById('realData').textContent = 'InitData недоступен';
} else {
  console.log('Telegram WebApp найден, инициализация...');

  // Убедимся, что WebApp готов к использованию
  Telegram.WebApp.ready();

  // Получаем реальные данные initData из Telegram WebApp
  const realInitData = Telegram.WebApp.initData || "InitData недоступен";
  const testInitData = getTestInitData();

  // Преобразуем реальные данные в строку для вывода
  const realDataString = typeof realInitData === 'string' ? realInitData : JSON.stringify(realInitData, null, 2);
  const testDataString = JSON.stringify(testInitData, null, 2);

  // Выводим реальные данные на экран
  document.getElementById('realData').textContent = realDataString;

  // Выводим тестовые данные на экран
  document.getElementById('testData').textContent = testDataString;

  // Вывод статуса
  document.getElementById('status').textContent = 'Данные успешно загружены!';
}
