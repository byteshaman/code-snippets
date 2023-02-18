import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { PrismCodeblockComponent } from './shared/prism-codeblock/prism-codeblock.component';

@NgModule({
  declarations: [
    AppComponent,
    PrismCodeblockComponent
  ],
  imports: [
    MatTabsModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
