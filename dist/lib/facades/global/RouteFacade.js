"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../lib/http/routing/RouteFactory");
const Facade_1 = require("../Facade");
const Najs_1 = require("../../../lib/core/Najs");
const najs_binding_1 = require("najs-binding");
const constants_1 = require("../../constants");
const facade = Facade_1.Facade.create(Najs_1.Najs, 'route', function () {
    return najs_binding_1.make(constants_1.GlobalFacadeClass.Route);
});
exports.Route = facade;
exports.RouteFacade = facade;
