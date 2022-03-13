Vue.component('productos',{
    template:
    ` 
    <div class="pl-4 pt-4 d-inline-block" >
        <v-card class="p-2 mb-2" elevation="5" max-width="280" v-for="producto of productos">
            <v-img contain class="text-white align-end" height="120px" src="./assets/knorrCaldoPollo.jpeg" cover></v-img>
            <hr >
                <v-list-item-title>{{producto.descripcion}}</v-list-item-title><!--descripcion-->
                <v-list-item-subtitle>{{producto.marca}}</v-list-item-subtitle><!-- marca-->
                <hr >
                <v-list-item-subtitle class="d-flex justify-content-between mb-1"><div>Stock Minimo: </div> <div class="bg-secondary text-white pl-3 pr-3">{{producto.stockMin}}</div></v-list-item-subtitle><!--stockMin -->
                <v-list-item-subtitle class="d-flex justify-content-between mb-1"><div>Stock Maximo: </div> <div class="bg-info text-white pl-4 pr-4">{{producto.stockMax}}</div></v-list-item-subtitle><!--stockMax -->
                <v-list-item-subtitle class="d-flex justify-content-between mb-1"><div>Existencia:</div> <div class="bg-primary text-white pl-5 pr-5">{{producto.stock}}</div></v-list-item-subtitle><!--stock -->
        </v-card>
    </div>
    `,
    
    computed:{
        ...Vuex.mapState(['numero', 'productos']),
        
    },
    methods:{
        ...Vuex.mapActions(['obtenerProductos'])
    },
    

})