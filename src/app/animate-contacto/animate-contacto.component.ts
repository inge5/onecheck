import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $ : any; 

@Component({
  selector: 'app-animate-contacto',
  templateUrl: './animate-contacto.component.html',
  styleUrls: ['./animate-contacto.component.css']
})
export class AnimateContactoComponent implements OnInit {

  public form: any;
  data:any = [];
  formulario: FormGroup;
  dominio: string = environment.domain;
  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService, private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
    this._homeservice.getHome()
    .subscribe((res:any) => {
      // this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
  }
  crearFormulario(){
    this.formulario = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
      acepto: ['', Validators.required]
    });
  }
  enviarForm() {
    if(this.formulario.invalid && !this.formulario.get('acepto')!.value){
      return Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    if(this.formulario.invalid){
      return Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    if(!this.formulario.get('acepto')!.value){
      alert('Debes aceptar Terminos y condiciones');
      return;
    }
    $.ajax({
      url: `${environment.domain}/wp-content/plugins/form-contactenos/mail.php`,
      type: 'POST',
      data: JSON.stringify(this.form),
      dataType:"json",
      success: function(data: any) {
       
      }, error: function(error: any){
        if(error.status === 200){
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
        } else {
          Swal.fire('Oops...', 'Algo pas??. Corrige los errores, por favor!', 'error')
        }
      }
    });
    this.formulario.reset();
   }

}
