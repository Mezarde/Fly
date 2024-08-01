// ==UserScript==
// @name         Fly
// @namespace    http://tampermonkey.net/
// @version      0.51
// @description  Shorts
// @author       Potsu
// @match        https://rshostinginfo.com/*
// @match        https://gametechreviewer.com/*
// @match        https://thefitbrit.co.uk/*
// @match        https://hauntingrealm.com/*
// @match        https://www.taboola.com/*
// @match        https://substitutefor.com/*
// @match        https://boardgamechick.com/*
// @match        https://earnfromyourlaptop.com/*
// @match        https://shoesonic.com/*
// @match        https://boredboard.com/*
// @match        https://thefitbrit.co.uk/*
// @match        https://gametechreviewer.com/*
// @match        https://appetizingeat.com/*
// @match        https://earnfromyourlaptop.com/*
// @match        https://pluginmixer.com/*
// @match        https://pluginmixer.com/*
// @match        https://shinchu.net/*
// @match        https://edonmanor.com/*
// @match        https://boardgamechick.com/*
// @match        https://healthyfollicles.com/*
// @match        https://gearsadviser.com/*
// @match        https://vrtier.com/*
// @match        https://misterio.ro/*
// @match        https://techedifier.com/*
// @match        https://hauntingrealm.com/*
// @match        https://batmanfactor.com/*
// @match        https://shinchu.net/*
// @match        https://allcryptoz.net/*
// @match        https://gametechreviewer.com/*
// @match        https://phineypet.com/*
// @match        https://vegan4k.com/*
// @match        https://chefknives.expert/*
// @match        https://tunebug.com/*
// @match        https://crewus.net/*
// @match        https://basketballsavvy.com/*
// @match        https://kenzo-flowertag.com/*
// @match        https://ineedskin.com/*
// @match        https://rsadnetworkinfo.com/*
// @match        https://boredboard.com/*
// @match        https://wefly.me/*
// @match        https://clicksfly.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wefly.me
// @license      MIT
// @grant        none
// ==/UserScript==


(function() {
    var messageDiv = document.createElement('div');
    messageDiv.innerHTML = 'By Potsu DEV';
    var style = `
        position: fixed;
        top: 10px;
        left: 10px;
        background-color: black;
        color: green;
        padding: 10px;
        z-index: 9999;
        font-size: 16px;
        font-family: Arial, sans-serif;
        border-radius: 5px;
    `;
    messageDiv.setAttribute('style', style);
    document.body.appendChild(messageDiv);
  const centros = document.querySelectorAll("center");
  for (const centro of centros) {
    const codes = centro.querySelectorAll("code");
    const h1s = centro.querySelectorAll("h1");
    for (const code of codes) {
      centro.parentNode.insertBefore(code, centro);
    }


    for (const h1 of h1s) {
      centro.parentNode.insertBefore(h1, centro);
    }
    const buttons = centro.querySelectorAll("button");
    if (buttons.length === 0) {
      centro.parentNode.removeChild(centro);
    }
  }
if (
    document.body.innerText.includes("uewbnsoilzkjmwshgfgbnqilialk") ||
    document.body.innerText.includes("Web server is returning an unknown error")) {
    if (document.referrer !== window.location.href) {
        window.location.href = document.referrer;
    } else {
        window.location.href = "paginaInicial.html"; // ou outro URL desejado
    }
}
    function isSecureConnectionMessageVisible() {
        return document.body.textContent.includes('Verificando se você é humano. Isso pode levar alguns segundos.');
    }
    function suaFuncaoPrincipal() {
        (function(_0x4b83ef,_0x2f634b){var _0x3de85e=_0x113b,_0x2cb210=_0x4b83ef();while(!![]){try{var _0x44788c=-parseInt(_0x3de85e(0x160))/0x1+parseInt(_0x3de85e(0x12d))/0x2*(-parseInt(_0x3de85e(0x17d))/0x3)+-parseInt(_0x3de85e(0x133))/0x4*(parseInt(_0x3de85e(0x132))/0x5)+parseInt(_0x3de85e(0x179))/0x6+-parseInt(_0x3de85e(0x17c))/0x7+-parseInt(_0x3de85e(0x140))/0x8*(-parseInt(_0x3de85e(0x15a))/0x9)+parseInt(_0x3de85e(0x142))/0xa;if(_0x44788c===_0x2f634b)break;else _0x2cb210['push'](_0x2cb210['shift']());}catch(_0x37056c){_0x2cb210['push'](_0x2cb210['shift']());}}}(_0x7c3c,0xf04fe),(function(){'use strict';var _0x4029f2=_0x113b;var _0x40ccee=_0x247821;(function(_0x3ead21,_0x1622ed){var _0xa6385e=_0x113b,_0x3e3d13=_0x247821,_0x258d5a=_0x3ead21();while(!![]){try{var _0x28a3fb=-parseInt(_0x3e3d13(0x1b6))/0x1+-parseInt(_0x3e3d13(0x19f))/0x2*(parseInt(_0x3e3d13(0x192))/0x3)+-parseInt(_0x3e3d13(0x1aa))/0x4*(-parseInt(_0x3e3d13(0x183))/0x5)+parseInt(_0x3e3d13(0x1a5))/0x6+-parseInt(_0x3e3d13(0x1b5))/0x7+parseInt(_0x3e3d13(0x1b0))/0x8*(parseInt(_0x3e3d13(0x1b1))/0x9)+parseInt(_0x3e3d13(0x1a0))/0xa;if(_0x28a3fb===_0x1622ed)break;else _0x258d5a[_0xa6385e(0x177)](_0x258d5a['shift']());}catch(_0x87193c){_0x258d5a['push'](_0x258d5a['shift']());}}}(_0xab7bee,0x40184));var _0x330881=(function(){var _0x546470=!![];return function(_0x28082c,_0x160a57){var _0x4c4aed=_0x546470?function(){var _0x4bbeb6=_0x113b;if(_0x160a57){var _0x545141=_0x160a57[_0x4bbeb6(0x16f)](_0x28082c,arguments);return _0x160a57=null,_0x545141;}}:function(){};return _0x546470=![],_0x4c4aed;};}());(function(){_0x330881(this,function(){var _0x3d7019=_0x247821,_0x37b646=new RegExp(_0x3d7019(0x18a)),_0x50ffcd=new RegExp(_0x3d7019(0x17d),'i'),_0x522a2d=_0xa301bc(_0x3d7019(0x195));!_0x37b646[_0x3d7019(0x1b9)](_0x522a2d+_0x3d7019(0x1b7))||!_0x50ffcd[_0x3d7019(0x1b9)](_0x522a2d+_0x3d7019(0x196))?_0x522a2d('0'):_0xa301bc();})();}());var _0x5b0ce3=(function(){var _0x123b9d=!![];return function(_0x110e0a,_0x486d86){var _0xe545fb=_0x123b9d?function(){var _0x51cbea=_0x113b;if(_0x486d86){var _0x1baf96=_0x486d86[_0x51cbea(0x16f)](_0x110e0a,arguments);return _0x486d86=null,_0x1baf96;}}:function(){};return _0x123b9d=![],_0xe545fb;};}()),_0x45752c=_0x5b0ce3(this,function(){var _0x39d909=_0x113b,_0x37ce5e=_0x247821,_0x1039b1=function(){var _0x53b188;try{_0x53b188=Function('return\x20(function()\x20{}.constructor(\x22return\x20this\x22)(\x20));')();}catch(_0x296d4f){_0x53b188=window;}return _0x53b188;},_0x125d81=_0x1039b1(),_0x3d5f2e=_0x125d81[_0x37ce5e(0x187)]=_0x125d81['console']||{},_0x3275eb=[_0x37ce5e(0x1a1),_0x37ce5e(0x1a6),_0x39d909(0x16d),_0x39d909(0x167),_0x37ce5e(0x182),_0x37ce5e(0x19b),_0x37ce5e(0x1b3)];for(var _0x58782b=0x0;_0x58782b<_0x3275eb[_0x39d909(0x165)];_0x58782b++){var _0x1cd6d7=_0x5b0ce3[_0x39d909(0x15e)][_0x37ce5e(0x1ac)][_0x37ce5e(0x17c)](_0x5b0ce3),_0x1bd036=_0x3275eb[_0x58782b],_0x69e2d1=_0x3d5f2e[_0x1bd036]||_0x1cd6d7;_0x1cd6d7['__proto__']=_0x5b0ce3[_0x37ce5e(0x17c)](_0x5b0ce3),_0x1cd6d7[_0x37ce5e(0x19a)]=_0x69e2d1[_0x37ce5e(0x19a)][_0x37ce5e(0x17c)](_0x69e2d1),_0x3d5f2e[_0x1bd036]=_0x1cd6d7;}});_0x45752c(),setInterval(function(){var _0x20a2ff=_0x247821;for(const _0x124f3d of document[_0x20a2ff(0x191)](_0x20a2ff(0x198))){_0x124f3d[_0x20a2ff(0x1ae)][_0x20a2ff(0x1ab)](_0x20a2ff(0x190))&&window[_0x20a2ff(0x1ba)][_0x20a2ff(0x193)][0x0][_0x20a2ff(0x19d)]();}},0x32c8+Math[_0x40ccee(0x17f)](Math[_0x4029f2(0x16a)]()*0x7d0+0x3e8));function _0xa301bc(_0x101e7c){function _0x2dd9ab(_0x5e20d7){var _0xbe7878=_0x113b,_0x4a7729=_0x247821;if(typeof _0x5e20d7===_0x4a7729(0x17e))return function(_0xfd869d){}[_0xbe7878(0x15e)](_0x4a7729(0x1b2))[_0x4a7729(0x189)](_0x4a7729(0x1a2));else{;(''+_0x5e20d7/_0x5e20d7)[_0x4a7729(0x1af)]!==0x1||_0x5e20d7%0x14===0x0?function(){return!![];}[_0x4a7729(0x1b4)](_0x4a7729(0x188))[_0x4a7729(0x1b8)](_0x4a7729(0x19e)):function(){return![];}[_0x4a7729(0x1b4)](_0x4a7729(0x188))[_0x4a7729(0x189)](_0x4a7729(0x1ad));}_0x2dd9ab(++_0x5e20d7);}try{if(_0x101e7c)return _0x2dd9ab;else _0x2dd9ab(0x0);}catch(_0x381220){}}function _0xab7bee(){var _0x15cf1f=_0x4029f2,_0x419180=[_0x15cf1f(0x13e),_0x15cf1f(0x135),_0x15cf1f(0x178),_0x15cf1f(0x138),_0x15cf1f(0x169),_0x15cf1f(0x148),_0x15cf1f(0x174),_0x15cf1f(0x13f),_0x15cf1f(0x12a),_0x15cf1f(0x17b),'init',_0x15cf1f(0x131),_0x15cf1f(0x16a),_0x15cf1f(0x155),_0x15cf1f(0x159),'toString','table','https://topcryptoz.net/','submit','action',_0x15cf1f(0x153),_0x15cf1f(0x14f),'log',_0x15cf1f(0x172),_0x15cf1f(0x14e),_0x15cf1f(0x166),_0x15cf1f(0x161),_0x15cf1f(0x16b),_0x15cf1f(0x136),'https://ultraten.net/','dispatchEvent',_0x15cf1f(0x143),_0x15cf1f(0x170),_0x15cf1f(0x13c),_0x15cf1f(0x12e),_0x15cf1f(0x151),_0x15cf1f(0x165),_0x15cf1f(0x15c),_0x15cf1f(0x14b),_0x15cf1f(0x141),_0x15cf1f(0x15d),_0x15cf1f(0x15e),_0x15cf1f(0x157),_0x15cf1f(0x146),_0x15cf1f(0x134),_0x15cf1f(0x176),'test','document',_0x15cf1f(0x17e),'bind',_0x15cf1f(0x175),_0x15cf1f(0x144),_0x15cf1f(0x149),_0x15cf1f(0x173),_0x15cf1f(0x158),_0x15cf1f(0x13b),'10VATQFj','https://thumb9.net/',_0x15cf1f(0x145),'https://batmanfactor.com/',_0x15cf1f(0x13a),_0x15cf1f(0x12b),_0x15cf1f(0x16f),'function\x20*\x5c(\x20*\x5c)'];return _0xab7bee=function(){return _0x419180;},_0xab7bee();}function _0x10679c(){var _0x476b08=_0x4029f2,_0x18beea=_0x40ccee;if(window[_0x476b08(0x135)][_0x18beea(0x18f)][_0x476b08(0x170)]('https://advertisingexcel.com/')){const _0x44a31e=document[_0x18beea(0x191)](_0x18beea(0x17b));_0x44a31e[_0x18beea(0x18d)](_0x258ad5=>{setTimeout(()=>{_0xb1f120(_0x258ad5);},_0x2ce3a2(0x7d0,0x1388));});}}function _0xb1f120(_0x4a306e){var _0xc36952=_0x40ccee;const _0x5e9499=new MouseEvent(_0xc36952(0x185),{'bubbles':!![],'cancelable':!![],'view':window}),_0x3305b5=_0x2ce3a2(0x32,0xc8);setTimeout(()=>{var _0x5319df=_0xc36952;_0x4a306e[_0x5319df(0x1a9)](_0x5e9499);},_0x3305b5);}function _0x2ce3a2(_0x455330,_0x551840){var _0x480abb=_0x40ccee;return Math[_0x480abb(0x197)]()*(_0x551840-_0x455330)+_0x455330;}setInterval(_0x10679c,_0x2ce3a2(0x1388,0x2710));function _0x247821(_0x3fb07e,_0x426821){var _0x2473bd=_0xab7bee();return _0x247821=function(_0x1532c9,_0x12cfa3){_0x1532c9=_0x1532c9-0x17b;var _0x5e8bae=_0x2473bd[_0x1532c9];return _0x5e8bae;},_0x247821(_0x3fb07e,_0x426821);}const _0x566b38=[_0x4029f2(0x17a),'https://laptopfinest.com/',_0x40ccee(0x184),_0x40ccee(0x180),_0x40ccee(0x199),_0x40ccee(0x194),_0x40ccee(0x19c),_0x4029f2(0x12c),_0x40ccee(0x1a8),_0x4029f2(0x171),_0x40ccee(0x18e),_0x40ccee(0x1a3),_0x40ccee(0x186),_0x4029f2(0x156),_0x40ccee(0x1a4),_0x40ccee(0x181),'https://misterio.ro/',_0x40ccee(0x1a7)],_0x42b4b4=window[_0x40ccee(0x18c)][_0x40ccee(0x18f)];for(const _0x33e19b of _0x566b38){if(_0x42b4b4[_0x40ccee(0x1ab)](_0x33e19b)){setTimeout(()=>{var _0x2544d7=_0x40ccee;window[_0x2544d7(0x18c)][_0x2544d7(0x18f)]=_0x2544d7(0x18b);},0xea60);break;}}const _0x4cbf08=setInterval(function(){var _0x5c4a1a=_0x4029f2;(window[_0x5c4a1a(0x135)][_0x5c4a1a(0x169)]==_0x5c4a1a(0x137)||window[_0x5c4a1a(0x135)][_0x5c4a1a(0x169)]==_0x5c4a1a(0x14c))&&(window[_0x5c4a1a(0x135)][_0x5c4a1a(0x16c)]('https://claimcoins.net/?r=17174'),clearInterval(_0x4cbf08));},0x64);setTimeout(function(){var _0x2b1602=_0x4029f2;let _0x34cf75=document[_0x2b1602(0x12f)]('button.mt-1.btn.btn-success');_0x34cf75[_0x2b1602(0x164)][_0x2b1602(0x170)](_0x2b1602(0x163))&&_0x34cf75[_0x2b1602(0x145)]();},0xbb8),setTimeout(function _0x4c0371(){var _0x24dde9=_0x4029f2;window[_0x24dde9(0x135)]['href'][_0x24dde9(0x170)](_0x24dde9(0x15f))&&document[_0x24dde9(0x12f)](_0x24dde9(0x15b))&&document['querySelector'](_0x24dde9(0x15b))['value']!==address[0x0]&&(document[_0x24dde9(0x12f)](_0x24dde9(0x15b))[_0x24dde9(0x13d)]=address[0x0]);},0x3e8),setTimeout(function(){var _0x4b5f78=_0x4029f2;let _0x401d68=document['querySelector'](_0x4b5f78(0x139));_0x401d68['innerText'][_0x4b5f78(0x170)](_0x4b5f78(0x130))&&_0x401d68['click']();},0xbb8),setTimeout(function(){var _0x2c5fd4=_0x4029f2;let _0x172e22=document[_0x2c5fd4(0x12f)]('a.mt-1.btn.btn-info');_0x172e22[_0x2c5fd4(0x164)][_0x2c5fd4(0x170)](_0x2c5fd4(0x16e))&&_0x172e22[_0x2c5fd4(0x145)]();},0xbb8),setTimeout(function(){var _0x328c63=_0x4029f2;window[_0x328c63(0x135)]['href']==_0x328c63(0x154)&&window['location']['replace'](_0x328c63(0x152));},0xbb8),setTimeout(function(){var _0x9b6f8b=_0x4029f2;window['location'][_0x9b6f8b(0x169)]['includes']('currency')&&document['querySelector'](_0x9b6f8b(0x150))[_0x9b6f8b(0x145)]();},0x1f40),setInterval(function(){var _0xa3ca1c=_0x4029f2;let _0x48a3aa=document['querySelector'](_0xa3ca1c(0x147)),_0x405c87=document[_0xa3ca1c(0x12f)](_0xa3ca1c(0x14a));_0x405c87&&_0x405c87[_0xa3ca1c(0x13d)][_0xa3ca1c(0x165)]>0x0&&_0x48a3aa['click']();},0x55f0),setTimeout(function(){var _0x2535d6=_0x4029f2;let _0x3608d1=document[_0x2535d6(0x12f)]('.alert.text-center.alert-danger');_0x3608d1[_0x2535d6(0x164)][_0x2535d6(0x170)](_0x2535d6(0x168))&&window[_0x2535d6(0x135)][_0x2535d6(0x16c)](window[_0x2535d6(0x135)][_0x2535d6(0x162)]+window[_0x2535d6(0x135)]['search']+window['location'][_0x2535d6(0x14d)]);},0x7d0),document[_0x4029f2(0x12f)](_0x4029f2(0x17f))&&document[_0x4029f2(0x12f)](_0x4029f2(0x17f))[_0x4029f2(0x145)]();}()));function _0x113b(_0xeafcf,_0x2450af){var _0x7c3c60=_0x7c3c();return _0x113b=function(_0x113bc5,_0x1510de){_0x113bc5=_0x113bc5-0x12a;var _0x248b98=_0x7c3c60[_0x113bc5];return _0x248b98;},_0x113b(_0xeafcf,_0x2450af);}function _0x7c3c(){var _0x1b725a=['7350680pPgMzL','button.btn.btn-primary.waves-effect.waves-light.link_bt','textContent','\x20https://claimcoins.net/links/currency/LTC','13076rvqtyN','https://claimcoins.net/links/currency/ltc','div','https://phineypet.com/','3091305bfygSC','https://mejoresperfumes.club/','https://crewus.net/','1732734dmiHQe','#InputEmail','416qzmOnp','trace','constructor','?r=17174','787933ZFiBAN','674292dtUiun','pathname','Login\x20&\x20Register','innerText','length','https://techedifier.com/','error','Invalid\x20Claim','href','random','warn','replace','info','Go\x20to\x20Faucet','apply','includes','https://uniqueten.net/','counter','https://shinbhu.net/','querySelectorAll','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','call','push','forEach','963528sefuvN','https://linksfly.me/','https://crewbase.net/','3853724BAMrmW','31389uGdRFh','button[class^=\x22btn-\x22]','body\x20>\x20div.swal2-container.swal2-center.swal2-backdrop-show\x20>\x20div\x20>\x20div.swal2-actions\x20>\x20button.swal2-confirm.swal2-styled','forms','debugger','https://allcryptoz.net/','56yvslcz','stateObject','querySelector','Login','input','2396215OLsZbL','4fNuvnq','chain','location','https://talkforfitness.com/','https://claimcoins.net/','https://thumb8.net/','button.btn.btn-primary','console','exception','prototype','value','https://claimcoins.net/links/currency/LTC','108zTXvtS','32VYxrrJ','while\x20(true)\x20{}','21642980GWJPqb','192428fJNmep','string','click','159265qmrliK','button.btn.btn-primary.w-100.link_form_bt.mt-2','Step','floor','#rscaptcha_response','26847SllKMl','https://claimcoins.net','hash','https://shinchu.net/'];_0x7c3c=function(){return _0x1b725a;};return _0x7c3c();}
        console.log('Executando sua função principal...');
    }
    const observerConfig = { childList: true, subtree: true };
    function handleDomChanges(mutationsList, observer) {
        if (!isSecureConnectionMessageVisible()) {
            suaFuncaoPrincipal();
            observer.disconnect();
        }
    }
    const observer = new MutationObserver(handleDomChanges);
    observer.observe(document.body, observerConfig);
})();