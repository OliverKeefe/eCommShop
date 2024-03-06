function initRouter() {
    const routes = {
        404: "/pages/404.html",
        "/": "/index.html",
        "/about": "/pages/about.html",
        "/cart": "/pages/cart.html",
        "/login": "/pages/login.html",
        "/shop": "/pages/shop.html"
    };

    async function contentHandler() {
        const path = window.location.pathname;
        const route = routes[path] || routes[404];

        try {
            const html = await fetch(route).then(data => data.text());
            document.getElementById("index").innerHTML = html;

        } catch (error) {
            console.error('Failed to load page.', error);
        }
    }

    function route(event) {
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        contentHandler();
    }

    window.onpopstate = contentHandler;

    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', route);
    });
}

export default initRouter;