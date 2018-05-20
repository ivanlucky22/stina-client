import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languages = {
    "ru": "/assets/img/ua.svg",
    "ua": "/assets/img/ua.svg",
    "en": "/assets/img/gb.svg"
  };
  selectedLanguageKey = "ru";
  private _languageKeys: any;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  get languageKeys() {
    if (!this._languageKeys) {
      this._languageKeys = Object.keys(this.languages);
    }
    return this._languageKeys;
  }

  changeLanguage(key) {
    this.selectedLanguageKey = key;
    this.translate.use(key);
  }
}
