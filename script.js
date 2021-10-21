let card1 = document.querySelector('.card1')
let card1Btn1 = card1.querySelector('.column1')
let card1Btn2 = card1.querySelector('.column2')

let card2 = document.querySelector('.card2')
let card2Btn1 = card2.querySelector('.column1')
let card2Btn2 = card2.querySelector('.column2')

let card3 = document.querySelector('.card3')
let card3Btn1 = card3.querySelector('.column1')
let card3Btn2 = card3.querySelector('.column2')

let card4 = document.querySelector('.card4')
let card4Btn1 = card4.querySelector('.column1')
let card4Btn2 = card4.querySelector('.column2')

let card5 = document.querySelector('.card5')
let card5Btn1 = card5.querySelector('.column1')
let card5Btn2 = card5.querySelector('.column2')

let card6 = document.querySelector('.card6')
let dogName = card6.querySelector('.name')
let finalImg = card6.querySelector('.final')

let back2 = card2.querySelector('.back')
let back3 = card3.querySelector('.back')
let back4 = card4.querySelector('.back')
let back5 = card5.querySelector('.back')
let back6 = card6.querySelector('.back')


let card1Result = ''

card1Btn1.addEventListener('click', () => {
   card1Result = 'Длинношерстная'
   card1.classList.add('hidden')
   card2.classList.remove('hidden')
})

card1Btn2.addEventListener('click', () => {
   card1Result = 'Короткошерстная'
   card1.classList.add('hidden')
   card2.classList.remove('hidden')
})

let card2Result = ''

card2Btn1.addEventListener('click', () => {
   card2Result = 'Большая'
   card2.classList.add('hidden')
   if (card1Result === 'Длинношерстная') {
      card3.classList.remove('hidden')
   } else {
      card5.classList.remove('hidden')
   }
})

card2Btn2.addEventListener('click', () => {
   card2Result = 'Маленькая'
   card2.classList.add('hidden')
   if (card1Result === 'Длинношерстная') {
      card4.classList.remove('hidden')
   } else {
      card6.classList.remove('hidden')
      finalImg.src = 'chohyahya.jpg'
      dogName.textContent = 'Чихуахуа'
   }
})

card3Btn1.addEventListener('click', () => {
   card3.classList.add('hidden')
   card6.classList.remove('hidden')
   finalImg.src = 'akita_iny.jpg'
   dogName.textContent = 'Акита-ину'
})

card3Btn2.addEventListener('click', () => {
   card3.classList.add('hidden')
   card6.classList.remove('hidden')
   finalImg.src = 'koker.jpg'
   dogName.textContent = 'Английский кокер-спаниель'
})

card4Btn1.addEventListener('click', () => {
   card4.classList.add('hidden')
   card6.classList.remove('hidden')
   finalImg.src = 'shpitz.jpg'
   dogName.textContent = 'Померанский шпиц мини'
})

card4Btn2.addEventListener('click', () => {
   card4.classList.add('hidden')
   card6.classList.remove('hidden')
   finalImg.src = 'pekines.jpg'
   dogName.textContent = 'Пекинес'
})

card5Btn1.addEventListener('click', () => {
   card5.classList.add('hidden')
   card6.classList.remove('hidden')
   finalImg.src = 'mops.jpg'
   dogName.textContent = 'Мопс'
})

card5Btn2.addEventListener('click', () => {
   card5.classList.add('hidden')
   card6.classList.remove('hidden')
   finalImg.src = 'sharpey.jpg'
   dogName.textContent = 'Шарпей'
})

back6.addEventListener('click', () => {
   card1.classList.remove('hidden')
   card6.classList.add('hidden')
})

back2.addEventListener('click', () => {
   card1.classList.remove('hidden')
   card2.classList.add('hidden')
})

back3.addEventListener('click', () => {
   card2.classList.remove('hidden')
   card3.classList.add('hidden')
})

back4.addEventListener('click', () => {
   card2.classList.remove('hidden')
   card4.classList.add('hidden')
})

back5.addEventListener('click', () => {
   card2.classList.remove('hidden')
   card5.classList.add('hidden')
})