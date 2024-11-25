var R={grad:.9,turn:360,rad:360/(2*Math.PI)},b=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},i=function(n,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*n)/r+0},h=function(n,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),n>r?r:n>t?n:t},w=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},m=function(n){return{r:h(n.r,0,255),g:h(n.g,0,255),b:h(n.b,0,255),a:h(n.a)}},c=function(n){return{r:i(n.r),g:i(n.g),b:i(n.b),a:i(n.a,3)}},q=/^#([0-9a-f]{3,8})$/i,f=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},S=function(n){var t=n.r,r=n.g,e=n.b,u=n.a,a=Math.max(t,r,e),o=a-Math.min(t,r,e),s=o?a===t?(r-e)/o:a===r?2+(e-t)/o:4+(t-r)/o:0;return{h:60*(s<0?s+6:s),s:a?o/a*100:0,v:a/255*100,a:u}},k=function(n){var t=n.h,r=n.s,e=n.v,u=n.a;t=t/360*6,r/=100,e/=100;var a=Math.floor(t),o=e*(1-r),s=e*(1-(t-a)*r),l=e*(1-(1-t+a)*r),p=a%6;return{r:255*[e,s,o,o,l,e][p],g:255*[l,e,e,s,o,o][p],b:255*[o,o,l,e,e,s][p],a:u}},N=function(n){return{h:w(n.h),s:h(n.s,0,100),l:h(n.l,0,100),a:h(n.a)}},x=function(n){return{h:i(n.h),s:i(n.s),l:i(n.l),a:i(n.a,3)}},I=function(n){return k((r=(t=n).s,{h:t.h,s:(r*=((e=t.l)<50?e:100-e)/100)>0?2*r/(e+r)*100:0,v:e+r,a:t.a}));var t,r,e},d=function(n){return{h:(t=S(n)).h,s:(u=(200-(r=t.s))*(e=t.v)/100)>0&&u<200?r*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,r,e,u},D=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,E=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,F=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,L=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,H={string:[[function(n){var t=q.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?i(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?i(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=F.exec(n)||L.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:m({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=D.exec(n)||E.exec(n);if(!t)return null;var r,e,u=N({h:(r=t[1],e=t[2],e===void 0&&(e="deg"),Number(r)*(R[e]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return I(u)},"hsl"]],object:[[function(n){var t=n.r,r=n.g,e=n.b,u=n.a,a=u===void 0?1:u;return b(t)&&b(r)&&b(e)?m({r:Number(t),g:Number(r),b:Number(e),a:Number(a)}):null},"rgb"],[function(n){var t=n.h,r=n.s,e=n.l,u=n.a,a=u===void 0?1:u;if(!b(t)||!b(r)||!b(e))return null;var o=N({h:Number(t),s:Number(r),l:Number(e),a:Number(a)});return I(o)},"hsl"],[function(n){var t=n.h,r=n.s,e=n.v,u=n.a,a=u===void 0?1:u;if(!b(t)||!b(r)||!b(e))return null;var o=function(s){return{h:w(s.h),s:h(s.s,0,100),v:h(s.v,0,100),a:h(s.a)}}({h:Number(t),s:Number(r),v:Number(e),a:Number(a)});return k(o)},"hsv"]]},M=function(n,t){for(var r=0;r<t.length;r++){var e=t[r][0](n);if(e)return[e,t[r][1]]}return[null,void 0]},P=function(n){return typeof n=="string"?M(n.trim(),H.string):typeof n=="object"&&n!==null?M(n,H.object):[null,void 0]},v=function(n,t){var r=d(n);return{h:r.h,s:h(r.s+100*t,0,100),l:r.l,a:r.a}},y=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},$=function(n,t){var r=d(n);return{h:r.h,s:r.s,l:h(r.l+100*t,0,100),a:r.a}},j=function(){function n(t){this.parsed=P(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return i(y(this.rgba),2)},n.prototype.isDark=function(){return y(this.rgba)<.5},n.prototype.isLight=function(){return y(this.rgba)>=.5},n.prototype.toHex=function(){return t=c(this.rgba),r=t.r,e=t.g,u=t.b,o=(a=t.a)<1?f(i(255*a)):"","#"+f(r)+f(e)+f(u)+o;var t,r,e,u,a,o},n.prototype.toRgb=function(){return c(this.rgba)},n.prototype.toRgbString=function(){return t=c(this.rgba),r=t.r,e=t.g,u=t.b,(a=t.a)<1?"rgba("+r+", "+e+", "+u+", "+a+")":"rgb("+r+", "+e+", "+u+")";var t,r,e,u,a},n.prototype.toHsl=function(){return x(d(this.rgba))},n.prototype.toHslString=function(){return t=x(d(this.rgba)),r=t.h,e=t.s,u=t.l,(a=t.a)<1?"hsla("+r+", "+e+"%, "+u+"%, "+a+")":"hsl("+r+", "+e+"%, "+u+"%)";var t,r,e,u,a},n.prototype.toHsv=function(){return t=S(this.rgba),{h:i(t.h),s:i(t.s),v:i(t.v),a:i(t.a,3)};var t},n.prototype.invert=function(){return g({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),g(v(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),g(v(this.rgba,-t))},n.prototype.grayscale=function(){return g(v(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),g($(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),g($(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?g({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):i(this.rgba.a,3);var r},n.prototype.hue=function(t){var r=d(this.rgba);return typeof t=="number"?g({h:t,s:r.s,l:r.l,a:r.a}):i(r.h)},n.prototype.isEqual=function(t){return this.toHex()===g(t).toHex()},n}(),g=function(n){return n instanceof j?n:new j(n)};export{g as w};
