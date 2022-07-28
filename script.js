function sayHelloWorld() {
    console.log("\n");
    console.log("*** Hello World from Type Script code. Update test ***");
    console.log("\n");
    var btn = document.getElementById("createChannel");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
    function handleClick() {
        console.log("Clicked!");
        this.removeEventListener("click", handleClick);
    }
}
sayHelloWorld();
