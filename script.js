document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('img').style.transform = 'scale(1.1)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.querySelector('img').style.transform = 'scale(1)';
    });
  });
  // Update waktu setiap detik
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Memanggil fungsi untuk pertama kali
  updateClock();
  
  // Memanggil fungsi setiap detik
  setInterval(updateClock, 1000);
  