# Lynk

Lynk is a mobile app built using React Native for the Apple iOS platform. By inputting a valid starting point and a destination, it returns a side-by-side comparison of Uber and Lyft prices for different ride types at the time it is requested. Once the ride is selected, users will be redirected to the corresponding ride-sharing app or the App Store.

For the price conscious, comparing transportation costs between Lyft and Uber requires you to open both apps to check. This app will allow users to do a price comparison from within one single app. Take a look at the demo link below:

[Live Here][live]

<!-- [live]: demo link goes here-->

## Features

* Compare ride costs between Lyft and Uber
* Ability to input address or place name
* Filter ride costs by price and ride time
* Select a ride (Uber or Lyft)
  + Redirect to associated app
* Centers map view on user's current location
* Pick up location defaults to user's current location

## Code Guide

If you'd like to take a closer look at the code behind the Lynk App, the best folders to look in are:

* [Form]
* [Main]
* [Map Component]
* [Data Parsing]
* [Results] (Folder: results and ride results)
* [Uber List] (Folder: uber list and uber ride item)
* [Lyft List] (Folder: lyft list and lyft ride item)



## Languages, Frameworks, Libraries, and APIs

* React
* React-Native
* React-Native-Maps
* React-Native-Geocoding
* JavaScript
* Lyft API
* Uber API
* Google Maps API

## Screenshots

Map Page:
<!-- ![map page](./screenshots/homepage.jpg) -->

Ride Costs Comparison Page:
<!-- ![map page](./screenshots/homepage.jpg) -->

## Future Implementations
* User login and authorization to persist user account information
* Sidebar for account settings
* Book rides through Lynk App
