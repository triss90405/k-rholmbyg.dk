<?php include 'parts/header.html'; ?>

<body id="contact">

   <?php include 'parts/navigation.html'; ?>

   <div class="container" style="height: 600px;">

   </div>
   <div class="map">
      <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
      <div style="overflow:hidden;height:400px;width:100%;pointer-events:none;">
         <div id="gmap_canvas" style="height:500px;width:100%;"></div>
         <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
         <a class="google-map-code" href="http://www.themecircle.net" id="get-map-data">themecircle.net</a>
      </div><script type="text/javascript"> function init_map(){var myOptions = {zoom:15,center:new google.maps.LatLng(56.2351384,10.634884000000056),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(56.2351384, 10.634884000000056)});infowindow = new google.maps.InfoWindow({content:"<b>Kurt Mikkelsen</b><br/>Tingh&oslash;jvej<br/> Handrup" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
      <div class="map-overlay">
         <h1>Firma Navn</h1>
         <h2>Kurt Mikkelsen</h2>
         <h2>Arkitekt / Byggeherre</h2>
         <h2>Tlf: <span>12 23 34 45</span></h2>
         <h2>Mail: <span>km@arkm.dk</span></h2>
         <h2>Adr: <span>Dingevej 22, 1234 Handrup</span></h2>
      </div>
      <!-- http://www.map-embed.com/ -->
   </div>
<?php include 'parts/footer.php'; ?>
