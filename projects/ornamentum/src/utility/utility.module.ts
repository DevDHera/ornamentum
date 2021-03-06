import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitDirective } from './directives/init.directive';
import { FocusDirective } from './directives/focus.directive';

import { PixelConverterPipe } from './pipes/pixel-converter.pipe';

import { UtilityConfigService } from './services/utility-config.service';
import { DragAndDropService } from './services/drag-and-drop.service';
import { GlobalRefService } from './services/global-ref.service';
import { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';
import { ResizeService } from './services/resize.service';
import { ValidatorService } from './services/validator.service';

const DIRECTIVES = [InitDirective, FocusDirective];

const PIPES = [PixelConverterPipe];

const PROVIDERS = [DragAndDropService, GlobalRefService, PopoverComponentLoaderFactoryService, ResizeService, ValidatorService];

/**
 * Module representing utility providers, directives and pipes.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES, ...PIPES],
  providers: [...PROVIDERS],
  exports: [...DIRECTIVES, ...PIPES]
})
export class UtilityModule {
  /**
   * Set module root configuration overrides.
   * @return Module with custom providers.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [UtilityConfigService]
    };
  }
}

export { ComponentLoader } from './services/component-loader.interface';

export { DragAndDropService } from './services/drag-and-drop.service';
export { GlobalRefService } from './services/global-ref.service';
export { UtilityConfigService } from './services/utility-config.service';
export { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';

export { PopoverComponentLoader } from './services/popover-component-loader.class';
