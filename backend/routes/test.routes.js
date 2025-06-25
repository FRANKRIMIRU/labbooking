import { Router } from "express";

const testRouter = Router();

testRouter.get('/', (req, res) => res.send({ title: 'GET all lab tests' }));

testRouter.get('/:id', (req, res) => res.send({ title: 'GET a lab test' }));

testRouter.post('/', (req, res) => res.send({ title: 'CREATE new lab test' }));

testRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE lab test' }));

testRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE lab test' }));

export default testRouter;
