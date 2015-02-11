module.exports =
{ entry :
    { app : __dirname + "/dynamic/app.js"
    }

, output :
    { path     : __dirname + "/static"
    , filename : "[name].js"
    }

, resolve :
    { moduleDirectories : ["node_modules"]
    }

, module :
    { loaders :
        [ { test   : /\.js$/
          , loader : "6to5-loader?experimental"
          }

        , { test   : /\.css$/
          , loader : "style-loader!css-loader!autoprefixer-loader!stylus-loader"
          }
        ]
    }
}
