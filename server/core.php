<?php
header( "content-type:text/html;charset=utf-8" );
require("class/config.php");
require("class/function.php");
require("class/pdo_mysql.class.php");
require("class/random.class.php");
require("class/encrypt.php");

/*if( is_array( $_POST ) && count( $_POST ) > 0 )
{
	$type = isset( $_GET[ 'type' ] )? $_GET[ 'type' ]: '';
	$token = isset( $_GET[ 'token' ] )? $_GET[ 'token' ]: '';
	$rand = isset( $_GET[ 'rand' ] )? $_GET[ 'rand' ]: '';
	if( $type != deCode( $token, 'TM_01') )
	{
		exit( '123' );
	}
}else{
	exit('wrong');
}*/
$type = $_GET[ 'type' ];


if (isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST") {
	switch( $type ) {

		//微信分享SDK接口
		case 'weinxinjs':

			random::weiXinShare( "jssdk.php", "wx276189b7d7f1be8e", "5b0f51b4061f76bb3d6cc47742b0cbb7", "wxurl" );
			break;

		case 'getUserinfo':
			$pdo = PdoMysql::instantiation();
			$openid = $_POST[ 'openId' ];
			$sql = "select * from changhong_1104_userinfo where openid= '$openid'";
			$data = $pdo -> getOne( $sql );

			echo json_encode($data);
			break;

		case 'setScore':
			$pdo = PdoMysql::instantiation();
			$openid = $_POST[ 'openId' ];
			$score = $_POST[ 'score' ];
			$elements = $_POST[ 'elements' ];
			$keyele = $_POST[ 'keyele' ];
			$day = date('d');

			$sql = "update changhong_1104_userinfo set score=score+'$score', elements='$elements' where openid='$openid' ";
			$data = $pdo -> execute( $sql );

			if ($keyele) {
				switch ($keyele) {
					case 'tv':
						$sql = "update changhong_1104_prize set tv=tv+1 where day='$day' ";
						$dat = $pdo -> execute( $sql );
						break;
					
					case 'fridge':
						$sql = "update changhong_1104_prize set fridge=fridge+1 where day='$day' ";
						$dat = $pdo -> execute( $sql );
						break;

					case 'air':
						$sql = "update changhong_1104_prize set air=air+1 where day='$day' ";
						$dat = $pdo -> execute( $sql );
						break;

					default:
						# code...
						break;
				}
			}
			echo json_encode($data);
			break;

		case 'getElements':
			//$rand = rand(1, 1000);
			$rand = 100;
			$pdo = PdoMysql::instantiation();
			$day = date('d');

			switch ($rand) {
				case 1:
					$sql = "select tv from changhong_1104_prize where day='$day'";
					$data = $pdo -> getOne( $sql );
					if ($data['tv']>0) {
						$sql = "update changhong_1104_prize set tv=tv-1 where day='$day' ";
						$pdo -> execute( $sql );
						$data['thr'] = 1;
						echo json_encode($data);
					}else{
						$data['thr'] = 0;
						echo json_encode($data);
					}
					break;

				case 2:
					$sql = "select fridge from changhong_1104_prize where day='$day'";
					$data = $pdo -> getOne( $sql );
					if ($data['fridge']>0) {
						$sql = "update changhong_1104_prize set fridge=fridge-1 where day='$day' ";
						$pdo -> execute( $sql );
						$data['thr'] = 2;
						echo json_encode($data);
					}else{
						$data['thr'] = 0;
						echo json_encode($data);
					}
					break;

				case 3:
					$sql = "select air from changhong_1104_prize where day='$day'";
					$data = $pdo -> getOne( $sql );
					if ($data['air']>0) {
						$sql = "update changhong_1104_prize set air=air-1 where day='$day' ";
						$pdo -> execute( $sql );
						$data['thr'] = 3;
						echo json_encode($data);
					}else{
						$data['thr'] = 0;
						echo json_encode($data);
					}
					break;
				
				default:
					$data = array();
					$data['thr'] = 0;
					echo json_encode($data);
					break;
			}

			break;

		case 'login':
			$pdo = PdoMysql::instantiation();
			$openid = $_POST['openId'];
			$name = $_POST['name'];
			$phone = $_POST['phone'];
			$address = $_POST['address'];
			$prize = $_POST['prize'];
			//$score = $_POST['score'];
			$elements = $_POST['elements'];
			$time = $_SERVER[ 'REQUEST_TIME' ];
			$arr = array();
			$day = date('d');

			$sql = "select id from changhong_1104_info where openid='{$openid}'";
			$count = $pdo -> getRowCount( $sql );
			$arr['count'] = $count;

			if ($count <= 0 && $prize != null) {
				$count_1 = $pdo -> add( 'changhong_1104_info', array( 'openid' => $openid, 'name' => $name, 'phone' => $phone, 'time' => $time, 'prize' => $prize, 'address' => $address ));
				if ($count_1 > 0) {
					switch ($prize) {
						case 'tv':
							$sql = "update changhong_1104_userinfo set elements='$elements' where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
							break;
						
						case 'fridge':
							$sql = "update changhong_1104_userinfo set elements='$elements' where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
							break;

						case 'air':
							$sql = "update changhong_1104_userinfo set elements='$elements' where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
							break;

						case 'pri1':
							$sql = "update changhong_1104_userinfo set score=score-500000 where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
							break;

						case 'pri2':
							$sql = "update changhong_1104_userinfo set score=score-500000 where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
							break;

						case 'pri3':
							$sql = "update changhong_1104_userinfo set score=score-500000 where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
							break;

						default:
							echo 2;
							break;
					}
				}else{
					echo 2;
				}
			}else{
				switch ($prize) {
					case 'tv':
						$sql1 = "select id from changhong_1104_info where prize='tv'";
						$count1 = $pdo -> getRowCount( $sql1 );
						if($count1<=0){
							$count_1 = $pdo -> add( 'changhong_1104_info', array( 'openid' => $openid, 'name' => $name, 'phone' => $phone, 'time' => $time, 'prize' => $prize, 'address' => $address ));
							$sql = "update changhong_1104_userinfo set elements='$elements' where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
						}else{
							echo 3;
						}
						break;
					
					case 'fridge':
						$sql1 = "select id from changhong_1104_info where prize='fridge'";
						$count1 = $pdo -> getRowCount( $sql1 );
						if($count1<=0){
							$count_1 = $pdo -> add( 'changhong_1104_info', array( 'openid' => $openid, 'name' => $name, 'phone' => $phone, 'time' => $time, 'prize' => $prize, 'address' => $address ));
							$sql = "update changhong_1104_userinfo set elements='$elements' where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
						}else{
							echo 3;
						}
						break;

					case 'air':
						$sql1 = "select id from changhong_1104_info where prize='air'";
						$count1 = $pdo -> getRowCount( $sql1 );
						if($count1<=0){
							$count_1 = $pdo -> add( 'changhong_1104_info', array( 'openid' => $openid, 'name' => $name, 'phone' => $phone, 'time' => $time, 'prize' => $prize, 'address' => $address ));
							$sql = "update changhong_1104_userinfo set elements='$elements' where openid='$openid' ";
							$pdo -> execute( $sql );
							echo 1;
						}else{
							echo 3;
						}
						break;

					default:
						echo 0;
						break;
				}
			}

			break;

		case 'numberOfPrize':
			$pdo = PdoMysql::instantiation();
			$prize = $_POST['prize'];
			$day = date('d');

			switch($prize){
				case 'pri1':
				$sql = "select pri1 from changhong_1104_prize where day='$day'";
				$data = $pdo -> getOne( $sql );
				if ($data['pri1']>0) {
					$sql = "update changhong_1104_prize set pri1=pri1-1 where day='$day' ";
					$pdo -> execute( $sql );
					echo 1;
				}else{
					echo 0;
				}
				break;

				case 'pri2':
				$sql = "select pri2 from changhong_1104_prize where day='$day'";
				$data = $pdo -> getOne( $sql );
				if ($data['pri2']>0) {
					$sql = "update changhong_1104_prize set pri2=pri2-1 where day='$day' ";
					$pdo -> execute( $sql );
					echo 1;
				}else{
					echo 0;
				}
				break;

				case 'pri3':
				$sql = "select pri3 from changhong_1104_prize where day='$day'";
				$data = $pdo -> getOne( $sql );
				if ($data['pri3']>0) {
					$sql = "update changhong_1104_prize set pri3=pri3-1 where day='$day' ";
					$pdo -> execute( $sql );
					echo 1;
				}else{
					echo 0;
				}
				break;

				default:
					echo 0;
					break;
			}

			break;

		case 'game': 
			$pdo = PdoMysql::instantiation();
			$openid = $_POST['openId'];
			$day = date('d');

			$sql = "select uptime from changhong_1104_userinfo where openid='$openid' ";
			$sql1 = "select gametimes from changhong_1104_userinfo where openid='$openid' ";
			$data = $pdo -> getOne( $sql );
			$data1 = $pdo -> getOne( $sql1 );
			if ($data['uptime'] == $day && $data1['gametimes']>0) {
				$sql = "update changhong_1104_userinfo set gametimes=gametimes-1 where openid='$openid' ";
				$pdo -> execute( $sql );
				echo 1;
			}else if($data['uptime'] != $day){
				$sql = "update changhong_1104_userinfo set gametimes=19, uptime='$day' where openid='$openid' ";
				$pdo -> execute( $sql );
				echo 1;
			} else{
				echo 0;
			}
			//echo json_encode($data);
			break;

		case 'gametimes':
			$pdo = PdoMysql::instantiation();
			$openid = $_POST['openId'];
			$day = date('d');

			$sql = "select * from changhong_1104_userinfo where openid='$openid' ";
			$data = $pdo -> getOne( $sql );
			if ($data['uptime'] != $day) {
				$data['show'] = true;
				
				if ($data['coupon']<3) {
					$sql = "update changhong_1104_userinfo set coupon=coupon+1, gametimes=20, uptime='$day' where openid='$openid' ";
					$pdo -> execute( $sql );
					$data['coupon'] = $data['coupon'] + 1;
				}else{
					$sql = "update changhong_1104_userinfo set gametimes=20, uptime='$day' where openid='$openid' ";
					$pdo -> execute( $sql );
				}
			}
			echo json_encode($data);
			break;

		case 'haveGotPrize':
			$pdo = PdoMysql::instantiation();
			$openid = $_POST['openId'];
			$sql = "select id from changhong_1104_info where openid='{$openid}'";
			$count = $pdo -> getRowCount( $sql );
			if ($count>0) {
				echo 0;
			}else{
				echo 1;
			}
			break;

		case 'appoint':
			$pdo = PdoMysql::instantiation();
			$openid = $_POST['openId'];
			$sql = "select * from changhong_1104_userinfo where openid='{$openid}'";
			$data = $pdo -> getOne( $sql );
			if ($data['appoint'] === "0") {
				echo 0;
			}else{
				$sql = "update changhong_1104_userinfo set appoint=0 where openid='$openid' ";
				$pdo -> execute( $sql );
				echo 1;
			}
			break;
	}
}

