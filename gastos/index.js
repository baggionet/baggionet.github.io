const app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data:{
       gastos: [],
       fecha: '',
       descripcion: '',
       gasto: null,
       quincenas: [q7='q1eraAbril1a15', q8= 'q2daAbril16a30'],
       headers:[
        //{text:'No.', value: 'index'},
        {text:'Fecha', value:'fecha'},
        {text:'Descripcion', value:'descripcion'},
        {text:'Gasto', value:'gasto'},
        //{text:'X', value:'X'},
       ]
    },
    methods:{
        obtenerFecha(){
            //Obtenemos la fecha actual
            let fecha = new Date();
            let resFecha= null
            let dia = fecha.getDate();
            //console.log(this.dia)
            let mes = fecha.getMonth();
            let anno = fecha.getFullYear();
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
            fecha = dia+' '+mes+' '+anno;
            return fecha
        },//end obtenerFecha
        //Funcion para añadir un elemento
        addGasto(quincena){
            this.fechaActual()
            //Validando que los campos no esten vacios
            if(this.descripcion === null || this.gasto === null ){
                alert("Se requiere todos los campos")
            }else{
            this.gastos.push({
                fecha: this.fecha,
                descripcion: this.descripcion,
                gasto: this.gasto
            })//end push
            var nuevoGasto = document.getElementById('nuevoGasto');
            nuevoGasto.className = "d-none"
            }
            localStorage.setItem('baseGastos', JSON.stringify(this.gastos))
        },//end addGasto
        fechaActual(){
            this.fecha = this.obtenerFecha()
            console.log(this.fecha)
        },//end fechaActual
        formNuevoGasto(){
            var nuevoGasto = document.getElementById('nuevoGasto');
            nuevoGasto.className = ""
            this.fecha= null
            this.descripcion = null
            this.gasto = null
        },
        async cargarBase(){
            const dbGastos = await JSON.parse(localStorage.getItem("baseGastos"));
            if(dbGastos === null){
                this.gastos=[]
            }else{
                this.gastos = dbGastos
                console.log(this.gastos)
            }
        },
        resulTotal(){
            let total = 0;
            for (let index = 0; index < this.gastos.length; index++) {
                total += total = parseFloat(this.gastos[index].gasto);
                 
                console.log(total)
            }
            return `$ ${total}`
        }
    },

    created:function(){
        
        this.cargarBase()
        
    }
    
})