

const columns = row.children[0].children;
const contributor = document.getElementsByClassName('contributor')[0];

function changeContributor(contributorName) {
  contributor.innerHTML = `Contributor: ${contributorName[0] !== '@' ? '@' + contributorName : contributorName}`
}

function clearContributor() {
  contributor.innerHTML = "";
}

clearContributor();

for (var i = 0; i < columns.length; i++) {
  var column = columns[i];
  if (column.children.length > 0) {
    var images = column.children;
    for (var j = 0; j < images.length; j++) {
      var image = images[j];
      if (image.getAttribute('title') !== 'UNCLAIMED') {
        image.onmouseenter = (e) => changeContributor(e.target.getAttribute('title'));
        image.onmouseleave = (e) => clearContributor();
      }
    }
  }
}



document.getElementsByClassName('button-main')[2].addEventListener('click', function () {
  this.style.backgroundColor = 'yellow';
  let images = [
    'plus.png',
    'quarter_0.png',
    'quarter_90.png',
    'quarter_180.png',
    'quarter_270.png',
    'right_angle_0.png',
    'right_angle_90.png',
    'right_angle_180.png',
    'right_angle_270.png',
    'start_end_0.png',
    'start_end_90.png',
    'start_end_180.png',
    'start_end_270.png',
    'straight_0.png',
    'straight_90.png',
    't_0.png',
    't_90.png',
    't_180.png',
    't_270.png'
  ];
  var squares = document.querySelectorAll('[title="UNCLAIMED"]');
  squares.forEach(element => {
    element.src = 'src/' + images[Math.floor(Math.random() * images.length)];
  });
  console.log(squares);
})



