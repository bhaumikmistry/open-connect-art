

const columns = row.children[0].children;
const contributor = document.getElementsByClassName('contributor')[0];

function changeContributor(contributorName) {
  contributor.innerHTML = `Contributor: ${contributorName[0] !== '@' ? '@' + contributorName : contributorName}`
}

function clearContributor(){
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