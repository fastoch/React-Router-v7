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

This file, located in the `app` folder, is the **entry point** of our application.  

The `App` component is now being declared in this `/app/root.tsx` file, and exported from there.  
The `App` remains the main component for the root route `/`.  

By default, the `App` function returns an `<Outlet />`, which is a component **placeholder** for any 
components that will represent the different **pages** in our application (the different **routes**).  

## The `<Outlet />` component

By returning `<Outlet />`, the `App` itself doesn't render any visible content.  
Instead, it delegates the rendering to one of its **child** routes.  

The `<Outlet />` tells the router where to render the UI for any matching child routes.  
When we navigate to a URL that matches a nested route (for example, `/about` or `/products/123`), 
`react-router` will render the component for that specific route in place of the `<Outlet />`.  

We can think of it as a frame. The `Layout` and `App` components provide the overall structure and frame for our application,  
and the `<Outlet />` is the space where the content of the **currently active** page is displayed.

---

# How Routing works in React Router v7?

## The `routes.ts` file

The routing is configured inside of `/app/routes.ts`.  
The file is only meant to be used to define the pattern of how our routing system is going to work.  

In the `/app/routes` folder, we have a `home.tsx` file by default, which is the same file that is 
used in `routes.ts`:
```ts
export default [
  index("routes/home.tsx")
] satisfies RouteConfig;
```

The above line is the core of our application's routing configuration.  
It tells `react-router` what component to show for the main (or "index") route.  

It's exporting an **array** that will contain all our **route definitions**.  
Other parts of the `react-router`framework will import this **array** to build the application's **navigation**.  

`index()` is a helper function provided by the `react-router` framework.  
Its purpose is to define an **index** route, the initial route for our app.  

An index route is the **default** component that gets rendered when a user navigates to the **parent** route's path.  
Since this is at the **top level** of our configuration, it represents the root of our website (i.e. the path `/`).  

When a user visits our site's homepage, `react-router` will render the component exported from `/app/routes/home.tsx`.  

To **summarize**, this `routes.ts` file defines the application's routes, starting with the main **homepage**.  
It specifies that for the root URL (`/`), the component from the `routes/home.tsx` file should be rendered.  
Finally, it uses a TypeScript operator (`satisfies`) to validate that the configuration is structured correctly.  

As we add more pages to our application, we will add more route definitions to this array.  

---

## Adding more routes

1. We first need to import the `route` package from the same source in `routes.ts`:
```ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";
```

2. Then, we can add another route using the `route()` function:
```ts
export default [
  index("routes/home.tsx"), 
  route()
] satisfies RouteConfig;
```

3. To create the new route, we need to create a new file in our `routes` folder. We'll name it `about.tsx`:
```tsx
export default function About() {
  return <div>Hey, welcome to the about page!</div>;
};
```

4. Finally, we can add the new route as a parameter to the `route()` function:
```ts
export default [
  index("routes/home.tsx"), 
  route("/about", "routes/about.tsx")
] satisfies RouteConfig;
```

As you see, we actually need to pass 2 parameters to the `route()` function: the path and the file.  
While the `index()` function only requires 1 parameter: the file.  

---

## How to define routes that accept parameters to their route definition?

1. Inside the `routes` folder, create a file named `post.tsx`

2. Modify `routes.ts` to add the new route:
```ts
export default [
  index("routes/home.tsx"), 
  route("/about", "routes/about.tsx"),
  route("/post/:id", "routes/post.tsx")
] satisfies RouteConfig;
```

3. Define the **loader** function inside `post.tsx` that will load data into the component:
```tsx

```

4. Define the action function inside `post.tsx`:
```tsx

```

## The `loader` and `action` functions

**Every** component in React Router version 7 is going to require a **loader** function and an **action** function.  
These functions have to be named `loader` and `action` in order for `react-router` to recognize them as such.  

As the name indicates, the loader will be responsible for loading data from an API, or from different parts of our app.  

---

## How to create nested routes?

1. Create new routes: `dashboard.tsx`, `finances.tsx` and `personal-info.tsx`  

2. `finances` and `personal-info` will be children of the `dashboard` route

3. we need to declare the new dashboard route in `routes.ts`

4. we add the `<Outlet/>` component to the dashboard component (it will host the child routes):
```tsx
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      {" "}
      Hey, welcome to the dashboard page!
      <Outlet />
    </div>
  )
};
```

5. finally, we add an array of child routes to the dashboard route as a third parameter to the `route()` function:

```ts
// Nested Routes
route("/dashboard", "routes/dashboard.tsx", [
  route("finances", "routes/finances.tsx"),
  route("personal-info", "routes/personal-info.tsx"),
]),
```

---

## Using Layouts for nested routes

We can do nested routes without adding any segment to the URL.  
For example, `localhost:5173/dashboard/finances` becomes `localhost:5173/finances`.  

To do that, we just need to turn the dashboard `route` into a `layout`:
```ts
// Nested Routes
layout("routes/dashboard.tsx", [
  route("finances", "routes/finances.tsx"),
  route("personal-info", "routes/personal-info.tsx"),
]),
```
As you can see, we also had to remove the first parameter (the path) from the `layout` function.  
And of course, we also had to import the `layout` component from `"@react-router/dev/routes"`.  

This will display the same UI elements as before: the dashboard component AND the child component.  

---

# Rendering strategies: Client vs Server

React router supports multiple rendering strategies.  
By default, it uses server-side rendering.  

To enable client-side rendering, open the `react-router.config.ts` file and set the `ssr` property to `false`:  
```ts
import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
} satisfies Config;
```  

## Benefits of server-side rendering (SSR)

https://www.perplexity.ai/search/benefits-of-server-side-render-jrFf2y6XSwalWOo87y.lJw




---
@24/51