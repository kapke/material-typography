# Material typography

Set of styles (CSS and SASS) for materialistic typography (http://www.google.com/design/spec/style/typography.html#typography-standard-styles)

## Installation
Just

    npm install kapke/material-typography --save

or, if you want to use bower:

    bower install kapke/material-typography

Of course - you can also clone this repo - it's ready to go! Fonts you have to import manually. I've not bundled/imported any of Roboto/Noto due to ease of use Google fonts to achieve this and personalize font to your needs.

## Usage

`.css` files define classes for fast and easy usage in existsing project. If you are using SASS, then you can import `material-typography.scss`.

## Covered styles

* display-4
* display-3
* display-2
* display-1
* headline
* title
* subhead
* body-2
* body-1
* caption
* button

## API

### CSS 

There are available classes with each style name `.display-1`, `.display-2`, etc.

### SASS

There is available map of maps containing styles for each style. This map is named `$styles`.

There is also mixin `@material-text` with declaration as given:

    @mixin material-text($name: 'body-1', $color: black)

As you can see both arguments are optional and default style is for most common used black content text.