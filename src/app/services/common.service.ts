import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private titulo: Title, private meta: Meta) { }
  
  paginaOneCheckMetaData(){
    this.paginaMetaData(
      'Supervisa, planifica y monitorea a tu equipo',
      'Rastrea con tecnologia NFC las rondas de tu personal de seguridad ',
      'Maneja los puntos de marcacion con tecnologia NFC',
      ''
    )
  }

  paginaMetaData(titulo: string, descripcion: string, keywords: string = '', url: string = ''): void{
    this.titulo.setTitle(titulo);

    this.meta.updateTag({
      property: 'og:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:url',
      content: url
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'keywords',
      content: keywords
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.subject',
      content: keywords
    } as MetaDefinition);
  }
}
