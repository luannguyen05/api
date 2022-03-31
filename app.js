const url = "https://reqres.in/api/users?page=2";
function postData(url, data = {}) {
  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
postData(url, { name: "le", age: 18 });
