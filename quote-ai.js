
(()=>{"use strict";
const C={phone:"2566385396",logo:"image-removebg-preview.png",key:"losBrosQuoteV2"};
const S={
mowing:{name:"Lawn mowing",qs:[
["type","Is this a first-time cut, one-time service, weekly service, or every two weeks?",["First-time cut","One-time","Weekly","Every two weeks"]],
["size","Would you call the yard small, medium, large, or one acre or more?",["Small","Medium","Large","One acre or more"]],
["growth","How grown out is the grass?",["Normal","A little overgrown","Very overgrown"]],
["slope","Is the property mostly flat, somewhat sloped, or steep?",["Mostly flat","Some slopes","Steep"]],
["access","Is the backyard easy to enter with lawn equipment?",["Yes","No","I don't know"]],
["obstacles","Are there many fences, trees, tight gates, toys, or other obstacles?",["Very few","Some","A lot","I don't know"]]]},
weeds:{name:"Weed pulling",qs:[
["where","Where are the weeds located?",["Flower beds","Around trees","Fence line","Across the yard","Several areas"]],
["count","About how many separate areas need work?"],
["dimensions","About how long and wide are the areas? A rough guess is okay."],
["density","How thick are the weeds?",["Light","Moderate","Thick","Completely covering the area"]],
["kind","Are they mostly small weeds, tall weeds, vines, deep-rooted growth, or mixed?",["Small weeds","Tall weeds","Vines","Deep-rooted","Mixed","I don't know"]],
["hauling","Would you like us to haul the pulled weeds away?",["Yes","No"]],
["access","Is the work area easy to reach and carry debris out of?",["Yes","No","I don't know"]]]},
hedge:{name:"Hedge trimming",qs:[
["count","How many bushes or hedge sections need trimming?"],
["size","Are they mostly small, medium, large, or mixed?",["Small","Medium","Large","Mixed"]],
["length","About how long is the hedge or the combined sections?"],
["height","About how tall are they?"],
["cut","Do you want light shaping, a moderate trim, or a heavy cutback?",["Light shaping","Moderate trim","Heavy cutback"]],
["high","Are any sections too high to reach safely from the ground?",["Yes","No","I don't know"]],
["hauling","Would you like the clippings hauled away?",["Yes","No"]],
["obstacle","Are the bushes against a fence, wall, power line, or another obstacle?",["Yes","No","I don't know"]]]},
control:{name:"Weed control",qs:[
["where","Where do you need weed control?",["Lawn","Flower beds","Driveway","Fence line","Several areas"]],
["area","About how large is the treatment area? A rough estimate is okay."],
["density","How much of the area is covered by weeds?",["Scattered","About one-quarter","About half","Most of it"]],
["weed","Do you know what kind of weeds they are?"],
["grass","Do you know the grass type?",["Bermuda","Zoysia","Fescue","Centipede","St. Augustine","I don't know"]],
["recent","Has anything been sprayed there recently?",["Yes","No","I don't know"]],
["plants","Are flowers, garden plants, or shrubs close to the treatment area?",["Yes","No","I don't know"]],
["repeat","Are you looking for one treatment or ongoing weed control?",["One treatment","Ongoing service","I don't know"]]]},
mulch:{name:"Mulch installation",qs:[
["ready","Are the beds already prepared for mulch?",["Yes","No","Partly","I don't know"]],
["old","Does old mulch need to be removed?",["Yes","No","I don't know"]],
["weeds","Do weeds need to be pulled first?",["Yes","No","I don't know"]],
["dimensions","About how long and wide are all the beds together?"],
["count","How many separate beds are included?"],
["depth","Do you know how deep you want the mulch?",["About 2 inches","About 3 inches","I don't know"]],
["supply","Who will supply the mulch?",["I will buy it","Los Bros Landscaping should supply it","I don't know"]],
["delivery","Will the mulch need to be picked up or delivered by us?",["Yes","No","I don't know"]],
["edging","Do the beds need a fresh edge?",["Yes","No","I don't know"]],
["fabric","Do you want landscape fabric installed?",["Yes","No","I don't know"]],
["access","Is it easy to carry mulch to the beds?",["Yes","No","I don't know"]]]},
bed:{name:"Mulch and new bed installation",qs:[
["new","Is this a completely new bed or an existing bed being rebuilt?",["Completely new","Existing bed","Both"]],
["dimensions","About how long and wide will the bed or beds be?"],
["grass","Does grass or old material need to be removed?",["Yes","No","I don't know"]],
["weeds","Do weeds need to be pulled?",["Yes","No","I don't know"]],
["edging","Would you like edging installed?",["Yes","No","I don't know"]],
["plants","Will plants be installed too?",["Yes","No","I don't know"]],
["soil","Will soil, compost, or another bed product be needed?",["Yes","No","I don't know"]],
["fabric","Would you like landscape fabric?",["Yes","No","I don't know"]],
["supply","Should Los Bros Landscaping supply the mulch and materials?",["Yes","No","I don't know"]],
["access","Is the bed easy to reach with materials?",["Yes","No","I don't know"]]]},
cleanup:{name:"Yard cleanup",qs:[
["items","What needs to be cleaned up? List everything you see."],
["area","About how large is the cleanup area?"],
["level","How heavy is the cleanup?",["Light","Moderate","Heavy","Extremely overgrown"]],
["vines","Are vines attached to fences, buildings, trees, or bushes?",["Yes","No","I don't know"]],
["dig","Does anything need to be dug out or pulled from the ground?",["Yes","No","I don't know"]],
["heavy","Are there large branches, heavy objects, or a lot of trash?",["Yes","No","I don't know"]],
["hauling","Would you like everything hauled away?",["Yes","No"]],
["access","Is it easy to carry debris to a truck or trailer?",["Yes","No","I don't know"]]]},
plants:{name:"Plant installation",qs:[
["count","How many plants or shrubs would you like installed?"],
["size","Are they small, medium, large, or mixed?",["Small","Medium","Large","Mixed","I don't know"]],
["remove","Do old plants or roots need to be removed first?",["Yes","No","I don't know"]],
["ground","What is the ground like?",["Soft soil","Clay","Rocky","Mixed","I don't know"]],
["products","Will new soil, fertilizer, or another planting product be needed?",["Yes","No","I don't know"]],
["supply","Who will supply the plants?",["Customer","Los Bros Landscaping","I don't know"]],
["delivery","Would you need us to pick up or deliver the plants?",["Yes","No","I don't know"]],
["prep","Does the area need weed pulling, edging, or bed preparation?",["Yes","No","I don't know"]]]},
irrigation:{name:"Irrigation service",qs:[
["type","What kind of irrigation help do you need?",["Diagnosis","Small repair","Adjustments","New zone/station","New system","I don't know"]],
["problem","What problem are you noticing?"],
["affected","How many sprinkler heads or areas seem affected?"],
["leak","Is water currently leaking?",["Yes","No","I don't know"]],
["location","Does the problem seem above ground or underground?",["Above ground","Underground","I don't know"]],
["valves","Do you know where the irrigation valves are?",["Yes","No","I don't know"]],
["brand","Do you know the controller or system brand?"],
["test","Can the system be turned on for testing?",["Yes","No","I don't know"]]]},
lighting:{name:"Landscape lighting",qs:[
["type","Is this a repair or a new installation?",["Repair","New installation","I don't know"]],
["count","About how many lights are involved?"],
["kind","What kind of lights do you want?",["Pathway lights","Uplights","Spotlights","Deck lights","Mixed","I don't know"]],
["transformer","Is a transformer already installed?",["Yes","No","I don't know"]],
["power","Is power available close to the installation area?",["Yes","No","I don't know"]],
["ground","What type of ground will the wire run through?",["Soil","Mulch","Rock","Concrete nearby","Mixed","I don't know"]],
["cross","Would wiring need to cross a driveway or walkway?",["Yes","No","I don't know"]],
["supply","Who should supply the lights and materials?",["Customer","Los Bros Landscaping","I don't know"]]]},
other:{name:"Another service",qs:[
["description","Tell me what work you need done."],
["area","About how large is the work area?"],
["difficulty","Would you call the job light, moderate, heavy, or very difficult?",["Light","Moderate","Heavy","Very difficult","I don't know"]],
["hauling","Would you need debris hauled away?",["Yes","No","I don't know"]]]}
};
const CQ=[
["name","What name should we put on the quote request?"],
["phone","What is the best phone number to reach you?"],
["email","What is your email address?"],
["address","What is the property address or nearest street?"],
["timing","When would you like the work done?",["As soon as possible","Within a week","Within two weeks","Just getting a price","I don't know"]],
["notes","Is there anything else you want us to know?",["No","I don't know"]]
];
const fresh=()=>({started:false,done:false,phase:"service",services:[],si:0,qi:0,answers:{},contact:{},estimate:0});
let st=load(),current=null;
const overlay=document.createElement("div");overlay.id="lb-overlay";overlay.innerHTML=`<section id="lb-chat"><header class="lb-head"><div class="lb-avatar"><img src="${C.logo}" alt=""></div><div class="lb-title"><b>Los Bros Landscaping AI</b><small>Quick starting estimate</small></div><button class="lb-reset">Start over</button><button class="lb-close">×</button></header><div class="lb-progress"><span></span></div><div id="lb-msgs"></div><div class="lb-inputbox"><p class="lb-tip">Not sure? Type “I don't know” and I’ll skip it.</p><form class="lb-form"><input autocomplete="off" placeholder="Type your answer..."><button>➜</button></form></div></section>`;
const launch=document.createElement("button");launch.id="lb-launch";launch.innerHTML=`<img src="${C.logo}" alt=""><span>Los Bros Landscaping AI</span>`;
document.body.append(launch,overlay);
const msgs=overlay.querySelector("#lb-msgs"),form=overlay.querySelector("form"),input=form.querySelector("input"),bar=overlay.querySelector(".lb-progress span");
launch.onclick=open;overlay.querySelector(".lb-close").onclick=close;overlay.querySelector(".lb-reset").onclick=()=>{if(confirm("Clear the saved quote and start over?")){localStorage.removeItem(C.key);st=fresh();msgs.innerHTML="";form.style.display="flex";start()}};
overlay.onclick=e=>{if(e.target===overlay)close()};
form.onsubmit=e=>{e.preventDefault();let v=input.value.trim();if(!v||!current)return;input.value="";answer(v)};
function open(){overlay.classList.add("open");document.body.style.overflow="hidden";if(!st.started)start();else if(!msgs.children.length)resume()}
function close(){overlay.classList.remove("open");document.body.style.overflow="";save()}
function start(){st.started=true;save();bot("Hey! Welcome to Los Bros Landscaping. I’ll ask a few questions so we can put together the best starting estimate possible.");bot("If you do not know an answer, just type “I don't know” and I’ll move to the next question.");askService()}
function resume(){if(st.done)return final();bot("Welcome back! I saved your progress. Let’s continue where you stopped.");flow()}
function askService(add=false){current={t:add?"add":"service"};bot(add?"What other service would you like to add?":"What service would you like me to help you with?");options([["mowing","Lawn mowing"],["weeds","Weed pulling"],["hedge","Hedge trimming"],["control","Weed control"],["mulch","Mulch installation"],["bed","Mulch + new bed"],["cleanup","Yard cleanup"],["plants","Plant installation"],["irrigation","Irrigation"],["lighting","Landscape lighting"],["other","Something else"]],true)}
function answer(raw){user(raw);let v=/^(i )?(don'?t|do not) know$|^not sure$/i.test(raw)?"Skipped":raw;
if(current.t==="service"||current.t==="add"){let k=match(v);if(!k){bot("Please choose the service that sounds closest.");return}if(!st.services.includes(k))st.services.push(k);st.si=st.services.indexOf(k);st.qi=0;st.answers[k]=st.answers[k]||{};st.phase="questions";save();bot(`Got it — ${S[k].name.toLowerCase()}. I’ll ask the important questions one at a time.`);askQ();return}
if(current.t==="q"){st.answers[current.k][current.id]=v;st.qi++;save();askQ();return}
if(current.t==="more"){if(/^y|another|more/i.test(v))askService(true);else{st.phase="contact";st.qi=0;save();bot("Perfect. I just need your contact details so the request can be sent correctly.");askContact()}return}
if(current.t==="contact"){st.contact[current.id]=v;st.qi++;save();askContact()}}
function askQ(){let k=st.services[st.si],q=S[k].qs[st.qi];if(!q){current={t:"more"};bot(`That covers ${S[k].name.toLowerCase()}. Do you need help with another service too?`);options([["Yes","Yes, add another service"],["No","No, continue"]]);return}current={t:"q",k,id:q[0]};bot(q[1]);if(q[2])options(q[2].map(x=>[x,x]));progress()}
function askContact(){let q=CQ[st.qi];if(!q){st.phase="final";st.estimate=total();st.done=true;save();return final()}current={t:"contact",id:q[0]};bot(q[1]);if(q[2])options(q[2].map(x=>[x,x]));progress()}
function flow(){st.phase==="contact"?askContact():askQ()}
function final(){current=null;form.style.display="none";bar.style.width="100%";bot("Thanks — that gives me enough information to prepare a starting estimate.");bot("Press “Send My Free Quote” below to send the full request to Los Bros Landscaping. When your text message opens, you can attach pictures there before sending it.");let d=document.createElement("div");d.className="lb-card";d.innerHTML=`<small>STARTING ESTIMATE</small><div class="lb-price">$${st.estimate}</div><p>This is a starting estimate based on the information provided. Los Bros Landscaping will review the request and confirm the price before scheduling.</p><div class="lb-actions"><button class="lb-primary">Send My Free Quote</button><button class="lb-secondary">Review My Answers</button></div>`;msgs.append(d);d.querySelector(".lb-primary").onclick=send;d.querySelector(".lb-secondary").onclick=review;scroll()}
function send(){location.href=`sms:${C.phone}?&body=${encodeURIComponent(summary())}`}
function review(){let x=[];st.services.forEach(k=>{x.push(`\n${S[k].name}:`);Object.entries(st.answers[k]).forEach(([id,v])=>{let q=S[k].qs.find(z=>z[0]===id);x.push(`• ${q?q[1]:id} ${v}`)})});bot(x.join("\n"))}
function summary(){let c=st.contact,l=[`FREE QUOTE REQUEST — Los Bros Landscaping`,``,`Name: ${c.name||"Not provided"}`,`Phone: ${c.phone||"Not provided"}`,`Email: ${c.email||"Not provided"}`,`Property: ${c.address||"Not provided"}`,`Preferred timing: ${c.timing||"Not provided"}`,``,`Starting website estimate: $${st.estimate}`,``];st.services.forEach(k=>{l.push(S[k].name.toUpperCase());Object.entries(st.answers[k]).forEach(([id,v])=>{let q=S[k].qs.find(z=>z[0]===id);l.push(`- ${q?q[1].replace("?",""):id}: ${v}`)});l.push("")});l.push(`Extra notes: ${c.notes||"None"}`,"","I can attach pictures to this text before sending.","I understand this is a starting estimate and the final price will be confirmed by Los Bros Landscaping.");return l.join("\n")}
function total(){let n=0;st.services.forEach(k=>n+=estimate(k,st.answers[k]||{}));return round(Math.max(50,n))}
function estimate(k,a){let num=(v,d=0)=>parseFloat(String(v||"").match(/\d+(\.\d+)?/)?.[0])||d,has=(v,t)=>String(v||"").toLowerCase().includes(t),dims=(v,d)=>{let n=String(v||"").match(/\d+(\.\d+)?/g)?.map(Number)||[];if(n.length<2)return d;let z=n[0]*n[1];return z<=50?2:z<=150?3.5:z<=300?5:z<=600?7:9};
if(k==="mowing"){let p=has(a.size,"small")?55:has(a.size,"medium")?75:has(a.size,"acre")?180:95;if(has(a.growth,"little"))p+=15;if(has(a.growth,"very"))p+=40;if(has(a.slope,"some"))p+=10;if(has(a.slope,"steep"))p+=25;if(has(a.access,"no"))p+=15;if(has(a.obstacles,"a lot"))p+=20;if(has(a.type,"first"))p+=15;return p}
if(k==="weeds"){let h=dims(a.dimensions,2.5)+num(a.count,1)*.25+(has(a.density,"moderate")?1:has(a.density,"thick")?2:has(a.density,"completely")?3:0)+(has(a.kind,"vine")||has(a.kind,"deep")?1:0)+(has(a.access,"no")?.75:0);return h*(has(a.hauling,"yes")?60:50)}
if(k==="hedge"){let c=num(a.count,1),b=has(a.size,"small")?20:has(a.size,"medium")?35:has(a.size,"large")?50:38,p=c*b;if(num(a.length)>25)p+=50;if(num(a.height)>8)p+=40;if(has(a.cut,"moderate"))p+=c*8;if(has(a.cut,"heavy"))p+=c*18;if(has(a.high,"yes"))p+=35;if(has(a.hauling,"yes"))p+=Math.max(20,c*6);if(has(a.obstacle,"yes"))p+=20;return p}
if(k==="control"){let area=num(a.area),h=area>15000?2.5:area>7000?1.75:area>2500?1.25:1,prod=area>15000?95:area>7000?65:area>2500?40:25;if(has(a.density,"most")){h+=.5;prod+=25}else if(has(a.density,"half")){h+=.25;prod+=15}return h*60+prod}
if(k==="mulch"){let h=dims(a.dimensions,4)+(has(a.old,"yes")?2:0)+(has(a.weeds,"yes")?2:0)+(has(a.edging,"yes")?1:0)+(has(a.fabric,"yes")?1.5:0)+(has(a.access,"no")?1:0),p=h*35;if(has(a.supply,"los bros")||has(a.delivery,"yes"))p+=140;return p}
if(k==="bed"){let h=dims(a.dimensions,5)+(has(a.grass,"yes")?2:0)+(has(a.weeds,"yes")?2:0)+(has(a.edging,"yes")?1.5:0)+(has(a.plants,"yes")?2:0)+(has(a.soil,"yes")?1:0)+(has(a.fabric,"yes")?1.5:0)+(has(a.access,"no")?1:0),p=h*45;if(has(a.supply,"yes"))p+=180;return p}
if(k==="cleanup"){let h=has(a.level,"light")?2:has(a.level,"moderate")?4:has(a.level,"extremely")?9:6;if(num(a.area)>10000)h+=3;else if(num(a.area)>4000)h+=1.5;if(has(a.vines,"yes"))h+=1.5;if(has(a.dig,"yes"))h+=1.5;if(has(a.heavy,"yes"))h+=1;if(has(a.access,"no"))h+=1;return h*(has(a.hauling,"yes")?60:50)}
if(k==="plants"){let c=num(a.count,1),e=has(a.size,"small")?25:has(a.size,"medium")?50:has(a.size,"large")?95:55,p=Math.max(75,c*e);if(has(a.remove,"yes"))p+=c*20;if(has(a.ground,"clay")||has(a.ground,"rocky"))p+=c*15;if(has(a.products,"yes"))p+=40;if(has(a.supply,"los bros")||has(a.delivery,"yes"))p+=Math.max(75,c*25);if(has(a.prep,"yes"))p+=75;return p}
if(k==="irrigation"){if(has(a.type,"new zone")||has(a.type,"new system"))return 900;let p=has(a.type,"diagnosis")?60:95;p+=Math.max(0,num(a.affected,1)-1)*30;if(has(a.location,"underground"))p+=75;if(has(a.leak,"yes"))p+=35;return Math.max(60,Math.min(p,650))}
if(k==="lighting"){let c=num(a.count,1);if(has(a.type,"repair"))return 120+Math.max(0,c-1)*25;let p=120+c*45;if(has(a.transformer,"no"))p+=175;if(has(a.cross,"yes"))p+=100;if(has(a.ground,"rock")||has(a.ground,"concrete"))p+=75;if(has(a.supply,"los bros"))p+=Math.max(120,c*40);return p}
let h=has(a.difficulty,"light")?2:has(a.difficulty,"moderate")?4:has(a.difficulty,"very")?8:6;return h*(has(a.hauling,"yes")?60:50)}
function round(v){return v<100?Math.round(v/5)*5:Math.round(v/10)*10}
function match(v){v=String(v).toLowerCase();for(const [k,words] of Object.entries({mowing:["mow","lawn","grass"],weeds:["weed pull","pull weed","weeding"],hedge:["hedge","bush","trim"],control:["weed control","spray","chemical"],bed:["new bed","bed install","mulch + new"],mulch:["mulch"],cleanup:["cleanup","clean up"],plants:["plant"],irrigation:["irrigation","sprinkler"],lighting:["light"],other:["other","something else"]}))if(words.some(w=>v.includes(w)))return k}
function bot(t){row("bot",t);save()}function user(t){row("user",t)}function row(r,t){let d=document.createElement("div");d.className=`lb-row ${r}`;d.innerHTML=`<div class="lb-bubble"></div>`;d.firstChild.textContent=t;msgs.append(d);scroll()}
function options(a,service=false){let w=document.createElement("div");w.className="lb-options";a.forEach(([v,l])=>{let b=document.createElement("button");b.type="button";b.className="lb-opt";b.textContent=l;b.onclick=()=>{w.remove();if(service){user(l);if(!st.services.includes(v))st.services.push(v);st.si=st.services.indexOf(v);st.qi=0;st.answers[v]=st.answers[v]||{};st.phase="questions";save();bot(`Got it — ${S[v].name.toLowerCase()}. I’ll ask the important questions one at a time.`);askQ()}else{input.value=v;form.dispatchEvent(new Event("submit",{bubbles:true,cancelable:true}))}};w.append(b)});msgs.append(w);scroll()}
function progress(){let all=1+st.services.reduce((n,k)=>n+S[k].qs.length,0)+CQ.length,done=1+st.qi;if(st.phase==="contact")done=1+st.services.reduce((n,k)=>n+S[k].qs.length,0)+st.qi;bar.style.width=`${Math.min(100,done/all*100)}%`}
function scroll(){requestAnimationFrame(()=>msgs.scrollTop=msgs.scrollHeight)}function save(){localStorage.setItem(C.key,JSON.stringify(st))}function load(){try{return JSON.parse(localStorage.getItem(C.key))||fresh()}catch{return fresh()}}
if(!localStorage.getItem(C.key))setTimeout(open,900);
})();
