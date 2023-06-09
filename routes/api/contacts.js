const express = require("express");

const ctrl = require("../../controllers/contacts");
const { addSchema, favoriteSchema } = require("../../models/contacts");
const { validateBody, authenticate, isValidId } = require("../../middlewares");

const router = express.Router();

// ToDo: set valid message to add and update

router.post("/", authenticate, validateBody(addSchema), ctrl.add);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateById
);

router.put(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(favoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
