# InfoHub
This project is made for my personal use, but you're welcome to use any part of the code. Some widgets may need [API keys](https://en.wikipedia.org/wiki/Application_programming_interface_key) and it's up to you to acquire those yourself.

## Application
InfoHub is an application to display widgets on a screen. That's it. No accounts or special features for touchscreen monitors. Just for displaying information.

### Current widgets
* **Clock with time and date.** Displays the current time and date.

* **Västtrafik.** Displays the current departures from chosen bus-, tram- or trainstops. Needs API keys. You can get them from [developer.vasttrafik.se](https://developer.vasttrafik.se/portal/#/).

* **Twitter images.** Displays the latest images from specified Twitter user.

* **Weather (Dark Sky API).** Displays current and hourly weather data for chosen location. Needs API key. You can get it from [darksky.net/dev](https://darksky.net/dev/).

## React
The frontend is built with the Javascript library [React](https://facebook.github.io/react/) and is styled with the CSS extension language [Sass](http://sass-lang.com).

### Development
The first time you run the application (and every time you add new dependencies) you need do run:
```
npm install
```
After that you only need to run:
```
npm start
```

### Production
To build the React application you run:
```
npm build
```

## Flask
The backend runs on the Python framework [Flask](http://flask.pocoo.org) and is used as an [API](https://en.wikipedia.org/wiki/Application_programming_interface) to request data and structure it in a format more convenient for the frontend application.

### Development
The first time you run the application (and every time you add new dependencies) you need do run:
```
./init.sh
```
After that you only need to run:
```
./debug.sh
```

### Production
There are currently no specified script for production mode.

## Dependencies
* [React](https://facebook.github.io/react/)
* [Flask](http://flask.pocoo.org)
* [Sass](http://sass-lang.com)
* [SuperAgent](https://visionmedia.github.io/superagent/)
* [Requests: HTTP for Humans](http://docs.python-requests.org/en/master/)
* [Moment.js](http://momentjs.com)
* [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)

## Resources
* [Västtrafik Developer Portal](https://developer.vasttrafik.se/portal/#/)
* [Dark Sky API](https://darksky.net/dev/)
