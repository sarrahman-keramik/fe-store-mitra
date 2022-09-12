import axios from "axios";

export const getCurrentUserLocation = () => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_API_KEY}`;
                axios
                    .get(url)
                    .then((response) => {
                        let data = {
                            street:
                                response.data.results[0].address_components[1].long_name,
                            city: response.data.results[0].address_components[2].long_name,
                        };
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }, (error) => {
                alert("Error: " + error.message);
            }
            );
        } else {
            alert("Browser tidak support Geolocation");
        }
    });
};