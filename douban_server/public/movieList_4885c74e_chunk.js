webpackJsonp([2],{118:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(5),u=o(c);n(281);var l=n(256),f=o(l),m=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addScrollEvent=function(){var e=n;n.refs.scrollContainer.onscroll=function(t){if(t.target.scrollHeight-2<=t.target.scrollTop+t.target.offsetHeight){if(console.log("到底了"),e.state.isButtom)return;e.setState({isButtom:!0}),e.fetch(e.state.message.movieType)}}},n.fetch=function(e){if(e!=n.state.message.movieType)return void n.setState({isShowLoading:!0,isButtom:!1,movieListData:[],message:{movieType:e,pageIndex:1,start:0,count:10}});var t=n,o=Object.assign({},n.state.message),i=[].concat(n.state.movieListData);o.movieType=e,o.start=(o.pageIndex-1)*o.count,o.pageIndex++;var r=JSON.stringify(o);f.default.getMovieListData(r).then(function(e){console.log(e),i=i.length>0?i.concat(e.subjects):e.subjects,console.log(i),t.setState({isShowLoading:!1,isButtom:!1,movieListData:i,message:o})},function(e){}).catch(function(e){})},n.showLoading=function(){return u.default.createElement("div",{className:"movieList_container"},"正在加载数据00000...")},n.goDetail=function(e){n.context.router.push("/movie/movieDetail/"+e)},n.renderItem=function(e){return u.default.createElement("div",{className:"item",key:e.id,onClick:function(){return n.goDetail(e.id)}},u.default.createElement("img",{className:"item_left",src:e.images.small,alt:""}),u.default.createElement("div",{className:"item_right"},u.default.createElement("h3",null,e.title),u.default.createElement("span",null,e.year)))},n.renderMovieList=function(){return u.default.createElement("div",{ref:"scrollContainer",className:"movieList_container"},n.state.movieListData.map(n.renderItem),u.default.createElement("div",{className:n.state.isButtom?"showBottom ":"hideBottom "},"正在请求数据......"))},n.state={isShowLoading:!0,isButtom:!1,movieListData:[],message:{movieType:"in_theaters",pageIndex:1,start:0,count:10}},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.fetch(this.state.message.movieType)}},{key:"componentWillReceiveProps",value:function(e){if(!e.params.movieType)return void this.setState({isShowLoading:!0,isButtom:!1,movieListData:[],message:{movieType:"in_theaters",pageIndex:1,start:0,count:10}});this.fetch(e.params.movieType)}},{key:"componentDidUpdate",value:function(){this.state.isShowLoading?this.fetch(this.state.message.movieType):this.addScrollEvent()}},{key:"render",value:function(){return this.state.isShowLoading?this.showLoading():this.renderMovieList()}}]),t}(c.Component);m.contextTypes={router:u.default.PropTypes.object},t.default=m},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={HTTP:"http://",PORT:"3004",SERVER_PATH:"127.0.0.1"}},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(n(42),n(251)),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={getMovieListData:function(e){console.log("获取了电影列表数据"),console.log(e);var t=""+i.default.HTTP+i.default.SERVER_PATH+":"+i.default.PORT+"/getMovieListData?message="+e;return new Promise(function(e,n){fetch(t).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试;\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){n(e)})})},getMovieDetailData:function(e){console.log("获取了电影详细数据"),console.log(e);var t=""+i.default.HTTP+i.default.SERVER_PATH+":"+i.default.PORT+"/getMovieDetailData?message="+e;return new Promise(function(e,n){fetch(t).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试;\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){n(e)})})},searchMovieList:function(e){var t=""+i.default.HTTP+i.default.SERVER_PATH+":"+i.default.PORT+"/searchMovieList?message="+e;return new Promise(function(e,n){fetch(t).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试;\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){n(e)})})}}},281:function(e,t,n){var o=n(282);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(235)(o,i);o.locals&&(e.exports=o.locals)},282:function(e,t,n){t=e.exports=n(234)(void 0),t.push([e.i,".movieList_container {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.movieList_container .item {\r\n    background-color: #F2F2F2;\r\n    height: 12rem;\r\n    display: flex;\r\n    /*text-align: center;*/\r\n    align-items: center;\r\n\r\n}\r\n\r\n.movieList_container .item .item_left {\r\n    height: 10rem;\r\n    /*text-align: center;*/\r\n    padding-left: 1rem;\r\n    padding-right: 0.5rem;\r\n\r\n}\r\n\r\n.movieList_container .showBottom {\r\n    display: block;\r\n    height: auto;\r\n    text-align: center;\r\n}\r\n\r\n.movieList_container .hideBottom {\r\n    display: none;\r\n}\r\n",""])}});