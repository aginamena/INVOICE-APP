(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(19),r=c.n(o),s=(c(25),c(26),c(7)),l=c(3),i=(c(27),c(0));function d(e){var t=Object(n.useState)("moon"),c=Object(l.a)(t,2),o=c[0],r=c[1],s=Object(n.useState)(),d=Object(l.a)(s,2),a=d[0],u=d[1];function b(t){r(t),e.sunOrMoon(t)}return Object(n.useEffect)((function(){"sun"==e.backgroundColor?u({backgroundColor:"#494e6e"}):u({backgroundColor:"#1E2139"})}),[e.backgroundColor]),Object(i.jsxs)("div",{id:"sidebar",style:a,children:[Object(i.jsx)("div",{id:"logoContainer",children:Object(i.jsx)("img",{src:"./assets/logo.svg",alt:"image logo",id:"logo-image"})}),Object(i.jsxs)("span",{children:["moon"===o?Object(i.jsx)("img",{src:"./assets/icon-moon.svg",onClick:function(){"moon"===o&&b("sun")},className:"themeColor"}):Object(i.jsx)("img",{src:"./assets/icon-sun.svg",onClick:function(){"sun"===o&&b("moon")},className:"themeColor"}),Object(i.jsx)("div",{id:"myImageContainer",children:Object(i.jsx)("img",{src:"./assets/my-profile.jpg",id:"myImage"})})]})]})}c(29);function a(e){var t=Object(n.useState)(window.innerWidth),c=Object(l.a)(t,2),o=c[0],r=c[1];function s(){r(window.innerWidth)}window.onresize=s,window.onload=s;var d="sun"==e.backgroundColor?{color:"#888EB0"}:{color:"#DFE3FA"};return Object(i.jsxs)("div",{id:"mainPageHeading",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:"sun"==e.backgroundColor?{color:"#0C0E16"}:{color:"white"},children:"Invoices"}),1==e.invoiceNumber?Object(i.jsx)("h3",{style:d,children:"There is 1 invoice"}):0==e.invoiceNumber?Object(i.jsx)("h3",{style:d,children:"There is no invoice"}):Object(i.jsxs)("h3",{style:d,children:["There are ",e.invoiceNumber," total invoices"]})]}),Object(i.jsxs)("div",{id:"mainPageOptions",children:[Object(i.jsxs)("div",{className:o<992?"btn-group dropup":"dropdown",id:"firstdropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:"sun"==e.backgroundColor?{color:"#0C0E16"}:{color:"white"},children:"Filter by status"}),Object(i.jsxs)("div",{className:"dropdown-menu dropdownContainer","aria-labelledby":"dropdownMenuButton",onClick:function(t){var c=document.getElementsByClassName("checkbox");if("checkbox"==t.target.getAttribute("class")){e.sort(t.target.nextSibling.textContent);for(var n=0;n<c.length;n++)c[n].getAttribute("id")!=t.target.getAttribute("id")&&(c[n].checked=!1)}},style:"sun"==e.backgroundColor?{backgroundColor:"white"}:{backgroundColor:"rgb(30, 33, 57)"},children:[Object(i.jsxs)("div",{className:"dropdown-item",children:[Object(i.jsx)("input",{type:"checkbox",id:"first",className:"checkbox"}),Object(i.jsx)("span",{style:"sun"==e.backgroundColor?{color:"#0C0E16"}:{color:"white"},children:"All"})]}),Object(i.jsxs)("div",{className:"dropdown-item",children:[Object(i.jsx)("input",{type:"checkbox",id:"second",className:"checkbox"}),Object(i.jsx)("span",{style:"sun"==e.backgroundColor?{color:"#0C0E16"}:{color:"white"},children:"Draft"})]}),Object(i.jsxs)("div",{className:"dropdown-item",children:[Object(i.jsx)("input",{type:"checkbox",id:"third",className:"checkbox"}),Object(i.jsx)("span",{style:"sun"==e.backgroundColor?{color:"#0C0E16"}:{color:"white"},children:"Pending"})]}),Object(i.jsxs)("div",{className:"dropdown-item",children:[Object(i.jsx)("input",{type:"checkbox",id:"fourth",className:"checkbox"}),Object(i.jsx)("span",{style:"sun"==e.backgroundColor?{color:"#0C0E16"}:{color:"white"},children:"Paid"})]})]})]}),Object(i.jsxs)("button",{id:"newInvoice",onClick:function(){return document.querySelector("#homePage").style="background: rgba(0, 0, 0, 0.5)","sun"==e.backgroundColor?(document.querySelector("#formElement").style="display:block; background:rgba(0, 0, 0, 0.06)",document.querySelector("#saveOrDeleteBtn").style="display:flex; align-items:center; justify-content:space-around; background:white",document.querySelector(".sidebarContainer").style="height:1024px;"):(document.querySelector(".sidebarContainer").style="height:1024px;background: #252945;",document.querySelector("#formElement").style="display:block; background:#252945",document.querySelector("#saveOrDeleteBtn").style="display:flex; align-items:center; justify-content:space-around; background:#252945"),document.querySelector("#invoiceHeading").textContent="New Invoice",void(window.innerWidth>992?"sun"==e.backgroundColor?document.querySelector("#sidebar").style="height:100%; background-color:#494e6e":document.querySelector("#sidebar").style="height:100%; background-color:#1E2139":"sun"==e.backgroundColor?document.querySelector("#sidebar").style="height:100vw; background-color:#494e6e":document.querySelector("#sidebar").style="height:100vw; background-color:#1E2139")},children:[Object(i.jsx)("span",{id:"plusContainer",children:Object(i.jsx)("img",{src:"./assets/icon-plus.svg"})}),Object(i.jsx)("span",{id:"invoiceText",children:"New Invoice"})]})]})]})}c(30);var u=c(9);c(31);function b(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),o=c[0],r=c[1];Object(n.useEffect)((function(){"paid"===e.status?r({name:"Paid",color:"#33D69F",background:"sun"==e.backgroundColor?"#f1f8e9":"rgba(51, 214, 159, 0.1)"}):"pending"===e.status?r({name:"Pending",color:"#FF8F00",background:"sun"==e.backgroundColor?"#ffffea":"rgba(255, 143, 0, 0.1)"}):r({name:"Draft",color:"sun"==e.backgroundColor?"#373B53":"#DFE3FA",background:"sun"==e.backgroundColor?"rgb(248, 248, 251)":"rgba(55, 59, 83, 0.1)"})}),[e.status,e.backgroundColor]);var s={width:"8px",height:"8px",display:"inline - block",borderRadius:"50px",marginRight:"8px",background:o&&o.color};return Object(i.jsxs)(u.b,{className:"invoice",to:"/view-invoice",onClick:function(){return e.sendId(e.id)},style:"sun"==e.backgroundColor?{backgroundColor:"white"}:{backgroundColor:"#1E2139"},children:[Object(i.jsxs)("div",{className:"invoiceId",children:[Object(i.jsx)("span",{className:"invoiceIdFirst",children:"#"}),Object(i.jsx)("span",{className:"invoiceIdLast",style:"sun"==e.backgroundColor?{color:"#0c0e16"}:{color:"white"},children:e.id})]}),Object(i.jsxs)("div",{className:"paymentDue",style:"sun"==e.backgroundColor?{color:"#888eb0"}:{color:"#DFE3FA"},children:["Due ",e.paymentDue]}),Object(i.jsx)("div",{className:"clientName",style:"sun"==e.backgroundColor?{color:"#858bb2"}:{color:"white"},children:e.clientName}),Object(i.jsxs)("h3",{style:"sun"==e.backgroundColor?{color:"#0c0e16"}:{color:"white"},children:["$",e.total]}),Object(i.jsxs)("div",{className:"invoiceStatus",style:o&&{color:o.color,backgroundColor:o.background},children:[Object(i.jsx)("span",{className:"circle",style:o&&s}),Object(i.jsx)("span",{className:"status",children:o&&o.name})]}),Object(i.jsx)("img",{src:"./assets/icon-arrow-right.svg",className:"invoice-arrow-right"})]})}var j=c(2);c(37),c(38),c(39),c(40);function m(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"invoiceName",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:e.name}),Object(i.jsx)("td",{className:"invoiceQuantity",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:e.quantity}),Object(i.jsxs)("td",{className:"invoicePrice",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:["$",e.price]}),Object(i.jsxs)("td",{className:"invoiceTotal",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:["$",e.total]})]})}function g(e){return Object(i.jsxs)("div",{id:"viewInvoiceStats",style:"sun"==e.background?{backgroundColor:"white"}:{backgroundColor:"rgb(30, 33, 57)"},children:[Object(i.jsxs)("div",{id:"firstStats",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{style:{color:"#888EB0"},children:"#"}),Object(i.jsx)("span",{id:"viewInvoiceId",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:e.data.id}),Object(i.jsx)("div",{id:"description",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:e.data.description})]}),Object(i.jsxs)("div",{id:"userAddress",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:[Object(i.jsx)("div",{id:"userStreet",children:e.data.senderAddress.street}),Object(i.jsx)("div",{children:e.data.senderAddress.city}),Object(i.jsx)("div",{children:e.data.senderAddress.postCode}),Object(i.jsx)("div",{children:e.data.senderAddress.country})]})]}),Object(i.jsxs)("div",{id:"secondStats",children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"statsHeading",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:"Invoice Date"}),Object(i.jsx)("div",{className:"statsHeadingInfo",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:e.data.createdAt})]}),Object(i.jsxs)("div",{id:"paymentDue",children:[Object(i.jsx)("div",{className:"statsHeading",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:"Payment Due"}),Object(i.jsx)("div",{className:"statsHeadingInfo",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:e.data.paymentDue})]})]}),Object(i.jsxs)("div",{id:"clientInfo",children:[Object(i.jsx)("div",{className:"statsHeading",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:"Bill To"}),Object(i.jsx)("div",{className:"statsHeadingInfo",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:e.data.clientName}),Object(i.jsxs)("div",{id:"ciientAddress",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:[Object(i.jsx)("div",{id:"clientStreet",children:e.data.clientAddress.street}),Object(i.jsx)("div",{children:e.data.clientAddress.city}),Object(i.jsx)("div",{children:e.data.clientAddress.postCode}),Object(i.jsx)("div",{children:e.data.clientAddress.country})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"statsHeading",style:"sun"==e.background?{color:"#7E88C3"}:{color:"#DFE3FA"},children:"Sent to"}),Object(i.jsx)("div",{className:"statsHeadingInfo",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:e.data.clientEmail})]})]}),Object(i.jsx)("div",{id:"thirdStats",className:"table-responsive",style:"sun"==e.background?{backgroundColor:"#f9fafe"}:{backgroundColor:"#252945"},children:Object(i.jsxs)("table",{className:"table table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"tableHeading",style:"sun"==e.background?{color:"#7e88c3"}:{color:"#DFE3FA"},children:"Item Name"}),Object(i.jsx)("th",{className:"tableHeading",style:"sun"==e.background?{color:"#7e88c3"}:{color:"#DFE3FA"},children:"QTY."}),Object(i.jsx)("th",{className:"tableHeading",style:"sun"==e.background?{color:"#7e88c3"}:{color:"#DFE3FA"},children:"Price"}),Object(i.jsx)("th",{className:"tableHeading",style:"sun"==e.background?{color:"#7e88c3"}:{color:"#DFE3FA"},children:"Total"})]})}),Object(i.jsx)("tbody",{children:e.data.items&&e.data.items.map((function(t){return Object(i.jsx)(m,{name:t.name,quantity:t.quantity,price:t.price,total:t.total,background:e.background},t.name)}))})]})}),Object(i.jsxs)("div",{id:"fourthStats",style:"sun"==e.background?{backgroundColor:"#373b53"}:{backgroundColor:"#0C0E16"},children:[Object(i.jsx)("div",{id:"amountDue",children:"Amount Due"}),Object(i.jsxs)("div",{id:"amountDuePrice",children:["$",e.data.total]})]})]})}function h(e){function t(t){document.querySelector("#homePage").style="background: rgba(0, 0, 0, 0.5)";var c=e.invoice;document.querySelector("#invoiceHeading").textContent="Edit #"+e.id,document.querySelector("#invoiceDate").value=c.paymentDue,document.querySelector("#description").value=c.description,document.querySelector("#dropdownMenu").textContent="1"==c.paymentTerms?"Net "+c.paymentTerms+" Day":"Net "+c.paymentTerms+" Days",document.querySelector("#clientName").value=c.clientName,document.querySelector("#clientEmail").value=c.clientEmail,document.querySelector("#senderAddress").value=c.senderAddress.street,document.querySelector("#senderCity").value=c.senderAddress.city,document.querySelector("#senderPostcode").value=c.senderAddress.postCode,document.querySelector("#senderCountry").value=c.senderAddress.country,document.querySelector("#clientAddress").value=c.clientAddress.street,document.querySelector("#clientCity").value=c.clientAddress.city,document.querySelector("#clientPostcode").value=c.clientAddress.postCode,document.querySelector("#clientCountry").value=c.clientAddress.country,e.sendStatus(e.status),1027==window.innerWidth&&(document.querySelector("#sidebar").style="height:100vw"),window.innerWidth<992?(document.querySelector("#viewInvoice").style="display:none",console.log("viewInvoicestatus.js"),"sun"==e.background?(document.querySelector("#sidebar").style="background-color: rgb(73, 78, 110); height:100vw",document.querySelector("#cancelOrSave").style="width:100%; bottom:-150px; background-color:white;"):(document.querySelector("#sidebar").style="background-color: rgb(30, 33, 57); height:100vw",document.querySelector("#cancelOrSave").style="width:100%; bottom:-150px; background-color:#rgb(37, 41, 69);")):"sun"==e.background?document.querySelector("#sidebar").style="background-color: rgb(73, 78, 110); height:100%":document.querySelector("#sidebar").style="background-color: rgb(30, 33, 57); height:100%","sun"==e.background?(document.querySelector("#formElement").style="display:block; background-color: rgba(0, 0, 0, 0.06)",document.querySelector(".sidebarContainer").style="background-color:white; height:1024px",console.log("meeeeee")):(document.querySelector("#formElement").style="display:block; background-color: rgb(37, 41, 69)",document.querySelector(".sidebarContainer").style="background-color:rgb(37, 41, 69); height:1024px",console.log("me"))}function c(t){document.querySelector("#homePage").style="height:850px; background: rgba(0, 0, 0, 0.5)","sun"==e.background?(document.querySelector("#sidebar").style="filter: brightness(0.5);background-color: rgb(73, 78, 110)",document.querySelector("#confirmDeletion").style="display:block; background-color:white",console.log("first")):(document.querySelector("#sidebar").style="filter: brightness(0.5);background-color: rgb(30, 33, 57)",document.querySelector("#confirmDeletion").style="display:block; background-color: rgb(30, 33, 57)",console.log("second")),window.innerWidth<992&&(document.querySelector("#homePage").style="background: rgba(0, 0, 0, 0.5); height:1500px"),e.confirmD(t)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{id:"viewInvoiceStatus",style:"sun"==e.background?{backgroundColor:"white"}:{backgroundColor:"rgb(30, 33, 57)"},children:"pending"==e.status?Object(i.jsxs)("div",{id:"pending",children:[Object(i.jsxs)("div",{className:"first-con",children:[Object(i.jsx)("span",{className:"status",style:"sun"==e.background?{color:"#858BB2"}:{color:"#DFE3FA"},children:"Status"}),Object(i.jsxs)("span",{className:"status-icon",style:"sun"==e.background?{backgroundColor:"#ffffea"}:{backgroundColor:"rgba(255, 143, 0, 0.1)"},children:[Object(i.jsx)("span",{className:"circle"}),Object(i.jsx)("span",{className:"stats",children:"Pending"})]})]}),Object(i.jsxs)("div",{className:"second-con",style:"sun"==e.background?{backgroundColor:"white"}:{backgroundColor:"rgb(30, 33, 57)"},children:[Object(i.jsx)("button",{className:"edit",onClick:function(){return t()},style:"sun"==e.background?{backgroundColor:"#f9fafe",color:"#7e88c3"}:{backgroundColor:"#252945",color:"#DFE3FA"},children:"Edit"}),Object(i.jsx)("button",{className:"delete",onClick:function(){return c(e.id)},children:"Delete"}),Object(i.jsx)("button",{className:"mark-as-paid",onClick:function(){e.markAsPaid(e.id)},children:"Mark as Paid"})]})]}):"paid"==e.status?Object(i.jsxs)("div",{id:"paid",children:[Object(i.jsxs)("div",{className:"first-con",children:[Object(i.jsx)("span",{className:"status",style:"sun"==e.background?{color:"#858BB2"}:{color:"#DFE3FA"},children:"Status"}),Object(i.jsxs)("span",{className:"status-icon",style:"sun"==e.background?{backgroundColor:"#f1f8e9"}:{backgroundColor:"rgba(51, 214, 159, 0.1)"},children:[Object(i.jsx)("span",{className:"circle"}),Object(i.jsx)("span",{className:"stats",children:"Paid"})]})]}),Object(i.jsxs)("div",{className:"second-con",style:"sun"==e.background?{backgroundColor:"white"}:{backgroundColor:"rgb(30, 33, 57)"},children:[Object(i.jsx)("button",{className:"edit",onClick:function(){return t()},style:"sun"==e.background?{backgroundColor:"#f9fafe",color:"#7e88c3"}:{backgroundColor:"#252945",color:"#DFE3FA"},children:"Edit"}),Object(i.jsx)("button",{className:"delete",onClick:function(){return c(e.id)},children:"Delete"})]})]}):Object(i.jsxs)("div",{id:"draft",children:[Object(i.jsxs)("div",{className:"first-con",children:[Object(i.jsx)("span",{className:"status",style:"sun"==e.background?{color:"#858BB2"}:{color:"#DFE3FA"},children:"Status"}),Object(i.jsxs)("span",{className:"status-icon",style:"sun"==e.background?{backgroundColor:"rgb(248, 248, 251)"}:{backgroundColor:"rgba(55, 59, 83, 0.1)"},children:[Object(i.jsx)("span",{className:"circle",style:"sun"==e.background?{backgroundColor:"rgb(55, 59, 83)"}:{backgroundColor:"rgb(223, 227, 250)"}}),Object(i.jsx)("span",{className:"stats",style:"sun"==e.background?{color:"#373B53"}:{color:"#DFE3FA"},children:"Draft"})]})]}),Object(i.jsxs)("div",{className:"second-con",style:"sun"==e.background?{backgroundColor:"white"}:{backgroundColor:"rgb(30, 33, 57)"},children:[Object(i.jsx)("button",{className:"edit",onClick:function(){return t(e.id)},style:"sun"==e.background?{backgroundColor:"#f9fafe",color:"#7e88c3"}:{backgroundColor:"#252945",color:"#DFE3FA"},children:"Edit"}),Object(i.jsx)("button",{className:"delete",onClick:function(){return c(e.id)},children:"Delete"}),Object(i.jsx)("button",{className:"mark-as-pending",onClick:function(){e.markAsPending(e.id)},children:"Mark as Pending"})]})]})}),Object(i.jsx)(g,{data:e.invoice,background:e.background})]})}function y(e){var t=Object(n.useState)(),c=Object(l.a)(t,2);c[0],c[1];return Object(i.jsxs)("div",{id:"viewInvoice",children:[Object(i.jsxs)(u.b,{to:"/",id:"goback",children:[Object(i.jsx)("img",{src:"./assets/icon-arrow-left.svg"}),Object(i.jsx)("span",{style:"sun"==e.background?{color:"#0c0e16"}:{color:"white"},children:"Go back"})]}),e.data&&e.data.filter((function(t){return t.id==e.id})).map((function(t){return Object(i.jsx)(h,{status:t.status,delete:function(t){return e.deleteInvoice(t)},id:t.id,invoice:t,markAsPaid:function(t){return e.markAsPaid(t)},markAsPending:function(t){return e.isPending(t)},confirmD:function(t){return e.delete(t)},sendStatus:function(t){return e.status(t)},background:e.background},t.id)}))]})}c(41);function O(e){return Object(i.jsxs)("div",{id:"noInvoice",children:[Object(i.jsx)("img",{src:"./assets/illustration-empty.svg"}),Object(i.jsx)("h2",{style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:"There is nothing here"}),Object(i.jsx)("div",{style:"sun"==e.background?{color:"#888EB0"}:{color:"DFE3FA"},children:"  Create an invoice by clicking the New Invoice button and get started"})]})}c(42);function x(e){var t="sun"==e.background?{background:"none",color:"#0c0e16"}:{background:"#1E2139",border:"0",color:"white"};return Object(i.jsxs)("tr",{id:e.id,children:[Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"text",className:"input first",required:!0,style:t})}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"number",className:"input second",min:"0",required:!0,style:t})}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"number",className:"input third",min:"0",required:!0,style:t})}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{type:"number",className:"input fourth",min:"0",required:!0,style:t})}),Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:"./assets/icon-delete.svg",className:"fifth",onClick:function(){return function(e){for(var t=document.querySelector("#tableBody"),c=0;t.children.length;c++)if(t.children[c].getAttribute("id")==e){t.removeChild(t.children[c]);break}}(e.id)},style:{cursor:"pointer"}})})]})}function v(e){var t=Object(n.useState)("Dropdown button"),c=Object(l.a)(t,2),o=c[0],r=c[1],d=Object(n.useState)([Math.random().toString(36).substr(2,9)]),a=Object(l.a)(d,2),u=a[0],b=a[1],j=Object(n.useState)(),m=Object(l.a)(j,2),g=m[0],h=m[1];return Object(n.useEffect)((function(){if("moon"==e.backgroundColor){h({backgroundColor:"#252945"});for(var t=document.querySelectorAll("#formElement input"),c=document.querySelectorAll(".formInputText"),n=document.querySelectorAll("#itemListHeading .itemName"),o=document.querySelectorAll("#calenderAndInvoice .dropdown-item"),r=0;r<t.length;r++)t[r].style="background:#1E2139; border:0; color:white";for(var s=0;s<c.length;s++)c[s].style="color:#DFE3FA";for(var l=0;l<n.length;l++)n[l].style="color:#DFE3FA";for(var i=0;i<o.length;i++)o[i].style="color:#DFE3FA;background:#1E2139"}else{h({backgroundColor:"rgba(0, 0, 0, 0.06)"});for(var d=document.querySelectorAll("#formElement input"),a=document.querySelectorAll(".formInputText"),u=document.querySelectorAll("#itemListHeading .itemName"),b=document.querySelectorAll("#calenderAndInvoice .dropdown-item"),j=0;j<d.length;j++)d[j].style="background:none; color:#0c0e16";for(var m=0;m<a.length;m++)a[m].style="color:#7e88c3";for(var g=0;g<u.length;g++)u[g].style="color:#7e88c3";for(var y=0;y<b.length;y++)b[y].style="color:#0c0e16;background:none"}}),[e.backgroundColor]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{id:"formElement",style:g,children:[Object(i.jsx)("div",{id:"invoiceHeading",style:"sun"==e.backgroundColor?{color:"#0c0e16"}:{color:"white"},children:"New Invoice"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"partName",children:"Bill From"}),Object(i.jsx)("label",{className:"formInputText",children:"Street Address"}),Object(i.jsx)("input",{type:"text",className:"input",id:"senderAddress",required:!0}),Object(i.jsxs)("div",{id:"billFromAddress",children:[Object(i.jsxs)("div",{className:"section1",children:[Object(i.jsx)("label",{className:"formInputText",children:"City"}),Object(i.jsx)("input",{type:"text",className:"input",id:"senderCity",required:!0})]}),Object(i.jsxs)("div",{className:"section1",children:[Object(i.jsx)("label",{className:"formInputText",children:"Post Code"}),Object(i.jsx)("input",{type:"text",className:"input",id:"senderPostcode",required:!0})]}),Object(i.jsxs)("div",{className:"section1",children:[Object(i.jsx)("label",{className:"formInputText",children:"Country"}),Object(i.jsx)("input",{type:"text",className:"input",id:"senderCountry",required:!0})]})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"partName",children:"Bill To"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"formInputText",children:"Client's Name"}),Object(i.jsx)("input",{type:"text",className:"input",id:"clientName",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"formInputText",children:"Client's Email"}),Object(i.jsx)("input",{type:"email",className:"input",id:"clientEmail"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"formInputText",children:"Street address"}),Object(i.jsx)("input",{type:"text",className:"input",id:"clientAddress",required:!0})]}),Object(i.jsxs)("div",{id:"billToAddress",children:[Object(i.jsxs)("div",{className:"section2",children:[Object(i.jsx)("label",{className:"formInputText",children:"City"}),Object(i.jsx)("input",{type:"text",className:"input",id:"clientCity",required:!0})]}),Object(i.jsxs)("div",{className:"section2",children:[Object(i.jsx)("label",{className:"formInputText",children:"Post Code"}),Object(i.jsx)("input",{type:"text",className:"input",id:"clientPostcode",required:!0})]}),Object(i.jsxs)("div",{className:"section2",children:[Object(i.jsx)("label",{className:"formInputText",children:"Country"}),Object(i.jsx)("input",{type:"text",className:"input",id:"clientCountry",required:!0})]})]}),Object(i.jsxs)("div",{id:"calenderAndInvoice",children:[Object(i.jsxs)("div",{className:"cmp",children:[Object(i.jsx)("div",{className:"formInputText",children:"Invoice Date"}),Object(i.jsx)("input",{type:"date",id:"invoiceDate",required:!0})]}),Object(i.jsxs)("div",{className:"cmp",children:[Object(i.jsx)("div",{className:"formInputText",children:"Payment Terms"}),Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:"sun"==e.backgroundColor?{color:"#0c0e16",background:"none",border:"2px solid #dfe3fa"}:{color:"#DFE3FA",border:"0",background:"#1E2139"},children:o}),Object(i.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu",onClick:function(e){return r(e.target.textContent)},style:"sun"==e.backgroundColor?{background:"none"}:{background:"#1E2139"},children:[Object(i.jsx)("a",{className:"dropdown-item",href:"#",children:"Net 1 Day"}),Object(i.jsx)("a",{className:"dropdown-item secondDropdown",href:"#",children:"Net 7 Day"}),Object(i.jsx)("a",{className:"dropdown-item thridDropdown",href:"#",children:"Net 14 Day"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",children:"Net 30 Day"})]})]})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"formInputText",children:"Project Description"}),Object(i.jsx)("input",{type:"text",className:"input",id:"description"})]})]}),Object(i.jsx)("div",{id:"itemHeading",children:"Item List"}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{id:"itemListHeading",children:[Object(i.jsx)("th",{id:"item-name",className:"itemName",children:"Item Name"}),Object(i.jsx)("th",{id:"qty",className:"itemName",children:"QTY."}),Object(i.jsx)("th",{id:"price",className:"itemName",children:"Price"}),Object(i.jsx)("th",{id:"total",className:"itemName",children:"Total"})]})}),Object(i.jsx)("tbody",{id:"tableBody",children:u.map((function(t){return Object(i.jsx)(x,{id:t,background:e.backgroundColor},t)}))})]}),Object(i.jsx)("button",{type:"button",id:"addNewItem",onClick:function(){b([].concat(Object(s.a)(u),[Math.random().toString(36).substr(2,9)]))},style:"sun"==e.backgroundColor?{color:"#7E88C3",background:"none"}:{color:"#DFE3FA",background:"#1E2139",border:"0"},children:"+ Add New Item"})]})})}c(43);function k(e){return Object(i.jsxs)("div",{id:"confirmDeletion",style:"sun"==e.background?{backgroundColor:"white"}:{backgroundColor:"#1E2139"},children:[Object(i.jsx)("div",{id:"heading",style:"sun"==e.background?{color:"#0C0E16"}:{color:"white"},children:"Confirm Deletion"}),Object(i.jsxs)("div",{id:"text",style:"sun"==e.background?{color:"#888EB0"}:{color:"#DFE3FA"},children:["Are you sure you want to delete invoice ",e.id,"? This action cannot be undone."]}),Object(i.jsxs)("div",{id:"con",children:[Object(i.jsx)("button",{id:"cancel",onClick:function(){return document.querySelector("#homePage").style="background: #F2F2F2;",document.querySelector("#viewInvoice").style="filter: brightness(1)","sun"==e.background?document.querySelector("#sidebar").style="filter: brightness(1);background-color: rgb(73, 78, 110)":document.querySelector("#sidebar").style="filter: brightness(1);background-color: rgb(30, 33, 57)",void(document.querySelector("#confirmDeletion").style="display:none;")},style:"sun"==e.background?{color:"#7E88C3",backgroundColor:"rgb(249, 250, 254)"}:{color:"#DFE3FA",backgroundColor:"rgb(37, 41, 69)"},children:"Cancel"}),Object(i.jsx)(u.b,{to:"/",children:Object(i.jsx)("button",{id:"delete",onClick:function(){return t=e.id,e.deleteInvoice(t),document.querySelector("#homePage").style="background: #F2F2F2;",document.querySelector("#viewInvoice").style="filter: brightness(1)","sun"==e.background?document.querySelector("#sidebar").style="filter: brightness(1);background-color: rgb(73, 78, 110)":document.querySelector("#sidebar").style="filter: brightness(1);background-color: rgb(30, 33, 57)",void(document.querySelector("#confirmDeletion").style="display:none;");var t},children:"Delete"})})]})]})}function p(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),o=c[0],r=c[1],m=Object(n.useState)(0),g=Object(l.a)(m,2),h=g[0],x=g[1],p=Object(n.useState)("All"),f=Object(l.a)(p,2),C=f[0],S=f[1],N=Object(n.useState)(0),w=Object(l.a)(N,2),q=w[0],A=w[1],E=Object(n.useState)(),D=Object(l.a)(E,2),F=D[0],I=D[1],P=Object(n.useState)(),T=Object(l.a)(P,2),B=T[0],H=T[1],M=Object(n.useState)("sun"),J=Object(l.a)(M,2),W=J[0],L=J[1];function $(){document.querySelector(".sidebarContainer").style="height:0",document.querySelector("#homePage").style="background: #F2F2F2;",document.querySelector("#formElement").style="display:none",window.innerWidth>992&&(document.querySelector("#sidebar").style="height:850px"),window.innerWidth<992&&null!=document.querySelector("#saveOrDeleteBtn")&&(document.querySelector("#saveOrDeleteBtn").style="display:none:"),window.innerWidth<992&&null!=document.querySelector("#cancelOrSave")&&(document.querySelector("#cancelOrSave").style="display:none:"),window.innerWidth<992&&null!=document.querySelector("#viewInvoice")&&(document.querySelector("#viewInvoice").style="display:block",console.log("sdfsdffsdsaf")),document.querySelector("#sidebar").style="sun"==W?"background-color: rgb(73, 78, 110)":"background-color: rgb(30, 33, 57)"}function Q(e,t){var c=o.find((function(t){return t.id==e}));c.status=t,localStorage.setItem(e,JSON.stringify(c));for(var n=[],l=0;l<localStorage.length;l++)"false"!=localStorage.getItem(localStorage.key(l))&&(n=[].concat(Object(s.a)(n),[JSON.parse(localStorage.getItem(localStorage.key(l)))]));r(n)}function z(e){for(var t=document.querySelector("#tableBody").children,c=[],n=0,l=0;l<t.length;l++){var i={name:t[l].children[0].children[0].value,quantity:t[l].children[1].children[0].value,price:t[l].children[2].children[0].value,total:t[l].children[3].children[0].value};n+=parseInt(i.total),c=[].concat(Object(s.a)(c),[i])}var d={id:Math.random().toString(36).substr(2,9),createdAt:(new Date).toISOString().substring(0,10),paymentDue:document.querySelector("#invoiceDate").value,description:document.querySelector("#description").value,paymentTerms:document.querySelector("#dropdownMenu").textContent.substring(4,6).trim(),clientName:document.querySelector("#clientName").value,clientEmail:document.querySelector("#clientEmail").value,status:e,senderAddress:{street:document.querySelector("#senderAddress").value,city:document.querySelector("#senderCity").value,postCode:document.querySelector("#senderPostcode").value,country:document.querySelector("#senderCountry").value},clientAddress:{street:document.querySelector("#clientAddress").value,city:document.querySelector("#clientCity").value,postCode:document.querySelector("#clientPostcode").value,country:document.querySelector("#clientCountry").value},items:Object(s.a)(c),total:n};localStorage.setItem(d.id,JSON.stringify(d)),r([].concat(Object(s.a)(o),[d])),A(q+1),$()}window.onresize=function(){window.innerWidth>992?document.querySelector("#sidebar").style="height:100%":document.querySelector("#sidebar").style="height:100vw"},Object(n.useEffect)((function(){null!=localStorage.getItem("isFirstTime")?(!function(){for(var e=[],t=0;t<localStorage.length;t++)"false"!=localStorage.getItem(localStorage.key(t))&&(e=[].concat(Object(s.a)(e),[JSON.parse(localStorage.getItem(localStorage.key(t)))]));r(e),A(localStorage.length-1),console.log(e)}(),console.log("hee")):(localStorage.setItem("isFirstTime","false"),fetch("./data.json").then((function(e){return e.json()})).then((function(e){e.map((function(e){localStorage.setItem(e.id,JSON.stringify(e))}));for(var t=[],c=0;c<localStorage.length;c++)"false"!=localStorage.getItem(localStorage.key(c))&&(t=[].concat(Object(s.a)(t),[JSON.parse(localStorage.getItem(localStorage.key(c)))]));r(t),A(localStorage.length-1)})))}),[]);function R(t){L("sun"==t?"moon":"sun"),e.setB(t)}return Object(i.jsx)("div",{id:"homePage",children:Object(i.jsx)(u.a,{children:Object(i.jsxs)(j.c,{children:[Object(i.jsxs)(j.a,{exact:!0,path:"/",children:[Object(i.jsxs)("div",{className:"sidebarContainer",style:"sun"==W?{backgroundColor:"white"}:{backgroundColor:"#252945"},children:[Object(i.jsx)(d,{sunOrMoon:function(e){return R(e)},backgroundColor:W}),Object(i.jsx)(v,{backgroundColor:W}),Object(i.jsxs)("div",{id:"saveOrDeleteBtn",style:"sun"==W?{background:"white"}:{background:"rgb(37, 41, 69)"},children:[Object(i.jsx)("button",{id:"discard",onClick:function(){return $()},children:"Discard"}),Object(i.jsx)("button",{id:"saveAsDraft",type:"submit",onClick:function(){return z("draft")},style:"sun"==W?{color:"#888eb0"}:{color:"#DFE3FA"},children:"Save as draft"}),Object(i.jsx)("button",{id:"saveAndSend",type:"submit",onClick:function(){return z("pending")},children:"Save & send"})]})]}),Object(i.jsx)(a,{sort:function(e){return S(e)},invoiceNumber:q,backgroundColor:W}),Object(i.jsxs)("div",{id:"listOfInvoices",children:[o&&"All"==C&&q>0&&o.map((function(e){return Object(i.jsx)(b,{id:e.id,paymentDue:e.paymentDue,clientName:e.clientName,total:e.total,status:e.status,sendId:function(e){return x(e)},backgroundColor:W},e.id)}))||"All"==C&&Object(i.jsx)(O,{background:W}),o&&"Pending"==C&&o.filter((function(e){return"pending"==e.status})).length>0&&o.filter((function(e){return"pending"==e.status})).map((function(e){return Object(i.jsx)(b,{id:e.id,paymentDue:e.paymentDue,clientName:e.clientName,total:e.total,status:e.status,sendId:function(e){return x(e)},backgroundColor:W},e.id)}))||o&&"Pending"==C&&Object(i.jsx)(O,{background:W}),o&&"Draft"==C&&o.filter((function(e){return"draft"==e.status})).length>0&&o.filter((function(e){return"draft"==e.status})).map((function(e){return Object(i.jsx)(b,{id:e.id,paymentDue:e.paymentDue,clientName:e.clientName,total:e.total,status:e.status,sendId:function(e){return x(e)},backgroundColor:W},e.id)}))||o&&"Draft"==C&&Object(i.jsx)(O,{background:W}),o&&"Paid"==C&&o.filter((function(e){return"paid"==e.status})).length>0&&o.filter((function(e){return"paid"==e.status})).map((function(e){return Object(i.jsx)(b,{id:e.id,paymentDue:e.paymentDue,clientName:e.clientName,total:e.total,status:e.status,sendId:function(e){return x(e)},backgroundColor:W},e.id)}))||o&&"Paid"==C&&Object(i.jsx)(O,{background:W})]})]}),Object(i.jsxs)(j.a,{exact:!0,path:"/view-invoice",children:[Object(i.jsxs)("div",{className:"sidebarContainer",style:"sun"==W?{backgroundColor:"white"}:{backgroundColor:"#252945"},children:[Object(i.jsx)(d,{sunOrMoon:function(e){return R(e)},backgroundColor:W}),Object(i.jsx)(v,{backgroundColor:W}),Object(i.jsxs)("div",{id:"cancelOrSave",style:"sun"==W?{backgroundColor:"white"}:{backgroundColor:"#141625"},children:[Object(i.jsx)("button",{id:"cancel",onClick:function(){return $()},style:"sun"==W?{backgroundColor:"#F9FAFE"}:{backgroundColor:"#252945"},children:"Cancel"}),Object(i.jsx)("button",{id:"saveChanges",onClick:function(){return function(){for(var e=document.querySelector("#invoiceHeading").textContent.substring(6),t=o.find((function(t){return t.id==e})),c=document.querySelector("#tableBody").children,n=[],l=0,i=0;i<c.length;i++){var d={name:c[i].children[0].children[0].value,quantity:c[i].children[1].children[0].value,price:c[i].children[2].children[0].value,total:c[i].children[3].children[0].value};l+=parseInt(d.total),n=[].concat(Object(s.a)(n),[d])}t.id=e,t.createdAt=(new Date).toISOString().substring(0,10),t.paymentDue=document.querySelector("#invoiceDate").value,t.description=document.querySelector("#description").value,t.paymentTerms=document.querySelector("#dropdownMenu").textContent.substring(4,6).trim(),t.clientName=document.querySelector("#clientName").value,t.clientEmail=document.querySelector("#clientEmail").value,t.status=B,t.senderAddress.street=document.querySelector("#senderAddress").value,t.senderAddress.city=document.querySelector("#senderCity").value,t.senderAddress.postCode=document.querySelector("#senderPostcode").value,t.senderAddress.country=document.querySelector("#senderCountry").value,t.clientAddress.street=document.querySelector("#clientAddress").value,t.clientAddress.city=document.querySelector("#clientCity").value,t.clientAddress.postCode=document.querySelector("#clientPostcode").value,t.clientAddress.country=document.querySelector("#clientCountry").value,t.items=Object(s.a)(n),t.total=l,localStorage.setItem(t.id,JSON.stringify(t));for(var a=[],u=0;u<localStorage.length;u++)"false"!=localStorage.getItem(localStorage.key(u))&&(a=[].concat(Object(s.a)(a),[JSON.parse(localStorage.getItem(localStorage.key(u)))]));r(a),$()}()},children:"Save Changes"})]})]}),Object(i.jsx)(y,{data:o,id:h,markAsPaid:function(e){return Q(e,"paid")},isPending:function(e){return Q(e,"pending")},delete:function(e){return I(e)},status:function(e){return H(e)},background:W}),Object(i.jsx)(k,{id:F,deleteInvoice:function(e){return function(e){localStorage.removeItem(e);for(var t=[],c=0;c<localStorage.length;c++)"false"!=localStorage.getItem(localStorage.key(c))&&(t=[].concat(Object(s.a)(t),[JSON.parse(localStorage.getItem(localStorage.key(c)))]));r(t),A(q-1)}(e)},background:W})]})]})})})}var f=function(){return Object(i.jsx)(p,{setB:function(e){return function(e){document.getElementsByTagName("body")[0].style="sun"!=e?"background-color: #f2f2f2;":"background-color: #141625;",console.log(e)}(e)}})};r.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9408fb8a.chunk.js.map