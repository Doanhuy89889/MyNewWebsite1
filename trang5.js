
// Định dạng ngày từ "YYYY-MM-DD" → "DD/MM/YYYY"
function formatDateYMD2DMY(ymd) {
  const [y, m, d] = ymd.split('-');
  return `${d.padStart(2,'0')}/${m.padStart(2,'0')}/${y}`;
}

// Tìm và lọc danh sách chuyến bay
function searchFlight() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const trip = document.querySelector('input[name="trip"]:checked').value;
  const depDateVal = document.getElementById('departure-date').value;
  const retDateVal = document.getElementById('return-date').value;

  const depDateFormatted = depDateVal ? formatDateYMD2DMY(depDateVal) : '';
  const retDateFormatted = retDateVal ? formatDateYMD2DMY(retDateVal) : '';

  const flights = document.querySelectorAll('.flight');
  let anyVisible = false;

  flights.forEach(f => {
    // Lấy thông tin khoá để so khớp
    const infoDiv = f.querySelector('.flight-information > div');
    const codes = infoDiv.querySelectorAll('h3');
    const flightFrom = codes[0].textContent.trim();
    const flightTo   = codes[1].textContent.trim();

    const dateDivs = f.querySelectorAll('.flight-date > div');
    const flightDep = dateDivs[1].querySelector('p').textContent.trim(); // Ngày đi
    const flightRet = dateDivs[2].querySelector('p').textContent.trim(); // Ngày về
    const flightType= dateDivs[3].querySelector('p').textContent.trim(); // Loại vé

    let ok = true;

    // So khớp điểm đi/đến
    if (from && flightFrom !== from) ok = false;
    if (to   && flightTo   !== to)   ok = false;

    // So khớp loại vé
    if (trip === 'round'   && flightType !== 'Khứ hồi') ok = false;
    if (trip === 'oneway'  && flightType !== 'Một chiều') ok = false;

    // So khớp ngày đi
    if (depDateFormatted && flightDep !== depDateFormatted) ok = false;
    // Nếu khứ hồi thì so khớp ngày về
    if (trip === 'round' && retDateFormatted && flightRet !== retDateFormatted) ok = false;

    // Hiển thị hoặc ẩn
    if (ok) {
      f.style.display = '';
      anyVisible = true;
    } else {
      f.style.display = 'none';
    }
  });

  // Nếu không có kết quả nào
  document.getElementById('no-results').style.display = anyVisible ? 'none' : 'block';
}

// Đặt lại form và hiển thị lại tất cả chuyến bay
function resetSearch() {
  document.getElementById('flight-search-form').reset();
  toggleReturnDate(true);  // Khôi phục về Khứ hồi
  document.getElementById('no-results').style.display = 'none';
  document.querySelectorAll('.flight').forEach(f => f.style.display = '');
}
