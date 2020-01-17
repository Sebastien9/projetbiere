$.get({
    url: "http://jihane.fr/dwmg2/api/biere/bieres.php",

    success: function(bieres) {

        //   $("#a").append("<td>" + bieres[0].id + "</td>")

        for (i = 0; i < bieres.length; i++) {
            console.log(bieres[i]);

            $("#a").append("<tr><td>" + bieres[i].id + "</tr></td>")
            $("#b").append("<tr><td>" + bieres[i].nom + "</td><td>" + '<button onclick="voir(' + bieres[i].id + ')" class="btn btn-primary" type="button" id="voir">voir</button>' + "</td></tr>")


        }
    },
    dataType: "json"
})



$("#myBtn").click(function() {
    $("#myModal").modal('show');
})

function aj() {
    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/newbeer.php",
        data: {
            nom: $("#usrname1").val(),
            pays: $("#usrname2").val(),
            prix: $("#usrname3").val(),
            amertume: $("#usrname4").val(),
            degres: $("#usrname5").val(),
            couleur: $("#usrname6").val(),

        },
        success: function(bieres) {

            console.log(bieres);
        },
        dataType: "json"
    })
}

$("#fer").click(function() {
    $("#myModal").modal('hide');
})



var p;


function voir(ida) {
    p = ida
    $("#myModal1").modal('show');


    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/unebiere.php",
        data: {
            id: ida

        },
        success: function(biere) {
            $("#usrname7").val(biere.nom)
            $("#usrname8").val(biere.pays)
            $("#usrname9").val(biere.prix)
            $("#usrname10").val(biere.amertume)
            $("#usrname11").val(biere.degres)
            $("#usrname12").val(biere.couleur)

        },
        dataType: "json"
    })
}



function sup(idb) {
    $("#myModal1").modal('show');


    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/deletebiere.php",
        data: {
            id: p

        },
        success: function(biere) {
            $("#usrname7").val(biere.nom)
            $("#usrname8").val(biere.pays)
            $("#usrname9").val(biere.prix)
            $("#usrname10").val(biere.amertume)
            $("#usrname11").val(biere.degres)
            $("#usrname12").val(biere.couleur)

        },
        dataType: "json"
    })
}


$("#sup1").click(function() {
    $("#myModal1").modal('hide');
})




function mod() {
    $("#myModal1").modal('hide');


    $.get({
        url: "http://jihane.fr/dwmg2/api/biere/update.php",

        data: {
            id: p,
            nom: $("#usrname7").val(),
            pays: $("#usrname8").val(),
            degres: $("#usrname11").val(),
            amertume: $("#usrname10").val(),
            couleur: $("#usrname12").val(),
            prix: $("#usrname9").val(),
        },
        success: function(bieres) {
            console.log(bieres);


        },
        dataType: "text"
    })
}


$("#mod1").click(function() {
    $("#myModal1").modal('hide');
})