import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { ProductGateway } from '@domain/models/product/gateway/product.gateway';
import { ProductApiService } from './infrastructure/adapters/product-api/product-api.service';
import { CategoryGateway } from '@domain/models/category/gateway/category.gateway';
import { CategoryApiService } from './infrastructure/adapters/category-api/category-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withFetch()),
    { provide: ProductGateway, useClass: ProductApiService },
    { provide: CategoryGateway, useClass: CategoryApiService }
  ],
};
