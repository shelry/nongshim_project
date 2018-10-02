function initialize(){
    var myLatlng1 = new google.maps.LatLng(37.496870, 126.919128);
    var myLatlng2 = new google.maps.LatLng(37.361274, 126.954076);
    var myLatlng3 = new google.maps.LatLng(37.015512, 127.250464);
    var myLatlng4 = new google.maps.LatLng(36.827583, 127.090707);
    var myLatlng5 = new google.maps.LatLng(36.108788, 128.378822);
    var myLatlng6 = new google.maps.LatLng(35.186781, 128.984006);
    var myLatlng7 = new google.maps.LatLng(35.096426, 128.841315);
    
    
    var mapOptions1 = {
        zoom:16,
        center : myLatlng1,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var mapOptions2 = {
        zoom:16,
        center : myLatlng2,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var mapOptions3 = {
        zoom:16,
        center : myLatlng3,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var mapOptions4 = {
        zoom:16,
        center : myLatlng4,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var mapOptions5 = {
        zoom:16,
        center : myLatlng5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var mapOptions6 = {
        zoom:16,
        center : myLatlng6,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var mapOptions7 = {
        zoom:16,
        center : myLatlng7,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    
    var map1=new google.maps.Map(document.getElementById("googleMap1"),mapOptions1);
    var map2=new google.maps.Map(document.getElementById("googleMap2"),mapOptions2);
    var map3=new google.maps.Map(document.getElementById("googleMap3"),mapOptions3);
    var map4=new google.maps.Map(document.getElementById("googleMap4"),mapOptions4);
    var map5=new google.maps.Map(document.getElementById("googleMap5"),mapOptions5);
    var map6=new google.maps.Map(document.getElementById("googleMap6"),mapOptions6);
    var map7=new google.maps.Map(document.getElementById("googleMap7"),mapOptions7);
  
    
   var marker1 = new google.maps.Marker({
    position: myLatlng1,
    title:"농심 본사"
})
    var marker2 = new google.maps.Marker({
    position: myLatlng2,
    title:"안양 공장"
})
     var marker3 = new google.maps.Marker({
    position: myLatlng3,
    title:"안성 공장"
})
      var marker4 = new google.maps.Marker({
    position: myLatlng4,
    title:"아산 공장"
})
       var marker5 = new google.maps.Marker({
    position: myLatlng5,
    title:"구미 공장"
})
        var marker6 = new google.maps.Marker({
    position: myLatlng6,
    title:"부산 공장"
})
         var marker7 = new google.maps.Marker({
    position: myLatlng7,
    title:"녹산 공장"
})
     
          
    marker1.setMap(map1)
    marker2.setMap(map2)
    marker3.setMap(map3)
    marker4.setMap(map4)
    marker5.setMap(map5)
    marker6.setMap(map6)
    marker7.setMap(map7)
 

   /* var mapProp1 = {
    center:new google.maps.LatLng(37.496870, 126.919128),
    zoom:17,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    
     var mapProp2 = {
    center:new google.maps.LatLng(37.361274, 126.954076),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp3 = {
    center:new google.maps.
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp4 = {
    center:new google.maps.
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp5 = {
    center:new google.maps.
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp6 = {
    center:new google.maps.
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    var mapProp7 = {
    center:new google.maps.
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  }
    
  }*/
   
    
   
   

}
google.maps.event.addDomListener(window, 'load', initialize);
