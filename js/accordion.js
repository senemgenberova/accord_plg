$.fn.Accordion = function(accor_content){
    var accord = $(".accordion");
    accord.children(".accord_topic").click(function(){
        $(this).children().eq(1).slideToggle(300);
        $(this).siblings().find(accor_content).slideUp(300);
        // $(this).find('i').toggleClass('fa-minus');
    })
}

$(document).ready(function(){
    $(".accordion").Accordion(".accord_content");
})