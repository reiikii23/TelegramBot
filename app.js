const tg = window.Telegram?.WebApp;

if (tg) tg.expand();

const btn = document.getElementById("btn");

button.onclick = () => {
  Telegram.WebApp.sendData("test");
;
`NEW LEAD

Name: ${user?.first_name || "Unknown"}
Username: @${user?.username || "none"}
Telegram ID: ${user?.id}

Service: General Inquiry`;

    alert("Inquiry sent!");

    tg.sendData(leadText);
};