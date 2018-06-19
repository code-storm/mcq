import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PopupsComponent } from '../../popups/popups.component';

@Injectable()
export class PopupService {

  constructor(private resolver: ComponentFactoryResolver) { }

  openStartTestDialog(setting: {
    popupContainer: ViewContainerRef,
    popupHeading: string,
    popupBody: string,
    popupBody2: string,
    yesText: string,
    yesFunction: any
  }): void {
    setting.popupContainer.clear();
    const factory = this.resolver.resolveComponentFactory(PopupsComponent);
    const componentRef = setting.popupContainer.createComponent(factory);
    if (setting.popupHeading) {
      componentRef.instance.popupHeading = setting.popupHeading;
    }
    if (setting.popupBody) {
      componentRef.instance.popupBody = setting.popupBody;
    }
    if (setting.popupBody2) {
      componentRef.instance.popupBody2 = setting.popupBody2;
    }
    if (setting.yesText) {
      componentRef.instance.yesText = setting.yesText;
    }
    componentRef.instance.yesFunction = setting.yesFunction;
    componentRef.instance._ref = componentRef;
    componentRef.instance.closePopup = () => {
      componentRef.destroy();
    }
  }

}
