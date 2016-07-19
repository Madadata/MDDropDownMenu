# MDDropDownMenu

[![Build Status](https://travis-ci.org/Madadata/MDDropDownMenu.svg?branch=master)](https://travis-ci.org/Madadata/MDDropDownMenu)
[![Dependency Status](https://dependencyci.com/github/Madadata/MDDropDownMenu/badge)](https://dependencyci.com/github/Madadata/MDDropDownMenu)
[![GitHub issues](https://img.shields.io/github/issues/Madadata/MDDropDownMenu.svg)](https://github.com/Madadata/MDDropDownMenu/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Madadata/MDDropDownMenu/master/LICENSE)

[![NPM](https://nodei.co/npm/MDDropDownMenu.png)](https://nodei.co/npm/MDDropDownMenu/)

# Properties
----
* **options**: arrayOf(string) - array of options displayed in dropdown menu.
* **defaultOption**: string - default option to display.
* **onSelect**: (selected) => () - the function to be called when any option is selected and with the selected option as the only input.
* **width**: number - width of the dropdown menu
* **height**: number - height of the dropdown menu

# Acknowledgement
----
this is inspired by the work done by [Hampus Persson](http://codepen.io/hmps/pen/CbltK). Many thanks.

## Note
This Component uses FontAwesome icon. So make sure your project has that included.
```
npm install font-awesome
```
and import the css in your root component or include it in index.html
```
import 'font-awesome/css/font-awesome.css';
```
