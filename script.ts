function sayHelloWorld(): void {
  console.log("\n");
  console.log("*** Hello World from Type Script code. Update test ***");
  console.log("\n");
  let btn = document.getElementById("createChannel");
  btn?.addEventListener("click", handleClick);

  function handleClick() {
    console.log("Clicked!");
    this.removeEventListener("click", handleClick);
  }

}

sayHelloWorld();
