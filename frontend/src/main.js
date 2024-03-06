import Header from "./components/Header.js";
import { toggleSideNav, untoggleSideNav } from "./components/SideNav.js";
import initRouter from "./js/router.js";


document.addEventListener('DOMContentLoaded', function() {
    Header();
    toggleSideNav();
    untoggleSideNav();
    initRouter()
;
});

