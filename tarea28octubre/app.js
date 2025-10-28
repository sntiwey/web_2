const resultado = document.getElementById("resultado");

function onScanSuccess(decodedText) {
  resultado.textContent = "Resultado: " + decodedText;
}

function onScanError(error) {
}

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  onScanSuccess,
  onScanError
);