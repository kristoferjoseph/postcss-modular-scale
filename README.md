PostCSS Modular Scale
=====================

A plugin to provide a modular scale function in your styles.

Install
-------

`npm install postcss-modular-scale`

Usage
-----

```css
:root {
  --ms-bases: 16px, 12px;
  --ms-ratio: 2;
}

.my-class {
  padding: ms(1)rem ms(2)rem;
  font-size: ms(3)rem;
}
```

Mad props
--------

Tons of thanks to Scott Kellum @scottkellum & Tim Brown @nicewebtype for making [Modular Scale](http://www.modularscale.com) and the libraries that make this plugin possible.
