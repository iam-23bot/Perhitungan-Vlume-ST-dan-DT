document.getElementById("volumeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    var tank = document.getElementById("tank").value;
    var height_mm = parseFloat(document.getElementById("height").value);

    if (height_mm <= 0 || isNaN(height_mm)) {
        alert("Masukkan tinggi air yang valid dalam mm!");
        return;
    }

    var height_m = height_mm / 1000; // Konversi mm ke m
    var phi = 3.14;
    var radius = (tank === "service") ? 6.7 : 5;
    var volume = phi * Math.pow(radius, 2) * height_m; // Rumus volume silinder

    document.getElementById("result").innerText = `Volume Air: ${volume.toFixed(3)} m³`;
});
