document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.sidebar-nav > li > a'); // เลือกเฉพาะลิงก์ในเมนู
  const currentPageKey = 'currentPage'; // กุญแจสำหรับ localStorage

  // ตรวจสอบว่ามีหน้าที่บันทึกไว้ใน localStorage หรือไม่
  const currentPage = localStorage.getItem(currentPageKey);
  if (currentPage) {
    // หา <a> ที่ href ตรงกับหน้าใน localStorage
    const activeLink = document.querySelector(`.sidebar-nav > li > a[href="${currentPage}"]`);
    if (activeLink) {
      // ล้าง active ก่อนเพิ่มใหม่
      document.querySelectorAll('.sidebar-nav > li').forEach(li => li.classList.remove('active'));
      activeLink.parentElement.classList.add('active');
    }
  }

  // เพิ่ม Event Listener ให้กับทุกลิงก์
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // ล้าง active ออกจากทุกลิงก์
      document.querySelectorAll('.sidebar-nav > li').forEach(li => li.classList.remove('active'));

      // เพิ่ม active ให้กับลิงก์ที่คลิก
      link.parentElement.classList.add('active');

      // บันทึกหน้าที่เลือกใน localStorage
      localStorage.setItem(currentPageKey, link.getAttribute('href'));

      // ป้องกันการเปิดแท็บใหม่โดยไม่ได้ตั้งใจ
      if (link.getAttribute('target') === '_blank') {
        e.preventDefault();
        window.location.href = link.getAttribute('href');
      }
    });
  });

  
  // ตรวจสอบและบังคับลบ target="_blank" จากทุกลิงก์ในเมนู
  navLinks.forEach(link => {
    link.removeAttribute('target');
  });
});


// กำหนดค่าให้กับ span ที่มี id "currentYear"
document.addEventListener("DOMContentLoaded", function() {
  const currentYear = new Date().getFullYear(); // รับปีปัจจุบัน
  document.getElementById("currentYear").textContent = currentYear; // กำหนดค่าลงใน span
});