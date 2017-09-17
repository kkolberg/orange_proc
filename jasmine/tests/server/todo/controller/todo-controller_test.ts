import { } from 'jasmine';
import { TodoController } from '../../../../server/api/todo/controller/todo-controller'


describe('TodoController', () => {
    describe('getId', () => {
        it('should return id', () => {
            let result = TodoController.getById(null, null);
            expect(result).toBeUndefined();
        });
    })
})