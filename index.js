const slides = document.querySelectorAll('.slideshow img'); // 获取所有图片元素
const dots = document.querySelectorAll('.dot'); // 获取所有圆点元素
const prev = document.querySelector('.prev'); // 获取上一页按钮元素
const next = document.querySelector('.next'); // 获取下一页按钮元素

let slideIndex = 0; // 当前显示的图片索引
let timer; // 定时器变量

showSlides(slideIndex); // 显示当前图片

function showSlides(n) { // 定义showSlides函数，n表示要显示的图片索引
  clearTimeout(timer); // 清除定时器
  if (n < 0) { // 如果n小于0，则将当前图片索引设置为最后一张图片
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) { // 如果n大于等于图片数量，则将当前图片索引设置为第一张图片
    slideIndex = 0;
  } else { // 否则将当前图片索引设置为n
    slideIndex = n;
  }
  for (let i = 0; i < slides.length; i++) { // 遍历所有图片元素
    slides[i].style.display = 'none'; // 将元素隐藏
  }
  for (let i = 0; i < dots.length; i++) { // 遍历所有圆点元素
    dots[i].classList.remove('active'); // 将所有圆点的active类删除
  }
  slides[slideIndex].style.display = 'block'; // 显示当前图片
  dots[slideIndex].classList.add('active'); // 将当前圆点添加active类
  timer = setTimeout(() => { // 设置定时器
    showSlides(slideIndex + 1); // 显示下一张图片
  }, 3000); // 每3秒执行一次
}

prev.addEventListener('click', () => { // 给上一页按钮添加点击事件
  showSlides(slideIndex - 1); // 显示上一张图片
});

next.addEventListener('click', () => { // 给下一页按钮添加点击事件
  showSlides(slideIndex + 1); // 显示下一张图片
});

for (let i = 0; i < dots.length; i++) { // 遍历所有圆点元素
  dots[i].addEventListener('click', () => { // 给圆点元素添加点击事件
    showSlides(i); // 显示对应的图片
  });
}