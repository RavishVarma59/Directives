import { HighlightTextDirective } from './highlight-text.directive';

describe('HighlightTextDirective', () => {
  it('should create an instance', () => {
    const elementRef = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new HighlightTextDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
