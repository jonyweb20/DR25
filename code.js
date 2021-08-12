class Ink {
    constructor(arCol, colors) {
        this.name = arCol.name;
        this.value = colors;
        this.qty = 10;
    }

    flowInk() {
        let text = textIn();
        let i = 0;
        let result = 0;
           if (this.balanceInk(this.qty) && text.length <= this.qty) {
            this.qty -= 0.5;
            result = text.length;
            return result
        }
    }
    balanceInk(qty) {
        debugger;
        return qty > 0;
    }

    setQty(valueQty) {
        this.qty = valueQty;
        if (valueQty > 10) this._qty = 10;
    }

    getQty() {
        return this.qty;
    }

}

function keyboardTest() {
    var x = document.getElementById("name")
    x.value = x.value.toUpperCase();
}

let arrColor = [];
let objColor = {};

function colorSelect() {
    let setColors = document.getElementById('inColor').value;
    let outColor = document.querySelector('.block-color');
    debugger
    for (let i = 0; i <= arrColor.length; i++) {
        if (arrColor.length === 0 || arrColor.indexOf(setColors) === -1) {
            let button = document.createElement('button');
            button.setAttribute('name', 'buttonColor')
            button.setAttribute('id', 'btn' + [i])
          /*  button.innerHTML = `${intColor.flowInk()}`*/
            button.onclick = colorOut(setColors);
           /* button.onclick =*/
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
function textIn(){
   let intext = document.querySelector('.inText').value;
let out = document.querySelector('.outText');
           out.innerHTML = intext;
return out.innerHTML
}


function colorOut(color){
    let out = document.querySelector('.outText');
    out.style.color = color
   return color
}
let btn0 = colorOut();
const intColor = new Ink(arrColor, colorOut());
console.log(intColor.flowInk())
console.log(btn0)
console.log(res)
let res = intColor.flowInk()
/* inp.addEventListener('change', function ()
    {out.value = inp.value})
    return out*/


/*console.log(intColor.getQty());*/

/*

const skills = {
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
console.log(chris.code(web))

*/

