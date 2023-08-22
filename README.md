# Astro, Solid, Tailwind - Template

## 📚 Stack

| Name | Description | 
|:-----|:------------|
| [Astro](https://astro.build/) | SSR framework that allows you to work with components from React, Solid, Vue, etc. | 
| [Solid](https://www.solidjs.com/) | Very performant, JSX-based UI framework |
| [Tailwind](https://tailwindui.com/) | CSS framework |
| [Flowbite](https://flowbite.com/) | Component library with support for SolidJS, React, etc. Optional & easily removed | 
| Vanilla JS | Pure JS |

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── components/
│       └── Clicker.jsx
│       └── Counter.jsx
│       └── Flowbitten.jsx
│   └── layouts/
│       └── Layouts.astro 
│   └── pages/
│       └── index.astro
├── .gitignore
├── astro.config.json
├── package-lock.json
├── package.json
├── tailwind.config.json
└── tsconfig.js
```

### File Descriptions


| Path | Description | 
|:-----|:------------|
| `./src/components/Clicker.jsx` | SolidJS button example | 
| `./src/components/Counter.jsx` | SolidJS interval-based counter example | 
| `./src/components/Flowbitten.jsx` | SolidJS app example. Combined Flowbite and Tailwind along with our Clicker & Counter examples | 
| `./src/layouts/Layouts.astro` | Astro layout wrapper; includes [astro-seo](https://github.com/jonasmerlin/astro-seo) | 
| `./src/pages/index.astro` | App entry point | 
| `./astro.config.json` | Astro config; includes Tailwind & SolidJS plugins | 
| `./tailwind.config.json` | Tailwind config; includes Flowbite plugin | 
| `./tsconfig.js` | Manage invasive type checker | 


- Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

- There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

- Any static assets, like images, can be placed in the `public/` directory.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Resources

### Docs
- [Astro](https://docs.astro.build)
- [SolidJS](https://www.solidjs.com/docs/latest)
- [Tailwind](https://tailwindcss.com/docs)
- [Flowbite](https://flowbite.com/blocks/)

### Tutorials
- [Solid Overview (~2 min)](https://www.youtube.com/watch?v=hw3Bx5vxKl0)
- [Astro Overview (~3 min)](https://www.youtube.com/watch?v=gxBkghlglTg)
- [Tailwind Overview (~2 min)](https://www.youtube.com/watch?v=mr15Xzb1Ook)
- [Flowbite Crash Course (~20 min)](https://youtu.be/KaLxCiilHns?t=616)

### Other
- [NextJS vs Astro Performance Comparison](https://www.youtube.com/watch?v=wzRSYQ3b-Mk)

## 🧶 Roadmap
- Add [JSDoc](https://jsdoc.app)
    - Add `better-docs` after [this PR](https://github.com/SoftwareBrothers/better-docs/pull/247)
