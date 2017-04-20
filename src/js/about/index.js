/*import global js functions*/
import '../scripts/footer-functions';
import '../scripts/minutes-archive';
import '../scripts/downloadLink';
import '../scripts/ifBrowser';
import {mobileNav} from '../scripts/mobileNav';
// for small screens
$('i#mobileNav').on('click', function() {
  mobileNav();
});


/*js functions specific to about page*/
/*hide the sliding tabs on about page*/
import './hide-divs';
/*add the functionality to open the tabs by clicking the toggle*/
import './about-tabs';
/*add functionality to spotlight tab based on the clicked image open the corresponding popup*/
import './spotlight';
/*add functionality to records tab based on clicked div*/
import './records';
/*add functionality to members tab based on clicked div*/
import './members';
/*based on the clicked div/image from members/spotlight/records reveal all children of the popup*/
import './popup-tabs';


/*import css*/
import '../../css/style.less';

import { Router } from '../router/main';
let appRouter = new Router;
Backbone.history.start();
