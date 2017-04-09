# Lynk

Lynk is a mobile app built using React Native for the Apple iOS platform. By inputting a valid starting point and a destination, it returns a side-by-side comparison of Uber and Lyft prices for different ride types at the time it is requested. Once the ride is selected, users will be redirected to the corresponding ride-sharing app or the App Store.

For the price conscious, comparing transportation costs between Lyft and Uber requires you to open both apps to check. This app will allow users to do a price comparison from within one single app. Take a look at the demo link below:

[Live Here][live]

[live]: http://www.thymes-cookbook.com

## Features

* Compare ride costs between Lyft and Uber
* Ability to input address or place name
* Filter ride costs by price and ETA
* Select a ride (Uber or Lyft)
  + Redirect to associated app
* Centers map view on user's current location
* Pick up location defaults to user's current location

## Code Guide

If you'd like to take a closer look at the code behind the Cookbook App, the best folders to look in are:


* [Cookbook.jsx](./frontend/Cookbook.jsx)
* [React components](./frontend/components)
  * [App](./frontend/components/app.jsx)
* [Rails controllers](./app/controllers/api)
* [Flux Stores](./frontend/stores)
* [Api Util](./frontend/util/api_util.js)
* [DB Schema](./db/schema.rb)
* [Rails Routes](./config/routes.rb)

## Languages, Frameworks, Libraries, Etc.

* React
* React Native
* React Native Maps
* React Native Geocoding
* Lyft API
* Uber API
* Google Maps API

## Screenshots

Home page:
![home page](./screenshots/homepage.jpg)

Recipe detail page:
![recipe detail](./screenshots/recipe-detail.jpg)

Recipe notes:
![recipe detail](./screenshots/comments.jpg)

Search bar:
![search bar](./screenshots/search.jpg)
