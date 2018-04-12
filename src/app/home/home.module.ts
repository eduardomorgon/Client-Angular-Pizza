import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouting } from "./home.routing.module";


@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [HomeRouting]
})
export class HomeModule {}