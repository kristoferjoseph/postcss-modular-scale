PostCSS Modular Scale
=====================

A plugin to provide a modular scale function in your styles.

Install
-------

`npm install postcss-modular-scale`

Usage
-----

> To generate relative values use target / base font size

   Example:

    1 = 16px ( target ) / 16px ( base font size )
    0.75 = 12px ( target ) / 16px ( base font size )
    Generates `em` or `rem` relative values

### Input

```css
:root {
  --ms-bases: 1, 0.75;
  --ms-ratios: 2;
}

.header {
  font-size: ms(4)rem;
}

```

### Output

```css
:root {
  --ms-bases: 1, 0.75;
  --ms-ratios: 2;
}

.header {
  font-size: 3rem;
}
```
Mad props
--------

Tons of thanks to Scott Kellum @scottkellum & Tim Brown @nicewebtype for making [Modular Scale](http://www.modularscale.com) and the libraries that make this plugin possible.
