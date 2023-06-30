const home = document.querySelector('.nav_list_li')
const modal = document.querySelector('.modal-bg')
const popup = document.getElementById('popup')
const modalBg = document.querySelector('.modal-bg')
const title = document.getElementById('title')

popup.addEventListener('click',(e)=>{
    modal.classList.toggle('hidden')
    popup.style.display = 'none'
    title.style.display = 'none'
})

modalBg.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal-bg')){
        modal.classList.toggle('hidden')
        popup.style.display = 'block'
        title.style.display = 'block'
    }
})
// var map = document.getElementById("map");
// var markers = [];
// 버튼 클릭 이벤트 핸들러
const commentWriteInput = document.getElementById('comment-write');
const commentWriteBtn = document.querySelector('.comment-write-btn');
const commentContainer = document.querySelector('.comment');
commentWriteBtn.addEventListener('click', () => {
    // 입력된 텍스트 가져오기
    const commentText = commentWriteInput.value;

    // 새로운 댓글 요소 생성
    const newComment = document.createElement('p');
    newComment.textContent = commentText;

    // 새로운 댓글을 comment 요소에 추가
    commentContainer.appendChild(newComment);

    // 입력 필드 초기화
    commentWriteInput.value = '';
});
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

const heart_area = document.getElementById('heart_area');
const white_heart = document.getElementById('white_heart');
const red_heart = document.getElementById('red_heart');
heart_area.addEventListener('click', (e) => {
    if(white_heart.style.display == 'block'){
        white_heart.style.display = 'none';
        red_heart.style.display = 'block';
    }else{
        white_heart.style.display = 'block';
        red_heart.style.display = 'none';
    }
        
})