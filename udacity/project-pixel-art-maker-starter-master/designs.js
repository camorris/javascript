// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const canvas = document.getElementById('pixel_canvas');
let theHeight = $("#input_height"),
theWidth = $("#input_width"),
color = $("#colorPicker");

function makeGrid() {
		canvas.innerHTML = '';
		let height = theHeight.val();
		let width = theWidth.val();

		function addEvent(td) {
				td.addEventListener('click', function() {
						td.style.backgroundColor = color.val();
				});
		}

		for (let i = 0; i < height; i++) {
				let tr = canvas.insertRow(i);
				for (let j = 0; j < width; j++) {
						let td = tr.insertCell(j);
						td.addEventListener('click', addEvent(td));
				}
		}


}

$('#input_submit').click(function(e) {
		e.preventDefault();
		makeGrid();
});
