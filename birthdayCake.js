const { rejects } = require("assert");
const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function wait(second) {
  let waitPromise = new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver();
    }, second * 1000);
  });
  return waitPromise;
}

let name;
let age;
let size;
let priceS = 169000;
let priceM = 233000;
let priceL = 510000;
let cakePrice;
let moneyGet;

function inputInfor() {
  return new Promise(async (resolve, rejects) => {
    console.log("Bắt đầu nhập dữ liệu");
    console.log("============================");

    console.log("Hãy nhập tên: ");
    name = await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        resolve(input);
      });
    });

    console.log("Hãy nhập tuổi: ");
    age = await new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        resolve(parseInt(input));
      });
    });

    // if (moneyGet >= priceL) {
    //   size = "L";
    //   cakePrice = 510000;
    // } else if (moneyGet >= priceM) {
    //   size = "M";
    //   cakePrice = 233000;
    // } else if (moneyGet >= priceS) {
    //   size = "S";
    //   cakePrice = 169000;
    // }

    if (name != "" && age > 0 && size != "") {
      resolve("Dữ liệu nhập thành công \n----------------------------");
    } else {
      rejects("Dữ liệu nhập không thành công \n----------------------------");
    }

    rl.close();
  });
}

async function askForMoney() {
  return new Promise(async (resolve, rejects) => {
    console.log("Xin tiền mẹ mua bánh: ");

    await new Promise((resolve, rejects) => {
      rl.on("line", (input) => {
        moneyGet = parseInt(input);
        resolve();
      });
    });

    if (moneyGet >= priceL) {
      size = "L";
      cakePrice = 510000;
      resolve("Ok đủ tiền mua bánh size L <3 \n----------------------------");
    } else if (moneyGet >= priceM) {
      size = "M";
      cakePrice = 233000;
      resolve("Ok đủ tiền mua bánh size M <3 \n----------------------------");
    } else if (moneyGet >= priceS) {
      size = "S";
      cakePrice = 169000;
      resolve("Ok đủ tiền mua bánh size S <3 \n----------------------------");
    } else {
      rejects("Không đủ tiền mua bánh :_( \n----------------------------");
    }
  });
}

async function goBuyIngrediants() {
  console.log("Đi mua nguyên liệu");
  await wait(4);
  console.log("Mua xong, bắt đầu đi về");
  await wait(4);
  console.log("Đã về tới nhà");
  console.log("----------------------------");
}

async function cookingTime() {
  async function soChe() {
    return new Promise(async (resolve, reject) => {
      console.log("Sơ chế nguyên liệu \n----------------------------");
      console.log("1.Tách trứng");
      console.log("2.Ray bột");
      console.log("3.Chuẩn bị gia vị");
      await wait(5);
      console.log("Sơ chế hoàn thành \n----------------------------");
      resolve();
    });
  }
  async function chuanbiBanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Làm bột bánh");
      await wait(5);
      console.log("Đánh kem");
      await wait(5);
      console.log("Bánh làm xong 50% \n----------------------------");
      resolve();
    });
  }
  async function lamBanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Ủ bánh");
      await wait(5);
      console.log("Đổ khuôn");
      await wait(5);
      console.log("Nướng bánh");
      await wait(5);
      console.log("Bánh làm xong 75% \n----------------------------");
      resolve();
    });
  }

  await soChe();
  await chuanbiBanh();
  await lamBanh();
}

async function decorateCake() {
  console.log("Quết kem");
  await wait(3);
  console.log("Trang trí");
  await wait(3);
  console.log("Viết tên lên bánh");
  await wait(3);
  console.log("Xong trang trí");
  console.log("Bánh làm xong 100% \n----------------------------");
}

async function eatCake() {
  console.log("Quất cái bánh!!!!!");
  await wait(1);
  console.log("============================");
}

let main = async function () {
  await askForMoney()
    .then(async (value) => {
      console.log(value);
      await inputInfor()
        .then(async (value) => {
          console.log(value);
          console.log(
            `Thông tin bánh: \nTên: ${name} | Tuổi: ${age} | Size: ${size} | Price: ${cakePrice}
            \n============================`
          );
          await goBuyIngrediants();
          await cookingTime();
          await decorateCake();
          await eatCake();
        })
        .catch((value) => {
          console.log(value);
        });
    })
    .catch((value) => {
      console.log(value);
      console.log("Nghèo");
    });
};

main();
