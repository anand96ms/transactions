import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MakeATransferComponent } from './make-atransfer.component';

describe('MakeATransferComponent', () => {
  let component: MakeATransferComponent;
  let fixture: ComponentFixture<MakeATransferComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeATransferComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeATransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  function updateForm(to, amount) {
    component.transferForm.controls.toAccount.setValue(to);
    component.transferForm.controls.amount.setValue(amount);
  }

  it('should have default props', fakeAsync(() => {
    expect(component.transferForm.value).toEqual({
      toAccount: '',
      amount: null,
    });
  }));
  it('form value should update from form changes', fakeAsync(() => {
    updateForm('XYZ Company', 99);
    expect(component.transferForm.value).toEqual({
      toAccount: 'XYZ Company',
      amount: 99,
    });
  }));
  it('should trigger preview on submit', fakeAsync(() => {
    component.isPreview = true;
    updateForm('XYZ Company', 99);
    component.onSubmit();
    //component.showPreview();
    expect(component.transferForm.value).toEqual({
      toAccount: 'XYZ Company',
      amount: 99,
    });
  }));
  it('should show preview on submit', fakeAsync(() => {
    component.isPreview = true;
    updateForm('XYZ Company', 99);
    component.showPreview();
    expect(component.transferForm.value).toEqual({
      toAccount: 'XYZ Company',
      amount: 99,
    });
  }));
  it('should reset form on transfer', fakeAsync(() => {
    component.onTransfer();
    expect(component.transferForm.value).toEqual({
      toAccount: null,
      amount: null,
    });
  }));
});
