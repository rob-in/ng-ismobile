/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

var MODULE_NAME = 'ngIsMobile';
var angular;

// Check for CommonJS support
if (typeof module === 'object' && module.exports) {
    angular = require('angular');
    module.exports = MODULE_NAME;
} else {
    angular = window.angular;
}

angular.module(MODULE_NAME, []).run(function($rootScope, $window) {

    function _checkScreen() {
        var _windowWidth = $window.innerWidth;
        $rootScope.IS_MOBILE_SCREEN = _windowWidth < 480;
    }

    _checkScreen();

    angular.element($window).bind('resize', function() {
        _checkScreen();
        $rootScope.$apply();
    });
});

})();