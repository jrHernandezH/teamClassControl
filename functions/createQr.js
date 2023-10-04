let qrcode = new QRCode(
    document.getElementById("qr-container"),
    {
        width: 300,
        height: 300,
    }
);

document.getElementById('input-text').addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document
            .getElementById("btn-generate").click();
    }
});

document
    .getElementById("btn-generate")
    .addEventListener("click", function () {
        let text =
            document.getElementById("input-text").value;
        qrcode.makeCode(text, {
            width: 300,
            height: 300,
            errorCorrectionLevel: "H",
            format: "utf-8",
        });
    });