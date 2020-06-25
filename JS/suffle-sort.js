const container = document.getElementById("container-items");
const elementsArray = [...container.children];
const userName = "Vikash Kumar Singh";
document.getElementById('userName').innerText = userName;

const shuffle = () => {
  elementsArray.forEach(function (element) {
    container.removeChild(element);
  });
  shuffleArray(elementsArray);
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
};

const sortElems = () => {
  elementsArray.sort((a, b) => (a.innerText > b.innerText ? 1 : -1))
    .forEach((node) => container.appendChild(node));
};

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
