/**
 * DOM manipulation for the side navigation menu (AKA curtain menu).
 * @function toggleSideNav - Event listener that toggles the side navigation menu
 * @function untoggleSideNav - Even listener that un-toggles the side navigation menu
 */
function toggleSideNav() {
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        const menu = document.querySelector('.side-nav-menu');
        if (menu.style.width === '250px') {
            menu.style.width = '0';
        } else {
            menu.style.width = '250px';
        }
    });
}

function untoggleSideNav() {
    document.querySelector('.close-btn').addEventListener('click', function() {
        const menu = document.querySelector('.side-nav-menu');
        menu.style.width = '0';
    });
}

export { toggleSideNav };
export { untoggleSideNav };