# Links
- https://levelup.gitconnected.com/access-control-in-a-react-ui-71f1df60f354
- https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
- https://www.simform.com/build-ecommerce-app-reactjs/

- https://github.com/LambdaSchool

# Jest Solutions
- babel.config.json
    - `{
         "presets": ["@babel/preset-react", "@babel/preset-env"],
         "plugins": ["@babel/plugin-transform-react-jsx"]
       }`
- scss importing
    - `
    "jest": {
           "moduleNameMapper": {
             "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
             "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
           }
         }
         `