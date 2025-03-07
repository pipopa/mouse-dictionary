[![Build Status](https://travis-ci.org/wtetsu/mouse-dictionary.svg?branch=master)](https://travis-ci.org/wtetsu/mouse-dictionary)
[![Code Climate](https://codeclimate.com/github/wtetsu/mouse-dictionary/badges/gpa.svg)](https://codeclimate.com/github/wtetsu/mouse-dictionary)

# Mouse Dictionary: Super Fast Dictionary

<img src="https://github.com/wtetsu/mouse-dictionary/blob/images/logo.png" title="Mouse Dictionary" width="400" height="229">

[Mouse Dictionary](https://mouse-dictionary.netlify.com/en/) is a super fast dictionary for Chrome and Firefox.

Features:
- Blazing fast
- Detect phrases in text intelligently
- You can import your own text data
- Divide special expression into individual words and look them up at once(e.g. camelCase, snake_case)
- Customizable

Download it.

- [For Chrome](https://chrome.google.com/webstore/detail/mouse-dictionary/dnclbikcihnpjohihfcmmldgkjnebgnj)
- [For Firefox](https://addons.mozilla.org/ja/firefox/addon/mousedictionary/)

Use it:

- [Getting started](https://github.com/wtetsu/mouse-dictionary/wiki/Getting-started)

## Screenshots

### English-Japanese

![ss02.gif](https://github.com/wtetsu/mouse-dictionary/blob/images/ss02.gif)

### Japanese-English

![ss03.gif](https://github.com/wtetsu/mouse-dictionary/blob/images/ss03.png)

## How to develop

Use npm 6+.

Preparation:

```sh
npm install
```

For Chrome:

```sh
npm run build-chrome
```

For Firefox:

```sh
npm run build-firefox
```


## Cross-extension messaging

Mouse Dictionary supports receiving [cross-extension messages](https://developer.chrome.com/extensions/messaging). One example of an extension that implements sending message to this extension is [Mouse Dictionary iframe support](https://github.com/wtetsu/mouse-dictionary-iframe).

Here is a code example for sending a message to Mouse Dictionary. You can make Mouse Dictionary look up words/expressions from other extensions.

```js
const MD_EXTENSION_ID = "dnclbikcihnpjohihfcmmldgkjnebgnj";

chrome.runtime.sendMessage(MD_EXTENSION_ID, {
  type: "text",
  text: "rained cats and dogs"
});
```

Parameters:

| name | type   | value                    |
| ---- | ------ | ------------------------ |
| type | string | must be "text"           |
| text | string | text you want to look up |

## License

Mouse Dictionary is published under the MIT license.

## Third-party data

This project includes some third-party data:

### Dictionary data

ejdic-hand

- https://github.com/kujirahand/EJDict
- License: Public domain

### Images

bookmark icon, gear icon

- https://www.iconfinder.com/iconsets/wpzoom-developer-icon-set
- License: [Creative Commons (Attribution-Share Alike 3.0 Unported)](https://creativecommons.org/licenses/by-sa/3.0/)

## See also

[Chrome 拡張の高速な英語辞書ツールをつくりました](https://qiita.com/wtetsu/items/c43232c6c44918e977c9)(a Japanese tutorial)
