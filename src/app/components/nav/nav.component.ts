import {Component} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "navigation",
    styleUrls: ["src/app/components/nav/nav.component.css"],
    templateUrl: "src/app/components/nav/nav.component.html",
    directives: [ROUTER_DIRECTIVES]
})

export class NavComponent {
    isActiveRoute(path) {
        path = "/" + path;
        return window.location.pathname === path; // TODO: there should be a better way to do this
    }

    constructor(private _router: Router) {}
}
