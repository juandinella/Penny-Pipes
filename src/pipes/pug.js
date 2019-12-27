import lazypipe from 'lazypipe'
import compiler from 'gulp-pug'
import prettify from 'gulp-jsbeautifier'

const pug = ({
  pug,
  plugins = []
}) => {

  const postHtmlPlugins = [...plugins]
  return lazypipe()
    .pipe(compiler, pug)
    .pipe(postHtmlPlugins)
    .pipe(prettify)
}

export default pug
