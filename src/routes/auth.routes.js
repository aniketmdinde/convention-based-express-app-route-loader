import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json("I am in auth route"));

export default {
    basePath: "/auth",
    router
};