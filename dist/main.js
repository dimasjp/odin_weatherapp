(()=>{"use strict";(async o=>{try{let o=await fetch("https://api.weatherapi.com/v1/current.json?key=d40a0fbc82784379ac2121158230305&q=London&aqi=no"),t=await o.json();console.log(t.location.name),console.log(t.current.condition.text)}catch(o){console.log(o)}})()})();