const add = document.getElementById('add')
const text = document.getElementById('text')
const ul = document.querySelector('ul')
const li = document.createElement('li')
add.addEventListener('click', () => {
  // console.log(text.value)
    li.innerHTML = text.value
    console.log(li)
    text.value = ''
    ul.appendChild(li)
})
