import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private localState: any = {};

  setState(key: string, value: any): void {
    this.localState[key] = value;
  }

  getState(key: string): any {
    return this.localState[key];
  }

  clearState(key: string): void {
    delete this.localState[key];
  }

  clearAllState(): void {
    this.localState = {};
  }
}
