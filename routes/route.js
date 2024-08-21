import express from "express";
import {
  getMahasiswa,
  getMahasiswaByNim,
  createMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
} from "../controller/mahasiswaController.js";

const router = express.Router();

router.get("/", getMahasiswa);
router.get("/find", getMahasiswaByNim);
router.post("/create", createMahasiswa);
router.delete("/delete", deleteMahasiswa);
router.put("/update", updateMahasiswa);

export default router;
