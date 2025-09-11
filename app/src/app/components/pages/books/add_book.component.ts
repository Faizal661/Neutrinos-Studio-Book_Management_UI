// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_book',
  templateUrl: './add_book.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_bookComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_H2Z85r4d2cOUGkbl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_H2Z85r4d2cOUGkbl(bh) {
    try {
      bh = this.sd_IVPZRZ8iMLweeWvp(bh);
      //appendnew_next_sd_H2Z85r4d2cOUGkbl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H2Z85r4d2cOUGkbl');
    }
  }

  addBookDetails(form = null, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.bookDetailsEnter(bh);
      //appendnew_next_addBookDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NKwYpnHxCAtLv2zL');
    }
  }
  //appendnew_flow_add_bookComponent_start

  sd_IVPZRZ8iMLweeWvp(bh) {
    try {
      bh = this.sd_ZhcUYeZkG5PboJyt(bh);
      //appendnew_next_sd_IVPZRZ8iMLweeWvp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IVPZRZ8iMLweeWvp');
    }
  }

  sd_ZhcUYeZkG5PboJyt(bh) {
    try {
      bh = this.sd_e02HaJzZnSaYxAQe(bh);
      //appendnew_next_sd_ZhcUYeZkG5PboJyt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZhcUYeZkG5PboJyt');
    }
  }

  sd_e02HaJzZnSaYxAQe(bh) {
    try {
      const page = this.page;
      page.form = new FormGroup({
        id: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        isbn: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
      });
      //appendnew_next_sd_e02HaJzZnSaYxAQe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e02HaJzZnSaYxAQe');
    }
  }

  bookDetailsEnter(bh) {
    try {
      this.page.book_data = bh.input.form;
      //appendnew_next_bookDetailsEnter
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6OEoJFHmiCuNKsGc');
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
  //appendnew_flow_add_bookComponent_Catch
}
