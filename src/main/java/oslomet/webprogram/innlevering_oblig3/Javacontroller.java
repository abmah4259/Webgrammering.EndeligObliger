package oslomet.webprogram.innlevering_oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Javacontroller {
    //For å regiterer inn nye kunder
    @Autowired
    private BilettRepository rep;

    @GetMapping("/LagreOpplysninger")
    public void lagre(Bilettkunde innkunde){
        rep.LagreNyKunde(innkunde);
    }
    @GetMapping("/Hentekunder")
    public List<Bilettkunde> VisKunder(){
        return rep.HentAllekunder();
    }

    @GetMapping("/Slett")
    //@DeleteMapping("/Slett/{id}")
    public void slett() {
        rep.slettkunde();
    }

}
