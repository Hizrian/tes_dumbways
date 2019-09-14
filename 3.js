function drawImage(jumlah) {
	var space = jumlah, limit = jumlah;
	let draw = "";
	for (i = 1; i <= space; i++) {
		for(j = 1; j <= limit; j++) {
			if(i <= limit / 2 && j >= (limit / 2) - (i - 1) && j <= (limit / 2) + (i)) {
				draw = draw.concat("@");
			} 
			else if(i >= limit / 2 && j > ((limit / 2) - i) * (-1) && j < (limit - ((limit / 2) - (i - 1)) * (-1))) {
				draw = draw.concat("@");
			} 
			else {
				draw = draw.concat("=");
			}
		}
		draw = draw.concat("\n");
	}
	console.log(draw);
}

drawImage(5);
drawImage(7);

