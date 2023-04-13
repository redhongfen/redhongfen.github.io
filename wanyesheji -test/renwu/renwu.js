// 定义函数 showDetails，用于显示/隐藏人物的详细介绍
function showDetails(id) {
	// 获取所有卡片和详细介绍元素
	var cards = document.querySelectorAll(".card"); // 获取所有卡片元素
	var details = document.querySelectorAll(".details"); // 获取所有详细介绍元素
  
	// 遍历所有卡片
	for (var i = 0; i < cards.length; i++) {
	  var card = cards[i]; // 获取当前卡片元素
	  var detail = details[i]; // 获取当前卡片对应的详细介绍元素
	  if (i + 1 == id) { // 如果当前卡片是被点击的卡片
		if (detail.classList.contains("show")) {
		  // 如果当前卡片的详细介绍已经显示，则隐藏它的详细介绍
		  card.classList.remove("selected"); // 移除卡片元素的 "selected" 类
		  detail.classList.remove("show"); // 移除详细介绍元素的 "show" 类
		} else {
		  // 如果当前卡片的详细介绍未显示，则显示它的详细介绍
		  card.classList.add("selected"); // 添加卡片元素的 "selected" 类
		  detail.classList.add("show"); // 添加详细介绍元素的 "show" 类
		}
	  } else {
		// 如果当前卡片未被选中，隐藏它的详细介绍
		card.classList.remove("selected"); // 移除卡片元素的 "selected" 类
		detail.classList.remove("show"); // 移除详细介绍元素的 "show" 类
	  }
	}
  }