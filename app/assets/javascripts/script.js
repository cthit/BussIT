var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vasttrafik.se/bin/rest.exe/v2/v2/departureBoard", false);
xhr.send();

console.log(xhr);