package oslomet.webprogram.innlevering_oblig3;

public class Bilettkunde {
    private int id;
    private String film;
    private String antall;
    private String telefon;
    private String fornavn;
    private String etternavn;
    private String epost;

    public Bilettkunde(){

    }

    public Bilettkunde(String film, String antall, String telefon, String fornavn, String etternavn, String epost, int id) {
        this.film = film;
        this.antall = antall;
        this.telefon = telefon;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public String getAntall() {
        return antall;
    }

    public String getTelefon() {
        return telefon;
    }

    public String getEpost() {
        return epost;
    }

    public String getFilm() {
        return film;
    }
    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public void setFilm(String film) {
        this.film = film;
    }


}
