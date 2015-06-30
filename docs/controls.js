var yr=yr||require("yate/lib/runtime.js");(function(){var cmpNN=yr.cmpNN;var cmpSN=yr.cmpSN;var nodeset2xml=yr.nodeset2xml;var nodeset2boolean=yr.nodeset2boolean;var nodeset2attrvalue=yr.nodeset2attrvalue;var nodeset2scalar=yr.nodeset2scalar;var scalar2attrvalue=yr.scalar2attrvalue;var xml2attrvalue=yr.xml2attrvalue;var scalar2xml=yr.scalar2xml;var xml2scalar=yr.xml2scalar;var simpleScalar=yr.simpleScalar;var simpleBoolean=yr.simpleBoolean;var selectNametest=yr.selectNametest;var closeAttrs=yr.closeAttrs;var M=new yr.Module;var j0=[0,"*"];var j1=[1,0];M.t0=function t0(m,c0,i0,l0,a0){var r0="";var current=[c0];r0+=closeAttrs(a0);r0+='<h1 class="'+"page-header anchor"+'" data-hash="'+"controls"+'">';r0+="Controls";r0+="</h1>";r0+=m.a(m,0,m.s(j1,c0),"_content-ico",a0);r0+=m.a(m,0,m.s(j1,c0),"_content-link",a0);r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/buttons"+'">';r0+="Buttons";r0+="</h2>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/checkbox"+'">';r0+="Checkbox";r0+="</h2>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/radio"+'">';r0+="Radio";r0+="</h2>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/input"+'">';r0+="Input";r0+="</h2>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/popup"+'">';r0+="Popup";r0+="</h2>";r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/menu"+'">';r0+="Menu";r0+="</h2>";return r0};M.t0.j=j0;M.t0.a=0;M.t1=function t1(m,c0,i0,l0,a0){var r0="";var current=[c0];r0+=closeAttrs(a0);r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/link"+'">'+scalar2xml(yr.externals["loc"]("%Controls_link__title"))+"</h2>";r0+="<p>"+yr.externals["loc"]("%Controls_link__descr_p1")+"</p>";return r0};M.t1.j=j0;M.t1.a=0;M.t2=function t2(m,c0,i0,l0,a0){var r0="";var current=[c0];var r1=[];var a1={a:{}};r1.push("attention");r1.push("close");r1.push("check");r1.push("download");r1.push("download-white");r1.push("dropdown");r1.push("eye");r1.push("link");r1.push("link-white");r1.push("mail");r1.push("notification");r1.push("odnoklassniki");r1.push("pause");r1.push("people");r1.push("play");r1.push("print");r1.push("remove");r1.push("services");r1.push("settings");r1.push("three-dots");r1.push("trash");r1.push("trash-white");r1.push("twitter");r1.push("help");r1.push("upload");r1.push("upload-white");r1.push("vk");var v1=r1;r0+=closeAttrs(a0);r0+='<h2 class="'+"sub-header anchor"+'" data-hash="'+"controls/icons"+'">'+scalar2xml(yr.externals["loc"]("%Controls_icon__title"))+"</h2>";r0+="<p>";r0+="Тег ";r0+=m.f("f0",c0,i0,l0,a0,"<xb-ico>");r0+=" позволяет создавать элемент интерфейса в виде иконки.";r0+="</p>";r0+="<p>";r0+="Набор иконок заранее определен. Выбор нужной иконки осуществляется указанием атрибута ";r0+=m.f("f0",c0,i0,l0,a0,"type");r0+=".";r0+="</p>";r0+="<p>";r0+="Для большинства иконок закрывающийся тег не требуется, в отличии от иконки с типом ";r0+=m.f("f0",c0,i0,l0,a0,"notification");r0+=".";r0+=" Текст внутри тега либо значение атрибута ";r0+=m.f("f0",c0,i0,l0,a0,"value");r0+=" являются сообщением.";r0+="</p>";r0+="<h3>";r0+="Синтаксис";r0+="</h3>";r0+='<div class="'+"highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico type="notification"&gt;текст сообщения&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="<h3>";r0+="Атрибуты";r0+="</h3>";r0+='<table class="'+"table table-hover"+'">';r0+="<tr>";r0+='<td class="'+"text-info"+'">';r0+="active";r0+="</td>";r0+="<td>";r0+="boolean";r0+="</td>";r0+="<td>";r0+="false";r0+="</td>";r0+="<td>";r0+="Позволяет использовать иконку как управляющий элемент. При наведении на иконку появится 'лапка' и изменится цвет.";r0+="</td>";r0+="</tr>";r0+="<tr>";r0+='<td class="'+"text-info"+'">';r0+="disabled";r0+="</td>";r0+="<td>";r0+="boolean";r0+="</td>";r0+="<td>";r0+="false";r0+="</td>";r0+="<td>";r0+="Иконка станет серой и перестанет реагировать на события мыши.";r0+="</td>";r0+="</tr>";r0+="<tr>";r0+='<td class="'+"text-info"+'">';r0+="size";r0+="</td>";r0+="<td>";r0+="string";r0+="</td>";r0+="<td>";r0+=m.f("f0",c0,i0,l0,a0,"s");r0+="</td>";r0+="<td>";r0+="Размер иконки. Возможные значения: ";r0+=m.f("f0",c0,i0,l0,a0,"s");r0+=", ";r0+=m.f("f0",c0,i0,l0,a0,"m");r0+=".";r0+="</td>";r0+="</tr>";r0+="<tr>";r0+='<td class="'+"text-info"+'">';r0+="value";r0+="</td>";r0+="<td>";r0+="string";r0+="</td>";r0+="<td>";r0+="&amp;";r0+="nbsp;";r0+="</td>";r0+="<td>";r0+="Содержимое иконки. Актуально для типа ";r0+=m.f("f0",c0,i0,l0,a0,"notification");r0+=".";r0+="</td>";r0+="</tr>";r0+="<tr>";r0+='<td class="'+"text-info"+'">';r0+="type";r0+="</td>";r0+="<td>";r0+="string";r0+="</td>";r0+="<td></td>";r0+="<td>";r0+="Тип иконки. Возможные значения: ";var items0=m.n(j0,yr.array2nodeset(v1));for(var i1=0,l1=items0.length;i1<l1;i1++){var c1=items0[i1];if(i1>0){r0+=", "}r0+=m.f("f0",c1,i1,l1,a0,nodeset2scalar(m.s(j1,c1)))}r0+=".";r0+="</td>";r0+="</tr>";r0+="</table>";r0+="<h3>";r0+="Пример";r0+="</h3>";r0+='<div class="'+"panel panel-example"+'">';r0+='<div class="'+"panel-heading"+'">';r0+='<xb-ico type="'+"twitter"+'" disabled="'+"disabled"+'"></xb-ico>';r0+="</div>";r0+='<div class="'+"panel-body highlight"+'">';r0+="<pre>";r0+='<code class="'+"html"+'">';r0+='&lt;xb-ico type="twitter" disabled&gt;&lt;/xb-ico&gt;';r0+="</code>";r0+="</pre>";r0+="</div>";r0+="</div>";r0+='<a href="'+"#/examples/icons"+'">';r0+="Больше примеров иконок.";r0+="</a>";return r0};M.t2.j=j0;M.t2.a=0;M.matcher={_content:{"*":["t0"]},"_content-link":{"*":["t1"]},"_content-ico":{"*":["t2"]}};M.imports=["docs"];yr.register("controls",M)})();