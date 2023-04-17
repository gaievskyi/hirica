# Project roadmap

```text
hirica                -> app root
├── docs              -> documentation
├── prisma            -> ORM
├── public            -> public assets
└── src               -> source code
    ├── pages         -> next.js & atomic design pages
    │   └── _app.tsx  -> app entry point
    ├── server        -> tRPC API and DB
    ├── styles        -> styles entry point
    ├── ui            -> ui components
    │   └── atoms     -> atomic design atoms
    │   └── molecules -> atomic design molecules
    │   └── organisms -> atomic design organisms
    │   └── templates -> atomic design templates
    │── utils         -> utility functions, constants, hooks, etc.
    └── env.mjs       -> validated environment variables
```
