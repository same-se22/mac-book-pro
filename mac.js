///*************************** [declare all variable] ********************************************////

const memoryRegular = document.getElementById("memory-8");
const memoryExtra = document.getElementById("memory-16");
const storageRegular = document.getElementById("storage-256");
const storageMedium = document.getElementById("storage-512");
const storageHigh = document.getElementById("storage-1tb");
const delFree = document.getElementById("free-delivery");
const delPaid = document.getElementById("with-delivery");

const bestPrice = document.getElementById("best-price");
const extraMemoryPrice = document.getElementById("extra-memory");
const extraStoragePrice = document.getElementById("extra-storage");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");

const promoPrice = document.getElementById("total-amount");

function isClicked(prices) {
  return prices.classList.contains("clicked");
}

function priceTotal() {
  const bestPriceText = bestPrice.innerText;
  const extraMemoryPriceText = extraMemoryPrice.innerText;
  const extraStoragePriceText = extraStoragePrice.innerText;
  const deliveryChargeText = deliveryCharge.innerText;

  const bestPriceAmount = parseInt(bestPriceText);
  const extraMemoryPriceAmount = parseInt(extraMemoryPriceText);
  const extraStoragePriceAmount = parseInt(extraStoragePriceText);
  const deliveryChargeAmount = parseInt(deliveryChargeText);
  const totalPriceAmount = bestPriceAmount + extraMemoryPriceAmount + extraStoragePriceAmount + deliveryChargeAmount;
  
  return totalPriceAmount;

}
///*************************** [update price] ********************************************////

function updatePrice() {
  const totalValue = priceTotal();
  totalPrice.innerText = totalValue;
  promoPrice.innerText = totalValue;
}
///*************************** [memory event handeler] ********************************************////
//8 Gb
memoryRegular.addEventListener("click", function () {
  bestPrice.innerText = 1299;
  extraMemoryPrice.innerText = 0;
  if (!isClicked(memoryRegular)) {
    memoryRegular.classList.add("clicked");
    memoryExtra.classList.remove("clicked");
  }
  updatePrice();
});

//16Gb
memoryExtra.addEventListener("click", function () {
  extraMemoryPrice.innerText = 180;
  if (!isClicked(memoryExtra)) {
    memoryRegular.classList.remove("clicked");
    memoryExtra.classList.add("clicked");
  }
  updatePrice();
});
///*************************** [ Storage event handeler] ********************************************////
// 256 Gb Storage
storageRegular.addEventListener("click", function () {
  extraStoragePrice.innerText = 0;
  if (!isClicked(storageRegular)) {
    storageRegular.classList.add("clicked");
    storageMedium.classList.remove("clicked");
    storageHigh.classList.remove("clicked");
  }
  updatePrice();
});
// 512 Gb Storage
storageMedium.addEventListener("click", function () {
  extraStoragePrice.innerText = 100;
  if (!isClicked(storageMedium)) {
    storageRegular.classList.remove("clicked");
    storageMedium.classList.add("clicked");
    storageHigh.classList.remove("clicked");
  }
  updatePrice();
});
// 1 Tb Storage
storageHigh.addEventListener("click", function () {
  extraStoragePrice.innerText = 180;
  if (!isClicked(storageHigh)) {
    storageRegular.classList.remove("clicked");
    storageMedium.classList.remove("clicked");
    storageHigh.classList.add("clicked");
  }
  updatePrice();
});
///*************************** [Delivery event handeler] ********************************************////
//Free delivery
delFree.addEventListener("click", function () {
  deliveryCharge.innerText = 0;
  if (!isClicked(delFree)) {
    delFree.classList.add("clicked");
    delPaid.classList.remove("clicked");
  }
  updatePrice();
});
///*************************** [With Delivery Charge] ********************************************////

delPaid.addEventListener("click", function () {
  deliveryCharge.innerText = 20;
  if (!isClicked(delPaid)) {
    delFree.classList.remove("clicked");
    delPaid.classList.add("clicked");
  }
  updatePrice();
});
///*************************** [Promo code event handeler] ********************************************////

document.getElementById("promo-btn").addEventListener("click", function () {
  const totalValue = priceTotal();
  const inputId = document.getElementById("promo-id");
  const inputIdValue = inputId.value;
  const promoCode = "stevekaku";
  if (inputIdValue == promoCode) {
    const discount = totalValue / 4;
    const afterDiscount = totalValue - discount;
    promoPrice.innerText = afterDiscount;
  } else {
    promoPrice.innerText = totalValue;
  }
  ///*************************** [clear input] ********************************************////
  
  inputId.value = "";
});
