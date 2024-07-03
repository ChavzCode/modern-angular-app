# Angular App | Clean Architecture

Hey there!👋 This project is designed to showcase some of the best practices in building a modern Angular application. It leverages the latest Angular 17 features like signals and standalone components, follows Clean Architecture principles, and emphasizes a well-structured design system. Below is a comprehensive guide to understanding and running, this project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Atomic Design](#atomic-design)

## Introduction

This Angular App demonstrates the implementation of some of the best practices and cutting-edge technologies to build scalable and maintainable front-end app.

## Features

- **Angular 17**: Utilizing the latest features and improvements.
- **Clean Architecture**: Ensuring a scalable and maintainable codebase.
- **Tailwind CSS**: Implementing a modern utility-first CSS framework.
- **Design Systems**: Consistent and reusable UI components.
- **SOLID Principles**: Writing clean, understandable, and maintainable code.
- **Good Commit Practices**: Following conventional commits for clear history.
- **Atomic Design**: Structuring components for scalability and reusability.

## Getting Started

### Prerequisites

- Node.js (>= 16.0.0)
- Angular CLI (>= 17.0.0)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/modern-angular-app.git
   cd modern-angular-app
   ```
2. Install dependencies:
   ```sh
    npm install
   ```
3. Install dependencies:
   ```sh
    ng serve
   ```
4. Use mock server (optional)<br>
    By default the app implements a public API. Despite the app having some controls to avoid unwanted responses from the API you may want to try the mock server.

    ```sh
    npm run mock-server
   ```
   Note you will have to change the environment variable to redirect traffic to your localhost

   ```js
    export const enviroment = {
      production: false,
      API_URL: 'http://localhost:3000',  //Variable to change
      auth_on: false,
    }
   ```


## Project Structure
   ```sh
    .
    ├── acceptancetest
    ├── doc
    ├── e2e
    ├── mock-server
    ├── reports
    └── src
        ├── app
        │   ├── domain
        │   │   ├── models
        │   │   └── usecases
        │   ├── infrastructure
        │   │   ├── adapters
        │   │   └── helpers
        │   └── ui
        │       ├── core
        │       ├── pages
        │       └── shared
        ├── assets
        └── environments
   ```

## Design System 
The application uses a design system approach to ensure consistent and reusable UI components. We leverage Tailwind CSS for styling and maintain a component library.

## Atomic Design
Following the Atomic Design methodology, the application is structured into:

- **Atoms:** Basic building blocks (e.g., buttons, inputs).
- **Molecules:** Combinations of atoms (e.g., form fields).
- **Organisms:** Complex components (e.g., navigation bars).
- **Templates:** Page-level components with placeholders.
- **Pages:** Specific views of the application.


***
<br>

Thank you for checking out this app. If you have any questions or feedback, feel free to reach out!
