const tg = window.Telegram?.WebApp;

if (tg) tg.expand();

const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {

    const user = tg?.initDataUnsafe?.user;

    const leadText =
`NEW LEAD

Name: ${user?.first_name || "HYTEC Admin Leads"}
Username: @${user?.username || "@skyleryun_08"}
Telegram ID: ${user?.id || "-1003953400781"}

Service: General Inquiry`;

    alert("Quotation sent!");

    tg.sendData(leadText);
});