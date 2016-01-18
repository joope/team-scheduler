describe('UserController', function(){
	var controller, scope;

  	beforeEach(function(){
            module('WannaApp');

            inject(function($controller, $rootScope) {
                    scope = $rootScope.$new();
                    scope.userLoggedIn = true;
                    controller = $controller('UserController', {
                    $scope: scope
                });
            });
        });

	it('should not have any todos initially', function(){
		expect(scope.todos.length).toBe(0);
	});

	it('should be able to add a todo by calling the addTodo function', function(){
            scope.newTodo = "You should enjoy the holidays!";
            scope.addTodo();
            expect(scope.todos.length).toBe(1);
            expect(scope.todos[0].task).toBe("You should enjoy the holidays!");
            expect(scope.todos[0].priority).toBe(1);
            expect(scope.todos[0].done).toBe(false);
	});
});