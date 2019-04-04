
const css = `
#gbf-bookmark-lacia {
  position: fixed;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  z-index: 9999999;
  left: -65px;
  pointer-events: none;
  transition: left 0.1s, right 0.1s;
}
#gbf-bookmark-lacia:hover {
  left: 0;
}
#gbf-bookmark-lacia:hover .bookmark-item-lacia {
  box-shadow: none;
}
.bookmark-item-lacia {
  width: 20px;
  height: 24px;
  line-height: 24px;
  padding-left: 8px;
  box-sizing: border-box;
  display: block;
  position: relative;
  pointer-events: auto;
}
#gbf-bookmark-lacia:hover a.bookmark-item-lacia:nth-child(2n) {
  width: 70px;
}
a.bookmark-item-lacia:focus {
  outline: 0;
}
a.bookmark-item-lacia {
  width: 68px;
  background-color: #fff;
  text-decoration: none;
  white-space: nowrap;
  color: #000;
  font-size: 9px;
  font-family: -apple-system, -apple-system-font, "Microsoft JHengHei", HelveticaNeue, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 100;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
}
.bookmark-item-lacia>div {
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100%;
}
a.bookmark-item-lacia:hover {
  filter: brightness(0.9);
}
a.bookmark-item-lacia:active {
  filter: brightness(0.8);
  mix-blend-mode: multiply;
}
a.bookmark-item-lacia:active:before, a.bookmark-item-lacia:active:after {
  display: none;
}
.paper-shadow:before, .paper-shadow:after {
	content: '';
  position: absolute;
  z-index: 1;
	left: 0;
	box-shadow: 0 0 10px rgba(0,0,0,0.35);
	border-radius: 50%;
	width: 100%;
	height: 20px;
	display: none;
}
.paper-shadow:before {
	display: block;
	top: 0px;
	clip: rect(-40px auto 0 auto);
}
.paper-shadow:after {
	display: block;
	bottom: 0px;
	clip: rect(20px auto 40px auto);
}
#gbf-bookmark-lacia.bookmark-right {
  left: auto;
  right: -96px;
}
#gbf-bookmark-lacia.bookmark-right:hover {
  left: auto;
  right: 0;
}
#gbf-bookmark-lacia.bookmark-right .bookmark-item-lacia {
  float: right;
}
.paper-shadow.dark-shadow:before,.paper-shadow.dark-shadow:after {
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
}
#gbf-bookmark-setting {
  position: fixed;
  z-index: 9999998;
  width: 280px;
  padding-bottom: 30px;
  min-height: 290px;
  max-height: calc(100% - 200px);
  top: 60px;
  left: 20px;
  background: #fffbe1;
  font-family: -apple-system, -apple-system-font, "Microsoft JHengHei", HelveticaNeue, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 100;
  display: none;
}
#gbf-bookmark-setting.show-setting {
  display: block;
}
#gbf-bookmark-setting .s-paper {
  position: absolute;
  bottom: -2px;
  width: calc(100% - 2px);
  left: 1px;
  height: 2px;
  background: #e8e4cb;
}
.tab-bookmark-setting {
  position: absolute;
  height: 24px;
  line-height: 24px;
  background: #e8e4cb;
  top: -24px;
  left: 1px;
  padding: 0 20px;
  font-size: 10px;
  z-index: 0;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.tab-bookmark-setting:after {
  display: none;
}
.option-bookmark {
  left: 76px;
}
.option-bookmark.active-bookmark {
  left: 75px;
}
.active-bookmark {
  z-index: 2;
  background: #fffbe1;
  height: 25px;
  line-height: 25px;
  padding: 0 21px;
  left: 0px;
}
.footer-bookmark-setting {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 10px 0;
  text-align: center;
}
.footer-bookmark-setting .btn-bookmark {
  margin: 0 10px;
}
.btn-bookmark {
  padding: 4px 12px;
  font-size: 8px;
  cursor: pointer;
  display: inline-block;
  box-shadow: 0 0 1px rgba(0,0,0,0.05);
  background-color: #FFEB3B;
}
.btn-bookmark:hover {
  background-color: #fff280;
}
.btn-bookmark:active {
  background-color: #fff492;
}
.btn-bookmark.btn-add {
  padding: 2px 8px;
  color: #fff;
  background-color: #8BC34A;
}
.setting-box-bookmark {
  padding: 10px;
  display: none;
}
.setting-box-bookmark.box-active {
  display: block;
}
#bookmark-cont {
  margin: 4px -4px;
  overflow-y: auto;
  max-height: 320px;
}
.setting-box-bookmark .bookmark-tag {
  padding: 4px 12px;
  margin: 4px;
  float: left;
  font-size: 10px;
}
.setting-box-bookmark .idx-tag {
  position: absolute;
  left: 2px;
  top: 2px;
  font-size: 6px;
  padding: 0 2px;
}
.setting-box-bookmark .edit-tag, .setting-box-bookmark .delete-tag {
  position: absolute;
  height: 100%;
  font-size: 8px;
  top: 0;
  right: 0;
  background: #FF9800;
  display: none;
  justify-content: center;
  align-items: center;
  width: 20px;
  color: #fff;
  cursor: pointer;
}
.setting-box-bookmark .edit-tag:hover, .setting-box-bookmark .delete-tag:hover {
  filter: brightness(0.9);
}
.setting-box-bookmark .edit-tag {
  right: 20px;
  background: #2196F3;
}
.bookmark-tag:hover .edit-tag, .bookmark-tag:hover .delete-tag {
  display: inline-flex;
}
.paper-shadow2 {
  position: relative;
}
.paper-shadow2:before, .paper-shadow2:after {
  z-index: -1;
  position: absolute;
  content: '';
  bottom: 5px;
  width: calc(50% - 1px);
  height: 8px;
  background: rgb(0, 0, 0, 0);
  box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.38);
}
.paper-shadow2:before {
  transform: rotate(-3deg);
  left: 1px;
}
.paper-shadow2:after {
  transform: rotate(3deg);
  right: 1px;
}
#gbf-bookmark-tagmodal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  background-color: #03A9F4;
  font-size: 9px;
  padding: 0 10px;
  box-shadow: 0 0 1px 0.1px rgba(0,0,0,0.2);
  display: none;
}
#gbf-bookmark-tagmodal.bookmark-active {
  display: block;
}
#gbf-bookmark-tagmodal > div {
  margin: 10px 0;
  text-align: center;
  display: flex;
  justify-content: center;
}
#gbf-bookmark-tagmodal .btn-bookmark {
  margin: 0 10px;
  background: #fff;
}
.setting-option-bookmark {
  font-size: 9px;
  text-align: center;
}
.setting-option-bookmark>div {
  margin: 10px 0;
}
.setting-option-bookmark .btn-bookmark {
  background: #fff;
}
.setting-box-bookmark .label-setting, .setting-box-bookmark .label-tagmodal {
  background: #fff;
  height: 20px;
  line-height: 20px;
  padding: 0 8px;
  width: 40px;
  display: inline-block;
  margin-right: 10px;
}
.ipt-setting-cont, .ipt-tagmodal-cont {
  display: inline-block;
}
.setting-box-bookmark .ipt-setting-bookmark, .setting-box-bookmark .ipt-tagmodal {
  background: #fff;
  height: 20px;
  line-height: 20px;
  padding: 0 8px;
  margin: 0;
  border: 0;
  width: 112px;
  color: #666;
}
.setting-box-bookmark .ipt-setting-bookmark::placeholder, .ipt-tagmodal::placeholder {
  color: #aaa;
}
.setting-box-bookmark .ipt-setting-bookmark:focus, .ipt-tagmodal:focus {
  outline: 0;
}
`

export default css
