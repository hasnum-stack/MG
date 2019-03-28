//根据设计图设置对应的rem
(function () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 * 100 + 'px';
}())
//添加header
(function () {
  let con = `
  <div class="logo">
    <div class="back">
      <img src="./images/icon_back.svg" alt="">
    </div>
  </div>
  `
  let header = document.querySelector('header');
  header.innerHTML = con;
}())