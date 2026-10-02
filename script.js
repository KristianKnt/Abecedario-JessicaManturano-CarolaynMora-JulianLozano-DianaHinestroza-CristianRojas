const getRandomColor = () => {
  const colors = [
    /* Rojo */
    "#FF0000",
    "#CC0000",
    "#990000",
    /* Verde */
    "#00FF00",
    "#00CC00",
    "#009900",
    /* Azul */
    "#0000FF",
    "#0000CC",
    "#000099",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const changeColor = () => {
  const names = document.querySelectorAll("h5");

  names.forEach((name) => {
    name.addEventListener("click", () => {
      name.style.color = getRandomColor();
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  changeColor();
});
