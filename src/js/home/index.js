/*import global js functions*/
import '../scripts/ifBrowser';
import '../scripts/footer-functions';

import {mobileNav} from '../scripts/mobileNav';
// for small screens
$('i#mobileNav').on('click', function() {
  mobileNav();
});

/* home page specific functions */
import './scripts/toTop';
import './scripts/carousel';

/*import css*/
import '../../css/style.less';
