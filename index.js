var sayi1,sayi2,dogru=0,yanlis=0,sonuc,answer,opt;
 
//HTML nesnelerinin oluşturulması
sayi1=document.getElementById("sayi1");
sayi2=document.getElementById("sayi2");
opt=document.getElementById("opt");
sonuc=document.getElementById("sonuc");
answer=document.getElementById("answer");
dogru=document.getElementById("dogru");
yanlis=document.getElementById("yanlis");
 
//rastgele sayı üretme fonksiyonu

Math.rastgele=function(alt, ust){
let sayi=Math.random(); 
sayi=sayi*(ust-alt);
sayi=Math.floor(sayi)+alt;
 
return sayi; 
}
 
//oyun başladığında yada soru tahmin edildiğinde yeni soru sormak için kullanılır.
function yeniSoru(){
let islem=["+","-","*","/"];
opt.textContent=islem[Math.rastgele(0,4)]; //operatör seçimi
 
sayi1.textContent=Math.rastgele(0,50); 
sayi2.textContent=Math.rastgele(0,50);
if(opt.textContent=="/"){
//kalansız bölüm için eklenmiştir.
while(true){
sayi2.textContent=Math.rastgele(0,50);
if(sayi1.textContent%sayi2.textContent==0)
{break;}
}
}
 
}
 
//sayfa yüklendiğinde ilk kurulumun yapılması
window.onload=function(){
 
yeniSoru();
 
}
 
//answer butonuna basıldığında değerlendirme işlemi
answer.onclick=function(){
let cevap,s1,s2;
s1=Number(sayi1.textContent);
s2=Number(sayi2.textContent);
switch(opt.textContent){
case '+':cevap=s1+s2;break;
case "-":cevap=s1-s2;break;
case "*":cevap=s1*s2;break;
case "/":cevap=s1/s2;break;
default:break; 
}
 
if(sonuc.value==cevap){
dogru.textContent=Number(dogru.textContent)+1;
}
else{
yanlis.textContent=Number(yanlis.textContent)+1;
}
 
yeniSoru(); 
}
