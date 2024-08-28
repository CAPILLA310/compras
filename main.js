document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'coca de vidrio',
            precio: 30,
            imagen: 'coca.jpg'

        }, {
            id: 2,
            nombre: 'cerveza victoria',
            precio: 20,
            imagen: 'cerveza.jpg'

        }, {
            id: 3,
            nombre: 'agua',
            precio: 8,
            imagen: 'agua.jpg'

        }, {
            id: 4,
            nombre: 'pinguinos',
            precio: 40,
            imagen: 'coca.jpg'

        }
    ]

    let carrito= []
    const divisa = '$'
    const DOMitems = document.querySelector('#items')
    const DOMcarrrito = document.querySelector('#carrito')
    const DOMtotal = document.querySelector('#total')

    //funcionalidad 

    function rederizarProductos() {
        baseDeDatos.forEach((info) => {
            //contenedor del a tarjeta
            const miNodo = document.createElement('div')
            miNodo.classList.add('cart', 'col-sm-4')
            //cuerpo de la tarjeta 
            const miNodoCartBody = document.createElement('div')
            miNodoCartBody.classList.add('card-body')
            //titulo
            const miNodoTitle = document.createElement('h5')
            miNodoTitle.classList.add('card-title')
            miNodoTitle.textContent = info.nombre
            //imagen 
            const miNodoImagen = document.createElement('img')
            miNodoImagen.classList.add('cart.img-top')
            miNodoImagen.setAttribute('src', info.imagen)
            //precio
            const miNodoPrecio = document.createElement('p')
            miNodoPrecio.classList.add('cart-tex')
            //boton
            const miNodoBoton = document.createElement('button')
            miNodoBoton.classList.add('btn', 'btn-primary')
            miNodoBoton.textContent = '+'
            miNodoBoton.setAttribute('marcados',info.id)
            miNodoBoton.addEventListener('click',anadirProductosAlcarrito)

            // vamos a juntar los elementos creados 
            miNodo.appendChild(miNodoImagen)
            miNodoCartBody.appendChild(miNodoTitle)
            miNodoCartBody.appendChild(miNodoPrecio)
            miNodoCartBody.appendChild(miNodoBoton)
            miNodo.appendChild(miNodoCartBody)
            //agregar tarjetas a nuesto main
            DOMitems.appendChild(miNodo)

        });




    }
    function renderizarCarrito() {
        //limpiar el carrito
        DOMcarrrito.textContent = ''
        
        //creamos un carrito que no tenga duplicados 
        const carritoSinDuplicados = [...new Set(carrito)]
        console.log(carritoSinDuplicados)
        carritoSinDuplicados.forEach( (item) => {
        
            const miItem = baseDeDatos.filter( (itemBaseDeDatos) => {
                return itemBaseDeDatos.id === parseInt(item)//covertimos item en un numero entero

            })
            //contrarlos elementos o num de unidades 
            const numeroUnidadesItem = carrito.reduce( (total, itemId) => { 
                return itemId===item ? total += 1:total
             }, 0)
             //creamos el nodo del item para el carrito
             const miNodo=document.createElement('li')
            
             miNodo.classList.add('list-group_item','text-rignt','mx-2')
             //miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} -> ${miItem[0].precio} ${divisa}`
             miNodo.textContent=numeroUnidadesItem
             //agregamos boton para eliminar 
             //-------------------
             DOMcarrrito.appendChild(miNodo)
        } )
        //obtener el totaly mostrarlo
        //---------

    }
    function anadirProductosAlcarrito(evento){
        //agregamos al carrito marcador del elemento seleccionado
        carrito.push(evento.target.getAttribute('marcador'))
        //actualizar el carrrito
        renderizarCarrito()
    }


    rederizarProductos()
    renderizarCarrito()

})