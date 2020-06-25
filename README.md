# Countdown

Timer, with output format customization.

## Installation


```html
To edit the output element, you can replace it with js vanilla
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<script src="countdown.js"></script>
```

## Usage

```js
 var display = document.getElementById("countdown");
 
 /**
 * @param time    The time at which the countdown will begin (seconds)
 * @param element DOM element in which the result will be embedded
 * @param format  String with the output format (default 's')
 */

 countdown(3700, display, 'hms');
```
## Demo
[Demo on Codepen](https://codepen.io/adrianvillamayor/pen/KEpXLz?editors=1010)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/AdrianVillamayor/Countdown-JavaScritp/blob/master/LICENSE)
