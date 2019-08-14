!function(){var t=function(t,r,e,i){var n={};t=t||[],n.gramSizeLower=e||2,n.gramSizeUpper=i||3,n.useLevenshtein="boolean"!=typeof r||r,n.exactSet={},n.matchDict={},n.items={};var a=function(t,r){if(null===t&&null===r)throw"Trying to compare two null values";if(null===t||null===r)return 0;var e=function(t,r){for(var e,i,n=[],a=0;a<=r.length;a++)for(var h=0;h<=t.length;h++)i=a&&h?t.charAt(h-1)===r.charAt(a-1)?e:Math.min(n[h],n[h-1],e)+1:a+h,e=n[h],n[h]=i;return n.pop()}(t=String(t),r=String(r));return t.length>r.length?1-e/t.length:1-e/r.length},h=/[^a-zA-Z0-9\u00C0-\u00FF, ]+/g,o=function(t,r){for(var e={},i=function(t,r){r=r||2;var e="-"+t.toLowerCase().replace(h,"")+"-",i=r-e.length,n=[];if(i>0)for(var a=0;a<i;++a)t+="-";for(a=0;a<e.length-r+1;++a)n.push(e.slice(a,a+r));return n}(t,r=r||2),n=0;n<i.length;++n)i[n]in e?e[i[n]]+=1:e[i[n]]=1;return e};n.get=function(t,r,e){void 0===e&&(e=.33);var i=this._get(t,e);return i||void 0===r?i:r},n._get=function(t,r){var e=this._normalizeStr(t),i=this.exactSet[e];if(i)return[[1,i]];for(var n=[],a=this.gramSizeUpper;a>=this.gramSizeLower;--a)if((n=this.__get(t,a,r))&&n.length>0)return n;return null},n.__get=function(t,r,e){var i,n,h,s,u=this._normalizeStr(t),c={},f=o(u,r),l=this.items[r],g=0;for(i in f)if(n=f[i],g+=Math.pow(n,2),i in this.matchDict)for(x=0;x<this.matchDict[i].length;++x)h=this.matchDict[i][x][0],s=this.matchDict[i][x][1],h in c?c[h]+=n*s:c[h]=n*s;if(function(t){for(var r in t)if(t.hasOwnProperty(r))return!1;return!0}(c))return null;var m,p=Math.sqrt(g),v=[];for(var S in c)m=c[S],v.push([m/(p*l[S][0]),l[S][1]]);var z=function(t,r){return t[0]<r[0]?1:t[0]>r[0]?-1:0};if(v.sort(z),this.useLevenshtein){for(var d=[],w=Math.min(50,v.length),x=0;x<w;++x)d.push([a(v[x][1],u),v[x][1]]);(v=d).sort(z)}d=[];return v.forEach(function(t){t[0]>=e&&d.push([t[0],this.exactSet[t[1]]])}.bind(this)),d},n.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var r=this.gramSizeLower;r<this.gramSizeUpper+1;++r)this._add(t,r)},n._add=function(t,r){var e=this._normalizeStr(t),i=this.items[r]||[],n=i.length;i.push(0);var a,h,s=o(e,r),u=0;for(a in s)h=s[a],u+=Math.pow(h,2),a in this.matchDict?this.matchDict[a].push([n,h]):this.matchDict[a]=[[n,h]];var c=Math.sqrt(u);i[n]=[c,e],this.items[r]=i,this.exactSet[e]=t},n._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},n.length=function(){var t,r=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(r+=1);return r},n.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},n.values=function(){var t,r=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&r.push(this.exactSet[t]);return r};for(var s=n.gramSizeLower;s<n.gramSizeUpper+1;++s)n.items[s]=[];for(s=0;s<t.length;++s)n.add(t[s]);return n};"undefined"!=typeof module&&module.exports?(module.exports=t,this.FuzzySet=t):this.FuzzySet=t}();