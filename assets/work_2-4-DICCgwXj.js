import{p as f,_ as x}from"./work-BISAWx0z.js";import{_ as h,c as l,d as e,f as r,t as y,b as p,h as d,v as a,a as b,w,g as v,r as k,o as i,k as g,u as P}from"./index-Cf7yCg0S.js";import{_ as R,a as V,b as z,c as C,d as U}from"./人员5-CW_47XXP.js";P();const N={components:{popup:f},data(){return{round:0,firstPage:!0,secondPage:!1,thirdPage:!1,start:!1,gender:0,height:null,weight:null,gender:0,age:null,showResult:!1}},methods:{nextPage(){if(this.height>=100&&this.height<=200&&this.weight>=40&&this.weight<=100&&this.age>=20&&this.age<=80)this.round++,this.height=null,this.weight=null,this.age=null;else{alert("请认真对待工作！");return}this.round==5&&(this.start=!1,this.showResult=!0)},nopass(){this.noPass=!0},first(){this.firstPage=!1,this.secondPage=!0},second(){this.secondPage=!1,this.thirdPage=!0},startWork(){this.thirdPage=!1,this.start=!0}}},j={class:"container"},B={key:1,class:"content"},D={style:{"text-align":"center","margin-top":"-10px","line-height":"20px"}},M={key:2,class:"rules"},S={style:{"margin-top":"20px"}},T={key:3,class:"work"},q={style:{"text-align":"start","margin-left":"10px","margin-top":"1px"}},E={key:0,src:R,alt:"无法显示",width:"320px",height:"220px"},G={key:1,src:V,alt:"无法显示",width:"320px",height:"220px"},I={key:2,src:z,alt:"无法显示",width:"320px",height:"220px"},W={key:3,src:C,alt:"无法显示",width:"320px",height:"220px"},Z={key:4,src:U,alt:"无法显示",width:"320px",height:"220px"},A={style:{"line-height":"18px","margin-top":"5px"}},F={id:"gender",style:{"text-align":"start","margin-left":"10px","margin-top":"1px"}},H={style:{"text-align":"start","margin-left":"10px"}},J={style:{"text-align":"start","margin-left":"10px"}},K={style:{"text-align":"start","margin-left":"10px"}},L={class:"reason"},O={style:{"text-align":"left","margin-left":"30px","line-height":"35px"}},Q={key:4,class:"work-invite",style:{height:"320px"}};function X(o,t,Y,$,s,u){const m=k("popup");return i(),l("div",j,[s.firstPage?(i(),l("div",{key:0,class:"work-invite",onClick:t[0]||(t[0]=(...n)=>u.first&&u.first(...n))},t[15]||(t[15]=[e("img",{src:x,alt:"无法显示",width:"70px",style:{"margin-top":"20px"}},null,-1),e("p",{style:{"font-size":"32px","font-weight":"bold",color:"red"}},"恭喜您!",-1),e("div",{style:{"line-height":"10px","font-weight":"bold","font-size":"18px"}},[e("p",null,"鉴于您对网络游戏适应性"),e("p",null,"的良好表现,您收到了一份工作邀请!"),e("p",{style:{"font-size":"12px",color:"gray"}},"(点击继续)")],-1)]))):r("",!0),s.secondPage?(i(),l("div",B,[t[23]||(t[23]=e("h2",null,"数据录入员",-1)),e("div",D,[t[16]||(t[16]=e("p",null,"为了进一步提升老年人生活",-1)),t[17]||(t[17]=e("p",null,"生活愉悦感和价值感，我们公司",-1)),t[18]||(t[18]=e("p",null,"(游戏公司)与互联网健康公司合",-1)),t[19]||(t[19]=e("p",null,"作，为老年朋友们提供了一份在家",-1)),t[20]||(t[20]=e("p",null,"即可完成的有趣工作。这份工作",-1)),t[21]||(t[21]=e("p",null,"帮助网络公司完成用户资料录入。",-1)),t[22]||(t[22]=e("div",{style:{"text-align":"start",color:"green","margin-top":"40px"}},[e("h3",{style:{"margin-left":"40px"}},"别担心，跟着我们的指导，"),e("h3",null,"动动手指，即可完成这份工作。")],-1)),e("button",{onClick:t[1]||(t[1]=(...n)=>u.second&&u.second(...n)),style:{border:"1px solid whitesmoke",width:"240px","margin-top":"40px","border-radius":"20px","background-color":"cornflowerblue",color:"aliceblue"}}," 继续 ")])])):r("",!0),s.thirdPage?(i(),l("div",M,[t[24]||(t[24]=e("div",{style:{"margin-top":"150px","line-height":"40px","text-align":"left","font-size":"23px","text-indent":"2em","justify-self":"center","font-weight":"bold"}},[e("p",null,"互联网健康公司，下乡为村民提供了线下免费体检，工作人员保存了手写资料，现需要您帮助把这些手写资料的某些信息录入成电子资料，以更好的形成体检报告。")],-1)),e("div",S,[e("button",{onClick:t[2]||(t[2]=n=>(s.start=!0,s.thirdPage=!1)),style:{"background-color":"orange","border-radius":"15px","font-weight":"bold",padding:"3% 25%"}},"我明白了，继续")])])):r("",!0),s.start?(i(),l("div",T,[e("div",null,[t[25]||(t[25]=e("h2",{style:{"text-align":"start","margin-left":"10px"}},"请根据图片录入顾客信息",-1)),e("h3",q,"人员 "+y(s.round+1)+" :",1)]),e("div",null,[s.round==0?(i(),l("img",E)):r("",!0),s.round==1?(i(),l("img",G)):r("",!0),s.round==2?(i(),l("img",I)):r("",!0),s.round==3?(i(),l("img",W)):r("",!0),s.round==4?(i(),l("img",Z)):r("",!0)]),e("div",A,[e("h2",F,[t[26]||(t[26]=p("性别：")),e("input",{onClick:t[3]||(t[3]=n=>s.gender=1),type:"radio",name:"gender"}),t[27]||(t[27]=p("男 ")),e("input",{onClick:t[4]||(t[4]=n=>s.gender=1),name:"gender",type:"radio"}),t[28]||(t[28]=p("女"))]),e("h2",H,[t[29]||(t[29]=p("身高：")),d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=n=>s.height=n),style:{"padding-top":"7px",height:"16px",width:"100px"},type:"number"},null,512),[[a,s.height]]),t[30]||(t[30]=p(" 厘米"))]),e("h2",J,[t[31]||(t[31]=p("体重：")),d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>s.weight=n),style:{"padding-top":"7px",height:"16px",width:"100px"},type:"number"},null,512),[[a,s.weight]]),t[32]||(t[32]=p(" 公斤"))]),e("h2",K,[t[33]||(t[33]=p("年龄：")),d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=n=>s.age=n),style:{"padding-top":"7px",height:"16px",width:"100px"},type:"number"},null,512),[[a,s.age]]),t[34]||(t[34]=p(" 岁"))])]),s.gender&&s.height&&s.weight&&s.age?(i(),l("button",{key:0,onClick:t[8]||(t[8]=(...n)=>u.nextPage&&u.nextPage(...n)),style:{"margin-top":"90px",margin:"auto 30px","border-radius":"30px","background-color":"darkgreen"}}," 继续 ")):r("",!0),b(m,{modelValue:o.noPass,"onUpdate:modelValue":t[14]||(t[14]=n=>o.noPass=n)},{default:w(()=>[e("div",L,[t[42]||(t[42]=e("p",{style:{"text-align":"left","margin-left":"10px"}},"请选择不通过的理由:",-1)),e("div",O,[d(e("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=n=>o.noPassResult1=n)},null,512),[[g,o.noPassResult1]]),t[35]||(t[35]=e("span",null,"药品效果描述有误，如使用绝对语言",-1)),t[36]||(t[36]=e("br",null,null,-1)),d(e("input",{type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=n=>o.noPassResult2=n)},null,512),[[g,o.noPassResult2]]),t[37]||(t[37]=e("span",null,"缺乏科学依据，效果未经验证",-1)),t[38]||(t[38]=e("br",null,null,-1)),d(e("input",{type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=n=>o.noPassResult3=n)},null,512),[[g,o.noPassResult3]]),t[39]||(t[39]=e("span",null,"虚假宣传或使用误导性语言",-1)),t[40]||(t[40]=e("br",null,null,-1)),d(e("input",{type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=n=>o.noPassResult4=n)},null,512),[[g,o.noPassResult4]]),t[41]||(t[41]=e("span",null,"副作用和风险描述有误",-1))]),o.noPassResult1||o.noPassResult2||o.noPassResult3||o.noPassResult4?(i(),l("button",{key:0,onClick:t[13]||(t[13]=n=>(o.select=!0,o.noPass=!1)),style:{"margin-top":"5px","background-color":"azure"}},"确定")):r("",!0)])]),_:1},8,["modelValue"])])):r("",!0),s.showResult?(i(),l("div",Q,t[43]||(t[43]=[v('<img src="'+x+'" alt="无法显示" width="70px" style="margin-top:20px;" data-v-ba64ad19><p style="font-size:24px;font-weight:bold;color:red;" data-v-ba64ad19>恭喜您!</p><p style="font-size:24px;font-weight:bold;color:red;margin-top:-30px;" data-v-ba64ad19>出色地完成了这份工作!</p><p style="font-size:22px;font-weight:bold;color:green;margin-top:-30px;line-height:40px;" data-v-ba64ad19>再次感谢您的参与,</p><p style="font-size:22px;font-weight:bold;color:green;margin-top:-35px;line-height:40px;" data-v-ba64ad19>请您根据您的真实感受</p><p style="font-size:22px;font-weight:bold;color:green;margin-top:-35px;line-height:40px;" data-v-ba64ad19>填答以下问卷</p><div style="line-height:10px;font-weight:bold;font-size:18px;margin-top:-30px;" data-v-ba64ad19><button style="border-radius:10px;margin-top:5px;" data-v-ba64ad19><a href="https://www.wenjuan.com/s/Z3eUjqG/#" target="_self" data-v-ba64ad19>前往问卷五</a></button></div>',7)]))):r("",!0)])}const et=h(N,[["render",X],["__scopeId","data-v-ba64ad19"]]);export{et as default};