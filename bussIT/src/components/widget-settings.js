/*
* # API #
* The domain you're getting your data from.
*/
export const API = process.env.NODE_ENV == "development" ? "http://localhost:5000" : "https://bussit.chalmers.it"

/*
* # Västtrafik #
* List of bus-, tram- or trainstops you want to include in this widget.
* Attributes:
*   name: the name of the stop
*   id: the id of the stop
*/
export const stops = [
  {
    name: 'Chalmers Tvärgata',
    id: 9021014001970000
  },
  {
    name: 'Chalmershållplatsen',
    id: 9021014001960000
  }
];
