

var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        headerAlm:['Marca', 'Descripcion', 'Stockmin', 'Stockmax', 'Precio'] ,
        headers: [
            {text:'Marca', value: 'marca'},
            {text:'Descripcion', value:'descripcion'},
            {text:'Stockmin', value:'stockMin'},
            {text:'Stockmax', value:'stockMax'},
            {text:'Stock', value:'stock'},
            {text:'Precio', value:'costo'},
        ],
        myItems: [
            {code:"7501018310233", marca:"Moderna", descripcion:"Sopa de Lengua 200g", stockMin:3, stockMax:10, stock:4, prevCosto:12, costo:12 },
            {code:"7501018310745", marca:"Moderna", descripcion:"Sopa de Almeja 200g", stockMin:3, stockMax:10, stock:5, prevCosto:12, costo:12 },
            {code:"7501018310103", marca:"Moderna", descripcion:"Sopa de Spaghetti", stockMin:3, stockMax:6, stock:3, prevCosto:12, costo:12 },  
        ], 
    },
    methods:{
        //Obtenemos la fecha actual
        fecha: function(){
            var hoy = new Date();
            var mes = hoy.getMonth();
            console.log(mes);
            var fecha;
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
            console.log(mes)
            return fecha = hoy.getDate()+' '+mes+' '+hoy.getFullYear();
        },
        //Obtenemos la hora
        hora: function(){
            var hoy = new Date();
            var hora = hoy.getHours()+':'+hoy.getMinutes();

            return hora;
        }
    },
    
})

