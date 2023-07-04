let input = document.querySelector('.build_input')
let btn = document.querySelector('.field_btn')
let check = document.querySelector('.check_out')
let help = document.querySelector('.help_out')
let count = document.querySelector('.count_out')


let item = 0;
let randNum =  Math.floor(Math.random() * 101)

btn.addEventListener('click', (e) => {
    e.preventDefault();
    userNum = input.value
    if(userNum > randNum){
        check.textContent = `Haven't figured it out yet...`
        help.textContent = `Too much`
        item++
        count.textContent = item
    }else if(userNum < randNum){
        check.textContent = `Haven't figured it out yet...`
        help.textContent = `Not enough`
        item++
        count.textContent = item
    }else if(userNum == randNum){
        check.textContent = 'Congratulations you guessed it'
        help.textContent = `Just right`
        item++
        count.textContent = item
    }
})

console.log(randNum);