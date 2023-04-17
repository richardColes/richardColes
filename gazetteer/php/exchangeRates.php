<?php
  ini_set('display_errors', 'On');
  error_reporting(E_ALL);

  $executionStartTime = microtime(true);

  $url="https://openexchangerates.org/api/latest.json?app_id= &base=GBP";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_URL,$url);

  $result=curl_exec($ch);

  curl_close($ch);

  $decode = json_decode($result,true);

  $output['status']['code'] = "200";
  $output['status']['name'] = "ok";
  $output['status']['description'] = "success";
  $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
  $output['data'] = $decode['results'];

  header('Content-Type: application/json; charset=UTF-8');

  echo json_encode($output);
?>

<?php
	$url='https://openexchangerates.org/api/latest.json?app_id=' . $_REQUEST['user'];

	$output['data'] = $decode;
?>



<?php  
   //Currency Exchange Rates
   $url='http://data.fixer.io/api/latest?access_key=fef7dc3a8df32be65a3006deb15fe2bf';
   //$url='http://data.fixer.io/api/latest?access_key=8bc8db0d02010c50047f53ccf9889388';
   //$url='https://openexchangerates.org/api/latest.json?app_id=172dd560a2bd4ea38005129d6fae498d';

   $exchangeRates = json_decode($result,true);

   foreach ($exchangeRates['rates'] as $code => $rate) {
       if ($code ==  $_REQUEST['currentCurrency']) {
           $output['data']['currentRate'] = $rate;
           break;
       } else {
           $output['data']['currentRate'] = 'Rate not available';
       }
   }

    $output['status']['executedIn'] = intval((microtime
    
    $output['data']['exchangeRates'] = $exchangeRates;
?>