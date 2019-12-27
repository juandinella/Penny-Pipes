import lazypipe from 'lazypipe'
import prettify from 'gulp-jsbeautifier'
import replace from 'gulp-html-replace'

const html = ({
  htmlReplace,
  plugins = []
}) => {
  const postHtmlPlugins = [...plugins]
  return lazypipe()
    .pipe(replace, htmlReplace)
    .pipe(postHtmlPlugins)
    .pipe(prettify)
}

export default html
