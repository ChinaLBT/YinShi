<?php
	header("Content-Type: text/html;charset=utf-8"); 
    $appid= "wxd6dea2c7076941da";
	$secret= "54fb1158040ffb2b5db71633592e58a0";
	$code = $_GET[code];
    $avatarUrl = $_GET[avatarUrl];
    $city = $_GET[city];
    $country = $_GET[country];
    $gender = $_GET[gender];
    $language = $_GET[language];
    $nickName = $_GET[nickName];
    $province = $_GET[province];
	$curl = curl_init();
	$url='https://api.weixin.qq.com/sns/jscode2session?appid='.$appid.'&secret='.$secret.'&js_code='.$code.'&grant_type=authorization_code';
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HEADER, 0);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	$data = curl_exec($curl);
	curl_close($curl);
	$code_over = json_decode($data, true);
	$openid = $code_over['openid'];
	include('connect.php');
	//mysql_query("insert into userinfo(openID) values ('$openid')");
    $select_openid = mysql_query("SELECT * FROM userinfo WHERE openId = '$openid'");
    if (mysql_fetch_array($select_openid)) {
    	mysql_query("UPDATE userinfo SET avatarUrl='$avatarUrl',nickName='$nickName',gender='$gender',country='$country',province='$province',city='$city',language='$language' WHERE openId='$openid'");
		//mysql_query("INSERT INTO userinfo(avatarUrl,nickName,gender,country,province,city,language) VALUES ('$avatarUrl','$nickName','$gender','$country','$province','$city','$language') WHERE openId='$openid'");
    }
    else {
    	mysql_query("INSERT INTO userinfo(avatarUrl,nickName,gender,country,province,city,language,openId) VALUES ('$avatarUrl','$nickName','$gender','$country','$province','$city','$language','$openid')");
    }
 ?>