"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[8596],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(o),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||l;return o?a.createElement(m,n(n({ref:t},d),{},{components:o})):a.createElement(m,n({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=o.length,n=new Array(l);n[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,n[1]=r;for(var s=2;s<l;s++)n[s]=o[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3855:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=o(7462),i=(o(7294),o(3905));const l={title:" \ud83d\udcc1 Upload",excerpt:"How to upload photos with the LibrePhotos mobile app",sidebar_position:5},n=void 0,r={unversionedId:"user-guide/mobile/librephotos-mobile/upload",id:"user-guide/mobile/librephotos-mobile/upload",title:" \ud83d\udcc1 Upload",description:"Upload a single photo",source:"@site/docs/user-guide/mobile/librephotos-mobile/upload.md",sourceDirName:"user-guide/mobile/librephotos-mobile",slug:"/user-guide/mobile/librephotos-mobile/upload",permalink:"/docs/user-guide/mobile/librephotos-mobile/upload",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/user-guide/mobile/librephotos-mobile/upload.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:" \ud83d\udcc1 Upload",excerpt:"How to upload photos with the LibrePhotos mobile app",sidebar_position:5},sidebar:"userguide",previous:{title:"\u2601\ufe0f Local Images",permalink:"/docs/user-guide/mobile/librephotos-mobile/local-images"},next:{title:"\ud83d\uddfa Places",permalink:"/docs/user-guide/places"}},p={},s=[{value:"Upload a single photo",id:"upload-a-single-photo",level:3},{value:"What kinds of files are supported?",id:"what-kinds-of-files-are-supported",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Where are the files saved?",id:"where-are-the-files-saved",level:3},{value:"Backup all photos",id:"backup-all-photos",level:3},{value:"Delete synced photos",id:"delete-synced-photos",level:3},{value:"Activate / Deactivate the upload feature",id:"activate--deactivate-the-upload-feature",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"upload-a-single-photo"},"Upload a single photo"),(0,i.kt)("p",null,"Click on a local photo and click on the upload button in the top left corner."),(0,i.kt)("h3",{id:"what-kinds-of-files-are-supported"},"What kinds of files are supported?"),(0,i.kt)("p",null,"We accept all files that have a mime type of image."),(0,i.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"The upload process works in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if file is on the server by comparing the hash ",(0,i.kt)("inlineCode",{parentName:"li"},"md5 + user_id")),(0,i.kt)("li",{parentName:"ul"},"If it is, don't upload it"),(0,i.kt)("li",{parentName:"ul"},"If it isn't, upload it"),(0,i.kt)("li",{parentName:"ul"},"We upload files in 1MB chunks"),(0,i.kt)("li",{parentName:"ul"},"If all files are uploaded, we scan the your ",(0,i.kt)("inlineCode",{parentName:"li"},"scan folder + /upload/web")),(0,i.kt)("li",{parentName:"ul"},"Mark the photo as synced")),(0,i.kt)("h3",{id:"where-are-the-files-saved"},"Where are the files saved?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If all the chunks are uploaded, we combine them into a single file and put them in your ",(0,i.kt)("inlineCode",{parentName:"li"},"scan folder + /upload/web"))),(0,i.kt)("h3",{id:"backup-all-photos"},"Backup all photos"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(7390).Z,width:"488",height:"808"})),(0,i.kt)("p",null,"You can backup all photos by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sync all images")," button in the settings."),(0,i.kt)("h3",{id:"delete-synced-photos"},"Delete synced photos"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(1466).Z,width:"488",height:"808"})),(0,i.kt)("p",null,"You can delete all backed up photos by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Remove backed up images")," button in the settings.\nIt works by checking if the photo is synced and if it is, it deletes it from your phone."),(0,i.kt)("h3",{id:"activate--deactivate-the-upload-feature"},"Activate / Deactivate the upload feature"),(0,i.kt)("p",null,"You can activate / deactivate by navigating as an admin to the admin area and clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow uploads")," switch. You can also set this by setting the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"ALLOW_UPLOADS")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))}c.isMDXComponent=!0},1466:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/delete-all-6662c8b2f8c61c48513ebe46fc22a616.png"},7390:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sync-all-7d1b28e671dadd81c76b4ce2a1f2a0f2.png"}}]);