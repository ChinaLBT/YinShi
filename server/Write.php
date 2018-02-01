<?php 
	header("Content-Type: text/html;charset=utf-8");
	include('connect.php');
	$select_write = mysql_query("SELECT * FROM addwrite ORDER BY id DESC");
	//$select_write = mysql_query("SELECT * FROM addwrite ORDER BY id DESC LIMIT 0,5");
	$rows = array();
	while ($row = mysql_fetch_assoc($select_write)) {
		$rows[] = $row;
	}
	echo json_encode($rows);
 ?>