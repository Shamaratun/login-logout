import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../pages/header/header.component";
import { FooterComponent } from "../../pages/common/footer/footer.component";
import { CommonModule } from '@angular/common';

interface Offer {
  offerId: number;
  offerName: string;
  price: number;
  discount: number; // e.g., 0.15 for 15%
  startDate: Date | string;
  endDate: Date | string;
}
@Component({
  selector: 'app-offer',
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent implements OnInit {
  offers: Offer[] = [];
  
  ngOnInit() {
  this.offers.forEach(offer => {
    offer.startDate = new Date(offer.startDate);
    offer.endDate = new Date(offer.endDate);
  });
}

}
