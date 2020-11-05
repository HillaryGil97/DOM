console.log(document.title)
document.title = 'DOM'

//METODOS PARA ACCEDER A DOM
//1. BY ID
//2. BY CLASS
//3. BY TAGNAME

//Por TAGNAME
var h1ByTagName = document.getElementsByTagName ('h1')
console.log(h1ByTagName)
h1ByTagName[0].innerHTML = "Notas de Naomi López"

//Pos ID
var sectionById = document.getElementById('notes')
console.log(sectionById)

//Por clase
var h1ByClass =document.getElementsByClassName('h1')
console.log(h1ByClass)

//DOM nos ayuda a poder manejar eventos, por ejemplo en el caso de los botones
var button =document.getElementsByClassName('button')
var isClick=true;

const clickMe = () => {
    isClick = !isClick
    isClick ? button[0].innerHTML = "Presioname" : button[0].innerHTML = "Me presiono"
}

button[0].addEventListener('click',clickMe)