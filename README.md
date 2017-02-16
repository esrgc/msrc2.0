# [MSRC2.0](http://apps.esrgc.org/dashboards/msrc2.0/index)
###### Entry point
###### [http://apps.esrgc.org/dashboards/msrc2.0/index](http://apps.esrgc.org/dashboards/msrc2.0/index)

### File structure tree
*excluding prebuilt libs, node_modules, .git, old-code
```
[root]
┣━ [bin]
┃  ┣━ [config]
┃  ┃  ┗━ index.js
┃  ┗━ www
┣━ [public]
┃  ┣━ [build]
┃  ┃  ┣━ msrc2.0-dashboard.js
┃  ┃  ┣━ msrc2.0-dashboard.min.js
┃  ┃  ┣━ style-msrc2.0.css
┃  ┃  ┗━ style-msrc2.0.min.css
┃  ┣━ [documents]
┃  ┃  ┣━ [advis_min]
┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2014Nov19.pdf
┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2015Sept30.pdf
┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┃  ┣━ MSRCwriteup_2016March23.pdf
┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2016Sept22.pdf
┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┃  ┗━ filler.pdf
┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┃      ┗━ GISmins_200408.pdf
┃  ┃  ┣━ [exec_min]
┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg 12-5-14.pdf
┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┃  ┣━ Minutes MSRC Executive Board mtg 11-18-15.pdf
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg 5-19-15.pdf
┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg 5-27-16.pdf
┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┃  ┗━ filler.docx
┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┃      ┗━ Minutes MSRC Executive Board Mtg_200905.pdf
┃  ┃  ┣━ [msrc]
┃  ┃  ┃  ┣━ MSRC_Bylaws.doc
┃  ┃  ┃  ┗━ MSRC_FY17_Work_Plan.pdf
┃  ┃  ┗━ [reports_pubs]
┃  ┃      ┣━ CEDS_Full_Document_revised_3-9-16.pdf
┃  ┃      ┗━ Upper_Eastern_Shore_Region_2012.pdf
┃  ┣━ [img]
┃  ┃  ┣━ [logos]
┃  ┃  ┃  ┣━ beaconlogo2.png
┃  ┃  ┃  ┣━ carolseal2.png
┃  ┃  ┃  ┣━ dbed2.png
┃  ┃  ┃  ┣━ dorcheseal2.png
┃  ┃  ┃  ┣━ edaseal2.png
┃  ┃  ┃  ┣━ ESEC2.jpg
┃  ┃  ┃  ┣━ esrgc_logo.jpg
┃  ┃  ┃  ┣━ marylandfarming.png
┃  ┃  ┃  ┣━ MD Manual on Line2.gif
┃  ┃  ┃  ┣━ mdbc.gif
┃  ┃  ┃  ┣━ MDdllr2.gif
┃  ┃  ┃  ┣━ midshr2ndhd.jpg
┃  ┃  ┃  ┣━ must.jpg
┃  ┃  ┃  ┗━ talbotseal2.png
┃  ┃  ┣━ about.jpg
┃  ┃  ┣━ bg.jpg
┃  ┃  ┣━ broadband.jpg
┃  ┃  ┣━ ceds.jpg
┃  ┃  ┣━ committees.jpg
┃  ┃  ┣━ data-tools.jpg
┃  ┃  ┣━ filler1.jpg
┃  ┃  ┣━ filler2.jpg
┃  ┃  ┣━ filler3.jpg
┃  ┃  ┣━ gis.jpg
┃  ┃  ┣━ health.jpg
┃  ┃  ┣━ newyork.jpg
┃  ┃  ┣━ paris.jpg
┃  ┃  ┣━ partners.jpg
┃  ┃  ┣━ sanfran.jpg
┃  ┃  ┗━ tech.jpg
┃  ┣━ [js]
┃  ┃  ┣━ 1-onLoad_Hide.js
┃  ┃  ┣━ 2-mobileNav.js
┃  ┃  ┣━ 3-toTop.js
┃  ┃  ┣━ 5-msrc-functions.js
┃  ┃  ┣━ 7-voting_nonVoting.js
┃  ┃  ┣━ 8-committeesPage.js
┃  ┃  ┗━ 9-flowType_baseline.js
┃  ┗━ [stylesheet]
┃      ┣━ about.less
┃      ┣━ bootstrap-theme.css
┃      ┣━ bootstrap-theme.css.map
┃      ┣━ bootstrap-theme.min.css
┃      ┣━ bootstrap-theme.min.css.map
┃      ┣━ bootstrap.css
┃      ┣━ bootstrap.css.map
┃      ┣━ bootstrap.min.css
┃      ┣━ bootstrap.min.css.map
┃      ┣━ home.less
┃      ┣━ media.less
┃      ┣━ style.css
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