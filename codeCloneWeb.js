import data from "./data.json" assert { type: "json" };

let body = document.body;
body.style = `margin: 0; font-family: Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;`;

let container = document.getElementById("container");

function buildNavBar() {
  let navBar = document.createElement("div");
  navBar.style.display = "flex";
  navBar.style.alignItems = "center";
  navBar.style.justifyContent = "space-evenly";
  navBar.style.backgroundColor = "green";
  navBar.style = `background-image: linear-gradient(to right, #0B3F27 , #187048);`;
  navBar.style.width = "100%";
  navBar.style.height = "80px";

  let options = [
    "Danh mục",
    "Tìm kiếm",
    "Định vị cửa hàng",
    "Danh mục yêu thích",
  ];

  let optionBox = document.createElement("div");
  optionBox.style.display = "flex";
  optionBox.style.alignItems = "center";
  optionBox.style.justifyContent = "center";
  optionBox.style.padding = "15px";

  let icon1 = document.createElement("text");
  icon1.innerHTML = "=";
  icon1.style.backgroundColor = "none";
  icon1.style.color = "white";
  icon1.style.border = "none";
  icon1.style.fontSize = "3rem";
  icon1.style.fontWeight = "480";
  icon1.style.marginTop = "-10px";
  optionBox.appendChild(icon1);

  let danhMuc = document.createElement("text");
  danhMuc.innerHTML = options[0];
  danhMuc.style.backgroundColor = "none";
  danhMuc.style.color = "white";
  danhMuc.style.border = "none";
  danhMuc.style.fontSize = "1rem";
  danhMuc.style.fontWeight = "480";
  danhMuc.style.marginRight = "auto";
  optionBox.appendChild(danhMuc);

  let logo = document.createElement("img");
  logo.src = "https://www.pngmart.com/files/4/Rolex-Logo-PNG-Clipart.png";
  logo.style.height = "50px";
  logo.style.margin = "auto";
  optionBox.appendChild(logo);

  let icon2 = document.createElement("img");
  icon2.src =
    "https://www.seekpng.com/png/full/920-9209972_magnifying-glass-png-white-search-icon-white-png.png";
  icon2.style.height = "20px";
  icon2.style.marginRight = "0.5%";
  icon2.style.marginLeft = "-3%";
  optionBox.appendChild(icon2);

  let timKiem = document.createElement("text");
  timKiem.innerHTML = options[1];
  timKiem.style.backgroundColor = "none";
  timKiem.style.color = "white";
  timKiem.style.border = "none";
  timKiem.style.fontSize = "1rem";
  timKiem.style.fontWeight = "480";
  timKiem.style.marginLeft = "0.5%";
  optionBox.appendChild(timKiem);

  let icon3 = document.createElement("img");
  icon3.src =
    "https://konigwheels.com/wp-content/themes/konig/css/imgs/pin.png";
  icon3.style.height = "20px";
  icon3.style.marginLeft = "1%";
  optionBox.appendChild(icon3);

  let dinhVi = document.createElement("text");
  dinhVi.innerHTML = options[2];
  dinhVi.style.backgroundColor = "none";
  dinhVi.style.color = "white";
  dinhVi.style.border = "none";
  dinhVi.style.fontSize = "1rem";
  dinhVi.style.fontWeight = "480";
  dinhVi.style.marginLeft = "0.5%";
  optionBox.appendChild(dinhVi);

  let icon4 = document.createElement("img");
  icon4.src =
    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44798/white-heart-emoji-clipart-xl.png";
  icon4.style.height = "20px";
  icon4.style.marginLeft = "1%";
  optionBox.appendChild(icon4);

  let yeuThich = document.createElement("text");
  yeuThich.innerHTML = options[3];
  yeuThich.style.backgroundColor = "none";
  yeuThich.style.color = "white";
  yeuThich.style.border = "none";
  yeuThich.style.fontSize = "1rem";
  yeuThich.style.fontWeight = "480";
  yeuThich.style.marginLeft = "0.5%";
  optionBox.appendChild(yeuThich);

  navBar.appendChild(optionBox);

  return navBar;
}
let newNavBar = buildNavBar();
container.appendChild(newNavBar);

function makeTitle() {
  let title = document.createElement("div");
  title.style.display = "block";
  title.style.margin = "5%";
  title.style.padding = "0 5% 0 5%";
  title.style.textAlign = "center";

  let smallTitle = document.createElement("div");
  smallTitle.style.fontSize = "1.25rem";
  smallTitle.style.fontWeight = "400";
  smallTitle.innerHTML = "ĐỒNG HỒ ROLEX";

  let bigTitle = document.createElement("div");
  bigTitle.style.fontSize = "5rem";
  bigTitle.style.fontWeight = "bold";
  bigTitle.style.marginBottom = "10%";
  bigTitle.innerHTML = "Tất cả mẫu đồng hồ";

  let typeOption = ["Tất cả", "Cổ điển", "Chuyên dụng"];

  let chooseType = document.createElement("div");
  chooseType.style.display = "flex";
  chooseType.style.alignItems = "center";
  chooseType.style.justifyContent = "center";
  for (let i = 0; i < typeOption.length; i++) {
    let optionButton = document.createElement("text");
    optionButton.innerHTML = typeOption[i];
    optionButton.style.border = "none";
    optionButton.style.fontSize = "1rem";
    optionButton.style.fontWeight = "650";
    optionButton.style.margin = "0 3% 0 3%";

    chooseType.appendChild(optionButton);
  }

  title.appendChild(smallTitle);
  title.appendChild(bigTitle);
  title.appendChild(chooseType);
  return title;
}
let newTitle = makeTitle();
container.appendChild(newTitle);

function buildItemCard(name, description, imageUrl) {
  let itemCard = document.createElement("div");
  Object.assign(itemCard.style, {
    background: "rgb( 240 240 240)",
    "max-width": "500px",
    width: "100%",
    height: "100%",
    margin: "auto",
    "text-align": "left",
    "font-family": "arial",
    "font-size": "1rem",
    display: "flex",
    "align-items": "center",
  });
  itemCard.innerHTML = `
  <div style = "padding: 15px;">
    <h2 style = "margin: 0;">${name}</h2>
    <p>${description}</p>
  </div>
    <img src="${imageUrl}" alt="Watch" style="width:48%"/>
  `;

  return itemCard;
}

let itemList = document.createElement("div");
itemList.style.display = "grid";
itemList.style.gridGap = "1rem";
itemList.style.gridTemplateColumns = "repeat(auto-fit, minmax(400px, 1fr))";

class Watch {
  constructor(name, description, imageURL) {
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
  }
}

/**
 * @param {Watch[]}
 */

let listOfWatches = [...data];

for (let i = 0; i < listOfWatches.length; i++) {
  let newItemCard = buildItemCard(
    listOfWatches[i].name,
    listOfWatches[i].description,
    listOfWatches[i].imageURL
  );
  itemList.appendChild(newItemCard);
}

container.appendChild(itemList);
