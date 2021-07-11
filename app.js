window.addEventListener('load', () => {
    let lon;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = '${proxy}https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a2fa0bb01f17db2b0ae881244433db3e}';

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {

                })

        });


    }
});