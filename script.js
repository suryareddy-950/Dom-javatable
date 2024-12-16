const data = [
    { id: 1, name: "surya", batch: "22r", course: "Full Stack", isMockCleared: true, }, 
    { id: 2, name: "naveen", batch: "22r", course: "Full Stack", isMockCleared: true, }, 
    { id: 3, name: "sai babu", batch: "22r", course: "Full Stack", isMockCleared: true, },
    { id: 4, name: "Anusha", batch: "22r", course: "Full Stack", isMockCleared: true,},
    { id: 5, name: "mahesh", batch: "22r", course: "Full Stack",isMockCleared: true, },
];
console.log(data)

 
// const tableContainer = document.querySelector(".table-container")
const table = document.createElement("table");
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
const tableHeadingRow = document.createElement("tr");

const header = [];

for(keys in data[0]){
    header.push(keys)
}
for(ele of header){
    const th = document.createElement("th")
    th.textContent = ele[0].toUpperCase() + ele.slice(1);
    tableHeadingRow.appendChild(th) 
}

thead.appendChild(tableHeadingRow);
table.appendChild(thead)
document.body.appendChild(table);
// const headers = [];
// for(keys in data[0]){   
// console.log(keys) 
// headers.push(keys)
// }
// console.log(headers) 
// for(ele of headers){  
//     const th = document.createElement("th");
//     th.textContent = ele
//     tr.appendChild(th)
// }
        for(objs of data){
            const tableDataRows = document.createEldment("tr")
            for(key in objs){
                const td = document.createElement("td")
                td.textContent = objs[key]
            
            }
            tableDataRows.appendChild(td)
        }
        console.log(tableDataRows )

table.appendChild(tbody)

// tableContainer.appendChild(table)
document.body.appendChild(table);

