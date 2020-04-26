var monkeyList = new List('sandbox', {
  valueNames: ['project-name', 'project-title', 'project-label', 'project-name-last'],
  page: 20,
  pagination: true
});


monkeyList.on('searchComplete', function (e) {

    if (e.matchingItems.length == 0) {
  
      // NO RESULTS
      // jquery
      $('.not-found').show();
      // vanilla
      // by classname
      document.getElementsByClassName('className')[0].style.display = "block";
      // or by ID
      document.getElementById("elementID").style.display = "block";
  
    } else {
  
      $('.not-found').hide();
      document.getElementsByClassName('className')[0].style.display = "none";
      document.getElementById("elementID").style.display = "none";
  
    }
  
  });

$('#sort').change(function () {
  var selection = this.value;
  if (selection) {
      featureList.filter(function (item) {
          return (item.values().material == selection);
      });
  } else {
      featureList.filter();
  }
});


