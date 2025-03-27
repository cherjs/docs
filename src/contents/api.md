# API

## Defaults

The [defaults](#defaults) represent the **1st level of configuration**. The [defaults](#defaults) determine the values that are used to initialize unspecified properties when creating a [Cher instance](#cher-instance), and the properties of a [Cher instance](#cher-instance) are reset with these values when restored. The [defaults](#defaults) can be queried using the [`cher.getDefault()`](#cher.getdefault()) and [`cher.getDefaults()`](#cher.getdefaults()) methods of a [Cher instance](#cher-instance), modified with the [`cher.setDefault()`](#cher.setdefault()) and [`cher.setDefaults()`](#cher.setdefaults()) methods, and reset to the initial values using the [`cher.resetDefault()`](#cher.resetdefault()) and [`cher.resetDefaults()`](#cher.resetdefaults()) methods (see initial values below for each [defaults](#defaults) property).

::: warning
Instead of setting a non-primitive value (object, function), it is recommended to set its factory function (see, for example, the initial value of [`defaults.delimiters`](#defaults.delimiters)) to avoid unexpected behavior.
   ::: danger
   Instead of setting a function as a default value, you should always set its factory function (see, for example, the initial value of [`defaults.evalTemplate`](#defaults.evaltemplate)), because if a default value is a function, it is treated as a factory function, that is, when this default value is used, the function is called and the return value is set as the value for the corresponding property of that [Cher instance](#cher-instance).
::::::

___

### defaults.method

The default value for the [`cher.method`](#cher.method) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.method`](#cher.method) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

### defaults.evalTemplate

The default value for the [`cher.evalTemplate`](#cher.evaltemplate) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.evalTemplate`](#cher.evaltemplate) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`() => evalSimpleTemplate`. The return value of this factory function is a simple template evaluation function, which is described at [`evalSimpleTemplate()`](#evalsimpletemplate()) among the [Utilities](#utilities).

___

### defaults.delimiters

The default value for the [`cher.delimiters`](#cher.delimiters) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.delimiters`](#cher.delimiters) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`() => ['{', '}']`.

___

### defaults.baseURL

The default value for the [`cher.baseURL`](#cher.baseurl) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.baseURL`](#cher.baseurl) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

### defaults.url

The default value for the [`cher.url`](#cher.url) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.url`](#cher.url) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

### defaults.args

The default value for the [`cher.args`](#cher.args) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.args`](#cher.args) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

### defaults.params

The default value for the [`cher.params`](#cher.params) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.params`](#cher.params) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

### defaults.decode

The default value for the [`cher.decode`](#cher.decode) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.decode`](#cher.decode) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`'json'`.

___

### defaults.encode

The default value for the [`cher.encode`](#cher.encode) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.encode`](#cher.encode) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`'json'`.

___

### defaults.data

The default value for the [`cher.data`](#cher.data) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.data`](#cher.data) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

### defaults.options

The default value for the [`cher.options`](#cher.options) property when creating or resetting a [Cher instance](#cher-instance). See [`cher.options`](#cher.options) property and a general description of the [defaults](#defaults) for more details.

#### Initial value

`undefined`.

___

## Cher instance

[Cher instances](#cher-instance) represent the **2nd level of configuration**. Each [Cher instance](#cher-instance) is a function (see [`cher()`](#cher())) and an object instance in one, with its own properties (see [Instance properties](#instance-properties)) and methods (see [Instance methods](#instance-methods)).
<span class="soon"></span>

___

### cher()

<span class="soon"></span>

___

## Instance properties

<span class="soon"></span>

___

### cher.supported

<span class="soon"></span>

#### Possible values

`true` or `false`.

___

### cher.method

<span class="soon"></span>

#### Possible values

`undefined` or a valid [HTTP request method name](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

___

### cher.evalTemplate

<span class="soon"></span>

#### Possible values

`undefined` or a function whose return value is a template evaluation function.

___

### cher.delimiters

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

### cher.baseURL

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

### cher.url

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

### cher.args

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

### cher.params

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

### cher.decode

<span class="soon"></span>

#### Possible values

`'json'`, `'strict-json'`, `'text'`, `'url'`, `'form'`, `'blob'`, `'file'`, `'stream'`, `'buffer'`, `'none'` or `undefined`.

___

### cher.encode

<span class="soon"></span>

#### Possible values

`'json'`, `'text'`, `'url'`, `'form'`, `'blob'`, `'file'`, `'stream'`, `'buffer'`, `'none'` or `undefined`.

___

### cher.data

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

### cher.options

<span class="soon"></span>

#### Possible values

<span class="soon"></span>

___

## Instance methods

<span class="soon"></span>

___

### cher.getDefault()

<span class="soon"></span>

#### Syntax

```js
cher.getDefault(key);
```

##### Parameters

`key`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### cher.setDefault()

<span class="soon"></span>

#### Syntax

```js
cher.setDefault(key, value);
cher.setDefault(key, value, reset);
```

##### Parameters

`key`

:	<span class="soon"></span>

`value`

:	<span class="soon"></span>

`reset`

:	<span class="soon"></span>

##### Return value

`undefined`.

___

### cher.resetDefault()

<span class="soon"></span>

#### Syntax

```js
cher.resetDefault(key);
cher.resetDefault(key, reset);
```

##### Parameters

`key`

:	<span class="soon"></span>

`reset`

:	<span class="soon"></span>

##### Return value

`undefined`.

___

### cher.getDefaults()

<span class="soon"></span>

#### Syntax

```js
cher.getDefaults();
```

##### Parameters

No parameters.

##### Return value

<span class="soon"></span>

___

### cher.setDefaults()

<span class="soon"></span>

#### Syntax

```js
cher.setDefaults(); // do nothing
cher.setDefaults(config);
cher.setDefaults(config, reset);
cher.setDefaults(url);
cher.setDefaults(url, config);
cher.setDefaults(url, config, reset);
```

##### Parameters

`url`

:	<span class="soon"></span>

`config`

:	<span class="soon"></span>

`reset`

:	<span class="soon"></span>

##### Return value

`undefined`.

___

### cher.resetDefaults()

<span class="soon"></span>

#### Syntax

```js
cher.resetDefaults();
cher.resetDefaults(reset);
```

##### Parameters

`reset`

:	<span class="soon"></span>

##### Return value

`undefined`.

___

### cher.reset()

<span class="soon"></span>

#### Syntax

```js
cher.reset();
cher.reset(initial);
```

##### Parameters

`initial`

:	<span class="soon"></span>

##### Return value

`undefined`.

___

### cher.set()

<span class="soon"></span>

#### Syntax

```js
cher.set(); // do nothing
cher.set(config);
cher.set(url);
cher.set(url, config);
```

##### Parameters

`url`

:	<span class="soon"></span>

`config`

:	<span class="soon"></span>

	`evalTemplate`

	:	<span class="soon"></span>

	`delimiters`

	:	<span class="soon"></span>

	`baseURL`

	:	<span class="soon"></span>

	`url`

	:	<span class="soon"></span>

	`args`

	:	<span class="soon"></span>

	`params`

	:	<span class="soon"></span>

	`method`

	:	<span class="soon"></span>

	`decode`

	:	<span class="soon"></span>

	`encode`

	:	<span class="soon"></span>

	`data`

	:	<span class="soon"></span>

	`options`

	:	<span class="soon"></span>

##### Return value

`undefined`.

___

### cher.getConfig()

<span class="soon"></span>

#### Syntax

```js
cher.getConfig();
```

##### Parameters

No parameters.

##### Return value

<span class="soon"></span>

___

### cher.getURL()

<span class="soon"></span>

#### Syntax

```js
cher.getURL();
cher.getURL(config);
cher.getURL(url);
cher.getURL(url, config);
```

##### Parameters

`url`

:	<span class="soon"></span>

`config`

:	<span class="soon"></span>

	`evalTemplate`

	:	<span class="soon"></span>

	`delimiters`

	:	<span class="soon"></span>

	`baseURL`

	:	<span class="soon"></span>

	`url`

	:	<span class="soon"></span>

	`args`

	:	<span class="soon"></span>

	`params`

	:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### cher.getOptions()

<span class="soon"></span>

#### Syntax

```js
cher.getOptions();
cher.getOptions(config);
```

##### Parameters

`config`

:	<span class="soon"></span>

	`method`

	:	<span class="soon"></span>

	`decode`

	:	<span class="soon"></span>

	`encode`

	:	<span class="soon"></span>

	`data`

	:	<span class="soon"></span>

	`options`

	:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### cher.fetch()

<span class="soon"></span>

#### Syntax

```js
cher.fetch();
cher.fetch(config);
cher.fetch(url);
cher.fetch(url, config);
```

##### Parameters

`url`

:	<span class="soon"></span>

`config`

:	<span class="soon"></span>

	`evalTemplate`

	:	<span class="soon"></span>

	`delimiters`

	:	<span class="soon"></span>

	`baseURL`

	:	<span class="soon"></span>

	`url`

	:	<span class="soon"></span>

	`args`

	:	<span class="soon"></span>

	`params`

	:	<span class="soon"></span>

	`method`

	:	<span class="soon"></span>

	`decode`

	:	<span class="soon"></span>

	`encode`

	:	<span class="soon"></span>

	`data`

	:	<span class="soon"></span>

	`options`

	:	<span class="soon"></span>

	`listeners`

	:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### cher.create()

<span class="soon"></span>

#### Syntax

```js
cher.create();
cher.create(clone);
cher.create(config);
cher.create(url);
cher.create(url, config);
```

##### Parameters

`clone`

:	<span class="soon"></span>

`url`

:	<span class="soon"></span>

`config`

:	<span class="soon"></span>

	`evalTemplate`

	:	<span class="soon"></span>

	`delimiters`

	:	<span class="soon"></span>

	`baseURL`

	:	<span class="soon"></span>

	`url`

	:	<span class="soon"></span>

	`args`

	:	<span class="soon"></span>

	`params`

	:	<span class="soon"></span>

	`method`

	:	<span class="soon"></span>

	`decode`

	:	<span class="soon"></span>

	`encode`

	:	<span class="soon"></span>

	`data`

	:	<span class="soon"></span>

	`options`

	:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### cher.addEventListener()

Inherited from the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) type, [a detailed description of this method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) can be found on [MDN](https://developer.mozilla.org/).

___

### cher.removeEventListener()

Inherited from the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) type, [a detailed description of this method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) can be found on [MDN](https://developer.mozilla.org/).

___

### cher.dispatchEvent()

Inherited from the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) type, [a detailed description of this method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) can be found on [MDN](https://developer.mozilla.org/).

___

## Instance events

<span class="soon"></span>

___

## Utilities

<span class="soon"></span>

___

### undef

Variable with value [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). Useful for code compression.

___

### freezeObject()

Freezes an object, a wrapper for the [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) method. Useful for code compression.

#### Syntax

```js
freezeObject(object);
```

##### Parameters

`object`

:	The object to freeze.

##### Return value

The object that was passed to the function.

___

### createNullObject()

Returns a prototype-free object (["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects)) without properties, a wrapper for the [`Object.create(null)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) method call. Useful for code compression.

#### Syntax

```js
createNullObject();
```

##### Parameters

No parameters.

##### Return value

The created empty ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects).

___

### getNormalizedObject()

Returns a normalized copy of the passed object, which is a ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) that has exactly the properties corresponding to the passed property names, and the values of these properties are the same as the values of the corresponding properties of the passed object, if that property of the passed object exists, otherwise `undefined`.

#### Syntax

```js
getNormalizedObject(keys, object);
```

##### Parameters

`keys`

:	The array of property names.

`object`

:	The object.

##### Return value

The normalized copy of object.

___

### toNullObject()

Returns a ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) that has exactly the same properties as the passed object's [own enumerable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

#### Syntax

```js
toNullObject(object);
```

##### Parameters

`object`

:	The object.

##### Return value

The ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) created based on the object.

___

### httpRequestMethods

The collection of [HTTP request method names](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), a [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) whose keys (property names) are exactly the [HTTP request method names](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), and the value of these properties is `1` in each case. With this collection and the [`in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in), you can easily and quickly verify that a given value is a [valid HTTP request method name](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

#### Examples

```js
'GET' in httpRequestMethods; // true
'XYZ' in httpRequestMethods; // false
'get' in httpRequestMethods; // false (case sensitive)
('gEt').toUpperCase() in httpRequestMethods; // true
```

___

### bodylessHttpRequestMethods

The collection of [bodyless HTTP request method names](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), a [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) whose keys (property names) are exactly the bodyless [HTTP request method names](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), and the value of these properties is `1` in each case. With this collection and the [`in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in), you can easily and quickly verify that an HTTP [request](https://developer.mozilla.org/en-US/docs/Web/API/Request) is bodyless based on its method name.

#### Examples

```js
'GET' in bodylessHttpRequestMethods; // true
'POST' in bodylessHttpRequestMethods; // false
'get' in bodylessHttpRequestMethods; // false (case sensitive)
('gEt').toUpperCase() in bodylessHttpRequestMethods; // true
```

___

### bodylessHttpResponseStatusCodes

The collection of [bodyless HTTP response status codes](https://fetch.spec.whatwg.org/#statuses), a [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) ["null" object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects) whose keys (property names) are exactly the bodyless [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and the value of these properties is `1` in each case. With this collection and the [`in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in), you can easily and quickly verify that an HTTP [response](https://developer.mozilla.org/en-US/docs/Web/API/Response) is bodyless based on its status code.

#### Examples

```js
204 in bodylessHttpResponseStatusCodes; // true
'204' in bodylessHttpResponseStatusCodes; // true
200 in bodylessHttpResponseStatusCodes; // false
'200' in bodylessHttpResponseStatusCodes; // false
```

___

### toString()

Returns a [`string`](https://developer.mozilla.org/en-US/docs/Glossary/String) based on the passed value, an alias of the [`String()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String). Useful for code compression.

#### Syntax

```js
toString(value);
```

##### Parameters

`value`

:	The value.

##### Return value

The [`string`](https://developer.mozilla.org/en-US/docs/Glossary/String) created based on the value.

___

### isUndefined()

Determines whether the passed value is [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).

#### Syntax

```js
isUndefined(value);
```

##### Parameters

`value`

:	The value to be checked.

##### Return value

`true` if the value is [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), otherwise `false`.

___

### isObject()

Determines whether the passed value is an [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

#### Syntax

```js
isObject(value);
```

##### Parameters

`value`

:	The value to be checked.

##### Return value

`true` if the value is an [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), otherwise `false`.

___

### isArray()

Determines whether the passed value is an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

#### Syntax

```js
isArray(value);
```

##### Parameters

`value`

:	The value to be checked.

##### Return value

`true` if the value is an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), otherwise `false`.

___

### isType()

Determines whether the passed value is the specified type.

#### Syntax

```js
isType(value, TypeConstructor, typeName);
```

##### Parameters

`value`

:	The value to be checked.

`TypeConstructor`

:	Constructor of the type.

`typeName`

:	Name of the type.

##### Return value

`true` if the value is the specified type, otherwise `false`.

#### Examples

```js
isType([], Array, 'Array'); // true
isType({}, Object, 'Object'); // true
isType([], Object, 'Object'); // true
isType({}, Array, 'Array'); // false
```

___

### evalSimpleTemplate()

Returns the result of evaluating a simple template.
<span class="soon"></span>

#### Syntax

```js
evalSimpleTemplate(template, args, delimiters);
```

##### Parameters

`template`

:	The template `string`.

`args`

:	The object that contains the arguments, so the keyed collection of values to insert.

`delimiters`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### getURLObject()

<span class="soon"></span>

#### Syntax

```js
getURLObject(url, ...bases);
```

##### Parameters

`url`

:	<span class="soon"></span>

`...bases`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### appendParamsToParams()

<span class="soon"></span>

#### Syntax

```js
appendParamsToParams(params1, params2);
```

##### Parameters

`params1`

:	<span class="soon"></span>

`params2`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### appendParamsToURL()

<span class="soon"></span>

#### Syntax

```js
appendParamsToURL(params, url, ...bases);
```

##### Parameters

`params`

:	<span class="soon"></span>

`url`

:	<span class="soon"></span>

`...bases`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### getURL()

<span class="soon"></span>

#### Syntax

```js
getURL(evalTemplate, delimiters, args, params, url, ...bases);
```

##### Parameters

`evalTemplate`

:	<span class="soon"></span>

`delimiters`

:	<span class="soon"></span>

`args`

:	<span class="soon"></span>

`params`

:	<span class="soon"></span>

`url`

:	<span class="soon"></span>

`...bases`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

### toFormData()

<span class="soon"></span>

#### Syntax

```js
toFormData(data);
```

##### Parameters

`data`

:	<span class="soon"></span>

##### Return value

<span class="soon"></span>

___

