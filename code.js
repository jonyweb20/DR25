let arrColor = [];
let objColor = {};

class Ink {
    constructor(objCol) {
        this.color = objCol;
        this.qty = 10;
    }

    flowInk() {
        let el = text();
        let char = '';
        for (let i = 0; i < arrColor.length; i++) {
            if (this.balanceInk(this.qty)) {
                char = this.textIn(el);
                this.qty -= 0.5;
                break;
            }
        }
    }

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

    /*    setQty(valueQty) {
            this.qty = valueQty;
            if (valueQty > 10) this.qty = 10;
        }
        getQty() {
            return this.qty;
        }*/

}

function colorSelect() {
    let setColors = document.getElementById('inColor').value;
    let outColor = document.querySelector('.block-color');
    for (let i = 0; i <= arrColor.length; i++) {
        if (arrColor.length === 0 || arrColor.indexOf(setColors) === -1) {
            let button = document.createElement('button');
            button.setAttribute('name', 'buttonColor');
            button.setAttribute('id', 'btn' + [i]);
            button.onclick = colorOut();
            /*  button.innerHTML = `${intColor.flowInk()}`*/
            button.style.background = setColors;
            button.style.width = '40px';
            button.style.height = '30px';
            button.style.margin = '3px';
            outColor.insertAdjacentElement("afterBegin", button);
            objColor.name = 'btn' + [i];
            objColor.value = setColors;
            arrColor.push(objColor);
            break;
        }
    }
}

function text() {
    let inpText = document.querySelector('.inText').value;
    let arStrong = inpText.split('').pop();
    console.log(arStrong);
    return arStrong;
}
function colorOut() {
    debugger
    document.addEventListener("click", function (e) {
       let btn =  arrColor.find(function (el){ if (el.name === e.target.id) return el.value});
        console.log(btn.value)
        return btn.value;
    });
}
const intColor = new Ink(colorOut);
function f(){
intColor.flowInk()
}
