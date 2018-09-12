document.addEventListener('DOMContentLoaded', function() {

  // var catBox = querySelector('cat-box')
  var summonbtn =  document.querySelector('button.summon-cats')

  summonbtn.addEventListener('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData) {
      console.log(responseData)
    });

  });









})
