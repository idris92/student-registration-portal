
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


$('#submit').click(function(){
    alert('clicked')
    let data = new FormData();
    data.append('file', $('#image')[0].files[0])
    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    let middlename = $('#middlename').val();
    let date = $('#date').val();
    let phoneNumber = $('#phone').val();
    let state = $('#state').val();
    let kin = $('#kin').val();
    let mail = $('#mail').val();
    let address = $('#address').val();
    let local = $('#local').val();
    let score = $('#score').val();

    
    // $.ajax({
    //             url:'/store',
    //             type:'POST',
    //             dataType: 'json',
    //             data: JSON.stringify({
    //                 'firstname':firstname,
    //                 'lastname':lastname,
    //                 'middlename':middlename,
    //                 'date':date,
    //                 'phoneNumber':phoneNumber,
    //                 'state':state,
    //                 'kin':kin,
    //                 'mail':mail,
    //                 'address':address,
    //                 'local':local,
    //                 'score':score,
    //             }),
    //             contentType: 'application/json, charset=UTF-8',
    //             success: function(data){
    //                 location.reload()
    //             }
                
    // })
    $.ajax({
                url:'/store',
                type:'POST',
                data: data,
                enctype:'multipart/form-data',
                processData:false,
                contentType:false,
                success: function(data){
                    location.reload()
                }
                
    })
})

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