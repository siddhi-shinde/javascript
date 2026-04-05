function changeCar(color) {
  const img = document.getElementById("carImage");
  const tag = document.getElementById("tag");
  const btn = document.getElementById("cartBtn");

  const data = {
    gold: {
      img: "./assets/car1.avif",
      color: "gold"
    },
    blue: {
      img: "./assets/car2.avif",
      color: "blue"
    },
    red: {
      img: "./assets/car3.avif",
      color: "red"
    }
  };

  img.src = data[color].img;
  tag.style.background = data[color].color;
  btn.style.background = data[color].color;
}

function changeCar1(color) {
  const img = document.getElementById("carImage1");
  const tag = document.getElementById("tag1");
  const btn = document.getElementById("cartBtn1");

  const data = {
    gold: {
      img: "./assets/car1.avif",
      color: "gold"
    },
    blue: {
      img: "./assets/car2.avif",
      color: "blue"
    },
    red: {
      img: "./assets/car3.avif",
      color: "red"
    }
  };

  img.src = data[color].img;
  tag.style.background = data[color].color;
  btn.style.background = data[color].color;
}