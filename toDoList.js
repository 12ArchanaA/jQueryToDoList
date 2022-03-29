$(document).ready(main);

function main() {
    $("#btn").click( function() {

        var newTask = $("<p></p>").text($("input").val());
        newTask.click(function() {
            $(this).toggleClass("disabled");

        });

        $("#result").append(newTask);

        $("input").val("");
    });
    
    $("#load").click(function(){
        $(".data").load("sample.txt");
    })
}
