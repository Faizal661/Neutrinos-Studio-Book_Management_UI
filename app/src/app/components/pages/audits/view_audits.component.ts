// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_audits',
  templateUrl: './view_audits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_auditsComponent {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_dhAEgvJh8pT3qcRI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dhAEgvJh8pT3qcRI(bh) {
    try {
      bh = this.sd_NYTz8KmB6gopr9PS(bh);
      //appendnew_next_sd_dhAEgvJh8pT3qcRI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhAEgvJh8pT3qcRI');
    }
  }

  pagination(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.paginationLogic(bh);
      //appendnew_next_pagination
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nyFHutfFPAHydtUy');
    }
  }

  filtered(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.filterPagination(bh);
      //appendnew_next_filtered
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5ZQrftzxC92QQuiG');
    }
  }

  clearFilter(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.clearFilterLogic(bh);
      //appendnew_next_clearFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nK23oTd7xIVKW5qN');
    }
  }

  pdfGenerate(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8Hd79VZ4YrbXYAez(bh);
      //appendnew_next_pdfGenerate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IKPpmZDdhEeIE2WP');
    }
  }
  //appendnew_flow_view_auditsComponent_start

  async sd_NYTz8KmB6gopr9PS(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/audits',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_8cAnef9EeqQ1ek0l(bh);
      //appendnew_next_sd_NYTz8KmB6gopr9PS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NYTz8KmB6gopr9PS');
    }
  }

  sd_8cAnef9EeqQ1ek0l(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(
        bh.local.response.auditLogsData
      );

      page.selected = [];
      page.startDate = null;
      page.endDate = new Date();
      bh = this.sd_OSrPXNNXyK9n2sOF(bh);
      //appendnew_next_sd_8cAnef9EeqQ1ek0l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8cAnef9EeqQ1ek0l');
    }
  }

  sd_OSrPXNNXyK9n2sOF(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.totalDocuments = bh.local.response.totalDocuments;
      this.page.limit = bh.local.response.limit;
      bh = this.sd_ptBpr4zohQSa9UI1(bh);
      //appendnew_next_sd_OSrPXNNXyK9n2sOF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OSrPXNNXyK9n2sOF');
    }
  }

  sd_ptBpr4zohQSa9UI1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_DU2wUoAqr4kmX84L(bh);
      //appendnew_next_sd_ptBpr4zohQSa9UI1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ptBpr4zohQSa9UI1');
    }
  }

  sd_DU2wUoAqr4kmX84L(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      this.page.tableData.paginator = this.MatPaginator;

      page.operations = [
        { value: 'READ_BOOK', viewValue: 'BOOK READ' },
        { value: 'CREATE_BOOK', viewValue: 'BOOK CREATE' },
        { value: 'UPDATE_BOOK', viewValue: 'BOOK UPDATE' },
        { value: 'DELETE_BOOK', viewValue: 'BOOK DELETE' },
        { value: 'GENERATE_PDF', viewValue: 'PDF GENERATE' },
        { value: 'LOGIN', viewValue: 'USER LOGIN' },
        { value: 'LOGOUT', viewValue: 'USER LOGOUT' },
      ];

      console.log('page startDate', page.startDate);
      console.log('page endDate', page.endDate);

      //appendnew_next_sd_DU2wUoAqr4kmX84L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DU2wUoAqr4kmX84L');
    }
  }

  paginationLogic(bh) {
    try {
      const page = this.page;
      const pageIndex = page.tableData.paginator.pageIndex;
      const pageSize = page.tableData.paginator.pageSize;

      bh.local.currentPage = pageIndex + 1;
      bh.local.limit = pageSize;

      bh = this.createQueryParams(bh);
      //appendnew_next_paginationLogic
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mALOTDlr5ZG7STc5');
    }
  }

  createQueryParams(bh) {
    try {
      const page = this.page;
      console.log('bh.local.currentPage ==', bh.local.currentPage);
      console.log('bh.local.limit ==', bh.local.limit);

      bh.local.query = {
        ...page.filter,
        page: bh.local.currentPage,
        limit: bh.local.limit,
      };

      console.log('query === ', bh.local.query);
      bh = this.sd_Hu1LH4yLTDQZbp76(bh);
      //appendnew_next_createQueryParams
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hZYSmCtT4jBWQR9A');
    }
  }

  async sd_Hu1LH4yLTDQZbp76(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/audits',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.query,
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_031pqSMYINsGeSoM(bh);
      //appendnew_next_sd_Hu1LH4yLTDQZbp76
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hu1LH4yLTDQZbp76');
    }
  }

  sd_031pqSMYINsGeSoM(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = bh.local.response.auditLogsData;
      bh = this.sd_OSrPXNNXyK9n2sOF(bh);
      //appendnew_next_sd_031pqSMYINsGeSoM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_031pqSMYINsGeSoM');
    }
  }

  filterPagination(bh) {
    try {
      const page = this.page;
      const pageSize = page.tableData.paginator.pageSize;

      bh.local.currentPage = 1;
      bh.local.limit = pageSize;

      page.filter = {
        operations: page.selected,
        startDate: page.startDate,
        endDate: page.endDate,
      };
      bh = this.createQueryParams(bh);
      //appendnew_next_filterPagination
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3jexMU6Dmg1f4Nq9');
    }
  }

  clearFilterLogic(bh) {
    try {
      const page = this.page;
      const pageIndex = page.tableData.paginator.pageIndex;
      const pageSize = page.tableData.paginator.pageSize;

      bh.local.currentPage = 1;
      bh.local.limit = pageSize;

      page.filter = {};
      page.selected = [];
      page.startDate = null;
      page.endDate = new Date();
      bh = this.createQueryParams(bh);
      //appendnew_next_clearFilterLogic
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3no30brsAE7lDQeR');
    }
  }

  sd_8Hd79VZ4YrbXYAez(bh) {
    try {
      const page = this.page;
      bh.local.pdfGenerateURL = 'http://localhost:8081/api/audits/report/pdf';

      bh.local.query = {
        operations: page.selected,
        startDate: page.startDate,
        endDate: page.endDate,
      };

      console.log('query params ---', bh.local.query);

      page.loading = true;
      bh = this.sd_2zJoV5mBZEVDTqtK(bh);
      //appendnew_next_sd_8Hd79VZ4YrbXYAez
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Hd79VZ4YrbXYAez');
    }
  }

  async sd_2zJoV5mBZEVDTqtK(bh) {
    try {
      let requestOptions = {
        url: bh.local.pdfGenerateURL,
        method: 'get',
        responseType: 'blob',
        headers: { Accept: 'application/pdf' },
        params: bh.local.query,
        body: undefined,
      };
      bh.local.blob = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_rZq58zaQesGyeqdF(bh);
      //appendnew_next_sd_2zJoV5mBZEVDTqtK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2zJoV5mBZEVDTqtK');
    }
  }

  sd_rZq58zaQesGyeqdF(bh) {
    try {
      const page = this.page;
      page.loading = false;
      console.log('res from pdf generate === ', bh.local.blob);

      let blob = bh.local.blob;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'audit-report.pdf';
      a.click();

      window.URL.revokeObjectURL(url);

      //appendnew_next_sd_rZq58zaQesGyeqdF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rZq58zaQesGyeqdF');
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
  //appendnew_flow_view_auditsComponent_Catch
}
