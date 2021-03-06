/*import global js functions*/
import '../scripts/ifBrowser';
import '../scripts/footer-functions';
import '../scripts/minutes-archive';
import '../scripts/downloadLink';

import {mobileNav} from '../scripts/mobileNav';
// for small screens
$('i#mobileNav').on('click', function() {
  mobileNav();
});


/*js functions specific to about page*/
/*hide the sliding tabs on about page*/
import './scripts/hide-divs';
/*add the functionality to open the tabs by clicking the toggle*/
import './scripts/about-tabs';
/*add functionality to spotlight tab based on the clicked image open the corresponding popup*/
import './scripts/spotlight';
/*add functionality to records tab based on clicked div*/
import './scripts/records';
/*add functionality to members tab based on clicked div*/
import './scripts/members';
/*based on the clicked div/image from members/spotlight/records reveal all children of the popup*/
import './scripts/popup-tabs';


/*import css*/
import '../../css/style.less';

import { Router } from '../router/main';
let appRouter = new Router;
Backbone.history.start();
