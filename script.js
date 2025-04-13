document.addEventListener('DOMContentLoaded', function() {
    // 下载按钮点击事件
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // 跳转到Bing搜索WinDynamicIsland下载
            window.open('https://www.bing.com/search?q=WinDynamicIsland+download', '_blank');
        });
    }

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 顶部应用栏滚动效果
    const topAppBar = document.querySelector('.top-app-bar');
    if (topAppBar) {
        let lastScrollPosition = 0;
        
        window.addEventListener('scroll', function() {
            const currentScrollPosition = window.pageYOffset;
            
            if (currentScrollPosition <= 0) {
                // 在页面顶部
                topAppBar.style.boxShadow = 'none';
            } else if (currentScrollPosition > lastScrollPosition) {
                // 向下滚动
                topAppBar.style.transform = 'translateY(-100%)';
            } else {
                // 向上滚动
                topAppBar.style.transform = 'translateY(0)';
                topAppBar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
            
            lastScrollPosition = currentScrollPosition;
        });
    }

    // 特性卡片悬停效果
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});