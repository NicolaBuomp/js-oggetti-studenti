/**
 * TODO: Creare un oggetto che descriva uno studente
 * * lo studente avrà  le seguenti proprietà: nome, cognome e età.
 * * Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
 */

$(document).ready(function () {

    var student = {
        nome: "Nicola",
        cognome: 'Buompane',
        età: 23 + ' anni'
    }

    for (var key in student) {

        console.log(key, ':', student[key]);

    }

}); // end ready