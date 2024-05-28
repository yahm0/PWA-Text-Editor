# PWA Text Editor

A Progressive Web Application (PWA) Text Editor that runs in the browser and functions offline. This application uses IndexedDB for data persistence, Webpack for bundling, and Workbox for service worker management. The app can be installed on the desktop as a PWA.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features
- Create notes or code snippets with or without an internet connection
- Save content automatically when the DOM window is unfocused
- Offline functionality with service worker
- IndexedDB for data persistence
- Installable as a PWA

## Installation

1. Clone the repository:

```sh
    git clone <your-repo-url>
```
2. Install dependencies for both client and server:

```sh
    cd client && npm install
    cd ../server && npm install
```

3. Start the application:

```sh
    npm run start
```

## Deployment

The application is deployed to Render. Follow the Render Deployment Guide to deploy your application.

## Technologies Used

- IndexedDB
- Webpack
- Workbox
- Express.js
- Babel

## License

This project is licensed under the MIT License.


`https://github.com/yahm0/PWA-Text-Editor`  URL of the repository.
