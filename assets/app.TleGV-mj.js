import{d as H,u as Q,g as $e,o as g,c as m,F as E,E as G,k as $,t as I,m as j,f as be,a as re,p as ue,q as le,_ as R,h as ce,a4 as xe,a5 as Te,n as _e,O as Ce,G as Ae,H as Oe,e as he,D as Ie,I as J,w as de,R as we,v as ve,a6 as Pe,a7 as Le,a8 as Ne,a9 as je,aa as ze,ab as Ee,ac as He,ad as Re,ae as Ve,af as Fe,Y as Ye,j as We,z as Be,ag as Ue,ah as Je,ai as Ge,aj as Ze}from"./chunks/framework.XKtYK4dr.js";import{t as pe}from"./chunks/theme.eS0woxNf.js";function qe(t){const n={};for(let r=0;r<t.length;r++){const i=t[r],f=i.frontMatter.tags;Array.isArray(f)&&f.forEach(h=>{n[h]||(n[h]=[]),n[h].push(i)})}return n}function Ke(t){const n=[];let r="0",i=-1;for(let f=0;f<t.length;f++){const h=t[f];if(h.frontMatter.date){const v=h.frontMatter.date.split("-")[0];v===r?n[i].push(h):(i++,n[i]=[],n[i].push(h),r=v)}}return n}function Qe(t){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(r=>r.id&&r.hasChildNodes()).map(r=>{const i=Number(r.tagName[1]);return{title:Xe(r),link:"#"+r.id,level:i}})}function Xe(t){let n="";for(const r of t.childNodes)if(r.nodeType===1){if(r.classList.contains("VPBadge")||r.classList.contains("header-anchor"))continue;n+=r.textContent}else r.nodeType===3&&(n+=r.textContent);return n.trim()}const et=t=>(ue("data-v-69b61450"),t=t(),le(),t),tt={class:"main"},at={class:"yearItem"},st={class:"year"},rt=["href"],nt={class:"title"},ot=et(()=>$("div",{class:"title-o"},null,-1)),it={class:"date"},dt=H({__name:"Archives",setup(t){const{theme:n}=Q(),r=$e(()=>Ke(n.value.posts));return(i,f)=>(g(),m("div",tt,[(g(!0),m(E,null,G(r.value,h=>(g(),m("div",at,[$("div",st,I(h[0].frontMatter.date.split("-")[0]),1),(g(!0),m(E,null,G(h,(v,b)=>(g(),m("a",{href:j(be)(v.regularPath),key:b,class:"article"},[$("div",nt,[ot,re(" "+I(v.frontMatter.title),1)]),$("div",it,I(v.frontMatter.date.slice(5)),1)],8,rt))),128))]))),256))]))}}),ct=R(dt,[["__scopeId","data-v-69b61450"]]),ge=t=>(ue("data-v-6b5bf8a1"),t=t(),le(),t),ut={class:"main"},lt=ge(()=>$("h1",{class:"tags-header"},"Tags",-1)),ht={class:"tags"},ft=["onClick"],vt={class:"tag-length"},pt={class:"header"},bt={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},_t=ge(()=>$("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),gt=[_t],mt={class:"header-text"},$t=["href"],wt={class:"title"},yt=ge(()=>$("div",{class:"title-o"},null,-1)),Mt={class:"date"},kt=H({__name:"Tags",setup(t){const{theme:n}=Q(),r=$e(()=>qe(n.value.posts));let i=ce("");const f=v=>{i.value=v},h=v=>({fontSize:`${v*.04+.85}em`});return(v,b)=>(g(),m("div",ut,[lt,$("div",ht,[(g(!0),m(E,null,G(r.value,(S,l)=>(g(),m("span",{onClick:C=>f(l),class:_e(["tag",{activetag:j(i)===l}]),style:Ce(h(r.value[l].length))},[re(I(l)+" ",1),$("span",vt,I(r.value[l].length),1)],14,ft))),256))]),xe($("h4",pt,[(g(),m("svg",bt,gt)),$("span",mt,I(j(i)),1)],512),[[Te,j(i)]]),(g(!0),m(E,null,G(r.value[j(i)],(S,l)=>(g(),m("a",{href:j(be)(S.regularPath),key:l,class:"article"},[$("div",wt,[yt,re(" "+I(S.frontMatter.title),1)]),$("div",Mt,I(S.frontMatter.date),1)],8,$t))),128))]))}}),St=R(kt,[["__scopeId","data-v-6b5bf8a1"]]),Dt={},xt={class:"hero"};function Tt(t,n){return g(),m("div",xt,"@kimlorenzoapp")}const Ct=R(Dt,[["render",Tt],["__scopeId","data-v-2aed806d"]]),At=t=>(ue("data-v-5a21af5e"),t=t(),le(),t),Ot=At(()=>$("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),It=H({__name:"CopyWright",setup(t){const n=new Date().getFullYear();return(r,i)=>(g(),m("footer",null,[re(" Powered by "),Ot,re(" | Copyright © 2022-"+I(j(n))+" | MIT License ",1)]))}}),Pt=R(It,[["__scopeId","data-v-5a21af5e"]]),Lt=t=>(ue("data-v-6bbf7a27"),t=t(),le(),t),Nt=Lt(()=>$("h1",{class:"blog-title"},"Posted Feed",-1)),jt={class:"blogList"},zt=["href"],Et={class:"title"},Ht={class:"date"},Rt={class:"pagination"},Vt=["onClick"],Ft=H({__name:"Page",setup(t){const{theme:n}=Q();let r=n.value.posts||[],i=n.value.postLength,f=n.value.pageSize,h=i%f===0?i/f:i/f+1;h=parseInt(h.toString());let v=ce(1);r=r.filter(y=>y.regularPath.indexOf("index")<0);let b={};for(let y=0;y<h;y++)b[y]=[];let S=0;for(let y=0;y<r.length;y++)b[S].length>f-1&&(S+=1),b[S].push(r[y]);let l=ce([]);l.value=b[v.value-1];const C=y=>{v.value=y,l.value=b[v.value-1]},D=y=>{const A=y.split("-");let M=A[0],w="",F=A[2];switch(A[1]){case"1":case"01":w="Jan";break;case"2":case"02":w="Feb";break;case"3":case"03":w="Mar";break;case"4":case"04":w="Apr";break;case"5":case"05":w="May";break;case"6":case"06":w="Jun";break;case"7":case"07":w="Jul";break;case"8":case"08":w="Aug";break;case"9":case"09":w="Sep";break;case"10":w="Oct";break;case"11":w="Nov";break;case"12":w="Dec";break;default:w="Month"}return`${w} ${F}, ${M}`};return(y,A)=>(g(),m(E,null,[Nt,$("div",jt,[(g(!0),m(E,null,G(j(l),M=>(g(),m("a",{class:"blog",href:j(be)(M.regularPath)},[$("div",Et,I(M.frontMatter.title),1),$("div",Ht,I(D(M.frontMatter.date)),1)],8,zt))),256))]),$("div",Rt,[(g(!0),m(E,null,G(j(h),M=>(g(),m("div",{class:_e(["link",{activeLink:j(v)===M}]),key:M,onClick:w=>C(M)},I(M),11,Vt))),128))])],64))}}),Yt=R(Ft,[["__scopeId","data-v-6bbf7a27"]]),Wt={key:0,class:"category"},Bt={class:"list"},Ut={class:"header"},Jt=["href"],Gt={key:1},Zt={class:"header"},qt=["href"],Kt=H({__name:"Category",setup(t){const{frontmatter:n,theme:r}=Q(),i=Ae([]),f=ce(!1);return Oe(()=>{i.value=Qe(n.value.outline??r.value.outline),f.value=i.value.some(h=>h.level===2)}),(h,v)=>i.value.length>0?(g(),m("div",Wt,[$("ul",Bt,[(g(!0),m(E,null,G(i.value,b=>(g(),m("li",Ut,[b.level===2?(g(),m("a",{key:0,href:b.link,class:"header-h2"},I(b.title),9,Jt)):he("",!0),b.level===3?(g(),m("ul",Gt,[$("li",Zt,[$("a",{href:b.link,class:_e(["header-h3",{showIndent:f.value}])},I(b.title),11,qt)])])):he("",!0)]))),256))])])):he("",!0)}}),Qt=R(Kt,[["__scopeId","data-v-9d1e4980"]]);var ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Me(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ke={exports:{}};(function(t,n){(function(r,i){t.exports=i()})(ye,function(){var r=1e3,i=6e4,f=36e5,h="millisecond",v="second",b="minute",S="hour",l="day",C="week",D="month",y="quarter",A="year",M="date",w="Invalid Date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var s=["th","st","nd","rd"],e=d%100;return"["+d+(s[(e-20)%10]||s[e]||s[0])+"]"}},te=function(d,s,e){var o=String(d);return!o||o.length>=s?d:""+Array(s+1-o.length).join(e)+d},Y={s:te,z:function(d){var s=-d.utcOffset(),e=Math.abs(s),o=Math.floor(e/60),a=e%60;return(s<=0?"+":"-")+te(o,2,"0")+":"+te(a,2,"0")},m:function d(s,e){if(s.date()<e.date())return-d(e,s);var o=12*(e.year()-s.year())+(e.month()-s.month()),a=s.clone().add(o,D),c=e-a<0,u=s.clone().add(o+(c?-1:1),D);return+(-(o+(e-a)/(c?a-u:u-a))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:D,y:A,w:C,d:l,D:M,h:S,m:b,s:v,ms:h,Q:y}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},P="en",L={};L[P]=ee;var Z="$isDayjsObject",W=function(d){return d instanceof oe||!(!d||!d[Z])},ne=function d(s,e,o){var a;if(!s)return P;if(typeof s=="string"){var c=s.toLowerCase();L[c]&&(a=c),e&&(L[c]=e,a=c);var u=s.split("-");if(!a&&u.length>1)return d(u[0])}else{var _=s.name;L[_]=s,a=_}return!o&&a&&(P=a),a||!o&&P},x=function(d,s){if(W(d))return d.clone();var e=typeof s=="object"?s:{};return e.date=d,e.args=arguments,new oe(e)},p=Y;p.l=ne,p.i=W,p.w=function(d,s){return x(d,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var oe=function(){function d(e){this.$L=ne(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[Z]=!0}var s=d.prototype;return s.parse=function(e){this.$d=function(o){var a=o.date,c=o.utc;if(a===null)return new Date(NaN);if(p.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var u=a.match(F);if(u){var _=u[2]-1||0,k=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],_,u[3]||1,u[4]||0,u[5]||0,u[6]||0,k)):new Date(u[1],_,u[3]||1,u[4]||0,u[5]||0,u[6]||0,k)}}return new Date(a)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return p},s.isValid=function(){return this.$d.toString()!==w},s.isSame=function(e,o){var a=x(e);return this.startOf(o)<=a&&a<=this.endOf(o)},s.isAfter=function(e,o){return x(e)<this.startOf(o)},s.isBefore=function(e,o){return this.endOf(o)<x(e)},s.$g=function(e,o,a){return p.u(e)?this[o]:this.set(a,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,o){var a=this,c=!!p.u(o)||o,u=p.p(e),_=function(U,N){var V=p.w(a.$u?Date.UTC(a.$y,N,U):new Date(a.$y,N,U),a);return c?V:V.endOf(l)},k=function(U,N){return p.w(a.toDate()[U].apply(a.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(N)),a)},T=this.$W,O=this.$M,z=this.$D,q="set"+(this.$u?"UTC":"");switch(u){case A:return c?_(1,0):_(31,11);case D:return c?_(1,O):_(0,O+1);case C:var B=this.$locale().weekStart||0,ae=(T<B?T+7:T)-B;return _(c?z-ae:z+(6-ae),O);case l:case M:return k(q+"Hours",0);case S:return k(q+"Minutes",1);case b:return k(q+"Seconds",2);case v:return k(q+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,o){var a,c=p.p(e),u="set"+(this.$u?"UTC":""),_=(a={},a[l]=u+"Date",a[M]=u+"Date",a[D]=u+"Month",a[A]=u+"FullYear",a[S]=u+"Hours",a[b]=u+"Minutes",a[v]=u+"Seconds",a[h]=u+"Milliseconds",a)[c],k=c===l?this.$D+(o-this.$W):o;if(c===D||c===A){var T=this.clone().set(M,1);T.$d[_](k),T.init(),this.$d=T.set(M,Math.min(this.$D,T.daysInMonth())).$d}else _&&this.$d[_](k);return this.init(),this},s.set=function(e,o){return this.clone().$set(e,o)},s.get=function(e){return this[p.p(e)]()},s.add=function(e,o){var a,c=this;e=Number(e);var u=p.p(o),_=function(O){var z=x(c);return p.w(z.date(z.date()+Math.round(O*e)),c)};if(u===D)return this.set(D,this.$M+e);if(u===A)return this.set(A,this.$y+e);if(u===l)return _(1);if(u===C)return _(7);var k=(a={},a[b]=i,a[S]=f,a[v]=r,a)[u]||1,T=this.$d.getTime()+e*k;return p.w(T,this)},s.subtract=function(e,o){return this.add(-1*e,o)},s.format=function(e){var o=this,a=this.$locale();if(!this.isValid())return a.invalidDate||w;var c=e||"YYYY-MM-DDTHH:mm:ssZ",u=p.z(this),_=this.$H,k=this.$m,T=this.$M,O=a.weekdays,z=a.months,q=a.meridiem,B=function(N,V,se,ie){return N&&(N[V]||N(o,c))||se[V].slice(0,ie)},ae=function(N){return p.s(_%12||12,N,"0")},U=q||function(N,V,se){var ie=N<12?"AM":"PM";return se?ie.toLowerCase():ie};return c.replace(X,function(N,V){return V||function(se){switch(se){case"YY":return String(o.$y).slice(-2);case"YYYY":return p.s(o.$y,4,"0");case"M":return T+1;case"MM":return p.s(T+1,2,"0");case"MMM":return B(a.monthsShort,T,z,3);case"MMMM":return B(z,T);case"D":return o.$D;case"DD":return p.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return B(a.weekdaysMin,o.$W,O,2);case"ddd":return B(a.weekdaysShort,o.$W,O,3);case"dddd":return O[o.$W];case"H":return String(_);case"HH":return p.s(_,2,"0");case"h":return ae(1);case"hh":return ae(2);case"a":return U(_,k,!0);case"A":return U(_,k,!1);case"m":return String(k);case"mm":return p.s(k,2,"0");case"s":return String(o.$s);case"ss":return p.s(o.$s,2,"0");case"SSS":return p.s(o.$ms,3,"0");case"Z":return u}return null}(N)||u.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,o,a){var c,u=this,_=p.p(o),k=x(e),T=(k.utcOffset()-this.utcOffset())*i,O=this-k,z=function(){return p.m(u,k)};switch(_){case A:c=z()/12;break;case D:c=z();break;case y:c=z()/3;break;case C:c=(O-T)/6048e5;break;case l:c=(O-T)/864e5;break;case S:c=O/f;break;case b:c=O/i;break;case v:c=O/r;break;default:c=O}return a?c:p.a(c)},s.daysInMonth=function(){return this.endOf(D).$D},s.$locale=function(){return L[this.$L]},s.locale=function(e,o){if(!e)return this.$L;var a=this.clone(),c=ne(e,o,!0);return c&&(a.$L=c),a},s.clone=function(){return p.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},d}(),me=oe.prototype;return x.prototype=me,[["$ms",h],["$s",v],["$m",b],["$H",S],["$W",l],["$M",D],["$y",A],["$D",M]].forEach(function(d){me[d[1]]=function(s){return this.$g(s,d[0],d[1])}}),x.extend=function(d,s){return d.$i||(d(s,oe,x),d.$i=!0),x},x.locale=ne,x.isDayjs=W,x.unix=function(d){return x(1e3*d)},x.en=L[P],x.Ls=L,x.p={},x})})(ke);var Xt=ke.exports;const fe=Me(Xt);var Se={exports:{}};(function(t,n){(function(r,i){t.exports=i()})(ye,function(){return function(r,i,f){r=r||{};var h=i.prototype,v={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(l,C,D,y){return h.fromToBase(l,C,D,y)}f.en.relativeTime=v,h.fromToBase=function(l,C,D,y,A){for(var M,w,F,X=D.$locale().relativeTime||v,ee=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],te=ee.length,Y=0;Y<te;Y+=1){var P=ee[Y];P.d&&(M=y?f(l).diff(D,P.d,!0):D.diff(l,P.d,!0));var L=(r.rounding||Math.round)(Math.abs(M));if(F=M>0,L<=P.r||!P.r){L<=1&&Y>0&&(P=ee[Y-1]);var Z=X[P.l];A&&(L=A(""+L)),w=typeof Z=="string"?Z.replace("%d",L):Z(L,C,P.l,F);break}}if(C)return w;var W=F?X.future:X.past;return typeof W=="function"?W(w):W.replace("%s",w)},h.to=function(l,C){return b(l,C,this,!0)},h.from=function(l,C){return b(l,C,this)};var S=function(l){return l.$u?f.utc():f()};h.toNow=function(l){return this.to(S(this),l)},h.fromNow=function(l){return this.from(S(this),l)}}})})(Se);var ea=Se.exports;const ta=Me(ea),aa={class:"title"},sa={class:"date"},ra=H({__name:"Title",setup(t){const n=Q().page.value,{title:r,description:i,lastUpdated:f,frontmatter:h}=n;fe.extend(ta);const v=fe().to(fe(h.date||Date.now()));return(b,S)=>(g(),m(E,null,[$("h1",aa,I(j(r)),1),$("div",sa,"🕒 Published at: "+I(j(v)),1)],64))}}),na=R(ra,[["__scopeId","data-v-cec0b25f"]]),oa=H({__name:"MyLayout",setup(t){const{Layout:n}=pe;return(r,i)=>{const f=Ie("Comments");return g(),m(E,null,[J(j(n),null,{"doc-before":de(()=>[J(na),J(Qt)]),"doc-after":de(()=>[J(f)]),"home-hero-before":de(()=>[J(Ct)]),"home-features-after":de(()=>[J(Yt)]),_:1}),J(Pt)],64)}}}),ia=we('<br data-v-be41f5db><br data-v-be41f5db><div class="main" data-v-be41f5db><h1 class="about-header" data-v-be41f5db>👨‍💻 About Me</h1><br data-v-be41f5db><code data-v-be41f5db><b data-v-be41f5db>I&#39;m a IT Specialist / Developer </b></code><br data-v-be41f5db><code data-v-be41f5db><b data-v-be41f5db>A Computer Science Graduate</b></code><br data-v-be41f5db><code data-v-be41f5db><b data-v-be41f5db>Freelance, IT CS related works at the moment</b></code><br data-v-be41f5db><code data-v-be41f5db><b data-v-be41f5db>Very Open for Permanent Job Position, Projects, Assignments and Layout</b></code><br data-v-be41f5db><code data-v-be41f5db><b data-v-be41f5db>Passionate to Learn new skills and knowledges</b></code><br data-v-be41f5db><div class="typewriter-effect" data-v-be41f5db><div class="text" id="typewriter-text" data-v-be41f5db></div><code data-v-be41f5db><b data-v-be41f5db>A Trustworthy person</b></code></div><br data-v-be41f5db><code data-v-be41f5db><b data-v-be41f5db>ENV :</b></code><div class="container" data-v-be41f5db><div class="image" data-v-be41f5db><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue js" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40" data-v-be41f5db></div><div class="image" data-v-be41f5db><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" data-v-be41f5db></div></div><br data-v-be41f5db><br data-v-be41f5db><br data-v-be41f5db><br data-v-be41f5db></div>',3),da=H({__name:"Dev",setup(t){return(n,r)=>ia}}),ca=R(da,[["__scopeId","data-v-be41f5db"]]),ua=we('<br data-v-10061411><br data-v-10061411><div class="main" data-v-10061411><h1 class="about-header" data-v-10061411>👨‍💻 Works</h1><br data-v-10061411><code data-v-10061411>Recent 💡 &gt;&gt;</code><br data-v-10061411><div class="typewriter-effect" data-v-10061411><div class="text" id="typewriter-text" data-v-10061411></div><code data-v-10061411>- hacktoberfest 23</code></div><code data-v-10061411>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener" data-v-10061411>bicoltranslate</a></code><br data-v-10061411><code data-v-10061411>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener" data-v-10061411>feedboard</a></code><br data-v-10061411><code data-v-10061411>- lorenzokimarthur.com</code><br data-v-10061411><code data-v-10061411>- Hacktoberfest 22</code><br data-v-10061411><code data-v-10061411>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener" data-v-10061411>DEVS</a></code> <br data-v-10061411><code data-v-10061411>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener" data-v-10061411>SNAMEGENERATOR</a></code><br data-v-10061411><code data-v-10061411>- 30 Days Flutter 21</code><br data-v-10061411><code data-v-10061411>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener" data-v-10061411>KRPRT-OCTO-UPLOADER</a></code><br data-v-10061411><code data-v-10061411>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener" data-v-10061411>KSHARED-NOCTO-COPIER</a></code><br data-v-10061411><code data-v-10061411>- PLANBANK website</code><br data-v-10061411><code data-v-10061411>- CQMS - Customer Queuing Management System</code><br data-v-10061411><code data-v-10061411>- LMS - Library Management System</code><br data-v-10061411><code data-v-10061411>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener" data-v-10061411>vbex-dot.net</a></code><br data-v-10061411><br data-v-10061411><br data-v-10061411><br data-v-10061411></div>',3),la=H({__name:"Projie",setup(t){return(n,r)=>ua}}),ha=R(la,[["__scopeId","data-v-10061411"]]),fa={...pe,Layout:oa,enhanceApp(t){pe.enhanceApp(t);const{app:n}=t;n.component("Archives",ct),n.component("Tags",St),n.component("Dev",ca),n.component("Work",ha)}};function De(t){if(t.extends){const n=De(t.extends);return{...n,...t,async enhanceApp(r){n.enhanceApp&&await n.enhanceApp(r),t.enhanceApp&&await t.enhanceApp(r)}}}return t}const K=De(fa),va=H({name:"VitePressApp",setup(){const{site:t}=Q();return We(()=>{Be(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&Ue(),Je(),Ge(),K.setup&&K.setup(),()=>Ze(K.Layout)}});async function pa(){const t=_a(),n=ba();n.provide(Le,t);const r=Ne(t.route);return n.provide(je,r),n.component("Content",ze),n.component("ClientOnly",Ee),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),K.enhanceApp&&await K.enhanceApp({app:n,router:t,siteData:He}),{app:n,router:t,data:r}}function ba(){return Re(va)}function _a(){let t=ve,n;return Ve(r=>{let i=Fe(r),f=null;return i&&(t&&(n=i),(t||n===i)&&(i=i.replace(/\.js$/,".lean.js")),f=Ye(()=>import(i),__vite__mapDeps([]))),ve&&(t=!1),f},K.NotFound)}ve&&pa().then(({app:t,router:n,data:r})=>{n.go().then(()=>{Pe(n.route,r.site),t.mount("#app")})});export{pa as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}