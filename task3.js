let btn = document.querySelector('.btn')
let body = document.querySelector('body')
let countField = document.querySelector('.count')
let countBrtn = document.querySelector('.countBrtn')

// 1 macrotask

btn.addEventListener('click', () => {
  console.log('Спасибо, что нажал')
  body.style.background = 'yellow'
})


// 2 macrotask

setInterval(() => {
  if (body.style.background) {
    console.log(`Цвет поменялся на ${body.style.background}`)
  } else {
    console.log("Нажми уже на кнопку push me")
  }
}, 2000)

// 3 macrotask
let count = 0
countBrtn.addEventListener('click', () => {
  count++
  countField.textContent = count
})