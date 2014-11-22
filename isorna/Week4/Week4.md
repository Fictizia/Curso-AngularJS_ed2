Week 4 Milestone
===================

## Review last class

* Declaration of values
* Filters.
* [Custom directives](https://docs.angularjs.org/guide/directive).
* Dependencies and Injection.
* Angular Forms.

## In-depth explanation of custom directives

* [Compile, pre-link & post-link](http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/).
 * Use the `compile` function to change the original DOM (template element) before AngularJS creates an instance of it and before a scope is created.
 * Use the `pre-link` function to implement logic that runs when AngularJS has already compiled the child elements, but before any of the child element's `post-link` functions have been called.
 * Use the `post-link` function to execute logic, knowing that all child elements have been compiled and all `pre-link` and `post-link` functions of child elements have been executed.
* [How `transclude` option affects directives](http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives-part-2-transclusion/).

## Providers and Recipes

* [Providers in AngularJS](https://docs.angularjs.org/guide/providers).
* __AngularJS Recipes:__ Value / Constant > Factory > Service, Provide.
* Modules and Recipes relationship.

## Services

* Services are objects whose API is defined by the developer writing the service.
* [Creating services with angular factory method](https://docs.angularjs.org/guide/services).
* __See:__ `$rootScope.$on('$routeChangeSuccess', function() {});`.
* Alternatively, you can register a Service with `$provide` within `config()`.

## Factories

* The __Factory Pattern__ in JavaScript.
* Take a look at `factory-pattern.js` for code explanation.
* The __Factory Recipe__ in AngularJS.
* [Differences between Factory, Service and Provider](http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/).

## Special Purpose Objects

* Controller.
* Directive.
* Filter.
* Animation.

## Firebase

* [Custom Rewrites & Redirection](https://www.firebase.com/docs/hosting/guide/url-redirects-rewrites.html).
* [Full Firebase Configuration](https://www.firebase.com/docs/hosting/guide/full-config.html).
* [Security & Rules](https://www.firebase.com/docs/security/quickstart.html).
* [User Based Security](https://www.firebase.com/docs/security/guide/user-security.html).

## Practice

* Create a new module for handling authentication, and inject that service in our app.
* Use a new module for your new directives. Take a look at `custom-directives.js` for code reference.
* Consider using a service for handling and storing your persistant data.
* Complete your app with the concepts we've covered today.