<br>
<h1 align="center">D'Event</h1>
<p align="center"> 
  <img src="https://img.shields.io/badge/AdonisJS-^v6.9.0-green" alt="AdonisJS">
  <img src="https://img.shields.io/badge/npm-v9.8.1-red" alt="npm">
  <img src="https://img.shields.io/badge/node-v21.6.2-blue" alt="node">
</p>
<br>

## About D'Event

<p>D'Event is a web application that allows campus organizations to register their upcoming events, display event start times, and add new event schedules. It features an attractive and engaging interface built using AdonisJS.</p>

## 🚀 Installation

1. clone the repository

```bash
git clone https://github.com/Akhyarrrrr/D-Event
```

2. go to folder and run

```bash
npm install
```

3. migrate the table

Copy the contents of `.env.example` file to new `.env` file:

```sh
cp .env.example .env
```

jika error jalankan

```sh
copy .env.example .env
```

Create an application encryption key:

```sh
node ace generate:key
```

ubah bagian APP_KEY di file .env dengan hasil generate:key

Create an empty database and fill in the `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_DB_NAME`, `MYSQL_USER` and `MYSQL_PASSWORD` fields in the `.env` file to match the credentials of your newly created database.

following the .env file, change `MYSQL_DB_NAME = healthgearshare`, so make the empty database name is `healthgearshare`

Run the migrations:

```sh
node ace migration:fresh --seed
```

4. run serve with

```bash
node ace serve --watch
```

## 📞 Contact info

if any problem contact whatsapp

```bash
https://api.whatsapp.com/send?phone=6282275331698
```
