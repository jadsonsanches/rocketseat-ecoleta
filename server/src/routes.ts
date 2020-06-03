import express, { request } from "express";
import knex from "./database/connection";

import PointsController from "./controller/pointsController";
import ItemsController from "./controller/itemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;

// Request Param: Parametros que vem na própria rota que identificam um recurso
// Query Param: Parametros que vem na própria rota, geralmente opcionais para filtros, paginação
// Request Body: Parametros para criação/atualização de informações

// index, show, create, update, delete
