import { expect } from 'chai';
import 'mocha';
import { TodoController } from '../../../../server/src/api/todo/controller/todo-controller'
import { Request, Response, Send } from "express";
import * as TypeMoq from "typemoq";

describe('TodoController', () => {
    describe('getId', () => {
        it('should return id', () => {
            let blah = {} as Request;

            const req: TypeMoq.IMock<Request> = TypeMoq.Mock.ofType<Request>();
            const res: TypeMoq.IMock<Response> = TypeMoq.Mock.ofType<Response>();
            const json: TypeMoq.IMock<Response> = TypeMoq.Mock.ofType<Response>();
            json.setup(x => x.json(TypeMoq.It.isAny)).returns(() => { return TypeMoq.Mock.ofType<Response>().object; });
            res.setup(x => x.status(TypeMoq.It.isAnyNumber())).returns(() => { return json.object; });

            let result = TodoController.getById(req.object, res.object);
            //expect(result).toBeUndefined();
        });
    })
})