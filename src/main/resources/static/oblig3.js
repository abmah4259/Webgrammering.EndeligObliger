

function KjopBilett() {
    //variabler for å se om det er noen feil i koden
    console.log("kjopBilett() er kalt")
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const epost = $("#epost").val();
    const telefon = $("#telefon").val();
    const antall = $("#antall").val();
    const film = $("#film").val();
    let feilmelding = false;


    const EpostPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const TelefonPattern = /^\d{8}$/;

    if (!TelefonPattern.test(telefon)) {
        $("#telefonError").text("Ikke et tlf, skriv inn et telefonr");
        feilmelding = true;
    } else {
        $("#telefonError").text("");
    }
    if (!EpostPattern.test(epost)) {
        $("#epostError").text("Ikke en gyldig, skriv inn en gyldig epost");
        feilmelding = true;
    } else {
        $("#epostError").text("");
    }

    if (fornavn === "") {
        $("#fornavnError").text("Du må skrive inn fornavn");
        feilmelding = true;
    } else {
        $("#fornavnError").text("");
    }
    if (etternavn === "") {
        $("#etternavnError").text("Du må skrive inn fornavn");
        feilmelding = true;
    } else {
        $("#etternavnError").text("");
    }
    if (antall === "") {
        $("#antallError").text("Du må skrive inn et antall");
        feilmelding = true;
    } else {
        $("#antallError").text("");
    }


    let kunde = {
        film: film,
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        antall: antall,
        telefon: telefon

    } //opprette en array med alle inputtene, brukes til feilmeldinger.

    if (!feilmelding) {
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#epost").val("");
        $("#telefon").val("");
        $("#antall").val("");
        $("#film").val("");


        //sender til serveren ved bruk av post
        $.get("/LagreOpplysninger", kunde, function () {
            Hentnykunder();
        });
    }
}

function Hentnykunder() {
    $.get("/Hentekunder", function (Biletter) {
        Viskunder(Biletter);
        console.log(Biletter)

    });
}

function Viskunder(Biletter) {
    console.log("table");
    let ut = "<table class='table table-striped'>";
    ut += "<tr><td>Film</td><td>Billetter</td>" + "<td>Fornavn</td><td>Etternavn</td><" + "td>Epost</th><td>Telefon</td></tr>";
    for (let bilett of Biletter) {
        ut += "<tr>" +
            "<td>" + bilett.film + "</td>" +
            "<td>" + bilett.antall + "</td>" +
            "<td>" + bilett.fornavn + "</td>" +
            "<td>" + bilett.etternavn + "</td>" +
            "<td>" + bilett.epost + "</td>" +
            "<td>" + bilett.telefon + "</td>" + "</tr>";

    }
    ut += "</table>";
    document.getElementById("kunder").innerHTML = ut;
}
//slett objekter fra tabellen/arrayet
function Slett() {
    $.get("/Slett", function () {
        Hentnykunder();
    });
}
/*function Slett(id) {
    // Bekreft med brukeren før du sletter billetten
    const confirmed = confirm("Er du sikker på at du vil slette denne billetten?");

    if (confirmed) {
        // Bruk billettens ID for å sende en DELETE-forespørsel til serveren
        $.ajax({
            url: `/Slett/${id}`, // Endre URL-en i henhold til serverens API for å slette billetter
            type: "DELETE",
            success: function() {
                // Hvis billetten slettes vellykket, oppdater listen over billetter
                Hentnykunder();
            },
            error: function() {
                // Håndter eventuelle feil som måtte oppstå
                alert("Noe gikk galt under sletting av billetten. Prøv på nytt senere.");
            }
        });
    }
}*/


