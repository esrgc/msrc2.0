# [MSRC2.0](http://www.midshore.org/index)
#### [http://www.midshore.org/index](http://www.midshore.org/index)


## Documentation
This website uses a Node.js back-end with Backbone and Handlebars working to display the front-end views.

In order to run locally, create an `index.js` file in the project's `config/` directory. It should have the following structure:

```javascript
module.exports = {
  port: ...
};
```

### Versions
Requires Node.js 6 or later.

### Run Locally
To run locally, first install dependencies:

```
npm install
```

Then run `npm run start` to start the development server.

---
### File structure tree
*excluding prebuilt libs, node_modules, .git, old-code, etc.

```
chcp 65001 & python osWalk.py -r D:/flint/msrc/msrc2.0 -xf [EXCLUDE_FOLDER [ .git ][ lib ][ node_modules ][ font-awesome ][ bin ][ old-code ]] -xn [EXCLUDE_NAME [ .jpg ][ .png ][ .gif ][ .pdf ][ .css ][ .map ][ .doc ][ .jpeg ]] -o msrc2.0-route.md
```
---
```
[root]

┣━ [config]
┃  ┣━ dev.js
┃  ┣━ index.js
┃  ┗━ prod.js
┣━ [public]
┃  ┣━ [build]
┃  ┃  ┣━ dashboard-bundle.js
┃  ┃  ┣━ dashboard-style.css
┃  ┃  ┣━ vendor-bundle.js
┃  ┣━ [documents]
┃  ┃  ┣━ [advis_min]
┃  ┃  ┃  ┣━ [CEDS]
┃  ┃  ┃  ┣━ [EM]
┃  ┃  ┃  ┣━ [GIS]
┃  ┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┃  ┣━ [IT]
┃  ┃  ┃  ┗━ [MUST]
┃  ┃  ┣━ [exec_min]
┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┣━ [msrc]
┃  ┃  ┃  ┣━ [quarterly_mins]
┃  ┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┗━ [reports]
┃  ┣━ [img]
┣━ [routes]
┃  ┣━ index.js
┃  ┗━ users.js
┣━ [src]
┃  ┣━ [css]
┃  ┃  ┣━ style.less
┃  ┗━ [js]
┃      ┣━ [scritps]
┃      ┗━ index.js
┣━ [views]
┃  ┣━ [partials]
┃  ┣━ about.html
┃  ┣━ committees.html
┃  ┣━ error.html
┃  ┣━ index.html
┃  ┣━ layout.html
┃  ┗━ partners.html
┣━ .gitattributes
┣━ .gitignore
┣━ app.js
┣━ package.json
┣━ README.md
┣━ server.js
┗━ webpack.config.js
```