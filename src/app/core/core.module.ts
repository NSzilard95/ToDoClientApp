import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskService } from './services/todo-task.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-only-once';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TodoTaskService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  // Ensure that CoreModule is only loaded into AppModule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
