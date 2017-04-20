/* import global js functions*/
import '../../scripts/footer-functions';
import '../../scripts/ifBrowser';
import {mobileNav} from '../../scripts/mobileNav';
// for small screens
$('i#mobileNav').on('click', function() {
  mobileNav();
});

/* import logo router */
import './logo-router';


/* import css*/
import '../../../css/style.less';
