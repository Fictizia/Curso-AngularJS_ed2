Week 3 Milestone
===================

## Review last class

* Modules introduction.
* Expressions.
* Controllers.
* Scope.
* Routes introduction.

## New directives

* __[`ng-class`](https://docs.angularjs.org/api/ng/directive/ngClass)__ & CSS Animations.
* __[`ng-options`](https://docs.angularjs.org/api/ng/directive/select)__ & __[`ng-value`](https://docs.angularjs.org/api/ng/directive/ngValue)__.
* __[`ng-touch`](https://docs.angularjs.org/api/ngTouch)__ & [Photo Slider example](http://onehungrymind.com/build-sweet-angularjs-photo-slider-pt-2-ngtouch/).

## Declaration of values

* Using `.value()` and `.constant()` angular recipes.
* Take a look at `value-constant.js` for code explanation.
* __`.config(configFn)`:__ use this method to register work which needs to be performed on module loading.
* __`.run(initializationFn);`:__ use this method to register work which should be performed when the injector is done loading all modules.

## Filters

* [Using filter in view templates](https://docs.angularjs.org/guide/filter).
* Using a filter in a view template will reevaluate the filter on every digest, __which can be costly__, so we can use filters within controllers, directives and services.
* We can create custom filters with the `filter()` factory method.

## Custom directives

* [Creating custom directives](https://docs.angularjs.org/guide/directive).
* Use of the __`scope`__ option (not `$scope`).
* [Angular.element](https://docs.angularjs.org/api/ng/function/angular.element).

## Dependencies and Injection

* Take a look at `dependencies-injection.html` and  `dependencies-injection.js` for code explanation.
* [Dependencies and Injection](https://docs.angularjs.org/guide/di).
* [Module Loading & Dependencies](https://docs.angularjs.org/guide/module).

__A module__ is a collection of configuration and run blocks which get applied to the application during the bootstrap process. In its simplest form the module consist of a collection of two kinds of blocks:

1. __Configuration blocks__ - get executed during the provider registrations and configuration phase. Only providers and constants can be injected into configuration blocks. This is to prevent accidental instantiation of services before they have been fully configured.
1. __Run blocks__ - get executed after the injector is created and are used to kickstart the application. Only instances and constants can be injected into run blocks. This is to prevent further system configuration during application run time.

Take a look at `modules.js` for code explanation.

## Angular Forms

* [Angular Forms](https://docs.angularjs.org/guide/forms) and validation.
* [Poly Form Validation module for Bootstrap](http://angular-js.in/poly-form-validation/).
* Use of __`$error`__, __`$dirty`__ & __`$invalid`__.
* Use of `ng-model-options="{ updateOn: 'default blur', debounce: { default: 500, blur: 0 } }"`.
* Custom validation.

## Practice

* Use `ng-class` whenever it's appropiate.
* Structure your app so that configurable values are stored with the `value()` method.
* Create a new `directives.js` file for your future directive modules.
* Create and use a custom filter for your app.
* Use a custom __element__ directive, and a different __attribute__ directive in your app.
* Create custom directives for showing templates, instead of `ng-include`, so that you can manage your directive's controller.
* Use an angular form and validate it, using base angularjs CSS classes.