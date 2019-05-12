// ***************THE ROLLING LOGINC*********************************************

function Kadweka1() {

  var temp=0;

  var image = new Array(6);
image[0]= 'images/img6.png';
image[1]= 'images/img3.png';
image[2]= 'images/img7.png';
image[3]= 'images/img8.png';
image[4]= 'images/img9.png';
image[5]= 'images/img10.png';

  temp = Math.floor(Math.random() * 6);

  document.getElementById("image1").src=image[temp];

}


function Kadweka2() {

  var temp=0;

  var image = new Array(6);
image[0]= 'images/img6.png';
image[1]= 'images/img3.png';
image[2]= 'images/img7.png';
image[3]= 'images/img8.png';
image[4]= 'images/img9.png';
image[5]= 'images/img10.png';

  temp = Math.floor(Math.random() * 6);

  document.getElementById("image2").src=image[temp];
}


$('.submit').click(function(e){    
  $('.submit').fadeOut('slow', function(){
      $('#game').fadeIn('slow');
  });
});