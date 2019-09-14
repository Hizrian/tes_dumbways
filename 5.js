function drawLine(jumlahline) {
	let draw = "";
	for (i = 1; i <= jumlahline; i++) {
		for (j = 1; j <= jumlahline; j++) {
			if(i == j) {
				draw = draw.concat("*");
			} else {
				draw = draw.concat(" ");
			}
		}
		draw = draw.concat("\n");
	}
	console.log(draw);
}

drawLine(8);