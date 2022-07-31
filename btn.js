'use strict';
// ハンバーガーメニュー設定
$(function(){
    $('#open_nav').click(function(){
    $(this).next('#nav').slideToggle();
    });
});

