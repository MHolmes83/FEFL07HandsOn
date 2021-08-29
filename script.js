function regexChecker() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let nameRegex = /^[A-Z][a-z]+/g;
    if (firstName.match(nameRegex) && lastName.match(nameRegex))
    {
        alert("Yay! Your inputs were all correct!");
    }
    else {
        alert("Oh no! That's an invalid format");
    }
}