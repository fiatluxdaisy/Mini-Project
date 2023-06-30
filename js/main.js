const home = document.querySelector('.nav_list_li')
const modal = document.querySelector('.modal-bg')
const popup = document.getElementById('popup')
const modalBg = document.querySelector('.modal-bg')

popup.addEventListener('click', (e) => {
  modal.classList.toggle('hidden')
  popup.style.display = 'none'
})

modalBg.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-bg')) {
    modal.classList.toggle('hidden')
    popup.style.display = 'block'
  }
})

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const lineOne = document.querySelector('nav .menu-btn .line--1');
const lineTwo = document.querySelector('nav .menu-btn .line--2');
const lineThree = document.querySelector('nav .menu-btn .line--3');
const link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
  console.log('clicked');
  nav.classList.toggle('nav-open');
  lineOne.classList.toggle('line-cross');
  lineTwo.classList.toggle('line-fade-out');
  lineThree.classList.toggle('line-cross');
  link.classList.toggle('fade-in');
})
var map = document.getElementById("map");
var markers = [];

// // 이미지 클릭 이벤트 처리


// 마커 클릭 이벤트 처리
// map.addEventListener("click", function (e) {
//   var target = e.target.parentNode;
//   if (target.classList.contains("marker")) {
//     toggleImageZoom(target);
//   }
// });
// 이미지 확대/축소 함수
// function toggleImageZoom(marker) {
//   var mapImage = map.querySelector(".map-image");
//   mapImage.classList.toggle("zoomed");

//   if (mapImage.classList.contains("zoomed")) {
//     // 마커가 찍힌 위치로 확대
//     var markerX = marker.offsetLeft;
//     var markerY = marker.offsetTop;
//     console.log(markerX, markerY)
//     mapImage.style.transformOrigin = markerX +" " + markerY;
//   } else {
//     // 기본 확대 중심으로 복원
//     mapImage.style.transformOrigin = "center";
//   }

// }

var tooltip = document.querySelector(".tooltip");

map.addEventListener("mouseover", function (e) {
  var target = e.target;
  var elements = document.getElementsByClassName("marker");
  let className = target.classList[1]
  if (target.classList.contains("marker")) {
    zoomInImage(className);
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] !== target) {
        elements[i].style.display = "none";
      }
    }

    console.log(className)
    $(`#${className}1`).css('display', 'block')
  }
});


// 마커에서 마우스를 떼었을 때 이벤트 처리
map.addEventListener("mouseout", function (e) {
  var target = e.target;
  var elements = document.getElementsByClassName("marker");
  if (target.classList.contains("marker")) {
    zoomOutImage();
    for (var i = 0; i < elements.length; i++) {
      let className = target.classList[1]
      setTimeout(function (index) {
        elements[index].style.display = "block";
      }, 2000 * 1, i);

      console.log(className)
      $(`#${className}1`).css('display', 'none')
    }
  }
});

console.log($('.marker.korea').css('left'))


// 이미지 확대 함수
function zoomInImage(className) {
  var mapImage = map.querySelector(".map-image");
  mapImage.classList.add("zoomed");

  // 마커의 위치로 확대 중심점 설정
  var markerX = parseFloat($(`.marker.${className}`).css('left'));
  var markerY = parseFloat($(`.marker.${className}`).css('top'));
  var mapWidth = map.offsetWidth;
  var mapHeight = map.offsetHeight;
  var markerLeft = (markerX / mapWidth) * 100;
  var markerTop = (markerY / mapHeight) * 100;
  mapImage.style.transformOrigin = markerLeft + "% " + markerTop + "%";
}

// 이미지 축소 함수
function zoomOutImage() {
  var mapImage = map.querySelector(".map-image");
  mapImage.classList.remove("zoomed");
}

///////////////////////////////////////////////////////////////////////////////////////
// 마커 클릭 이벤트 처리
map.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("korea")) {
    var url = "korea.html";
    window.location.href = url;

  }
})
map.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("china")) {
    var url = "china.html";
    window.location.href = url;
  }
});
map.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("hungary")) {
    var url = "Hungary.html";
    window.location.href = url;
  }
});
map.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("japan")) {
    var url = "Japan.html";
    window.location.href = url;
  }
});
map.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("schweiz")) {
    var url = "Schweiz.html";
    window.location.href = url;
  }
});
map.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("philippines")) {
    var url = "Philippines.html";
    window.location.href = url;
  }
});
///////////////////////////////////////////////////////////////////////////////////////
const userInfo = document.querySelector('.user-info')
const loginOn = document.getElementById('login_on')
const logout = document.getElementById('logout')
loginOn.addEventListener('click', () => {
  loginOn.style.display = 'none'
})
logout.addEventListener('click', () => {
  userInfo.style.display = 'none'
  loginOn.style.display = 'block'
  logout.style.display = 'none'
  alert("로그아웃 되었습니다.")
})