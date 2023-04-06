import { HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from '../login/login.service';
import { HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

    constructor(private readonly loginService:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        let auth=req;
        const token = this.loginService.getToken();

        if(token != null){
            auth = auth.clone({
                setHeaders:{Authorization:`Bearer ${token}`}
            })
        }
        return next.handle(auth);
    }
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }

]