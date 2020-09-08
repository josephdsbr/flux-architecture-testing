import { StoreModule, Store } from '@ngrx/store';
import { CartEffects } from './../cart.effects';
import { Observable } from "rxjs"
import {Actions, EffectsMetadata, getEffectsMetadata} from "@ngrx/effects";
import {TestBed} from "@angular/core/testing";
import { reducers, metaReducers } from 'src/app/store';
import {provideMockStore} from "@ngrx/store/testing";
import {provideMockActions} from "@ngrx/effects/testing";

describe('CartEffects', () => {
  let actions: Observable<any>;
  let effects$: CartEffects;
  let action;
  let metadata: EffectsMetadata<CartEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, {
          metaReducers
        })
      ],
      providers: [
        Actions,
        CartEffects,
        provideMockStore(),
        provideMockActions(() => actions),
        Store
      ]
    }).compileComponents();

    effects$ = TestBed.inject(CartEffects);
    metadata = getEffectsMetadata(effects$);
  })

  it('should be created', () => {
    expect(metadata).toBeTruthy();
  })
})
