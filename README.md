# Crypto Checker

Created by Gary Au

## Demo link:

Access my site at [GitHub Pages](https://tcgaryau.github.io/crypto-checker/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Changelogs](#changelogs)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)

## About The App

Crypto Checker is an app that that uses cryptogecko api and displays the prices.
Crypto RSS News retrieved from Cointelegram.

## Screenshots

<a href="./screenshots/mainapp.png">
  <img
    alt="Screenshot"
    style="max-width: 100%"
    src="./screenshots/mainapp.png"
  >
</a>

## Changelogs

[0.3.1] - 2022-07-13

- Removed Axios and created a custom API Call util
- Added timer to refresh data every 60s.
- Added a news icon with the RSS Feed.

[0.3.0] - 2022-07-12

- Added Rss Feed with news from Cointelegraph

[0.2.0] - 2022-07-11

- Added Bootstrap 5 and Devextreme for styling
- Added responsive layout for mobile
- Changed info to a popup
- Changed localestring to a regex function to add commas

[0.1.0] - 2022-07-10

- Initial release with limited css

## Technologies

- React.js
- Typescript
- CSS
- React Router 6
- Bootstrap 5
- DevExtreme 22.1
- [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)

## Setup

- download or clone the repository
- run `npm install`
- npm start

## Approach

I used ReactJS while mainly styling with Bootstrap 5.
For the popup I used devextreme's popup component.
