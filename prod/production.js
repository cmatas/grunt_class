var myApp = {
  mainMessage : "welcome to the app!",

  mainGreeting() {
    console.log('hey! welcome to my app!');
  }
}

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I'm the second file");
  },

  doSomething( {
    console.log('called module1 doSomething function');
  }
}

myApp.module2 = {
  doSomething( {
    console.log('called module1 doSomething function');
  }
}

(() => {
  nyApp.mainGreeting();

  myApp.module1.saySomething('sup');

  function myFunc() {
    var theHeading = documents.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunc();
  
})
