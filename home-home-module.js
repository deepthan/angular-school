(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home-content/home-content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-content/home-content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"home-full-container\">\r\n  <slideshow></slideshow>\r\n</div>\r\n\r\n<div class='home-full-container'>\r\n    <need-poetry [whitchSatrt]=\"whitchSatrt\"></need-poetry>\r\n</div>\r\n\r\n <div class='home-full-container'>\r\n    <poetry-presentation-us [whitchSatrt]=\"whitchSatrt\"></poetry-presentation-us>\r\n</div>\r\n\r\n<div class='home-full-container' style='background-color: #f5f5f5'>\r\n    <poetry-news [whitchSatrt]=\"whitchSatrt\"></poetry-news>\r\n</div>\r\n\r\n<div class='home-full-container partner-tips' style='background-color: #f5f5f5' >\r\n    <poetry-partner-and-footer [whitchSatrt]=\"whitchSatrt\"></poetry-partner-and-footer>\r\n</div>\r\n\r\n<div class='fixed-btn fixed-btn-top' (click)='goUp()'>\r\n    <i class=\"anticon anticon-up\"></i>\r\n</div>\r\n\r\n<div class='fixed-btn fixed-btn-bottom' (click)='goDown()'>\r\n    <i class=\"anticon anticon-down\"></i>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/home-content.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-content/home-content.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-full-container {\n  position: relative; }\n\n@media screen and (min-width: 768px) {\n  .home-full-container {\n    width: 100%;\n    height: 100%; }\n  .fixed-btn {\n    cursor: pointer;\n    padding: 13px;\n    background: #222;\n    width: 45px;\n    height: 45px;\n    display: block;\n    position: fixed;\n    right: 10px;\n    z-index: 99999;\n    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.1);\n    transition: .4s all ease; }\n    .fixed-btn i {\n      color: #eee;\n      cursor: pointer;\n      font-size: 24px; }\n  .fixed-btn-top {\n    top: 100px; }\n  .fixed-btn-bottom {\n    top: 150px; }\n  .partner-tips {\n    margin-top: -58px; } }\n\n@media screen and (max-width: 767px) {\n  .fixed-btn {\n    display: none; }\n  .partner-tips {\n    margin-top: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxcaG9tZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFHZCx3Q0FBcUM7SUFDckMsd0JBQXdCLEVBQUE7SUFiMUI7TUFlSSxXQUFXO01BQ1gsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQUduQjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBO0VBR1o7SUFDRyxpQkFBaUIsRUFBQSxFQUNuQjs7QUFJSDtFQUNFO0lBQ0UsYUFDRixFQUFBO0VBRUE7SUFDRSxhQUFhLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L2hvbWUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWZ1bGwtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAvLyDnrKzkuIDpg6jliIbvvIzova7mkq3lpKflm74gXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5ob21lLWZ1bGwtY29udGFpbmVye1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZpeGVkLWJ0bntcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICB3aWR0aDogNDVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDAgM3B4IHJnYmEoMCwwLDAsMC4xKTsgXHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDAgMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDAgMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogLjRzIGFsbCBlYXNlO1xyXG4gICAgICBpe1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5maXhlZC1idG4tdG9we1xyXG4gICAgICB0b3A6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpeGVkLWJ0bi1ib3R0b217XHJcbiAgICAgIHRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucGFydG5lci10aXBze1xyXG4gICAgICAgbWFyZ2luLXRvcDogLTU4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuZml4ZWQtYnRue1xyXG4gICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgXHJcbiAgICAucGFydG5lci10aXBze1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICB9XHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/home-content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/home-content/home-content.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_return_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/service/return-window.service */ "./src/app/shared/service/return-window.service.ts");
/**
 * 文件名称：首页
 * 编写人：何林昆
 * 编写日期：2017.5.2
 * 变更人：
 * 变更内容：
 **/



var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent(windowRef) {
        this.windowRef = windowRef;
        this.documentH = document.documentElement.offsetHeight || document.body.offsetHeight; // 屏幕高度
        this.readyAnimateArray = [];
        this.documentW = document.documentElement.offsetWidth || document.body.offsetWidth; // 屏幕宽度
        this._window = windowRef.nativeWindow;
    }
    /**
     * 往下滚动的时候
     * 1. 正好在节点上 直接加上屏幕大小
     * 2. 本页面往下一点 屏幕大小 - 往下的一点
     * 3. 往下的卷曲值取余屏幕大小
     */
    HomeContentComponent.prototype.goDown = function () {
        var defaultOffY = window.pageYOffset; //页面卷曲值
        // let willScrTop = ele.offsetHeight - 58 + Math.floor(defaultOffY/ele.offsetHeight)*ele.offsetHeight ; // 将要跳转到的位置
        var willScrTop = defaultOffY + this.documentH - 58 - defaultOffY % this.documentH;
        willScrTop === defaultOffY ? willScrTop = defaultOffY + this.documentH : null;
        var tempOffY = defaultOffY;
        var timmer = requestAnimationFrame(function fn() {
            tempOffY = tempOffY + 50;
            if (willScrTop > tempOffY) {
                window.scrollTo(0, tempOffY);
                setTimeout(function () {
                    timmer = requestAnimationFrame(fn);
                }, 1);
            }
            else {
                window.scrollTo(0, willScrTop);
            }
        });
    };
    HomeContentComponent.prototype.goUp = function () {
        var defaultOffY = window.pageYOffset; //页面卷曲值
        if (defaultOffY <= 0) {
            return;
        }
        var willScrTop = defaultOffY - 58 - defaultOffY % this.documentH;
        var tempOffY = defaultOffY;
        var timmer = requestAnimationFrame(function fn() {
            tempOffY = tempOffY - 50;
            if (willScrTop < tempOffY) {
                window.scrollTo(0, tempOffY);
                setTimeout(function () {
                    timmer = requestAnimationFrame(fn);
                }, 1);
            }
            else {
                window.scrollTo(0, willScrTop);
            }
        });
    };
    HomeContentComponent.prototype.addListener = function () {
        var that = this;
        this.eventListener = this._window.addEventListener("scroll", function () {
            that.startAnimations();
        });
    };
    HomeContentComponent.prototype.startAnimations = function () {
        var ratio = Math.ceil((window.pageYOffset - this.documentH / 5) / this.documentH);
        if (this.readyAnimateArray.indexOf(ratio) == -1) {
            this.readyAnimateArray.push(ratio);
        }
        else {
            return;
        }
        this.whitchSatrt = ratio;
    };
    HomeContentComponent.prototype.ngOnDestroy = function () {
        this._window.removeEventListener("scroll", this.eventListener);
    };
    HomeContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("this.documentW", this.documentW);
        if (this.documentW < 768) {
            var _loop_1 = function (item) {
                setTimeout(function () {
                    _this.whitchSatrt = item;
                }, 1);
            };
            for (var item = 0; item <= 5; item++) {
                _loop_1(item);
            }
        }
        else {
            this.addListener();
        }
    };
    HomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-content',
            template: __webpack_require__(/*! ./home-content.component.html */ "./src/app/pages/home/home-content/home-content.component.html"),
            styles: [__webpack_require__(/*! ./home-content.component.scss */ "./src/app/pages/home/home-content/home-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_return_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"]])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/need-poetry/need-poetry.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='need-top'>\r\n  <div class='need-tit'>\r\n    <div class='tit-box' [@fadeInUp] *ngIf=\"startAnimationTit\">\r\n      为什么要做这个网站？\r\n      <div class='icon-wrap'>\r\n        <div class='protect-icon'>\r\n          <i class=\"fa fa-shield\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=' need-detail' [@fadeInUp] *ngIf=\"startAnimationDet\">\r\n    <p> 古诗是中华民族乃至全世界的瑰宝，我们应该传承下去， 虽然有古典文集， 但大多数人并没有拥有这些书籍。  </p>\r\n    <p> 从某种意义上来说，这些庞大的文集离我们是有一定距离的。因此本网站诞生了，你可以在此享受诗词的饕餮盛宴。</p>\r\n  </div>\r\n</div>\r\n\r\n<div class='need-bottom container-fluid'>\r\n  <div class=\"layout \" >\r\n    <div class='auto-reasons' [@fadeInUp] *ngIf=\"startAnimationDet\"  nz-row>\r\n      <div class=\"need-reasons reasons-color1\" nz-col  nzSm=\"24\" nzMd=\"6\" >\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-edit\"></i>\r\n          </div>\r\n          <div class='reasons-tit'> 生活需要诗意 </div>\r\n          <p class='reasons-det'> 我们生活在都市里面，生活节奏越来越快的我们少了一颗能静下来慢慢欣赏美好的心。中国的诗词有着无限的魅力，只是未曾发现。</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div  nz-col  nzSm=\"24\" nzMd=\"6\"  class=\"need-reasons reasons-color2\">\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-laptop\"></i>\r\n          </div>\r\n          <div class='reasons-tit'> 你需要诗意 </div>\r\n          <p class='reasons-det'>田园的美好我们或许不理解，但是短暂的生命总是有些东西值得我们追求，千年的时光过去，诗词的美丽依旧。</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div nz-col  nzSm=\"24\" nzMd=\"6\" class=\"need-reasons reasons-color3\">\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-code\"></i>\r\n          </div>\r\n          <div class='reasons-tit'>要善于发现 </div>\r\n          <p class='reasons-det'>你需要诗意,你需要诗意</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div nz-col  nzSm=\"24\" nzMd=\"6\"  class=\"need-reasons reasons-color4\">\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-lightbulb-o\"></i>\r\n          </div>\r\n          <div class='reasons-tit'> 你需要诗意</div>\r\n          <p class='reasons-det'>你需要诗意,你需要诗意</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/need-poetry/need-poetry.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (min-width: 768px) {\n  .layout {\n    width: 1200px;\n    margin: 0 auto; }\n  .need-top {\n    height: 30%; }\n    .need-top .need-tit {\n      width: 1200px;\n      font-size: 33px;\n      letter-spacing: 5px; }\n      .need-top .need-tit .tit-box {\n        padding: 15px 0 25px; }\n      .need-top .need-tit .protect-icon {\n        font-size: 19px;\n        height: 30px; }\n    .need-top .need-detail {\n      font-size: 16px;\n      margin-top: 2%; }\n  .need-bottom {\n    height: 70%;\n    /* 垂直居中 */ }\n    .need-bottom .auto-reasons {\n      position: absolute;\n      top: 50%;\n      margin-top: -250px;\n      width: 1200px;\n      height: auto; } }\n@media screen and (max-width: 767px) {\n  .layout {\n    width: 100%; }\n  .need-top {\n    padding: 20px 0; }\n    .need-top .need-tit {\n      width: 100%;\n      font-size: 16px;\n      letter-spacing: 0px; }\n      .need-top .need-tit .tit-box {\n        padding: 17px 0 16px; }\n      .need-top .need-tit .icon-wrap {\n        bottom: -24px; }\n        .need-top .need-tit .icon-wrap .protect-icon {\n          font-size: 19px;\n          height: 15px; }\n    .need-top .need-detail {\n      margin-top: 20px;\n      font-size: 12px;\n      padding: 5px 20px; }\n  .need-bottom {\n    height: 70%;\n    height: auto;\n    padding: 50px 15px 20px 15px; }\n    .need-bottom .need-reasons {\n      margin-left: 7%; } }\n.need-top {\n  width: 100%;\n  padding-top: 3%;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.075); }\n.need-top .need-tit {\n    line-height: 1.1;\n    text-align: center;\n    color: #272727;\n    margin: 0 auto; }\n.need-top .need-tit .tit-box {\n      display: inline-block !important;\n      width: auto;\n      border-bottom: 2px #e5e5e5 solid;\n      position: relative; }\n.need-top .need-tit .tit-box .icon-wrap {\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: -21px;\n        padding-right: 40px; }\n.need-top .need-tit .tit-box .icon-wrap .protect-icon {\n          width: 40px;\n          margin-left: 50%;\n          background: #fff;\n          text-align: center;\n          padding-left: 7px;\n          color: #0061ae; }\n.need-top .need-detail {\n    line-height: 2;\n    text-align: center;\n    font-weight: 300;\n    color: #272727; }\n.need-bottom {\n  width: 100%;\n  background: url('need_bg.png') repeat;\n  position: relative;\n  /* 箭头 */\n  /* need-reasons 最外层容器 */\n  /* 不同颜色 */ }\n.need-bottom:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -25px;\n    border-width: 25px;\n    border-style: solid;\n    border-color: #fff transparent transparent; }\n.need-bottom:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -25px;\n    border-width: 25px;\n    border-style: solid;\n    border-color: #dbdbdb transparent transparent; }\n.need-bottom .need-reasons {\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    /* reasons-wrap */ }\n.need-bottom .need-reasons .reasons-wrap {\n      padding: 45px 10px 20px;\n      text-align: center;\n      margin-bottom: 30px;\n      border: 3px solid #f3f3f3;\n      border-top: none;\n      border-radius: 4px;\n      box-shadow: 0 -4px 0 0;\n      /* reasons-btn */ }\n.need-bottom .need-reasons .reasons-wrap:hover {\n        background: transparent;\n        box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .need-reasons .reasons-wrap:hover:before {\n        content: \"\";\n        width: 0;\n        height: 0;\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        border-top: 8px solid;\n        border-top-color: inherit;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        margin-left: -8px; }\n.need-bottom .need-reasons .reasons-wrap .reasons-icon {\n        display: inline-block;\n        border-radius: 50%;\n        margin-bottom: 32px;\n        border: 1px solid transparent; }\n.need-bottom .need-reasons .reasons-wrap .reasons-icon i {\n          width: 108px;\n          height: 108px;\n          padding: 30px;\n          background: #fff;\n          border-radius: 50%;\n          cursor: default;\n          font-size: 48px;\n          line-height: 48px;\n          display: inline-block;\n          transition: all 0.3s ease-in-out; }\n.need-bottom .need-reasons .reasons-wrap .reasons-tit {\n        margin-bottom: 13px;\n        font-size: 18px;\n        letter-spacing: -0.3px;\n        font-weight: bold;\n        text-transform: uppercase; }\n.need-bottom .need-reasons .reasons-wrap .reasons-det {\n        font-size: 14px;\n        color: #666;\n        margin-bottom: 25px;\n        padding: 0 15px;\n        line-height: 1.6;\n        font-weight: 300;\n        letter-spacing: 0.2px; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn {\n        width: 115px;\n        height: 35px;\n        line-height: 35px;\n        font-size: 14px;\n        text-indent: 15px;\n        border-radius: 5px;\n        background: rgba(15, 15, 15, 0.05);\n        color: rgba(15, 15, 15, 0.35);\n        margin: 0 auto;\n        margin-bottom: 15px;\n        border-bottom: 3px solid rgba(0, 0, 0, 0.2);\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        transition: all 0.75s ease;\n        -moz-transition: all 0.75s ease;\n        -webkit-transition: all 0.75s ease;\n        -o-transition: all 0.75s ease; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn:hover {\n          background: #0061ae;\n          color: #fff;\n          text-indent: 10px;\n          transition: all 0.75s ease;\n          -moz-transition: all 0.75s ease;\n          -webkit-transition: all 0.75s ease;\n          -o-transition: all 0.75s ease; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn .btn-arrows {\n          text-indent: 0px;\n          opacity: 0;\n          transition: all 0.75s ease;\n          -moz-transition: all 0.75s ease;\n          -webkit-transition: all 0.75s ease;\n          -o-transition: all 0.75s ease; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn:hover .btn-arrows {\n          color: #fff;\n          opacity: 1;\n          text-indent: 7px;\n          transition: all 0.75s ease;\n          -moz-transition: all 0.75s ease;\n          -webkit-transition: all 0.75s ease;\n          -o-transition: all 0.75s ease; }\n.need-bottom .reasons-color1 .reasons-wrap {\n    color: #e45353; }\n.need-bottom .reasons-color1 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color1 .reasons-wrap:hover .reasons-icon i {\n        background: #e45353;\n        color: #fff; }\n.need-bottom .reasons-color1 .reasons-wrap .reasons-icon {\n      background-color: #e45353; }\n.need-bottom .reasons-color1 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #e45353; }\n.need-bottom .reasons-color1 .reasons-wrap .reasons-tit {\n      color: #e45353; }\n.need-bottom .reasons-color2 .reasons-wrap {\n    color: #955e89; }\n.need-bottom .reasons-color2 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color2 .reasons-wrap:hover .reasons-icon i {\n        background: #955e89;\n        color: #fff; }\n.need-bottom .reasons-color2 .reasons-wrap .reasons-icon {\n      background-color: #955e89; }\n.need-bottom .reasons-color2 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #955e89; }\n.need-bottom .reasons-color2 .reasons-wrap .reasons-tit {\n      color: #955e89; }\n.need-bottom .reasons-color3 .reasons-wrap {\n    color: #2fa6c4; }\n.need-bottom .reasons-color3 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color3 .reasons-wrap:hover .reasons-icon i {\n        background: #2fa6c4;\n        color: #fff; }\n.need-bottom .reasons-color3 .reasons-wrap .reasons-icon {\n      background-color: #2fa6c4; }\n.need-bottom .reasons-color3 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #2fa6c4; }\n.need-bottom .reasons-color3 .reasons-wrap .reasons-tit {\n      color: #2fa6c4; }\n.need-bottom .reasons-color4 .reasons-wrap {\n    color: #f58b3f; }\n.need-bottom .reasons-color4 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color4 .reasons-wrap:hover .reasons-icon i {\n        background: #f58b3f;\n        color: #fff; }\n.need-bottom .reasons-color4 .reasons-wrap .reasons-icon {\n      background-color: #f58b3f; }\n.need-bottom .reasons-color4 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #f58b3f; }\n.need-bottom .reasons-color4 .reasons-wrap .reasons-tit {\n      color: #f58b3f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvbmVlZC1wb2V0cnkvbmVlZC1wb2V0cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L25lZWQtcG9ldHJ5L0Q6XFxhbmd1bGFyLXNjaG9vbFxccG9ldHJpZXMvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLWNvbnRlbnRcXG5lZWQtcG9ldHJ5XFxuZWVkLXBvZXRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjLEVBQUE7RUFFaEI7SUFDRSxXQUFXLEVBQUE7SUFEYjtNQUdJLGFBQWE7TUFDYixlQUFlO01BQ2YsbUJBQW1CLEVBQUE7TUFMdkI7UUFPTSxvQkFBb0IsRUFBQTtNQVAxQjtRQVVNLGVBQWU7UUFDZixZQUFZLEVBQUE7SUFYbEI7TUFlSSxlQUFlO01BQ2YsY0FBYyxFQUFBO0VBR2xCO0lBQ0UsV0FBVztJQUNYLFNBQUEsRUFBQTtJQUZGO01BSUksa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVksRUFBQSxFQUNiO0FBSUw7RUFDRTtJQUNFLFdBQVcsRUFBQTtFQUViO0lBRUUsZUFBZSxFQUFBO0lBRmpCO01BSUksV0FBVztNQUNYLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtNQU52QjtRQVFNLG9CQUFvQixFQUFBO01BUjFCO1FBV00sYUFBYSxFQUFBO1FBWG5CO1VBYVEsZUFBZTtVQUNmLFlBQVksRUFBQTtJQWRwQjtNQW1CSSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEIsRUFBQTtJQUg5QjtNQUtJLGVBQWUsRUFBQSxFQUNoQjtBQUlMO0VBQ0UsV0FBVztFQUVYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNkNBQTZDLEVBQUE7QUFML0M7SUFPSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjLEVBQUE7QUFWbEI7TUFZTSxnQ0FBZ0M7TUFDaEMsV0FBVztNQUNYLGdDQUFnQztNQUNoQyxrQkFBa0IsRUFBQTtBQWZ4QjtRQWlCUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7QUFyQjNCO1VBdUJVLFdBQVc7VUFFWCxnQkFBZ0I7VUFDaEIsZ0JBQWdCO1VBRWhCLGtCQUFrQjtVQUNsQixpQkFBaUI7VUFDakIsY0FBYyxFQUFBO0FBOUJ4QjtJQXFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7QUFJbEI7RUFDRSxXQUFXO0VBQ1gscUNBQWtFO0VBQ2xFLGtCQUFrQjtFQUNsQixPQUFBO0VBcUpBLHVCQUFBO0VBRUEsU0FBQSxFQUFBO0FBM0pGO0lBTUksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQyxFQUFBO0FBaEI5QztJQW1CSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkNBQTZDLEVBQUE7QUE3QmpEO0lBaUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFrSHRCLGlCQUFBLEVBQWtCO0FBdkp0QjtNQXVDTSx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUVsQixzQkFBc0I7TUF1R3RCLGdCQUFBLEVBQWlCO0FBckp2QjtRQWdEUSx1QkFBdUI7UUFFdkIsaUNBQWlDLEVBQUE7QUFsRHpDO1FBcURRLFdBQVc7UUFDWCxRQUFRO1FBQ1IsU0FBUztRQUNULGtDQUFrQztRQUNsQyxtQ0FBbUM7UUFDbkMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxpQkFBaUIsRUFBQTtBQS9EekI7UUFrRVEscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsNkJBQTZCLEVBQUE7QUFyRXJDO1VBdUVVLFlBQVk7VUFDWixhQUFhO1VBQ2IsYUFBYTtVQUNiLGdCQUFnQjtVQUNoQixrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLGVBQWU7VUFDZixpQkFBaUI7VUFDakIscUJBQXFCO1VBS3JCLGdDQUFnQyxFQUFBO0FBcEYxQztRQXdGUSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIseUJBQXlCLEVBQUE7QUE1RmpDO1FBK0ZRLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQixFQUFBO0FBckc3QjtRQXdHUSxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUVsQixrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsMkNBQTJDO1FBQzNDLGVBQWU7UUFDZix5QkFBaUI7V0FBakIsc0JBQWlCO1lBQWpCLHFCQUFpQjtnQkFBakIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQiwrQkFBK0I7UUFDL0Isa0NBQWtDO1FBQ2xDLDZCQUE2QixFQUFBO0FBekhyQztVQTJIVSxtQkFBbUI7VUFDbkIsV0FBVztVQUNYLGlCQUFpQjtVQUNqQiwwQkFBMEI7VUFDMUIsK0JBQStCO1VBQy9CLGtDQUFrQztVQUNsQyw2QkFBNkIsRUFBQTtBQWpJdkM7VUFvSVUsZ0JBQWdCO1VBQ2hCLFVBQVU7VUFDViwwQkFBMEI7VUFDMUIsK0JBQStCO1VBQy9CLGtDQUFrQztVQUNsQyw2QkFBNkIsRUFBQTtBQXpJdkM7VUE0SVUsV0FBVztVQUNYLFVBQVU7VUFDVixnQkFBZ0I7VUFDaEIsMEJBQTBCO1VBQzFCLCtCQUErQjtVQUMvQixrQ0FBa0M7VUFDbEMsNkJBQTZCLEVBQUE7QUFsSnZDO0lBOEpNLGNBQWMsRUFBQTtBQTlKcEI7TUFnS1EsdUJBQXVCO01BRXZCLGlDQUFpQyxFQUFBO0FBbEt6QztRQW9LVSxtQkFBbUI7UUFDbkIsV0FBVyxFQUFBO0FBcktyQjtNQXlLUSx5QkFBeUIsRUFBQTtBQXpLakM7UUEyS1UsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTtBQTVLeEI7TUFnTFEsY0FBYyxFQUFBO0FBaEx0QjtJQXNMTSxjQUFjLEVBQUE7QUF0THBCO01Bd0xRLHVCQUF1QjtNQUV2QixpQ0FBaUMsRUFBQTtBQTFMekM7UUE0TFUsbUJBQW1CO1FBQ25CLFdBQVcsRUFBQTtBQTdMckI7TUFpTVEseUJBQXlCLEVBQUE7QUFqTWpDO1FBbU1VLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7QUFwTXhCO01Bd01RLGNBQWMsRUFBQTtBQXhNdEI7SUE4TU0sY0FBYyxFQUFBO0FBOU1wQjtNQWdOUSx1QkFBdUI7TUFFdkIsaUNBQWlDLEVBQUE7QUFsTnpDO1FBb05VLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7QUFyTnJCO01BeU5RLHlCQUF5QixFQUFBO0FBek5qQztRQTJOVSxnQkFBZ0I7UUFDaEIsY0FBYyxFQUFBO0FBNU54QjtNQWdPUSxjQUFjLEVBQUE7QUFoT3RCO0lBc09NLGNBQWMsRUFBQTtBQXRPcEI7TUF3T1EsdUJBQXVCO01BRXZCLGlDQUFpQyxFQUFBO0FBMU96QztRQTRPVSxtQkFBbUI7UUFDbkIsV0FBVyxFQUFBO0FBN09yQjtNQWlQUSx5QkFBeUIsRUFBQTtBQWpQakM7UUFtUFUsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTtBQXBQeEI7TUF3UFEsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvbmVlZC1wb2V0cnkvbmVlZC1wb2V0cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubGF5b3V0IHtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gIC5uZWVkLXRvcCB7XG4gICAgaGVpZ2h0OiAzMCU7IH1cbiAgICAubmVlZC10b3AgLm5lZWQtdGl0IHtcbiAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4OyB9XG4gICAgICAubmVlZC10b3AgLm5lZWQtdGl0IC50aXQtYm94IHtcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDI1cHg7IH1cbiAgICAgIC5uZWVkLXRvcCAubmVlZC10aXQgLnByb3RlY3QtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4OyB9XG4gICAgLm5lZWQtdG9wIC5uZWVkLWRldGFpbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyJTsgfVxuICAubmVlZC1ib3R0b20ge1xuICAgIGhlaWdodDogNzAlO1xuICAgIC8qIOWeguebtOWxheS4rSAqLyB9XG4gICAgLm5lZWQtYm90dG9tIC5hdXRvLXJlYXNvbnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtMjUwcHg7XG4gICAgICB3aWR0aDogMTIwMHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmxheW91dCB7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLm5lZWQtdG9wIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7IH1cbiAgICAubmVlZC10b3AgLm5lZWQtdGl0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDsgfVxuICAgICAgLm5lZWQtdG9wIC5uZWVkLXRpdCAudGl0LWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDE3cHggMCAxNnB4OyB9XG4gICAgICAubmVlZC10b3AgLm5lZWQtdGl0IC5pY29uLXdyYXAge1xuICAgICAgICBib3R0b206IC0yNHB4OyB9XG4gICAgICAgIC5uZWVkLXRvcCAubmVlZC10aXQgLmljb24td3JhcCAucHJvdGVjdC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4OyB9XG4gICAgLm5lZWQtdG9wIC5uZWVkLWRldGFpbCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogNXB4IDIwcHg7IH1cbiAgLm5lZWQtYm90dG9tIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNTBweCAxNXB4IDIwcHggMTVweDsgfVxuICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3JTsgfSB9XG5cbi5uZWVkLXRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDc1KTsgfVxuICAubmVlZC10b3AgLm5lZWQtdGl0IHtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzI3MjcyNztcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5uZWVkLXRvcCAubmVlZC10aXQgLnRpdC1ib3gge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAjZTVlNWU1IHNvbGlkO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmVlZC10b3AgLm5lZWQtdGl0IC50aXQtYm94IC5pY29uLXdyYXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTIxcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7IH1cbiAgICAgICAgLm5lZWQtdG9wIC5uZWVkLXRpdCAudGl0LWJveCAuaWNvbi13cmFwIC5wcm90ZWN0LWljb24ge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDYxYWU7IH1cbiAgLm5lZWQtdG9wIC5uZWVkLWRldGFpbCB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMyNzI3Mjc7IH1cblxuLm5lZWQtYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmVlZF9iZy5wbmdcIikgcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIOeureWktCAqL1xuICAvKiBuZWVkLXJlYXNvbnMg5pyA5aSW5bGC5a655ZmoICovXG4gIC8qIOS4jeWQjOminOiJsiAqLyB9XG4gIC5uZWVkLWJvdHRvbTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgIGJvcmRlci13aWR0aDogMjVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDsgfVxuICAubmVlZC1ib3R0b206YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGJkYmRiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50OyB9XG4gIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogcmVhc29ucy13cmFwICovIH1cbiAgICAubmVlZC1ib3R0b20gLm5lZWQtcmVhc29ucyAucmVhc29ucy13cmFwIHtcbiAgICAgIHBhZGRpbmc6IDQ1cHggMTBweCAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmM2YzZjM7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC00cHggMCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAtNHB4IDAgMDtcbiAgICAgIC8qIHJlYXNvbnMtYnRuICovIH1cbiAgICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIC5yZWFzb25zLXdyYXA6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcDpob3ZlcjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkO1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLThweDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1pY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XG4gICAgICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgICB3aWR0aDogMTA4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDhweDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cbiAgICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtdGl0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1kZXQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1idG4ge1xuICAgICAgICB3aWR0aDogMTE1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMTUsIDE1LCAwLjA1KTtcbiAgICAgICAgY29sb3I6IHJnYmEoMTUsIDE1LCAxNSwgMC4zNSk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7IH1cbiAgICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlOyB9XG4gICAgICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtYnRuIC5idG4tYXJyb3dzIHtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlOyB9XG4gICAgICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtYnRuOmhvdmVyIC5idG4tYXJyb3dzIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRleHQtaW5kZW50OiA3cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlOyB9XG4gIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjEgLnJlYXNvbnMtd3JhcCB7XG4gICAgY29sb3I6ICNlNDUzNTM7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IxIC5yZWFzb25zLXdyYXA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMSAucmVhc29ucy13cmFwOmhvdmVyIC5yZWFzb25zLWljb24gaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNDUzNTM7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMSAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTM1MzsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMSAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24gaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjZTQ1MzUzOyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMSAucmVhc29ucy13cmFwIC5yZWFzb25zLXRpdCB7XG4gICAgICBjb2xvcjogI2U0NTM1MzsgfVxuICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IyIC5yZWFzb25zLXdyYXAge1xuICAgIGNvbG9yOiAjOTU1ZTg5OyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMiAucmVhc29ucy13cmFwOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7IH1cbiAgICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjIgLnJlYXNvbnMtd3JhcDpob3ZlciAucmVhc29ucy1pY29uIGkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTU1ZTg5O1xuICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjIgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1pY29uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTVlODk7IH1cbiAgICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjIgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1pY29uIGkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzk1NWU4OTsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjIgLnJlYXNvbnMtd3JhcCAucmVhc29ucy10aXQge1xuICAgICAgY29sb3I6ICM5NTVlODk7IH1cbiAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMyAucmVhc29ucy13cmFwIHtcbiAgICBjb2xvcjogIzJmYTZjNDsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjMgLnJlYXNvbnMtd3JhcDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwOyB9XG4gICAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IzIC5yZWFzb25zLXdyYXA6aG92ZXIgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzJmYTZjNDtcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IzIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmZhNmM0OyB9XG4gICAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IzIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMyZmE2YzQ7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IzIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtdGl0IHtcbiAgICAgIGNvbG9yOiAjMmZhNmM0OyB9XG4gIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjQgLnJlYXNvbnMtd3JhcCB7XG4gICAgY29sb3I6ICNmNThiM2Y7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3I0IC5yZWFzb25zLXdyYXA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yNCAucmVhc29ucy13cmFwOmhvdmVyIC5yZWFzb25zLWljb24gaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNThiM2Y7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yNCAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGIzZjsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yNCAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24gaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjZjU4YjNmOyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yNCAucmVhc29ucy13cmFwIC5yZWFzb25zLXRpdCB7XG4gICAgICBjb2xvcjogI2Y1OGIzZjsgfVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLmxheW91dCB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5uZWVkLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC5uZWVkLXRpdCB7XHJcbiAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgLnRpdC1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMCAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm90ZWN0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZWVkLWRldGFpbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZWVkLWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC8qIOWeguebtOWxheS4rSAqL1xyXG4gICAgLmF1dG8tcmVhc29ucyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yNTBweDtcclxuICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLmxheW91dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5lZWQtdG9wIHtcclxuICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAubmVlZC10aXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAudGl0LWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTdweCAwIDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmljb24td3JhcCB7XHJcbiAgICAgICAgYm90dG9tOiAtMjRweDtcclxuICAgICAgICAucHJvdGVjdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZWVkLWRldGFpbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZWVkLWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHggMTVweCAyMHB4IDE1cHg7XHJcbiAgICAubmVlZC1yZWFzb25zIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5lZWQtdG9wIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBwYWRkaW5nLXRvcDogNThweDtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbiAgLm5lZWQtdGl0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLnRpdC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAjZTVlNWU1IHNvbGlkO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5pY29uLXdyYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMjFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5wcm90ZWN0LWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDYxYWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZWVkLWRldGFpbCB7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuICB9XHJcbn1cclxuXHJcbi5uZWVkLWJvdHRvbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZWVkX2JnLnBuZ1wiKSByZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIOeureWktCAqL1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIGJvcmRlci13aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYmRiZGIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAubmVlZC1yZWFzb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLnJlYXNvbnMtd3JhcCB7XHJcbiAgICAgIHBhZGRpbmc6IDQ1cHggMTBweCAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmM2YzZjM7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC00cHggMCAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwIC00cHggMCAwO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLXRpdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLWRldCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtYnRuIHtcclxuICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMTUsIDE1LCAwLjA1KTtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNSwgMTUsIDE1LCAwLjM1KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWFycm93cyB7XHJcbiAgICAgICAgICB0ZXh0LWluZGVudDogMHB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciAuYnRuLWFycm93cyB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0ZXh0LWluZGVudDogN3B4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiByZWFzb25zLWJ0biAqL1xyXG4gICAgfVxyXG4gICAgLyogcmVhc29ucy13cmFwICovXHJcbiAgfVxyXG4gIC8qIG5lZWQtcmVhc29ucyDmnIDlpJblsYLlrrnlmaggKi9cclxuXHJcbiAgLyog5LiN5ZCM6aKc6ImyICovXHJcbiAgLnJlYXNvbnMtY29sb3IxIHtcclxuICAgIC5yZWFzb25zLXdyYXAge1xyXG4gICAgICBjb2xvcjogI2U0NTM1MztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xyXG4gICAgICAgIC5yZWFzb25zLWljb24gaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTQ1MzUzO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDUzNTM7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNlNDUzNTM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLXRpdCB7XHJcbiAgICAgICAgY29sb3I6ICNlNDUzNTM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlYXNvbnMtY29sb3IyIHtcclxuICAgIC5yZWFzb25zLXdyYXAge1xyXG4gICAgICBjb2xvcjogIzk1NWU4OTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xyXG4gICAgICAgIC5yZWFzb25zLWljb24gaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTU1ZTg5O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NTVlODk7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICM5NTVlODk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLXRpdCB7XHJcbiAgICAgICAgY29sb3I6ICM5NTVlODk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlYXNvbnMtY29sb3IzIHtcclxuICAgIC5yZWFzb25zLXdyYXAge1xyXG4gICAgICBjb2xvcjogIzJmYTZjNDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xyXG4gICAgICAgIC5yZWFzb25zLWljb24gaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmZhNmM0O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZmE2YzQ7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICMyZmE2YzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLXRpdCB7XHJcbiAgICAgICAgY29sb3I6ICMyZmE2YzQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlYXNvbnMtY29sb3I0IHtcclxuICAgIC5yZWFzb25zLXdyYXAge1xyXG4gICAgICBjb2xvcjogI2Y1OGIzZjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xyXG4gICAgICAgIC5yZWFzb25zLWljb24gaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjU4YjNmO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThiM2Y7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNmNThiM2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWFzb25zLXRpdCB7XHJcbiAgICAgICAgY29sb3I6ICNmNThiM2Y7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/home-content/need-poetry/need-poetry.component.ts ***!
  \******************************************************************************/
/*! exports provided: NeedPoetryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedPoetryComponent", function() { return NeedPoetryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/animations/fadeInUp */ "./src/app/shared/animations/fadeInUp.ts");



var NeedPoetryComponent = /** @class */ (function () {
    function NeedPoetryComponent() {
        this.startAnimationTit = false;
        this.startAnimationDet = false;
    }
    NeedPoetryComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.whitchSatrt === 1) {
            this.startAnimationTit = true;
            setTimeout(function () {
                _this.startAnimationDet = true;
            }, 100);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NeedPoetryComponent.prototype, "whitchSatrt", void 0);
    NeedPoetryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'need-poetry',
            template: __webpack_require__(/*! ./need-poetry.component.html */ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.html"),
            animations: [
                _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__["fadeInUp"]
            ],
            styles: [__webpack_require__(/*! ./need-poetry.component.scss */ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.scss")]
        })
    ], NeedPoetryComponent);
    return NeedPoetryComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<poetry-partner [partnerStart]=\"partnerStart\"></poetry-partner>\r\n<div class='footer'> \r\n    <poetry-footer></poetry-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .footer {\n    position: absolute;\n    bottom: 0; } }\n\n@media screen and (max-width: 767px) {\n  .footer {\n    position: relative; } }\n\n.footer {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcGFydG5lci1hbmQtZm9vdGVyL0Q6XFxhbmd1bGFyLXNjaG9vbFxccG9ldHJpZXMvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLWNvbnRlbnRcXHBhcnRuZXItYW5kLWZvb3RlclxccGFydG5lci1hbmQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUyxFQUFBLEVBQ1o7O0FBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCOztBQUdMO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcGFydG5lci1hbmQtZm9vdGVyL3BhcnRuZXItYW5kLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PartnerAndFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerAndFooterComponent", function() { return PartnerAndFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnerAndFooterComponent = /** @class */ (function () {
    function PartnerAndFooterComponent() {
        this.partnerStart = false;
    }
    PartnerAndFooterComponent.prototype.ngOnChanges = function () {
        if (this.whitchSatrt === 4) {
            this.partnerStart = true;
        }
    };
    PartnerAndFooterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PartnerAndFooterComponent.prototype, "whitchSatrt", void 0);
    PartnerAndFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-partner-and-footer',
            template: __webpack_require__(/*! ./partner-and-footer.component.html */ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.html"),
            styles: [__webpack_require__(/*! ./partner-and-footer.component.scss */ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnerAndFooterComponent);
    return PartnerAndFooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='news-top'>\r\n  <div class='news-tit'>\r\n    <div class='tit-box'  *ngIf='partnerStart' [@fadeInUp]>\r\n      贡献人简介\r\n      <div class='icon-wrap'>\r\n        <div class='protect-icon'>\r\n            <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class='container' *ngIf='imgStart' [@fadeInUp]>\r\n      <ul class='img-wrap'  nz-row>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\"  >\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n       </ul>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .news-top .news-tit {\n    width: 1200px;\n    font-size: 33px;\n    margin: 0 auto;\n    margin-top: 58px; }\n  .container {\n    margin-top: 5%; } }\n\n@media screen and (max-width: 767px) {\n  .news-top .news-tit {\n    width: 100%;\n    font-size: 20px;\n    margin: 0 auto;\n    margin-top: 10px; }\n  .container {\n    padding: 40px 0; } }\n\n.news-top {\n  width: 100%;\n  padding: 1px 0; }\n\n.news-top .news-tit {\n    letter-spacing: 5px;\n    line-height: 1.1;\n    text-align: center;\n    color: #272727;\n    padding-top: 3%; }\n\n.news-top .news-tit .tit-box {\n      display: inline-block !important;\n      width: auto;\n      padding: 15px 0 25px;\n      border-bottom: 2px #E5E5E5 solid;\n      position: relative; }\n\n.news-top .news-tit .tit-box .icon-wrap {\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: -21px;\n        padding-right: 40px; }\n\n.news-top .news-tit .tit-box .icon-wrap .protect-icon {\n          width: 40px;\n          height: 30px;\n          margin-left: 50%;\n          background: #f5f5f5;\n          font-size: 19px;\n          text-align: center;\n          padding-left: 7px;\n          color: #0061ae; }\n\n.img-wrap li {\n  padding: 7px 15px;\n  text-align: center;\n  min-height: 130px;\n  vertical-align: middle;\n  border-bottom: 1px solid #e9e9e9;\n  border-right: 1px solid #e9e9e9; }\n\n.img-wrap li:nth-child(n+7) {\n  border-bottom: none; }\n\n.img-wrap li:nth-child(6n) {\n  border-right: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcGFydG5lci1hbmQtZm9vdGVyL3BhcnRuZXIvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccGFydG5lci1hbmQtZm9vdGVyXFxwYXJ0bmVyXFxwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFFUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUl4QjtJQUNJLGNBQWMsRUFBQSxFQUNqQjs7QUFHTDtFQUNJO0lBRVEsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFHeEI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBS0w7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUZsQjtJQUlRLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBUnZCO01BVVksZ0NBQStCO01BQy9CLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsZ0NBQWdDO01BQ2hDLGtCQUFrQixFQUFBOztBQWQ5QjtRQWdCZ0IsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQixFQUFBOztBQXBCbkM7VUFzQm9CLFdBQVc7VUFDWCxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7O0FBZ0JoQztFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9wYXJ0bmVyLWFuZC1mb290ZXIvcGFydG5lci9wYXJ0bmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5uZXdzLXRvcHtcclxuICAgICAgICAubmV3cy10aXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAubmV3cy10b3B7XHJcbiAgICAgICAgLm5ld3MtdGl0e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ubmV3cy10b3B7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFweCAwO1xyXG4gICAgLm5ld3MtdGl0e1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMyNzI3Mjc7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgICAgIC50aXQtYm94e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwIDI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCAjRTVFNUU1IHNvbGlkO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5pY29uLXdyYXB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTIxcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgLnByb3RlY3QtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDYxYWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAubmV3cy1kZXRhaWx7XHJcbiAgICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgLy8gICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgLy8gICAgIGNvbG9yOiAjMjcyNzI3O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiBcclxuICAuaW1nLXdyYXAgbGl7XHJcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZTllOTtcclxuICB9XHJcbiAgLmltZy13cmFwIGxpOm50aC1jaGlsZChuKzcpIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIC5pbWctd3JhcCBsaTpudGgtY2hpbGQoNm4pIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/animations/fadeInUp */ "./src/app/shared/animations/fadeInUp.ts");



var PartnerComponent = /** @class */ (function () {
    function PartnerComponent() {
        this.imgStart = false;
    }
    PartnerComponent.prototype.ngOnChanges = function () {
        this.partnerStart ? this.beginImg() : null;
    };
    PartnerComponent.prototype.beginImg = function () {
        var _this = this;
        setTimeout(function () {
            _this.imgStart = true;
        }, 300);
    };
    PartnerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PartnerComponent.prototype, "partnerStart", void 0);
    PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-partner',
            template: __webpack_require__(/*! ./partner.component.html */ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.html"),
            animations: [
                _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__["fadeInUp"]
            ],
            styles: [__webpack_require__(/*! ./partner.component.scss */ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-col nzSm=\"24\" nzMd=\"8\" class=\"itemWrap\" #itemWrap (mouseenter)=\"mouseenter($event)\" (mouseleave)=\"mouseleave($event)\">\r\n  <img src=\"{{newItem.img}}\" alt=\"\">\r\n  <div class=\"content\" #content>\r\n    <p>\r\n      {{ newItem.tit }}\r\n    </p>\r\n    <p class='det'>\r\n      {{ newItem.det }}\r\n\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .content {\n    font-size: 24px; }\n  .det {\n    font-size: 14px; } }\n\n@media screen and (max-width: 767px) {\n  .content {\n    font-size: 14px; }\n  .det {\n    font-size: 10px; } }\n\n.container {\n  width: 1000px;\n  margin: 50px auto; }\n\n.itemWrap {\n  height: 50%;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  padding: 0; }\n\n.itemWrap img {\n    width: 100%;\n    height: 100%; }\n\n.content {\n  position: absolute;\n  z-index: 2;\n  background-color: rgba(19, 192, 223, 0.65);\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  top: -100%;\n  text-align: center;\n  color: #fff;\n  line-height: 2;\n  padding: 20px 30px; }\n\n.content .det {\n    text-align: left;\n    line-height: 1.5;\n    color: #f5f5f5; }\n\n.content.active {\n  transition: all .3s;\n  -webkit-transition: all .3s;\n  -ms-transition: all .3s;\n  -o-transition: all .3s;\n  -moz-transition: all .3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcG9ldHJ5LW5ld3MvbW92ZS1pbWcvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccG9ldHJ5LW5ld3NcXG1vdmUtaW1nXFxtb3ZlLWltZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCOztBQUdMO0VBQ0k7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBSUw7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBTmQ7SUFRUSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBRVYsMENBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFadEI7SUFjUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxtQkFBb0I7RUFDcEIsMkJBQTRCO0VBQzVCLHVCQUF5QjtFQUN6QixzQkFBd0I7RUFDeEIsd0JBQTBCO0VBQzFCLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3BvZXRyeS1uZXdzL21vdmUtaW1nL21vdmUtaW1nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuZGV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuZGV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcbi5pdGVtV3JhcCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksMTkyLDIyMywwLjY1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB0b3A6IC0xMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIC5kZXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudC5hY3RpdmUge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3MgIDtcclxuICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjNzIDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyAgO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.ts ***!
  \************************************************************************************/
/*! exports provided: MoveImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveImgComponent", function() { return MoveImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var MoveImgComponent = /** @class */ (function () {
    function MoveImgComponent(renderer2, doc) {
        this.renderer2 = renderer2;
        this.doc = doc;
        this.mousePos = {
            top: "top: -100%; left: 0",
            right: "top: 0; left: 100%",
            bottom: "top: 100%; left: 0",
            left: "top: 0; left: -100%"
        };
    }
    MoveImgComponent.prototype.mouseenter = function (e) {
        var _this = this;
        var direction = this.getDirection(e);
        // console.log("进来的方向",direction,"初始化的样式",this.mousePos[direction])
        this.renderer2.removeClass(this.content.nativeElement, "active");
        this.renderer2.setAttribute(this.content.nativeElement, "style", this.mousePos[direction]);
        setTimeout(function () {
            _this.renderer2.addClass(_this.content.nativeElement, "active");
            _this.renderer2.setAttribute(_this.content.nativeElement, "style", "left: 0;top: 0");
        }, 1);
    };
    MoveImgComponent.prototype.mouseleave = function (e) {
        var direction = this.getDirection(e);
        // console.log("离开的方向",direction,"进行的样式",this.mousePos[direction])
        this.renderer2.setAttribute(this.content.nativeElement, "style", this.mousePos[direction]);
    };
    MoveImgComponent.prototype.getDirection = function (e) {
        var dire = ["top", "right", "bottom", "left"];
        return dire[this.moveInWay(e)];
    };
    /**
    * @todo  判断移入方式
    * @param 事件属性
    * @returns number 0-3 上右下左
    */
    MoveImgComponent.prototype.moveInWay = function (e) {
        var item = this.itemWrap.nativeElement; // 获得dom节点
        // var w = item.offsetWidth;  // 获得节点的宽
        // var h = item.offsetWidth;  // 获得节点的高 因为无margin所以可以用
        var b = item.getBoundingClientRect(); // 获得元素的大小及其相对于视口的位置
        var w = b.width;
        var h = b.height;
        var t = -this.doc.querySelector("body").getBoundingClientRect().top; // 获得卷曲值
        var x = (e.pageX - b.left - w / 2) * (w > h ? h / w : 1);
        var y = (e.pageY - b.top - t - h / 2) * (h > w ? w / h : 1);
        return Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
    };
    MoveImgComponent.prototype.ngOnInit = function () {
        // this.renderer2.setStyle(this.itemWrap.nativeElement,"background","url("+ this.newItem.img +")");
        this.renderer2.setStyle(this.itemWrap.nativeElement, "background", "#0061ae");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoveImgComponent.prototype, "newItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("itemWrap"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MoveImgComponent.prototype, "itemWrap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MoveImgComponent.prototype, "content", void 0);
    MoveImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "poetry-move-img",
            template: __webpack_require__(/*! ./move-img.component.html */ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.html"),
            styles: [__webpack_require__(/*! ./move-img.component.scss */ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
    ], MoveImgComponent);
    return MoveImgComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/poetry-news.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='news-top'>\r\n  <div class='news-tit'>\r\n    <div class='tit-box' [@fadeInUp] *ngIf=\"startAnimationTit\">\r\n      新闻中心\r\n      <div class='icon-wrap'>\r\n        <div class='protect-icon'>\r\n          <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=' news-detail' [@fadeInUp] *ngIf=\"startAnimationDet\">\r\n    <p> 诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的</p>\r\n    <p> 诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的 </p>\r\n  </div>\r\n</div>\r\n\r\n<div class='container-fluid news-bottom'>\r\n  <div class=\"full-height\">\r\n    <ng-container *ngFor='let newItem of newsList'>\r\n      <poetry-move-img [newItem]=\"newItem\"></poetry-move-img>\r\n    </ng-container>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/poetry-news.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .news-top .news-tit {\n    width: 1200px;\n    font-size: 33px; }\n    .news-top .news-tit .tit-box {\n      padding: 15px 0 25px; }\n  .news-bottom {\n    width: 100%;\n    position: absolute;\n    bottom: 58px;\n    left: 0; }\n  .news-detail {\n    font-size: 16px;\n    margin-top: 2%; } }\n\n@media screen and (max-width: 767px) {\n  .news-top {\n    margin-top: 60px; }\n    .news-top .news-tit {\n      width: 100%;\n      font-size: 20px; }\n      .news-top .news-tit .tit-box {\n        padding: 17px 0 16px; }\n  .news-bottom {\n    width: 100%; }\n  .news-detail {\n    font-size: 10px;\n    padding: 20px; } }\n\n.news-top {\n  width: 100%;\n  padding: 1px 0; }\n\n.news-top .news-tit {\n    letter-spacing: 5px;\n    line-height: 1.1;\n    text-align: center;\n    color: #272727;\n    margin: 0 auto;\n    margin-top: 3%; }\n\n.news-top .news-tit .tit-box {\n      display: inline-block !important;\n      width: auto;\n      border-bottom: 2px #e5e5e5 solid;\n      position: relative; }\n\n.news-top .news-tit .tit-box .icon-wrap {\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: -21px;\n        padding-right: 40px; }\n\n.news-top .news-tit .tit-box .icon-wrap .protect-icon {\n          width: 40px;\n          height: 30px;\n          margin-left: 50%;\n          background: #f5f5f5;\n          font-size: 19px;\n          text-align: center;\n          padding-left: 7px;\n          color: #0061ae; }\n\n.news-top .news-detail {\n    line-height: 2;\n    text-align: center;\n    font-weight: 300;\n    color: #272727; }\n\n.container-fluid {\n  height: calc(100vh - 390px); }\n\n.container-fluid .full-height {\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcG9ldHJ5LW5ld3MvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccG9ldHJ5LW5ld3NcXHBvZXRyeS1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFFSSxhQUFhO0lBQ2IsZUFBZSxFQUFBO0lBSG5CO01BS00sb0JBQW9CLEVBQUE7RUFJMUI7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPLEVBQUE7RUFFVDtJQUNFLGVBQWU7SUFDZixjQUFjLEVBQUEsRUFDZjs7QUFHSDtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUE7SUFEbEI7TUFHSSxXQUFXO01BQ1gsZUFBZSxFQUFBO01BSm5CO1FBTU0sb0JBQW9CLEVBQUE7RUFJMUI7SUFDRSxXQUFXLEVBQUE7RUFFYjtJQUNFLGVBQWU7SUFDZixhQUFhLEVBQUEsRUFDZDs7QUFHSDtFQUNFLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRmhCO0lBSUksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBVGxCO01BV00sZ0NBQWdDO01BQ2hDLFdBQVc7TUFDWCxnQ0FBZ0M7TUFDaEMsa0JBQWtCLEVBQUE7O0FBZHhCO1FBZ0JRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUIsRUFBQTs7QUFwQjNCO1VBc0JVLFdBQVc7VUFDWCxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7O0FBN0J4QjtJQW1DSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRDdCO0lBR0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcG9ldHJ5LW5ld3MvcG9ldHJ5LW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAubmV3cy10b3Age1xyXG4gICAgLm5ld3MtdGl0IHtcclxuICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAudGl0LWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5ld3MtYm90dG9tIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1OHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLm5ld3MtZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLm5ld3MtdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAubmV3cy10aXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAudGl0LWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTdweCAwIDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5ld3MtYm90dG9tIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubmV3cy1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uZXdzLXRvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXB4IDA7XHJcbiAgLm5ld3MtdGl0IHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyNzI3Mjc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLnRpdC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAjZTVlNWU1IHNvbGlkO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5pY29uLXdyYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMjFweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5wcm90ZWN0LWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDYxYWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZXdzLWRldGFpbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDM5MHB4KTtcclxuICAuZnVsbC1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/poetry-news.component.ts ***!
  \******************************************************************************/
/*! exports provided: PoetryNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoetryNewsComponent", function() { return PoetryNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/animations/fadeInUp */ "./src/app/shared/animations/fadeInUp.ts");



var PoetryNewsComponent = /** @class */ (function () {
    function PoetryNewsComponent() {
        this.startAnimationTit = false;
        this.startAnimationDet = false;
        this.newsList = [
            {
                img: './assets/images/sliders/1.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/2.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/3.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/4.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/5.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/6.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            }
        ];
    }
    PoetryNewsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.whitchSatrt === 3) {
            this.startAnimationTit = true;
            setTimeout(function () {
                _this.startAnimationDet = true;
            }, 100);
        }
    };
    PoetryNewsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PoetryNewsComponent.prototype, "whitchSatrt", void 0);
    PoetryNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-news',
            template: __webpack_require__(/*! ./poetry-news.component.html */ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.html"),
            animations: [
                _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__["fadeInUp"]
            ],
            styles: [__webpack_require__(/*! ./poetry-news.component.scss */ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PoetryNewsComponent);
    return PoetryNewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='exp-wrap'>\r\n  <div class='exp-det'> \r\n      {{ companyInfo.det }}\r\n  </div>\r\n  <div class='exp-arrow'> </div>\r\n</div>\r\n\r\n<div class='company-info container-fluid'>\r\n  \r\n  <div nz-row>\r\n\r\n      <div nz-col nzSm=\"24\" nzMd=\"8\">\r\n          <div class='img-wrap' #headImg></div>\r\n      </div>\r\n\r\n      <!-- <div  nz-col nzSm=\"24\" nzMd=\"14\" class=\"exp-tit\">\r\n         {{ companyInfo.tit }}\r\n      </div> -->\r\n\r\n      <div nz-col nzSm=\"24\" nzMd=\"4\" class=\"lists-tips\">\r\n          <ul class='company-list'>\r\n              <li>\r\n                  <div (click)='changeCom(0)' [ngClass]=\"firDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n              <li>\r\n                  <div (click)='changeCom(1)' [ngClass]=\"secDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n              <li>\r\n                 <div (click)='changeCom(2)' [ngClass]=\"thiDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n              <li>\r\n                 <div (click)='changeCom(3)' [ngClass]=\"fouDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .exp-det {\n    font-size: 16px; }\n  .company-info {\n    font-size: 16px; } }\n\n@media screen and (max-width: 767px) {\n  .exp-det {\n    font-size: 13px; }\n  .company-info {\n    font-size: 12px; } }\n\n.exp-wrap {\n  border: 1px solid #dcdcdc;\n  box-shadow: 0 -4px 0 0 #656d78;\n  text-align: left;\n  text-indent: 32px;\n  padding: 14px 35px 30px  33px;\n  margin: 5px auto;\n  position: relative;\n  border-radius: 5px; }\n\n.exp-wrap .exp-det {\n    line-height: 1.8;\n    color: #595959;\n    margin-top: 5px; }\n\n.exp-wrap .exp-arrow {\n    width: 117px;\n    left: 0;\n    position: absolute;\n    height: 14px;\n    right: 0px;\n    bottom: -14px; }\n\n.exp-wrap .exp-arrow::before {\n      content: '';\n      height: 0;\n      width: 0;\n      border-style: solid;\n      border-width: 10px;\n      border-color: #fff transparent transparent transparent;\n      border-top-width: 16px;\n      border-left-width: 21px;\n      position: absolute;\n      right: 58px;\n      top: -1px;\n      left: 49px;\n      z-index: 9; }\n\n.exp-wrap .exp-arrow::after {\n      content: '';\n      height: 0;\n      width: 0;\n      border-style: solid;\n      border-width: 10px;\n      border-color: #dcdcdc transparent transparent transparent;\n      border-top-width: 17px;\n      border-left-width: 22px;\n      position: absolute;\n      right: 58px;\n      top: 0px;\n      left: 49px;\n      z-index: 8; }\n\n.company-info {\n  margin-top: 20px;\n  padding-left: 20px;\n  color: #2f2f2f;\n  line-height: 1.2; }\n\n.company-info .img-wrap {\n    width: 85px;\n    height: 85px;\n    background-size: 100% 100%;\n    border-radius: 50%; }\n\n.company-info .exp-tit {\n    margin-top: 10px;\n    padding-left: 25px; }\n\n.company-info .lists-tips {\n    padding-right: 0; }\n\n.company-info .company-list li {\n    clear: both;\n    overflow: hidden;\n    cursor: pointer; }\n\n.company-info .company-list li div {\n      width: 12px;\n      height: 12px;\n      border-radius: 6px;\n      margin-bottom: 10px;\n      float: right; }\n\n.activeDot {\n  background: #d1d1d1; }\n\n.defaultDot {\n  border: 2px solid #d1d1d1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL2hlLXNhaWQvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccHJlc2VudGF0aW9uLXVzXFxoZS1zYWlkXFxoZS1zYWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0k7SUFDSSxlQUFlLEVBQUE7RUFHbkI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUduQjtJQUNJLGVBQWUsRUFBQSxFQUNsQjs7QUFJTDtFQUNJLHlCQUF5QjtFQUV6Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFFN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFWdEI7SUFhUSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFmdkI7SUFnQ1EsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhLEVBQUE7O0FBckNyQjtNQXVDWSxXQUFXO01BQ1gsU0FBUztNQUNULFFBQVE7TUFDUixtQkFBbUI7TUFDbkIsa0JBQWtCO01BRWxCLHNEQUFzRDtNQUN0RCxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUztNQUNULFVBQVU7TUFDVixVQUFVLEVBQUE7O0FBcER0QjtNQXVEWSxXQUFXO01BQ1gsU0FBUztNQUNULFFBQVE7TUFDUixtQkFBbUI7TUFDbkIsa0JBQWtCO01BRWxCLHlEQUF5RDtNQUN6RCxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsUUFBUTtNQUNSLFVBQVU7TUFDVixVQUFVLEVBQUE7O0FBTXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBSnBCO0lBTVEsV0FBVztJQUNYLFlBQVk7SUFFWiwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUE7O0FBVjFCO0lBYVEsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBOztBQWQxQjtJQWlCUSxnQkFBZ0IsRUFBQTs7QUFqQnhCO0lBcUJZLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQXZCM0I7TUF5QmdCLFdBQVc7TUFDWCxZQUFZO01BRVosa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixZQUFZLEVBQUE7O0FBTzVCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9wcmVzZW50YXRpb24tdXMvaGUtc2FpZC9oZS1zYWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmV4cC1kZXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21wYW55LWluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmV4cC1kZXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21wYW55LWluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmV4cC13cmFwe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtNHB4IDAgMCAjNjU2ZDc4O1xyXG4gICAgYm94LXNoYWRvdzogMCAtNHB4IDAgMCAjNjU2ZDc4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtaW5kZW50OiAzMnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAzNXB4IDMwcHggIDMzcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxNnB4IDM1cHggMzBweCA3MHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAuZXhwLWRldHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAvLyAmOjpiZWZvcmV7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICdcXDIwMUMnO1xyXG4gICAgICAgIC8vICAgICBjb2xvcjogIzM3YTdjMTtcclxuICAgICAgICAvLyAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAvLyAgICAgbWFyZ2luOiAwIDdweDtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgICBsZWZ0OiAtM3B4O1xyXG4gICAgICAgIC8vICAgICB0b3A6IC0xM3B4O1xyXG4gICAgICAgIC8vICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC5leHAtYXJyb3d7XHJcbiAgICAgICAgd2lkdGg6IDExN3B4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTE0cHg7XHJcbiAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBib3JkZXItY29sb3I6ICNkY2RjZGMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDU4cHg7XHJcbiAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgbGVmdDogNDlweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1jb2xvcjogI2RjZGNkYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGNkY2RjIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMjJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNThweDtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ5cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNvbXBhbnktaW5mb3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAuaW1nLXdyYXB7XHJcbiAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9pY29uXzEucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuZXhwLXRpdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIH1cclxuICAgIC5saXN0cy10aXBze1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuY29tcGFueS1saXN0e1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICNkMWQxZDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlRG90e1xyXG4gICAgYmFja2dyb3VuZDogI2QxZDFkMTtcclxufVxyXG4uZGVmYXVsdERvdHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMWQxZDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HeSaidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeSaidComponent", function() { return HeSaidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeSaidComponent = /** @class */ (function () {
    function HeSaidComponent(renderer2) {
        this.renderer2 = renderer2;
        this.index = 0;
        this.firDot = false;
        this.secDot = false;
        this.thiDot = false;
        this.fouDot = false;
        this.companyArray = [
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            },
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            },
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            },
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            }
        ];
    }
    HeSaidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeCom(0);
        setInterval(function () { _this.addDot(); }, 4000);
    };
    HeSaidComponent.prototype.changeCom = function (index) {
        this.index = index;
        this.companyInfo = this.companyArray[index];
        this.renderer2.setStyle(this.headImg.nativeElement, 'background-image', 'url(' + this.companyInfo.img + ')');
        this.changeDot(index);
    };
    HeSaidComponent.prototype.changeDot = function (index) {
        this.resetDot();
        switch (index) {
            case 0:
                this.firDot = true;
                break;
            case 1:
                this.secDot = true;
                break;
            case 2:
                this.thiDot = true;
                break;
            case 3:
                this.fouDot = true;
                break;
        }
        // let dots = [this.firDot, this.secDot, this.thiDot, this.fouDot];
        // console.log("dots.",dots[index],this.firDot,this.secDot);
        // dots.forEach( (item, num) => {
        //   num === index ?  item = true : item = false;
        //   console.log("item",item, num)
        // })
        // console.log("this.",dots[index],this.firDot,this.secDot)
    };
    HeSaidComponent.prototype.addDot = function () {
        if (this.index >= 3) {
            this.index = 0;
            return;
        }
        else {
            this.index++;
        }
        this.changeCom(this.index);
    };
    HeSaidComponent.prototype.resetDot = function () {
        this.firDot = false;
        this.secDot = false;
        this.thiDot = false;
        this.fouDot = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headImg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeSaidComponent.prototype, "headImg", void 0);
    HeSaidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-he-said',
            template: __webpack_require__(/*! ./he-said.component.html */ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.html"),
            styles: [__webpack_require__(/*! ./he-said.component.scss */ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HeSaidComponent);
    return HeSaidComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='skill-wrap'>\r\n  <div class='skill-name'>\r\n          {{ skillMeta.name }}\r\n      <span> {{ skillMeta.percentage }} </span>\r\n  </div>\r\n  <div class='process-bar' #processBar\r\n       *ngIf='skillsBarStart' \r\n       [@autoWidth] \r\n       [ngStyle]=\"{'background-color':skillMeta.color,'width':skillMeta.percentage}\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-wrap {\n  height: 4px;\n  margin-top: 53px;\n  margin-bottom: 58px;\n  background: #f7f7f7;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset; }\n  .skill-wrap .skill-name {\n    color: #333;\n    font-size: 12px;\n    font-weight: 600;\n    position: relative;\n    z-index: 1;\n    top: -28px; }\n  .skill-wrap .skill-name span {\n      float: right;\n      color: #333; }\n  .skill-wrap .process-bar {\n    position: absolute;\n    height: 100%;\n    top: 0;\n    left: 0; }\n  .skill-wrap .process-bar:before {\n      content: '';\n      background-color: #fff;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      position: absolute;\n      top: 0;\n      right: 1px;\n      z-index: 1000; }\n  .skill-wrap .process-bar:after {\n      content: '';\n      background-color: inherit;\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      position: absolute;\n      top: -5px;\n      right: -4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL291ci1za2lsbHMvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccHJlc2VudGF0aW9uLXVzXFxvdXItc2tpbGxzXFxvdXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUVsQiw4Q0FBOEMsRUFBQTtFQVBsRDtJQVVRLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVSxFQUFBO0VBZmxCO01BaUJZLFlBQVk7TUFDWixXQUFXLEVBQUE7RUFsQnZCO0lBdUJRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU8sRUFBQTtFQTFCZjtNQTRCWSxXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sVUFBVTtNQUNWLGFBQWEsRUFBQTtFQXBDekI7TUF1Q1ksV0FBVztNQUNYLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3ByZXNlbnRhdGlvbi11cy9vdXItc2tpbGxzL291ci1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtd3JhcHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcclxuXHJcbiAgICAuc2tpbGwtbmFtZXtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IC0yOHB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9jZXNzLWJhcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICByaWdodDogLTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OurSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurSkillsComponent", function() { return OurSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_autoWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/animations/autoWidth */ "./src/app/shared/animations/autoWidth.ts");



var OurSkillsComponent = /** @class */ (function () {
    // @ViewChild('processBar') processBar: ElementRef;
    function OurSkillsComponent(renderer2) {
        this.renderer2 = renderer2;
    }
    OurSkillsComponent.prototype.ngOnInit = function () { };
    OurSkillsComponent.prototype.ngOnChanges = function () {
        // if (this.skillsBarStart) {
        //   console.log("this.skillsBarStart1111", this.skillsBarStart)
        //   this.renderer2.setProperty(this.processBar.nativeElement, "width", this.skillMeta.percentage);
        //   this.renderer2.setStyle(this.processBar.nativeElement, "background-color", this.skillMeta.color ? this.skillMeta.color : "#0061ea");
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OurSkillsComponent.prototype, "skillMeta", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OurSkillsComponent.prototype, "skillsBarStart", void 0);
    OurSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-our-skills',
            template: __webpack_require__(/*! ./our-skills.component.html */ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.html"),
            animations: [
                _shared_animations_autoWidth__WEBPACK_IMPORTED_MODULE_2__["autoWidth"]
            ],
            styles: [__webpack_require__(/*! ./our-skills.component.scss */ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], OurSkillsComponent);
    return OurSkillsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/presentation-us.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='why-sz-top'>\r\n  \r\n      <div class='why-tit'>您好，我是诗生活</div>\r\n  \r\n      <div class='why-det'>\r\n          诗意您的生活，享受您的快乐。\r\n      </div>\r\n  \r\n      <div class='middle-btn-wrap'>\r\n          <div class='more-btn'>了解更多</div>\r\n          <div class='buy-btn'> 联系我们 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  <div class='why-sz-bottom'>\r\n      <div class='container-fluid'>\r\n          <div nz-row>\r\n              <div nz-col nzSm=\"24\" nzMd=\"8\"  class=\"why-choose-wrap\">\r\n                  <div class='choosed-common-style'>\r\n                      <div class='choosed-tit'>\r\n                          <div> 为什么 </div>\r\n                          <div class='sp2'> 喜欢我们 </div>\r\n                      </div>\r\n                      <p> 我们的网站很有特色 </p>\r\n                  </div>\r\n  \r\n                  <div  *ngFor=\"let reasons of whyChooseUs\">\r\n                      <poetry-reasons (sendVal)=\"getVal($event)\" [formParentShowDet]=\"showDet\" [reasons]=\"reasons\">\r\n                      </poetry-reasons>\r\n                  </div>\r\n              </div>\r\n  \r\n              <div nz-col nzSm=\"24\" nzMd=\"8\"  class=\"why-choose-wrap\">\r\n  \r\n                  <div class='choosed-common-style' >\r\n                      <div class='choosed-tit'>\r\n                          <div> 我们的 </div>\r\n                          <div class='sp2'> 特别之处 </div>\r\n                      </div>\r\n                      <p> 诗词美人更美 </p>\r\n                  </div>\r\n  \r\n                  <div *ngFor=\"let skillMeta of skillMetas\">\r\n                      <poetry-our-skills [skillMeta] = \"skillMeta\" [skillsBarStart]='skillsBarStart'></poetry-our-skills>\r\n                  </div>\r\n  \r\n              </div>\r\n  \r\n              <div nz-col nzSm=\"24\" nzMd=\"8\"  class=\"why-choose-wrap\">\r\n  \r\n                  <div class='choosed-common-style'>\r\n                      <div class='choosed-tit'>\r\n                          <div> 优美的 </div>\r\n                          <div class='sp2'> 诗词案例 </div>\r\n                      </div>\r\n                      <p> 诗词案例诗词案例 </p>\r\n                  </div>\r\n  \r\n                  <poetry-he-said></poetry-he-said>\r\n  \r\n              </div>\r\n  \r\n          </div>\r\n  \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/presentation-us.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (min-width: 768px) {\n  .why-sz-top {\n    height: 30%;\n    padding-top: 3%; }\n    .why-sz-top .why-tit {\n      font-size: 33px; }\n    .why-sz-top .why-det {\n      font-size: 15px; }\n    .why-sz-top .why-tit,\n    .why-sz-top .why-det {\n      width: 1200px;\n      padding: 0 15px;\n      margin-left: auto;\n      margin-right: auto; }\n  .why-sz-bottom {\n    width: 1200px;\n    margin: 0 auto;\n    padding-top: 30px;\n    height: 70%; }\n  .choosed-common-style .choosed-tit {\n    font-size: 24px; }\n    .choosed-common-style .choosed-tit .sp2 {\n      font-size: 29px; }\n  .choosed-common-style p {\n    font-size: 14px; } }\n@media screen and (max-width: 767px) {\n  .why-sz-top {\n    padding: 30px 20px; }\n    .why-sz-top .why-tit {\n      font-size: 20px; }\n    .why-sz-top .why-det {\n      font-size: 12px;\n      line-height: 1.6; }\n  .why-sz-bottom {\n    width: 100%;\n    padding: 0 10px; }\n  .choosed-common-style {\n    margin-top: 30px; }\n    .choosed-common-style .choosed-tit {\n      font-size: 16px; }\n      .choosed-common-style .choosed-tit .sp2 {\n        font-size: 18px; }\n    .choosed-common-style p {\n      font-size: 12px; } }\n.why-sz-top {\n  width: 100%;\n  background-image: url('presentatin_us.jpg');\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  text-align: center; }\n.why-sz-top .why-tit {\n    line-height: 1.1;\n    font-weight: 300;\n    color: #fff; }\n.why-sz-top .why-det {\n    color: rgba(255, 255, 255, 0.9);\n    margin-top: 30px;\n    margin-bottom: 30px;\n    line-height: 1.6;\n    font-weight: 300;\n    letter-spacing: 0.2px; }\n.why-sz-top .middle-btn-wrap {\n    margin: 0 auto;\n    width: 300px;\n    height: 35px; }\n.why-sz-top .middle-btn-wrap .more-btn,\n    .why-sz-top .middle-btn-wrap .buy-btn {\n      width: 115px;\n      height: 35px;\n      font-size: 14px;\n      border-radius: 5px;\n      color: #fff;\n      letter-spacing: 1px;\n      border-bottom: 3px solid rgba(0, 0, 0, 0.2);\n      display: inline-block;\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      transition: all .75s ease;\n      -moz-transition: all .75s ease;\n      -webkit-transition: all .75s ease;\n      -o-transition: all .75s ease; }\n.why-sz-top .middle-btn-wrap .more-btn {\n      border: 2px #fff solid;\n      margin-right: 10px;\n      line-height: 32px;\n      transition: color 0.28s ease; }\n.why-sz-top .middle-btn-wrap .more-btn:hover {\n        background: #fff;\n        color: #000;\n        transition: color 0.28s ease; }\n.why-sz-top .middle-btn-wrap .buy-btn {\n      line-height: 35px;\n      text-indent: 15px;\n      background: #f98805; }\n.why-sz-top .middle-btn-wrap .buy-btn:hover {\n        background: #0061ae;\n        color: #fff;\n        text-indent: 10px;\n        transition: all .75s ease;\n        -moz-transition: all .75s ease;\n        -webkit-transition: all .75s ease;\n        -o-transition: all .75s ease; }\n.why-sz-top .middle-btn-wrap .buy-btn .btn-arrows {\n        text-indent: 0px;\n        opacity: 0;\n        transition: all .75s ease;\n        -moz-transition: all .75s ease;\n        -webkit-transition: all .75s ease;\n        -o-transition: all .75s ease; }\n.why-sz-top .middle-btn-wrap .buy-btn:hover .btn-arrows {\n        color: #fff;\n        opacity: 1;\n        text-indent: 7px;\n        transition: all .75s ease;\n        -moz-transition: all .75s ease;\n        -webkit-transition: all .75s ease;\n        -o-transition: all .75s ease; }\n.choosed-common-style {\n  margin-bottom: 30px;\n  padding: 0 3px; }\n.choosed-common-style .choosed-tit {\n    line-height: 1.5;\n    color: #de4217; }\n.choosed-common-style .choosed-tit:after {\n      content: \"\";\n      margin: 6px 0 15px;\n      width: 69px;\n      height: 0;\n      display: block;\n      position: relative;\n      border-bottom: 4px solid; }\n.choosed-common-style .choosed-tit .sp2 {\n      font-weight: 800;\n      color: #363636;\n      letter-spacing: -1.5px; }\n.choosed-common-style p {\n    line-height: 1;\n    margin-top: -5px;\n    font-weight: 400;\n    color: #707070;\n    letter-spacing: -0.4px;\n    font-family: 'Montserrat','Roboto', Helvetica, Arial, sans-serif; }\n/* 为什么选择我们 */\n.why-choose-wrap {\n  padding-left: 40px;\n  padding-right: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3ByZXNlbnRhdGlvbi11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL0Q6XFxhbmd1bGFyLXNjaG9vbFxccG9ldHJpZXMvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLWNvbnRlbnRcXHByZXNlbnRhdGlvbi11c1xccHJlc2VudGF0aW9uLXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJO0lBQ0ksV0FBVztJQUNYLGVBQWUsRUFBQTtJQUZuQjtNQUtPLGVBQWUsRUFBQTtJQUx0QjtNQVFPLGVBQWUsRUFBQTtJQVJ0Qjs7TUFZUSxhQUFhO01BQ2IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQUsxQjtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtFQUVmO0lBRVEsZUFBZSxFQUFBO0lBRnZCO01BSVksZUFBZSxFQUFBO0VBSjNCO0lBUVEsZUFBZSxFQUFBLEVBQ2xCO0FBS1Q7RUFDSTtJQUNJLGtCQUFrQixFQUFBO0lBRHRCO01BR1EsZUFBZSxFQUFBO0lBSHZCO01BTVEsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBSXpCO0lBQ0ssV0FBVztJQUNYLGVBQWUsRUFBQTtFQUduQjtJQUNJLGdCQUFnQixFQUFBO0lBRHBCO01BR1EsZUFBZSxFQUFBO01BSHZCO1FBS1ksZUFBZSxFQUFBO0lBTDNCO01BU1EsZUFBZSxFQUFBLEVBQ2xCO0FBSVQ7RUFDSSxXQUFXO0VBQ1gsMkNBQXdFO0VBQ3hFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7QUFMdEI7SUFPUSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtBQVRuQjtJQVlRLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUE7QUFqQjdCO0lBcUJRLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWSxFQUFBO0FBdkJwQjs7TUEwQlksWUFBWTtNQUNaLFlBQVk7TUFDWixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsMkNBQXVDO01BQ3ZDLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YseUJBQWlCO1NBQWpCLHNCQUFpQjtVQUFqQixxQkFBaUI7Y0FBakIsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6Qiw4QkFBOEI7TUFDOUIsaUNBQWtDO01BQ2xDLDRCQUE2QixFQUFBO0FBdkN6QztNQTBDWSxzQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUlqQiw0QkFBNEIsRUFBQTtBQWhEeEM7UUFrRGdCLGdCQUFnQjtRQUNoQixXQUFVO1FBSVYsNEJBQTRCLEVBQUE7QUF2RDVDO01BMkRZLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUE7QUE3RC9CO1FBK0RnQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsOEJBQThCO1FBQzlCLGlDQUFrQztRQUNsQyw0QkFBNkIsRUFBQTtBQXJFN0M7UUF3RWdCLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLDhCQUE4QjtRQUM5QixpQ0FBa0M7UUFDbEMsNEJBQTZCLEVBQUE7QUE3RTdDO1FBZ0ZnQixXQUFXO1FBQ1gsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsOEJBQThCO1FBQzlCLGlDQUFrQztRQUNsQyw0QkFBNkIsRUFBQTtBQVU3QztFQUNJLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7QUFGbEI7SUFJUSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0FBTHRCO01BT1ksV0FBVztNQUNYLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUztNQUNULGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsd0JBQXdCLEVBQUE7QUFicEM7TUFnQlksZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxzQkFBc0IsRUFBQTtBQWxCbEM7SUFzQlEsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnRUFBZ0UsRUFBQTtBQUt4RSxZQUFBO0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9wcmVzZW50YXRpb24tdXMvcHJlc2VudGF0aW9uLXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLndoeS1zei10b3Age1xuICAgIGhlaWdodDogMzAlO1xuICAgIHBhZGRpbmctdG9wOiAzJTsgfVxuICAgIC53aHktc3otdG9wIC53aHktdGl0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzNweDsgfVxuICAgIC53aHktc3otdG9wIC53aHktZGV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDsgfVxuICAgIC53aHktc3otdG9wIC53aHktdGl0LFxuICAgIC53aHktc3otdG9wIC53aHktZGV0IHtcbiAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuICAud2h5LXN6LWJvdHRvbSB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDcwJTsgfVxuICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IHtcbiAgICBmb250LXNpemU6IDI0cHg7IH1cbiAgICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IC5zcDIge1xuICAgICAgZm9udC1zaXplOiAyOXB4OyB9XG4gIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAud2h5LXN6LXRvcCB7XG4gICAgcGFkZGluZzogMzBweCAyMHB4OyB9XG4gICAgLndoeS1zei10b3AgLndoeS10aXQge1xuICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgLndoeS1zei10b3AgLndoeS1kZXQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjsgfVxuICAud2h5LXN6LWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAxMHB4OyB9XG4gIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDsgfVxuICAgIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSAuY2hvb3NlZC10aXQge1xuICAgICAgZm9udC1zaXplOiAxNnB4OyB9XG4gICAgICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IC5zcDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7IH1cbiAgICAuY2hvb3NlZC1jb21tb24tc3R5bGUgcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7IH0gfVxuXG4ud2h5LXN6LXRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ByZXNlbnRhdGluX3VzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAud2h5LXN6LXRvcCAud2h5LXRpdCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC53aHktc3otdG9wIC53aHktZGV0IHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4OyB9XG4gIC53aHktc3otdG9wIC5taWRkbGUtYnRuLXdyYXAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7IH1cbiAgICAud2h5LXN6LXRvcCAubWlkZGxlLWJ0bi13cmFwIC5tb3JlLWJ0bixcbiAgICAud2h5LXN6LXRvcCAubWlkZGxlLWJ0bi13cmFwIC5idXktYnRuIHtcbiAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlOyB9XG4gICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAubW9yZS1idG4ge1xuICAgICAgYm9yZGVyOiAycHggI2ZmZiBzb2xpZDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjhzIGVhc2U7IH1cbiAgICAgIC53aHktc3otdG9wIC5taWRkbGUtYnRuLXdyYXAgLm1vcmUtYnRuOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlOyB9XG4gICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAuYnV5LWJ0biB7XG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y5ODgwNTsgfVxuICAgICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAuYnV5LWJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7IH1cbiAgICAgIC53aHktc3otdG9wIC5taWRkbGUtYnRuLXdyYXAgLmJ1eS1idG4gLmJ0bi1hcnJvd3Mge1xuICAgICAgICB0ZXh0LWluZGVudDogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuICAgICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAuYnV5LWJ0bjpob3ZlciAuYnRuLWFycm93cyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0ZXh0LWluZGVudDogN3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuXG4uY2hvb3NlZC1jb21tb24tc3R5bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAwIDNweDsgfVxuICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjZGU0MjE3OyB9XG4gICAgLmNob29zZWQtY29tbW9uLXN0eWxlIC5jaG9vc2VkLXRpdDphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgbWFyZ2luOiA2cHggMCAxNXB4O1xuICAgICAgd2lkdGg6IDY5cHg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZDsgfVxuICAgIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSAuY2hvb3NlZC10aXQgLnNwMiB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICMzNjM2MzY7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTEuNXB4OyB9XG4gIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSBwIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XG5cbi8qIOS4uuS7gOS5iOmAieaLqeaIkeS7rCAqL1xuLndoeS1jaG9vc2Utd3JhcCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDsgfVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC53aHktc3otdG9wIHtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBcclxuICAgICAgICAud2h5LXRpdHtcclxuICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aHktZGV0e1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndoeS10aXQsXHJcbiAgICAgICAgLndoeS1kZXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIC53aHktc3otYm90dG9tIHtcclxuICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmNob29zZWQtY29tbW9uLXN0eWxle1xyXG4gICAgICAgIC5jaG9vc2VkLXRpdHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAuc3Aye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLndoeS1zei10b3Age1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgICAgICAud2h5LXRpdHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2h5LWRldHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAud2h5LXN6LWJvdHRvbSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaG9vc2VkLWNvbW1vbi1zdHlsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC5jaG9vc2VkLXRpdHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAuc3Aye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53aHktc3otdG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcmVzZW50YXRpbl91cy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLndoeS10aXR7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLndoeS1kZXR7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIH1cclxuXHJcbiAgICAubWlkZGxlLWJ0bi13cmFwe1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgLm1vcmUtYnRuLFxyXG4gICAgICAgIC5idXktYnRue1xyXG4gICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLDAsMCwuMik7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vcmUtYnRue1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCNmZmYgc29saWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7ICBcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIDAuMjhzIGVhc2U7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIDAuMjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV5LWJ0bntcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7ICBcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOTg4MDU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2MWFlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1hcnJvd3N7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAmOmhvdmVyIC5idG4tYXJyb3dzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcblxyXG4uY2hvb3NlZC1jb21tb24tc3R5bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICAuY2hvb3NlZC10aXR7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogI2RlNDIxNztcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwIDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2OXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzNjM2MzY7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8qIOS4uuS7gOS5iOmAieaLqeaIkeS7rCAqL1xyXG4ud2h5LWNob29zZS13cmFwe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxufSBcclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/presentation-us.component.ts ***!
  \**************************************************************************************/
/*! exports provided: presentationUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presentationUsComponent", function() { return presentationUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var presentationUsComponent = /** @class */ (function () {
    function presentationUsComponent() {
        this.skillsBarStart = false;
        this.whyChooseUs = [
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                default: 'true'
            },
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
            },
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
            },
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
            },
        ];
        this.skillMetas = [
            {
                name: '唐诗',
                percentage: '40%',
                color: '#0061ea'
            },
            {
                name: '唐诗',
                percentage: '80%',
                color: '#5D9CEC'
            },
            {
                name: '唐诗',
                percentage: '95%',
                color: '#FC6E52'
            },
            {
                name: '唐诗',
                percentage: '99%',
                color: '#5D9CEC'
            },
            {
                name: '唐诗',
                percentage: '100%',
                color: '#AC92EC'
            },
            {
                name: '唐诗',
                percentage: '50%',
                color: '#656D78'
            }
        ];
    }
    /* 传递过来的是判断为 this ，指定被点击的组件，由此可判别是哪个组件的被点击了   */
    presentationUsComponent.prototype.getVal = function (val) {
        this.showDet = val;
    };
    presentationUsComponent.prototype.ngOnChanges = function () {
        if (this.whitchSatrt === 2) {
            this.skillsBarStart = true;
        }
    };
    presentationUsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], presentationUsComponent.prototype, "whitchSatrt", void 0);
    presentationUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-presentation-us',
            template: __webpack_require__(/*! ./presentation-us.component.html */ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.html"),
            styles: [__webpack_require__(/*! ./presentation-us.component.scss */ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], presentationUsComponent);
    return presentationUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='the-tit' (click)='clickTit()' [ngClass]=\"showDet ? 'click-tit' : 'default-tit'\">\r\n  <span>{{ reasons.title }}</span>\r\n  <div class='icon-common' [ngClass]=\"showDet ? 'click-tit-icon' : 'tit-icon'\" ></div>\r\n</div>\r\n<div class='the-det' [ngClass]=\"showDet ? 'show-det' : 'hide-det' \">\r\n  {{ reasons.detail }}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.the-tit {\n  min-height: 63px;\n  position: relative;\n  padding: 19px 38px 16px 22px;\n  font-size: 15px;\n  font-weight: bold;\n  line-height: 1.5;\n  margin-top: 6px;\n  cursor: pointer; }\n.the-tit .icon-common {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    right: 10px;\n    top: 19px;\n    left: auto; }\n.the-tit .tit-icon {\n    background: url('why_show_icon.png') no-repeat 0px 0px; }\n.the-tit .click-tit-icon {\n    background: url('why_show_icon.png') no-repeat 0px -70px; }\n.the-tit:hover {\n    background-color: #f5f5f5;\n    color: #e9573f; }\n.the-det {\n  padding: 0 24px 15px;\n  border: 5px solid #bdc3c7;\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n.default-tit {\n  color: #656f78;\n  border-bottom: none;\n  background-color: #ececec; }\n.click-tit {\n  color: #e9573f;\n  background: #fff !important;\n  border: 5px solid #bdc3c7;\n  border-bottom: none; }\n.show-det {\n  display: block;\n  -webkit-animation: fadeinT .5s ease-out backwards;\n  animation: fadeinT .5s ease-out backwards; }\n.hide-det {\n  display: none;\n  -webkit-animation: fadeOutB .5s ease-out backwards;\n  animation: fadeOutB .5s ease-out backwards; }\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    -webkit-transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n@keyframes fadeinT {\n  0% {\n    -webkit-transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n/* 淡出-从上 */\n@-webkit-keyframes fadeOutB {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0); }\n  100% {\n    display: none;\n    opacity: 0;\n    -webkit-transform: translateY(-10px); } }\n@keyframes fadeOutB {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3JlYXNvbnMvcmVhc29ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3JlYXNvbnMvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccHJlc2VudGF0aW9uLXVzXFxyZWFzb25zXFxyZWFzb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlLEVBQUE7QUFSbkI7SUFVUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVUsRUFBQTtBQWZsQjtJQWtCUSxzREFBc0YsRUFBQTtBQWxCOUY7SUFxQlEsd0RBQXlGLEVBQUE7QUFyQmpHO0lBd0JRLHlCQUF5QjtJQUN6QixjQUFjLEVBQUE7QUFHdEI7RUFDSSxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7QUFJbkM7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUFvQyxFQUFBO0FBRXhDO0VBQ0ksY0FBYztFQUNkLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFFdkI7RUFDSSxjQUFjO0VBQ2QsaURBQWlEO0VBR2pELHlDQUF5QyxFQUFBO0FBRTdDO0VBQ0ksYUFBYTtFQUNiLGtEQUFrRDtFQUdsRCwwQ0FBMEMsRUFBQTtBQUU5QyxVQUFBO0FBQ0E7RUFDSTtJQUFHLG9DQUFtQyxFQUFBO0VBQ3RDO0lBQUssZ0NBQStCLEVBQUEsRUFBQTtBQVV4QztFQUNJO0lBQUcsb0NBQW1DLEVBQUE7RUFDdEM7SUFBSyxnQ0FBK0IsRUFBQSxFQUFBO0FBR3hDLFVBQUE7QUFDQTtFQUNJO0lBQUcsVUFBUztJQUFDLGdDQUErQixFQUFBO0VBQzVDO0lBQUssYUFBWTtJQUFDLFVBQVM7SUFBQyxvQ0FBbUMsRUFBQSxFQUFBO0FBVW5FO0VBQ0k7SUFBRyxVQUFTO0lBQUMsZ0NBQStCLEVBQUE7RUFDNUM7SUFBSyxVQUFTO0lBQUMsb0NBQW1DLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3ByZXNlbnRhdGlvbi11cy9yZWFzb25zL3JlYXNvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGhlLXRpdCB7XG4gIG1pbi1oZWlnaHQ6IDYzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTlweCAzOHB4IDE2cHggMjJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnRoZS10aXQgLmljb24tY29tbW9uIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTlweDtcbiAgICBsZWZ0OiBhdXRvOyB9XG4gIC50aGUtdGl0IC50aXQtaWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93aHlfc2hvd19pY29uLnBuZ1wiKSBuby1yZXBlYXQgMHB4IDBweDsgfVxuICAudGhlLXRpdCAuY2xpY2stdGl0LWljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2h5X3Nob3dfaWNvbi5wbmdcIikgbm8tcmVwZWF0IDBweCAtNzBweDsgfVxuICAudGhlLXRpdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjogI2U5NTczZjsgfVxuXG4udGhlLWRldCB7XG4gIHBhZGRpbmc6IDAgMjRweCAxNXB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjYmRjM2M3O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7IH1cblxuLmRlZmF1bHQtdGl0IHtcbiAgY29sb3I6ICM2NTZmNzg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7IH1cblxuLmNsaWNrLXRpdCB7XG4gIGNvbG9yOiAjZTk1NzNmO1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNiZGMzYzc7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLnNob3ctZGV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5UIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW5UIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IGZhZGVpblQgMC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogZmFkZWluVCAuNXMgZWFzZS1vdXQgYmFja3dhcmRzOyB9XG5cbi5oaWRlLWRldCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0QiAuNXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZU91dEIgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogZmFkZU91dEIgMC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogZmFkZU91dEIgLjVzIGVhc2Utb3V0IGJhY2t3YXJkczsgfVxuXG4vKiDmt6HlhaUt5LuO5LiKICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5ALW1zLWtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG4vKiDmt6Hlh7ot5LuO5LiKICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAxMDAlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpblQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGZhZGVpblQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZU91dEIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfSB9XG4iLCIudGhlLXRpdHtcclxuICAgIG1pbi1oZWlnaHQ6IDYzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDM4cHggMTZweCAyMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmljb24tY29tbW9ue1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAudGl0LWljb257XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93aHlfc2hvd19pY29uLnBuZ1wiKSBuby1yZXBlYXQgMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jbGljay10aXQtaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAgdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93aHlfc2hvd19pY29uLnBuZ1wiKSBuby1yZXBlYXQgMHB4IC03MHB4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgIGNvbG9yOiAjZTk1NzNmO1xyXG4gICAgfVxyXG59XHJcbi50aGUtZGV0e1xyXG4gICAgcGFkZGluZzogMCAyNHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjYmRjM2M3O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblxyXG59XHJcblxyXG4uZGVmYXVsdC10aXR7XHJcbiAgICBjb2xvcjogIzY1NmY3ODtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbn1cclxuLmNsaWNrLXRpdHtcclxuICAgIGNvbG9yOiAjZTk1NzNmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2JkYzNjNztcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLnNob3ctZGV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluVCAuNXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpblQgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246IGZhZGVpblQuNXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW5UIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbn1cclxuLmhpZGUtZGV0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0QiAuNXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVPdXRCIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlT3V0Qi41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGZhZGVPdXRCIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbn1cclxuLyog5reh5YWlLeS7juS4iiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxuICAgIDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpblR7XHJcbiAgICAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt9XHJcbiAgICAxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpblR7XHJcbiAgICAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt9XHJcbiAgICAxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxuICAgIDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuXHJcbi8qIOa3oeWHui3ku47kuIogKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRCe1xyXG4gICAgMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG4gICAgMTAwJXtkaXNwbGF5Om5vbmU7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxuICAgIDEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxufVxyXG5ALW1zLWtleWZyYW1lcyBmYWRlaW5Ue1xyXG4gICAgMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZU91dEJ7XHJcbiAgICAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbiAgICAxMDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsComponent", function() { return ReasonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReasonsComponent = /** @class */ (function () {
    function ReasonsComponent() {
        this.sendVal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDet = false;
    }
    ReasonsComponent.prototype.clickTit = function () {
        this.showDet = true;
        this.sendVal.emit(this);
    };
    ReasonsComponent.prototype.ngOnChanges = function () {
        this.formParentShowDet === this ? null : this.showDet = false;
    };
    ReasonsComponent.prototype.ngOnInit = function () {
        this.reasons.default ? this.showDet = true : null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ReasonsComponent.prototype, "sendVal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReasonsComponent.prototype, "formParentShowDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReasonsComponent.prototype, "reasons", void 0);
    ReasonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-reasons',
            template: __webpack_require__(/*! ./reasons.component.html */ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.html"),
            styles: [__webpack_require__(/*! ./reasons.component.scss */ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReasonsComponent);
    return ReasonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class='dot-change-bg'>\r\n  <li>\r\n      <span class='active-dot' #firDot (click)='changBg(0)'>1</span>\r\n  </li>\r\n  <li>\r\n      <span #secDot (click)='changBg(1)'>2</span>\r\n  </li>\r\n  <li>\r\n      <span #thiDot (click)='changBg(2)'>2</span>\r\n  </li>\r\n  <li >\r\n      <span #fouDot (click)='changBg(3)'>2</span>\r\n  </li>\r\n  \r\n</ul>"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot-change-bg {\n  position: absolute;\n  text-align: center;\n  z-index: 99; }\n  .dot-change-bg li {\n    width: 16px;\n    height: 16px;\n    border-radius: 16px;\n    margin: 0 0 0 10px;\n    display: inline-block;\n    z-index: 100; }\n  .dot-change-bg li span {\n      cursor: pointer;\n      text-indent: -9999px;\n      border-radius: 20px;\n      width: 100%;\n      height: 100%;\n      display: block;\n      border: 3px solid rgba(255, 255, 255, 0.3);\n      transition: border .5s;\n      -webkit-transition: border .5s;\n      -moz-transition: border .5s;\n      -ms-transition: border .5s; }\n  .dot-change-bg li span:hover {\n        border: 3px solid white;\n        transition: border .5s;\n        -webkit-transition: border .5s;\n        -moz-transition: border .5s;\n        -ms-transition: border .5s; }\n  .dot-change-bg li .active-dot {\n      background: #ECECEC; }\n  @media screen and (min-width: 768px) {\n  .dot-change-bg {\n    top: 95%;\n    left: 47%; } }\n  @media screen and (max-width: 767px) {\n  .dot-change-bg {\n    top: 86%;\n    left: 33%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L2NoYW5nZS1kb3QvRDpcXGFuZ3VsYXItc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxcc2xpZGVzaG93XFxjaGFuZ2UtZG90XFxjaGFuZ2UtZG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFIZjtJQUtRLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWSxFQUFBO0VBVnBCO01BWVksZUFBZTtNQUNmLG9CQUFvQjtNQUlwQixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWixjQUFjO01BQ2QsMENBQXNDO01BQ3RDLHNCQUFzQjtNQUN0Qiw4QkFBOEI7TUFDOUIsMkJBQTJCO01BQzNCLDBCQUEwQixFQUFBO0VBekJ0QztRQTJCZ0IsdUJBQXFDO1FBQ3JDLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDBCQUEwQixFQUFBO0VBL0IxQztNQW1DWSxtQkFBbUIsRUFBQTtFQU0vQjtFQUNJO0lBQ0ksUUFBUTtJQUNSLFNBQVMsRUFBQSxFQUNaO0VBR0w7RUFDSTtJQUNJLFFBQVE7SUFDUixTQUFTLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3NsaWRlc2hvdy9jaGFuZ2UtZG90L2NoYW5nZS1kb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmnIDlupXkuIvnmoTmjInpkq5cclxuLmRvdC1jaGFuZ2UtYmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGxpe1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTBweCA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cztcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlciAuNXM7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAuNXM7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAuNXM7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlciAuNXM7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyIC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlLWRvdHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRUNFQztcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5kb3QtY2hhbmdlLWJne1xyXG4gICAgICAgIHRvcDogOTUlO1xyXG4gICAgICAgIGxlZnQ6IDQ3JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5kb3QtY2hhbmdlLWJne1xyXG4gICAgICAgIHRvcDogODYlO1xyXG4gICAgICAgIGxlZnQ6IDMzJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChangeDotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDotComponent", function() { return ChangeDotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * 下面的切换轮播图小点
 */

var ChangeDotComponent = /** @class */ (function () {
    function ChangeDotComponent(renderer2) {
        this.renderer2 = renderer2;
        this.sendIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChangeDotComponent.prototype.changBg = function (temp) {
        this.changeDotStyle(temp);
        this.sendIndex.emit(temp);
    };
    ChangeDotComponent.prototype.changeDotStyle = function (temp) {
        var _this = this;
        var domArray = [this.firDot, this.secDot, this.thiDot, this.fouDot];
        domArray.forEach(function (item, index) {
            if (temp === index) {
                _this.renderer2.addClass(item.nativeElement, "active-dot");
            }
            else {
                _this.renderer2.removeClass(item.nativeElement, "active-dot");
            }
        });
    };
    ChangeDotComponent.prototype.ngOnChanges = function () {
        this.changeDotStyle(this.currentIndex);
    };
    ChangeDotComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "firDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "secDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "thiDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "fouDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ChangeDotComponent.prototype, "currentIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChangeDotComponent.prototype, "sendIndex", void 0);
    ChangeDotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'change-dot',
            template: __webpack_require__(/*! ./change-dot.component.html */ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.html"),
            styles: [__webpack_require__(/*! ./change-dot.component.scss */ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ChangeDotComponent);
    return ChangeDotComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/slideshow.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/slideshow.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='slider-container'>\r\n  <div class='fir-slider default-left' #firSlider>\r\n      <div class='fir-tit' #firTit>诗意生活，从这里开始</div>\r\n      <div class='fir-detail' #firDet>以更加饱满的状态迎接黎明</div>\r\n      <ul class='fir-btn'>\r\n          <li  class='pick-li' #firBtn>了解更多<i class=\"anticon anticon-arrow-right btn-arrows\"></i></li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class='sec-slider' #secSlider>\r\n      <div class='fir-tit' #secTit>诗意生活，从你我做起</div>\r\n      <div class='fir-detail' #secDet>感受生活的美好，有趣灵动</div>\r\n      <ul class='fir-btn' >\r\n          <li class='pick-li' #secBtn>立即试用 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class='thi-slider' #thiSlider>\r\n      <div class='fir-tit' #thiTit>诗意生活，爱的伊始</div>\r\n      <div class='fir-detail' #thiDet>这里是美好的发源地，感动你我</div>\r\n      <ul class='fir-btn'>\r\n          <li class='pick-li' #thiBtn>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class='fou-slider' #fouSlider>\r\n      <div class='fir-tit' #fouTit>诗意生活，点燃你的情感</div>\r\n      <div class='fir-detail' #fouDet>感受世间的美好，拥抱未来</div>\r\n      <ul class='fir-btn'>\r\n          <li class='pick-li' #fouBtn>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <ul class='change-bg-btn'>\r\n      <li class='left-change-bg' (click)='reduce()'> </li>\r\n      <li class='right-change-bg' (click)='add()'> </li>\r\n  </ul>\r\n\r\n  <span class='dowmBtn' (click)='goDown()'></span>\r\n\r\n  <change-dot (sendIndex)=\"getIndex($event)\" [currentIndex]=\"index\"></change-dot>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/slideshow.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/slideshow.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (min-width: 768px) {\n  .slider-container {\n    width: 100%;\n    height: 100%; } }\n@media screen and (max-width: 767px) {\n  .slider-container {\n    width: 100%;\n    height: 200px; }\n    .slider-container .dowmBtn {\n      display: none; }\n    .slider-container .fir-tit {\n      font-size: 20px;\n      top: 31%; }\n    .slider-container .fir-detail {\n      font-size: 12px;\n      top: 49%; }\n    .slider-container .fir-btn {\n      top: 64%; }\n      .slider-container .fir-btn li {\n        width: 80px;\n        height: 25px;\n        font-size: 10px;\n        text-indent: 0;\n        line-height: 25px;\n        text-align: center; }\n        .slider-container .fir-btn li i {\n          display: none; }\n    .slider-container .change-bg-btn .left-change-bg {\n      left: 3%; }\n    .slider-container .change-bg-btn .right-change-bg {\n      right: 3%; } }\n.slider-container {\n  position: relative;\n  overflow: hidden;\n  /* 轮播图的进来和离开 开始 */\n  /* 轮播图的进来和离开 结束 */\n  /* 左右两个切换按钮 开始*/\n  /* 左右两个切换按钮 结束*/ }\n.slider-container > div {\n    color: #fff;\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background-size: 100% 100%;\n    z-index: 1; }\n.slider-container .default-left {\n    left: 0; }\n.slider-container .next-in {\n    -webkit-animation: nexfIn .5s ease forwards;\n    animation: nexfIn .5s ease forwards;\n    z-index: 9; }\n.slider-container .next-leave {\n    -webkit-animation: nextLeave .5s ease forwards;\n    animation: nextLeave .5s ease forwards; }\n.slider-container .front-in {\n    -webkit-animation: frontIn .5s ease forwards;\n    animation: frontIn .5s ease forwards;\n    z-index: 9; }\n.slider-container .front-leave {\n    -webkit-animation: frontLeave .5s ease forwards;\n    animation: frontLeave .5s ease forwards; }\n.slider-container:hover .change-bg-btn li {\n    opacity: 0.7; }\n.slider-container:hover .change-bg-btn li:hover {\n      opacity: 1; }\n.slider-container .change-bg-btn li {\n    width: 31px;\n    height: 31px;\n    position: absolute;\n    top: 48%;\n    z-index: 99;\n    background-size: 15px 15px !important;\n    opacity: 0;\n    cursor: pointer; }\n.slider-container .left-change-bg {\n    left: 50px;\n    background: url('dot_pre.png') no-repeat; }\n.slider-container .right-change-bg {\n    right: 50px;\n    background: url('dot_next.png') no-repeat; }\n/* 向下按钮 */\n.dowmBtn {\n  background: transparent url('dot_down.png') center 9px no-repeat;\n  background-size: 14px 14px !important;\n  border: 3px solid white;\n  border-radius: 36px;\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  bottom: 200px;\n  z-index: 99;\n  display: block;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  text-align: left !important;\n  cursor: pointer; }\n/* 每个部分公共样式开始 */\n.fir-tit {\n  width: 100%;\n  font-size: 64px;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  position: absolute;\n  top: 34%;\n  opacity: 0; }\n.fir-detail {\n  width: 100%;\n  font-size: 28px;\n  line-height: 1.3em;\n  text-align: center;\n  position: absolute;\n  top: 46%;\n  opacity: 0; }\n.fir-btn {\n  width: 100%;\n  color: #fff;\n  position: absolute;\n  top: 57%; }\n.fir-btn li {\n    width: 146px;\n    height: 48px;\n    font-size: 15px;\n    letter-spacing: 3px;\n    line-height: 48px;\n    text-indent: 40px;\n    border-radius: 5px;\n    color: #fff;\n    background: #f98805;\n    margin: 0 auto;\n    border-bottom: 3px solid rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: all .75s ease;\n    -moz-transition: all .75s ease;\n    -webkit-transition: all .75s ease;\n    -o-transition: all .75s ease; }\n.fir-btn li:hover {\n      background: #0061ae;\n      text-indent: 30px;\n      transition: all .75s ease;\n      -moz-transition: all .75s ease;\n      -webkit-transition: all .75s ease;\n      -o-transition: all .75s ease; }\n.pick-li {\n  opacity: 0; }\n.pick-li .btn-arrows {\n    text-indent: 0px;\n    opacity: 0;\n    transition: all .75s ease;\n    -moz-transition: all .75s ease;\n    -webkit-transition: all .75s ease;\n    -o-transition: all .75s ease; }\n.pick-li:hover .btn-arrows {\n    opacity: 1;\n    text-indent: 7px;\n    transition: all .75s ease;\n    -moz-transition: all .75s ease;\n    -webkit-transition: all .75s ease;\n    -o-transition: all .75s ease; }\n/* 每个部分公共样式结束 */\n/* 轮播图的动画开始 */\n/* 下一个动画 进来 */\n@-webkit-keyframes nexfIn {\n  0% {\n    left: -100%; }\n  100% {\n    left: 0; } }\n@keyframes nexfIn {\n  0% {\n    left: -100%; }\n  100% {\n    left: 0; } }\n/* 下一个动画 离开 */\n@-webkit-keyframes nextLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: 100%; } }\n@keyframes nextLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: 100%; } }\n/* 上一个动画 进来 */\n@-webkit-keyframes frontIn {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0; } }\n@keyframes frontIn {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0; } }\n/* 上一个动画 离开 */\n@-webkit-keyframes frontLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n@keyframes frontLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n/* 轮播图的动画结束 */\n/* 轮播图背景 */\n.fir-slider {\n  background: url('8.jpg'); }\n.sec-slider {\n  background: url('4.jpg'); }\n.thi-slider {\n  background: url('6.jpg'); }\n.fou-slider {\n  background: url('7.jpg'); }\n/* 弹入-从下 */\n.a-bounceinB {\n  -webkit-animation: bounceinB 1s ease-in forwards;\n  animation: bounceinB 1s ease-in  forwards;\n  opacity: 1; }\n/* 淡入-从上 */\n.a-fadeinT {\n  -webkit-animation: fadeinT 1s ease-out backwards;\n  animation: fadeinT 1s ease-out backwards;\n  opacity: 1; }\n/* 淡入-从左 */\n.a-fadeinL {\n  -webkit-animation: fadeinL 1s ease-out backwards;\n  animation: fadeinL 1s ease-out backwards;\n  opacity: 1; }\n/* 翻入-X轴 */\n.a-flipinX {\n  -webkit-animation: flipinX 1s ease-out backwards;\n  animation: flipinX 1s ease-out backwards;\n  opacity: 1; }\n/* 转入-从左下 */\n.a-rotateinLB {\n  -webkit-animation: rotateinLB 1s ease-out backwards;\n  animation: rotateinLB 1s ease-out backwards;\n  opacity: 1; }\n/* 弹入-从左 */\n.a-bounceinL {\n  -webkit-animation: bounceinL 1s ease-out backwards;\n  animation: bounceinL 1s ease-out backwards;\n  opacity: 1; }\n/* 震颤 */\n.a-shake {\n  -webkit-animation: shake 1s ease;\n  animation: shake 1s ease;\n  opacity: 1; }\n/* 弹入-从下 */\n@-webkit-keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n@keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n@keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n/* 翻入-X轴 */\n@-webkit-keyframes flipinX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0);\n    opacity: 1; } }\n@keyframes flipinX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n            transform: perspective(400px) rotateX(90deg);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n            transform: perspective(400px) rotateX(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n            transform: perspective(400px) rotateX(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0);\n            transform: perspective(400px) rotateX(0);\n    opacity: 1; } }\n/* 转入-从左下 */\n@-webkit-keyframes rotateinLB {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateinLB {\n  0% {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    opacity: 1; } }\n/* 弹入-从左 */\n@-webkit-keyframes bounceinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px); }\n  80% {\n    -webkit-transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0); } }\n@keyframes bounceinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n            transform: translateX(30px); }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n/* 弹入-从下 */\n@-webkit-keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  80% {\n    -webkit-transform: translateY(0px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n@keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  80% {\n    -webkit-transform: translateY(0px); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n/* 震颤 */\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px); } }\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); } }\n/* 淡入-从左 */\n@-webkit-keyframes fadeinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0); } }\n@keyframes fadeinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L0Q6XFxhbmd1bGFyLXNjaG9vbFxccG9ldHJpZXMvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLWNvbnRlbnRcXHNsaWRlc2hvd1xcc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJO0lBQ0ksV0FBVztJQUNYLFlBQVksRUFBQSxFQUNmO0FBR0w7RUFDSTtJQUNJLFdBQVc7SUFDWCxhQUFhLEVBQUE7SUFGakI7TUFJUSxhQUFhLEVBQUE7SUFKckI7TUFPUSxlQUFlO01BQ2YsUUFBUSxFQUFBO0lBUmhCO01BV1EsZUFBZTtNQUNmLFFBQVEsRUFBQTtJQVpoQjtNQWVRLFFBQVEsRUFBQTtNQWZoQjtRQWlCWSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO1FBdEI5QjtVQXdCZ0IsYUFBYSxFQUFBO0lBeEI3QjtNQThCWSxRQUFRLEVBQUE7SUE5QnBCO01BaUNZLFNBQVMsRUFBQSxFQUNaO0FBTWI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBZ0JoQixpQkFBQTtFQThCQSxpQkFBQTtFQUVBLGVBQUE7RUF5QkEsZUFBQSxFQUFBO0FBM0VKO0lBSVEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBRTFCLFVBQVUsRUFBQTtBQVpsQjtJQWVRLE9BQU8sRUFBQTtBQWZmO0lBb0JRLDJDQUEyQztJQUczQyxtQ0FBbUM7SUFDbkMsVUFBVSxFQUFBO0FBeEJsQjtJQTRCUSw4Q0FBOEM7SUFHOUMsc0NBQXNDLEVBQUE7QUEvQjlDO0lBbUNRLDRDQUE0QztJQUc1QyxvQ0FBb0M7SUFDcEMsVUFBVSxFQUFBO0FBdkNsQjtJQTJDUSwrQ0FBK0M7SUFHL0MsdUNBQXVDLEVBQUE7QUE5Qy9DO0lBb0RRLFlBQVksRUFBQTtBQXBEcEI7TUFzRFksVUFBVSxFQUFBO0FBdER0QjtJQTBEUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YsZUFBZSxFQUFBO0FBakV2QjtJQW9FUSxVQUFVO0lBQ1Ysd0NBQTZFLEVBQUE7QUFyRXJGO0lBd0VRLFdBQVc7SUFDWCx5Q0FBOEUsRUFBQTtBQVF0RixTQUFBO0FBQ0E7RUFDSSxnRUFBcUc7RUFDckcscUNBQXFDO0VBQ3JDLHVCQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUduQixlQUFBO0FBQ0E7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUdmLHVDQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVLEVBQUE7QUFFZDtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBR2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVUsRUFBQTtBQUVkO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBO0FBSlo7SUFNUSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsMkNBQXVDO0lBQ3ZDLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBa0M7SUFDbEMsNEJBQTZCLEVBQUE7QUF0QnJDO01Bd0JZLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLDhCQUE4QjtNQUM5QixpQ0FBa0M7TUFDbEMsNEJBQTZCLEVBQUE7QUFLekM7RUFDSSxVQUFVLEVBQUE7QUFEZDtJQUdRLGdCQUFlO0lBQ2YsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWtDO0lBQ2xDLDRCQUE2QixFQUFBO0FBUnJDO0lBV1EsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlDQUFrQztJQUNsQyw0QkFBNkIsRUFBQTtBQUtyQyxlQUFBO0FBR0EsYUFBQTtBQUNBLGFBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBVyxFQUFBO0VBS2Y7SUFDSSxPQUFPLEVBQUEsRUFBQTtBQVJmO0VBQ0k7SUFDSSxXQUFXLEVBQUE7RUFLZjtJQUNJLE9BQU8sRUFBQSxFQUFBO0FBR2YsYUFBQTtBQUNBO0VBQ0k7SUFDSSxPQUFPLEVBQUE7RUFFWDtJQUNJLFVBQVUsRUFBQSxFQUFBO0FBTGxCO0VBQ0k7SUFDSSxPQUFPLEVBQUE7RUFFWDtJQUNJLFVBQVUsRUFBQSxFQUFBO0FBR2xCLGFBQUE7QUFDQTtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxPQUFPLEVBQUEsRUFBQTtBQUxmO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLE9BQU8sRUFBQSxFQUFBO0FBR2YsYUFBQTtBQUNBO0VBQ0k7SUFDSSxPQUFPLEVBQUE7RUFFWDtJQUNJLFdBQVcsRUFBQSxFQUFBO0FBTG5CO0VBQ0k7SUFDSSxPQUFPLEVBQUE7RUFFWDtJQUNJLFdBQVcsRUFBQSxFQUFBO0FBR25CLGFBQUE7QUFFQSxVQUFBO0FBQ0E7RUFDSSx3QkFBNkQsRUFBQTtBQUVqRTtFQUNJLHdCQUE2RCxFQUFBO0FBRWpFO0VBQ0ksd0JBQTZELEVBQUE7QUFFakU7RUFDSSx3QkFBNkQsRUFBQTtBQUdqRSxVQUFBO0FBQ0E7RUFDSSxnREFBZ0Q7RUFHaEQseUNBQXlDO0VBQ3pDLFVBQVUsRUFBQTtBQUVkLFVBQUE7QUFDQTtFQUNJLGdEQUFnRDtFQUdoRCx3Q0FBd0M7RUFDeEMsVUFBVSxFQUFBO0FBR2QsVUFBQTtBQUNBO0VBQ0ksZ0RBQWdEO0VBR2hELHdDQUF3QztFQUN4QyxVQUFVLEVBQUE7QUFHZCxVQUFBO0FBQ0E7RUFDSSxnREFBK0M7RUFHL0Msd0NBQXVDO0VBQ3ZDLFVBQVUsRUFBQTtBQUdkLFdBQUE7QUFDQTtFQUNJLG1EQUFrRDtFQUdsRCwyQ0FBMEM7RUFDMUMsVUFBVSxFQUFBO0FBR2QsVUFBQTtBQUNBO0VBQ0ksa0RBQWlEO0VBR2pELDBDQUF5QztFQUN6QyxVQUFVLEVBQUE7QUFHZCxPQUFBO0FBQ0E7RUFDSSxnQ0FBZ0M7RUFHaEMsd0JBQXdCO0VBQ3hCLFVBQVUsRUFBQTtBQUdkLFVBQUE7QUFDQTtFQUNJO0lBQUcsVUFBUztJQUFDLG9DQUFtQyxFQUFBO0VBQ2hEO0lBQUssVUFBUztJQUFDLGdDQUErQixFQUFBLEVBQUE7QUFVbEQ7RUFDSTtJQUFHLFVBQVM7SUFBQyxvQ0FBbUMsRUFBQTtFQUNoRDtJQUFLLFVBQVM7SUFBQyxnQ0FBK0IsRUFBQSxFQUFBO0FBSWxELFVBQUE7QUFDQTtFQUNJO0lBQUcsVUFBUztJQUFDLHFDQUFvQyxFQUFBO0VBQ2pEO0lBQUssVUFBUztJQUFDLGdDQUErQixFQUFBLEVBQUE7QUFVbEQ7RUFDSTtJQUFHLFVBQVM7SUFBQyxxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBQUE7RUFDekM7SUFBSyxVQUFTO0lBQUMsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBLEVBQUE7QUFJMUMsVUFBQTtBQUNBO0VBQ0k7SUFBRyxvREFBbUQ7SUFBQyxVQUFTLEVBQUE7RUFDaEU7SUFBSSxxREFBb0QsRUFBQTtFQUN4RDtJQUFJLG9EQUFtRCxFQUFBO0VBQ3ZEO0lBQUssZ0RBQStDO0lBQUMsVUFBUyxFQUFBLEVBQUE7QUFjbEU7RUFDSTtJQUFHLG9EQUEyQztZQUEzQyw0Q0FBMkM7SUFBQyxVQUFTLEVBQUE7RUFDeEQ7SUFBSSxxREFBNEM7WUFBNUMsNkNBQTRDLEVBQUE7RUFDaEQ7SUFBSSxvREFBMkM7WUFBM0MsNENBQTJDLEVBQUE7RUFDL0M7SUFBSyxnREFBdUM7WUFBdkMsd0NBQXVDO0lBQUMsVUFBUyxFQUFBLEVBQUE7QUFJMUQsV0FBQTtBQUNBO0VBQ0k7SUFBRyxxQ0FBb0M7SUFBQyxnQ0FBK0I7SUFBQyxVQUFTLEVBQUE7RUFDakY7SUFBSyxxQ0FBb0M7SUFBQyw0QkFBMkI7SUFBQyxVQUFTLEVBQUEsRUFBQTtBQVVuRjtFQUNJO0lBQUcscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUFDLGdDQUF1QjtZQUF2Qix3QkFBdUI7SUFBQyxVQUFTLEVBQUE7RUFDakU7SUFBSyxxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQUMsNEJBQW1CO1lBQW5CLG9CQUFtQjtJQUFDLFVBQVMsRUFBQSxFQUFBO0FBR25FLFVBQUE7QUFDQTtFQUNJO0lBQUcsVUFBUztJQUFDLHFDQUFvQyxFQUFBO0VBQ2pEO0lBQUksVUFBUztJQUFDLG1DQUFrQyxFQUFBO0VBQ2hEO0lBQUksb0NBQW1DLEVBQUE7RUFDdkM7SUFBSyxnQ0FBK0IsRUFBQSxFQUFBO0FBY3hDO0VBQ0k7SUFBRyxVQUFTO0lBQUMscUNBQTRCO1lBQTVCLDZCQUE0QixFQUFBO0VBQ3pDO0lBQUksVUFBUztJQUFDLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQTtFQUN4QztJQUFJLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFBQTtFQUMvQjtJQUFLLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQSxFQUFBO0FBR2hDLFVBQUE7QUFDQTtFQUNJO0lBQUcsVUFBUztJQUFDLG9DQUFtQyxFQUFBO0VBQ2hEO0lBQUksVUFBUztJQUFDLGtDQUFpQyxFQUFBO0VBQy9DO0lBQUksa0NBQWlDLEVBQUE7RUFDckM7SUFBSyxnQ0FBK0IsRUFBQSxFQUFBO0FBZ0J4QztFQUNJO0lBQUcsVUFBUztJQUFDLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFBQTtFQUN4QztJQUFJLFVBQVM7SUFBQyxrQ0FBaUMsRUFBQTtFQUMvQztJQUFJLGtDQUFpQyxFQUFBO0VBQ3JDO0lBQUssZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBLEVBQUE7QUFJaEMsT0FBQTtBQUNBO0VBQ0k7SUFBUSxnQ0FBK0IsRUFBQTtFQUN2QztJQUFvQixvQ0FBbUMsRUFBQTtFQUN2RDtJQUFnQixtQ0FBa0MsRUFBQSxFQUFBO0FBWXREO0VBQ0k7SUFBUSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFDL0I7SUFBb0Isb0NBQTJCO1lBQTNCLDRCQUEyQixFQUFBO0VBQy9DO0lBQWdCLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQSxFQUFBO0FBRzlDLFVBQUE7QUFDQTtFQUNJO0lBQUcsVUFBUztJQUFDLHFDQUFvQyxFQUFBO0VBQ2pEO0lBQUssVUFBUztJQUFDLGdDQUErQixFQUFBLEVBQUE7QUFVbEQ7RUFDSTtJQUFHLFVBQVM7SUFBQyxxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBQUE7RUFDekM7SUFBSyxVQUFTO0lBQUMsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNsaWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4OyB9XG4gICAgLnNsaWRlci1jb250YWluZXIgLmRvd21CdG4ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5zbGlkZXItY29udGFpbmVyIC5maXItdGl0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRvcDogMzElOyB9XG4gICAgLnNsaWRlci1jb250YWluZXIgLmZpci1kZXRhaWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdG9wOiA0OSU7IH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuZmlyLWJ0biB7XG4gICAgICB0b3A6IDY0JTsgfVxuICAgICAgLnNsaWRlci1jb250YWluZXIgLmZpci1idG4gbGkge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIC5zbGlkZXItY29udGFpbmVyIC5maXItYnRuIGxpIGkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuY2hhbmdlLWJnLWJ0biAubGVmdC1jaGFuZ2UtYmcge1xuICAgICAgbGVmdDogMyU7IH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuY2hhbmdlLWJnLWJ0biAucmlnaHQtY2hhbmdlLWJnIHtcbiAgICAgIHJpZ2h0OiAzJTsgfSB9XG5cbi5zbGlkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiDova7mkq3lm77nmoTov5vmnaXlkoznprvlvIAg5byA5aeLICovXG4gIC8qIOi9ruaSreWbvueahOi/m+adpeWSjOemu+W8gCDnu5PmnZ8gKi9cbiAgLyog5bem5Y+z5Lik5Liq5YiH5o2i5oyJ6ZKuIOW8gOWniyovXG4gIC8qIOW3puWPs+S4pOS4quWIh+aNouaMiemSriDnu5PmnZ8qLyB9XG4gIC5zbGlkZXItY29udGFpbmVyID4gZGl2IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB6LWluZGV4OiAxOyB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5kZWZhdWx0LWxlZnQge1xuICAgIGxlZnQ6IDA7IH1cbiAgLnNsaWRlci1jb250YWluZXIgLm5leHQtaW4ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBuZXhmSW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICAtbXMtYW5pbWF0aW9uOiBuZXhmSW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBuZXhmSW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgei1pbmRleDogOTsgfVxuICAuc2xpZGVyLWNvbnRhaW5lciAubmV4dC1sZWF2ZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogbmV4dExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkczsgfVxuICAuc2xpZGVyLWNvbnRhaW5lciAuZnJvbnQtaW4ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmcm9udEluIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmcm9udEluIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBmcm9udEluIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLnNsaWRlci1jb250YWluZXIgLmZyb250LWxlYXZlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZnJvbnRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZnJvbnRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICAtbXMtYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogZnJvbnRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkczsgfVxuICAuc2xpZGVyLWNvbnRhaW5lcjpob3ZlciAuY2hhbmdlLWJnLWJ0biBsaSB7XG4gICAgb3BhY2l0eTogMC43OyB9XG4gICAgLnNsaWRlci1jb250YWluZXI6aG92ZXIgLmNoYW5nZS1iZy1idG4gbGk6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTsgfVxuICAuc2xpZGVyLWNvbnRhaW5lciAuY2hhbmdlLWJnLWJ0biBsaSB7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ4JTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5sZWZ0LWNoYW5nZS1iZyB7XG4gICAgbGVmdDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvZG90X3ByZS5wbmdcIikgbm8tcmVwZWF0OyB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5yaWdodC1jaGFuZ2UtYmcge1xuICAgIHJpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy9kb3RfbmV4dC5wbmdcIikgbm8tcmVwZWF0OyB9XG5cbi8qIOWQkeS4i+aMiemSriAqL1xuLmRvd21CdG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvZG90X2Rvd24ucG5nXCIpIGNlbnRlciA5cHggbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0cHggMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwMHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyog5q+P5Liq6YOo5YiG5YWs5YWx5qC35byP5byA5aeLICovXG4uZmlyLXRpdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDY0cHg7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzQlO1xuICBvcGFjaXR5OiAwOyB9XG5cbi5maXItZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NiU7XG4gIG9wYWNpdHk6IDA7IH1cblxuLmZpci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NyU7IH1cbiAgLmZpci1idG4gbGkge1xuICAgIHdpZHRoOiAxNDZweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1pbmRlbnQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICNmOTg4MDU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7IH1cbiAgICAuZmlyLWJ0biBsaTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA2MWFlO1xuICAgICAgdGV4dC1pbmRlbnQ6IDMwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuXG4ucGljay1saSB7XG4gIG9wYWNpdHk6IDA7IH1cbiAgLnBpY2stbGkgLmJ0bi1hcnJvd3Mge1xuICAgIHRleHQtaW5kZW50OiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuICAucGljay1saTpob3ZlciAuYnRuLWFycm93cyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LWluZGVudDogN3B4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlOyB9XG5cbi8qIOavj+S4qumDqOWIhuWFrOWFseagt+W8j+e7k+adnyAqL1xuLyog6L2u5pKt5Zu+55qE5Yqo55S75byA5aeLICovXG4vKiDkuIvkuIDkuKrliqjnlLsg6L+b5p2lICovXG5Aa2V5ZnJhbWVzIG5leGZJbiB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTsgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwOyB9IH1cblxuLyog5LiL5LiA5Liq5Yqo55S7IOemu+W8gCAqL1xuQGtleWZyYW1lcyBuZXh0TGVhdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDsgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlOyB9IH1cblxuLyog5LiK5LiA5Liq5Yqo55S7IOi/m+adpSAqL1xuQGtleWZyYW1lcyBmcm9udEluIHtcbiAgMCUge1xuICAgIGxlZnQ6IDEwMCU7IH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDsgfSB9XG5cbi8qIOS4iuS4gOS4quWKqOeUuyDnprvlvIAgKi9cbkBrZXlmcmFtZXMgZnJvbnRMZWF2ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwOyB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC0xMDAlOyB9IH1cblxuLyog6L2u5pKt5Zu+55qE5Yqo55S757uT5p2fICovXG4vKiDova7mkq3lm77og4zmma8gKi9cbi5maXItc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzguanBnXCIpOyB9XG5cbi5zZWMtc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzQuanBnXCIpOyB9XG5cbi50aGktc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzYuanBnXCIpOyB9XG5cbi5mb3Utc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzcuanBnXCIpOyB9XG5cbi8qIOW8ueWFpS3ku47kuIsgKi9cbi5hLWJvdW5jZWluQiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGJvdW5jZWluQiAxcyBlYXNlLWluIGZvcndhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiAgZm9yd2FyZHM7XG4gIG9wYWNpdHk6IDE7IH1cblxuLyog5reh5YWlLeS7juS4iiAqL1xuLmEtZmFkZWluVCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpblQgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgb3BhY2l0eTogMTsgfVxuXG4vKiDmt6HlhaUt5LuO5bemICovXG4uYS1mYWRlaW5MIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IGZhZGVpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBhbmltYXRpb246IGZhZGVpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBvcGFjaXR5OiAxOyB9XG5cbi8qIOe/u+WFpS1Y6L20ICovXG4uYS1mbGlwaW5YIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZsaXBpblggMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IGZsaXBpblggMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBhbmltYXRpb246IGZsaXBpblggMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBvcGFjaXR5OiAxOyB9XG5cbi8qIOi9rOWFpS3ku47lt6bkuIsgKi9cbi5hLXJvdGF0ZWluTEIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlaW5MQiAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiByb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogcm90YXRlaW5MQiAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogcm90YXRlaW5MQiAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIG9wYWNpdHk6IDE7IH1cblxuLyog5by55YWlLeS7juW3piAqL1xuLmEtYm91bmNlaW5MIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBib3VuY2VpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiBib3VuY2VpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBhbmltYXRpb246IGJvdW5jZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIG9wYWNpdHk6IDE7IH1cblxuLyog6ZyH6aKkICovXG4uYS1zaGFrZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xuICAtbW96LWFuaW1hdGlvbjogc2hha2UgMXMgZWFzZTtcbiAgLW1zLWFuaW1hdGlvbjogc2hha2UgMXMgZWFzZTtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xuICBvcGFjaXR5OiAxOyB9XG5cbi8qIOW8ueWFpS3ku47kuIsgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VpbkIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBib3VuY2VpbkIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQGtleWZyYW1lcyBib3VuY2VpbkIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbi8qIOa3oeWFpS3ku47kuIogKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpblQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5ALW1zLWtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuLyog57+75YWlLVjovbQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwaW5YIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpOyB9XG4gIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBmbGlwaW5YIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA0MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpOyB9XG4gIDcwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTsgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGZsaXBpblgge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpOyB9XG4gIDcwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpOyB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZsaXBpblgge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTEwZGVnKTsgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi8qIOi9rOWFpS3ku47lt6bkuIsgKi9cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVpbkxCIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyByb3RhdGVpbkxCIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIHJvdGF0ZWluTEIge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZWluTEIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi8qIOW8ueWFpS3ku47lt6YgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Vpbkwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTsgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBib3VuY2Vpbkwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTsgfVxuICA4MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGJvdW5jZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTsgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTsgfVxuICA4MCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7IH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbi8qIOW8ueWFpS3ku47kuIsgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VpbkIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7IH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5ALW1zLWtleWZyYW1lcyBib3VuY2VpbkIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkBrZXlmcmFtZXMgYm91bmNlaW5CIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuLyog6ZyH6aKkICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgMjAlLCA0MCUsIDYwJSwgODAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDIwJSwgNDAlLCA2MCUsIDgwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTsgfSB9XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDIwJSwgNDAlLCA2MCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpOyB9IH1cblxuLyog5reh5YWlLeS7juW3piAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbkwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbkwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlaW5MIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5zbGlkZXItY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5zbGlkZXItY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgLmRvd21CdG57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maXItdGl0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMzElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyLWRldGFpbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IDQ5JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpci1idG57XHJcbiAgICAgICAgICAgIHRvcDogNjQlO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoYW5nZS1iZy1idG57XHJcbiAgICAgICAgICAgIC5sZWZ0LWNoYW5nZS1iZ3tcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodC1jaGFuZ2UtYmd7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlci1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgPiBkaXYge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5kZWZhdWx0LWxlZnR7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiDova7mkq3lm77nmoTov5vmnaXlkoznprvlvIAg5byA5aeLICovIFxyXG4gICAgLm5leHQtaW57XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjogbmV4ZkluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXh0LWxlYXZle1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBuZXh0TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAtbXMtYW5pbWF0aW9uOiBuZXh0TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBuZXh0TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLmZyb250LWlue1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmcm9udEluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBmcm9udEluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmcm9udEluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICB9XHJcblxyXG4gICAgLmZyb250LWxlYXZle1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZyb250TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgfVxyXG4gICAgLyog6L2u5pKt5Zu+55qE6L+b5p2l5ZKM56a75byAIOe7k+adnyAqLyBcclxuXHJcbiAgICAvKiDlt6blj7PkuKTkuKrliIfmjaLmjInpkq4g5byA5aeLKi8gXHJcbiAgICAmOmhvdmVyIC5jaGFuZ2UtYmctYnRuIGxpe1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGFuZ2UtYmctYnRuIGxpe1xyXG4gICAgICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0OCU7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5sZWZ0LWNoYW5nZS1iZ3tcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy9kb3RfcHJlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtY2hhbmdlLWJne1xyXG4gICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy9kb3RfbmV4dC5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgfVxyXG4gICAgLyog5bem5Y+z5Lik5Liq5YiH5o2i5oyJ6ZKuIOe7k+adnyovIFxyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLyog5ZCR5LiL5oyJ6ZKuICovIFxyXG4uZG93bUJ0bntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy9kb3RfZG93bi5wbmdcIikgY2VudGVyIDlweCBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0cHggMTRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwMHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiDmr4/kuKrpg6jliIblhazlhbHmoLflvI/lvIDlp4sgKi8gXHJcbi5maXItdGl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiYSgwLDAsMCwgLjIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi5maXItZGV0YWlse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgICAvLyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjYpO1xyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ2JTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmZpci1idG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NyU7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDE0NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDhweDsgIFxyXG4gICAgICAgIHRleHQtaW5kZW50OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICAgICBcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjk4ODA1O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2MWFlO1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMzBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbi5waWNrLWxpIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAuYnRuLWFycm93c3tcclxuICAgICAgICB0ZXh0LWluZGVudDowcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgIH1cclxuICAgICAmOmhvdmVyIC5idG4tYXJyb3dzIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiA3cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICB9XHJcbiAgICAgXHJcbn1cclxuXHJcbi8qIOavj+S4qumDqOWIhuWFrOWFseagt+W8j+e7k+adnyAqLyBcclxuXHJcblxyXG4vKiDova7mkq3lm77nmoTliqjnlLvlvIDlp4sgKi8gXHJcbi8qIOS4i+S4gOS4quWKqOeUuyDov5vmnaUgKi8gXHJcbkBrZXlmcmFtZXMgbmV4Zklue1xyXG4gICAgMCV7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICAvLyAyMCV7XHJcbiAgICAvLyAgICAgbGVmdDogLTgwJTtcclxuICAgIC8vIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4vKiDkuIvkuIDkuKrliqjnlLsg56a75byAICovIFxyXG5Aa2V5ZnJhbWVzIG5leHRMZWF2ZXtcclxuICAgIDAle1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuLyog5LiK5LiA5Liq5Yqo55S7IOi/m+adpSAqLyBcclxuQGtleWZyYW1lcyBmcm9udElue1xyXG4gICAgMCV7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4vKiDkuIrkuIDkuKrliqjnlLsg56a75byAICovIFxyXG5Aa2V5ZnJhbWVzIGZyb250TGVhdmV7XHJcbiAgICAwJXtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgIH1cclxufVxyXG4vKiDova7mkq3lm77nmoTliqjnlLvnu5PmnZ8gKi8gXHJcblxyXG4vKiDova7mkq3lm77og4zmma8gKi8gXHJcbi5maXItc2xpZGVye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzguanBnXCIpIDtcclxufVxyXG4uc2VjLXNsaWRlcntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy80LmpwZ1wiKSA7XHJcbn1cclxuLnRoaS1zbGlkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvNi5qcGdcIikgO1xyXG59XHJcbi5mb3Utc2xpZGVye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzcuanBnXCIpIDtcclxufVxyXG5cclxuLyog5by55YWlLeS7juS4iyAqL1xyXG4uYS1ib3VuY2VpbkJ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlaW5CIDFzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYm91bmNlaW5CIDFzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogYm91bmNlaW5CIDFzIGVhc2UtaW4gIGZvcndhcmRzO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4vKiDmt6HlhaUt5LuO5LiKICovXHJcbi5hLWZhZGVpblR7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluVCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluVCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluVCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiDmt6HlhaUt5LuO5bemICovXHJcbi5hLWZhZGVpbkx7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiDnv7vlhaUtWOi9tCAqL1xyXG4uYS1mbGlwaW5Ye1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmbGlwaW5YIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246ZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBhbmltYXRpb246ZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiDovazlhaUt5LuO5bem5LiLICovXHJcbi5hLXJvdGF0ZWluTEJ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpyb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOnJvdGF0ZWluTEIgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjpyb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjpyb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIOW8ueWFpS3ku47lt6YgKi9cclxuLmEtYm91bmNlaW5Me1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246Ym91bmNlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOmJvdW5jZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOmJvdW5jZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBhbmltYXRpb246Ym91bmNlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIOmch+mipCAqL1xyXG4uYS1zaGFrZXtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IHNoYWtlIDFzIGVhc2U7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyog5by55YWlLeS7juS4iyAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcblxyXG5cclxuLyog5reh5YWlLeS7juS4iiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpblR7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpblR7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVpblR7XHJcbiAgICAwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuXHJcblxyXG4vKiDnv7vlhaUtWOi9tCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcGluWHtcclxuICAgIDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgNDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7fVxyXG4gICAgNzAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTt9XHJcbiAgICAxMDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDApO29wYWNpdHk6MTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZsaXBpblh7XHJcbiAgICAwJXstbW96LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowO31cclxuICAgIDQwJXstbW96LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpO31cclxuICAgIDcwJXstbW96LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7fVxyXG4gICAgMTAwJXstbW96LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwKTtvcGFjaXR5OjE7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGZsaXBpblh7XHJcbiAgICAwJXstbXMtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgNDAley1tcy10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTEwZGVnKTt9XHJcbiAgICA3MCV7LW1zLXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7fVxyXG4gICAgMTAwJXstbXMtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDApO29wYWNpdHk6MTt9XHJcbn1cclxuQGtleWZyYW1lcyBmbGlwaW5Ye1xyXG4gICAgMCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgNDAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpO31cclxuICAgIDcwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDApO29wYWNpdHk6MTt9XHJcbn1cclxuXHJcblxyXG4vKiDovazlhaUt5LuO5bem5LiLICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVpbkxCe1xyXG4gICAgMCV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7b3BhY2l0eTowO31cclxuICAgIDEwMCV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTtvcGFjaXR5OjE7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyByb3RhdGVpbkxCe1xyXG4gICAgMCV7LW1vei10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7b3BhY2l0eTowO31cclxuICAgIDEwMCV7LW1vei10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwKTtvcGFjaXR5OjE7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIHJvdGF0ZWluTEJ7XHJcbiAgICAwJXstbXMtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTstbXMtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7b3BhY2l0eTowO31cclxuICAgIDEwMCV7LW1zLXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207LW1zLXRyYW5zZm9ybTpyb3RhdGUoMCk7b3BhY2l0eToxO31cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZWluTEJ7XHJcbiAgICAwJXt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO29wYWNpdHk6MDt9XHJcbiAgICAxMDAle3RyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtOnJvdGF0ZSgwKTtvcGFjaXR5OjE7fVxyXG59XHJcblxyXG4vKiDlvLnlhaUt5LuO5bemICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Vpbkx7XHJcbiAgICAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgzMHB4KTt9XHJcbiAgICA4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7fVxyXG4gICAgMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgYm91bmNlaW5Me1xyXG4gICAgMCV7b3BhY2l0eTowOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMHB4KTt9XHJcbiAgICA2MCV7b3BhY2l0eToxOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMzBweCk7fVxyXG4gICAgODAley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO31cclxuICAgIDEwMCV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgYm91bmNlaW5Me1xyXG4gICAgMCV7b3BhY2l0eTowOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDMwcHgpO31cclxuICAgIDgwJXstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO31cclxuICAgIDEwMCV7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufVxyXG5Aa2V5ZnJhbWVzIGJvdW5jZWluTHtcclxuICAgIDAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMzBweCk7fVxyXG4gICAgODAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt9XHJcbiAgICAxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufVxyXG5cclxuLyog5by55YWlLeS7juS4iyAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO31cclxuICAgIDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIC8vIDYwJXtvcGFjaXR5OjE7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMzBweCk7fVxyXG4gICAgLy8gODAley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCk7fVxyXG4gICAgNjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICAxMDAley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGJvdW5jZWluQntcclxuICAgIDAle29wYWNpdHk6MDstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO31cclxuICAgIDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgMTAwJXstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMHB4KTt9XHJcbiAgICA2MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICA4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcblxyXG5cclxuLyog6ZyH6aKkICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZXtcclxuICAgIDAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbiAgICAxMCUsMzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO31cclxuICAgIDIwJSw0MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2hha2V7XHJcbiAgICAwJSwxMDAley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG4gICAgMTAlLDMwJSw1MCUsNzAlLDkwJXstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt9XHJcbiAgICAyMCUsNDAlLDYwJSw4MCV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgxMHB4KTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgc2hha2V7XHJcbiAgICAwJSwxMDAley1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbiAgICAxMCUsMzAlLDUwJSw3MCUsOTAley1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7fVxyXG4gICAgMjAlLDQwJSw2MCUsODAley1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgxMHB4KTt9XHJcbn1cclxuQGtleWZyYW1lcyBzaGFrZXtcclxuICAgIDAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG4gICAgMTAlLDMwJSw1MCUsNzAlLDkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7fVxyXG4gICAgMjAlLDQwJSw2MCUsODAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO31cclxufVxyXG5cclxuLyog5reh5YWlLeS7juW3piAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluTHtcclxuICAgIDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbkx7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbkx7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVpbkx7XHJcbiAgICAwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/slideshow.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/slideshow.component.ts ***!
  \**************************************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent(renderer2) {
        this.renderer2 = renderer2;
        this.index = 0;
        this.animateArr = [
            "a-bounceinB", "a-fadeinT",
            "a-flipinX", "a-rotateinLB",
            "a-bounceinL", "a-fadeinL",
            "a-fadeinL", "a-fadeinL",
            "a-fadeinT", "a-fadeinL"
        ];
        this.pageTimer = {};
    }
    SlideshowComponent.prototype.add = function () {
        this.setFrontOrNextIndex(true);
        this.index >= 3 ? this.index = -1 : null;
        this.index += 1;
        this.changeBg(true);
    };
    SlideshowComponent.prototype.reduce = function () {
        this.setFrontOrNextIndex(false);
        this.index <= 0 ? this.index = 4 : null;
        this.index -= 1;
        this.changeBg(false);
    };
    /**
     * @param flag boolean 切换图片
     */
    SlideshowComponent.prototype.changeBg = function (flag) {
        var _this = this;
        this.renderer2.removeClass(this.firSlider.nativeElement, "default-left");
        this.upDateInterval();
        var allSlider = [this.firSlider, this.secSlider, this.thiSlider, this.fouSlider];
        allSlider.forEach(function (item, index) {
            _this.resetClass(item);
            _this.index == index ? flag ? _this.renderer2.addClass(item.nativeElement, "next-in")
                : _this.renderer2.addClass(item.nativeElement, "front-in")
                : null;
        });
        flag ? this.renderer2.addClass(allSlider[this.frontIndex].nativeElement, "next-leave")
            : this.renderer2.addClass(allSlider[this.nextIndex].nativeElement, "front-leave");
        this.innerAnimat(flag);
    };
    /**
     *
     * @param val  要切换到的index ,是子组件切换轮播图的按钮传过来的数据
     */
    SlideshowComponent.prototype.getIndex = function (val) {
        var flag;
        if (this.index === val) {
            return;
        }
        else if (this.index > val) {
            this.setFrontOrNextIndex(false);
            flag = false;
        }
        else {
            this.setFrontOrNextIndex(true);
            flag = true;
        }
        this.index = val;
        this.changeBg(flag);
    };
    SlideshowComponent.prototype.setAutoChange = function () {
        var _this = this;
        this.autoTimer = setInterval(function () {
            _this.add();
        }, 4000);
    };
    SlideshowComponent.prototype.clearAutoChange = function () {
        clearInterval(this.autoTimer);
    };
    SlideshowComponent.prototype.upDateInterval = function () {
        this.clearAutoChange();
        this.setAutoChange();
    };
    SlideshowComponent.prototype.setFrontOrNextIndex = function (flag) {
        flag ? this.frontIndex = this.index : this.nextIndex = this.index;
    };
    /**
     *
     * @param item element 要去除样式的元素
     */
    SlideshowComponent.prototype.resetClass = function (item) {
        var _this = this;
        var classArr = ["next-in", "next-leave", "front-in", "front-leave"];
        classArr.forEach(function (classItem) {
            _this.renderer2.removeClass(item.nativeElement, classItem);
        });
    };
    SlideshowComponent.prototype.innerAnimat = function (flag) {
        this.oldAnimate = this.newAnimate;
        this.newAnimate = this.animateArr[this.rd()];
        for (var item in this.pageTimer) {
            clearTimeout(this.pageTimer[item]);
        }
        this.cleanOrAddClass(this.index, true);
        if (flag === 'default') {
            return;
        }
        if (flag) {
            this.cleanOrAddClass(this.frontIndex, false);
        }
        else {
            this.cleanOrAddClass(this.nextIndex, false);
        }
    };
    SlideshowComponent.prototype.cleanOrAddClass = function (arrIndex, flag) {
        var _this = this;
        var domArr = [
            [this.firTit, this.firDet, this.firBtn],
            [this.secTit, this.secDet, this.secBtn],
            [this.thiTit, this.thiDet, this.thiBtn],
            [this.fouTit, this.fouDet, this.fouBtn],
        ];
        domArr[arrIndex].forEach(function (item, index) {
            if (flag) {
                // index === 0 ?   this.addAnimate(item)
                //             :   index === 1 ? setTimeout(()=>{ this.addAnimate(item) },550)
                //                             : setTimeout(()=>{ this.addAnimate(item) },900)
                switch (index) {
                    case 0:
                        _this.addAnimate(item);
                        break;
                    case 1:
                        _this.pageTimer["timer1"] = setTimeout(function () { _this.addAnimate(item); }, 550);
                        break;
                    case 2:
                        _this.pageTimer["timer2"] = setTimeout(function () { _this.addAnimate(item); }, 900);
                        break;
                    default: break;
                }
            }
            else {
                _this.removeAnimate(item);
            }
        });
    };
    SlideshowComponent.prototype.addAnimate = function (ele) {
        this.renderer2.addClass(ele.nativeElement, this.newAnimate);
    };
    SlideshowComponent.prototype.removeAnimate = function (ele) {
        this.renderer2.removeClass(ele.nativeElement, this.oldAnimate);
    };
    SlideshowComponent.prototype.rd = function () {
        return Math.floor(Math.random() * 10);
    };
    SlideshowComponent.prototype.goDown = function () {
        var ele = document.documentElement || document.body;
        var willScrTop = ele.offsetHeight - 58;
        var offY = window.pageYOffset;
        var timmer = requestAnimationFrame(function fn() {
            offY = offY + 50;
            if (willScrTop > offY) {
                window.scrollTo(0, offY);
                setTimeout(function () {
                    timmer = requestAnimationFrame(fn);
                }, 1);
            }
            else {
                window.scrollTo(0, willScrTop);
            }
        });
    };
    SlideshowComponent.prototype.ngOnInit = function () {
        this.innerAnimat("default");
        this.setAutoChange();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouBtn", void 0);
    SlideshowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'slideshow',
            template: __webpack_require__(/*! ./slideshow.component.html */ "./src/app/pages/home/home-content/slideshow/slideshow.component.html"),
            styles: [__webpack_require__(/*! ./slideshow.component.scss */ "./src/app/pages/home/home-content/slideshow/slideshow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <home-header [canchange]=\"true\"></home-header> -->\r\n<poetry-header [canchange]=\"true\"></poetry-header>\r\n<home-content></home-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//  首页添加动画、轮播图等。


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-content/home-content.component */ "./src/app/pages/home/home-content/home-content.component.ts");
/* harmony import */ var _home_content_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-content/slideshow/slideshow.component */ "./src/app/pages/home/home-content/slideshow/slideshow.component.ts");
/* harmony import */ var _home_content_slideshow_change_dot_change_dot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-content/slideshow/change-dot/change-dot.component */ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.ts");
/* harmony import */ var _home_content_need_poetry_need_poetry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-content/need-poetry/need-poetry.component */ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.ts");
/* harmony import */ var _home_content_presentation_us_presentation_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-content/presentation-us/presentation-us.component */ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.ts");
/* harmony import */ var _home_content_presentation_us_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-content/presentation-us/reasons/reasons.component */ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.ts");
/* harmony import */ var _home_content_presentation_us_our_skills_our_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-content/presentation-us/our-skills/our-skills.component */ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.ts");
/* harmony import */ var _home_content_presentation_us_he_said_he_said_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-content/presentation-us/he-said/he-said.component */ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.ts");
/* harmony import */ var _home_content_poetry_news_poetry_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-content/poetry-news/poetry-news.component */ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.ts");
/* harmony import */ var _home_content_poetry_news_move_img_move_img_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-content/poetry-news/move-img/move-img.component */ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.ts");
/* harmony import */ var _home_content_partner_and_footer_partner_and_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-content/partner-and-footer/partner-and-footer.component */ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.ts");
/* harmony import */ var _home_content_partner_and_footer_partner_partner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home-content/partner-and-footer/partner/partner.component */ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.ts");



















var HOME_COMPOENTS = [
    _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
    _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__["HomeContentComponent"],
    _home_content_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["SlideshowComponent"],
    _home_content_slideshow_change_dot_change_dot_component__WEBPACK_IMPORTED_MODULE_9__["ChangeDotComponent"],
    _home_content_need_poetry_need_poetry_component__WEBPACK_IMPORTED_MODULE_10__["NeedPoetryComponent"],
    _home_content_presentation_us_presentation_us_component__WEBPACK_IMPORTED_MODULE_11__["presentationUsComponent"],
    _home_content_presentation_us_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_12__["ReasonsComponent"],
    _home_content_presentation_us_our_skills_our_skills_component__WEBPACK_IMPORTED_MODULE_13__["OurSkillsComponent"],
    _home_content_presentation_us_he_said_he_said_component__WEBPACK_IMPORTED_MODULE_14__["HeSaidComponent"],
    _home_content_poetry_news_poetry_news_component__WEBPACK_IMPORTED_MODULE_15__["PoetryNewsComponent"],
    _home_content_poetry_news_move_img_move_img_component__WEBPACK_IMPORTED_MODULE_16__["MoveImgComponent"],
    _home_content_partner_and_footer_partner_and_footer_component__WEBPACK_IMPORTED_MODULE_17__["PartnerAndFooterComponent"],
    _home_content_partner_and_footer_partner_partner_component__WEBPACK_IMPORTED_MODULE_18__["PartnerComponent"]
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]
            ],
            declarations: HOME_COMPOENTS.slice()
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/shared/animations/autoWidth.ts":
/*!************************************************!*\
  !*** ./src/app/shared/animations/autoWidth.ts ***!
  \************************************************/
/*! exports provided: autoWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoWidth", function() { return autoWidth; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var autoWidth = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('autoWidth', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                width: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                width: '*'
            })
        ]))
    ])
]);


/***/ }),

/***/ "./src/app/shared/animations/fadeInUp.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/animations/fadeInUp.ts ***!
  \***********************************************/
/*! exports provided: fadeInUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return fadeInUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translate3d(0, 100%, 0)',
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translate3d(0, 80%, 0)',
                offset: 0.5
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'none',
                offset: 1
            }),
        ]))
    ])
]);


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map