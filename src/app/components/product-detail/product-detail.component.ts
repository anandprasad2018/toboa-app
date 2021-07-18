import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [   
    { field: 'Products',resizable: true,filter: true },
    { field: "Image"}
   
];

rowData = [
    { Products: 'Food And Agro Products', Image:""},
    { Products: 'Spices' },
    {  Products: 'Electric Power Tools' },
    {  Products: 'Household Items' }, 
    {  Products: 'Tools' },
    {  Products: 'Light And Heavy Machineries' }
    
];



}
