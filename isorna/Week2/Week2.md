Week 2 Milestone
===================

## Review last class

* Directives
* Binding
* Controller
* Route

## New directives
* Use of __data-ng-directiveName__ for HTML5 validation.
* __`ng-repeat`__, __`ng-init`__ & __`$index`__.
* __`ng-click`__.
* __`ng-hide`__, __`ng-show`__.

## Modules introduction

* Assigning a __module__ to `ng-app`.
* __Further discussion:__ 
 * Using [Dependency Injection](https://docs.angularjs.org/guide/di) for using other services.
 * [In-depth explanation of Modules](https://docs.angularjs.org/guide/module).

## Expressions

* [Using expressions](https://docs.angularjs.org/guide/expression) within HTML code with `{{ CODE }}`.
* Expressions are meant for models.
* They can also be used for calling js functions, but they're not allowed to use complex logical operators, only basic operations and single line conditions `(x ? y : z)`.
* Expressions may be used to format the output of a value or model, e.g. `{{ expression | filter }}` [with filters](https://docs.angularjs.org/guide/filter) ([list of basic filters](https://docs.angularjs.org/api/ng/filter)).

## Controllers

* [In Angular, a Controller](https://docs.angularjs.org/guide/controller) is a JavaScript constructor function that is used to augment the Angular Scope.
* Use controllers to:
 * Set up the initial state of the $scope object.
 * Add behavior to the $scope object.
* Do not use controllers to:
 * __Manipulate DOM__ — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
 * __Format input__ — Use angular form controls instead.
 * __Filter output__ — Use angular filters instead.
 * __Share code or state across controllers__ — Use angular services instead.
 * __Manage the life-cycle of other components__ (for example, to create service instances).
* Use of alias for simplicity `controller as alias`.

```js
someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
...
$scope.aMethod = function() {
  ...
}
...
}]);
```

## Scope

* In order to react to events or execute computation in the view we must provide behavior to the scope. We add behavior to the scope by attaching methods to the `$scope` object. These methods are then available to be called from the template/view.
* Any objects (or primitives) assigned to the scope become model properties.
* Any methods assigned to the scope are available in the template/view, and can be invoked via angular expressions and ng event handler directives (e.g. ngClick).

## Routes introduction

* [How to use routes in AngularJS](https://docs.angularjs.org/api/ngRoute/service/$route).
* Use of `ng-view` to load a partial.

## Firebase

* [Configure Facebook login](https://www.firebase.com/docs/web/guide/user-auth.html).


## Practice

* Create our app controller.
* Update firebase version to __`//cdn.firebase.com/js/client/2.0.0/firebase.js`__.
* Use routes for loading each menu partial.
* Add facebook login support to our app.