'use strict';

/**
 *
 * @ngdoc directive
 * @module sample
 * @name sampleElem
 * @restrict E
 * @description 
 * This is a sample directive.
 *
 * @example
    <example module="sampleElemExample" deps="" animate="false">
      <file name="index.html">
        <sample-elem></sample-elem>
      </file>
      <file name="main.js">
        angular.module('sampleElemExample', ['sample']);
      </file>
    </example>
 *
 **/
angular.module('sample').directive('sampleElem', function () {
  return {
    restrict: 'E',
    template: '<div class="sample-awesome">Hello, AngularJS directive!</div>'
  };
});
