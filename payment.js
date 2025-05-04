function getBasePrice() {
  const bookingType = localStorage.getItem('bookingType');
  if (bookingType === 'tour') {
    return parseFloat(localStorage.getItem("selectedTourPrice")) || 0;
  } else if (bookingType === 'flight') {
    return parseFloat(localStorage.getItem("selectedFlightPrice")) || 0;
  }
  return 0;
}

function calculateTotal() {
  const bookingType = localStorage.getItem('bookingType');
  const basePrice = getBasePrice();

  const adult = parseInt(document.getElementById('adultTicket').value) || 0;
  const child = parseInt(document.getElementById('childTicket').value) || 0;
  const baby  = parseInt(document.getElementById('babyTicket').value)  || 0;

  let total = 0;

  if (bookingType === 'tour') {
    total = adult * basePrice + child * basePrice * 0.8 + baby * basePrice * 0.3;
  } else {
    total = adult * basePrice + child * basePrice * 0.75 + baby * basePrice * 0.1;
  }

  document.getElementById('totalPrice').innerText = total.toLocaleString('vi-VN') + ' đ';
}

function handleFlightBooking(btn) {
  selectTicket(btn);
  startBooking('flight');
}

function selectTicket(btn) {
  const selectEl = btn.previousElementSibling;
  const price = selectEl.options[selectEl.selectedIndex].dataset.price;

  localStorage.removeItem('selectedTourPrice');
  localStorage.setItem('selectedFlightPrice', price); // key đã sửa
}

function startBooking(type) {
  localStorage.setItem('bookingType', type);

  if (type === 'tour') {
    const priceText = document.querySelector('.discount-price span')?.innerText || '';
    const tourName = document.querySelector('.tour-info h1')?.innerText || '';
    const cleanPriceTour = priceText.replace(/\./g, '').replace('đ', '').trim();

    localStorage.setItem('selectedTourName', tourName);
    localStorage.setItem('selectedTourPrice', cleanPriceTour);
  }

  // Không cần xử lý flight ở đây nữa
  window.location.href='Booking.html';
}

window.onload = function() {
  calculateTotal();
  document.querySelectorAll('#adultTicket, #childTicket, #babyTicket').forEach(input => {
    input.addEventListener('input', calculateTotal);
  });
};
function toggleBankInfo(show) {
    document.getElementById("bank-info").style.display = show ? "block" : "none";
  }