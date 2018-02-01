<?php 
	header("Content-Type: text/html;charset=utf-8");
	$sendid = $_GET['sendid'];
	$avatarUrl = $_GET['avatarUrl'];
	$nickName = $_GET['nickName'];
	$title = $_GET['title'];
	$user = $_GET['user'];
	$content = $_GET['content'];
	$time = $_GET['time'];
	$day_time = date("Y/m/d H:i:s",$time);
	include('connect.php');
	mysql_query("INSERT INTO addwrite(sendid,avatarUrl,nickName,title,user,content,day_time) VALUES ('$sendid','$avatarUrl','$nickName','$title','$user','$content','$day_time')");
 ?>