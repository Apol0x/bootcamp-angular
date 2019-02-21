import { Vets } from '../../models/vets';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetsService } from 'src/app/search/vets.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  errorMessage: string;
  vets: Array<Vets>;
  constructor(private route: ActivatedRoute, private router: Router, private vetsService: VetsService) { 
  }

  ngOnInit() {
    this.vetsService.getVets().subscribe(
      data => {this.vets=data;}
    )
  }

}
