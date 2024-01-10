# Проект "Movies-Explorer"

Финальный проект на веб-факультете в @yandex.practicum.

## Описание:

Сервис по поиску фильмов, в котором можно найти фильмы по запросу и сохранить в личном кабинете. Сервис отправляет запрос к стороннему API с данными (*сервис [beatfilm-movies](https://api.nomoreparties.co/beatfilm-movies)*),
получает их и сохраняет. Пользователь может найти фильм по ключевым словам и сохранить понравившуюся картину в личном кабинете в разделе "Сохраненные фильмы". 

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

* __React + Vite.js__ 
* __HTML__ 
* __CSS__ 
* __JavaScript__ 
* __ExpressJS__ 
* __MongoDB__ 
* __NodeJS__ 
* __API__  
* __Nginx__ 
* __JWT__ 
* __Postman__
* __YandexCloud__

## Ссылка на проект:
__Клиентская часть:__  [Movies-Explorer](https://zarmovies.nomoredomainsrocks.ru)  
__IP:__  158.160.115.22  

__Серверная часть:__ [Backend](https://github.com/EvgenyZaryanov/movies-explorer-api)

## Установка и запуск проекта:

1. Клонируйте репозиторий на свой компьютер.
2. Установите Vite командой __npm i vite__
3. Установите зависимости командой __npm install__.
4. Запустите проект командой __npm start__.
