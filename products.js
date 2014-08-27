(function(){
var app = angular.module('myApp-products', []);
app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive('productSpecs', function() {
    return {
      restrict:'A',
      templateUrl: 'product-specs.html'
    };
  });
  
  })();