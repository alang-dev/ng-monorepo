import {Routes} from '@angular/router';
import {StockPicksComponent} from "./stock-picks/stock-picks.component";
import {MutualFundsComponent} from "./mutual-funds/mutual-funds.component";
import {NotFoundComponent} from "../../../app-lib/src/lib/not-found/not-found.component";
import {ChildAComponent} from "./stock-picks/child-a/child-a.component";
import {ChildBComponent} from "./stock-picks/child-b/child-b.component";

export const routes: Routes = [
  {
    path: 'stock-picks', component: StockPicksComponent,
    children: [
      {path: 'child-a', component: ChildAComponent },
      {path: 'child-b', component: ChildBComponent },
    ]
  },
  {path: 'mutual-funds', component: MutualFundsComponent},
  {path: '', redirectTo: '/stock-picks', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},  // Wildcard route for a 404 page
];
