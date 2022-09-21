import "dotenv/config";
import "./database";
import AdminJS from "adminjs";
// /types/src/adminjs
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UsersResource from "./resources/UsersResource";
import ProjectsResource from "./resources/ProjectsResource";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
  databases: [],
  rootPath: "/admin",
  resources: [UsersResource, ProjectsResource],
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);

app.listen(3333, () => {
  console.log("pinto");
});
