//
// let lyft_token = 'cUNXd2ZxU2hpUU9POkhHUE5xcUtoQ1RONU5zSkRyS21sMjgzcG44TkFOUG56';
// let uber_token = 'TlE1dF9FX0NlYnRBemU2Q2k0NFhGVGRpSnRNMkdIOHg6ZXJMY3dGT2RwV0NBM0hHaDF1VElyeUppd1ZNSkFKeVhGWk11VlRiRQ==';
// let ride_url = 'https://api.lyft.com/v1/cost?start_lat=37.7763&start_lng=-122.3918&end_lat=37.7972&end_lng=-122.4533'
//
// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic '+ lyft_token
//   },
//   body: JSON.stringify({
//     "grant_type": "client_credentials",
//     "scope": "public"
//   })
// }).then(response => {
//     response.json().then(data => {
//     console.log(data.access_token);
//   })
// })
//
//
// fetch(ride_url,{
//   method: 'GET',
//   headers: {
//     'Authorization': 'bearer '+ access_token
//   }
// }).then(response => {
//     response.json().then(data => {
//       console.log(data)
//     })
//   })


// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic '+ lyft_token
//   },
//   body: JSON.stringify({
//     "grant_type": "client_credentials",
//     "scope": "public"
//   })
// }).then(response => {
//     response.json().then(data => {
//       fetch(ride_url,{
//         method: 'GET',
//         headers: {
//           'Authorization': 'bearer ' + `${data.access_token}`
//         }
//       }).then(response => {
//           response.json().then(info => {
//             console.log(info)
//           })
//         })
//
//   })
// })


// let ride_url = 'https://api.lyft.com/v1/cost?start_lat=37.7763&start_lng=-122.3918&end_lat=37.7972&end_lng=-122.4533'



  // curl -H 'Authorization: Token Cwy6MC7KQ1jFGY_8cTA8UW6Ry145Y2eMlsypiXxG' \
  // 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7763&start_longitude=-122.3918&end_latitude=37.7972&end_longitude=-122.4533'
  // 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7759792&start_longitude=-122.41823'

  // curl -H 'Authorization: Token <TOKEN>' \
  //      -H 'Accept-Language: en_US' \
  //      -H 'Content-Type: application/json' \
  //      'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075'

  // var Uber = require('uber-api')
  //     ({server_token:'Cwy6MC7KQ1jFGY_8cTA8UW6Ry145Y2eMlsypiXxG',version:'v1.2'}),
  //     lat = 36,
  //     lon = -94;

  // Uber.getProducts(lat, lon, function(error, response) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(response);
  //   }
  // });
  //
  // Uber.getProducts(lat, lon).then(function(response){
  //   console.log(response);
  // }, function(error){
  //   console.error(response);
  // });


  // let url = 'https://api.uber.com/v1.2/products?latitude=37.7759792&longitude=-122.41823';
  //
  // let server_token = 'Cwy6MC7KQ1jFGY_8cTA8UW6Ry145Y2eMlsypiXxG';
  // fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Token '+ server_token,
  //     'Accept-Language': 'en_US'
  //   }
  // }).then(response => {
  //     return response.json();
  // }).catch(error => {
  //   console.log(error);
  // })


  // fetchUberRides(){
  //   let counter = 0;
  //   let url = 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7763&start_longitude=-122.3918&end_latitude=37.7972&end_longitude=-122.4533';
  //   let server_token = 'Cwy6MC7KQ1jFGY_8cTA8UW6Ry145Y2eMlsypiXxG';
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Token '+ server_token,
  //       'Accept-Language': 'en_US'
  //     }
  //   }).then(response => {
  //     // console.log(response);
  //     // console.log(counter++);
  //     // console.log(response.json());
  //     response.json().then(promise => {
  //       // console.log(counter++);
  //       // console.log(promise);
  //       this.setState({uberRides: Parsers.UberParser(promise)})
  //
  //       // console.log(`uberrides === ${this.state.uberRides}`);
  //     })
  //   })
  // }
