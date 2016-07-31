import {Observable} from 'data/observable';
import {XMLParser} from 'nativescript-xmlparser';

export class HelloWorldModel extends Observable {
  public message: string;
  private yourPlugin: XMLParser;

  constructor() {
    super();

    this.yourPlugin = new XMLParser();
    this.message = this.yourPlugin.message;
  }
}