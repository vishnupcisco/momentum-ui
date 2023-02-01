(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{681:function(module,exports,__webpack_require__){function source(re){return re?"string"==typeof re?re:re.source:null}function concat(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var joined=args.map((function(x){return source(x)})).join("");return joined}function either(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var joined="("+args.map((function(x){return source(x)})).join("|")+")";return joined}__webpack_require__(124),__webpack_require__(52),__webpack_require__(45),module.exports=function applescript(hljs){var STRING=hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null}),PARAMS={className:"params",begin:/\(/,end:/\)/,contains:["self",hljs.C_NUMBER_MODE,STRING]},COMMENT_MODE_1=hljs.COMMENT(/--/,/$/),COMMENTS=[COMMENT_MODE_1,hljs.COMMENT(/\(\*/,/\*\)/,{contains:["self",COMMENT_MODE_1]}),hljs.HASH_COMMENT_MODE];return{name:"AppleScript",aliases:["osascript"],keywords:{keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",literal:"AppleScript false linefeed return pi quote result space tab true",built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"},contains:[STRING,hljs.C_NUMBER_MODE,{className:"built_in",begin:concat(/\b/,either.apply(void 0,[/clipboard info/,/the clipboard/,/info for/,/list (disks|folder)/,/mount volume/,/path to/,/(close|open for) access/,/(get|set) eof/,/current date/,/do shell script/,/get volume settings/,/random number/,/set volume/,/system attribute/,/system info/,/time to GMT/,/(load|run|store) script/,/scripting components/,/ASCII (character|number)/,/localized string/,/choose (application|color|file|file name|folder|from list|remote application|URL)/,/display (alert|dialog)/]),/\b/)},{className:"built_in",begin:/^\s*return\b/},{className:"literal",begin:/\b(text item delimiters|current application|missing value)\b/},{className:"keyword",begin:concat(/\b/,either.apply(void 0,[/apart from/,/aside from/,/instead of/,/out of/,/greater than/,/isn't|(doesn't|does not) (equal|come before|come after|contain)/,/(greater|less) than( or equal)?/,/(starts?|ends|begins?) with/,/contained by/,/comes (before|after)/,/a (ref|reference)/,/POSIX (file|path)/,/(date|time) string/,/quoted form/]),/\b/)},{beginKeywords:"on",illegal:/[${=;\n]/,contains:[hljs.UNDERSCORE_TITLE_MODE,PARAMS]}].concat(COMMENTS),illegal:/\/\/|->|=>|\[\[/}}}}]);