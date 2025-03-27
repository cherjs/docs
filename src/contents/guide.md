# Guide

## Introduction

[Cher](https://github.com/cherjs/cher) is a configurable fetcher based on the native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
<span class="soon"></span>

___

## Change log

[CHANGELOG.md](https://github.com/cherjs/cher/blob/main/CHANGELOG.md)

___

## Installation

<span class="soon"></span>

___

###  From NPM

It can be installed as an NPM package in a project directory by running the command below:

```bash
npm install cherjs@latest
```

Then it can be imported for use as an ES module:

```js
import cher from 'cherjs';
```

Or as a CommonJS module:

```js
const cher = require('cherjs');
```

The imported `cher` variable contains a [Cher instance](/api#cher-instance).

___

### From CDN

Insert the following code snippet into the HTML code (this loads the minified production version):

```html
<script src="https://cdn.jsdelivr.net/npm/cherjs"></script>
```

Or, if the uncompressed version is needed, then

```html
<script src="https://cdn.jsdelivr.net/npm/cherjs/dist/cher.umd.js"></script>
```

After that, a [Cher instance](/api#cher-instance) named `cher` is available in the global scope, that is, as the `cher` property of the global [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object (so as `window.cher`).

___

## Support

[Cher](https://github.com/cherjs/cher) and [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) support can be checked with the read-only [`supported`](/api#cher.supported) boolean property of a [Cher instance](/api#cher-instance):

```js
if (cher.supported) {
	// fetch API is supported
}
else {
	// fetch API is not supported
}
```

See the [compatibility table on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility) for browser and runtime environment support for [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

___

## Examples

Each [Cher instance](/api#cher-instance) is a reusable agent, meaning it can be used to initiate requests multiple times.

```js
// Import the initial Cher instance
import cher from 'cherjs';

// ...

let wikipediaLogo;

// Get Wikipedia logo
cher(
	'https://en.wikipedia.org/static/images/project-logos/enwiki.png',
	{
		decode: 'file',
	},
)
.then(
	(response) => {
		// file
		wikipediaLogo = response.data;
	},
);

// ...

// Again: cher() and cher.fetch() are the same
cher.fetch(
	{
		url: 'https://en.wikipedia.org/static/images/project-logos/enwiki.png',
		decode: 'file',
	},
)
.then(
	(response) => {
		// file
		wikipediaLogo = response.data;
	},
);

// ...

// Create a new Cher instance
const worldTime = cher.create();
// Set the base URL
worldTime.baseURL = 'http://worldtimeapi.org/api/timezone/';
// Complete the base URL
worldTime.baseURL = '{area}/';

// ...

// Create a new Cher instance with the previous configuration
const europeTime = worldTime.create(true);
// Complete the configuration
europeTime.args = {
	area: 'Europe',
};

// ...

let romeTime;

// Get Rome time
europeTime('Rome')
.then(
	(response) => {
		// object
		romeTime = response.data;
	},
);

// ...

// Complete the base URL
europeTime.baseURL = '{location}';

// Update the Rome time
europeTime(
	{
		args: {
			location: 'Rome',
		},
	},
)
.then(
	(response) => {
		// object
		romeTime = response.data;
	},
);

// ...

let reykjavikTime;

// Get a Europe time (Reykjavik, Iceland) from another area
europeTime(
	{
		args: {
			area: 'Atlantic',
			location: 'Reykjavik',
		},
	},
)
.then(
	(response) => {
		// object
		reykjavikTime = response.data;
	},
);
```

___

## Multilevel configuration

<span class="soon"></span>

___

## Instances

<span class="soon"></span>

___

## Event handling

<span class="soon"></span>

___

## License

<em>

The MIT License (MIT)

Copyright © 2022-present Haász Sándor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</em>

___

