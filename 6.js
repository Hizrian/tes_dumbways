var batas = prompt("Masukkan Alas / Tinggi")

function segitigaSikuSiku(batas) {
	let draw = "";
	var bilanganAkhir = 0;
	for (i = 1; i <= batas; i++) {
		for (j = 1; j <= batas; j++) {
			if (j <= i) {
				for (k = bilanganAkhir + 1; k > bilanganAkhir; k++) {
					var prima = 0;
					for (num = k; num >= 1; num--)
					{
						if (k % num == 0)
						{
							prima = prima + 1;
						}
					}
					if (prima == 2)
					{
						draw = draw.concat(k + " ");
						bilanganAkhir = k;
						break;
					}
				}
			}
		}
		draw = draw.concat("\n");
	}
	console.log(draw);
}

if (0 < batas < 10) {
	segitigaSikuSiku(batas);
}
