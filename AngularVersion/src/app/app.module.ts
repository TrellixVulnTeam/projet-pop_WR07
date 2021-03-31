import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
<<<<<<< Updated upstream
=======
import { PostsComponent } from './posts/posts.component';
import { PostsServices } from './services/posts.services';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleProfilComponent } from './single-profil/single-profil.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ContactComponent } from './contact/contact.component';
import { WUDComponent } from './wud/wud.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home/:id', component: SingleProfilComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: '', component: HomeComponent },
 
]
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    SignUpComponent,
    SignInComponent,
<<<<<<< Updated upstream
    HomeComponent
  ],
  imports: [
    BrowserModule
=======
    HomeComponent,
    PostsComponent,
    PostsViewComponent,
    AuthComponent,
    SingleProfilComponent,
    ExplorerComponent,
    ContactComponent,
    WUDComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsServices,
    AuthService
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
