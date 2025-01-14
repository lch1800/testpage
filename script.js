// 햄버거 버튼 클릭 시 메뉴 열기/닫기
document.getElementById('hamburger-menu').addEventListener('click', function () {
    const menu = document.querySelector('header .menu ul');
    menu.classList.toggle('left-slide');
    menu.classList.toggle('visible');
  });
  
  // 닫기 버튼(X) 클릭 시 메뉴 닫기
  document.getElementById('close-menu').addEventListener('click', function () {
    const menu = document.querySelector('header .menu ul');
    menu.classList.remove('left-slide');
    menu.classList.remove('visible');
  });
  