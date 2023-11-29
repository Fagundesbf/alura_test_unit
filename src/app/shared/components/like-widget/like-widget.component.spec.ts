import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate Id during NgOnit when (@Input id ) id assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  //Maneira de matar uma formiga com uma bazuka
  it(`#${LikeWidgetComponent.prototype.like.name}
  Should trigger (@Output liked) when called`, (done) => {
    fixture.detectChanges();

    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });

    component.like();
  });

  //Maneira com SpyOn
  it(`#Spy ${LikeWidgetComponent.prototype.like.name}
    Should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');

    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
