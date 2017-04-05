export const LyftParser = (data) => {
  let parsedData = [];
  data["cost_estimates"].forEach(ride => (
    parsedData.push({
        estimated_cost_cents_min: ride.estimated_cost_cents_min,
        estimated_cost_cents_max: ride.estimated_cost_cents_max,
        display_name: ride.display_name,
        estimated_duration_seconds: ride.estimated_duration_seconds,
        primetime_percentage: ride.primetime_percentage
    })
    )
  )
  return parsedData;
}

export const UberParser = (data) => {
  let parsedData = [];
  data["prices"].forEach(ride => (
    parsedData.push({
        low_estimate: ride.low_estimate,
        high_estimate: ride.high_estimate,
        display_name: ride.display_name,
        duration: ride.duration,
        primetime_percentage: ride.primetime_percentage
    })
    )
  )
  return parsedData.slice(0,3);
}
