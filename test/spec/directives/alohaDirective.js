'use strict';

describe('Directive: aloha', function () {
  beforeEach(module('profileApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<div aloha></div>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the aloha directive');
  }));
});
