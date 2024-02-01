# Проект "Movies-Explorer" <img src="src/images/film.png" width="30px" height="30px" alt="Книги"/> 

Финальный проект на веб-факультете в @yandex.practicum.  
Фронтенд сверстан по [Макету в Figma](https://www.figma.com/file/muHBdaOkBPY9EilVzglJ5G/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-(Copy)?type=design&node-id=1-7266&mode=dev)

## Описание:

"Movies-Explorer" - приложение для поиска и просмотра фильмов международного фестиваля документального кино о новой культуре ["Beat Film Festival"](https://beatfilmfestival.ru/). Проект представляет собой отзывчиво-адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Express" (часть backend).
Сервис по поиску фильмов, в котором можно найти фильмы по запросу и сохранить в личном кабинете. Сервис отправляет запрос к стороннему API с данными (*сервис [beatfilm-movies](https://api.nomoreparties.co/beatfilm-movies)*),
получает их и сохраняет. Пользователь может найти фильм по ключевым словам и сохранить понравившуюся картину в личном кабинете в разделе "Сохраненные фильмы".

## Доступ к приложению:
__IP:__  158.160.115.22  
__Frontend (деплой):__  [Movies-Explorer](https://zarmovies.nomoredomainsrocks.ru)  
__Backend:__ [Backend](https://github.com/EvgenyZaryanov/movies-explorer-api)  
* проект прошел код-ревью

__Вот что было сделано:__
- настроена инфраструктура и создан сервер на express;
- подключена база данных, созданы схемы и модели ресурсов API;
- реализовано логирование, аутентификация и авторизация на сервере;
- бэкенд задеплоен на Яндекс Облако;
- свёрстаны компоненты на React, разметка портирована в его формат;
- описана логика и вёрстка страниц регистрации, логина, редактирования профиля, сохранённых фильмов;
- реализованы асинхронные GET- и POST-запросы к API;
- проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле;
- полученные фильмы фильтруются на стороне клиента.

__Функционал:__
Приложение адаптировано под разные разрешения экрана, от десктопного до мобильного.
Разработка велась с применением DOM-структуры и методологии БЭМ. Проект использует отправку и обработку данных форм, валидацию ввода данных, работу с API.

## Инструменты и стек:

Frontend:
* __React + Vite.js__ 
* __HTML5__ 
* __CSS__
* __JavaScript__ 
* __DOM__
* __BEM__

Backend:
* __Node.js__ 
* __Express.js__ 
* __MongoDB__ 
* __API__  
* __Nginx__ 
* __JWT__ 
* __Postman__
* __YandexCloud__

## Установка и запуск проекта:

1. Клонируйте репозиторий на свой компьютер.
2. Установите Vite командой __npm i vite__
3. Установите зависимости командой __npm install__
4. Запустите проект командой __npm start__

## Планы по развитию:

- Добавление дополнительных возможнойстей и функциональности,
- Усовершенствование интерфейса,
- Оптимизация кроссбраузерности, исправление работоспособности приложения в Safari-браузере и устройствах IOS. 
