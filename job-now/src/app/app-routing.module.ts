import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { HomeComponent } from './containers/home/home/home.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { ContactComponent } from './containers/contact/contact.component';

import { CurriculumComponent } from './containers/curriculum/curriculum.component';
import { ApplicantAreaComponent } from './containers/applicant-area/applicant-area.component';

import { CompanyAreaComponent } from './containers/company-area/company-area/company-area.component';
import { RegisterPositionComponent } from './containers/register-position/register-position.component';
import { ListPositionRegisterComponent } from './containers/list-position-register/list-position-register.component';


import { DetailsPositionComponent } from './containers/details-position/details-position.component';


import { AllApplyComponent } from './containers/all-apply/all-apply.component';
import { CurriculumCompanyComponent } from './containers/curriculum-company/curriculum-company.component';
import { CompanyAreaResultComponent } from './containers/company-area-result/company-area-result.component';


import { CurriculumResolver } from './resolvers/curriculum.resolver';
import { DetailsPositionResolver } from './resolvers/details-position.resolver';
import { ListPositionsResolver } from './resolvers/list-positions-registered.resolver';
import { AllApplyResolver } from './resolvers/all-apply.resolver';
import { CurriculumCompanyResolver } from './resolvers/curriculum-company.resolver';
import { ConsultApplyInterestResolver } from './resolvers/consult-apply-interest.resolve';

import { AuthGuard } from './services-project/guards/auth.guard';




const routes: Routes = [
  //NAVBAR HOME
  { path: '', 
  component: HomeComponent
  },

  { path: 'home', 
    component: HomeComponent
  },

  { path: 'register', 
  component: RegisterComponent
  },

  { path: 'login', 
  component: LoginComponent
  },

  { path: 'contact', 
  component: ContactComponent
  },

  //NAVBAR APPLICANT
  { path: 'curriculum', 
  component: CurriculumComponent,
  resolve: { currentCurriculum: CurriculumResolver },
  canActivate:[AuthGuard]
  },

  { path: 'search-position', 
  component: ApplicantAreaComponent,
  canActivate:[AuthGuard]
  },


  //NAVBAR COMPANY

  { path: 'search-applicant', 
  component: CompanyAreaComponent,
  canActivate:[AuthGuard]
  },

  { path: 'register-position', 
  component: RegisterPositionComponent,
  canActivate:[AuthGuard]
  },

  { path: 'list-positions-registered', 
  component: ListPositionRegisterComponent,
  resolve: { listPositionsResolver : ListPositionsResolver  },
  canActivate:[AuthGuard]
  },


  //DETAILS POSITION (HOME)
  { path: 'details-position/:id', 
  component: DetailsPositionComponent,
  resolve: { detailsPositionResolver: DetailsPositionResolver },
  canActivate:[AuthGuard]
  },

  //LIST APPLY
  { path: 'all-apply/:id', 
  component: AllApplyComponent,
  resolve: { allApplyResolver: AllApplyResolver },
  canActivate:[AuthGuard]
  },

  //CONSULT CV
  { path: 'consult/:id', 
  component: CurriculumCompanyComponent,
  resolve: { curriculumCompanyResolver: CurriculumCompanyResolver },
  canActivate:[AuthGuard]
  },

  //CONSUT APPLY
  { path: 'consult-apply/:interest', 
  component: CompanyAreaResultComponent,
  resolve: { consultApplyInterestResolver: ConsultApplyInterestResolver },
  canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

















exports: [RouterModule]
})
export class AppRoutingModule { }
