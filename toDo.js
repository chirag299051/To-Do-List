
$("ul").on("click", "li", function() {
    $(this).toggleClass('done');
})

$("ul").on("click", "span", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
})

$("input").keypress(function(e) {
    if(e.which === 13) {
        let value = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + value + "</li>")
    }
})

$(".fa-plus").click(function() {
    $("input").fadeToggle();
})
