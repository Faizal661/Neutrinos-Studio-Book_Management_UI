// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm_modal',
  templateUrl: './confirm_modal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_modalComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_3vA8XIOkrUFUFtdE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3vA8XIOkrUFUFtdE(bh) {
    try {
      bh = this.sd_afPbXHTSbiG1AHEY(bh);
      //appendnew_next_sd_3vA8XIOkrUFUFtdE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3vA8XIOkrUFUFtdE');
    }
  }

  //appendnew_flow_confirm_modalComponent_start

  sd_afPbXHTSbiG1AHEY(bh) {
    try {
      //appendnew_next_sd_afPbXHTSbiG1AHEY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_afPbXHTSbiG1AHEY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_confirm_modalComponent_Catch
}
