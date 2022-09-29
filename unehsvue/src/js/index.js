const sitosInteres =  {
    template:
    `
    <div class="sitios-interes">
        <ul class="sitios">
            <li><img src="./src/assets/Sitiosdeinteres.svg"/></li>
            <li><img src=""/></li>
            <li><img src=""/></li>
            <li><img src=""/></li>
            <li><img src=""/></li>
            <li><img src=""/></li>
            <li><img src=""/></li>
            <li><img src=""/></li>
        </ul>
    </div>
    `
}
//alert("cargo......")
//se define el componente de la ruta
const blog = {
    template:`<h2>Aqui es el blog </h2>`
}
const contacto = {
    template:`<h2>Aqui contactanos </h2>`
}
//Se definen las rutas
const routes = [
    {path: "/blog", component: blog, },
    {path: "/contacto", component: contacto},
    {path: "/", redirect: "/blog"}
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
const app = Vue.createApp({})
app.use(router)
app.mount('#app')


/*var app = new Vue({
    el: "#app",
    //vuetify: new Vuetify(),
    router,
})*/