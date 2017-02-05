$(function() {
    $( '.content-card .mdl-button' ).click(function() {
        var content = $( '#' + $(this).data( 'parent-id' ) + 'c' );
        content.slideToggle();
    });
});
