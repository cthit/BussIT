# BussIT
Shows departures from Chalmershållplatsen and Chalmers Tvärgata. Requires [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) from Västtrafik.


### Current widget

* **Västtrafik.** Displays the current departures from chosen bus-, tram- or trainstops. Needs API keys. You can get them from [developer.vasttrafik.se](https://developer.vasttrafik.se/portal/#/).


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

#### Sass
To compile the Sass files you need to have Sass installed. Instructions on how to do that can be found [here](http://sass-lang.com/install).

There's a [npm](https://www.npmjs.com) script included, so to compile you only need to run:
```
npm run sass
```

### Production
To build the React application you run:
```
npm run build
```

## Flask
The backend runs on the Python framework [Flask](http://flask.pocoo.org) and is used as an [API](https://en.wikipedia.org/wiki/Application_programming_interface) to request data and structure it in a format more convenient for the frontend application.

### Development
First you need to add a copy of `api_keys.example.py` and rename it to `api_keys.py`. The file can be found in `flask-app/InfoHubAPI/`. Add your API key in this file.

The first time you run the application (and every time you add new dependencies) you need do run:
```
sh ./init.sh
```
After that you only need to run:
```
sh ./debug.sh
```

### Production
There are currently no specified script for production mode.

## Dependencies
* [React](https://facebook.github.io/react/)
* [Flask](http://flask.pocoo.org)
* [npm](https://www.npmjs.com)
* [Sass](http://sass-lang.com)
* [SuperAgent](https://visionmedia.github.io/superagent/)
* [Requests: HTTP for Humans](http://docs.python-requests.org/en/master/)
* [Moment.js](http://momentjs.com)

## Resources
* [Västtrafik Developer Portal](https://developer.vasttrafik.se/portal/#/)
