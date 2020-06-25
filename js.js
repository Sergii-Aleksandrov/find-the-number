
function createTable(num) {
	let table = document.querySelector('#table');
	table.innerHTML = '';
	let num1 = 1;
	let num2 = num * num;
	let num3 = num;
	let arr = range(num1, num2);
	let newArr = shuffle(arr);

	let k = 0;
	let target = 1;
	for (let i = 0; i < num; i++) {
		let tr = document.createElement('tr');
		for (let j = 0; j < num; j++) {
			let td = document.createElement('td');
			td.innerHTML = newArr[k];
			k++;
			td.addEventListener('click', function(event) {
				if (event.target.innerHTML == target) {
					event.target.classList.add('right');
					target += 1;
				};
				if (target == newArr.length + 1) {
					alert('You won!!!');
					createTable(num3 + 1);
				};
			});
			tr.appendChild(td);
		};
		table.appendChild(tr);
	};
};

createTable(2);

function range(num1, num2) {
	let arr = [];
	for (let i = num1; i <= num2; i++) {
		arr.push(i);
	};
	return arr;
};
function shuffle(arr) {
	return arr.sort(function() {
		return Math.random() - 0.5;
	});
};