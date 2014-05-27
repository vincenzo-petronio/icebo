'use strict';

describe('Filter: filterOrderByCount', function () {

  // load the filter's module
  beforeEach(module('iceboApp'));

  // initialize a new instance of the filter before each test
  var filterOrderByCount;
  beforeEach(inject(function ($filter) {
    filterOrderByCount = $filter('filterOrderByCount');
  }));

  it('should return the input prefixed with "filterOrderByCount filter:"', function () {
    var text = 'angularjs';
    expect(filterOrderByCount(text)).toBe('filterOrderByCount filter: ' + text);
  });

});
