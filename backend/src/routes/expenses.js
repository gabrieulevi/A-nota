import { Router } from "express";

const routes = Router();

routes.get('/test', (req, res) => {
    res.status(200).json({respose : "test"})
})

export default routes;