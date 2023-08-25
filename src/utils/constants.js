export const apiSettings = {
    address: "https://api.diplom.anatolysotskov.nomoredomains.xyz/",
  };


const ERROR_PASSWORD_OR_LOGIN = "Вы ввели неправильный логин или пароль";


const ERROR_AUTH_TOKEN_FORMAT = "При авторизации произошла ошибка. Токен не передан или передан не в том формате";
const ERROR_AUTH_TOKEN_POST= "При авторизации произошла ошибка. Переданный токен некорректен";


const USER_EMAIL_EXISTS ="Пользователь с таким email уже существует"; // Ошибка 409
const ERROR_REGISTER_USER ="При регистрации пользователя произошла ошибка"; //400
const ERROR_UPDATE = "При обновлении профиля произошла ошибка";
const EXISTS_UPDATE = "Данные пользователя обновлены"

const ERROR_500 = "На сервере произошла ошибка 500";
const NOT_FOUND = "404 Страница по указанному маршруту не найдена";

const CHECK_BOX_TIME = 40;

export {
  ERROR_PASSWORD_OR_LOGIN,
  ERROR_AUTH_TOKEN_FORMAT,
  ERROR_AUTH_TOKEN_POST,
  USER_EMAIL_EXISTS,
  ERROR_REGISTER_USER,
  ERROR_UPDATE,
  ERROR_500,
  NOT_FOUND,
  CHECK_BOX_TIME,
  EXISTS_UPDATE,
}




