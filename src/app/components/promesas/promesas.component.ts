import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);

    })
    /* const promesa = new Promise((resolve, reject) =>{

      if(true){
        resolve('Hello world');
      } else{
        reject('Error')
      }


    });

    promesa.then( (msj)=> {
      console.log(msj);
    })

    .catch(err => console.log('Error en mi promesa', err));

    console.log('End of init'); */
  }

  getUsuarios() {
    const promesa = new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });

    return promesa;
  }
}
