const arrWorker = [
    {name: "Денис", age: 26, prof: "Программист"},
    {name: "Илья", age: 22, prof: "Младший научный сотрудник"},
    {name: "Виталий", age: 29, prof: "Менеджер проектов"},
    {name: "Алексей", age: 34, prof: "Руководитель отдела"},
    {name: "Борис", age: 54, prof: "Вице-президент"},
    {name: "Джон", age: 18, prof: "Грузчик"}
]

class Employee {
    constructor(nam, ag, prof) {
        this.nam = nam
        this.ag = ag
        this.prof = prof
    }
}

class EmpTable {
    constructor(tableList) {
        this.tab = tableList;
    }
    getHtml() {
            let tr = '';
            let td = "";
            let outTable = document.querySelector('.block-list_table');
            let table1 = document.createElement('table');
            let tableBody = document.createElement("tbody");
            outTable.append(table1);
            table1.append(tableBody);
            for (let i = 0; i < this.tab.length; i++) {
                tr = document.createElement("tr")
                for (let j = 0; j < 3; j++) {
                    switch (j) {
                        case 0: {
                            td = document.createElement('td');
                            tr.appendChild(td);
                            td.setAttribute('class', 'cell');
                            td.innerHTML = this.tab[i].name;
                            break;
                        }
                        case 1: {
                            td = document.createElement('td');
                            tr.appendChild(td);
                            td.setAttribute('class', 'cell');
                            td.innerHTML = this.tab[i].age;
                            break;
                        }
                        case 2: {
                            td = document.createElement('td');
                            tr.appendChild(td);
                            td.setAttribute('class', 'cell');
                            td.innerHTML = this.tab[i].prof;
                            break;
                        }
                    }
                }
                table1.appendChild(tr);
            }
        }
}


const listProf = new EmpTable(arrWorker)
function listPr() {
    listProf.getHtml()
}
