---
title: "Setting Up an Express Project with TypeScript"
description: "This guide walks you through setting up an Express.js project with TypeScript from scratch."
date: "Jun 19 2024"
heroImage: "https://muhammadputraage.com/assets/email-header.png"
---

This guide walks you through setting up an Express.js project with TypeScript from scratch.

## Prerequisites

Make sure you have the following installed:

- Node.js (>= 14)
- npm or yarn

---

## 1. Initialize the Project

```bash
mkdir express-ts-app
cd express-ts-app
npm init -y
```

---

## 2. Install Dependencies

Install Express and TypeScript along with type definitions:

```bash
npm install express
npm install -D typescript ts-node-dev @types/node @types/express
```

---

## 3. Configure TypeScript

Create a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```

---

## 4. Create the Project Structure

```bash
mkdir src
touch src/index.ts
```

In `src/index.ts`, add:

```ts
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello from TypeScript + Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 5. Add Dev Scripts

Update `package.json`:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

---

## 6. Run the Project

Start the server in development mode:

```bash
npm run dev
```

You should see:

```
Server is running on http://localhost:3000
```

---

## 7. Build for Production

```bash
npm run build
npm start
```

---

## Optional: Linting and Formatting

For a more polished dev setup, you can add ESLint and Prettier:

```bash
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Then configure `.eslintrc.json` and `.prettierrc` as needed.

---

## You're All Set!

You now have a working Express.js app powered by TypeScript 🚀
