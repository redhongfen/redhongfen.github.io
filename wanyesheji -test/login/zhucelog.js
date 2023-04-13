// 获取注册表单和登录表单
const registerForm = document.querySelector('.register-box form');
const loginForm = document.querySelector('.login-box form');

// 为注册表单添加submit事件监听器
registerForm.addEventListener('submit', function(event) {
    // 阻止表单默认的提交行为
    event.preventDefault();
    // 获取必填字段的输入框元素
    const username = document.getElementById('username');
    const fullname = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    
    // 检查必填字段是否为空
    if (!username.value || !fullname.value || !phone.value || !password.value) {
        // 如果有任何必填字段为空，则显示警告信息
        alert('请填写所有必填字段！');
    } else {
        // 如果所有必填字段都填写完整，则可以执行注册操作
        // TODO: 执行注册操作
    }
});

// 为登录表单添加submit事件监听器
loginForm.addEventListener('submit', function(event) {
    // 阻止表单默认的提交行为
    event.preventDefault();
    // 获取必填字段的输入框元素
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');
    
    // 检查必填字段是否为空
    if (!username.value || !password.value) {
        // 如果有任何必填字段为空，则显示警告信息
        alert('请填写所有必填字段！');
    } else {
        // 如果所有必填字段都填写完整，则可以执行登录操作
        // TODO: 执行登录操作
    }
});