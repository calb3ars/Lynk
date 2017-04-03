# Lynk

## Background
For the price conscious, comparing transportation costs between Lyft and Uber requires you to open both apps to check. This app will allow users to do a price comparison from within one single app. Users will then be able to select the ride they want and be redirected to the associated app.

## Functionality & MVP
With this app, users will be able to:
- [ ] Compare pricing between Lyft and Uber
- [ ] Users will be able to view the map
- [ ] Filter by price and eta
- [ ] Select a ride and redirect to selected app

## Wireframes
![mapform][mapform]

![results][results]



## Technologies & Technical Challenges
This app will be built for iOS using React-Native, JavaScript, jQuery, and CSS.

The primary technical challenges will be:
- Being able to use React-Native
- Integrating APIs to retrieve data we specify
- Redirecting to associated app and transferring pre-filled data
- Implementing accordion views

## Group Members & Work Breakdown
Our group consists of four members, Andrew Jiang, Tony Xie, Vinson Chen, and Vivian Lee.

Andrew's primary responsibilities will be:
- Researching React-Native programming structure
- Comparisons listings view component
- Integrate Lyft API
- Swipe animation implementation
- Implement accordion views
- CSS UI/UX Styling

Tony's primary responsibilities will be:
- Researching React-Native programming structure
- Comparisons listings view component
- Integrate Google Maps API
- Swipe animation implementation
- Implement accordion views

Vinson's primary responsibilities will be:
- Researching API implementations: Google Maps Api, Lyft Api, Uber Api
- Implement input forms
- Integrate Lyft API
- Implement accordion views
- Filtering results

Vivian's primary responsibilities will be:
- Researching API implementations: Google Maps Api, Lyft Api, Uber Api
- Implement map view component
- Integrate Google Maps API
- Filtering results
- CSS UI/UX Styling


## Implementation Timeline
**Monday**
- Research how to use and implement APIs and React native. Decide whether we need any other tools or libraries.
  + APIs to use (Google Maps, Lyft/Uber) (Vivian and Vinson)
  + React Native (Tony and Andrew)
  + Brainstorm name of app and branding (Everyone)

**Tuesday**
- Create the view and components and design for overall layout and buttons.
  + View (List of components below)
    * Map view component (Vivian)
    * Input forms (Vinson)
    * Comparison listings view component (Andrew & Tony)
  + Accordion for buttons to select and drag (Andrew & Tony)


**Wednesday & Thursday**
- Integration (Everyone)
  + Google Maps: get latitude & longitude for current location and destination
  + Lyft/Uber APIs: use google map lat & long to perform GET requests for ride info.
  + Link to chosen app (Lyft/Uber) and passing the location data
  + Filtering and sorting of data

**Friday**
- CSS UI/UX refinement (Andrew)
  + Color scheme, logo, and name
- Quality Assurance (Vinson)
- Demo Page (Tony & Vivian)
  + GIFs for Demo
  + Emulator
  + Webpage

## Future implementations
- Google Place Search API
- Loading Screen Animation
- Pull reviews
- Book through our app
- Location Services Alert
- Sidebar for Account Settings


[results]: http://res.cloudinary.com/dogzxn5h4/image/upload/v1491179096/flex/resultsDetail_tnzmjd.jpg
[mapform]: http://res.cloudinary.com/dogzxn5h4/image/upload/c_scale,w_400/v1491179099/flex/mapForm_ynluyp.jpg
