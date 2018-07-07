const Navigator = require("../../src/utils/navigator");
const Router = require("../../src/router/router");

describe("router", () => {

    let navigator;

    beforeEach(() => {
        navigator = Navigator.navigatorContract();
        spyOn(navigator, "setHashLocation");
    });

    it("resolves route when routes match", () => {
        let wasCalled = false;
        const routes = [
            {
                route: "test",
                resolve: function(){wasCalled = true},
            }
        ];
        let router = Router(navigator, routes);
        spyOn(navigator, "getLocationHash")
            .and
            .returnValue("test");

        router.resolveCurrentRoute();

        expect(wasCalled).toBeTruthy();
        expect(navigator.setHashLocation).toHaveBeenCalled();
    });

    it("resolves route when routes not match", () => {
        let wasCalled = false;
        const routes = [
            {
                route: "default",
                resolve: function(){wasCalled = true},
                routeByDefault: true
            }
        ];
        let router = Router(navigator, routes);
        spyOn(navigator, "getLocationHash")
            .and
            .returnValue("notMatchRoute");

        router.resolveCurrentRoute();

        expect(wasCalled).toBeTruthy();
        expect(navigator.setHashLocation).toHaveBeenCalled();
    });

});