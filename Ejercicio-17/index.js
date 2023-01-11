function initMap() {
    // The location of Uluru
    const posicion1 = { lat: 36.367030373964035, lng: -6.178815193634543 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: posicion1,
    })

    //creamos chincheta
    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Mi primer lugar Favorito"
    })

    const posicion2 = {lat:36.13764307953988, lng:-5.846442947021942};
    marker = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Mi segundo lugar preferido"
    })

    const posicion3 = {lat:36.62267193147263,  lng:-4.497396662990198};
    marker = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Mi tercera posicion favorita"
    })
}

