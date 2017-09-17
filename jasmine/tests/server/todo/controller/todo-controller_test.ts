import { } from 'jasmine';
import { TodoController } from '../../../../server/api/todo/controller/todo-controller'
import * as express from "express";

describe('TodoController', () => {
    describe('getId', () => {
        it('should return id', () => {
            let req = {} as express.Request;
            req.params = {};
            req.params.id = "q";
            let res = {} as express.Response;
            let result = TodoController.getById(req, res);
            //expect(result).toBeUndefined();
        });
    })
})