$.get( "https://api.github.com/users/AhmadAbdulkhaliq", function( data ) {
console.log("success"+ data)
})
.fail(function() {
    console.log('Something went wrong: ');
});  
