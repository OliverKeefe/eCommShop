function Header() {
    let navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <nav class="navbar">
        <a href="index.html" class="logo">John Smith Art</a>
    
        <!-- Nav Links -->
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="mailto:johnsmith@jsart.com">Contact</a></li>
            <li><a href="/shop">Shop </a></li>
            <li><a href="/login" class="svg-icon-link" ><img src="media/log-in.svg" alt="Login" style="transform: translateY(-5px);">Login</a></li>
            <li><a href="cart.html" class="svg-icon-link"><img src="media/cart.svg" alt="Cart" style="transform: translateY(-5px);">Cart</a></li> </ul>
            <!-- Hamburger Nav Menu -->
        <button class="hamburger-menu hamburger-button" style="">
            &#9776; <!-- HTML5 Hamburger icon -->
        </button>
    
        <!-- Side Nav -->
        <ul class="side-nav-menu">
                <span class="close-btn">&times;</span> <!-- Close button -->
                <li><a href="/login" class="svg-icon-link" ><img src="media/log-in.svg" alt="Login" style="transform: translateY(5px);">Login</a></li>
                <li><a href="cart.html" class="svg-icon-link"><img src="media/cart.svg" alt="Cart" style="transform: translateY(5px);">Cart</a></li>
                <hr class="dotted">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="mailto:johnsmith@jsart.com">Contact</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
    </nav>
    `

    const shopLink = navbar.querySelector('a[href="/shop"]');
    if (shopLink) {
        shopLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            // Your routing logic here, or call initRouter()
            console.log('Shop link clicked');
            // Optionally, manually change the window location or handle the route
            // window.location.href = '/shop';
            // Or for SPA behavior:
            // history.pushState({}, '', '/shop');
            // contentHandler(); // Assuming this function handles the route change
        });
    }

    const loginLink = navbar.querySelector('a[href="/login"]');
    if (loginLink) {
        loginLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            // Your routing logic here, or call initRouter()
            console.log('Login link clicked');
            // Optionally, manually change the window location or handle the route
            // window.location.href = '/shop';
            // Or for SPA behavior:
            // history.pushState({}, '', '/shop');
            // contentHandler(); // Assuming this function handles the route change
        });
    }
}

export default Header;