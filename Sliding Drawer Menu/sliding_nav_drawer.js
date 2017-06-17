 $('#drawer-toggle-button').on('click',function(){
    if($('#drawer-toggle-div').css('left') == '0px')
    {
        $('#drawer-toggle-div').animate({
            left:"+250px"
        },1000, function(){
            //animation complete
        });    

        $('#drawer').animate({
            left:"+0px"
        }, 1000, function(){
            //animation complete
        })
    }
    else
    {
        $('#drawer-toggle-div').animate({
            left:"+0px"
        },1000, function(){
            //animation complete
        });

        $('#drawer').animate({
            left:"-250px"
        }, 1000, function(){
            //animation complete
        })   
    }
    
    
}); 