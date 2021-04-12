const hexcode = ['0', '1', '2', '3', '4', '5', '6', '7',
                 '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const bodyBcg = document.querySelector('body')
const colorBtn = document.querySelector('.colorBtn')
const colorDisplay = document.querySelector('.hex')


/* const colors = ['green', 'blue', 'rgb(150, 58, 90)',
                 'pink', 'yellow', 'red', '#583', 
                 'brown', 'cyan', '#FF9833', 'gray']
 */
colorBtn.addEventListener('click', changeColor)

function changeColor(){

/*  Here, we used our color variable to set the background-color

   let random = Math.floor(Math.random()*colors.length)
   bodyBcg.style = `background-color: ${colors[random]}` */


   // Here, we are generating hex code colors from the hexcode array above

    
    // We can achieve the hexcode generation using the for loop like this;
    let hexColor = '#'
    for (i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexcode.length)
        hexColor += hexcode[random]
    }

    bodyBcg.style = `background-color: ${hexColor}`
    colorDisplay.innerHTML = hexColor


}




















