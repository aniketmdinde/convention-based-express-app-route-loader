import path from "path";
import fsp from "fs/promises";


export async function loadRoutes(app, dir) {
  const absoluteDirPath = path.resolve(dir);
  
  const files = await fsp.readdir(absoluteDirPath, {encoding: "utf-8"});

  for(const file of files) {
    if (!file.endsWith(".routes.js")) continue;

    const absoluteFilePath = path.join(absoluteDirPath, file);

    let module;
    
    try {
      module = await import(absoluteFilePath);
    } catch (error) {
      console.warn(`⚠ Failed to load ${file} (${error})`);
      continue;
    }

    if (!module.default?.basePath || !module.default?.router) {
      console.warn(`⚠ Skipped route: ${file} (missing basePath or router)`);
      continue;
    }

    try {
      app.use(module.default.basePath, module.default.router);
      console.log(`✓ Loaded route: ${module.default.basePath}`);
    } catch (error) {
      console.warn(`⚠ Failed to load ${file} (${error})`);
      continue;
    }
  }
}