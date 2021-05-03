
$(function () {
    $('.state').change( function(){
        let word = $(this).val();
        changeLocal(word)
        
        
})

})



function changeLocal(word){
    $.getJSON("./static/states-localgovts.json", function(json) {
        for (i=0; i<json.length; i++){
            let state = json[i]['state'];
            if (state == word){
                local = json[i]['local'];
                $('.local-govt').find('option').remove().end();
                for (j=0; j<local.length; j++){
                    
                    $('.local-govt').append($('<option>', { 
                        value: local[j],
                        text : local[j]
                    }));
                  
                }
            
        }
        }
        });
    

}


// details operation
$(function () {
    $('.button-details').click( function(){
        let word = $(this).attr('id');
        $.ajax({
                url:'/details/' + word ,
                type:'POST',
                
                success: function(data){
                    
                }
                
            })
        
        
})

})

// $('.button-details').click(function(){
//     let word = $(this).attr('id');
//     console.log(word)
//     $.ajax({
//             url:'/details' + word ,
//             type:'POST',
            
//             success: function(data){
//                 // alert(data)
//             }
            
//         })

// })

// $.getJSON("./static/states-localgovts.json", function(json) {
//     for (i=0; i<json.length; i++){
//         console.log(json[i]['state'])
//     }
// });


 // $.ajax({
        //     url:'/getStarted',
        //     type:'POST',
        //     dataType: 'json',
        //     data: JSON.stringify({
        //         'word':word,
        //     }),
        //     contentType: 'application/json, charset=UTF-8',
        //     success: function(data){
        //         // alert(data)
        //     }
            
        // })