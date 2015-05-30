Week 1 Milestone
===================

__What's AngularJS?__

* AngularJS introduction.
 * Is an structural framework, not a library and not really an usual framework.
 * A complete client-side solution for CRUD apps.
 * It's not meant for high-intensive DOM manipulation apps, like games.
 * AngularJS gives the same value to testing than developing.
* Generic MVC explanation.
* Take a look at [this sample application](http://fictizia-angularjs.firebaseapp.com/), open chrome developer tools.
* Talk briefly about AngularJS dependency injection.

__Workspace configuration__

* Our working tool will be Google Chrome, with __AngularJS Batarang__ developer extension.
* Our project will be saved on a [GitHub](http://github.com/) repository, I've to add your users as project collaborators.
 * Setup git: `git config remote.origin.push HEAD`.
 * Git commands: `git add`, `git rm`, `git commit -m "Message"`, `git push`, `git pull`.
 * Remember to use Gists if you need them!.
* We use [c9.io](http://c9.io/) as a coding platfform, you must clone our github project from the Dashboard.
* We'll use a [Firebase](http://firebase.com/) database and hosting, you'll have to create a Firebase account and then build a local working __angularfire-seed__ instance of your app (I'll explain, no worries).
 * Install firebase: `sudo npm install -g firebase-tools`.
 * Firebase commands: `firebase bootstrap`, `firebase deploy`.
 * Change to your project folder and update bower installation: `npm install`.
* Our project will be based on [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/) for quick style markup.
* We'll start with simple html page, pointing to the libraries we'll use, create a folder with your __GitHub username__ and copy `/isorna/app-index.html` inside it.

__Application__

* Now we'll create an AngularJS application. See __Practice__.
* __Directive__
 * Apply special behaviour to attributes or elements in HTML, thanks to `$compile`, AngularJS's HTML Compiler object.
 * Restricted by type.
 * Uses dashed-case.
 * `ng-app`.
 * `ng-view`. 
 * `ng-include`.
* __Binding__
 * `ng-model`.
 * `ng-bind`. 
 * [Template -> View <-> Model](https://docs.angularjs.org/guide/databinding).
 * Using a __fixture__ until having a database.
* __Route__
 * _"If this, then that"_.
* __Controller__
 * App UI logic.
 * Uses CamelCase.
 * Contains `$scope` with local variables and methods.

__Practice__

1. Using Bootstrap, build a mockup of a forum with:
 1. An index page, with a welcome message and a list of all messages.
 1. A login page, with a minimal user form.
 1. A message view/post page.
2. Now create the folders __partials__ and __templates__ inside your project.
 2. It's time to create a different `html` page for each code widget that may be reused.
 2. Include each __template__ that's necessary for each different page with a directive.
3. Let's create our __js/app.js__, and build a module for our app.
 3. Add a __$routeProvider__ for each partial previously separated, and assign a __controller__ for each one.
 3. Create new __controllers__ if needed.
4. __Tasks for next week:__ give some color and layout to our forum using Bootstrap.