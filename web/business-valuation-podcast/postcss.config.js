const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = ({ file, options }) => {
  plugins = [
    require('tailwindcss'),
    require('autoprefixer'),
  ];
  if (options.env === 'production') {
    plugins.push(purgecss({
        content: ['./src/components/*.vue', './src/components/site-only/*.vue'],
        extractors: [
            {
                extractor: class PurgeTailwindFromVue {
                    static extract(content) {
                        return content.match(/[A-z0-9-:\/]+/g) || [];
                    }
                },
                extensions: ['vue']
            }
        ],
        whitelist: ['flickity-*', 'text-red-500']
    }));
  }
  return {
    plugins
  };
}