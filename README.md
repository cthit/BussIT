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
Build the Dockerfile under `bussIT/` and run it. The frontend server will listen to port `8080`.

## Flask
The backend runs on the Python framework [Flask](http://flask.pocoo.org) and is used as an [API](https://en.wikipedia.org/wiki/Application_programming_interface) to request data and structure it in a format more convenient for the frontend application.

### Development
First you need to add a copy of `example.debug.sh` and rename it to `debug.sh`. The file can be found in `flask-app/`. Set the environment variables `VASTTRAFIK_KEY` and `VASTTRAFIK_SECRET` to the key acquired  from [Vasttrafik](https://developer.vasttrafik.se)

The first time you run the application (and every time you add new dependencies) you need do run:
```
sh ./init.sh
```
After that you only need to run:
```
sh ./debug.sh
```

### Production
Build the Dockerfile in `flask-app` and run the image. You need to set the environment variables `VASTTRAFIK_KEY` and `VASTTRAFIK_SECRET` to the key acquired  from [Vasttrafik](https://developer.vasttrafik.se). The server listens to port `8080`. <br>
#### Bug
The time settings of the docker image might be incorrect resulting in the wrong departure times. Fix this by calling 
```
dpkg-reconfigure tzdata
```
and set the correct timezone.

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
