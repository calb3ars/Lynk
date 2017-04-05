let data = {
  "cost_estimates": [
    {
      "ride_type": "lyft_plus",
      "estimated_duration_seconds": 913,
      "estimated_distance_miles": 3.29,
      "estimated_cost_cents_max": 2355,
      "primetime_percentage": "25%",
      "currency": "USD",
      "estimated_cost_cents_min": 1561,
      "display_name": "Lyft Plus",
      "primetime_confirmation_token": null,
      "is_valid_estimate": true
    },
    {
      "ride_type": "lyft_line",
      "estimated_duration_seconds": 913,
      "estimated_distance_miles": 3.29,
      "estimated_cost_cents_max": 475,
      "primetime_percentage": "0%",
      "currency": "USD",
      "estimated_cost_cents_min": 475,
      "display_name": "Lyft Line",
      "primetime_confirmation_token": null,
      "is_valid_estimate": true
    },
    {
      "ride_type": "lyft",
      "estimated_duration_seconds": 913,
      "estimated_distance_miles": 3.29,
      "estimated_cost_cents_max": 1755,
      "primetime_percentage": "25%",
      "currency": "USD",
      "estimated_cost_cents_min": 1052,
      "display_name": "Lyft",
      "primetime_confirmation_token": null,
      "is_valid_estimate": true
    }
  ]
}

let new_arr = [];

data["cost_estimates"].forEach(ride => (
  new_arr.push({
      estimated_cost_cents_min: ride.estimated_cost_cents_min,
      estimated_cost_cents_max: ride.estimated_cost_cents_max,
      display_name: ride.display_name,
      estimated_duration_seconds: ride.estimated_duration_seconds,
      primetime_percentage: ride.primetime_percentage
  })
  )
)
console.log(new_arr);
