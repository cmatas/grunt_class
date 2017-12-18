(() => {
  nyApp.mainGreeting();

  myApp.module1.saySomething('sup');

  function myFunc() {
    var theHeading = documents.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunc();
  
})
