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