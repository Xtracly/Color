let btn = document.getElementById('btn')
let text = document.getElementById('text')

let arr = ['#023245', '#452365', '#954320', '#34f231', '#863a32']

btn.addEventListener('click', function() {
    let rand = arr[Math.floor(Math.random() * 5)]
    text.innerHTML = `Background Color: ${rand}`
    document.body.style.backgroundColor = rand
})