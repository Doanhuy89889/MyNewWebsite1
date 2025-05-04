// Booking
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('infoForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const fullname = document.getElementById('fullname').value.trim();
      const dob = document.getElementById('dob').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('address').value.trim();

      if (!fullname || !dob || !phone || !email || !address) {
          alert('⚠️ Vui lòng điền đầy đủ thông tin trước khi xác nhận.');
          return;
      }
      const bookingType = localStorage.getItem('bookingType'); // tour hoặc flight
      window.location.href = 'payment.html';
      calculateTotal();
})});
