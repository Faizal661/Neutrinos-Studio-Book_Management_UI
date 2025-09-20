// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_books',
  templateUrl: './view_books.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_booksComponent {
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
      this.sd_nW3Y2vV7L7BfwkcG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nW3Y2vV7L7BfwkcG(bh) {
    try {
      bh = this.sd_jVjF1naRsamkex1g(bh);
      //appendnew_next_sd_nW3Y2vV7L7BfwkcG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nW3Y2vV7L7BfwkcG');
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
      bh = this.sd_Qd9uuVIXtpXfD7Sz(bh);
      //appendnew_next_pagination
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E8nn7TgZ5LR57bi7');
    }
  }

  deleteBook(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bWuW2DbupOYffPXT(bh);
      //appendnew_next_deleteBook
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B2fJ0ru377aPLiPu');
    }
  }

  storeCurrentBookData(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_JQVQC2QLPTcLE4wZ(bh);
      //appendnew_next_storeCurrentBookData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2BlTsZGFSbV1s8lb');
    }
  }

  clearConfirmModalData(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YarMHs8ZhnGWygOn(bh);
      //appendnew_next_clearConfirmModalData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sKKkI8dkJdsds12X');
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
      bh = this.sd_TI2B5kNCx4n3QjHX(bh);
      //appendnew_next_updateBook
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2C7rEV6jqmYjloWP');
    }
  }

  choseUpdateOrDeleteConfirm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3w5mblEpHsD9Eg1J(bh);
      //appendnew_next_choseUpdateOrDeleteConfirm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o2x7Qm67RHdR2IlO');
    }
  }
  //appendnew_flow_view_booksComponent_start

  async sd_jVjF1naRsamkex1g(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/books',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Nj4CNr8uVDkcsVRR(bh);
      //appendnew_next_sd_jVjF1naRsamkex1g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jVjF1naRsamkex1g');
    }
  }

  sd_Nj4CNr8uVDkcsVRR(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(bh.local.response.bookData);

      console.log('beofre authstate update');
      page.authSubscribe = bh.system.oauthService
        .authState()
        .subscribe((state) => {
          page.authState = state;
          alert(JSON.stringify(state));
          console.log('authstate ====>', page.authState);
        });
      console.log('after authstate update');
      bh = this.sd_4CCbcU6kvOvu5YbK(bh);
      //appendnew_next_sd_Nj4CNr8uVDkcsVRR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nj4CNr8uVDkcsVRR');
    }
  }

  sd_4CCbcU6kvOvu5YbK(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.totalDocuments = bh.local.response.totalDocuments;
      this.page.limit = bh.local.response.limit;
      bh = this.sd_vrSxxc3QVVMZnw4w(bh);
      //appendnew_next_sd_4CCbcU6kvOvu5YbK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4CCbcU6kvOvu5YbK');
    }
  }

  sd_vrSxxc3QVVMZnw4w(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.initializingPageVariables(bh);
      //appendnew_next_sd_vrSxxc3QVVMZnw4w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vrSxxc3QVVMZnw4w');
    }
  }

  initializingPageVariables(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      this.page.tableData.paginator = this.MatPaginator;

      page.currentRowBookData = {};

      page.showCofirmModal = false;
      page.confirmMessage = '';
      page.confirmType = '';
      page.color = 'white';

      //appendnew_next_initializingPageVariables
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2pArTMdimYjEZrJc');
    }
  }

  sd_Qd9uuVIXtpXfD7Sz(bh) {
    try {
      const page = this.page;
      const pageIndex = page.tableData.paginator.pageIndex;
      const pageSize = page.tableData.paginator.pageSize;

      bh.local.currentPage = pageIndex + 1;
      bh.local.limit = pageSize;

      bh.local.query = {
        page: bh.local.currentPage,
        limit: bh.local.limit,
      };

      bh = this.sd_XfZcqxZ3flb9cSvn(bh);
      //appendnew_next_sd_Qd9uuVIXtpXfD7Sz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qd9uuVIXtpXfD7Sz');
    }
  }

  async sd_XfZcqxZ3flb9cSvn(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/books',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.query,
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_RbQtdAHqHAYmnuhn(bh);
      //appendnew_next_sd_XfZcqxZ3flb9cSvn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XfZcqxZ3flb9cSvn');
    }
  }

  sd_RbQtdAHqHAYmnuhn(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = bh.local.response.bookData;
      bh = this.sd_4CCbcU6kvOvu5YbK(bh);
      //appendnew_next_sd_RbQtdAHqHAYmnuhn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RbQtdAHqHAYmnuhn');
    }
  }

  sd_bWuW2DbupOYffPXT(bh) {
    try {
      const page = this.page;
      page.confirmMessage = 'Do you really want to delete this book?';
      page.showCofirmModal = true;
      page.color = 'red';
      page.confirmType = 'delete';

      //appendnew_next_sd_bWuW2DbupOYffPXT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bWuW2DbupOYffPXT');
    }
  }

  sd_JQVQC2QLPTcLE4wZ(bh) {
    try {
      const page = this.page;
      console.log('isbn from handling currentISBN === ', bh.input);

      page.currentRowBookData = bh.input.row;
      //appendnew_next_sd_JQVQC2QLPTcLE4wZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JQVQC2QLPTcLE4wZ');
    }
  }

  sd_YarMHs8ZhnGWygOn(bh) {
    try {
      const page = this.page;
      page.confirmMessage = '';
      page.showCofirmModal = false;
      page.color = 'white';
      page.confirmType = '';
      //appendnew_next_sd_YarMHs8ZhnGWygOn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YarMHs8ZhnGWygOn');
    }
  }

  sd_TI2B5kNCx4n3QjHX(bh) {
    try {
      const page = this.page;
      page.confirmMessage = 'Do you want to update this book?';
      page.showCofirmModal = true;
      page.color = 'blue';
      page.confirmType = 'update';

      //appendnew_next_sd_TI2B5kNCx4n3QjHX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TI2B5kNCx4n3QjHX');
    }
  }

  sd_3w5mblEpHsD9Eg1J(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.confirmType,
          'update',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xzpmAA2c7PA5Jzmj(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.confirmType,
          'delete',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2NMkPlBF9psl7zD2(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3w5mblEpHsD9Eg1J');
    }
  }

  async sd_xzpmAA2c7PA5Jzmj(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/update-book');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.currentRowBookData),
        });
      bh = this.sd_kdJOiJR9fRAeqN5e(bh);
      //appendnew_next_sd_xzpmAA2c7PA5Jzmj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xzpmAA2c7PA5Jzmj');
    }
  }

  sd_kdJOiJR9fRAeqN5e(bh) {
    try {
      const page = this.page;
      page.confirmMessage = '';
      page.showCofirmModal = false;
      page.color = 'white';
      page.confirmType = '';

      //appendnew_next_sd_kdJOiJR9fRAeqN5e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kdJOiJR9fRAeqN5e');
    }
  }

  sd_2NMkPlBF9psl7zD2(bh) {
    try {
      const page = this.page;
      console.log('currnet row data ', page.currentRowBookData);

      bh.local.deleteBookURL = `http://localhost:8081/api/books/${page.currentRowBookData.isbn}`;

      page.confirmMessage = '';
      page.showCofirmModal = false;
      page.color = 'white';
      page.confirmType = '';
      bh = this.sd_AEgORQNp2jZhBE5H(bh);
      //appendnew_next_sd_2NMkPlBF9psl7zD2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2NMkPlBF9psl7zD2');
    }
  }

  async sd_AEgORQNp2jZhBE5H(bh) {
    try {
      let requestOptions = {
        url: bh.local.deleteBookURL,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: bh.local.query,
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_7Z6E7IUEiMykhMpl(bh);
      //appendnew_next_sd_AEgORQNp2jZhBE5H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AEgORQNp2jZhBE5H');
    }
  }

  sd_7Z6E7IUEiMykhMpl(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          bh.local.response.status,
          200,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_wQjSNkvNiUBoQRiB(bh);
      }
      if (
        this.sdService.operators['gte'](
          bh.local.response.status,
          400,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Kdts51Vmryh8ReLS(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7Z6E7IUEiMykhMpl');
    }
  }

  sd_wQjSNkvNiUBoQRiB(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Deleted book successfully', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_5XFZzikFtzgSXQMD(bh);
      //appendnew_next_sd_wQjSNkvNiUBoQRiB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wQjSNkvNiUBoQRiB');
    }
  }

  sd_5XFZzikFtzgSXQMD(bh) {
    try {
      const page = this.page; // console.log('current deleted data ', page.currentRowBookData)
      console.log('current table data ', page.tableData.paginator);

      const currentTableData = page.tableData;
      const deletedRow = page.currentRowBookData;

      const itemIndex = currentTableData.findIndex(
        (item) => item.id === deletedRow.id
      );

      if (itemIndex > -1) {
        const newData = [
          ...currentTableData.slice(0, itemIndex),
          ...currentTableData.slice(itemIndex + 1),
        ];

        bh.local.dataSource = newData;
        bh.local.response.totalDocuments = --page.tableData.paginator.length;
      }

      bh = this.sd_4CCbcU6kvOvu5YbK(bh);
      //appendnew_next_sd_5XFZzikFtzgSXQMD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5XFZzikFtzgSXQMD');
    }
  }

  sd_Kdts51Vmryh8ReLS(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Failed to delete book', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Kdts51Vmryh8ReLS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kdts51Vmryh8ReLS');
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
  //appendnew_flow_view_booksComponent_Catch
}
