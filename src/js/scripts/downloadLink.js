/*download document function for linking to a div*/
/*downloadable pdf will open in new windows*/
/*word.doc and .docx will download without window change*/
export function downloadLink(url) {
 window.open(url, '_blank');
}
