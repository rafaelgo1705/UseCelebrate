import { Router } from "express";
import { PostController } from "./Controllers/PostController";
import { PostStore } from "./Validations/Posts/PostStore";

const postController = new PostController();
const postStore = new PostStore();

const routes = Router();

routes.post("/posts", postStore.validate(), postController.store); // Passo o validator como middleware na definição da rota

export { routes };
