var G=Object.defineProperty,Y=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var R=(s,a,l)=>a in s?G(s,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[a]=l,x=(s,a)=>{for(var l in a||(a={}))_.call(a,l)&&R(s,l,a[l]);if(I)for(var l of I(a))$.call(a,l)&&R(s,l,a[l]);return s},v=(s,a)=>Y(s,W(a));import{d as p,b as L,j as t,F as w,a as e,c as O}from"./vendor.057b80fe.js";import{h as H}from"./moment.d3763ddf.js";import{e as V,u as U,c as q,r as J,d as K}from"./teli-action.2461e862.js";import{r as k,S as Q,a as X,b as Z,B,P,C as ee,c as te,d as ae,e as le}from"./Icons.cdb9d418.js";import{c as se}from"./index.f71ab816.js";import{R as M,u as T}from"./constants.091680d7.js";import"./http-common.c2a35339.js";function oe({id:s=null}){const[a,l]=p.exports.useState(!1),[n,d]=p.exports.useState({}),r=L(),[m,i]=p.exports.useState(null);p.exports.useEffect(()=>{d(m)},[m]);const b=c=>{r(V(c)).then(o=>{i(o)}),l(!0)},h=c=>{const{name:o,value:N}=c.target;d(y=>v(x({},y),{[o]:N}))};return t(w,{children:[e("svg",{type:"button",onClick:()=>b(s),xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-blue-400 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),a?e(w,{children:t("form",{onSubmit:c=>{c.preventDefault(),r(U(n)),l(!1)},children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-auto my-6 mx-auto max-w-4xl",children:t("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[t("div",{className:"flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t",children:[e("h3",{className:"text-xl font-semibold uppercase",children:"Edit Teli"}),e("button",{className:"p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>l(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"#808080",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e("div",{className:"mt-5 md:mt-0 md:col-span-4",children:t("div",{className:"grid grid-cols-9 gap-9 px-4 py-4",children:[t("div",{className:"col-span-9 sm:col-span-3",children:[t("label",{for:"fullname",className:"block text-xs font-medium uppercase text-gray-500",children:["Fullname",e("span",{className:"text-red-600",children:"*"})]}),e("input",{onChange:h,type:"text",name:"fullName",id:"fullName",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",value:n==null?void 0:n.fullName})]}),t("div",{className:"col-span-9 sm:col-span-3",children:[e("label",{for:"contact",className:"block text-xs font-medium uppercase text-gray-500",children:"Contact"}),e("input",{onChange:h,type:"text",name:"contact",id:"contact",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",value:n==null?void 0:n.contact})]}),t("div",{className:"col-span-9 sm:col-span-3",children:[t("label",{for:"location",className:"block text-xs font-medium uppercase text-gray-500",children:["Location",e("span",{className:"text-red-600",children:"*"})]}),t("select",{onChange:h,id:"location",name:"location",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",value:n==null?void 0:n.location,children:[e("option",{value:"",children:"---Pilih Location---"}),e("option",{value:"genteng",children:"Genteng"}),e("option",{value:"deck",children:"Deck"})]})]}),t("div",{className:"col-span-9 sm:col-span-3",children:[t("label",{for:"status",className:"block text-xs font-medium uppercase text-gray-500",children:["Status",e("span",{className:"text-red-600",children:"*"})]}),t("select",{onChange:h,id:"status",name:"status",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",value:n==null?void 0:n.status,children:[e("option",{value:"",children:"---Pilih Status---"}),e("option",{value:"active",children:"Active"}),e("option",{value:"inactive",children:"Inactive"})]})]})]})}),t("div",{className:"flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b",children:[e("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"submit",children:"Edit"}),e("button",{className:"text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>l(!1),children:"Cancel"})]})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})}):null]})}function ne(){var i,b;const[s,a]=p.exports.useState(!1),l=L(),[n,d]=p.exports.useState({fullName:"",location:"",contact:"",status:""}),r=h=>{const{name:f,value:c}=h.target;d(o=>v(x({},o),{[f]:c}))},m=h=>{h.preventDefault(),l(q(n)).then(()=>{window.alert("Teli created successfully")}).catch(f=>{window.alert(f)}),a(!1)};return t(w,{children:[M.create_teli.allowedRoles.includes((b=(i=T)==null?void 0:i.user)==null?void 0:b.role)&&e("button",{type:"button",onClick:()=>a(!0),className:"inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out","data-bs-toggle":"modal","data-bs-target":"#exampleModalLg",children:"Tambah Teli"}),s?e(w,{children:t("form",{onSubmit:m,children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-auto my-6 mx-auto max-w-4xl",children:t("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[t("div",{className:"flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t",children:[e("h3",{className:"text-xl font-semibold uppercase",children:"Tambah Teli"}),e("button",{className:"p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>a(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"#808080",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e("div",{className:"mt-5 md:mt-0 md:col-span-4",children:t("div",{className:"grid grid-cols-9 gap-9 px-4 py-4",children:[t("div",{className:"col-span-9 sm:col-span-3",children:[t("label",{for:"fullName",className:"block text-xs font-medium uppercase text-gray-500",children:["Fullname",e("span",{className:"text-red-600",children:"*"})]}),e("input",{onChange:r,type:"text",name:"fullName",id:"fullName",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),t("div",{className:"col-span-9 sm:col-span-3",children:[e("label",{for:"contact",className:"block text-xs font-medium uppercase text-gray-500",children:"Contact"}),e("input",{onChange:r,type:"text",name:"contact",id:"contact",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),t("div",{className:"col-span-9 sm:col-span-3",children:[t("label",{for:"location",className:"block text-xs font-medium uppercase text-gray-500",children:["Location",e("span",{className:"text-red-600",children:"*"})]}),t("select",{onChange:r,id:"location",name:"location",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",children:[e("option",{value:"",children:"--Pilih Location--"}),e("option",{value:"genteng",children:"Genteng"}),e("option",{value:"deck",children:"Deck"})]})]}),t("div",{className:"col-span-9 sm:col-span-3",children:[t("label",{for:"status",className:"block text-xs font-medium uppercase text-gray-500",children:["Status",e("span",{className:"text-red-600",children:"*"})]}),t("select",{onChange:r,id:"status",name:"status",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",children:[e("option",{value:"",children:"--Pilih Status--"}),e("option",{value:"active",children:"Active"}),e("option",{value:"inactive",children:"Inactive"})]})]})]})}),t("div",{className:"flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b",children:[e("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"submit",children:"Submit"}),e("button",{className:"text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>a(!1),children:"Close"})]})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})}):null]})}function re({startDate:s,endDate:a,setStartDate:l,setEndDate:n}){const[d,r]=p.exports.useState(!1),m=()=>{r(!1)};return t(w,{children:[e("button",{type:"button",onClick:()=>r(!0),className:"inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out","data-bs-toggle":"modal","data-bs-target":"#exampleModalLg",children:"Date Count Filter"}),d?t(w,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-auto my-6 mx-auto max-w-4xl",children:t("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[t("div",{className:"flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t",children:[e("h3",{className:"text-lg font-semibold uppercase",children:"Select Date Filter"}),e("button",{className:"p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>r(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"#808080",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),t("div",{className:"flex items-center px-4 py-4",children:[e("div",{className:"relative",children:e("input",{name:"start",type:"date",value:s,id:"dateRangePickerId",onChange:i=>l(i.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5",placeholder:"Select date start"})}),e("span",{className:"mx-4 text-gray-500",children:"to"}),e("div",{className:"relative",children:e("input",{name:"end",type:"date",value:a,min:s,onChange:i=>n(i.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5",placeholder:"Select date end"})})]}),t("div",{className:"flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b",children:[e("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"submit",onClick:()=>m(),children:"Select"}),e("button",{className:"text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>r(!1),children:"Close"})]})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null]})}function ie({preGlobalFilteredRows:s,globalFilter:a,setGlobalFilter:l}){const n=s.length,[d,r]=p.exports.useState(a),m=k.exports.useAsyncDebounce(i=>{l(i||void 0)},200);return t("label",{className:"flex gap-x-2 items-baseline",children:[e("span",{className:"text-gray-700",children:"Search: "}),e("input",{type:"text",className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",value:d||"",onChange:i=>{r(i.target.value),m(i.target.value)},placeholder:`${n} records...`})]})}function de({value:s}){const a=s?s.toLowerCase():"unknown";return e("span",{className:se("px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",a.startsWith("active")?"bg-green-100 text-green-800":null,a.startsWith("inactive")?"bg-red-100 text-red-800":null),children:a})}function ce({columns:s,data:a,startDate:l,endDate:n,setStartDate:d,setEndDate:r}){const{getTableProps:m,getTableBodyProps:i,headerGroups:b,prepareRow:h,page:f,canPreviousPage:c,canNextPage:o,pageOptions:N,pageCount:y,gotoPage:C,nextPage:S,previousPage:F,setPageSize:E,state:j,preGlobalFilteredRows:z,setGlobalFilter:A}=k.exports.useTable({columns:s,data:a},k.exports.useFilters,k.exports.useGlobalFilter,k.exports.useSortBy,k.exports.usePagination);return e(w,{children:e("div",{className:"shadow overflow-hidden sm:rounded-md",children:t("div",{className:"px-4 py-5 bg-white sm:p-6",children:[e("header",{className:"px-0 mt-0 mb-4",children:e("h2",{className:"font-semibold text-slate-800 uppercase",children:"Teli List"})}),t("div",{className:"sm:flex sm:gap-x-2 py-2",children:[e(ie,{preGlobalFilteredRows:z,globalFilter:j.globalFilter,setGlobalFilter:A}),b.map(u=>u.headers.map(g=>g.Filter?e("div",{className:"mt-2 sm:mt-0",children:g.render("Filter")},g.id):null)),t("div",{className:"flex space-x-5 px-4",children:[e(ne,{}),e(re,{startDate:l,endDate:n,setStartDate:d,setEndDate:r})]})]}),e("div",{className:"mt-4 flex flex-col",children:e("div",{className:"-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8",children:e("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:e("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:t("table",v(x({},m()),{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:b.map(u=>e("tr",v(x({},u.getHeaderGroupProps()),{children:u.headers.map(g=>e("th",v(x({scope:"col",className:"group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},g.getHeaderProps(g.getSortByToggleProps())),{children:t("div",{className:"flex items-center justify-between",children:[g.render("Header"),e("span",{children:g.isSorted?g.isSortedDesc?e(Q,{className:"w-4 h-4 text-gray-400"}):e(X,{className:"w-4 h-4 text-gray-400"}):e(Z,{className:"w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100"})})]})})))})))}),e("tbody",v(x({},i()),{className:"bg-white divide-y divide-gray-200",children:f.map((u,g)=>(h(u),e("tr",v(x({},u.getRowProps()),{children:u.cells.map(D=>e("td",v(x({},D.getCellProps()),{className:"px-6 py-4 whitespace-nowrap",role:"cell",children:D.column.Cell.name==="defaultRenderer"?e("div",{className:"text-sm text-gray-500",children:D.render("Cell")}):D.render("Cell")})))}))))}))]}))})})})}),t("div",{className:"py-3 flex items-center justify-between",children:[t("div",{className:"flex-1 flex justify-between sm:hidden",children:[e(B,{onClick:()=>F(),disabled:!c,children:"Previous"}),e(B,{onClick:()=>S(),disabled:!o,children:"Next"})]}),t("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[t("div",{className:"flex gap-x-2 items-baseline",children:[t("span",{className:"text-sm text-gray-700",children:["Page ",e("span",{className:"font-medium",children:j.pageIndex+1})," of"," ",e("span",{className:"font-medium",children:N.length})]}),t("label",{children:[e("span",{className:"sr-only",children:"Items Per Page"}),e("select",{className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",value:j.pageSize,onChange:u=>{E(Number(u.target.value))},children:[5,10,20].map(u=>t("option",{value:u,children:["Show ",u]},u))})]})]}),e("div",{children:t("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[t(P,{className:"rounded-l-md",onClick:()=>C(0),disabled:!c,children:[e("span",{className:"sr-only",children:"First"}),e(ee,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]}),t(P,{onClick:()=>F(),disabled:!c,children:[e("span",{className:"sr-only",children:"Previous"}),e(te,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]}),t(P,{onClick:()=>S(),disabled:!o,children:[e("span",{className:"sr-only",children:"Next"}),e(ae,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]}),t(P,{className:"rounded-r-md",onClick:()=>C(y-1),disabled:!o,children:[e("span",{className:"sr-only",children:"Last"}),e(le,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]})]})})]})]})]})})})}function ve(){var f,c;const s=L(),a=O(o=>o.telis.list),[l,n]=p.exports.useState((f=localStorage.getItem("startDate"))!=null?f:H().format("YYYY-MM-DD")),[d,r]=p.exports.useState((c=localStorage.getItem("endDate"))!=null?c:H().add(1,"days").format("YYYY-MM-DD")),m=o=>{n(o),localStorage.setItem("startDate",o)},i=o=>{r(o),localStorage.setItem("endDate",o)};p.exports.useEffect(()=>{s(J())},[]);const b=o=>{window.confirm("Are you sure you want to remove?")&&s(K(o))},h=p.exports.useMemo(()=>[{Header:"ID",accessor:"id"},{Header:"Fullname",accessor:"fullName",Cell:o=>t("a",{href:`/MasterTeli/TeliProfile/${o.row.original.id}?startDate=${l}&endDate=${d}`,className:"hover:text-blue-700 font-semibold",children:[" ",o.row.original.fullName," "]})},{Header:"Location",accessor:"location"},{Header:"Contact",accessor:"contact"},{Header:"Status",accessor:"status",Cell:de},{Header:"Action",Cell:o=>{var N,y,C,S;return t("div",{className:"flex justify-start",children:[M.update_teli.allowedRoles.includes((y=(N=T)==null?void 0:N.user)==null?void 0:y.role)&&e(oe,{id:o.row.original.id}),M.delete_teli.allowedRoles.includes((S=(C=T)==null?void 0:C.user)==null?void 0:S.role)&&e("svg",{onClick:()=>b(o.row.original.id),xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-red-400 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})]})}}],[l,d]);return e(ce,{columns:h,data:a,startDate:l,endDate:d,setStartDate:m,setEndDate:i})}export{ve as default};