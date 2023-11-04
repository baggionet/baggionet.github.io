Vue.component('inicio',{
    template: 
    `
    <div>
            <v-main>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-tabs 
                                background-color="primary"
                                centered
                                dark
                                icons-and-text    
                            > 
                                <v-tabs-slider color="yellow"></v-tabs-slider>
                                <v-tab>
                                    Despensa
                                </v-tab>
                                <v-tab>
                                    Tickets
                                </v-tab>
                                <v-tab>
                                    Compra
                                </v-tab>
                                <v-tab>
                                    Productos
                                </v-tab>
        
                                <v-tab-item>
                                    <div d-flex flex-wrap flat>
                                        <productos></productos>
                                    </div>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat>
                                        <v-card-text><p>Tickes</p></v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat>
                                        <v-card-text></v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat>
                                        <tablaProductos></tablaProductos>
                                        
                                    </v-card>
                                </v-tab-item>
                            </v-tabs>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
    </div>
    `
})

const store = new Vuex.Store({
    state:{
        numero: 10,
        productos: [],
        
    },
    mutations:{
        llenarProductos(state, productosAccion ){
            if(productosAccion === null){
                state.productos = []
            }else{
                state.productos = productosAccion
            }
            
            console.log(state.productos)
            
        },
        agregarProducto(state, [marca, descripcion, stockMin, stockMax, stock, precio]){
            var idUp = state.productos.length;
            console.log(idUp)
            if(marca === null || descripcion === null || stockMin === null || stockMax === null || precio === null || stock === null){
                alert("Se requiere todos los campos")
                
            }else{
                 
                //console.log(typeof(stockMin))
                stockMin = parseInt(stockMin)
                stockMax = parseInt(stockMax)
                stock = parseInt(stock)
                precio = parseFloat(precio)
                //console.log(typeof(stockMin))
                state.productos.push({
                    id: idUp,
                    marca: marca,
                    descripcion: descripcion,
                    stockMin: stockMin,
                    stockMax: stockMax,
                    stock: stock,
                    precio:precio
                })
                

                let formAdd = document.getElementById('formAdd')
                formAdd.className = "d-none"
            }   
            localStorage.setItem('dbLocal', JSON.stringify(state.productos))
        }, 
        usado(state, id){
            const myId = id;
            console.log(myId)
            if(state.productos[myId].stock <= 0){
                alert("No tienes mas producto para usar")
            }else{
                state.productos[myId].stock--
                localStorage.setItem('dbLocal', JSON.stringify(state.productos[myId].stock))
            }
            
            console.log(state.productos[myId].stock)
            console.log(state.productos[myId].descripcion)
        }
    },
    actions:{
        obtenerProductos: async function({commit}){
            const data = await JSON.parse(localStorage.getItem("dbLocal"));
            console.log(data)
            commit('llenarProductos', data)
        }
    },
    
})

var app = new Vue({
    el: "#app",
    store: store,
    vuetify: new Vuetify(),
    
    
    methods:{
        obtenerFecha:function(){
            //Obtenemos la fecha actual
            let hoy = new Date();
            let mes = hoy.getMonth();
            switch (mes) {
                case 0:
                    mes = "Enero"
                    break;
                case 1:
                    mes = "Febrero"
                    break;
                case 2:
                    mes = "Marzo"
                    break;
                case 3:
                    mes = "Abril"
                    break;
                case 4:
                    mes = "Mayo"
                    break;
                case 5:
                    mes = "Junio"
                    break;
                case 6:
                    mes = "Julio"
                    break;
                case 7:
                    mes = "Agosto"
                    break;
                case 8:
                    mes = "Septiembre"
                    break;
                case 9:
                    mes = "Octubre"
                    break;
                case 10:
                    mes = "Noviembre"
                    break;
                case 11:
                    mes = "Diciembre"
                    break;
                default:
                    break;
            }   
            //console.log(mes)
            var fecha = hoy.getDate()+' '+mes+' '+hoy.getFullYear();
            return fecha
        },
        obtenerHora:function(){
            //Obtenemos la fecha actual
            let hoy = new Date();        
        //Obtenemos la hora
            var hora = hoy.getHours()+':'+hoy.getMinutes();
            return hora
        },
        ...Vuex.mapActions(['obtenerProductos'])
    },
    computed:{
        ...Vuex.mapState(['productos'])
    },
    created:function(){
        
        this.obtenerProductos()
        

        
        
    }
})

