import { StoreModule, Store } from '@ngrx/store';
import { CartEffects } from './../cart.effects';
import { Observable } from "rxjs"
import {Actions, EffectsMetadata, getEffectsMetadata} from "@ngrx/effects";
import {TestBed} from "@angular/core/testing";
import { reducers, metaReducers } from 'src/app/store';
import {provideMockStore} from "@ngrx/store/testing";
import {provideMockActions} from "@ngrx/effects/testing";
import * as CartActions from '../cart.actions';
import { cold, hot } from 'jasmine-marbles';

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

  it('should dispatch CartCalculateValue when CartSelectItem is dispatched', () => {
    action = new CartActions.CartSelectItem(1);
    const outcome = new CartActions.CartCalculateValue();
    actions = hot('-a', { a: action });
    const expected = cold('-b', { b: outcome });
    expect(effects$.selectItems).toBeObservable(expected);
  })
})
