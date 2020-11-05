# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Создание приложения (мои комментарии)
1) Разбиваю приложения на компоненты:
- Шапка (имя пользователя, подсчёт постов: общее кол-во, кол-во понравившихся)
- Поиск (поисковик, кнопки фильтрации постов (все, понравились))
- Список записей в котором каждая запись - отдельный компонент
- Запись (текст, кнопка избранного, удалить)
- Панель добавления новой записи

2) Создаю компоненты:
- Создаю папку src/ components в ней создаю следующие папки:
- /app - главный компонент, в котором будет содержаться большая часть структуры приложения , который будет импортироваться в index.js, который будет формировать приложение на странице.
- /app-header - Шапка
- /search-panel - Поиск
- /post-status-filter - Фильтр
- /post-list - Форма в которой помещаются все записи
- /post-list-item - Будет создаваться новая запись
- /post-add-form - Панель добавления новой записи

3) Папка компонента содержит в себе сам компонент и его стили.
- название папки.js
- название папки.css
- index.js

4) Экспорт и импорт
- В название папки/название папки.js импортирую React , иначе работать не будет и экспортирую код в название папки/index.js.
- Потом импортирую необходимый мне код в app/app.js (потому что там склеиваю всё в одну кучу) и экспортирую в app/index.js 
- А из app/index.js папки app экспортирую в src/index.js 