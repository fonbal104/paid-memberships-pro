!function(e){var t={};function r(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(c,n,function(t){return e[t]}.bind(null,n));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(e,t,c){return t&&r(e.prototype,t),c&&r(e,c),e}},function(e,t,r){var c=r(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}},function(e,t,r){var c=r(9),n=r(10);e.exports=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?n(e):t}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){wp.i18n.setLocaleData({"":{}},"paid-memberships-pro")},function(e,t){function r(t,c){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,c)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){"use strict";r.r(t);var c=r(0),n=(r(7),r(6)),o=r.n(n),p=r(2),i=r.n(p),s=r(3),l=r.n(s),a=r(4),m=r.n(a),u=r(5),b=r.n(u),f=r(1),d=r.n(f);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=wp.i18n.__,v=wp.element.Component,g=wp.components,O=g.PanelBody,j=g.TextControl,w=g.SelectControl,k=wp.editor.InspectorControls,C=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=d()(t);if(h()){var c=d()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return b()(this,e)});function n(){return i()(this,n),r.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=t.text,n=t.level,o=t.css_class,p=e.setAttributes;return Object(c.createElement)(k,null,Object(c.createElement)(O,null,Object(c.createElement)(j,{label:y("Button Text","paid-memberships-pro"),help:y("Text for checkout button","paid-memberships-pro"),value:r,onChange:function(e){return p({text:e})}})),Object(c.createElement)(O,null,Object(c.createElement)(w,{label:y("Level ID","paid-memberships-pro"),help:y("Level id to check out","paid-memberships-pro"),value:n,onChange:function(e){return p({level:e})},options:window.pmpro.all_level_values_and_labels})),Object(c.createElement)(O,null,Object(c.createElement)(j,{label:y("CSS Class","paid-memberships-pro"),help:y("Additional Styling for Button","paid-memberships-pro"),value:o,onChange:function(e){return p({css_class:e})}})))}}]),n}(v);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=wp.i18n.__,M=wp.blocks.registerBlockType,S=wp.components,x=S.TextControl,D=S.SelectControl;M("pmpro/checkout-button",{title:P("Membership Checkout Button","paid-memberships-pro"),description:P("Displays a button-styled link to Membership Checkout for the specified level.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"migrate"},keywords:[P("pmpro","paid-memberships-pro"),P("buy","paid-memberships-pro"),P("level","paid-memberships-pro")],supports:{},attributes:{text:{type:"string",default:"Buy Now"},css_class:{type:"string",default:"pmpro_btn"},level:{type:"string"}},edit:function(e){var t=e.attributes,r=t.text,n=t.level,o=t.css_class,p=e.className,i=e.setAttributes,s=e.isSelected;return[s&&Object(c.createElement)(C,E({setAttributes:i},e)),Object(c.createElement)("div",{className:p},Object(c.createElement)("a",{class:o},r)),s&&Object(c.createElement)("div",null,Object(c.createElement)("br",null),Object(c.createElement)(x,{label:P("Button Text","paid-memberships-pro"),value:r,onChange:function(e){return i({text:e})}}),Object(c.createElement)(D,{label:P("Membership Level","paid-memberships-pro"),value:n,onChange:function(e){return i({level:e})},options:window.pmpro.all_level_values_and_labels}),Object(c.createElement)(x,{label:P("CSS Class","paid-memberships-pro"),value:o,onChange:function(e){return i({css_class:e})}}))]},save:function(){return null}});function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var B=wp.i18n.__,A=wp.element.Component,T=wp.components,R=T.PanelBody,N=T.CheckboxControl,I=wp.editor.InspectorControls,z=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=d()(t);if(L()){var c=d()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return b()(this,e)});function n(){return i()(this,n),r.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=t.membership,n=t.profile,o=t.invoices,p=t.links,i=e.setAttributes;return Object(c.createElement)(I,null,Object(c.createElement)(R,null,Object(c.createElement)(N,{label:B("Show 'My Memberships' Section","paid-memberships-pro"),checked:r,onChange:function(e){return i({membership:e})}})),Object(c.createElement)(R,null,Object(c.createElement)(N,{label:B("Show 'Profile' Section","paid-memberships-pro"),checked:n,onChange:function(e){return i({profile:e})}})),Object(c.createElement)(R,null,Object(c.createElement)(N,{label:B("Show 'Invoices' Section","paid-memberships-pro"),checked:o,onChange:function(e){return i({invoices:e})}})),Object(c.createElement)(R,null,Object(c.createElement)(N,{label:B("Show 'Member Links' Section","paid-memberships-pro"),checked:p,onChange:function(e){return i({links:e})}})))}}]),n}(A);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=wp.i18n.__,H=((0,wp.blocks.registerBlockType)("pmpro/account-page",{title:G("Membership Account Page","paid-memberships-pro"),description:G("Displays the sections of the Membership Account page as selected below.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"admin-users"},keywords:[G("pmpro","paid-memberships-pro")],supports:{},attributes:{membership:{type:"boolean",default:!1},profile:{type:"boolean",default:!1},invoices:{type:"boolean",default:!1},links:{type:"boolean",default:!1}},edit:function(e){var t=e.setAttributes;return[e.isSelected&&Object(c.createElement)(z,q({setAttributes:t},e)),Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,G("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,G("Membership Account Page","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),J=((0,wp.blocks.registerBlockType)("pmpro/account-membership-section",{title:H("Membership Account: Memberships","paid-memberships-pro"),description:H("Displays the member's membership information.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"groups"},keywords:[H("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,H("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,H("Membership Account: My Memberships","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),K=((0,wp.blocks.registerBlockType)("pmpro/account-profile-section",{title:J("Membership Account: Profile","paid-memberships-pro"),description:J("Displays the member's profile information.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"admin-users"},keywords:[J("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-blocks-element"},Object(c.createElement)("span",null,J("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,J("Membership Account: Profile","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),Q=((0,wp.blocks.registerBlockType)("pmpro/account-invoices-section",{title:K("Membership Account: Invoices","paid-memberships-pro"),description:K("Displays the member's invoices.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"archive"},keywords:[K("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,K("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null," ",K("Membership Account: Invoices","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),U=((0,wp.blocks.registerBlockType)("pmpro/account-links-section",{title:Q("Membership Account: Links","paid-memberships-pro"),description:Q("Displays the member's member links. This block is only visible if other Add Ons or custom code have added links.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"external"},keywords:[Q("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,Q("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,Q("Membership Account: Member Links","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),V=((0,wp.blocks.registerBlockType)("pmpro/billing-page",{title:U("Membership Billing Page","paid-memberships-pro"),description:U("Displays the member's billing information and allows them to update the payment method.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"list-view"},keywords:[U("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,U("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,U("Membership Billing Page","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__);(0,wp.blocks.registerBlockType)("pmpro/cancel-page",{title:V("Membership Cancel Page","paid-memberships-pro"),description:V("Generates the Membership Cancel page.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"no"},keywords:[V("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,V("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,V("Membership Cancel Page","paid-memberships-pro")))]},save:function(){return null}});function W(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var X=wp.i18n.__,Y=wp.element.Component,Z=wp.components,$=Z.PanelBody,ee=(Z.PanelRow,Z.SelectControl),te=wp.editor.InspectorControls,re=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=d()(t);if(W()){var c=d()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return b()(this,e)});function n(){return i()(this,n),r.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var e=this.props,t=e.attributes.pmpro_default_level,r=e.setAttributes;return Object(c.createElement)(te,null,Object(c.createElement)($,null,Object(c.createElement)(ee,{label:X("Membership Level","paid-memberships-pro"),help:X("Choose a default level for Membership Checkout.","paid-memberships-pro"),value:t,onChange:function(e){return r({pmpro_default_level:e})},options:[""].concat(window.pmpro.all_level_values_and_labels)})))}}]),n}(Y);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=wp.i18n.__,pe=wp.blocks.registerBlockType,ie=wp.components.SelectControl,se=(pe("pmpro/checkout-page",{title:oe("Membership Checkout Form","paid-memberships-pro"),description:oe("Displays the Membership Checkout form.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"list-view"},keywords:[oe("pmpro","paid-memberships-pro")],supports:{},attributes:{pmpro_default_level:{type:"string",source:"meta",meta:"pmpro_default_level"}},edit:function(e){var t=e.attributes.pmpro_default_level,r=(e.className,e.setAttributes);return[e.isSelected&&Object(c.createElement)(re,ne({setAttributes:r},e)),Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,"Paid Memberships Pro"),Object(c.createElement)("span",null,"Membership Checkout Form"),Object(c.createElement)(ie,{label:oe("Membership Level","paid-memberships-pro"),value:t,onChange:function(e){return r({pmpro_default_level:e})},options:window.pmpro.all_level_values_and_labels}))]},save:function(){return null}}),wp.i18n.__),le=((0,wp.blocks.registerBlockType)("pmpro/confirmation-page",{title:se("Membership Confirmation Page","paid-memberships-pro"),description:se("Displays the member's Membership Confirmation after Membership Checkout.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"yes"},keywords:[se("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,se("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,se("Membership Confirmation Page","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),ae=((0,wp.blocks.registerBlockType)("pmpro/invoice-page",{title:le("Membership Invoice Page","paid-memberships-pro"),description:le("Displays the member's  Membership Invoices.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"archive"},keywords:[le("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,le("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,le("Membership Invoices","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),me=((0,wp.blocks.registerBlockType)("pmpro/levels-page",{title:ae("Membership Levels List","paid-memberships-pro"),description:ae("Displays a list of Membership Levels. To change the order, go to Memberships > Settings > Levels.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"list-view"},keywords:[ae("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,ae("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,ae("Membership Levels List","paid-memberships-pro")))]},save:function(){return null}}),wp.i18n.__),ue=wp.blocks.registerBlockType,be=wp.components,fe=be.PanelBody,de=be.SelectControl,he=wp.editor,ye=he.InspectorControls,ve=he.InnerBlocks,ge=[{value:0,label:"Non-Members"}].concat(pmpro.all_level_values_and_labels),Oe=(ue("pmpro/membership",{title:me("Require Membership Block","paid-memberships-pro"),description:me("Control the visibility of nested blocks for members or non-members.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"visibility"},keywords:[me("pmpro","paid-memberships-pro")],attributes:{levels:{type:"array",default:[]},uid:{type:"string",default:""}},edit:function(e){var t=e.attributes,r=t.levels,n=t.uid,o=e.setAttributes,p=e.isSelected;if(""==n){var i=Math.random()+"";o({uid:i})}return[p&&Object(c.createElement)(ye,null,Object(c.createElement)(fe,null,Object(c.createElement)(de,{multiple:!0,label:me("Select levels to show content to:","paid-memberships-pro"),value:r,onChange:function(e){o({levels:e})},options:ge}))),p&&Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",{class:"pmpro-membership-title"},me("Require Membership","paid-memberships-pro")),Object(c.createElement)(fe,null,Object(c.createElement)(de,{multiple:!0,label:me("Select levels to show content to:","paid-memberships-pro"),value:r,onChange:function(e){o({levels:e})},options:ge})),Object(c.createElement)(ve,{templateLock:!1})),!p&&Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",{class:"pmpro-membership-title"},me("Require Membership:","paid-memberships-pro")," ",r),Object(c.createElement)(ve,{templateLock:!1}))]},save:function(e){var t=e.className;return Object(c.createElement)("div",{className:t},Object(c.createElement)(ve.Content,null))}}),wp.i18n.__);(0,wp.blocks.registerBlockType)("pmpro/member-profile-edit",{title:Oe("Member Profile Edit","paid-memberships-pro"),description:Oe("Allow member profile editing.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"admin-users"},keywords:[Oe("pmpro","paid-memberships-pro"),Oe("member","paid-memberships-pro"),Oe("profile","paid-memberships-pro")],edit:function(e){return Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,Oe("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,Oe("Member Profile Edit","paid-memberships-pro")))},save:function(){return null}});function je(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var we,ke=wp.i18n.__,Ce=wp.element.Component,_e=wp.components,Ee=_e.PanelBody,Pe=(_e.SelectControl,_e.ToggleControl),Me=wp.editor.InspectorControls,Se=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=d()(t);if(je()){var c=d()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return b()(this,e)});function n(){return i()(this,n),r.apply(this,arguments)}return l()(n,[{key:"render",value:function(){var e=this,t=this.props,r=t.attributes,n=(t.setAttributes,r.display_if_logged_in),o=r.show_menu,p=r.show_logout_link;r.location;return Object(c.createElement)(Me,null,Object(c.createElement)(Ee,null,Object(c.createElement)(Pe,{label:ke("Display If Logged In","paid-memberships-pro"),checked:n,onChange:function(t){e.props.setAttributes({display_if_logged_in:t})}}),Object(c.createElement)(Pe,{label:ke("Show Menu","paid-memberships-pro"),checked:o,onChange:function(t){e.props.setAttributes({show_menu:t})}}),Object(c.createElement)(Pe,{label:ke("Show Logout Link","paid-memberships-pro"),checked:p,onChange:function(t){e.props.setAttributes({show_logout_link:t})}})))}}]),n}(Ce),xe=wp.i18n.__,De=wp.blocks.registerBlockType,Le=wp.element.Fragment;De("pmpro/login-form",{title:xe("Log in Form","paid-memberships-pro"),description:xe("Displays a Log In Form for Paid Memberships Pro.","paid-memberships-pro"),category:"pmpro",icon:{background:"#2997c8",foreground:"#ffffff",src:"unlock"},keywords:[xe("pmpro","paid-memberships-pro"),xe("login","paid-memberships-pro"),xe("form","paid-memberships-pro"),xe("log in","paid-memberships-pro")],supports:{},edit:function(e){return[Object(c.createElement)(Le,null,Object(c.createElement)(Se,e),Object(c.createElement)("div",{className:"pmpro-block-element"},Object(c.createElement)("span",null,xe("Paid Memberships Pro","paid-memberships-pro")),Object(c.createElement)("span",null,xe("Log in Form","paid-memberships-pro"))))]},save:function(){return null}});we=Object(c.createElement)("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 18 18"},Object(c.createElement)("path",{d:"M17.99,4.53c-0.35,0.12-0.7,0.26-1.06,0.4c-0.35,0.14-0.7,0.3-1.05,0.46c-0.35,0.16-0.69,0.33-1.03,0.51 c-0.34,0.18-0.68,0.37-1.02,0.56c-0.15,0.09-0.31,0.18-0.46,0.27c-0.15,0.09-0.3,0.19-0.45,0.28c-0.15,0.1-0.3,0.19-0.45,0.29 c-0.15,0.1-0.3,0.2-0.44,0.3c-0.08,0.05-0.16,0.11-0.23,0.16c-0.08,0.05-0.16,0.11-0.23,0.17c-0.08,0.06-0.15,0.11-0.23,0.17 c-0.08,0.06-0.15,0.11-0.23,0.17c-0.07,0.05-0.13,0.1-0.2,0.15c-0.07,0.05-0.13,0.1-0.2,0.15c-0.07,0.05-0.13,0.1-0.2,0.15 c-0.07,0.05-0.13,0.1-0.2,0.16c-0.04,0.03-0.09,0.07-0.13,0.1c-0.04,0.03-0.09,0.07-0.13,0.1C10,9.13,9.95,9.17,9.91,9.2 C9.87,9.24,9.83,9.27,9.79,9.31C9.77,9.32,9.75,9.33,9.74,9.35C9.72,9.36,9.71,9.37,9.69,9.39C9.67,9.4,9.66,9.42,9.64,9.43 C9.63,9.44,9.61,9.46,9.59,9.47C9.54,9.52,9.49,9.56,9.43,9.61C9.38,9.65,9.33,9.7,9.27,9.74C9.22,9.79,9.17,9.84,9.11,9.88 c-0.05,0.05-0.11,0.09-0.16,0.14c-0.27,0.24-0.54,0.49-0.81,0.75c-0.26,0.25-0.53,0.51-0.78,0.78c-0.26,0.26-0.51,0.53-0.76,0.81 c-0.25,0.27-0.49,0.55-0.73,0.84c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.07,0.08-0.1,0.12 c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.06,0.08-0.1,0.12c-0.03,0.04-0.06,0.08-0.1,0.12 c-0.03,0.04-0.06,0.08-0.1,0.12c0,0.01-0.01,0.01-0.01,0.02c0,0.01-0.01,0.01-0.01,0.02c0,0.01-0.01,0.01-0.01,0.02 c0,0.01-0.01,0.01-0.01,0.02c-0.03,0.03-0.05,0.07-0.08,0.1c-0.03,0.03-0.05,0.07-0.08,0.1c-0.03,0.03-0.05,0.07-0.08,0.11 c-0.03,0.03-0.05,0.07-0.08,0.11c-0.03,0.04-0.06,0.08-0.09,0.12c-0.03,0.04-0.06,0.08-0.09,0.12C4.5,14.96,4.47,15,4.44,15.05 c-0.03,0.04-0.06,0.08-0.09,0.13c0,0-0.01,0.01-0.01,0.01c0,0-0.01,0.01-0.01,0.01c0,0-0.01,0.01-0.01,0.01c0,0-0.01,0.01-0.01,0.01 c-0.15,0.22-0.31,0.44-0.46,0.67c-0.15,0.22-0.3,0.45-0.44,0.68c-0.14,0.23-0.29,0.46-0.43,0.7C2.85,17.52,2.71,17.76,2.58,18 c-0.08-0.19-0.16-0.38-0.23-0.56c-0.07-0.18-0.14-0.35-0.21-0.51c-0.07-0.16-0.13-0.32-0.19-0.47c-0.06-0.15-0.12-0.3-0.18-0.45 l-0.01,0.01l0.01-0.03c-0.01-0.03-0.02-0.05-0.03-0.08c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07 c-0.01-0.02-0.02-0.05-0.03-0.07c0-0.01-0.01-0.02-0.01-0.02c0-0.01-0.01-0.02-0.01-0.02c0-0.01-0.01-0.02-0.01-0.02 c0-0.01-0.01-0.02-0.01-0.02c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.02-0.01-0.04-0.02-0.05 c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.03-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07 c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07 c-0.01-0.02-0.02-0.05-0.03-0.07c-0.02-0.05-0.04-0.1-0.06-0.16c-0.02-0.05-0.04-0.1-0.06-0.16c-0.02-0.05-0.04-0.11-0.06-0.16 c-0.02-0.05-0.04-0.11-0.06-0.16c-0.08-0.23-0.16-0.47-0.25-0.72c-0.08-0.25-0.17-0.5-0.26-0.77c-0.09-0.27-0.18-0.55-0.27-0.84 c-0.09-0.29-0.19-0.6-0.29-0.93c0.05,0.07,0.1,0.15,0.15,0.22c0.05,0.07,0.1,0.14,0.14,0.2c0.05,0.07,0.09,0.13,0.14,0.19 c0.04,0.06,0.09,0.12,0.13,0.18c0.09,0.13,0.18,0.24,0.27,0.35c0.09,0.11,0.17,0.21,0.24,0.3c0.08,0.09,0.15,0.18,0.23,0.27 c0.07,0.09,0.15,0.17,0.22,0.25c0.02,0.02,0.03,0.04,0.05,0.06c0.02,0.02,0.03,0.04,0.05,0.06c0.02,0.02,0.03,0.04,0.05,0.06 c0.02,0.02,0.03,0.04,0.05,0.06c0.07,0.07,0.13,0.14,0.2,0.22c0.07,0.08,0.14,0.16,0.22,0.24c0.08,0.08,0.16,0.17,0.24,0.27 c0.09,0.1,0.18,0.2,0.27,0.31c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.04 c0.01,0.01,0.02,0.02,0.03,0.04c0.02-0.02,0.04-0.05,0.06-0.07c0.02-0.02,0.04-0.05,0.06-0.07c0.02-0.02,0.04-0.05,0.06-0.07 C2.96,14.03,2.98,14,3,13.98c0.03-0.03,0.05-0.06,0.08-0.09c0.03-0.03,0.05-0.06,0.08-0.09c0.03-0.03,0.05-0.06,0.08-0.09 c0.03-0.03,0.05-0.06,0.08-0.09c0.28-0.33,0.58-0.65,0.88-0.97c0.31-0.32,0.63-0.62,0.95-0.92c0.33-0.3,0.67-0.6,1.02-0.88 c0.35-0.29,0.72-0.57,1.09-0.84c0.06-0.04,0.11-0.08,0.17-0.12C7.49,9.83,7.55,9.79,7.6,9.75c0.06-0.04,0.11-0.08,0.17-0.12 c0.06-0.04,0.12-0.08,0.17-0.12C7.97,9.5,7.98,9.49,8,9.48c0.02-0.01,0.03-0.02,0.05-0.03C8.06,9.43,8.08,9.42,8.1,9.41 C8.11,9.4,8.13,9.38,8.14,9.37c0.05-0.03,0.1-0.06,0.14-0.1c0.05-0.03,0.1-0.06,0.14-0.1c0.05-0.03,0.1-0.06,0.14-0.1 c0.05-0.03,0.1-0.06,0.15-0.09C8.79,8.94,8.87,8.9,8.94,8.85C9.01,8.8,9.09,8.76,9.16,8.71c0.07-0.05,0.15-0.09,0.22-0.14 c0.07-0.05,0.15-0.09,0.22-0.14c0.09-0.05,0.17-0.11,0.26-0.16c0.09-0.05,0.17-0.1,0.26-0.16c0.09-0.05,0.18-0.1,0.27-0.15 c0.09-0.05,0.18-0.1,0.27-0.15c0.25-0.14,0.51-0.28,0.76-0.42c0.26-0.14,0.52-0.27,0.78-0.41c0.26-0.13,0.53-0.27,0.79-0.4 c0.27-0.13,0.54-0.26,0.81-0.38c0.01,0,0.02-0.01,0.03-0.01c0.01,0,0.02-0.01,0.03-0.01c0.01,0,0.02-0.01,0.03-0.01 c0.01,0,0.02-0.01,0.03-0.01c0.33-0.15,0.67-0.3,1-0.44c0.34-0.15,0.68-0.29,1.02-0.42c0.34-0.14,0.69-0.27,1.03-0.4 C17.31,4.77,17.65,4.64,17.99,4.53z M15.73,9.59l0.65,4.56l-10.4-0.05c-0.02,0.02-0.04,0.04-0.05,0.07 c-0.02,0.02-0.04,0.04-0.05,0.07c-0.02,0.02-0.04,0.04-0.05,0.07c-0.02,0.02-0.04,0.04-0.05,0.07c-0.02,0.02-0.03,0.04-0.05,0.06 c-0.02,0.02-0.03,0.04-0.05,0.06c-0.02,0.02-0.03,0.04-0.05,0.06c-0.02,0.02-0.03,0.04-0.05,0.06l11.23,0.2l-0.78-5.24L15.73,9.59z M6.75,13.2c-0.04,0.04-0.08,0.09-0.11,0.13c-0.04,0.04-0.08,0.09-0.11,0.13c-0.04,0.04-0.07,0.09-0.11,0.13l9.22-0.07L15.04,9.1 l-0.07-0.53l-0.39,0.04l0.55,4.3l-8.27,0.17C6.83,13.12,6.79,13.16,6.75,13.2z M13.78,7.66l-0.59,0.08 c-0.06,0.04-0.12,0.08-0.18,0.12c-0.06,0.04-0.12,0.08-0.18,0.12c-0.06,0.04-0.12,0.08-0.18,0.12c-0.06,0.04-0.12,0.08-0.18,0.12 c-0.08,0.05-0.16,0.11-0.24,0.16c-0.08,0.06-0.16,0.11-0.24,0.17c-0.08,0.06-0.16,0.11-0.24,0.17c-0.08,0.06-0.16,0.11-0.24,0.17 c-0.07,0.05-0.14,0.1-0.21,0.15c-0.07,0.05-0.14,0.1-0.21,0.15c-0.07,0.05-0.14,0.1-0.2,0.16c-0.07,0.05-0.14,0.11-0.2,0.16 c-0.04,0.03-0.09,0.07-0.13,0.1c-0.04,0.03-0.09,0.07-0.13,0.1c-0.04,0.04-0.09,0.07-0.13,0.11c-0.04,0.04-0.09,0.07-0.13,0.11 c-0.02,0.01-0.03,0.03-0.05,0.04c-0.02,0.01-0.03,0.03-0.05,0.04c-0.02,0.01-0.03,0.03-0.05,0.04c-0.02,0.01-0.03,0.03-0.05,0.04 c-0.06,0.05-0.11,0.09-0.16,0.14c-0.05,0.05-0.11,0.09-0.16,0.14c-0.05,0.05-0.11,0.09-0.16,0.14c-0.05,0.05-0.11,0.09-0.16,0.14 c-0.17,0.15-0.34,0.3-0.51,0.46c-0.17,0.16-0.33,0.31-0.5,0.47c-0.16,0.16-0.33,0.32-0.49,0.48c-0.16,0.16-0.32,0.33-0.48,0.49 l6.98-0.23l-0.48-4.16L13.78,7.66z M13.32,5.73c-0.06,0.03-0.11,0.05-0.17,0.08c-0.06,0.03-0.12,0.06-0.17,0.09 c-0.03,0.01-0.06,0.03-0.08,0.04c0,0,0,0,0,0c-0.02-0.01-0.04-0.03-0.06-0.04c-0.06-0.04-0.13-0.07-0.21-0.09 c-0.07-0.02-0.15-0.04-0.23-0.04c-0.08,0-0.16,0-0.24,0.01l-0.14,0.02c0.07-0.04,0.13-0.08,0.18-0.14c0.05-0.05,0.1-0.11,0.14-0.18 c0.04-0.06,0.06-0.13,0.08-0.2c0.02-0.07,0.02-0.15,0.01-0.22c-0.01-0.1-0.04-0.18-0.08-0.26c-0.05-0.08-0.11-0.14-0.18-0.19 c-0.07-0.05-0.16-0.08-0.25-0.1c-0.09-0.02-0.19-0.02-0.29,0c-0.1,0.02-0.19,0.06-0.27,0.11c-0.08,0.05-0.15,0.11-0.21,0.19 C11.08,4.9,11.03,4.98,11,5.07c-0.03,0.09-0.04,0.18-0.03,0.27c0.01,0.07,0.02,0.14,0.05,0.2c0.03,0.06,0.06,0.12,0.11,0.17 c0.05,0.05,0.1,0.09,0.16,0.12c0.06,0.03,0.13,0.06,0.2,0.07l-0.17,0.03C11.18,5.96,11.06,6,10.94,6.07 c-0.11,0.07-0.21,0.15-0.29,0.25c-0.08,0.1-0.14,0.21-0.19,0.33c-0.04,0.12-0.06,0.25-0.05,0.38l0.02,0.33 c-0.09,0.05-0.17,0.1-0.26,0.16c-0.02,0-0.05,0-0.07,0c0.02-0.01,0.04-0.02,0.06-0.03c-0.06-0.06-0.13-0.11-0.21-0.16 c-0.07-0.04-0.15-0.08-0.24-0.1C9.63,7.2,9.54,7.18,9.45,7.18c-0.09-0.01-0.18,0-0.27,0.01L9.01,7.21c0.08-0.05,0.16-0.1,0.23-0.17 C9.3,6.97,9.36,6.9,9.41,6.81C9.46,6.73,9.5,6.64,9.52,6.55c0.02-0.09,0.03-0.19,0.03-0.29C9.54,6.13,9.51,6.02,9.46,5.92 c-0.05-0.1-0.12-0.18-0.21-0.25C9.17,5.6,9.07,5.56,8.96,5.53c-0.11-0.02-0.22-0.03-0.34,0C8.5,5.55,8.39,5.6,8.29,5.66 C8.19,5.72,8.1,5.81,8.02,5.9C7.95,5.99,7.89,6.1,7.85,6.21C7.81,6.32,7.79,6.44,7.79,6.56c0,0.09,0.02,0.18,0.05,0.26 c0.03,0.08,0.07,0.16,0.12,0.22c0.05,0.07,0.11,0.12,0.18,0.17c0.07,0.04,0.15,0.08,0.23,0.1l-0.2,0.03 C8.01,7.37,7.85,7.42,7.72,7.51C7.58,7.59,7.46,7.7,7.35,7.82C7.25,7.95,7.17,8.1,7.11,8.25c-0.06,0.16-0.09,0.33-0.08,0.5 l0.01,0.74C6.98,9.53,6.93,9.58,6.88,9.62C6.81,9.49,6.74,9.38,6.65,9.28c-0.1-0.11-0.21-0.2-0.33-0.27 C6.2,8.94,6.07,8.89,5.93,8.87C5.8,8.84,5.66,8.83,5.51,8.85L5.3,8.88c0.1-0.06,0.2-0.13,0.29-0.22c0.09-0.09,0.16-0.19,0.23-0.3 c0.06-0.11,0.12-0.23,0.15-0.35C6,7.88,6.02,7.75,6.02,7.62c0-0.17-0.03-0.32-0.08-0.46C5.88,7.03,5.8,6.91,5.71,6.82 C5.61,6.73,5.5,6.67,5.37,6.63c-0.12-0.04-0.26-0.04-0.4-0.02c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.14,0.03-0.28,0.08-0.4,0.16c-0.12,0.08-0.23,0.18-0.33,0.3C4.14,7.2,4.07,7.33,4.01,7.48c-0.06,0.15-0.09,0.3-0.1,0.46 c0,0.12,0.01,0.24,0.03,0.35c0.03,0.11,0.07,0.21,0.12,0.3c0.05,0.09,0.12,0.17,0.2,0.23c0.08,0.06,0.17,0.11,0.27,0.14L4.3,9 C4.1,9.03,3.92,9.09,3.75,9.2C3.58,9.3,3.43,9.44,3.3,9.6c-0.13,0.16-0.24,0.35-0.32,0.56c-0.08,0.21-0.13,0.43-0.14,0.67 l-0.12,2.26l-0.53-0.6l0.49-6.3C2.68,6.09,2.71,6,2.74,5.91c0.04-0.09,0.08-0.17,0.14-0.24c0.06-0.07,0.12-0.14,0.2-0.19 C3.15,5.44,3.23,5.4,3.32,5.38l0.71-0.17l0-0.02l0.18-0.04l0.06-1.19C4.3,3.56,4.39,3.15,4.55,2.77c0.16-0.38,0.37-0.75,0.64-1.08 C5.45,1.35,5.76,1.05,6.11,0.8c0.35-0.26,0.74-0.47,1.16-0.61C7.7,0.05,8.12-0.01,8.51,0c0.4,0.02,0.77,0.12,1.1,0.29 c0.33,0.18,0.62,0.43,0.83,0.75c0.21,0.33,0.35,0.73,0.38,1.19l0.1,1.36l0.3-0.07l0,0.02l0.89-0.21c0.13-0.03,0.25-0.03,0.36-0.02 c0.12,0.02,0.22,0.05,0.32,0.11c0.09,0.05,0.17,0.13,0.23,0.21c0.06,0.09,0.1,0.19,0.11,0.31L13.32,5.73z M9.46,3.96L9.4,2.61 C9.39,2.33,9.31,2.09,9.19,1.88C9.07,1.68,8.91,1.51,8.71,1.4C8.52,1.28,8.29,1.21,8.05,1.19C7.81,1.17,7.55,1.2,7.28,1.28 C7.01,1.37,6.76,1.49,6.53,1.65c-0.22,0.16-0.43,0.35-0.6,0.57C5.77,2.43,5.63,2.67,5.53,2.91c-0.1,0.25-0.16,0.5-0.17,0.76 L5.33,4.91L9.46,3.96z"})),wp.blocks.updateCategory("pmpro",{icon:we})}]);