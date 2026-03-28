function showGreeting() {
    var hour = new Date().getHours();
    var message = "";

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    var greeting = document.createElement("p");
    greeting.innerText = message;

    document.body.insertBefore(greeting, document.body.firstChild);
}

window.onload = showGreeting;
