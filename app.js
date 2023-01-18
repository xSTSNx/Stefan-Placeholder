fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => putTodoinTable(json))

function putTodoinTable(json){

  console.log(json)
  for (var i = 0; i < json.length; i++) {
    document.getElementById("table").innerHTML+= "<tr><td>"+json[i].id+"</td><td>"+json[i].name+"</td><td>"+json[i].username+"</td><td>"+json[i].email+"</td></tr>";
    }
}
