import AdminJS from "adminjs";
// /types/src/adminjs

import AdminJSExpress from "@adminjs/express";
import express from "express";

const app = express();

const adminJS = new AdminJS({
  databases: [],
  rootPath: "/admin",
  resources: [],
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);

app.listen(3333, () => {
  console.log("pinto");
});
