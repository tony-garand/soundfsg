const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cheerio = require('cheerio');

// const mode = process.env.NODE_ENV || 'development';

module.exports = (env, options) => ({
    entry: {
        main: './src/main.js',
        interactivity: './src/interactivity.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/business-valuation-podcast/dist/'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.postcss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            config: {
                                ctx: {
                                    env: options.mode
                                }
                            }
                        },

                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico|webmanifest)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    'vue-loader',
                    'vue-svg-inline-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "name.[chunkhash].css"
        }),
        new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: __dirname,
            // Required - Routes to render.
            routes: ['/'],
            renderer:  new Renderer({
                // renderAfterDocumentEvent: 'render-event'
            }),
            indexPath: path.join(__dirname, 'index-template.html'),
            minify: false,
            postProcess (renderedRoute) {
                let contents = `<!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-31739137-1"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-31739137-1');
                </script>
                <script>
                    var recaptchas = {};
                    var recaptchaOnLoadCallback = function() {
                        recaptchas.cta = grecaptcha.render(
                            'g-recaptcha-cta',
                            {sitekey: '6LfDR60UAAAAAEMw6m1zIKvEqGGDNOsXjbkVsavu'}
                            );
                        recaptchas.optOut = grecaptcha.render(
                            'g-recaptcha-opt-out',
                            {sitekey: '6LfDR60UAAAAAEMw6m1zIKvEqGGDNOsXjbkVsavu'}
                            );
                    };
                </script>
                <script src="https://www.google.com/recaptcha/api.js?onload=recaptchaOnLoadCallback&render=explicit"></script>
                <script async src='https://tag.simpli.fi/sifitag/79655840-c1fb-0137-659f-067f653fa718'></script>`;
                if (!renderedRoute.html.includes(contents)) {
                    let $ = cheerio.load(renderedRoute.html);
                    $('head').append(contents);
                    renderedRoute.html = $.html();
                }
                let footerContent = `<script src="/business-valuation-podcast/dist/interactivity.js"></script>`;
                if (!renderedRoute.html.includes(footerContent)) {
                    let $ = cheerio.load(renderedRoute.html);
                    $('body').append(footerContent);
                    renderedRoute.html = $.html();
                }
                return renderedRoute;
            },

        }),
        new VueLoaderPlugin()
    ]
});
