**src** = https://www.youtube.com/watch?v=h7MTWLv3xvw  

Complete course on the new version of React router = **version 7**  

**date**: December 2024
**teacher**: PedroTech
**react-router version**: 7.8.2

# Intro

React router is now being used as a **framework** instead of a **library**.  

## What does that mean?

**Originally**, React Router was primarily considered a **library** focused on routing, helping developers 
manage **navigation** and **URLs** in React apps without offering much beyond that specific function.  

**Now**, React Router is viewed more like a **framework** because:
- It offers an integrated approach to handling `routing`, `rendering`, and `data fetching`.
- It enforces **conventions** and **patterns** for how `routes`, `components`, and `data loaders` work together.

The version 7 of React router manages more of the application lifecycle and logic holistically, becoming 
**A CENTRAL STRUCTURE AROUND WHICH THE APP IS BUILT**.  

In essence, React Router moves from being a "tool you use alongside others" (library) to a "core structure you 
build your app within" (framework).  

---

# Setting up a new application using the new React Router framework?

- run `npx create-react-router@latest .` (the `.` is to create the project in the current directory)
- once the project has been created, run `npm run dev` to start the development server

# The structure of a React Router v7 application

- The project is created using **Vite**.  
- in the `vite.config.ts` file, we can see it generates the application using **TailwindCSS**
- there's also a **`Dockerfile`**, so we can deploy our app using Docker

## The `root.tsx` file

This file is the entry point of our application.  

The `App` component is declared in this `/app/root.tsx` file.  
By default, the `App` function returns an `<Outlet />`, which is a component **placeholder** for any 
components that will represent the different **pages** in our application (the different **routes**).  




---
@6/51