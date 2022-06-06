# CRM_Table_View

## Typescript

Typescript is the language we are using, its Javascript with "Types". This helps make the app alot more secure, and to help protect us against ourselves.

## /src

This folder will hold all the source code, and later will have a mirror /dist folder for holding distribution code.

### index.ts

The entry point for the app. This should hold the first lines of code to be run and setup how the app will run.

## .gitignore

This file allows git to ignore any files or folders named in it. Empty right now but later will will hide important keys or information in this.

## .env

This file holds any "environment variables". These are variables that are stored on the system or computer that runs our code but allows the variables to be hidden from plain view.

## To Run:

deno run --allow-env --allow-read --allow-net ./src/index.ts
