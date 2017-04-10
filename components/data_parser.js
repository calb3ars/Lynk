export const LyftParser = (data) => {
  let parsedData = {};
  let selectedData = [];

  data["cost_estimates"].forEach(ride => (
    parsedData[ride.ride_type] = {
        estimated_cost_cents_min: ride.estimated_cost_cents_min,
        estimated_cost_cents_max: ride.estimated_cost_cents_max,
        display_name: ride.display_name,
        estimated_duration_seconds: ride.estimated_duration_seconds,
        primetime_percentage: ride.primetime_percentage
    })
  );
  selectedData = [parsedData['lyft_line'], parsedData['lyft'], parsedData['lyft_plus']];
  return selectedData;
};

export const UberParser = (data) => {
  let parsedData = {};
  let selectedData =[];

  data["prices"].forEach(ride => (
    parsedData[ride.display_name] = {
        low_estimate: ride.low_estimate,
        high_estimate: ride.high_estimate,
        display_name: ride.display_name,
        duration: ride.duration,
        primetime_percentage: ride.primetime_percentage
    })
  );
  selectedData = [parsedData['POOL'], parsedData['uberX'], parsedData['uberXL']];
  return selectedData;
};
