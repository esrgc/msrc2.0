/*import global js functions*/
import '../scripts/footer-functions';
import '../scripts/minutes-archive';
import '../scripts/ifBrowser';
import {mobileNav} from '../scripts/mobileNav';
// for small screens
$('i#mobileNav').on('click', function() {
  mobileNav();
});


/*js functions specific to committees page*/
/*hide executive and advisory tabs*/
import './hide-divs';
/*add functionality to open popup from click of exec tab*/
import './executive-tab';
/*add functionality to open popup from click of advis tab*/
import './advisory-tab';
/*add functionality to advisory subcommittees to expand and view members and meeting minutes*/
import './advis-committees-menu';

/*import css*/
import '../../css/style.less';

// import '../../scripts/fsReadDir';
import { Router } from '../router/main';
let appRouter = new Router;
Backbone.history.start();
