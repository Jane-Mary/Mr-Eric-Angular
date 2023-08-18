import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { SchoolComponent } from './school/school.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BgSizePipe } from './Pipes/bg-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SchoolComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    BgSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
