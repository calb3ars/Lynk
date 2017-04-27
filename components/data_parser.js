export const LyftParser = (data) => {
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

  selectedData =
  [parsedData['lyft_line'] ? parsedData['lyft_line'] : notFound,
  parsedData['lyft'] ? parsedData['lyft'] : notFound,
  parsedData['lyft_plus'] ? parsedData['lyft_plus'] : notFound];
  return selectedData;
};

export const UberParser = (data) => {
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

  selectedData =
  [parsedData['POOL'] ? parsedData['POOL'] : notFound,
  parsedData['uberX'] ? parsedData['uberX'] : notFound,
  parsedData['uberXL'] ? parsedData['uberXL'] : notFound];
  return selectedData;
};
