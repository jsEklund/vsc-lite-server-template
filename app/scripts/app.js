var Test = (function () {
    function Test() {
        this.name = name;
    }
    return Test;
}());
var StartUp = (function () {
    function StartUp() {
    }
    StartUp.main = function () {
        var test = "test";
        var test1 = new Test();
        test1.name = "test";
        console.log("This is a " + test1.name);
    };
    return StartUp;
}());
StartUp.main();
//# sourceMappingURL=app.js.map