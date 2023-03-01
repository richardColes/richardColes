$('#btnSubmit1').click(function() {
  $.ajax({
    url: "hierarchy.php",
    type: 'POST',
    dataType: 'json',
    data: {
      geonameId: $('#selGeonameId').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));
      if (result.status.name == "ok") {
        $('#txtToponymName').html(result['data'][0]['toponymName']);
        $('#txtName').html(result['data'][0]['name']);
        $('#txtLat').html(result['data'][0]['lat']);
        $('#txtLng').html(result['data'][0]['lng']);
        $('#txtGeonameId').html(result['data'][0]['geonameId']);
        $('#txtCountryCode').html(result['data'][0]['countryCode']);
        $('#txtCountryName').html(result['data'][0]['countryName']);
        $('#txtFcl').html(result['data'][0]['fcl']);
        $('#txtFcode').html(result['data'][0]['fcode']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // your error code
      console.log(error);
    }
  });
});

$('#btnSubmit2').click(function() {
  $.ajax({
    url: "ocean.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#selLat').val(),
      lng: $('#selLng').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));
      if (result.status.name == "ok") {
        $('#txtGeonameId2').html(result['data'][0]['geonameId']);
        $('#txtName2').html(result['data'][0]['name']);
        $('#txtDistance').html(result['data'][0]['distance']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // your error code
      console.log(error);
    }
  });
});

$('#btnSubmit3').click(function() {
  $.ajax({
    url: "timezone.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#selLat').val(),
      lng: $('#selLng').val(),
      radius: $('#selRadius').val(),
      lang: $('#selLang').val(),
      date: $('#selDate').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));
      if (result.status.name == "ok") {
        $('#txtCountryCode2').html(result['data'][0]['countryCode']);
        $('#txtCountryName2').html(result['data'][0]['countryName']);
        $('#txtLat2').html(result['data'][0]['lat']);
        $('#txtLng2').html(result['data'][0]['lng']);
        $('#txtTimezoneId').html(result['data'][0]['timezoneId']);
        $('#txtDstOffset').html(result['data'][0]['dstOffset']);
        $('#txtGmtOffset').html(result['data'][0]['gmtOffset']);
        $('#txtRawOffset').html(result['data'][0]['rawOffset']);
        $('#txtTime').html(result['data'][0]['time']);
        $('#txtSunrise').html(result['data'][0]['sunrise']);
        $('#txtSunset').html(result['data'][0]['sunset']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // your error code
      console.log(error);
    }
  });
});