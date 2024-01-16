import * as navigation from "./modules/navigation.js";
import * as hero from "./modules/hero.js";
import  * as gallery from "./modules/gallery-init.js";
import * as scroll from "./modules/scrollEffect.js"; 
import * as creatorHero from "./modules/creator-hero.js"; 

document.body.classList.add("js-enabled");


creatorHero.init();
gallery.init();
scroll.init();
navigation.init();
hero.init();
