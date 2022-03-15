Vue.component('productos',{
    template:
    ` 
    <div class="pl-4 pt-4 d-inline-block" >
        <div class="d-flex flex-wrap justify-content-around" id="losProductos">
            <div class="prueba" v-for="(item, index) of productos" @click="mostrarProducto(index)">
                <v-card class="p-2 mb-2" elevation="5" max-width="230" style="cursor: pointer">
                    <v-img contain class="text-white align-end" height="120px" src="./assets/knorrCaldoPollo.jpeg" cover>
                        <v-card-text class="align-bottom pr-0 pt-0 pb-0 bg-secondary">{{item.descripcion}}</v-card-text>
                        <v-card-text class="align-bottom pr-0 pt-0 pb-0 bg-secondary">{{item.marca}}</v-card-text>
                    </v-img>
                </v-card>
            </div>
        </div>
        <div id="elProducto" class="d-none p-2 mb-2">
            <div>
                <v-btn
                  class="ma-2"
                  color="primary"
                  dark
                  @click="regresar"
                >
                  <v-icon
                    dark
                    left
                  >
                    mdi-arrow-left
                  </v-icon>Back
                </v-btn>
            </div>
            <v-card  class="p-2 mb-2" elevation="5" max-width="280"  >
                <v-img contain class="text-white align-end" height="120px" src="./assets/knorrCaldoPollo.jpeg" cover></v-img>
                <hr >
                <v-list-item-title>{{this.myArray[0]}}</v-list-item-title><!--descripcion-->
                <v-list-item-subtitle >{{this.myArray[1]}}</v-list-item-subtitle><!-- marca-->
                <hr >
                
                <v-list-item-subtitle class="d-flex justify-content-between mb-1">
                    <div>
                        Existencia:  
                    </div> 
                    <div class="bg-info text-white pl-5 pr-5">
                        {{this.myArray[2]}}
                    </div>
                </v-list-item-subtitle><!-- stock -->
                <v-list-item-subtitle class="mb-1" style="cursor: pointer">
                    <div  class="bg-primary text-white pt-2 pb-2 text-center pl-5 pr-5" @click="usado(myArray[3])">
                        Usar producto
                    </div>
                </v-list-item-subtitle><!--stock -->
                
            </v-card>
        </div>
    </div>
    `,
    data(){
        return {
            myArray: [],
            elId: ""
        }
    },
    computed:{
        ...Vuex.mapState(['numero', 'productos']),
        
    },
    methods:{
        ...Vuex.mapMutations(['usado']),
        ...Vuex.mapActions(['obtenerProductos']),
        
        mostrarProducto:function(id){
            //console.log(id)
            var losProductos = document.getElementById('losProductos')
            var elProducto = document.getElementById('elProducto')
            losProductos.className = "d-none"
            elProducto.className = "p-2 mb-2"
            this.elId = id
            console.log(id)
            this.myArray= []
            this.myArray.push(
                this.productos[this.elId].descripcion,
                this.productos[this.elId].marca,
                this.productos[this.elId].stock,
                this.elId
            )
            console.log(this.myArray)
            
        },
        regresar:function(){
            var losProductos = document.getElementById('losProductos')
            var elProducto = document.getElementById('elProducto')
            losProductos.className = "d-flex flex-wrap justify-content-around"
            elProducto.className = "d-none"
            this.elId = null
        },
        
    },
    

})