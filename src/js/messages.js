import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export function messageError(error) {
  let message = 'Виникла невідома помилка';
  switch (error) {
    case 400:
      message = 'Неправильний запит';
      break;
    case 403:
      message = 'Немає авторизован';
      break;
    case 404:
      message = 'Не існує ресурсу';
      break;
    case 500:
      message = 'Проблеми з сервером';
      break;
    case 502:
      message = 'Поганий шлюз';
      break;
    case 503:
      message = 'Сервіс на разі недоступний';
      break;
    case 504:
      message = 'Час очікування вичерпано';
      break;
  }
  iziToast.error({
    title: 'Помилка',
    message: message,
    position: 'topRight',
    theme: 'dark',
    backgroundColor: '#ef4040',
  });
}
