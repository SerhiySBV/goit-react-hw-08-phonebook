"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{407:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,a,u=t(439),o=t(791),i=t(434),s=t(634),c=function(e){return e.contacts.items},l=t(184),d=function(){var e=(0,o.useState)(""),n=(0,u.Z)(e,2),t=n[0],r=n[1],a=(0,o.useState)(""),d=(0,u.Z)(a,2),m=d[0],h=d[1],p=(0,i.v9)(c),f=(0,i.I0)(),x=function(){r(""),h("")},b=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":r(a.trim());break;case"number":h(a.trim());break;default:return}};return(0,o.useEffect)((function(){f((0,s.yF)())}),[f]),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(),p&&p.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):f((0,s.uK)({name:t,number:m}))},style:{display:"flex",gap:"15px"},children:[(0,l.jsxs)("label",{children:["Name",(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:b})]}),(0,l.jsxs)("label",{children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:m,onChange:b})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})},m=t(168),h=t(934),p=h.Z.button(r||(r=(0,m.Z)(["\n  background-color: orangered;\n  border-radius: 5px;\n  color: lightgray;\n"]))),f=h.Z.button(a||(a=(0,m.Z)(["\n  background-color: dimgray;\n  border-radius: 5px;\n  color: lightgray;\n"]))),x=function(e){var n=e.contact,t=n.name,r=n.number,a=n.id,c=(0,i.I0)(),d=(0,o.useState)(!1),m=(0,u.Z)(d,2),h=m[0],x=m[1],b=(0,o.useState)(t),g=(0,u.Z)(b,2),v=g[0],j=g[1],y=(0,o.useState)(r),C=(0,u.Z)(y,2),k=C[0],Z=C[1],w=function(e){switch(console.log(e.target.name),e.target.name){case"name":return void j(e.target.value);case"number":return void Z(e.target.value);default:return}};return(0,l.jsxs)(l.Fragment,{children:[h?(0,l.jsx)("input",{name:"name",onChange:w,type:"text",value:v}):(0,l.jsxs)("p",{children:[v," :"]}),h?(0,l.jsx)("input",{name:"number",onChange:w,type:"text",value:k}):(0,l.jsx)("p",{children:k}),(0,l.jsxs)(f,{onClick:function(){if(h)return x((function(e){return!e})),void c((0,s.mP)());x((function(e){return!e}))},children:[" ",h?"Save":"Edit"]}),(0,l.jsx)(p,{onClick:function(){return function(e){c((0,s.GK)(e))}(a)},children:"Delete"})]})},b=function(e){return e.filter},g=function(){var e=(0,i.v9)(b),n=(0,i.v9)(c),t=function(){var t=e.toLocaleLowerCase();return e?n.filter((function(e){return e.name.toLocaleLowerCase().includes(t)})):n}();return(0,l.jsx)("ul",{children:n&&t.map((function(e){return(0,l.jsx)("li",{style:{display:"grid",gridTemplateColumns:"160px 150px 100px 100px",alignItems:"center"},children:(0,l.jsx)(x,{contact:e})},e.id)}))})},v=t(895),j=function(){var e=(0,i.I0)(),n=(0,i.v9)(b);return(0,l.jsx)("label",{htmlFor:"",children:(0,l.jsx)("input",{type:"text",placeholder:"Find contacts by name",name:"filter",value:n,onChange:function(n){return e((0,v.T)(n.target.value))}})})},y=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(d,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(j,{}),(0,l.jsx)(g,{})]})}}}]);
//# sourceMappingURL=407.cd53bf2c.chunk.js.map