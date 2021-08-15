let arrColor = [];
let objColor = {};

class Ink {
    constructor(arrCol) {
        this.color = arrCol.value;
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
        debugger;
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
    debugger
    for (let i = 0; i <= arrColor.length; i++) {
        if (arrColor.length === 0 || arrColor.indexOf(setColors) === -1) {
            let button = document.createElement('button');
            button.setAttribute('name', 'buttonColor');
            button.setAttribute('id', 'btn' + [i]);
            button.onclick = colorOut(setColors);
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
    debugger;
    let inpText = document.querySelector('.inText').value;
    let arStrong = inpText.split('').pop();
    console.log(arStrong);
    return arStrong

}
function colorOut(color) {
    debugger
    if (arrColor.includes(color))
        return color;
}

const intColor = new Ink(`arrColor`);

function f(){
intColor.flowInk()
}


/*const skills = {
    code(thing) {
        console.log('Я умею кодить' + ' ' + thing)
    },
    design(thing) {
        console.log('Я умею рисовать' + ' ' + thing)
    },
    sayHello() {
        console.log('Я ничего не умею')
    }
}

class DesignerDeveloper {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

Object.assign(DesignerDeveloper.prototype, {
    code: skills.code,
    design: skills.design,
    sayHello: skills.sayHello
})

let web = 'xgfhf'
const chris = new DesignerDeveloper('Chris', 'Coyier')
console.log(chris.code(web))*/


