package oslomet.webprogram.innlevering_oblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BilettRepository {

    @Autowired
    private JdbcTemplate db;
    public void LagreNyKunde (Bilettkunde innkunde){
        String SQL = "INSERT INTO Bilettkunde(film, fornavn, etternavn, antall, telefon, epost) VALUES (?,?,?,?,?,?);";
        db.update(SQL,innkunde.getFilm(),innkunde.getFornavn(),innkunde.getEtternavn(), innkunde.getAntall(), innkunde.getTelefon(), innkunde.getEpost());
    }
    public List<Bilettkunde> HentAllekunder() {
        String SQL = "SELECT * FROM Bilettkunde";
        List <Bilettkunde> AlleKunder = db.query(SQL, new BeanPropertyRowMapper<>(Bilettkunde.class));
        return AlleKunder;
    }
    public void slettkunde(){
        //Slette en kunde om gangen
        String SQL = "DELETE FROM Bilettkunde ";
        db.update(SQL);
    }
}
