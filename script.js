// script.js

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const winHeight = window.innerHeight;
  const docHeight = document.body.offsetHeight;

  if (!document.querySelector(".contact-popup.shown") && scrollTop + winHeight >= docHeight - 10) {
    showContactPopup();
  }
});

function showContactPopup() {
  const popup = document.createElement("div");
  popup.className = "contact-popup shown";
  popup.innerHTML = `
    <p>📩 Let's connect! Call or email me.</p>
    <div class="actions">
      <a href="tel:+919819553244">📞 Call</a>
      <a href="mailto:mahatmeadesh291@gmail.com">✉️ Email</a>
    </div>
    <span class="close-btn">&times;</span>
  `;

  document.body.appendChild(popup);

  popup.querySelector(".close-btn").addEventListener("click", () => {
    popup.remove();
  });
}
