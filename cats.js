document.addEventListener('DOMContentLoaded', function() {

  // var catBox = querySelector('cat-box')
  var summonbtn =  document.querySelector('button.summon-cats')
  var box = document.querySelector('#cat1')

  summonbtn.addEventListener('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData) {
      console.log(responseData)
      responseData.cats.forEach(function(cat) {
        var listImg = document.createElement('img')
        listImg.src = cat.photo
        box.append(listImg)
      })
    });



  });









})
