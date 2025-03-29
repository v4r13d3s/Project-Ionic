import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionPerfilPage } from './informacion-perfil.page';

describe('InformacionPerfilPage', () => {
  let component: InformacionPerfilPage;
  let fixture: ComponentFixture<InformacionPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
