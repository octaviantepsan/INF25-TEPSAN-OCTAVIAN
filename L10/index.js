localStorage.setItem("limba", "ro");

console.log(localStorage.getItem("limba"));
console.log(localStorage["limba"]);

//localStorage.removeItem("limba");

let user = {nume: "sal", oras: "ct"};

stringUser = JSON.stringify(user);

localStorage["user"] = stringUser;

parsedUser = JSON.parse(localStorage["user"]);
console.log(parsedUser);

sessionStorage.setItem("test", "test");

//location.reload();
//history.forward();