// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

export const getAddress = (lat,lng) => {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY`;

  fetch(url).then(response => {
    if (response.status !== 200){
      console.log('getAddress. Status code: ' + response.status)
      return;
    }
    response.json().then(data => {
      console.log(data["results"][0]["formatted_address"]);
      this.setState({ startAddress: data["results"][0]["formatted_address"] });
    })
  }).catch(err => {
    console.log('Get Address Error: ', err);
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
