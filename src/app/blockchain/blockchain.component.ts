import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../reducers';
import * as Actions from '../actions/block-chain';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<fromStore.State>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  addCoinToList() {
    const { name, price } = this.angForm.value;
    this.store.dispatch(new Actions.AddCoin({
      name: name,
      price: price
    }));

    this.store.select(d => d.state).subscribe(s => console.log(s));
  }

  ngOnInit() {
  }

}
