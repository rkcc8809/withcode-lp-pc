// "use strict";

// $(function(){
//     const tgtSelectors = ['.begin-wrap__con__box__above', '.begin-wrap__con__box__under', '.act-wrap__con__box__above', '.act-wrap__con__box__under'];
//     tgtSelectors.forEach(function(tgtSelector){
//         $(tgtSelector).matchHeight();
//     });
// });

"use strict";

$(function(){
    const tgtSelectors = ['.begin-wrap__con__box__above', '.begin-wrap__con__box__under', '.act-wrap__con__box__above', '.act-wrap__con__box__under'];
    
    setTimeout(function(){
        tgtSelectors.forEach(function(tgtSelector){
            $(tgtSelector).matchHeight();
        });
    }, 750);  // 750ミリ秒遅延させて高さ調整を実行
});
