import {Component}  from "angular2/core";
import {HomeComponent}  from "../home/home.component";
import {AboutComponent}  from "../about/about.component";
import {NavComponent}  from "../nav/nav.component";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteData} from "angular2/router";

@Component({
    selector: "angular2-seed",
    styleUrls: ["src/app/components/app/app.component.css"],
    templateUrl: "src/app/components/app/app.component.html",
    directives: [ROUTER_DIRECTIVES, NavComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: "/home",
        name: "Home",
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: "/about",
        name: "About",
        component: AboutComponent,
    }
])

export class AppComponent {}
