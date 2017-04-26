import { downloadLink } from '../../scripts/downloadLink';

let $quarterly = $('a#btn-Quarterly');
// make button open hidden minutes div
$quarterly.on('click', function(e) {
  e.preventDefault();
  $('#QuarterlyMin').toggle('slide');
});

let $executive = $('a#btn-Executive');
// make button open hidden minutes div
$executive.on('click', function(e) {
  e.preventDefault();
  $('#ExecutiveMin').toggle('slide');
});
