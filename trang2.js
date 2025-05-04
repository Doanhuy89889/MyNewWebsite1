// Loc danh sach 
document.getElementById('region-select').addEventListener('change', function() {
    var selectedRegion = this.value;
    var tourItems = document.querySelectorAll('.tour-item');

  // Duyệt qua từng tour-item và kiểm tra khu vực
    tourItems.forEach(function(item) {
    var itemRegion = item.getAttribute('data-region');

    // Kiểm tra và hiển thị/ẩn các tour-item
    if (selectedRegion === 'all' || selectedRegion === itemRegion) {
      item.style.display = 'block'; 
    } else {
      item.style.display = 'none';
    }
});
});