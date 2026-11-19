document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("#openBtn");
    const envelope = document.querySelector("#envelope");
    const invitation = document.querySelector("#invitation");

    if (!button || !invitation || !envelope) {
        alert("HTML файлдагы элементтер табылган жок!");
        return;
    }

    button.addEventListener("click", function () {

        envelope.classList.add("open");

        invitation.style.display = "block";

        button.textContent = "ЧАКЫРУУ АЧЫЛДЫ";

        setTimeout(function () {
            invitation.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 200);

    });
