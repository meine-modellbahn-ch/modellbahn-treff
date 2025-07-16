// Funktion zur Formatierung der Telefonnummer
function formatPhoneNumber(input) {
    // Entfernt alle Nicht-Zahlen
    let cleanedInput = input.value.replace(/\D/g, '');

    // Schneidet auf maximal 10 Zeichen zu
    cleanedInput = cleanedInput.substring(0, 10);

    // Formatiert die Telefonnummer
    const formatted = cleanedInput.replace(
        /^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/,
        function (_, g1, g2, g3, g4) {
            return [g1, g2, g3, g4].filter(Boolean).join(" ");
        }
    );

    // Setzt die formatierte Telefonnummer zurück ins Eingabefeld
    input.value = formatted;
}

// Event-Listener für alle Tel-Inputs hinzufügen
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function () {
        formatPhoneNumber(input);
    });
});