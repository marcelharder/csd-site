import { Component, OnInit } from '@angular/core';
import { Registry } from '../_models/registry';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from '../_services/registry.service';
import { AuthService } from '../_services/auth.service';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { AlertifyService } from '../_services/alertify.service';
import { RegistryDetails } from '../_models/registrydetails';

@Component({
  selector: 'app-list-of-registries',
  templateUrl: './list-of-registries.component.html',
  styleUrls: ['./list-of-registries.component.css']
})
export class ListOfRegistriesComponent implements OnInit {

  details = 0;
  list = 0;
  cassette = 0;

  cassetteNo = '';
  cassettePresent = true;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private regService: RegistryService,
    private auth: AuthService,
    private alertify: AlertifyService) { }

  help: PaginatedResult<Registry[]>;
  registries: Array<Registry[]> = [];
  selectedRegistry: RegistryDetails;
  pagination: Pagination;

  ngOnInit(): void {
    this.route.data.subscribe(data => { this.help = data.reg; });
    this.pagination = this.help.pagination;
    // this.regService.getRegistries(+this.auth.decodedToken.nameid, 1, 5).subscribe((next) => { this.help = next; });
    this.details = 0;
    this.list = 1;
  }

  contentFound() { if (this.help.result.length > 0) { return true; } }

  selectDetails(id: number) {
    this.details = 1;
    this.list = 0;
    this.cassette = 0;
    this.regService.getRegistryDetails(id).subscribe((next) => {
      this.selectedRegistry = next;
    });
  }

  FindCassette() {
    let test = '';
    this.regService.findRegistry(this.cassetteNo).subscribe(
      (next) => {
        test = next;
        if (test === 'This cassete_id is not in the database') {
          this.cassettePresent = false;
        } else {
          if (test === 'Found') {
            this.cassettePresent = true;
            this.alertify.message('cassette found');
            // show the details
            this.regService.getRegistryDetailsFromCassetteId(this.cassetteNo).subscribe((nex) => {
              this.selectedRegistry = nex;
              this.details = 1;
              this.list = 0;
              this.cassette = 0;
            })

          }
        }
      },
      (error) => { this.alertify.error(error); },
      () => { }
    )
  }

  CassetteFound() { if (this.cassettePresent) { return true; } else { return false; } }

  


  AddRegistry() {
    if (this.cassetteNo === '') {
      // ask for the cassetteNo before adding a registry
      this.alertify.confirm('Please enter the cassetteNo', () => {
        this.cassette = 1;
        this.details = 0;
        this.list = 0;
      })

    } else {

      this.alertify.confirm('You want to create a new registry in the database ?', () => {

        this.regService.addRegistry(this.cassetteNo).subscribe((next) => {
          this.selectedRegistry = next;
          this.details = 1;
          this.cassette = 0;
          this.list = 0;
        })

      });
    }
  }

  CancelAdding() { this.cassettePresent = true; this.cassetteNo = ''; this.list = 1; }

  showDetails() { if (this.details === 1) { return true; } }
  showList() { if (this.list === 1) { return true; } }
  showCassette(){if (this.cassette === 1) { return true; } else { return false; }}

  UpdateRegistry() {
    this.regService.updateRegistry(+this.auth.decodedToken.nameid, this.selectedRegistry).subscribe((next) => {
      this.alertify.message(next);
      this.details = 0;
      this.list = 1;
    }, (error) => { this.alertify.error(error); })
  }

  pageChanged(event: any) { this.pagination.currentPage = event.page; this.loadRegistries(); }

  loadRegistries() {
    this.regService.getRegistries(+this.auth.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<Registry[]>) => {
        this.help = res;
        this.pagination = this.help.pagination;
      })
  }

  ExplainCassette() { this.router.navigate(['/cassetteExplain']); }


}
