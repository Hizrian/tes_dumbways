var data = {
	"name": "Hizrian",
	"age": 21,
	"address": "Jl. Sultan Malikul Saleh, Lhong Raya, Banda Aceh",
	"hobbies": ["Membaca", "Bulutangkis", "Gowes"],
	"is_married": false,
	"list_school": [
	{
		key_name:"MIN Lhong Raya",
		year_in:2004,
		year_out:2010,
		major: null
	},
	{
		key_name:"MTsN Model Banda Aceh",
		year_in:2010,
		year_out:2013,
		major: null
	},
	{
		key_name:"SMKN2 Banda Aceh",
		year_in:2013,
		year_out:2016,
		major: "Teknik Komputer Jaringan"
	}
	],
	"interest_in_coding": true
};

json = JSON.stringify(data);

console.log(json);