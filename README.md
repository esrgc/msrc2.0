# [MSRC2.0](http://apps.esrgc.org/dashboards/msrc2.0/index)
###### Entry point
###### [http://apps.esrgc.org/dashboards/msrc2.0/index](http://apps.esrgc.org/dashboards/msrc2.0/index)
---
###### [Mockup](https://app.moqups.com/ESRGC/5Trmy1qbvA/view/page/ac64d30cc?ui=0)
---
### File structure tree
*excluding prebuilt libs, node_modules, .git, old-code, etc.

```
chcp 65001 & python osWalk.py -r D:/flint/msrc/msrc2.0 -xf [EXCLUDE_FOLDER [ .git ][ lib ][ node_modules ][ font-awesome ][ bin ][ old-code ]] -xn [EXCLUDE_NAME [ .jpg ][ .png ][ .gif ][ .pdf ][ .css ][ .map ][ .doc ][ .jpeg ]] -o msrc2.0-route.md
```
---
```
[root]
┣━ [public]
┃  ┣━ [build]
┃  ┃  ┣━ msrc2.0-dashboard.js
┃  ┃  ┣━ msrc2.0-dashboard.min.js
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
┃  ┃  ┗━ [reports_pubs]
┃  ┣━ [img]
┃  ┃  ┣━ [logos]
┃  ┣━ [js]
┃  ┃  ┣━ 1-onLoad_Hide.js
┃  ┃  ┣━ 2-mobileNav.js
┃  ┃  ┣━ 3-toTop.js
┃  ┃  ┣━ 5-msrc-functions.js
┃  ┃  ┣━ 6-footer-hash_Router.js
┃  ┃  ┣━ 7-voting_nonVoting.js
┃  ┃  ┣━ 8-committeesPage.js
┃  ┃  ┗━ 9-flowType_baseline.js
┃  ┗━ [stylesheet]
┃      ┣━ about.less
┃      ┣━ home.less
┃      ┣━ media.less
┃      ┣━ style.less
┃      ┗━ typography.less
┣━ [routes]
┃  ┣━ index.js
┃  ┗━ users.js
┣━ [views]
┃  ┣━ [partials]
┃  ┃  ┣━ advisDiv.html
┃  ┃  ┣━ advis_min-CEDS.html
┃  ┃  ┣━ advis_min-EM.html
┃  ┃  ┣━ advis_min-GIS.html
┃  ┃  ┣━ advis_min-IT.html
┃  ┃  ┣━ advis_min-MUST.html
┃  ┃  ┣━ carousel.html
┃  ┃  ┣━ execDiv.html
┃  ┃  ┣━ exec_min.html
┃  ┃  ┣━ footer.html
┃  ┃  ┣━ logo.html
┃  ┃  ┣━ members.html
┃  ┃  ┣━ nav.html
┃  ┃  ┣━ quarterly-mins.html
┃  ┃  ┣━ records.html
┃  ┃  ┗━ spotlight.html
┃  ┣━ about.html
┃  ┣━ committees.html
┃  ┣━ error.html
┃  ┣━ index.html
┃  ┣━ layout.html
┃  ┣━ partners.html
┃  ┗━ testing.html
┣━ .gitattributes
┣━ .gitignore
┣━ app.js
┣━ Gruntfile.js
┣━ package.json
┣━ README.md
┗━ server.js
```