$('#btnSubmit1').click(function() {
  $.ajax({
    url: "contains.php",
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

$('#btnSubmit3').click(function() {
  $.ajax({
    url: "neighbours.php",
    type: 'POST',
    dataType: 'json',
    data: {
      geonameId: $('#selGeonameId').val(),
      country: $('#selCountry').val()
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