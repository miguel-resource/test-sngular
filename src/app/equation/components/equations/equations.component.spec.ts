import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationsComponent } from './equations.component';
import { FormComponent } from './../form/form.component';
import { LabelResultComponent } from './../label-result/label-result.component'


describe('Test del método de la serie ', () => {
  let component: EquationsComponent;
  let fixture: ComponentFixture<EquationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EquationsComponent,
        FormComponent,
        LabelResultComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.variable = 2

  });

  it('Debe retornar un número mayor a 0 con la variable = 0', () => {
    component.variable = 0

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 1', () => {
    component.variable = 1

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 2', () => {
    component.variable = 2

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });


  it('Debe retornar un número mayor a 0 con la variable = 3', () => {
    component.variable = 3

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 4', () => {
    component.variable = 4

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 5', () => {
    component.variable = 5

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 6', () => {
    component.variable = 6

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 7', () => {
    component.variable = 7

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 8', () => {
    component.variable = 8

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 9', () => {
    component.variable = 9

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });

  it('Debe retornar un número mayor a 0 con la variable = 10', () => {
    component.variable = 10

    const value = component.result();
    expect( value >= 0).toBeTrue();
  });
});
