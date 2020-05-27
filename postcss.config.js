module.exports = {
  plugins: [
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./*.html']
    }),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}
