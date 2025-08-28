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

This file is the **entry point** of our application.  

The `App` component is declared in this `/app/root.tsx` file.  
By default, the `App` function returns an `<Outlet />`, which is a component **placeholder** for any 
components that will represent the different **pages** in our application (the different **routes**).  

---

# How Routing works in React Router v7?

## The `routes.ts` file

The routing is configured inside of `/app/routes.ts`.  
The file is only meant to be used to define the pattern of how our routing system is going to work.  

In the `/app/routes` folder, we have a `home.tsx` file by default, which is the same file that is 
used in `routes.ts`:
```ts
export default [index("routes/home.tsx")] satisfies RouteConfig;
```

The above line is the core of our application's routing configuration.  
It tells React Router what component to show for the main, or "index", route.  

It's exporting an **array** that will contain all your **route definitions**.  
Other parts of the React Router framework will import this **array** to build the application's **navigation**.  

`index()` is a helper function provided by the React Router framework.  
Its purpose is to define an **index** route.  

An index route is the **default** component that gets rendered when a user navigates to the **parent** route's path.  
Since this is at the **top level** of your configuration, it represents the root of your website (i.e., the path `/`).  

When a user visits your site's homepage, React Router will render the component exported from `/app/routes/home.tsx`.  

To **summarize**, this `routes.ts` file defines the application's routes, starting with the main **homepage**.  
It specifies that for the root URL (/), the component from the `routes/home.tsx` file should be rendered.  
Finally, it uses a TypeScript operator (`satisfies`) to validate that this configuration is structured correctly.

As we add more pages to our application, we will add more route definitions to this array.  

## Adding more routes

We first need to import the `route` package from the same source in `routes.ts`:
```ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";
```

Then, we can add another route using the `route` function:
```ts
export default [index("routes/home.tsx"), route()] satisfies RouteConfig;
```




---
@8/51