import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class MyLibService {
    constructor() { }
}
MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
MyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MyLibService.ctorParameters = () => [];

class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!!!
    </p>
    <input type="date">
  `
            },] }
];
MyLibComponent.ctorParameters = () => [];

class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MyLibComponent
                ],
                imports: [],
                exports: [
                    MyLibComponent
                ]
            },] }
];

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=test-6-14-2022.js.map
