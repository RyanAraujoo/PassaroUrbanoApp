import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Ofertas } from 'app/shared/Ofertas.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  ofertasTo: Observable<Ofertas[]> | undefined;

  constructor(private ofertasService: OfertasService) { 
    
  }

  ngOnInit() {

  }


  InputValueCaractere(event: string) { this.ofertasTo = this.ofertasService.getOfertaToPesquisa(event)
  
    this.ofertasTo.subscribe(
      (res: Ofertas[] ) => { console.log(res )},
      (error: any) => {console.log("error: " + error)},
      // evento de conclusão a cada observação!
      () => {}
  )
  }
  
  
}
