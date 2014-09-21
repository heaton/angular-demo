'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('htWebappApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, localStorageService) {
    scope = $rootScope.$new();
    spyOn(localStorageService, "get").andReturn("");
    spyOn(localStorageService, "add").andCallFake(function(){});
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope,
      localStorageService: localStorageService
    });
  }));

  it('should add items to the list', function() {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  })

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
