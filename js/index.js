document.getElementById("mapButton").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de navegação

    let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    let latitude = -23.778833;
    let longitude = -46.589000;

    // Se for um dispositivo móvel, tenta usar o esquema geo:
    if (isMobile) {
        window.location.href = `geo:${latitude},${longitude}?q=Chácara+de+Boa+na+Lagoa`;
    } else {
        // Caso contrário, abre o Google Maps no desktop
        window.open(`https://maps.app.goo.gl/YZRiLRsn1xKa4pMh8`, "_blank");
    }
});