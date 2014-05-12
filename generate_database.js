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
	
	//Pertanyaan ke-5
	var q = new Question("Jenis Kendaraan yang melintas","checkbox",6);
	q.option.push("Golongan I [Sedan,Jeep,Pick Up/Truk Kecil, dan Bus]");
	q.option.push("Golongan II [Truk dengan 2 gandar]");
	q.option.push("Golongan III [Truk dengan 3 gandar]");
	q.option.push("Golongan IV [Truk dengan 4 gandar]");
	q.option.push("Golongan V [Truk dengan 5 gandar]");
	q.option.push("Golongan VI [Kendaraan bermotor roda 2]");
	Q.push(q);
	
	//Pertanyaan ke-6
	var q = new Question("Berat maksimal kendaraan yang melintas(TON)","text");
	Q.push(q);
	
	//Pertanyaan ke-7
	var q = new Question("Lebar lokasi pembangunan","checkbox",3);
	q.option.push("Luas");
	q.option.push("Sedang");
	q.option.push("Sempit");
	Q.push(q);
	
	//Pertanyaan ke-8
	var q = new Question("Estimasi waktu pekerjaan(JAM)","text");
	Q.push(q);
	
	//Pertanyaan ke-9
	var q = new Question("Jumlah pekerja","text");
	Q.push(q);
	
	//Pertanyaan ke-10
	var q = new Question("Upah minimum pekerja","text");
	Q.push(q);
	
	//Pertanyaan ke-11
	var q = new Question("Alat berat apa saja yang dibutuhkan","text");
	Q.push(q);
	
	//Pertanyaan ke-12
	var q = new Question("Sewa/Punya?","text");
	Q.push(q);
	
	//Pertanyaan ke-13
	var q = new Question("Status Material dan Quantity","checkbox",10);
	q.option.push("a");
	q.option.push("b");
	q.option.push("c");
	q.option.push("d");
	q.option.push("e");
	q.option.push("f");
	q.option.push("g");
	q.option.push("h");
	q.option.push("i");
	q.option.push("j");
	Q.push(q);
	
	//Pertanyaan ke-14
	var q = new Question("Pembersihan Lahan","checkbox",2);
	q.option.push("sudah");
	q.option.push("belum");
	Q.push(q);
	
	//Pertanyaan ke-15
	var q = new Question("Perataan lahan","checkbox",2);
	q.option.push("sudah");
	q.option.push("belum");
	Q.push(q);
	
	//Pertanyaan ke-16
	var q = new Question("Rencana Konstruksi Pembangunan[Per ukuran, maksimal X jam/hari]","text");
	Q.push(q);
}
else{

}
