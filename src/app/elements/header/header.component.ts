import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedImags: string =
    'https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png';
  menuOpen = false;

  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang(this.selectedLanguage);
  }

  toggleMenu() {
    this.menuOpen = true;
  }
  onItemClick(language: string, image: string) {
    this.translateService.use(language);
    this.selectedImags = image;
    this.menuOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const menuContainer = document.querySelector('.menu-container');

    if (
      menuContainer &&
      !this.isDescendantOf(event.target as Node, menuContainer)
    ) {
      this.menuOpen = false;
    }
  }
  private isDescendantOf(target: Node, parent: Node): boolean {
    return parent.contains(target);
  }
}
