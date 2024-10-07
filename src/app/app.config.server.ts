import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { appConfig } from './app.config';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideNoopAnimations()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
