import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideApollo } from 'apollo-angular';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideApollo(() => {
      const httplink = inject(HttpLink);
      return {
        link: httplink.create({
          uri: 'http://localhost:3000/graphql',
        }),
        cache: new InMemoryCache(),
      };
    }),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
