function goToTourPage(url){
    window.location.href = url;
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Tự động áp dụng theme khi tải lại trang
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme'); // Mặc định là sáng
    }
});
//bai mau tim kiem duoc
// document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     document.body.classList.add(savedTheme + '-theme');

//     const regionSelect = document.getElementById('region-select');
//     if (regionSelect) {
//         regionSelect.addEventListener('change', function() {
//             const selectedRegion = this.value;
//             const tourItems = document.querySelectorAll('.tour-item');
//             tourItems.forEach(item => {
//                 const itemRegion = item.getAttribute('data-region');
//                 item.style.display = (selectedRegion === 'all' || selectedRegion === itemRegion) ? 'block' : 'none';
//             });
//         });
//     }
// });
