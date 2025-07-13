const response = await fetch(('http/localhost:8000/api'), {
  method:"GET",
  body: JSON.stringify({
    name: "musa",
    age: 23
  }),
  headers: {
    "Content-Type": "application/json"
  }

})