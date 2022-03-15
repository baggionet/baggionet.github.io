Vue.component('tablaProductos',{
    template:
    `
        <div>
            <div class="mt-4 mb-5">
                <button class="btn btn-primary" @click="displayForm">Agregar producto nuevo</button>
                <v-card id="formAdd" class="d-none">
                    <v-card-title class="justify-content-center">Agregar producto nuevo</v-card-title>
                    <div class="input-group mb-1">
                        <span class="input-group-text">Marca</span>
                        <input type="text" class="form-control" placeholder="Marca" v-model="marca"  required>
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">Descripcion</span>
                        <input type="text" class="form-control" placeholder="Descripcion" v-model="descripcion" required>
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">Stock Minimo</span>
                        <input type="number" class="form-control" placeholder="Stock Minimo" v-model="stockMin" required>
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">Stock Maximo</span>
                        <input type="number" class="form-control" placeholder="Stock Maximo" v-model="stockMax" required>
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">Stock</span>
                        <input type="number" class="form-control" placeholder="Stock" v-model="stock" required>
                    </div>
                    <div class="input-group mb-1">
                        <span class="input-group-text">Costo</span>
                        <input type="number" class="form-control" placeholder="Precio" v-model="precio" required>
                    </div>
                    <div class="input-group mt-3 justify-content-center">
                        <button class="btn btn-primary" @click="agregarProducto([marca, descripcion, stockMin, stockMax, precio])">Enviar</button>
                    </div>
                </v-card>
            </div>
            
            <v-data-table
            mobile
            :items="productos"
            :headers="headers"
            :items-per-page="5"
            class="elevation-1"
            >
            </v-data-table>
        </div>
    `,
    
    computed:{
        ...Vuex.mapState(['productos']),
        
    },
    methods:{
        ...Vuex.mapActions(['obtenerProductos']),
        ...Vuex.mapMutations(['agregarProducto']),
        displayForm:function(){
            let formAdd = document.getElementById('formAdd')
            formAdd.className = ""
                this.marca = null,
                this.descripcion = null,
                this.stockMin= null,
                this.stockMax= null,
                this.stock= null,
                this.precio = null
        },
    },
    data(){
        return{
            headers: [
                {text:'Marca', value: 'marca'},
                {text:'Descripcion', value:'descripcion'},
                {text:'Stockmin', value:'stockMin'},
                {text:'Stockmax', value:'stockMax'},
                {text:'Stock', value:'stock'},
                {text:'Precio', value:'precio'},
            ],
            marca: null,
            descripcion:null,
            stockMin: null,
            stockMax: null,
            stock: null,
            precio: null
        }
    }
})