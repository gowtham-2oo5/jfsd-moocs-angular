// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,   // Add UserFormComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,         // Import FormsModule for ngModel to work
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
