<?php
  $executionStartTime = microtime(true);
  $url = 'countryBorders.geo.json';
  $data = file_get_contents($url);
  $decode = json_decode($data, true);

  $output['status']['code'] = "200";
  $output['status']['name'] = "ok";
  $output['status']['description'] = "success";
  $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
  $output['data'] = $decode;

  header('Content-Type: application/json; charset=UTF-8');

  echo json_encode($output);
?>