document.getElementById('nickname').innerHTML = 'John Doe'
document.getElementById('age').innerHTML = '30'
document.getElementById('hometown').innerHTML = 'London'

let items = document.getElementsByTagName('li')

for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem'
}

var image = document.createElement('img')
image.src = 'http://placekitten.com/200/300'
document.body.appendChild(image)
