

var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        headers: [
            {text:'Marca'},
            {text:'Producto'},
            {text:'Precio'}
        ]
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

