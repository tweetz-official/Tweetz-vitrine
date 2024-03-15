import * as navigation from "./modules/navigation.js";
import * as hero from "./modules/hero.js";
import  * as gallery from "./modules/gallery-init.js";
import * as scroll from "./modules/scrollEffect.js"; 
import * as loader from "./modules/loader.js"; 

document.body.classList.add("js-enabled");


gallery.init();
scroll.init();
navigation.init();
hero.init();
loader.init();
