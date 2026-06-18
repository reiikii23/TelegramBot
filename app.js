const tg = window.Telegram?.WebApp;

if (tg) {
    tg.expand();
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const user = tg?.initDataUnsafe?.user;

    const lead = {
        telegram_id: user?.id || null,
        name: user?.first_name || "Unknown",
        username: user?.username || null,
        service: "General Inquiry",
        timestamp: new Date().toISOString()
    };

    console.log("Lead captured:", lead);

    alert("Inquiry sent. Our team will contact you.");
});