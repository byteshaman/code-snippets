import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-scss';

@Component({
  selector: 'app-prism-codeblock',
  templateUrl: './prism-codeblock.component.html',
  styleUrls: ['./prism-codeblock.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PrismCodeblockComponent {
  @Input() code: string = '';
  @Input() description: string = '';
  @Input() language: string = '';
  iconName: string = 'file_copy';
  
  /**
   * Briefly change icon
   * @returns void
   */
  changeIcon(): void {
    this.iconName = 'check';
    setTimeout(() => {
      this.iconName = 'file_copy';
    }, 750);
  }
}
