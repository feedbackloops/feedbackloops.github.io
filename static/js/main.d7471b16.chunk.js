(this.webpackJsonpghpages=this.webpackJsonpghpages||[]).push([[0],{28:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(30),c=n.n(o),s=(n(52),n(21)),a=n(5),d=n(8),l=n(9),j=n(11),h=n(10),b=n(13),x=n(66),v=(n(53),n(1)),u=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",placeItems:"center"},children:[Object(v.jsx)("div",{style:{margin:"0 .5vw 0 0"},children:"Info"}),Object(v.jsx)("div",{className:"ddArrow"})]})};return Object(v.jsxs)("div",{className:"nav",children:[Object(v.jsx)(b.c,{to:"/",className:"navl",children:"Tordano"}),Object(v.jsx)(b.c,{to:"/airdrop",className:"navl",children:"Airdrop"}),Object(v.jsx)(b.c,{to:"/mining",className:"navl",children:"Mining"}),Object(v.jsx)(b.c,{to:"/governance",className:"navl",children:"Voting"}),Object(v.jsx)(b.c,{to:"/compliance",className:"navl",children:"Compliance"}),Object(v.jsx)(b.c,{to:"/stats",className:"navl",children:"Stats"}),Object(v.jsx)(x.a,{title:Object(v.jsx)(e,{}),id:"basic-nav-dropdown",className:"navl",children:Object(v.jsxs)("div",{style:{border:"1px solid green"},className:"navdd",children:[Object(v.jsx)(x.a.Item,{href:"/#/tutorial",className:"navl navd",children:"Tutorial"}),Object(v.jsx)(x.a.Divider,{}),Object(v.jsx)(x.a.Item,{href:"/#",className:"navl navd",children:"About (medium)"}),Object(v.jsx)(x.a.Divider,{}),Object(v.jsx)(x.a.Item,{href:"/#",className:"navl navd",children:"Privacy tips (medium)"})]})}),Object(v.jsx)(b.c,{to:"/changelog",className:"navl",children:"ChangeLog"})]})}}]),n}(i.Component),p=n(19),O=(n(28),n(20)),m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={usrIP:e.usrIP,arrTxn:[{txnNo:"12345",txnTime:"5 hours ago"},{txnNo:"12346",txnTime:"5 hours ago"},{txnNo:"12347",txnTime:"5 hours ago"},{txnNo:"12348",txnTime:"5 hours ago"},{txnNo:"12349",txnTime:"6 hours ago"},{txnNo:"12350",txnTime:"6 hours ago"},{txnNo:"12351",txnTime:"6 hours ago"},{txnNo:"12352",txnTime:"7 hours ago"},{txnNo:"12353",txnTime:"7 hours ago"},{txnNo:"12354",txnTime:"7 hours ago"},{txnNo:"12355",txnTime:"8 hours ago"}]},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.usrIP,n=e.arrTxn,i=this.props,r=i.token,o=i.tokenAmt,c=i.uCount;return Object(v.jsxs)("div",{style:{border:"1px solid #d7dadc",borderRadius:"2px",height:"40vh",width:"30vw"},className:"statistics",children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",padding:"0 1vw"},children:"Statistics"}),Object(v.jsxs)("div",{style:{border:"1px solid #0033ad",borderRadius:"2px",fontSize:"14px",margin:"0 0 0 4px",padding:"2px"},children:[o," ",r]})]}),Object(v.jsx)("div",{style:{padding:"0 1vw"},children:"Anonymity set"}),Object(v.jsxs)("div",{style:{padding:"0 1vw"},children:[c," equal user deposits"]}),Object(v.jsx)("div",{style:{padding:"0 1vw",fontWeight:"bold"},children:"latest deposits"}),Object(v.jsx)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",height:"150px",margin:"5px 0 0 0"},children:n.map((function(e,t){return Object(v.jsxs)("div",{style:{padding:"0 1vw",backgroundColor:"".concat(t%2===1?"#1a1a1a":"transparent")},children:[e.txnNo,". ",e.txnTime]},Object(O.a)(4))}))}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"0 1vw"},children:[Object(v.jsx)("div",{children:"Your IP"}),Object(v.jsx)("div",{children:t})]})]})}}]),n}(i.Component),g=n(65),f=n(18),y=function(e){return void 0===e.to?Object(v.jsx)("button",{className:e.className,style:{width:"10vw",margin:"5vh 0",alignSelf:"center",color:"#d7dadc",border:"1px solid #0033ad",padding:"1vw 1vh",textAlign:"center",borderRadius:"2px",backgroundColor:"transparent"},onClick:e.onClick,children:e.txt||"Connect"}):Object(v.jsx)(b.b,{to:e.to,className:e.className,style:{width:"40%",alignSelf:"center",color:"#d7dadc",textDecoration:"none",border:"1px solid #0033ad",padding:"1vw 1vh",textAlign:"center",borderRadius:"2px"},children:"Connect"})};function k(e){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},onClick:function(){e.onClick(e.amt)},children:[Object(v.jsx)("div",{style:{height:"16px",width:"16px",borderRadius:"50%",border:"2px solid #0033ad",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(v.jsx)("div",{style:{height:"12px",width:"12px",borderRadius:"50%",backgroundColor:e.tokenAmt===e.amt?"#0033ad":"#0E0E0E"}})}),Object(v.jsxs)("div",{children:[e.amt," ",e.token]})]})}var w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={},i.handleTok=i.handleTok.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"handleTok",value:function(e){var t=e.target.innerText;this.props.tokSelected(t)}},{key:"render",value:function(){var e=this.props,t=e.token,n=e.tokenAmt,i=e.amtSelected,r=function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",placeItems:"center"},children:[Object(v.jsx)("div",{style:{margin:"0 .5vw 0 0"},children:t}),Object(v.jsx)("div",{className:"ddArrow"})]})};return[Object(v.jsx)("div",{style:{padding:"0 4px"},children:"Token"},Object(O.a)(4)),Object(v.jsx)(g.a,{id:"dd-btn",title:Object(v.jsx)(r,{}),children:Object(v.jsxs)("div",{className:"tokDropDown",children:[Object(v.jsx)(f.a.Item,{onClick:this.handleTok,className:"tokName",children:"ADA"}),Object(v.jsx)(f.a.Divider,{}),Object(v.jsx)(f.a.Item,{onClick:this.handleTok,className:"tokName",children:"DAI"}),Object(v.jsx)(f.a.Divider,{}),Object(v.jsx)(f.a.Item,{onClick:this.handleTok,className:"tokName",children:"cDAI"}),Object(v.jsx)(f.a.Divider,{}),Object(v.jsx)(f.a.Item,{onClick:this.handleTok,className:"tokName",children:"USDC"}),Object(v.jsx)(f.a.Divider,{}),Object(v.jsx)(f.a.Item,{onClick:this.handleTok,className:"tokName",children:"USDT"}),Object(v.jsx)(f.a.Divider,{}),Object(v.jsx)(f.a.Item,{onClick:this.handleTok,className:"tokName",children:"WBTC"})]},Object(O.a)(4))},Object(O.a)(4)),Object(v.jsx)("div",{style:{padding:"0 4px"},children:"Amount"},Object(O.a)(4)),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(v.jsx)(k,{amt:"0.1",token:t,tokenAmt:n,onClick:i}),Object(v.jsx)(k,{amt:"1",token:t,tokenAmt:n,onClick:i}),Object(v.jsx)(k,{amt:"10",token:t,tokenAmt:n,onClick:i}),Object(v.jsx)(k,{amt:"100",token:t,tokenAmt:n,onClick:i})]},Object(O.a)(4)),Object(v.jsx)(y,{to:"/account",className:"homeConnect"},Object(O.a)(4))]}}]),n}(i.Component),C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.tokenAmt,i=e.amtSelected,r=function(e){return Object(v.jsx)("div",{style:{alignSelf:"center",fontSize:"18px",fontWeight:"bold",padding:"2px 4px"},children:e.txt})};return Object(v.jsxs)("div",{style:{border:"1px solid #d7dadc",borderRadius:"2px",height:"40vh",width:"30vw"},className:"deposits",children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",borderBottom:"1px solid #d7dadc"},children:[Object(v.jsx)(r,{txt:"Deposit"}),Object(v.jsx)(r,{txt:"Withdraw"})]}),Object(v.jsx)(w,{token:t,tokenAmt:n,amtSelected:i})]})}}]),n}(i.Component),T=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={uCount:"".concat(Math.floor(2e3*Math.random())),usrIP:"69.69.69.69",tokenAmt:"0.1",token:"ADA"},i.tokSelected=i.tokSelected.bind(Object(p.a)(i)),i.amtSelected=i.amtSelected.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.ipify.org?format=json",{headers:{accept:"application/json","content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({usrIP:t.ip})})).catch((function(e){return console.error("Problem fetching my IP",e)}))}},{key:"amtSelected",value:function(e){console.log("amtSelected arg",e),this.setState({tokenAmt:e})}},{key:"tokSelected",value:function(e){console.log("tokSelected arg",e),this.setState({token:e,uCount:"".concat(Math.floor(2e3*Math.random()))})}},{key:"render",value:function(){var e=this.state,t=e.usrIP,n=e.uCount,i=e.tokenAmt,r=e.token;return Object(v.jsxs)("div",{className:"homePage",children:[Object(v.jsx)(C,{token:r,tokenAmt:i,tokSelected:this.tokSelected,amtSelected:this.amtSelected}),Object(v.jsx)(m,{usrIP:t,uCount:n,tokenAmt:i,token:r})]})}}]),n}(i.Component),S=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(v.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Early Tordano Adopters token airdrop"}),Object(v.jsx)("div",{children:"Every address that has used the Tordano protocol before 11400000 block has received TORD token vouchers (vTORD) that can be redeemed for TORD tokens (one-to-one) below. The more you contributed to the early adoption of Tordano, the more vTORD you have received. These vouchers are only valid for one year."}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"2vh 0 0 0"},children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",borderRight:"1px solid #D7DADC",padding:"0 1vw"},children:[Object(v.jsx)("div",{style:{fontSize:"12px"},children:"Voucher Balance"}),Object(v.jsx)("div",{style:{fontWeight:"bold"},children:"0 vTORD"})]}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"0 1vw"},children:[Object(v.jsx)("div",{style:{fontSize:"12px"},children:"Current Balance"}),Object(v.jsx)("div",{style:{fontWeight:"bold"},children:"0 TORD"})]})]}),Object(v.jsx)("button",{style:{width:"10vw",margin:"5vh 0",alignSelf:"center",color:"#d7dadc",border:"1px solid #0033ad",padding:"1vw 1vh",textAlign:"center",borderRadius:"2px",backgroundColor:"transparent"},onClick:this.props.onClick,children:"Redeem"})]})}}]),n}(i.Component);function D(e){return Object(v.jsxs)("div",{style:e.bordRight?{borderRight:"1px solid #D7DADC"}:{},children:[Object(v.jsx)("div",{style:{height:"150px",border:"1px solid red"},children:"IMG"}),Object(v.jsx)("div",{style:{fontWeight:"bold"},children:e.title}),Object(v.jsx)("div",{style:{margin:"2vh 0"},children:e.info}),Object(v.jsx)(b.b,{to:"/",children:"Read more (medium)"})]})}var N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(v.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Tordano anonymity mining"}),Object(v.jsx)("div",{children:"To claim your rewards, please set up a mining account."}),Object(v.jsx)(y,{}),Object(v.jsx)("div",{children:"Connect with recovery key"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",flexGrow:"0"},children:[Object(v.jsx)(D,{bordRight:!0,title:"Use Tordano",info:"Deposit into and withdraw from ETH anonymity pools. Earn more AP the longer you stay in the pool."}),Object(v.jsx)(D,{bordRight:!0,title:"Claim rewards",info:"Accumulate Anonymity Points (AP) by submitting spent notes to the mining protocol."}),Object(v.jsx)(D,{title:"Swap AP to TORD",info:"Exchange Anonymity Points for TORD tokens to participate in Tordano governance."})]})]})}}]),n}(i.Component),A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={noteTxt:""},i.onChanged=i.onChanged.bind(Object(p.a)(i)),i}return Object(l.a)(n,[{key:"onChanged",value:function(e){this.setState({noteTxt:e.target.value})}},{key:"render",value:function(){var e=this.state.noteTxt;return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(v.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Compliance"}),Object(v.jsx)("div",{children:"Maintaining financial privacy is essential to preserving our freedoms."}),Object(v.jsx)("div",{children:"However, it should not come at the cost of non-compliance. With Tordano, you can always provide cryptographically verified proof of transactional history using the Ethereum address you used to deposit or withdraw funds. This might be necessary to show the origin of assets held in your withdrawal address."}),Object(v.jsx)("div",{children:"To generate a compliance report, please enter your Tordano Note below."}),Object(v.jsxs)("form",{style:{margin:"2vh 0",border:"1px solid green"},children:[Object(v.jsx)("div",{children:"Note"}),Object(v.jsx)("input",{type:"text",name:"noteInput",value:e,onChange:this.onChanged,placeholder:"Please enter your note",style:{color:"#d7dadc",backgroundColor:"#1a1a1a",border:"1px solid #1a1a1a",borderRadius:"2px",width:"98%"}})]})]})}}]),n}(i.Component);function I(e){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(v.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Voting"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"60%",border:"1px solid red"},children:[Object(v.jsx)("div",{children:"Available Balance"}),Object(v.jsx)("div",{children:"Manage"}),Object(v.jsx)("div",{children:"Voting Power"})]})]})}function R(e){return Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"5vh 20vw"},children:[Object(v.jsxs)("div",{style:{margin:"2vh 0"},children:[Object(v.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#0033ad"},children:"How to make a deposit"}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Choose a token."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Select amount to deposit."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click Deposit."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Backup the note."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click Send Deposit."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Confirm the transaction."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Wait until transaction is mined."})]}),Object(v.jsxs)("div",{style:{margin:"2vh 0"},children:[Object(v.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#0033ad"},children:"How to withdraw using a relayer"}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Enter your deposit's note."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Enter recipient address."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click Withdraw."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Wait until proof is generated."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click Withdraw."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Wait until transaction is mined."})]}),Object(v.jsxs)("div",{style:{margin:"2vh 0"},children:[Object(v.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#0033ad"},children:"How to withdraw with MetaMask"}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Enter your deposit's note."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click settings icon."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Choose Wallet option."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click Save button."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Enter recipient address."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Click Withdraw."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Wait until proof is generated."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Sign transaction."}),Object(v.jsx)("div",{style:{margin:"1vh 0"},children:"- Wait until transaction is mined."})]})]})}var W=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.date,n=e.info;return Object(v.jsxs)("div",{style:{margin:"10px 20px",padding:"10px 0",borderTop:"1px solid white"},children:[Object(v.jsx)("div",{children:t}),Object(v.jsx)("div",{children:n.map((function(e,t){return Object(v.jsxs)("div",{children:["- ",e]},t)}))})]})}}]),n}(i.Component);function P(e){return Object(v.jsxs)("div",{style:{margin:"0 20px"},children:[Object(v.jsx)("div",{style:{fontSize:"20px",fontFamily:"Open Sans",fontWeight:"bold"},children:"ChangeLog"}),Object(v.jsx)(W,{date:"05.29.2021",info:["Cleaned up a lot of code/comments","Refined tutorial","Refined home screen"]}),Object(v.jsx)(W,{date:"05.28.2021",info:["Figured out how to handle react-bootstrap dropdowns","Switch Home.js to React.Component","Abstracted token amount radio btns to Higher Order Component (HOC)","Cleaned up console warning messages.","Switched colors to #0033ad","Started working on cross deposit/withdraw and stats updating functionality"]}),Object(v.jsx)(W,{date:"05.27.2021",info:["Added dropdown to info with react-bootstrap","Added arrow to info nav","Started tutorial section","Refined airdrop section - should be done?","Started mining page, did refinement but need assets...","Started voting page","Started refining deposit/withdraw on homepage - still needs a lot of work, esp. functionally","Changed title and meta tags so that name is shown","Tried setting up client side ip fetching but doesn't work with recent cors browser changes, probably needs server side code"]})]})}var E=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(u,{}),Object(v.jsx)(a.a,{exact:!0,path:"/",render:function(e){return Object(v.jsx)(T,Object(s.a)({},e))}}),Object(v.jsx)(a.a,{path:"/airdrop",render:function(e){return Object(v.jsx)(S,Object(s.a)({},e))}}),Object(v.jsx)(a.a,{path:"/mining",render:function(e){return Object(v.jsx)(N,Object(s.a)({},e))}}),Object(v.jsx)(a.a,{path:"/governance",render:function(e){return Object(v.jsx)(I,Object(s.a)({},e))}}),Object(v.jsx)(a.a,{path:"/compliance",render:function(e){return Object(v.jsx)(A,Object(s.a)({},e))}}),Object(v.jsx)(a.a,{path:"/tutorial",render:function(e){return Object(v.jsx)(R,Object(s.a)({},e))}}),Object(v.jsx)(a.a,{path:"/stats",render:function(e){return Object(v.jsx)("div",{children:"stats"})}}),Object(v.jsx)(a.a,{path:"/changelog",render:function(e){return Object(v.jsx)(P,Object(s.a)({},e))}})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),o(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(b.a,{children:Object(v.jsx)(E,{})})}),document.getElementById("root")),z()}},[[61,1,2]]]);
//# sourceMappingURL=main.d7471b16.chunk.js.map