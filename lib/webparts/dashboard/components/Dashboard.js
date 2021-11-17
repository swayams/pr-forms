var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Dashboard.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.render = function () {
        return (React.createElement("div", { className: styles.dashboard },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to SharePoint!"),
                        React.createElement("p", { className: styles.subTitle }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: styles.description }, escape(this.props.description)),
                        React.createElement("a", { href: "https://aka.ms/spfx", className: styles.button },
                            React.createElement("span", { className: styles.label }, "Learn more")))))));
    };
    return Dashboard;
}(React.Component));
export default Dashboard;
//# sourceMappingURL=Dashboard.js.map