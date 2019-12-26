# penny-pipes

Plugabble pipes for a composable gulp stream

```bash
npm install penny-pipes
```

## Example

```js
const gulp = require("gulp");
const styles = require("penny-pipes").styles;

gulp.task("styles", () =>
  gulp
    .src("src/styles/**/!(_)*.scss")
    .pipe(
      styles({
        modules: true,
        name: "main.css",
        production: process.env.NODE_ENV === "production"
      })()
    )
    .on("error", config.onError)
    .pipe(gulp.dest("dist/styles"))
);
```

## Contents

- critical: create critical CSS
- html: html with replace and posthtml
- minifyStyles: minimize, comb, groupCssMediaQueries and nano
- pug: pug and posthtml with modules
- purify: remove unused CSS
- styles: sourcemaps, postCss with modules and autoprefixer

## Penny boilerplate

We use this already on our own Frontend boilerplate, don't be shy and try it out 🎩
