import { Component, ViewEncapsulation } from '@angular/core';
import { languages, snippets } from './shared/globals';
import { Language, SnippetList } from './shared/interfaces';

declare var Prism: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class AppComponent {
  languages: Language[] = languages;
  snippets: SnippetList = snippets;
  
  /**
   * Choose the proper label to use
   * @param  {Language} lang
   * @returns string
   */
  getTabLabel(lang: Language): string {
    return lang.extendedLabel ? lang.extendedLabel : lang.label;
  }
  
  /**
   * Highlight syntax when tab changes
   * @returns void
   */
  highlightCodeblocks(): void {
    Prism.highlightAll();
  }
}