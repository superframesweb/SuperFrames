# SuperFrames

A modern, standalone Angular application for managing film scripts with authentication and role-based access control.

## 🚀 Live Demo

**[View Published App](https://superframesweb.github.io/SuperFrames/)**

## ✨ Features

- Standalone Angular 18+ architecture
- Responsive UI with SCSS styling
- Authentication system with role-based guards
- Film and script management
- Admin dashboard

## 🛠️ Quick Start

```bash
ng new film-script-app --standalone --routing --style=scss
cd film-script-app
# copy files from this repo into the project
npm install
ng serve --open
```

## 🔐 Authentication

This demo uses a local `assets/users.json` file for mock authentication. For production, replace with a secure server-side authentication flow.

## 📦 Build for Production

```bash
ng build --configuration production
```

Output files are generated in the `dist/` folder.
