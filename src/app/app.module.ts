import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetDataComponent } from './get-data/get-data.component';
import { PutDataComponent } from './put-data/put-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    PutDataComponent,
    PostDataComponent,
    DeleteDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
