<?php
    header("Content-Type: text/html;charset=utf-8");
    include('connect.php');
    $user = mysql_query('SELECT * FROM userinfo');
    $write = mysql_query('SELECT * FROM addwrite');
    $num=mysql_num_rows($user);
    $user_rows = array();
    $write_rows = array();
    while ($user_row = mysql_fetch_assoc($user)) {
    	$user_rows[] = $user_row;
    }
    while ($write_row = mysql_fetch_assoc($write)) {
    	$write_rows[] = $write_row;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>饮诗</title>
	<link rel="stylesheet" type="text/css" href="css/zui.min.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/zui.min.js"></script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li class="active"><a href="###" data-target="#tab2Content1" data-toggle="tab">标签1</a></li>
		<li><a href="###" data-target="#tab2Content2" data-toggle="tab">标签2</a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane fade active in" id="tab2Content1">
		<div class="alert alert-warning alert-dismissable">
 			<p>总人数——————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $num; ?>人</p>
		</div>
			<table class="table table-striped">
				<thead>
					<tr>
						<td>Id</td>
						<td>头像</td>
						<td>昵名</td>
						<td>性别</td>
						<td>国家</td>
						<td>省份</td>
						<td>城市</td>
						<td>语言</td>
						<td>OpenId</td>
					</tr>
				</thead>
				<tbody>
				<?php foreach ($user_rows as $users) { ?>
					<tr>
						<td><?php echo $users['Id']; ?></td>
						<td><img width="50px" height="50px" src="<?php echo $users['avatarUrl']; ?>"></td>
						<td><?php echo $users['nickName']; ?></td>
						<td><?php if($users['gender']=='1') {echo '男';} else {echo '女';} ?></td>
						<td><?php echo $users['country']; ?></td>
						<td><?php echo $users['province']; ?></td>
						<td><?php echo $users['city']; ?></td>
						<td><?php echo $users['language']; ?></td>
						<td><?php echo $users['openId']; ?></td>
					</tr>
				<?php } ?>
				</tbody>
			</table>
		</div>


		<div class="tab-pane fade" id="tab2Content2">
			<table class="table table-striped">
				<thead>
					<tr>
						<td>Id</td>
						<td>SendId</td>
						<td>头像</td>
						<td>昵名</td>
						<td>诗题</td>
						<td>作者</td>
						<td>诗词</td>
						<td>时间</td>
					</tr>
				</thead>
				<tbody>
				<?php foreach ($write_rows as $writes) { ?>
					<tr>
						<td><?php echo $writes['Id']; ?></td>
						<td><?php echo $writes['sendid']; ?></td>
						<td><img width="50px" height="50px" src="<?php echo $writes['avatarUrl']; ?>"></td>
						<td><?php echo $writes['nickName']; ?></td>
						<td><?php echo $writes['title']; ?></td>
						<td><?php echo $writes['user']; ?></td>
						<td style="width: 400px;"><?php echo $writes['content']; ?></td>
						<td><?php echo $writes['day_time']; ?></td>
					</tr>
				<?php } ?>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>