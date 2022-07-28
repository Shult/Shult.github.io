"use strict";
exports.__esModule = true;
var I_ownerCreateChannel_1 = require("../integration-services/clients/client-sdk/examples/I-ownerCreateChannel");
function sayHelloWorld() {
    console.log("\n");
    console.log("*** Hello World from Type Script code. Update test ***");
    console.log("\n");
    var btn = document.getElementById("createChannel");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
    (0, I_ownerCreateChannel_1.ownerCreateChannel)();
    function handleClick() {
        console.log("Clicked!");
        this.removeEventListener("click", handleClick);
    }
}
sayHelloWorld();
