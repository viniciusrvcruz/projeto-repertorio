var data = new Date()
var dia = data.getDate()

if(dia % 2 == 0) {
    var cronograma2 = document.querySelector('div#cronograma2')
    cronograma2.style.display = 'block'
} else {
    var cronograma1 = document.querySelector('div#cronograma1')
    cronograma1.style.display = 'block'
}