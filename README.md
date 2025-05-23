# `@FDISK-next/icon-library`

> FDISK Design System - Foundation icons library

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@FDISK-next/icon-library` with this command:

```sh
# with npm
npm i -S @FDISK-next/icon-library


```

## Usage

Once you have installed this package, depending on your setup, you can include `@FDISK-next/icon-library` in a handful of ways.

- Reference via `<img>` element
- Use the SVG sprite
- Use the icon font
- Include via CSS
- Copy-paste SVGs as embedded HTML

Foundation icons gives you SVGs, so you can include them into your HTML in a few ways depending on how your project is setup.
Our icons include a `width` and `height` of `16px` by default to allow for easy resizing via `font-size`.

### External image

Reference Icons SVGs like normal images with the `<img>` element.

```html
<img
  src="/node_modules/@FDISK-next/icon-library/dist/FDISK-icon-library/svg/home-fill.svg"
  alt="Home icon filled"
  width="32"
  height="32"
/>
```

### Sprite

Use the SVG sprite to insert any icon through the `<use>` element. Use the icon’s filename as the fragment identifier (e.g., `home-fill` is `#home-fill`). SVG sprites allow you to reference an external file similar to an `<img>` element.

```html
<svg width="32" height="32" fill="#001018">
  <use
    xlink:href="/node_modules/@FDISK-next/icon-library/dist/FDISK-icon-library/sprite/FDISK-icon-library.svg#home-fill"
  />
</svg>
```

### Icon font

Icon fonts with classes for every icon are also included. Include the icon web fonts in your page via CSS (`./node_modules/@FDISK-next/icon-library/dist/FDISK-icon-library/font/FDISK-icon-library.css`), then reference the class names as needed (e.g. `FDISK-icon-library-home-fill` for the `home-fill` icon) in your HTML.

Use `font-size` and `color` to change the icon appearance.

If your icon is followed by a text:

```html
<span aria-hidden="true" class="FDISK-icon-library-home-fill"> </span> Homepage
```

If your icon is alone:

```html
<span aria-label="Homepage" class="FDISK-icon-library-home-fill"> </span>
```

### CSS

You can also use the SVG within your CSS (**be sure to escape any characters**, such as `#` to `%23` when specifying hex color values). When no dimensions are specified via `width` and `height` on the `<svg>`, the icon will fill the available space.

The `viewBox` attribute is required if you wish to resize icons with `background-size`. Note that the `xmlns` attribute is required.

```css
.your-class {
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.333 7.333v-4h1.334v4h4v1.334h-4v4H7.333v-4h-4V7.333h4Z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
}
```

### Embedded

Embed your icons within the HTML of your page (as opposed to an external image file, not really recommended). Here we’ve used a custom `width` and `height` alongside `viewbox`.

```html
<svg
  width="16"
  height="16"
  fill="#001018"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.333 7.333v-4h1.334v4h4v1.334h-4v4H7.333v-4h-4V7.333h4z"
    fill="#001018"
  />
</svg>
```
# fw-icons
# fw-icons
# fw-icons
# fw-icons
