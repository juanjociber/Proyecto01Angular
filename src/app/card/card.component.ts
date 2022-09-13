import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RHFQUDI2ZVEJ3HQB2H2LPTW3R4.jpg"
  public Titulo:string="Curso de Angular con Interpolación";
  constructor() { }

  ngOnInit(): void {
  }

}
