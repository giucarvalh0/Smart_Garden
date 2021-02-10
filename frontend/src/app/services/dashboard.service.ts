// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Response } from 'src/app/model';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashboardService {

//   constructor(
//     private http: HttpClient
//   ) { }

//   public getSimultaneousCalls(): Observable<number> {
//     return this.http.get<Response<number>>(`${environment.urlCTI}/system/calls`, { headers: { ignoreProgressBar: '' } })
//       .pipe(
//         map((res: Response<number>) => res.data)
//       )
//   }

//   public getLimitSimultaneousCalls(): Observable<number> {
//     return this.http.get<Response<any>>(`${environment.urlLicenses}/licences/info`, { headers: { ignoreProgressBar: '' } })
//       .pipe(
//         map((res: Response<any>) => {
//           let limit = 0;
//           const license = res.data.licenseList.find((l: any) => l.product.code === '00018');
//           if (license) {
//             const expirationDate = new Date(license.expirationDate);
//             const readTime = new Date(license.readTime);
//             if (expirationDate > readTime) {
//               limit = license.quantity
//             }
//           }
//           return limit;
//         })
//       )
//   }

// }
