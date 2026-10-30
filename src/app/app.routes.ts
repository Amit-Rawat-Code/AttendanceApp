import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'attendance',
    pathMatch: 'full',
  },
  {
    path: 'attendance-bulk',
    loadComponent: () =>
      import('./features/attendance/pages/attendance-bulk/attendance-bulk.page')
        .then(m => m.AttendanceBulkPage)
  },
  {
    path: 'attendance',
    loadComponent: () =>
      import('./features/attendance/pages/attendance-list/attendance-list.page')
        .then(m => m.AttendanceListPage)
  },
  {
    path: 'attendance/add',
    loadComponent: () =>
      import('./features/attendance/pages/attendance-add/attendance-add.page')
        .then(m => m.AttendanceAddPage)
  },
  {
    path: 'attendance/edit/:id',
    loadComponent: () =>
      import('./features/attendance/pages/attendance-edit/attendance-edit.page')
        .then(m => m.AttendanceEditPage)
  },
  {
    path: 'attendance/view/:id',
    loadComponent: () =>
      import('./features/attendance/pages/attendance-view/attendance-view.page')
        .then(m => m.AttendanceViewPage)
  },
  {
    path: 'attendance-bulk',
    loadComponent: () => import('./features/attendance/pages/attendance-bulk/attendance-bulk.page').then( m => m.AttendanceBulkPage)
  }
];
