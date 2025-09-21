// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-library_header',
  templateUrl: './library_header.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class library_headerComponent {
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
      this.sd_45nNi0RUuUibfU3q(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_45nNi0RUuUibfU3q(bh) {
    try {
      bh = this.sd_VeDnbigzaio2685K(bh);
      //appendnew_next_sd_45nNi0RUuUibfU3q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_45nNi0RUuUibfU3q');
    }
  }

  logout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6bkPRnyT5R8MKprj(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NbAVcSNTNviF2O76');
    }
  }
  //appendnew_flow_library_headerComponent_start

  sd_VeDnbigzaio2685K(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.local.url = route.snapshot.url;
      bh = this.sd_auV2cHAvjGejYQCg(bh);
      //appendnew_next_sd_VeDnbigzaio2685K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VeDnbigzaio2685K');
    }
  }

  sd_auV2cHAvjGejYQCg(bh) {
    try {
      const page = this.page;
      page.currentPath = bh.local.url[0].path;

      // console.log('curent page url ',bh.local.url)
      // console.log('curent path ',page.currentPath)
      //appendnew_next_sd_auV2cHAvjGejYQCg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_auV2cHAvjGejYQCg');
    }
  }

  sd_6bkPRnyT5R8MKprj(bh) {
    try {
      const page = this.page;
      bh.system.oauthService.logout();
      page.loading = true;
      //appendnew_next_sd_6bkPRnyT5R8MKprj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6bkPRnyT5R8MKprj');
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
  //appendnew_flow_library_headerComponent_Catch
}
