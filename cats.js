document.addEventListener('DOMContentLoaded', function() {

  // var catBox = querySelector('cat-box')
  var summonbtn =  document.querySelector('button.summon-cats')


  summonbtn.addEventListener('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData) {
      var catData = responseData.cats;
      var box = document.querySelectorAll('.cat-box');
      for (var i = 0; i < catData.length; i++) {
        var listImg = document.createElement('img');
        listImg.src = catData[i].photo;
        listImg.alt = catData[i].name;
        box[i].append(listImg);
      }
    })
  });
})
