import express from "express";
import {
  getAllUser,
  getSIngleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} from "../controllers/userController.js";
import {
  authenticateUser,
  authorizationPermission,
} from "../middleware/authentication.js";

const router = express.Router();

router
  .route("/")
  .get(authenticateUser, authorizationPermission("admin", "owner"), getAllUser);
router.route("/showMe").get(authenticateUser, showCurrentUser);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/updateUserPassword").patch(authenticateUser, updateUserPassword);

router.route("/:id").get(authenticateUser, getSIngleUser);

export default router;
