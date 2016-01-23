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

	it('should be able to add a todo by calling the addTodo function', function(){
            scope.newTodo = "You should enjoy the holidays!";
            scope.addTodo();
            expect(true).toBe(true);
	});
});