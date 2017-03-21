ng-ismobile - AngularJS module to check screen is of mobile or not
=======


A simple AngularJS module that checks your browser's screen size and return you true or false on the basis of below condition.

```
if(screenWidth < 480px), it will consider it as mobile browser
```

## How to get it ?

#### Manual Download
Download the from [here](https://github.com/rob-in/ng-ismobile/releases)

#### Bower
```
bower install ng-ismobile
```
<!--
#### Npm
```
npm install ng-ismobile
```
-->

#### CDN
ng-clip is available at [cdnjs](http://www.cdnjs.com/libraries/ng-ismobile)


## Usage

1. Add ng-ismobile.js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/ng-ismobile/dist/ng-ismobile.js"></script>
  ```

2. Set `ngIsMobile` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngIsMobile'])
  ```

3. User $rootScope.IS_MOBILE_SCREEN variable in your application:
  ```html
  $rootScope.IS_MOBILE_SCREEN === true; //current browser is of mobile
  $rootScope.IS_MOBILE_SCREEN === false; //current browser is of tablet/desktop/other
  ```
<!--

## Examples
You can check out this live example here: http://plnkr.co/ -->


## Credits
This project was initially forked from the application template seed here
[https://github.com/codehangar/ng-copy-text.git](https://github.com/codehangar/ng-copy-text.git)
