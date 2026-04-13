# Platzi FakeStore API Performance Suite

## Overview
This project serves as a performance testing tool. The goal here is to measure API response times.

## Tech Stack
* **Engine:** [Playwright Test](https://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **IDE:** [WebStorm](https://www.jetbrains.com/webstorm/)
* **Target API:** Platzi Fake Store API
* **Reporter:** Playwright HTML Reporter

## Getting Started

### Prerequisites
* **Node.js** (v25.7.0 or higher)
* **npm** or **yarn**

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rzempi/FakeApiPlatzi-petproject.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright Browsers:**
    ```bash
    npx playwright install
    ```

## Running Tests

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Run all performance tests |
| `npx playwright show-report` | View the graphical HTML report |

## Project Structure
```text
FakeApiPlatzi-petproject
│
├── README.md
│ 
├── tests/                  # API performance tests
│ 
├── src/
│   └── utils/              # Reusable utility functions
│ 
├── .github/workflows/      # GitHub Actions CI configuration
│ 
├── playwright.config.ts  
├── tsconfig.json     
├── package-lock.json
├── package.json
├── .gitignore
└── .nvmrc