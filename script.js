$(document).ready(function () {
    $('#botao1').click(function() 
    {
        $('p').hide('fast');
    });
    
    $('#botao2').click(function() 
    {
        $('p').show('slow');
    });
});

function esconde()
{
    $('p').hide('fast');
}

function exibe()
{
    $('p').show('slow');
}
///////////////////////////////////////////////////

$(document).ready(function() {
    $("#bot1").click(function() 
    {
        if ($("#campo1").val() != $("#campo2").val()) 
        {
            alert("favor preencher os campos corretamente");
        } else {
            alert("campos preenchidos corretamente");
        }
    });
});


/////////////////////////////////////////////////////

$(document).ready(function() {
    $("#bot2").click(function() 
    {
        if ($("#campo1").val() != $("#campo2").val()) 
        {
            $('.erro').show('fast').delay(800).hide('slow');

        } else {
            $('.acerto').show('fast').delay(8000).hide('slow');
        }
    });
});

// fonte: https://api.jquery.com/show/