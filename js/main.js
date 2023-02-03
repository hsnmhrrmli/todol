const add = document.getElementById('add')
const text = document.getElementById('text')
const ul = document.querySelector('ul')
const li = document.createElement('li')
const checkbox = document.createElement('button')
checkbox.style.width="15px"
checkbox.style.height="13px"
checkbox.style.marginLeft="5px"
checkbox.style.marginBottom="5px"
// li.style.display="flex"
// li.style.justifyContent="base-line"
add.addEventListener('click', () => {
  // console.log(text.value)
    li.innerHTML = text.value
    li.appendChild(checkbox)
    ul.style.display="block"
    // console.log(li)
    ul.appendChild(li)
    text.value = ''
})