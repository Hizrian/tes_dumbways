<?php 
// koneksi database
include 'koneksi.php';

// menangkap data yang di kirim dari form
$id = $_GET['id'];

// update data ke database
mysqli_query($host,"update candidates set earned_vote = earned_vote + 1 where id='$id'");

// // mengalihkan halaman kembali ke index.php
header("location:index.php");

?>