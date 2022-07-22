// declare const for identify element html <span id="country"
const country   =   document.querySelector( '#country' );
// declare const than do replace <span id="country
const printdiv  =   '<div>Free Delivery</div>';

// Conditional for change element html <span id="country for <div>Free Delivery</div>
if ( country && country.textContent.trim()  === 'New York' )
{
    document.querySelector( '#country' ).insertAdjacentHTML( 'afterend', printdiv );
}