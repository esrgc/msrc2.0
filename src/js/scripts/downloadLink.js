/*download document function based on jquery selector*/
/*downloadable pdf will open in new windows*/
/*word.doc and .docx will download without window change*/
export function downloadLink(url) {
 window.open(url, '_blank');
}

/* setup downloadable links for pdf documents for use on multiple pages */
// link downloadable document to anchor with id workPlanLink
$('a#workPlanLink').on('click', function() {
 downloadLink('./documents/msrc/MSRC_FY17_Work_Plan.pdf');
});
// link downloadable document to anchor with id byLawsLink
$('a#byLawsLink').on('click', function() {
 downloadLink('./documents/msrc/MSRC_Bylaws.pdf');
});
// link downloadable document to anchor with id CEDSLink
$('a#CEDSLink').on('click', function() {
 downloadLink('./documents/reports/CEDS Full Document revised 3-4-21.pdf');
});
// link downloadable document to anchor with id broadbandLink
$('a#broadbandLink').on('click', function() {
 downloadLink('./documents/reports/Upper_Eastern_Shore_Region_2012.pdf');
});
// link downloadable document to anchor with id brochureLink
$('a#brochureLink').on('click', function() {
  downloadLink('./documents/MSRC brochure 3-2018.pdf');
});
//
//
/* setup external links for advisory committee page*/
$('a#MUSTBUS').on('click', function() {
 downloadLink('http://www.mustbus.org/');
});
$('a#ESRGC').on('click', function() {
 downloadLink('http://www.esrgc.org/');
});
