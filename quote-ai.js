
(()=>{"use strict";
const C={phone:"2566385396",logo:"image-removebg-preview.png",key:"losBrosQuoteV4"};
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
const overlay=document.createElement("div");overlay.id="lb-overlay";overlay.innerHTML=`<section id="lb-chat"><header class="lb-head"><div class="lb-avatar"><img src="${C.logo}" alt=""></div><div class="lb-title"><b>Los Bros Landscaping AI</b><small>Services, questions & starting estimates</small></div><button class="lb-reset">Start over</button><button class="lb-close">×</button></header><div class="lb-progress"><span></span></div><div id="lb-msgs"></div><div class="lb-inputbox"><p class="lb-tip">Ask a question anytime, or type “I don't know” to skip.</p><form class="lb-form"><input autocomplete="off" placeholder="Type your answer..."><button>➜</button></form></div></section>`;
const launch=document.createElement("button");launch.id="lb-launch";launch.innerHTML=`<img src="${C.logo}" alt=""><span>Los Bros Landscaping AI</span>`;
document.body.append(launch,overlay);
const msgs=overlay.querySelector("#lb-msgs"),form=overlay.querySelector("form"),input=form.querySelector("input"),bar=overlay.querySelector(".lb-progress span");
launch.onclick=open;overlay.querySelector(".lb-close").onclick=close;overlay.querySelector(".lb-reset").onclick=()=>{if(confirm("Clear the saved quote and start over?")){localStorage.removeItem(C.key);st=fresh();msgs.innerHTML="";form.style.display="flex";start()}};
overlay.onclick=e=>{if(e.target===overlay)close()};
form.onsubmit=e=>{e.preventDefault();let v=input.value.trim();if(!v||!current)return;input.value="";answer(v)};
function open(){overlay.classList.add("open");document.body.style.overflow="hidden";if(!st.started)start();else if(!msgs.children.length)resume()}
function close(){overlay.classList.remove("open");document.body.style.overflow="";save()}
function start(){st.started=true;save();bot("Hey! Welcome to Los Bros Landscaping. I can explain our services, answer common questions, and build a fair starting estimate.");bot("You can ask a question at any time. If you do not know an answer, type “I don't know” and I’ll move on.");askService()}
function resume(){if(st.done)return final();bot("Welcome back! I saved your progress. Let’s continue where you stopped.");flow()}
function askService(add=false){current={t:add?"add":"service"};bot(add?"What other service would you like to add?":"What service would you like me to help you with?");options([["mowing","Lawn mowing"],["weeds","Weed pulling"],["hedge","Hedge trimming"],["control","Weed control"],["mulch","Mulch installation"],["bed","Mulch + new bed"],["cleanup","Yard cleanup"],["plants","Plant installation"],["irrigation","Irrigation"],["lighting","Landscape lighting"],["other","Something else"]],true)}
function smartReply(raw){
const q=String(raw||"").toLowerCase().trim();
const asks=/\?|^(how|what|when|where|why|can|could|do|does|is|are|will|would|should)\b/.test(q);
if(!asks)return "";
if(/\b(human|person|owner|call|phone|text|contact)\b/.test(q))return `You can text Los Bros Landscaping directly at (256) 638-5396. I can also finish this quote request and prepare the text for you.`;
if(/\b(free estimate|estimate free|quote free)\b/.test(q))return "Yes, the quote request is free. The website gives a starting estimate, and Los Bros Landscaping confirms the final price after reviewing the details and any pictures.";
if(/\b(licensed|insured)\b/.test(q))return "For current licensing or insurance details, please text Los Bros Landscaping directly at (256) 638-5396 so you receive an accurate answer.";
if(/\b(service area|where.*serve|location|gadsden|rainbow city|glencoe|hokes bluff|southside|attalla)\b/.test(q))return "We serve Gadsden and nearby communities, including Rainbow City, Glencoe, Hokes Bluff, Southside, and Attalla. Availability can depend on the job and exact address.";
if(/\b(payment|pay|cash|card|check|venmo|cash app|zelle)\b/.test(q))return "Payment options should be confirmed directly with Los Bros Landscaping before the job. Your quote text will make that easy.";
if(/\b(photo|picture|image|upload)\b/.test(q))return "At the end, press “Send My Free Quote.” Your text-message app will open, and you can attach pictures there before sending.";
if(/\b(schedule|available|availability|how soon|when can|today|tomorrow)\b/.test(q))return "Scheduling depends on the current route, weather, and job size. Finish the request and choose your preferred timing; Los Bros Landscaping will confirm availability.";
if(/\b(10%|ten percent|referral|refer|new client|discount)\b/.test(q))return "Referral offer: receive 10% off one service after the new customer you refer books and pays for their first job. Mention the person’s name in your quote text. The discount applies to labor, cannot be combined with another offer, and is confirmed by Los Bros Landscaping.";
if(/\b(mow|mowing|grass|lawn).*(price|cost|charge)|\b(price|cost|charge).*(mow|mowing|grass|lawn)\b/.test(q))return "Typical mowing starts around $50–$60 for a small yard, about $70–$75 for a medium yard, and around $90+ for a large yard. Edging, weed eating, and blowing are included. Overgrowth, steep areas, or difficult access can change the final price.";
if(/\b(hedge|bush|trim).*(price|cost|charge)|\b(price|cost|charge).*(hedge|bush|trim)\b/.test(q))return "Basic hedge trimming often starts around $20 for a small bush, $35 for a medium bush, and $50 for a large bush. Height, heavy cutbacks, cleanup, and hauling can change the total.";
if(/\b(weed pull|weeding|pull weeds).*(price|cost|charge)|\b(price|cost|charge).*(weed pull|weeding|pull weeds)\b/.test(q))return "Weed pulling is generally based on the amount of work: about $50 per labor hour without hauling or $60 with hauling. This assistant converts the answers into one simple starting estimate without showing hours.";
if(/\b(cleanup|yard clean).*(price|cost|charge)|\b(price|cost|charge).*(cleanup|yard clean)\b/.test(q))return "Yard cleanups commonly begin around $60 for light work and rise with the size, overgrowth, digging, heavy debris, and hauling.";
if(/\b(mulch).*(price|cost|charge)|\b(price|cost|charge).*(mulch)\b/.test(q))return "Mulch labor is generally based on bed size and preparation. Materials, delivery, old-mulch removal, weeds, edging, and fabric are added only when needed.";
if(/\b(irrigation|sprinkler).*(price|cost|charge)|\b(price|cost|charge).*(irrigation|sprinkler)\b/.test(q))return "Small irrigation diagnosis or repair work may start around $60–$150. Underground leaks, several damaged parts, new zones, or new systems require review before a final price.";
if(/\b(light|lighting).*(price|cost|charge)|\b(price|cost|charge).*(light|lighting)\b/.test(q))return "Landscape-lighting work may start around $120, but fixture count, transformer needs, wiring route, materials, and repairs determine the final price.";
if(/\b(what.*service|services.*offer|do you do)\b/.test(q))return "We offer lawn mowing, weed pulling and control, hedge trimming, mulch and bed installation, yard cleanups, plant installation, irrigation service, and landscape lighting.";
if(/\b(haul|hauling|take.*away|debris)\b/.test(q))return "Hauling is available for many services. The estimate asks whether you want debris removed because dump volume and carrying distance can affect the price.";
if(/\b(price|cost|charge|expensive|cheap|starting estimate|final price)\b/.test(q))return "The amount shown is a fair starting estimate based on your answers—not a bait price or guaranteed final total. Los Bros Landscaping reviews the request and pictures before confirming the price.";
return "I can help with services, starting prices, service areas, scheduling, pictures, hauling, and the referral discount. For a job-specific answer, continue the questions so I can use your details.";
}
function answer(raw){user(raw);let reply=smartReply(raw);if(reply){bot(reply);if(current&&current.t==="q"){let q=S[current.k].qs.find(z=>z[0]===current.id);if(q)bot(`To continue your estimate: ${q[1]}`)}else if(current&&current.t==="contact"){let q=CQ.find(z=>z[0]===current.id);if(q)bot(`To continue: ${q[1]}`)}return}let v=/^(i )?(don'?t|do not) know$|^not sure$/i.test(raw)?"Skipped":raw;
if(current.t==="service"||current.t==="add"){let k=match(v);if(!k){bot("Please choose the service that sounds closest.");return}if(!st.services.includes(k))st.services.push(k);st.si=st.services.indexOf(k);st.qi=0;st.answers[k]=st.answers[k]||{};st.phase="questions";save();bot(`Got it — ${S[k].name.toLowerCase()}. I’ll ask the important questions one at a time.`);askQ();return}
if(current.t==="q"){st.answers[current.k][current.id]=v;st.qi++;save();askQ();return}
if(current.t==="more"){if(/^y|another|more/i.test(v))askService(true);else{st.phase="contact";st.qi=0;save();bot("Perfect. I just need your contact details so the request can be sent correctly.");askContact()}return}
if(current.t==="contact"){st.contact[current.id]=v;st.qi++;save();askContact()}}
function askQ(){let k=st.services[st.si],q=S[k].qs[st.qi];if(!q){current={t:"more"};bot(`That covers ${S[k].name.toLowerCase()}. Do you need help with another service too?`);options([["Yes","Yes, add another service"],["No","No, continue"]]);return}current={t:"q",k,id:q[0]};bot(q[1]);if(q[2])options(q[2].map(x=>[x,x]));progress()}
function askContact(){let q=CQ[st.qi];if(!q){st.phase="final";st.estimate=total();st.done=true;save();return final()}current={t:"contact",id:q[0]};bot(q[1]);if(q[2])options(q[2].map(x=>[x,x]));progress()}
function flow(){st.phase==="contact"?askContact():askQ()}
function final(){current=null;form.style.display="none";bar.style.width="100%";bot("Thanks — that gives me enough information to prepare a starting estimate.");bot("Press “Send My Free Quote” below to send the full request to Los Bros Landscaping. When your text message opens, attach pictures before sending for the most accurate final price.");let d=document.createElement("div");d.className="lb-card";d.innerHTML=`<small>FAIR STARTING ESTIMATE</small><div class="lb-price">$${st.estimate}</div><p>This is a starting estimate based on the details provided. It is not a guaranteed final price. Los Bros Landscaping will review the request and pictures, then confirm the price before scheduling.</p><div class="lb-referral"><b>Save 10% with a referral</b><span>Get 10% off one service after a new customer you refer books and pays for their first job. Mention their name when texting. Labor discount only; cannot be combined with another offer; final eligibility is confirmed by Los Bros Landscaping.</span></div><div class="lb-actions"><button class="lb-primary">Send My Free Quote</button><button class="lb-secondary">Review My Answers</button></div>`;msgs.append(d);d.querySelector(".lb-primary").onclick=send;d.querySelector(".lb-secondary").onclick=review;scroll()}
function send(){location.href=`sms:${C.phone}?&body=${encodeURIComponent(summary())}`}
function review(){let x=[];st.services.forEach(k=>{x.push(`\n${S[k].name}:`);Object.entries(st.answers[k]).forEach(([id,v])=>{let q=S[k].qs.find(z=>z[0]===id);x.push(`• ${q?q[1]:id} ${v}`)})});bot(x.join("\n"))}
function summary(){let c=st.contact,l=[`FREE QUOTE REQUEST — Los Bros Landscaping`,``,`Name: ${c.name||"Not provided"}`,`Phone: ${c.phone||"Not provided"}`,`Email: ${c.email||"Not provided"}`,`Property: ${c.address||"Not provided"}`,`Preferred timing: ${c.timing||"Not provided"}`,``,`Starting website estimate: $${st.estimate}`,``];st.services.forEach(k=>{l.push(S[k].name.toUpperCase());Object.entries(st.answers[k]).forEach(([id,v])=>{let q=S[k].qs.find(z=>z[0]===id);l.push(`- ${q?q[1].replace("?",""):id}: ${v}`)});l.push("")});l.push(`Extra notes: ${c.notes||"None"}`,"","I can attach pictures to this text before sending.","Referral offer: 10% off labor on one service after a new customer I refer books and pays for their first job; cannot be combined with another offer and must be confirmed by Los Bros Landscaping.","I understand this is a starting estimate and the final price will be confirmed by Los Bros Landscaping.");return l.join("\n")}
function total(){let n=0;st.services.forEach(k=>n+=estimate(k,st.answers[k]||{}));return round(Math.max(50,n))}
function estimate(k,a){
const num=(v,d=0)=>parseFloat(String(v||"").match(/\d+(\.\d+)?/)?.[0])||d;
const has=(v,t)=>String(v||"").toLowerCase().includes(t);
const dims=(v,d)=>{let n=String(v||"").match(/\d+(\.\d+)?/g)?.map(Number)||[];if(n.length<2)return d;let z=n[0]*n[1];return z<=50?1:z<=150?2:z<=300?3.5:z<=600?5.5:7};

// Fair, customer-friendly starting estimates. Difficult conditions can still be
// reviewed from pictures before Los Bros Landscaping confirms the final price.
if(k==="mowing"){
  let p=has(a.size,"small")?50:has(a.size,"medium")?70:has(a.size,"acre")?155:90;
  if(has(a.growth,"very"))p+=20;
  else if(has(a.growth,"little"))p+=0;
  if(has(a.slope,"steep"))p+=10;
  if(has(a.access,"no"))p+=5;
  if(has(a.obstacles,"a lot"))p+=5;
  if(has(a.type,"first")&&has(a.growth,"very"))p+=10;
  if(has(a.type,"weekly"))p-=5;
  return Math.max(50,p);
}
if(k==="weeds"){
  let h=dims(a.dimensions,2)+Math.max(0,num(a.count,1)-1)*.2;
  if(has(a.density,"moderate"))h+=.5;
  if(has(a.density,"thick"))h+=1.25;
  if(has(a.density,"completely"))h+=2;
  if(has(a.kind,"vine")||has(a.kind,"deep"))h+=.5;
  if(has(a.access,"no"))h+=.5;
  return Math.max(50,h*(has(a.hauling,"yes")?55:48));
}
if(k==="hedge"){
  let c=num(a.count,1),b=has(a.size,"small")?20:has(a.size,"medium")?32:has(a.size,"large")?48:32,p=c*b;
  if(num(a.length)>30)p+=30;
  if(num(a.height)>8)p+=25;
  if(has(a.cut,"moderate"))p+=c*5;
  if(has(a.cut,"heavy"))p+=c*12;
  if(has(a.high,"yes"))p+=20;
  if(has(a.hauling,"yes"))p+=Math.max(15,c*4);
  if(has(a.obstacle,"yes"))p+=10;
  return Math.max(40,p);
}
if(k==="control"){
  let area=num(a.area),h=area>15000?2:area>7000?1.5:area>2500?1.1:.75;
  let prod=area>15000?75:area>7000?50:area>2500?30:20;
  if(has(a.density,"most")){h+=.35;prod+=15}else if(has(a.density,"half")){h+=.2;prod+=10}
  return Math.max(60,h*55+prod);
}
if(k==="mulch"){
  let h=dims(a.dimensions,3)+(has(a.old,"yes")?1.25:0)+(has(a.weeds,"yes")?1.25:0)+(has(a.edging,"yes")?.75:0)+(has(a.fabric,"yes")?1:0)+(has(a.access,"no")?.5:0),p=h*35;
  if(has(a.supply,"los bros")||has(a.delivery,"yes"))p+=85;
  return Math.max(70,p);
}
if(k==="bed"){
  let h=dims(a.dimensions,4)+(has(a.grass,"yes")?1.25:0)+(has(a.weeds,"yes")?1.25:0)+(has(a.edging,"yes")?1:0)+(has(a.plants,"yes")?1.25:0)+(has(a.soil,"yes")?.75:0)+(has(a.fabric,"yes")?1:0)+(has(a.access,"no")?.5:0),p=h*45;
  if(has(a.supply,"yes"))p+=110;
  return Math.max(90,p);
}
if(k==="cleanup"){
  let h=has(a.level,"light")?1.5:has(a.level,"moderate")?3:has(a.level,"extremely")?7:5;
  if(num(a.area)>10000)h+=2;else if(num(a.area)>4000)h+=1;
  if(has(a.vines,"yes"))h+=1;
  if(has(a.dig,"yes"))h+=1;
  if(has(a.heavy,"yes"))h+=.75;
  if(has(a.access,"no"))h+=.5;
  return Math.max(60,h*(has(a.hauling,"yes")?55:48));
}
if(k==="plants"){
  let c=num(a.count,1),e=has(a.size,"small")?20:has(a.size,"medium")?36:has(a.size,"large")?68:36,p=Math.max(60,c*e);
  if(has(a.remove,"yes"))p+=c*12;
  if(has(a.ground,"clay")||has(a.ground,"rocky"))p+=c*8;
  if(has(a.products,"yes"))p+=25;
  if(has(a.supply,"los bros")||has(a.delivery,"yes"))p+=Math.max(50,c*18);
  if(has(a.prep,"yes"))p+=40;
  return p;
}
if(k==="irrigation"){
  if(has(a.type,"new zone")||has(a.type,"new system"))return 700;
  let p=has(a.type,"diagnosis")?60:80;
  p+=Math.max(0,num(a.affected,1)-1)*20;
  if(has(a.location,"underground"))p+=50;
  if(has(a.leak,"yes"))p+=25;
  return Math.max(60,Math.min(p,500));
}
if(k==="lighting"){
  let c=num(a.count,1);
  if(has(a.type,"repair"))return 90+Math.max(0,c-1)*18;
  let p=90+c*32;
  if(has(a.transformer,"no"))p+=110;
  if(has(a.cross,"yes"))p+=60;
  if(has(a.ground,"rock")||has(a.ground,"concrete"))p+=40;
  if(has(a.supply,"los bros"))p+=Math.max(90,c*30);
  return p;
}
let h=has(a.difficulty,"light")?1.5:has(a.difficulty,"moderate")?3:has(a.difficulty,"very")?6:4;
return Math.max(50,h*(has(a.hauling,"yes")?55:48));
}
function round(v){return v<100?Math.round(v/5)*5:Math.round(v/10)*10}
function match(v){v=String(v).toLowerCase();for(const [k,words] of Object.entries({mowing:["mow","lawn","grass"],weeds:["weed pull","pull weed","weeding"],hedge:["hedge","bush","trim"],control:["weed control","spray","chemical"],bed:["new bed","bed install","mulch + new"],mulch:["mulch"],cleanup:["cleanup","clean up"],plants:["plant"],irrigation:["irrigation","sprinkler"],lighting:["light"],other:["other","something else"]}))if(words.some(w=>v.includes(w)))return k}
function bot(t){row("bot",t);save()}function user(t){row("user",t)}function row(r,t){let d=document.createElement("div");d.className=`lb-row ${r}`;d.innerHTML=`<div class="lb-bubble"></div>`;d.firstChild.textContent=t;msgs.append(d);scroll()}
function options(a,service=false){let w=document.createElement("div");w.className="lb-options";a.forEach(([v,l])=>{let b=document.createElement("button");b.type="button";b.className="lb-opt";b.textContent=l;b.onclick=()=>{w.remove();if(service){user(l);if(!st.services.includes(v))st.services.push(v);st.si=st.services.indexOf(v);st.qi=0;st.answers[v]=st.answers[v]||{};st.phase="questions";save();bot(`Got it — ${S[v].name.toLowerCase()}. I’ll ask the important questions one at a time.`);askQ()}else{input.value=v;form.dispatchEvent(new Event("submit",{bubbles:true,cancelable:true}))}};w.append(b)});msgs.append(w);scroll()}
function progress(){let all=1+st.services.reduce((n,k)=>n+S[k].qs.length,0)+CQ.length,done=1+st.qi;if(st.phase==="contact")done=1+st.services.reduce((n,k)=>n+S[k].qs.length,0)+st.qi;bar.style.width=`${Math.min(100,done/all*100)}%`}
function scroll(){requestAnimationFrame(()=>msgs.scrollTop=msgs.scrollHeight)}function save(){localStorage.setItem(C.key,JSON.stringify(st))}function load(){try{return JSON.parse(localStorage.getItem(C.key))||fresh()}catch{return fresh()}}
if(!localStorage.getItem(C.key))setTimeout(open,900);
})();
