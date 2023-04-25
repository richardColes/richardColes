<?php
  ini_set('display_errors', 'On');
  error_reporting(E_ALL);

  $executionStartTime = microtime(true);

  $countryBorders = file_get_contents('countryBorders.geo.json', true);

  $decode = json_decode($countryBorders, true);

  $result;

  foreach($decode['features'] as $country) {
    if($country['properties']['iso_a2'] == $_REQUEST['code']) {
        $result = $country['geometry'];
        break;
    }
  }

  $output['status']['code'] = "200";
  $output['status']['name'] = "ok";
  $output['status']['description'] = "success";
  $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

  $output['data'] = $result;

//   header('Content-Type: application/json; charset=UTF-8');

  echo json_encode($output);
?>