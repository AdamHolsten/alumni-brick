var monkeyList = new List('sandbox', {
  valueNames: ['project-name', 'project-title', 'project-label'],
  page: 4,
  pagination: true
});


var userList = new List('users', monkeyList);
userList.on('updated', function(list) {
  if (list.matchingItems.length > 0) {
    $('.no-result').hide()
  } else {
    $('.no-result').show()
  }
})

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


