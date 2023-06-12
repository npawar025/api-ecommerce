import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} from "../controllers/productController.js";
import {
  authenticateUser,
  authorizationPermission,
} from "../middleware/authentication.js";
import { getSingleProductReviews } from "../controllers/reviewController.js";

const router = express.Router();

router
  .route("/")
  .post([authenticateUser, authorizationPermission("admin")], createProduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post([authenticateUser, authorizationPermission("admin")], uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizationPermission("admin")], updateProduct)
  .delete([authenticateUser, authorizationPermission("admin")], deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);

export default router;
