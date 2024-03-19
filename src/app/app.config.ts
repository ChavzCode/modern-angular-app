import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductGateway } from './domain/models/product/gateway/product.gateway';
import { ProductApiService } from './infrastructure/adapters/product-api/product-api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: ProductGateway, useClass: ProductApiService },
  ],
};
