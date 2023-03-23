import { Router } from "express";
import * as treeSiteController from "../controller/treeSiteController.js";
const router = Router();

router.post("/createTreeSites", treeSiteController.createTreeSites);

router.get("/getAllTreeSites", treeSiteController.getAllTreeSites);
router.get("/getTreeSitesById/:id", treeSiteController.getTreeSitesById);

export default router;
