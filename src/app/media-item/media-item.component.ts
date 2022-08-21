import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
    console.log('Deleted');
  }

  constructor() { }

  ngOnInit() {
  }

}
