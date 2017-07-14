import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import {StudentComponent} from "./student.component";
import {ProfileComponent} from "./profile.component";
const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     {path:'students',component:StudentComponent},
     {path:"students/profile/:id",component:ProfileComponent},
    
    //  { path: 'aboutus', component: AboutusComponent },
    //  // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
    //  // The default matching strategy of Angular router is
    //  // to match the redirect route when the URL begins with the redirect route's prefix path.
    //  // if 'prefix' all params/routes/xx will be redirected to homepage
    //  { path: 'params/route', redirectTo: '/', pathMatch: 'full' },
    //  { path: 'params/route/:id', component: RouteComponent },
    //  { path: 'params/query', component: QueryComponent },
    //  { path: 'params/fragment', component: FragmentComponent },
    //  { path: 'params/preserve', component: PreserveComponent },
    //  { path: 'parentchild/parent', component: ParentComponent },
    //  { path: 'parentchild/parent', component: ParentComponent, children: [
    //      { path: 'child', component: ChildComponent }
    //  ] },
    //  // guards need to be initilized, add them to module!
    //  // canActivate when surfing to route
    //  // canDeactivate when surfing away from route
    //  { path: 'guards', component: GuardsComponent, canActivate:[MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] },
    //  // ** for all routes that we don't recognize, 
    //  // Routes served from top to bottom so this should always come last!
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
