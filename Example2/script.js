// declare element div for include in elements classRJ
const divFrete  =   document.createElement( 'div' );
// declare text than to before div
const txtFrete  =   document.createTextNode( 'Frete Grátis' );

// include text into divFrete
divFrete.appendChild( txtFrete );
// add class freteGratis in element divFrete
divFrete.classList.add( 'freteGratis' );

// Search elements with class classRJ into page
const clientesRio   =   document.querySelectorAll( '.classRJ' );
// sweeping elements array with classRJ and insert divFrete
clientesRio.forEach( cl=>{
    cl.appendChild( divFrete );
} )
