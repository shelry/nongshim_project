function initialize(){
     var mapProp1 = {
        center:new google.maps.LatLng(37.496870, 126.919128),
        zoom:17,
        mapTypeId:google.maps.MapTypeId.ROADMAP 
      }
    var mapProp2 = {
    center:new google.maps.LatLng(37.361274, 126.954076),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp3 = {
    center:new google.maps.LatLng(37.015512, 127.250464),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp4 = {
    center:new google.maps.LatLng(36.827583, 127.090707),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp5 = {
    center:new google.maps.LatLng(36.108788, 128.378822),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp6 = {
    center:new google.maps.LatLng(35.186781, 128.984006),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp7 = {
    center:new google.maps.LatLng(35.096426, 128.841315),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    
   var map1=new google.maps.Map(document.getElementById("googleMap1"),mapProp1);
    var map2=new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
    var map3=new google.maps.Map(document.getElementById("googleMap3"),mapProp3);
    var map4=new google.maps.Map(document.getElementById("googleMap4"),mapProp4);
    var map5=new google.maps.Map(document.getElementById("googleMap5"),mapProp5);
    var map6=new google.maps.Map(document.getElementById("googleMap6"),mapProp6);
    var map7=new google.maps.Map(document.getElementById("googleMap7"),mapProp7);
  

}
google.maps.event.addDomListener(window, 'load', initialize);
