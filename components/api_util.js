// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

export const getAddress = (lat,lng) => {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&key=AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY`;

  fetch(url).then(response => {
    console.log(response)
  })
}
//
// fetch(rideUrl,{
//   method: 'GET',
//   headers: {
//     'Authorization': 'bearer '+ lyftToken
//   }
// }).then(response => {
//     if (response.status !== 200){
//       console.log('fetchLystList. Status code: ' + response.status);
//       return;
//     }
//     response.json().then(data => {
//       this.setState({lyftRides: Parsers.LyftParser(data, this.state.riders)});
//     });
//   }).catch(err => {
//     console.log('Fetch Lyft Rides Error :-S', err);
//   });
