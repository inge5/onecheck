import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { OnecheckComponent, SafeHtmlPipe } from './onecheck/onecheck.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './onecheck/sidebar/sidebar.component';
import { SubmenuComponent } from './onecheck/submenu/submenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomosComponent } from './somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateContactoComponent,
    SidebarContactComponent,
    OnecheckComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmenuComponent,
    SafeHtmlPipe,
    SomosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
