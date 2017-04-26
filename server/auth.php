<?php
header( "content-type:text/html;charset=utf-8" );
require("class/config.php");
require("class/function.php");
require("class/pdo_mysql.class.php");
require("class/random.class.php");
require("class/encrypt.php");

if(isset($_GET['code']))
{
    $code = $_GET['code'];
}else{
   exit("HTTP/1.1 401 Unauthorized");
}

//单例模式
$pdo = PdoMysql::instantiation();
//用户授权并获取code
//$code = $_GET[ 'code' ];
$userinfo = getUserInfo( $code );
if( is_array( $userinfo ) && count( $userinfo ) > 0 ) {
	// 微信用户唯一openId
	$openId = $userinfo[ 'openid' ];
	//微信用户昵称
	$nickName = $userinfo[ 'nickname' ];
	//头像路径
	$imgUrl = $userinfo[ 'headimgurl' ];
	//城市
	$city = $userinfo[ 'city' ];
	//当前时间戳
	$time = $_SERVER[ 'REQUEST_TIME' ];
	$day = date('d')-1;

	if ($openId == null) {
		header( "Location:http://www.hylinkcd-ad.com/active/M2016/changhong_1104_jd/index.html" );
	}
	$sql = "select id from changhong_1104_userinfo where openid='{$openId}'";
	$count = $pdo -> getRowCount( $sql );

	if ( $count > 0 ) {
		setcookie( 'changhong_1104_openId', $openId, time()+3600*24*10, '/');
	}else{
		$count_1 = $pdo -> add( 'changhong_1104_userinfo', array( 'openid' => $openId, 'nickname' => $nickName, 'headurl' => $imgUrl, 'authtime' => $time, 'city' => $city, 'elements' => '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', 'score' => 0, 'coupon' => 0, 'gametimes' => 20, 'uptime' => $day ));
		if( $count_1 > 0 ) {
			setcookie( 'changhong_1104_openId', $openId, time()+3600*24*10, '/' );
		}
	}

	header( "Location:http://www.hylinkcd-ad.com/active/M2016/changhong_1104_jd/index.html" );
}






