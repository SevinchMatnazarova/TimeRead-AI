// Registratsiya funksiyasi
function handleRegister() {
    const name = document.getElementById('rName').value;
    const email = document.getElementById('rEmail').value;

    if (name && email) {
        localStorage.setItem('timeread_user', JSON.stringify({ name, email }));
        window.location.href = "profile.html";
    } else {
        alert("Iltimos, ism va emailni kiriting!");
    }
}

// Sahifa yuklanganda ishlash
document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem('timeread_user'));
    const path = window.location.pathname;

    // Ismni chiqarish (faqat profil sahifasida)
    if (user && document.getElementById('userName')) {
        document.getElementById('userName').innerText = user.name;
        document.getElementById('avatar').innerText = user.name.charAt(0).toUpperCase();
    }

    // Agar login qilgan bo'lsa va auth yoki indexda bo'lsa profilga yuborish
    if (user && (path.includes("auth.html") || (path.includes("index.html") && !path.includes("profile")))) {
        // Ixtiyoriy: Avtomatik yo'naltirish
    }
});

// Chiqish funksiyasi
function logout() {
    localStorage.removeItem('timeread_user');
    window.location.href = "index.html";
}
function sendMessage() {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const successMsg = document.getElementById('successMsg');
    const form = document.getElementById('contactForm');

    if (name && message) {
        // Bu yerda xabarni konsolga chiqaramiz (keyinchalik bazaga yuborish mumkin)
        console.log("Yangi xabar:", {
            ism: name,
            turi: subject,
            matn: message,
            vaqt: new Date().toLocaleString()
        });

        // Formani yashirish va muvaffaqiyat xabarini ko'rsatish
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');

        // 3 soniyadan keyin qaytadan formani ochish (ixtiyoriy)
        setTimeout(() => {
            form.reset();
            form.classList.remove('hidden');
            successMsg.classList.add('hidden');
        }, 4000);

    } else {
        alert("Iltimos, ismingiz va xabarni to'ldiring!");
    }
}