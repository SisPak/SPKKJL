//This function will create the database to the HTML5 Storage if it's not exist.
if(typeof storageQuestion === "undefined"){
	var Q = [];
	//Pertanyaan pertama
	var q = new Question("Lokasi pembangunan jalan raya","radio",4);
	q.option.push("Pesisir");
	q.option.push("Perkotaan");
	q.option.push("Hutan");
	q.option.push("Tebing");
	Q.push(q);

	//Pertanyaan kedua
	var q = new Question("Lokasi pembangunan jalan raya","checkbox",7);
	q.option.push("Vulkanis");
	q.option.push("Organosol");
	q.option.push("Litosol");
	q.option.push("Podzol");
	q.option.push("Laterit");
	q.option.push("Mergel");
	q.option.push("Kapur");
	Q.push(q);

	//Pertanyaan ketiga
	var q = new Question("Lebar jalan (m)","text");
	Q.push(q);
	
	//Pertanyaan keempat
	var q = new Question("Panjang jalan (km)","text");
	Q.push(q);
}
else{

}