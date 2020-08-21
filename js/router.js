"use strict";

function Router(routes) {
  try {
    if (!routes) {
      throw "error: routes param is mandatory";
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById("app");
  },
  init: function () {
    debugger;
    var r = this.routes;
    (function (scope, r) {
      window.addEventListener("hashchange", function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: function (scope, r) {
    if (window.location.hash.length > 0) {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.htmlName, route.menuId);
        }
      }
    } else {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName, route.menuId);
        }
      }
    }
  },
  goToRoute: function (htmlName, routeId) {
    
    (function (scope) {
      var url = "views/" + htmlName,
        xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
      //getProductsData()
    })(this);
    if (routeId == 1111) {
      getProductsData();
      collapseBindListener();
    }
    if (routeId == 1112) {
      renderProductDetails(101)
    }
  },
};
