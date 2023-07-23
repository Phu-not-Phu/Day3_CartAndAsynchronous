import data from "./data.json" assert { type: "json" };

let body = document.body;
body.style = `margin: 0; font-family: Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;`;

let container = document.getElementById("container");

//NavBar
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

//Tiêu đề
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
  bigTitle.style.marginBottom = "5%";
  bigTitle.innerHTML = "Tất cả mẫu đồng hồ";

  title.appendChild(smallTitle);
  title.appendChild(bigTitle);
  return title;
}
let newTitle = makeTitle();
container.appendChild(newTitle);

//Bỏ đồ vào giỏ
let cart = [];
function addItemtoCart(item) {
  alert("Đã thêm vào giỏ hàng");
  let itemPosition = cart.findIndex((itemInCart) => {
    return itemInCart.id == item.id;
  });

  if (itemPosition === -1) {
    item.quantity = 1;
    cart.push(item);
  } else {
    cart[itemPosition].quantity += 1;
  }
  console.log(cart);
}

//Làm cái giỏ
function makeCart() {
  let shoppingCart = document.createElement("div");
  shoppingCart.style.display = "block";
  shoppingCart.style.margin = "5%";
  shoppingCart.style.padding = "0 5% 0 5%";
  shoppingCart.style.textAlign = "center";

  let itemListInCart = document.createElement("div");
  itemListInCart.style.display = "grid";
  itemListInCart.style.gridGap = "1rem";
  itemListInCart.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(400px, 1fr))";

  let overlay = document.createElement("div");
  let allButtonInCart = document.createElement("span");
  let closeButton = document.createElement("button");
  let billButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  let totalBox = document.createElement("h3");
  let total = 0;
  let newItemCart;

  Object.assign(overlay.style, {
    position: "fixed",
    display: "none",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    "background-color": "rgba(0,0,0,0.5)",
    "z-index": "2",
  });
  overlay.onclick = off();

  Object.assign(closeButton.style, {
    "align-items": "center",
    "background-color": "#fff",
    border: "2px solid #000",
    "box-sizing": "border-box",
    color: "#000",
    cursor: "pointer",
    display: "inline-flex",
    fill: "#000",
    "font-family": "Inter,sans-serif",
    "font-size": "16px",
    "font-weight": "600",
    height: "48px",
    "justify-content": "center",
    "letter-spacing": "-.8px",
    "line-height": "24px",
    "min-width": "140px",
    outline: "0",
    padding: "0 17px",
    "text-align": "center",
    "text-decoration": "none",
    transition: "all .3s",
    "user-select": "none",
    "-webkit-user-select": "none",
    "touch-action": "manipulation",
    "min-width": "170px",
    margin: "3%",
  });

  Object.assign(billButton.style, {
    "align-items": "center",
    "background-color": "rgb(0 233 39)",
    border: "2px solid #000",
    "box-sizing": "border-box",
    color: "#000",
    cursor: "pointer",
    display: "inline-flex",
    fill: "rgb(0 233 39)",
    "font-family": "Inter,sans-serif",
    "font-size": "16px",
    "font-weight": "600",
    height: "48px",
    "justify-content": "center",
    "letter-spacing": "-.8px",
    "line-height": "24px",
    "min-width": "140px",
    outline: "0",
    padding: "0 17px",
    "text-align": "center",
    "text-decoration": "none",
    transition: "all .3s",
    "user-select": "none",
    "-webkit-user-select": "none",
    "touch-action": "manipulation",
    "min-width": "170px",
    margin: "3%",
  });

  Object.assign(deleteButton.style, {
    "align-items": "center",
    "background-color": "rgb(255 63 63)",
    border: "2px solid #000",
    "box-sizing": "border-box",
    color: "#000",
    cursor: "pointer",
    display: "inline-flex",
    fill: "rgb(255 63 63)",
    "font-family": "Inter,sans-serif",
    "font-size": "16px",
    "font-weight": "600",
    height: "48px",
    "justify-content": "center",
    "letter-spacing": "-.8px",
    "line-height": "24px",
    "min-width": "140px",
    outline: "0",
    padding: "0 17px",
    "text-align": "center",
    "text-decoration": "none",
    transition: "all .3s",
    "user-select": "none",
    "-webkit-user-select": "none",
    "touch-action": "manipulation",
    "min-width": "170px",
    margin: "3%",
  });

  Object.assign(totalBox.style, {
    "align-items": "center",
    "background-color": "#fff",
    border: "2px solid #000",
    "box-sizing": "border-box",
    color: "#000",
    display: "inline-flex",
    fill: "#000",
    "font-family": "Inter,sans-serif",
    "font-size": "16px",
    "font-weight": "600",
    height: "48px",
    "justify-content": "center",
    "letter-spacing": "-.8px",
    "line-height": "24px",
    "min-width": "140px",
    outline: "0",
    padding: "0 17px",
    "text-align": "center",
    "text-decoration": "none",
    transition: "all .3s",
    "user-select": "none",
    "-webkit-user-select": "none",
    "touch-action": "manipulation",
    "min-width": "170px",
    margin: "3%",
  });

  function on() {
    overlay.style.display = "block";
    closeButton.innerText = "Đóng Giỏ Hàng";
    billButton.innerText = "Thanh Toán";
    deleteButton.innerHTML = "Xóa Hết Đơn Hàng";

    deleteButton.addEventListener("mouseover", function () {
      deleteButton.style.borderColor = "white";
      deleteButton.style.color = "white";
      deleteButton.style.fill = "white";
    });
    deleteButton.addEventListener("mouseout", function () {
      deleteButton.style.borderColor = "#000";
      deleteButton.style.color = "#000";
      deleteButton.style.fill = "#000";
    });
    deleteButton.addEventListener("click", () => {
      itemListInCart.innerHTML = "";
      cart = [];
      total = 0;
      totalBox.innerText = `Tổng số tiền: ${total}`;
    });

    billButton.addEventListener("mouseover", function () {
      billButton.style.borderColor = "white";
      billButton.style.color = "white";
      billButton.style.fill = "white";
    });
    billButton.addEventListener("mouseout", function () {
      billButton.style.borderColor = "#000";
      billButton.style.color = "#000";
      billButton.style.fill = "#000";
    });
    billButton.addEventListener("click", () => {
      if (cart.length <= 0) {
        alert(`Không có hàng để thanh toán`);
      } else {
        alert(`Đã thanh toán thành công`);
      }
    });

    closeButton.addEventListener("mouseover", function () {
      closeButton.style.borderColor = "#40CF32";
      closeButton.style.color = "#40CF32";
      closeButton.style.fill = "#40CF32";
    });
    closeButton.addEventListener("mouseout", function () {
      closeButton.style.borderColor = "#000";
      closeButton.style.color = "#000";
      closeButton.style.fill = "#000";
    });
    closeButton.addEventListener("click", () => {
      overlay.style.display = "none";
      itemListInCart.innerHTML = "";
      total = 0;
    });

    for (let i = 0; i < cart.length; i++) {
      newItemCart = buildItemInCart(cart[i]);
      total += cart[i].price * cart[i].quantity;
      itemListInCart.appendChild(newItemCart);
    }

    totalBox.innerText = `Tổng số tiền: ${total}tr VNĐ`;

    allButtonInCart.appendChild(deleteButton);
    allButtonInCart.appendChild(billButton);
    allButtonInCart.appendChild(totalBox);
    allButtonInCart.appendChild(closeButton);

    overlay.appendChild(allButtonInCart);

    overlay.appendChild(itemListInCart);
  }

  function off() {
    overlay.style.display = "none";
  }

  let iconCart = document.createElement("img");
  iconCart.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2501px-Shopping_cart_icon.svg.png";
  iconCart.style.height = "50px";
  iconCart.style.margin = "auto";
  iconCart.id = "overlay";
  Object.assign(iconCart.style, {
    "align-items": "center",
    "background-color": "#fff",
    border: "5px solid #000",
    "box-sizing": "border-box",
    color: "#000",
    cursor: "pointer",
    display: "inline-flex",
    fill: "#000",
    outline: "0",
    padding: "0 50px",
    transition: "all .3s",
    "user-select": "none",
    "-webkit-user-select": "none",
    "touch-action": "manipulation",
  });
  iconCart.addEventListener("mouseover", function () {
    iconCart.style.borderColor = "#40CF32";
    iconCart.style.color = "#40CF32";
    iconCart.style.fill = "#40CF32";
  });
  iconCart.addEventListener("mouseout", function () {
    iconCart.style.borderColor = "#000";
    iconCart.style.color = "#000";
    iconCart.style.fill = "#000";
  });
  iconCart.addEventListener("click", () => {
    if (cart.length == 0) {
      alert("Không có hàng trong giỏ");
    } else {
      overlay.onclick = on();
    }
  });

  shoppingCart.appendChild(iconCart);
  shoppingCart.appendChild(overlay);
  return shoppingCart;
}
let newCart = makeCart();
container.appendChild(newCart);

//Xây dựng item card trong giỏ hàng
function buildItemInCart(item) {
  let { id, name, description, price, imageURL, quantity } = item;

  let itemCard = document.createElement("div");
  Object.assign(itemCard.style, {
    background: "rgb( 245 245 245)",
    "max-width": "400px",
    width: "100%",
    height: "100%",
    margin: "auto",
    "text-align": "left",
    "font-family": "arial",
    "font-size": "1rem",
    display: "flex",
    "align-items": "center",
    "justify-content": "space-evenly",
    "box-sizing": "border-box",
  });

  let itemDetails = document.createElement("div");
  itemDetails.style.padding = "5%";
  itemDetails.style.maxWidth = "200px";

  let itemName = document.createElement("h2");
  itemName.style.margin = 0;
  itemName.innerHTML = name;

  let itemPrice = document.createElement("p");
  itemPrice.style.fontWeight = "550";
  itemPrice.innerHTML = price + "tr VNĐ";

  let itemQuantity = document.createElement("p");
  itemQuantity.style.fontSize = "15px";
  itemQuantity.innerHTML = `Số lượng: ${quantity}`;

  itemDetails.appendChild(itemName);
  itemDetails.appendChild(itemPrice);
  itemDetails.appendChild(itemQuantity);

  itemCard.appendChild(itemDetails);

  let itemPic = document.createElement("img");
  itemPic.src = imageURL;
  itemPic.alt = "Watch";
  itemPic.style.width = "30%";
  itemCard.appendChild(itemPic);

  return itemCard;
}

//Tạo mục loại
function makeChooseType() {
  let typeOption = ["Tất cả", "Cổ điển", "Chuyên dụng"];
  let chooseType = document.createElement("div");
  chooseType.style.display = "flex";
  chooseType.style.alignItems = "center";
  chooseType.style.justifyContent = "center";
  chooseType.style.margin = "3%";
  for (let i = 0; i < typeOption.length; i++) {
    let optionButton = document.createElement("text");
    optionButton.innerHTML = typeOption[i];
    optionButton.style.border = "none";
    optionButton.style.fontSize = "1rem";
    optionButton.style.fontWeight = "650";
    optionButton.style.margin = "0 3% 0 3%";

    chooseType.appendChild(optionButton);
  }
  return chooseType;
}
let newChooseType = makeChooseType();
container.appendChild(newChooseType);

//Xây dựng item card
function buildItemCard(item) {
  let { id, name, description, price, imageURL } = item;

  let itemCard = document.createElement("div");
  Object.assign(itemCard.style, {
    background: "rgb( 245 245 245)",
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

  let itemDetails = document.createElement("div");
  itemDetails.style.padding = "5%";

  let itemName = document.createElement("h2");
  itemName.style.margin = 0;
  itemName.innerHTML = name;

  let itemDescrip = document.createElement("p");
  itemDescrip.innerHTML = description;

  let itemPrice = document.createElement("p");
  itemPrice.style.fontWeight = "550";
  itemPrice.innerHTML = price + "tr VNĐ";

  let button = document.createElement("button");
  button.innerText = "Thêm vào giỏ";
  Object.assign(button.style, {
    "align-items": "center",
    "background-color": "#fff",
    border: "2px solid #000",
    "box-sizing": "border-box",
    color: "#000",
    cursor: "pointer",
    display: "inline-flex",
    fill: "#000",
    "font-family": "Inter,sans-serif",
    "font-size": "16px",
    "font-weight": "600",
    height: "48px",
    "justify-content": "center",
    "letter-spacing": "-.8px",
    "line-height": "24px",
    "min-width": "140px",
    outline: "0",
    padding: "0 17px",
    "text-align": "center",
    "text-decoration": "none",
    transition: "all .3s",
    "user-select": "none",
    "-webkit-user-select": "none",
    "touch-action": "manipulation",
    "min-width": "170px",
  });
  button.addEventListener("mouseover", function () {
    button.style.borderColor = "#40CF32";
    button.style.color = "#40CF32";
    button.style.fill = "#40CF32";
  });
  button.addEventListener("mouseout", function () {
    button.style.borderColor = "#000";
    button.style.color = "#000";
    button.style.fill = "#000";
  });
  button.addEventListener("click", () => {
    addItemtoCart(item);
  });

  itemDetails.appendChild(itemName);
  itemDetails.appendChild(itemDescrip);
  itemDetails.appendChild(itemPrice);
  itemDetails.appendChild(button);

  itemCard.appendChild(itemDetails);

  let itemPic = document.createElement("img");
  itemPic.src = imageURL;
  itemPic.alt = "Watch";
  itemPic.style.width = "48%";
  itemCard.appendChild(itemPic);

  return itemCard;
}

//Xây dựng item list
function makeItemList() {
  let itemList = document.createElement("div");
  itemList.style.display = "grid";
  itemList.style.gridGap = "1rem";
  itemList.style.gridTemplateColumns = "repeat(auto-fit, minmax(400px, 1fr))";

  class Watch {
    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {string} description
     * @param {number} price
     * @param {string} imageURL
     */
    constructor(id, name, description, price, imageURL) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageURL = imageURL;
    }
  }

  /**
   * @param {Array} Watch
   */

  let listOfWatches = [...data];

  for (let i = 0; i < listOfWatches.length; i++) {
    let newItemCard = buildItemCard(listOfWatches[i]);
    itemList.appendChild(newItemCard);
  }

  return itemList;
}
let newItemList = makeItemList();
container.appendChild(newItemList);
