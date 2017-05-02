export const LyftParser = (data, passengers = '1 - 2') => {
  let parsedData = {};
  let selectedData = [];
  let notFound = {
    estimated_cost_cents_min: 0,
    estimated_cost_cents_max: 0,
    display_name: "Not Available",
    estimated_duration_seconds: "Not Available",
    primetime_percentage: "Not Available"
  };

  data["cost_estimates"].forEach(ride => {
    parsedData[ride.ride_type] = {
      estimated_cost_cents_min: ride.estimated_cost_cents_min,
      estimated_cost_cents_max: ride.estimated_cost_cents_max,
      display_name: ride.display_name,
      estimated_duration_seconds: ride.estimated_duration_seconds,
      primetime_percentage: ride.primetime_percentage
    };
  });

  parsedLyftData =
    [parsedData['lyft_line'] ? parsedData['lyft_line'] : notFound,
    parsedData['lyft'] ? parsedData['lyft'] : notFound,
    parsedData['lyft_plus'] ? parsedData['lyft_plus'] : notFound];

  switch (passengers){
    case '1 - 2':
      selectedData = parsedLyftData;
      break;
    case '3 - 4':
      selectedData = [parsedLyftData[1], parsedLyftData[2]];
      break;
    case '5+':
      selectedData = [parsedLyftData[2]];
      break;
  }
  return selectedData;
};

export const UberParser = (data, passengers = '1 - 2') => {
  let parsedData = {};
  let selectedData =[];
  let notFound = {
    low_estimate: 0,
    high_estimate: 0,
    display_name: "Not Available",
    duration: "Not Available",
    primetime_percentage: "Not Available"
  };

  data["prices"].forEach(ride => (
    parsedData[ride.display_name] = {
        low_estimate: ride.low_estimate,
        high_estimate: ride.high_estimate,
        display_name: ride.display_name,
        duration: ride.duration,
        primetime_percentage: ride.primetime_percentage
    })
  );
  parsedUberData =
    [parsedData['POOL'] ? parsedData['POOL'] : notFound,
    parsedData['uberX'] ? parsedData['uberX'] : notFound,
    parsedData['uberXL'] ? parsedData['uberXL'] : notFound];

  switch (passengers){
    case '1 - 2':
      selectedData = parsedUberData;
      break;
    case '3 - 4':
      selectedData = [parsedUberData[1], parsedUberData[2]];
      break;
    case '5+':
      selectedData = [parsedUberData[2]];
      break;
  }

  return selectedData;
};


// 1-2
//  POOL, uberX, uberXL
//  lyft_line, lyft, lyft_plus
// 3-4
//  uberX, uberXL
//  lyft, lyft_plus
// 5
//  uberXL
//  lyft_plus


// const options = [
//   '1 - 2',
//   '3 - 4',
//   '5+'
// ];
