import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit, OnChanges {

  // สำหรับ รับค่ามาจาก Parrent Component ในที่นี้รับมาจาก product-detail.component.html
  @Input() productRate: number;
  @Output() productRateItemClick: EventEmitter<string> = new EventEmitter<string>();
  productRateText: string;

  constructor() { }

  ngOnInit(): void {
  }

  // สำหรับเปลี่ยนค่าที่ components ต้อง Implements OnChanges
  ngOnChanges(): void {
    if (this.productRate >= 2000) {
      this.productRateText = "นิยมมาก";
    } else {
      this.productRateText = "นิยมน้อย";
    }
  }
  onRateClick() :void{
    this.productRateItemClick.emit('คนดู : '+ this.productRate);
  }

}
