// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-update_book',
  templateUrl: './update_book.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class update_bookComponent {
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
      this.sd_kEDq533u2EZOhaOp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_kEDq533u2EZOhaOp(bh) {
    try {
      bh = this.sd_70KA9XzsFDfH293B(bh);
      //appendnew_next_sd_kEDq533u2EZOhaOp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kEDq533u2EZOhaOp');
    }
  }

  updateBook(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Ape9wkIBa8oKnInu(bh);
      //appendnew_next_updateBook
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_saYCaKQ3K4gMLeNM');
    }
  }
  //appendnew_flow_update_bookComponent_start

  sd_70KA9XzsFDfH293B(bh) {
    try {
      bh = this.sd_kxNU8dBgoDD8vYjU(bh);
      //appendnew_next_sd_70KA9XzsFDfH293B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_70KA9XzsFDfH293B');
    }
  }

  sd_kxNU8dBgoDD8vYjU(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.local.rowData = route.snapshot.queryParams;
      bh = this.sd_LrrVAyvkEfZ3wyGR(bh);
      //appendnew_next_sd_kxNU8dBgoDD8vYjU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kxNU8dBgoDD8vYjU');
    }
  }

  sd_LrrVAyvkEfZ3wyGR(bh) {
    try {
      const page = this.page;
      console.log('page queury ====', bh.local.rowData);
      page.updatedData = {
        isbn: bh.local.rowData.isbn,
        title: bh.local.rowData.title,
        publishers: bh.local.rowData.publishers,
        publishedYear: bh.local.rowData.publishedYear,
      };
      console.log('updated data ====', page.updatedData);
      //appendnew_next_sd_LrrVAyvkEfZ3wyGR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LrrVAyvkEfZ3wyGR');
    }
  }

  sd_Ape9wkIBa8oKnInu(bh) {
    try {
      const page = this.page;
      console.log('updated data ', page.updatedData);

      if (!page.updatedData.title || !page.updatedData.title.trim().length) {
        throw new Error('Title is empty');
      } else if (
        !page.updatedData.publishers ||
        !page.updatedData.publishers.trim().length
      ) {
        throw new Error('Publisher field is empty');
      } else if (
        !page.updatedData.publishedYear ||
        !page.updatedData.publishedYear.trim().length
      ) {
        throw new Error('Published Year field is empty');
      }

      bh.local.updateBookURL = `http://localhost:8081/api/books/${page.updatedData.isbn}`;

      bh = this.sd_darB2qMAIuR7aI6i(bh);
      //appendnew_next_sd_Ape9wkIBa8oKnInu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ape9wkIBa8oKnInu');
    }
  }

  async sd_darB2qMAIuR7aI6i(bh) {
    try {
      let requestOptions = {
        url: bh.local.updateBookURL,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.updatedData,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_FCgKJRsZ12rpENCh(bh);
      //appendnew_next_sd_darB2qMAIuR7aI6i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_darB2qMAIuR7aI6i');
    }
  }

  sd_FCgKJRsZ12rpENCh(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          bh.local.response.status,
          400,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_KvS1FZpuAuiXWP1Z(bh);
      } else if (
        this.sdService.operators['gte'](
          bh.local.response.status,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_7zHgKWKSbwbJqS1I(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FCgKJRsZ12rpENCh');
    }
  }

  sd_KvS1FZpuAuiXWP1Z(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Failed to update book details', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_KvS1FZpuAuiXWP1Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KvS1FZpuAuiXWP1Z');
    }
  }

  sd_7zHgKWKSbwbJqS1I(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully Updated Book Details', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_CwLcDr51dJbMYKnH(bh);
      //appendnew_next_sd_7zHgKWKSbwbJqS1I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7zHgKWKSbwbJqS1I');
    }
  }

  async sd_CwLcDr51dJbMYKnH(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_CwLcDr51dJbMYKnH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CwLcDr51dJbMYKnH');
    }
  }

  sd_aq0lheBM8v9yrFly(bh) {
    try {
      const page = this.page;
      bh.local.errorMessage =
        bh.error.message || 'Failed to update book details';
      bh = this.sd_9H2k7DnMaS5MuZ57(bh);
      //appendnew_next_sd_aq0lheBM8v9yrFly
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aq0lheBM8v9yrFly');
    }
  }

  sd_9H2k7DnMaS5MuZ57(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.errorMessage, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_9H2k7DnMaS5MuZ57
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9H2k7DnMaS5MuZ57');
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
    if (
      false ||
      this.searchBookCatchNode(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  searchBookCatchNode(bh) {
    const catchConnectedNodes = ['sd_aq0lheBM8v9yrFly', 'sd_9H2k7DnMaS5MuZ57'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_aq0lheBM8v9yrFly(bh);
    //appendnew_next_searchBookCatchNode
    return true;
  }
  //appendnew_flow_update_bookComponent_Catch
}
