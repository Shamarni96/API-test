fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addToWall(data))

function addToWall(list){
    list.forEach(function (item){
        let newLi = document.createElement("li")
        let newContent = document.createTextNode(item)
        newLi.appendChild(newContent)
        let currentUl = document.getElementById("list")
        document.body.insertBefore(newLi, currentUl)
    })
}

function addToList(){
 let addItems = document.getElementById("add")[0].value;
    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: addItems})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
})
}
