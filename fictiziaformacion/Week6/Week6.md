Week 6 Milestone
===================

## Review last class

* Animations with AngularJS
* AngularJS and Material Design
* Famous-Angular integration
* Other integrations

## Unit Testing and E2E Testing

* [Unit Testing](http://www.smashingmagazine.com/2012/06/27/introduction-to-javascript-unit-testing/).
 * [AngularJS Unit Testing](https://docs.angularjs.org/guide/unit-testing).
 * [Introduction to Unit Testing directives](http://angular-tips.com/blog/2014/06/introduction-to-unit-test-directives/).
* E2E Testing.
 * [AngularJS E2E Testing](https://docs.angularjs.org/guide/e2e-testing).
 * [Protractor for AngularJS](http://angular.github.io/protractor/#/).
* [Advanced Testing and Debugging in AngularJS](http://www.yearofmoo.com/2013/09/advanced-testing-and-debugging-in-angularjs.html).
* [Testing with Hudson(Jenkins)](http://www.xnoccio.com//362-hudson-parte-1-introduccion/).

## Karma

[Karma](http://karma-runner.github.io/) is a JavaScript command line tool that can be used to spawn a web server which loads your application's source code and executes your tests. You can configure Karma to run against a number of browsers, which is useful for being confident that your application works on all browsers you need to support. Karma is executed on the command line and will display the results of your tests on the command line once they have run in the browser.

Karma is a NodeJS application, and should be installed through npm. Full installation instructions are available on the [Karma website](http://karma-runner.github.io/0.12/intro/installation.html).

Local installation:

```
npm install karma --save-dev

npm install karma-jasmine karma-chrome-launcher --save-dev

npm install -g karma-cli
```

Configuration:

```
karma init my.conf.js
```

Running:

```
karma start my.conf.js
```

If you name your file `karma.conf.js`, you can use `karma start`.

[Read this](http://karma-runner.github.io/0.12/plus/cloud9.html) if you're running karma from cloud9.

```
# Start Karma without browsers:
$ karma start --no-browsers
```

Now, open `http://<projectName>-<cloud9User>.c9.io/` in your browser.

You can integrate [Karma with Grunt](https://github.com/karma-runner/grunt-karma) and [Gulp](https://github.com/karma-runner/gulp-karma) if want.

[Karma Coverage](https://github.com/karma-runner/karma-coverage) is a nice plugin to follow your code test coverage.

## Jasmine

[Jasmine](http://jasmine.github.io/2.0/introduction.html) is a behavior driven development framework for JavaScript that has become the most popular choice for testing Angular applications. Jasmine provides functions to help with structuring your tests and also making assertions. As your tests grow, keeping them well structured and documented is vital, and Jasmine helps achieve this.

In Jasmine we use the describe function to group our tests together:

```
describe("sorting the list of users", function() {
  // individual tests go here
});
```

Grouping related tests within describe blocks and describing each individual test within an it call keeps your tests self documenting.

Finally, Jasmine provides matchers which let you make assertions:

```
describe('sorting the list of users', function() {
  it('sorts in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    var sorted = sortUsers(users);
    expect(sorted).toEqual(['jeff', 'jack', 'igor']);
  });
});
```

Jasmine comes with a number of matchers that help you make a variety of assertions. You should [read the Jasmine documentation](http://jasmine.github.io/2.3/introduction.html#section-Matchers) to see what they are. To use Jasmine with Karma, we use the [karma-jasmine](https://github.com/karma-runner/karma-jasmine) test runner.

## Silver Bullets

* __$parent:__ [Scope inheritance in AngularJS](https://cfdeepak.wordpress.com/2014/10/18/playing-with-scope-inheritance-in-angular/).
* __$resource:__ [Creating a CRUD App in Minutes with Angular’s $resource](http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/).
* [Authentication in Angular applications](http://www.sitepoint.com/implementing-authentication-angular-applications/).
* __$locationChangeStart, $routeChangeStart:__ [Cancelling route navigation in AngularJS](http://weblogs.asp.net/dwahlin/cancelling-route-navigation-in-angularjs).
* [Ionic Framework](http://ionicframework.com/).
 * [Where does the Ionic Framework fit in?](http://ionicframework.com/blog/where-does-the-ionic-framework-fit-in/).
 * [Cookie-based Authentication in AngularJS](http://ionicframework.com/blog/angularjs-authentication/).
 * [Publishing your Ionic application](http://ionicframework.com/docs/guide/publishing.html).
 * [Using Ionic with Firebase](https://www.firebase.com/docs/web/libraries/ionic/guide.html).
 * [ngCordova](http://ngcordova.com/).
* [GitHub JSPro user for example apps](https://github.com/jsprodotcom).

## Practice

* Finish your application.