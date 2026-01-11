# @aniketmdinde/convention-based-express-app-route-loader

This is a learning project using which you can load routes dynamically in an express app.

This is one of the projects which will help me creating a bigger project (my first npm package).

Since I am a learner and I have no prior knowledge of creating packages, I focused on learning through documentation having ChatGPT as a mentor. 

Note:
>None of the code written is produced or copied from ChatGPT, it was just used to create a roadmap of the entire project by creating milestones defining what to achieve and evaluate my code which I have written giving me feedback on improving my code.

## Features
The following are the features:
- [Load Routes](#loadRoutes)


### <a name="loadRoutes"></a>Load Routes

```
import { renderFile } from "./renderFile.js";

const res = await renderFile(
    "./templates/user.tpl", 
    { name: "aniket", platform: "express gen" }
    
)
console.log(res);

```

Success Output
```
✓ Loaded route: /auth
✓ Loaded route: /users
```



Failed Output (route not able to add due to error but no crash)
```
⚠ Skipped route: auth.routes.js (missing basePath or router)
❌ Failed route: load user.routes.js (SyntaxError: Unexpected token '}')
```

## My learnings
This project helped me to learn core library features of `Node.js`.

The following are my learnings:
- fs module
- how a template engine works
- piping feature of template engine
- Modularized and production ready code