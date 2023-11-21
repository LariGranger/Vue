import productDisplayComponent from "./components/ProductDisplay.js";

const app = Vue.createApp({
    data(){
        return{
          carrinho: 0,
        premium: true  
        }
        
    },
    components: {
        'product-display': productDisplayComponent
    }
});

//Montagem do app
const montedApp = app.mount('#app');