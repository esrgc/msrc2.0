import glob from 'glob';

glob('**/documents/advis_min/GIS/**/*.pdf', function( err, files) {
  console.log(files);
});
