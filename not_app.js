$(function(){
    console.log("JS Initialized");
    $("#formy").on('submit',function(e){
        e.preventDefault();
        var details = $("#formy").serialize();
        console.log(details);

        $.post('./user.json', details, function(data){
            $("#formy").html(data);
        });
    });
});
