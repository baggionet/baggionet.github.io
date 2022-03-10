Vue.component('productos',{
    template:
    ` 
    <div class="pl-2 pt-4 d-inline-block">
        <v-card class="p-2 mb-2" elevation="5" max-width="150" >
            <v-img contain class="text-white align-end" height="70px" src="./src/assets/knorrCaldoPollo.jpeg"></v-img>
            <hr>
            <v-list-item-header>
                <v-list-item-title>Caldo de pollo</v-list-item-title><!--descripcion-->
                <v-list-item-subtitle>Knorr Suiza</v-list-item-title><!-- marca-->
            </v-list-item-header>
            <hr>
            <v-list-item-header>
                <v-list-item-title>Stock</v-list-item-title>
                <v-list-item-subtitle>Minimo: 2</v-list-item-title><!--stockMin -->
                <v-list-item-subtitle>Maximo: 10</v-list-item-title><!--stockMax -->
                <v-list-item-subtitle>Existencia: 5</v-list-item-title><!--stock -->
            </v-list-item-header>
        </v-card>
    </div>
    `
})