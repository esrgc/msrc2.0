/* import global js functions*/
import '../scripts/ifBrowser';
import '../scripts/footer-functions';

import {mobileNav} from '../scripts/mobileNav';
// for small screens
$('i#mobileNav').on('click', function() {
  mobileNav();
});

/* import logo router */
import './scripts/logo-router';

/* import css*/
import '../../css/style.less';
