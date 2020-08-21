"use stict";

function Route(name, htmlName, defaultRoute, menuId) {
  try {
    if (!name || !htmlName) {
      throw "error: name and htmlName params are mandatories";
    }
    this.constructor(name, htmlName, defaultRoute, menuId);
  } catch (e) {
    console.error(e);
  }
}

Route.prototype = {
  name: undefined,
  htmlName: undefined,
  default: undefined,
  menuId: undefined,
  constructor: function (name, htmlName, defaultRoute, menuId) {
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
    this.menuId = menuId
  },
  isActiveRoute: function (hashedPath) {
    return hashedPath.replace("#", "") === this.name;
  },
};
