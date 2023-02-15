import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoryRepositories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadExists = categoriesRepository.findByName(name);

  if (categoryAlreadExists) {
    return response.status(400).json({ message: "Category already exists" })
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const listAll = categoriesRepository.list();
  return response.json(listAll);
});

export { categoriesRoutes };
