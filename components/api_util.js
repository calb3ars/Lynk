import * as KEYS from './key';

export const fetchAddress = (lat,lng) => {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=
             ${lat},${lng}&key=${KEYS.googleApiKey}`;

  fetch(url).then(response => {
    if (response.status !== 200){
      console.log('getAddress. Status code: ' + response.status)
      return;
    }
    return response.json();
  });
}

export const fetchLyftToken = () => {
  let token = KEYS.lyftAuthToken;
  let url = 'https://api.lyft.com/oauth/token';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic '+ token
    },
    body: JSON.stringify({
      "grant_type": "client_credentials",
      "scope": "public"
    })
  }).then(response => {
    if (response.status !== 200){
      console.log('Looks like there was a problem. Status code: '
                  + response.status);
      return;
    }
    return response.json();
  })
}

export const fetchLyftRides = (token, url) => {
  fetch(url,{
    method: 'GET',
    headers: {
      'Authorization': 'bearer '+ token
    }
  }).then(response => {
    if (response.status !== 200){
      console.log('fetchLystList. Status code: ' + response.status);
      return;
    }
    return response.json();
  })
}

export const fetchUberRides = (url) => {
  let serverToken = KEYS.uberServerToken;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '+ serverToken,
      'Accept-Language': 'en_US'
    }
  }).then(response => {
    if (response.status !== 200){
      console.log('fetchUberRides. Status code: ' + response.status);
      return;
    }
    return response.json();
  });
}

export const generateUrls = (startLat, startLng, endLat, endLng) => {
  return {
    lyft: `https://api.lyft.com/v1/cost?start_lat=${startLat}
      &start_lng=${startLng}&end_lat=${endLat}&end_lng=${endLng}`,
    lyftRedirect: `lyft://ridetype?id=lyft&pickup[latitude]=${startLat}
      &pickup[longitude]=${startLng}&destination[latitude]=${endLat}
      &destination[longitude]=${endLng}`,
    uber: `https://api.uber.com/v1.2/estimates/price?start_latitude=
      ${startLat}&start_longitude=${startLng}&end_latitude=${endLat}
      &end_longitude=${endLng}`,
    uberRedirect: `uber://?client_id=<${KEYS.uberClientId}>&action=
      setPickup&pickup[latitude]=${startLat}&pickup[longitude]=
      ${startLng}&dropoff[latitude]=${endLat}&dropoff[longitude]=${endLng}`
  }
}
