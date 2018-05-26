var TestController = require("../controllers/testController");
var HomeController = require("../controllers/homeController");

window.namespace = window.namespace || {};

(function(namespace){

    var routes = [
        {
            route: "test",
            controller: TestController
        },
        {
            route: "home",
            controller: HomeController
        }
    ];

    namespace.getRoute = function(route){
        routes.map(function(x) {
            if(x.route === route){
                x.controller();
            }
        })
    }
})(window.namespace);