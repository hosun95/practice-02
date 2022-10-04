// 3글자 이상 만들기//

// let words = ['say', 'hello', 'in', 'the', 'morning'];

// function findwords() {
// let result = '';
//   for(let i = 0; i < words.length; i++) {
//     if ( words[i].length > 3) {
//     result = result + words[i] + ' '; 
//     }
//   }
//   return result;
// }
// console.log(findwords());


//**********************************************************//



const cp_table = document.createElement('table');
const cp_result = document.createElement('div');
let mark = 'O'


const table_event_listener = (event)=> {
    const which_td = event.target.closest('td');
    if (which_td.textContent !== '') {
        return;
    }

    which_td.textContent = mark;
    if (mark === 'O') {
        mark = 'X';
    }
    else {
        mark = 'O';
    }
};



for (let i = 0; i < 3; i++) {
    const cp_tr = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
        const cp_td = document.createElement('td');
        cp_tr.append(cp_td);
    }
    cp_table.append(cp_tr);
}

document.body.append(cp_table);
document.body.append(cp_result);

cp_table.addEventListener('click', table_event_listener);