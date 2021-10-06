import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenUnicaComponent } from './imagen-unica.component';

describe('ImagenUnicaComponent', () => {
  let component: ImagenUnicaComponent;
  let fixture: ComponentFixture<ImagenUnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenUnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
