$.fn.Accordion = function(accor_content){
    var accord = $(this);
    accord.children(".accord_topic").click(function(){
        $(this).children().eq(1).slideToggle(250);
        $(this).siblings().find(accor_content).slideUp(250);
        $(this).find('i').toggleClass('fa-minus');
        if($(this).find('i').attr("class") == "fa fa-plus fa-minus"){
        	$(this).siblings().find('i').removeClass("fa-minus");
        }
    })
}

$(document).ready(function(){
    $(".classic_accordion").Accordion(".accord_content");
    $(".alternative_accordion").Accordion(".accord_content");
})