import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSkillComponent } from './deleteskill.component';

describe('DeleteskillComponent', () => {
  let component: DeleteSkillComponent;
  let fixture: ComponentFixture<DeleteSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSkillComponent]
    });
    fixture = TestBed.createComponent(DeleteSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});