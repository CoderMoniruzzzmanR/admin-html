var eventFired = function ( type ) {
    var n = document.querySelector('#table_id');
    n.innerHTML += '<div>'+type+' event - '+new Date().getTime()+'</div>';
    n.scrollTop = n.scrollHeight;     
}
 
document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#table_id');
});