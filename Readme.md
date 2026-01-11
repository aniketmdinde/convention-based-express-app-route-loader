# @aniketmdinde/convention-based-express-app-route-loader

This is a learning project using which you can load routes dynamically in an express app without crashing and logging the routes which are loaded and which aren't.

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

Successful route loading output
```
✓ Loaded route: /auth
✓ Loaded route: /users
```



Failed route loading output (non crashing)
```
⚠ Skipped route: auth.routes.js (missing basePath or router)
❌ Failed route: load user.routes.js (SyntaxError: Unexpected token '}')
```

## My learnings
This project helped me to learn core library features of `Node.js`.

The following are my learnings:
- readdir() function
- how to dynamically import files in js and access defaults
- proper logging along with error handling