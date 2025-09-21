// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-search_book',
  templateUrl: './search_book.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class search_bookComponent {
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
      this.sd_XUX3LnHzQOUbRGJ2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XUX3LnHzQOUbRGJ2(bh) {
    try {
      bh = this.sd_e69P7MchohGF0XIZ(bh);
      //appendnew_next_sd_XUX3LnHzQOUbRGJ2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XUX3LnHzQOUbRGJ2');
    }
  }

  fetchIsbnBook(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.fetchIsbnBookScript(bh);
      //appendnew_next_fetchIsbnBook
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jbw0BYEQOHa7Pl1N');
    }
  }

  createBookUsingIsbn(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.createBookScript(bh);
      //appendnew_next_createBookUsingIsbn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JHYTSHcYqYuYc4pV');
    }
  }

  clearBookDataViewCard(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2mnUOLQLNgjhud0l(bh);
      //appendnew_next_clearBookDataViewCard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_revoDI9poqi7RrtS');
    }
  }
  //appendnew_flow_search_bookComponent_start

  sd_e69P7MchohGF0XIZ(bh) {
    try {
      this.page.loading = undefined;
      bh = this.sd_gswLmarvHAWLarsW(bh);
      //appendnew_next_sd_e69P7MchohGF0XIZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e69P7MchohGF0XIZ');
    }
  }

  sd_gswLmarvHAWLarsW(bh) {
    try {
      const page = this.page;
      console.log('page details');
      console.log(page);

      page.pageData = {};

      page.hideButton = Boolean(false);

      //appendnew_next_sd_gswLmarvHAWLarsW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gswLmarvHAWLarsW');
    }
  }

  fetchIsbnBookScript(bh) {
    try {
      const page = this.page;
      if (!page.pageData.isbn || page.pageData.isbn.trim().length < 1) {
        throw new Error('ISBN is empty');
      }

      bh.local.searchBookURL = `http://localhost:8081/api/books/${page.pageData.isbn}`;

      page.loading = true;
      bh = this.fetchBookDetails(bh);
      //appendnew_next_fetchIsbnBookScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zzuWwWImxC4WIOvJ');
    }
  }

  async fetchBookDetails(bh) {
    try {
      let requestOptions = {
        url: bh.local.searchBookURL,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.fetchIsbnBookScript2(bh);
      //appendnew_next_fetchBookDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WwAzAMQcn4oGrky0');
    }
  }

  fetchIsbnBookScript2(bh) {
    try {
      const page = this.page;
      console.log('res===>>>', bh.input.response);
      const bookData = bh.input.response.openApiLibraryData;

      console.log('identifer', bookData?.identifiers);
      if (!bookData?.identifiers) {
        throw new Error('ISBN not exists in OpenAPI Library');
      }
      bh.local.bookData = {
        id: bookData.identifiers.isbn_10,
        isbn: page.pageData.isbn,
        title: bookData.title,
        publishers: bookData.authors[0].name,
        publishedYear: bookData.publish_date,
      };

      page.hideButton = Boolean(true);
      page.loading = false;
      bh = this.fetchIsbnBookPagevariables(bh);
      //appendnew_next_fetchIsbnBookScript2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wLsvV4om1MkwJDV1');
    }
  }

  fetchIsbnBookPagevariables(bh) {
    try {
      this.page.bookData = bh.local.bookData;
      bh = this.sd_jdBgWol3WalKOY6V(bh);
      //appendnew_next_fetchIsbnBookPagevariables
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EEsjOPzr4XnLP0in');
    }
  }

  sd_jdBgWol3WalKOY6V(bh) {
    try {
      if (
        this.sdService.operators['btwn'](
          bh.input.response.status,
          200,
          399,
          undefined
        )
      ) {
        bh = this.sd_J83Ff4vsWS2kdPbM(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdBgWol3WalKOY6V');
    }
  }

  sd_J83Ff4vsWS2kdPbM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully Fetched Book Details', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_J83Ff4vsWS2kdPbM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J83Ff4vsWS2kdPbM');
    }
  }

  createBookScript(bh) {
    try {
      const page = this.page;
      bh.local.createBookURL = `http://localhost:8081/api/books/`;

      bh.local.body = {
        isbn: page.pageData.isbn,
      };

      page.loading = true;
      bh = this.createBookHttpReq(bh);
      //appendnew_next_createBookScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jx53XvDfcHJVfwjd');
    }
  }

  async createBookHttpReq(bh) {
    try {
      let requestOptions = {
        url: bh.local.createBookURL,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_0MbCC6wbpgUrWZaV(bh);
      //appendnew_next_createBookHttpReq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UtLo5RWtmMgQRxNq');
    }
  }

  sd_0MbCC6wbpgUrWZaV(bh) {
    try {
      const page = this.page;
      page.loading = false;
      bh = this.sd_CT7d7NXpB1cFTGZt(bh);
      //appendnew_next_sd_0MbCC6wbpgUrWZaV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0MbCC6wbpgUrWZaV');
    }
  }

  sd_CT7d7NXpB1cFTGZt(bh) {
    try {
      if (
        this.sdService.operators['btwn'](
          bh.local.response.status,
          199,
          399,
          undefined
        )
      ) {
        bh = this.sd_jd0eBj9eXwgjnq8x(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CT7d7NXpB1cFTGZt');
    }
  }

  sd_jd0eBj9eXwgjnq8x(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully Added new book', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_i50xOCCtzAxcTlKi(bh);
      //appendnew_next_sd_jd0eBj9eXwgjnq8x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jd0eBj9eXwgjnq8x');
    }
  }

  sd_i50xOCCtzAxcTlKi(bh) {
    try {
      const page = this.page;
      page.hideButton = Boolean(false);

      //appendnew_next_sd_i50xOCCtzAxcTlKi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i50xOCCtzAxcTlKi');
    }
  }

  sd_2mnUOLQLNgjhud0l(bh) {
    try {
      const page = this.page;
      page.hideButton = Boolean(false);

      //appendnew_next_sd_2mnUOLQLNgjhud0l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2mnUOLQLNgjhud0l');
    }
  }

  sd_kUxDcF3rxleuaLA3(bh) {
    try {
      const page = this.page;
      bh.local.errorMessage =
        bh.error.message || 'Failed to fetch book details';
      bh = this.sd_KFX0WszOfRZUvEIr(bh);
      //appendnew_next_sd_kUxDcF3rxleuaLA3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kUxDcF3rxleuaLA3');
    }
  }

  sd_KFX0WszOfRZUvEIr(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.errorMessage, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_ueP4Wmb3p0VW4BhH(bh);
      //appendnew_next_sd_KFX0WszOfRZUvEIr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KFX0WszOfRZUvEIr');
    }
  }

  sd_ueP4Wmb3p0VW4BhH(bh) {
    try {
      const page = this.page;
      page.hideButton = Boolean(false);
      page.loading = false;
      //appendnew_next_sd_ueP4Wmb3p0VW4BhH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ueP4Wmb3p0VW4BhH');
    }
  }

  sd_KlUHqsoIrgkfiGZT(bh) {
    try {
      const page = this.page;
      bh.local.errorMessage = 'Failed to add book ';
      bh = this.sd_WQDbtuUYYfUnackd(bh);
      //appendnew_next_sd_KlUHqsoIrgkfiGZT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KlUHqsoIrgkfiGZT');
    }
  }

  sd_WQDbtuUYYfUnackd(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.errorMessage, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_ueP4Wmb3p0VW4BhH(bh);
      //appendnew_next_sd_WQDbtuUYYfUnackd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQDbtuUYYfUnackd');
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
      this.searchBookCatchNode(bh) ||
      this.creatingBookCatchNode(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  searchBookCatchNode(bh) {
    const nodes = [
      'sd_jbw0BYEQOHa7Pl1N',
      'sd_WwAzAMQcn4oGrky0',
      'sd_wLsvV4om1MkwJDV1',
      'sd_EEsjOPzr4XnLP0in',
      'sd_zzuWwWImxC4WIOvJ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_kUxDcF3rxleuaLA3(bh);
      //appendnew_next_searchBookCatchNode
      return true;
    }
    return false;
  }
  creatingBookCatchNode(bh) {
    const nodes = ['sd_UtLo5RWtmMgQRxNq'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_KlUHqsoIrgkfiGZT(bh);
      //appendnew_next_creatingBookCatchNode
      return true;
    }
    return false;
  }
  //appendnew_flow_search_bookComponent_Catch
}
