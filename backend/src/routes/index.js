import test from "./expenses.js";
import express from "express";

const routes = (app) => {    
    app.route('/').get((req, res) => res.status(200).send('index'));
    app.use('/expenses', express.json(), test);
}

export default routes;