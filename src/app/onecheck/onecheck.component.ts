import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';
import { HomeService } from '../services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import * as AOS from 'aos';
import { CommonService } from '../services/common.service';

declare var $: any;

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  public transform(
    value: any,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html':
        return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitized.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-onecheck',
  templateUrl: './onecheck.component.html',
  styleUrls: ['./onecheck.component.css'],
})
export class OnecheckComponent implements OnInit {
  public userside: any;
  data: any = [];
  loader = true;
  submenu: any = [];

  constructor(
    private _sanitizer: DomSanitizer,
    private _homeservice: HomeService,
    private common: CommonService
  ) {
    // AOS.init();
  }

  ngOnInit(): void {
    this.common.paginaOneCheckMetaData();
    this._homeservice.getHomeOneCheck().subscribe((res: any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
  }
  colocarColor(id: number) {
    $(`#${id}`).toggleClass('colorCliente');
  }
  abrirSide() {
    $('#wrapper').toggleClass('toggled');
    $('.overlaytrabaja').addClass('active');
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: false,
  };
  scrollConClick(url: string) {
    console.log(url);
    $('html, body').animate(
      {
        scrollTop: $(url).offset().top,
      },
      0.5
    );
  }
}
