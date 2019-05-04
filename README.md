# Node_MongoDB_SocketIO
Проект на Node.js: "Чат с авторизацией пользователей"

Установка:
1) Клонировать репозиторий: git clone https://github.com/t0rrex/Node_MongoDB_SocketIO.git
2) Зайти в папку с проектом: cd Node_MongoDB_SocketIO
3) Установить зависимости: npm install или yarn install
4) Перейти в "Add Configuration/ Edit Configurations", далее в "Environment variables"
 установить "NODE_PATH=.". Запустить app.js. Приложение будет доступно на http://localhost:3000

________________________________________________________
Хранение сессий пользователей и самих пользователей 
реализовано в базе данных MongoDB Atlas(облачная)

В проекте также использованы:
 
1) express - основа приложения
2) http - сервер
3) nconf - работа конфигурацией (config.json, etc.)
4) ejs-locals - движок шаблонной системы для страниц сайта
5) bower - для удобной работы с библиотеками для front-end
6) jQuery & bootstrap - для работы с клиентской частью сайта
7) MongoDB native driver, connect-mongo, mongoose - для подключения к БД, 
   хранения сессий, создания моделей для MongoDB
8) crypto - для работы с шифрованием(пароли пользователей)
9) async - для асинхронного выполнения различных задач,
а также другие библиотеки.

