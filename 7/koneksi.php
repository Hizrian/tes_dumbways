<?php 
$host = mysqli_connect("localhost", "root", "", "quick_count");

if (mysqli_connect_errno()){
	echo "Koneksi database gagal : " . mysqli_connect_error();
}

?>