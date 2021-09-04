
let arrColor = [];
/*let objColor = {};*/

class Ink {
    constructor(qty) {
        this.qty = qty;
    }

    flowInk(objCol) {
        this.color = objCol;
        let el = this.text();
        let char = '';
        if(el){
            if (this.balanceInk(this.qty) && this.color) {
                char = this.textIn(el);
                if(el !== " "){
                this.qty -= 0.5;
                arrColor.push(char);
            }}
            else alert('Чернила закончились')

            console.log(this.qty)
    }}

    balanceInk(qty) {
        return qty > 0;
    }

    textIn(elem) {
        let textSpan = document.querySelector('.outText');
        let newSpan = document.createElement('span');
        textSpan.appendChild(newSpan);
        newSpan.style.color = this.color;

        newSpan.innerText += elem
        return newSpan.innerText
    }
    text() {
        let inpText = document.querySelector('.inText').value;
            return inpText.split('').pop();
    }

       setQty() {
            this.qty = 10;
        }
       /* getQty() {
            return this.qty;
        }*/

}
const qty = 5;
const intColor = new Ink(qty);
function fun() {
    let setColors = document.getElementById('inColor').value;
    intColor.flowInk(setColors);
}
function clear(){
    debugger;
    document.querySelector('.inText').value = "";
   document.querySelector('.outText').value= "";
    intColor.setQty();
}


// Проба для реализации выбора цвета через кнопки
/*
function colorSelect() {
    debugger;
    let setColors = document.getElementById('inColor').value;
    let outColor = document.querySelector('.block-color');
    for (let i = 0; i <= arrColor.length; i++) {
        if (arrColor.length === 0 || /!*arrColor.indexOf(setColors) === -1*!/ arrColor[i] === undefined) {
            let button = document.createElement('button');
            button.setAttribute('name', 'buttonColor');
            button.setAttribute('id', 'btn' + [i]);
            button.setAttribute('value', setColors);
            button.innerHTML = `${intColor.flowInk(this.qty)}`
            button.style.background = setColors;
            button.style.width = '40px';
            button.style.height = '30px';
            button.style.margin = '3px';
            outColor.insertAdjacentElement("afterBegin", button);
            objColor.name = 'btn' + [i];
            objColor.value = setColors;
            arrColor.push(objColor);
            button.onclick = colorOut(this.value);
            break;
        }
    }
}
*/



//выбор цвета через функцию
/*function colorOut(colTarget) {
    debugger
    arrColor.find(function (el){ if (el.value === colTarget) return colTarget});
}*/
