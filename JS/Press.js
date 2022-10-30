window.addEventListener("DOMContentLoaded",function(){



    const para1=document.querySelector("#paragraph1")
    const para2=document.querySelector("#paragraph2")
    const para3=document.querySelector("#paragraph3")
    const para4=document.querySelector("#paragraph4")
    const loc1=document.getElementById("place1")
    const loc2=document.getElementById("place2")
    const loc3=document.getElementById("place3")
    const loc4=document.getElementById("place4")
    const prevbtn=document.querySelector("#prevId")
    const nextbtn=document.querySelector("#nextId")
    const head=document.getElementById("heading")
    const content=document.getElementById("content")
    const prevbtn1=document.querySelector("#prevId1")
    const nextbtn1=document.querySelector("#nextId1")



let data1=[
    {p1:"Meet the Man With a Plan to Build Greener Golf Communities",
    area1:"New York Times"},
    {p1:" Meet the Man With a Plan to Build.",
    area1:"India"},
    {p1:" Meet the Man With a Plan to Build.",
    area1:"US Times"}
]

let data2=[
    {p2:"Meet the Man With a Plan to Build Greener Golf Communities",
    area2:"Times Of India"},
    {p2:" Meet the Man With a Plan to Build.",
    area2:"Cannada Times"},
    {p2:"Document comprising of key-value pairs that are similar to JSON objects.",
    area2:"USA"}
]
let data3=[
    {p3:"Meet the Man With a Plan to Build Greener Golf Communities",
    area3:"Golf Today"},
    {p3:" Meet the Man With a Plan to Build.",
    area3:"Russia"},
    {p3:"Document comprising of key-value pairs that are similar to JSON objects.",
    area3:"California"}
]
let data4=[
    {p4:"Meet the Man With a Plan to Build Greener Golf Communities",
    area4:"Golf"},
    {p4:"Document comprising of key-value pairs that are similar to JSON objects.",area4:"Europe"},
    {p4:" Document comprising of key-value pairs that are similar to JSON objects.",
    area4:"Italy"}
]
let data=[
    {
        h:"Discoverys newest property in North Shore",
        cont:"The worlds most renowned courses architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our  trademark comfort stations also set new standards in  on-course amenities.This newly re-imagined,low density project is a secludedd and peaceful island."
    },  
    {
        h:"James island Discoverys newest property",
        cont:"We commission the worlds most renowned courses architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our  trademark comfort stations also set new standards in  on-course amenities.This newly re-imagined,low density project is a secludedd and peaceful island."
    },
    {
        h:"Costa terra Discoverys 21st property",
        cont:"We commission the worlds most renowned courses architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our  trademark comfort stations also set new standards in  on-course amenities.This newly re-imagined,low density project is a secludedd and peaceful island."
    },
    {
    h:"Taubadour to open Golf Course to Fall in 2019",
    cont:"We commission the worlds most renowned courses architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our  trademark comfort stations also set new standards in  on-course amenities.This newly re-imagined,low density project is a secludedd and peaceful island."
    }

]


let count=0
para1.innerHTML=data1[count].p1
para2.innerHTML=data2[count].p2
para3.innerHTML=data3[count].p3
para4.innerHTML=data4[count].p4
loc1.innerHTML=data1[count].area1
loc2.innerHTML=data2[count].area2
loc3.innerHTML=data3[count].area3
loc4.innerHTML=data4[count].area4
head.innerHTML=data[count].h
content.innerHTML=data[count].cont


prevbtn1.addEventListener("click",function(){

    console.log("clicked me1")
    if(count==0){
        count=3
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont

        


    }
    if(count>=0){
        count--
         
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont
    }




})



prevbtn.addEventListener("click",function(){

    console.log("clicked me")
    if(count==0){
        count=3

        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4
        


    }
    if(count>=0){
        count--
         
        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4

    }

})

nextbtn.addEventListener("click",function(){

    console.log("Clicked next btn")
    if(count==3){
        count=0
         
        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4


    }
    if(count<=3){
        count++
         
        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4

    }



})

nextbtn1.addEventListener("click",function(){

    console.log("Clicked next btn1")
    if(count==3){
        count=0
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont
         
        

    }
    if(count<=3){
        count++
         
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont

    }



})
})



