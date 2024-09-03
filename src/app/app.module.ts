import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Component/product.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/filter.pipe';
import { HighlightDirective } from './Directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
