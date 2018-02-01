<?php
	header("Content-Type:text/html;charset=UTF-8");
	$num = $_GET['num'];
	$type = $_GET['type'];
	$yayuntype = $_GET['yayuntype'];
	$key = $_GET['key'];
	date_default_timezone_set("PRC");
	$showapi_appid = '54749';
	$showapi_secret = '7cd66c2cc94a4fd490ee5f50f9b665ff';
	$paramArr = array(
	'showapi_appid'=> $showapi_appid,
		'num'=> $num,
		'type'=> $type,
		'yayuntype'=> $yayuntype,
		'key'=> $key
	//添加其他参数
	);

	//创建参数(包括签名的处理)
	function createParam ($paramArr,$showapi_secret) {
		$paraStr = "";
		$signStr = "";
		ksort($paramArr);
		foreach ($paramArr as $key => $val) {
			if ($key != '' && $val != '') {
				$signStr .= $key.$val;
				$paraStr .= $key.'='.urlencode($val).'&';
			}
		}
		$signStr .= $showapi_secret;//排好序的参数加上secret,进行md5
		$sign = strtolower(md5($signStr));
		$paraStr .= 'showapi_sign='.$sign;//将md5后的值作为参数,便于服务器的效验
		return $paraStr;
	}

	$param = createParam($paramArr,$showapi_secret);
	$url = 'http://route.showapi.com/950-1?'.$param;
	$result = file_get_contents($url);
	print $result;
	$result = json_decode($result);
	
	
	//jilu
	//include('connect.php');
	//$numcode = '1';
	//$select_key = mysql_query("SELECT * FROM lookpoetry");
	//var_dump($select_key);
	//echo "2".$select_key."1";
	//$row = array();
	//$row[]=$select_key;
	//print_r ($row);
	//if(mysql_fetch_array($select_key)){
		//mysql_query("UPDATE lookpoetry SET numcode  = 'row[numcode]' ");
	//}
	//else {
		//echo '111';
		//mysql_query("INSERT INTO lookpoetry(key,numcode) VALUES ('1','2')");
	//}
?>