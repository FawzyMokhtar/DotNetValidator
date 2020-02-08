import {Directive, ElementRef, AfterViewInit} from "@angular/core";
import hlJs from "highlight.js/lib/highlight";
import cs from "highlight.js/lib/languages/cs";
hlJs.registerLanguage("csharp", cs);

@Directive({
  selector: "code[appHighlight]"
})
export class HighlightDirective implements AfterViewInit {
  constructor (private elRef: ElementRef) {}

  ngAfterViewInit() {
    hlJs.highlightBlock(this.elRef.nativeElement);
  }
}
