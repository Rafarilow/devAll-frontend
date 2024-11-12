import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LastPostComponent } from './last-post/last-post.component';
import { HttpClientModule } from '@angular/common/http'; // Importar o módulo HTTP

@NgModule({
  declarations: [
    AppComponent,
    LastPostComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
