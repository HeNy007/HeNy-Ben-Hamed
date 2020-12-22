$(document).ready(function () {
 var ua = navigator.userAgent.toLowerCase();
 var isAndroid = ua.indexOf("android") > - 1;
 if (isAndroid) {
 $("#is_mobile").html('');
 function show_modal_app() {
  Swal.fire({
 title: 'حمل تطبيقنا للبث المباشر  Aliwix TV    ',
 imageUrl: 'https://www.appcreator24.com/srv/imgs/gen/714329_ico.png?ts=1608111182',
 imageWidth: 130,
 imageHeight: 130,
 imageAlt: 'aliwix.ovh',
 showCancelButton: true,
 confirmButtonColor: '#3085d6',
 cancelButtonColor: '#d33',
 confirmButtonText: 'تحميل',
 cancelButtonText: 'لاحقا'
 }).then((result) => {
 if (result.value) {
 window.location.href = "https://www.mediafire.com/file/ghlo5t9899n5fe0/Aliwix+TV.apk/file";
 } else {
  }
 }
 )
 }
 show_modal_app();
 setInterval(show_modal_app, 600000);
 }
 });
 function update_frame(link)
 {
 $("#match_frame").attr("src", link);
 }
  jQuery(document).ready(function ($) {
 $('#newsTicker2').breakingNews({
 direction: 'rtl'
 });
 });        </script> 
 <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179029569-1"></script> 
 <script>
 window.dataLayer = window.dataLayer || [];
 function gtag() {
 dataLayer.push(arguments);
 }
 gtag('js', new Date());
 gtag('config', 'UA-179029569-1');
 setInterval(function () {
 window.dataLayer = window.dataLayer || [];
 function gtag() {
 dataLayer.push(arguments);
 }
 gtag('js', new Date());
 gtag('config', 'UA-179029569-1');
 }, 60000);        </script>  
 <a href="#top" id="toTop"></a> 
 <script type="text/javascript">
 //<![CDATA[
 // Adblock
 function downloadJSAtOnload(){var e = document.createElement("script"); e.src = "https://cdn.rawgit.com/Abdo-Hegazi/wdbloog/6bdae011/wdbloogablock.js", document.body.appendChild(e)}window.addEventListener?window.addEventListener("load", downloadJSAtOnload, !1):window.attachEvent?window.attachEvent("onload", downloadJSAtOnload):window.onload = downloadJSAtOnload;
 //]]>
