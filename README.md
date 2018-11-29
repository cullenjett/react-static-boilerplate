# React static site generator boilerplate

Starter app to turn React code into pre-generated HTML pages.

## What is it?

🚧 Under construction 🚧

Most of the time we ship React applications as an (empty-ish?) HTML page that pulls in a JS bundle which is responsible for rendering markup. This works really well, but the downside is users have to wait until the JS bundle is downloaded and parsed to see or do anything. One way to fix that is to use [server side rendering](https://github.com/cullenjett/react-ssr-boilerplate) to turn your React app into an HTML string on the server before sending it to the client, but that requires a Node.js server running somewhere -- what if we want to continue serving static assets?

This project offers a solution by compiling your React app into fully-rendered, standalone HTML files that are hyrdrated with React functionality on load. **It's basically a worse/more naive version of the killer [Next.js](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.org/) packages -- you should probably use those if you need mega-baller static site generation**.

## Commands

- `npm run build`

  - Compiles your React app into static HTML files and outputs to the `dist` directory. This directory is what will eventually be (staticaclly) served as your application.

- `npm run serve`
  - Runs a static server for the generated `dist` directory.
