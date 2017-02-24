# [MSRC2.0](http://apps.esrgc.org/dashboards/msrc2.0/index)
###### Entry point
###### [http://apps.esrgc.org/dashboards/msrc2.0/index](http://apps.esrgc.org/dashboards/msrc2.0/index)
---
###### [Mockup](https://app.moqups.com/ESRGC/5Trmy1qbvA/view/page/ac64d30cc?ui=0)
---
### File structure tree
*excluding prebuilt libs, node_modules, .git, old-code, etc.

```
python osWalk.py -r D:/flint/msrc/msrc2.0 -xf [EXCLUDE_FOLDER [ .git ][ lib ][ node_modules ][ font-awesome ][ bin ][ old-code ]] -o msrc2.0-route.md
```
---
```
[root]
[D:/flint/msrc/msrc2.0]
┣━ [public]
┃  ┣━ [build]
┃  ┃  ┣━ msrc2.0-dashboard.js
┃  ┃  ┣━ msrc2.0-dashboard.min.js
┃  ┃  ┣━ style-msrc2.0.css
┃  ┃  ┗━ style-msrc2.0.min.css
┃  ┣━ [documents]
┃  ┃  ┣━ [advis_min]
┃  ┃  ┃  ┣━ [CEDS]
┃  ┃  ┃  ┣━ [EM]
┃  ┃  ┃  ┣━ [GIS]
┃  ┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┃  ┃  ┣━ MSRCwriteup_2014-05-21.pdf
┃  ┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2014-11-19.pdf
┃  ┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┃  ┃  ┣━ MSRCwriteup_2015-04-01.pdf
┃  ┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2015-09-30.pdf
┃  ┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┃  ┃  ┣━ MSRCwriteup_2016-03-23.pdf
┃  ┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2016-09-22.pdf
┃  ┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┃  ┃  ┗━ MSRCwriteup_2017 Not Happened Yet.pdf
┃  ┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2004-08-05.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2005-03-16.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2005-07-06.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2006-07-06.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2007-10-03.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2009-12-31.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2011-04-20.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2011-10-26.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2012-02-14.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2012-05-23.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2012-08-22.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2012-11-28.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2013-02-20.pdf
┃  ┃  ┃  ┃      ┣━ MSRCwriteup_2013-04-24.pdf
┃  ┃  ┃  ┃      ┗━ MSRCwriteup_2013-12-17.pdf
┃  ┃  ┃  ┣━ [IT]
┃  ┃  ┃  ┗━ [MUST]
┃  ┃  ┣━ [exec_min]
┃  ┃  ┃  ┣━ [2014]
┃  ┃  ┃  ┃  ┣━ Minutes MSRC Executive Board mtg 2014-05-28.pdf
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg 2014-12-05.pdf
┃  ┃  ┃  ┣━ [2015]
┃  ┃  ┃  ┃  ┣━ Minutes MSRC Executive Board mtg 2015-05-19.pdf
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg 2015-11-18.pdf
┃  ┃  ┃  ┣━ [2016]
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg 2016-05-27.pdf
┃  ┃  ┃  ┣━ [2017]
┃  ┃  ┃  ┃  ┗━ Minutes MSRC Executive Board mtg Didn't happen Yet.docx.docx
┃  ┃  ┃  ┗━ [Archive]
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2009-05.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2009-11.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2009-12.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2010-03-08.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2010-05-27.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2010-09-10.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2010-11-30.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2011-05-19.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2011-09-02.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2011-11-21.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2012-02-24.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2012-06-07.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2012-09-07.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2012-12-03.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2013-03-07.pdf
┃  ┃  ┃      ┣━ Minutes MSRC Executive Board mtg 2013-05-30.pdf
┃  ┃  ┃      ┗━ Minutes MSRC Executive Board mtg 2013-11-22.pdf
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
┃  ┃  ┃  ┣━ msrcLargeFormatTEST.png
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
┃  ┃  ┣━ 6-footer-hash_Router.js
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
┃  ┣━ layout.pretty.html
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