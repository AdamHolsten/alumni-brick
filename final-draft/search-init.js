
var options = {
  valueNames: [ 'project-name', 'project-title', 'project-label' ],
  page: 2,
  pagination: {
    innerWindow: 1,
    left: 0,
    right: 0,
    paginationClass: "pagination",
    },
};

var userList = new List('sandbox', options);


$('.jPaginateNext').on('click', function(){
  var list = $('.pagination').find('li');
  $.each(list, function(position, element){
      if($(element).is('.active')){
          $(list[position+1]).trigger('click');
      }
  })
});


$('.jPaginateBack').on('click', function(){
  var list = $('.pagination').find('li');
  $.each(list, function(position, element){
      if($(element).is('.active')){
          $(list[position-1]).trigger('click');
      }
  })
});


