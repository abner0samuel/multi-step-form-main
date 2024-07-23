document.addEventListener("DOMContentLoaded", startapp());
function startapp() {
    overapp()
    nextapp()
    checkapp()
    media()
    on_off()
}
function on_off(){
    let check =  document.querySelectorAll(".container > .root > .Step3 > .root > .row > .row1 > input").forEach(c=>{
        c.addEventListener("click",()=>{
            c.parentNode.parentNode.style.backgroundColor = "var(--Magnolia)"
            c.parentNode.parentNode.style.border ="1px solid  var(--Purplish-blue)"

        })
    })
    let btn = document.querySelector(".container > .root > .Step2 > .root > .btns")
    btn.addEventListener("click",()=>{
        let mbtn = document.querySelector(".container > .root > .Step2 > .root > .btns > .mbtn")
        console.log("dbclick");
        let monthly = document.querySelector(".container > .root > .Step2 > .root > .text")
        let year = document.querySelector(".container > .root > .Step2 > .root > .y_text")

        let price = document.querySelector(".container > .root > .Step2 > .Step2_container .container1 > .text > .arcade")
        let price1 = document.querySelector(".container > .root > .Step2 > .Step2_container .container1 > .text > .advanced")
        let price2 = document.querySelector(".container > .root > .Step2 > .Step2_container .container1 > .text > .pro")
        let S3_price1 = document.querySelector(".container > .root > .Step3 > .root > .row > .price1");
        let S3_price2 = document.querySelector(".container > .root > .Step3 > .root > .row > .price2");
        let S3_price3 = document.querySelector(".container > .root > .Step3 > .root > .row > .price3");
        let s4_price1 = document.querySelector(".container > .root > .Step4 > .root > .row > .price1");
        let s4_price2 = document.querySelector(".container > .root > .Step4 > .root > .row > .price2");
        let s4_price3 = document.querySelector(".container > .root > .Step4 > .root > .row > .price3");
        let total = document.querySelector(".container > .root > .Step4 > .root > .total>.price");
        if(btn.style.justifyContent === "flex-start"){
            price.innerText = "$90/yr"
            price1.innerText = "$120/yr"
            price2.innerText = "$150/yr"
            S3_price1.innerText = "+$10/yr"
            S3_price2.innerText = "+$20/yr"
            S3_price3.innerText ="+$20/yr"
            s4_price1.innerText = "$90/yr"
            s4_price2.innerText = "+$10/yr"
            s4_price3.innerText = "+$20/yr"
            total.innerText = "+$120/yr"
            btn.style.justifyContent = "flex-end"
            year.style.color = "var(--Marine-blue)"
            monthly.style.color ="var(--Cool-gray)"
            let mon = document.querySelectorAll(".container > .root > .Step2 > .Step2_container .container1 > .text > .mon").forEach(m=>{
                m.style.display = "block"
            })
        
        }else{
            s4_price1.innerText = "$9/mo"
            s4_price2.innerText = "+$1/mo"
            s4_price3.innerText = "+$2.mo"
            price.innerText = "$9/mo"
            price1.innerText = "$12/mo"
            price2.innerText = "$15/mo"
            S3_price1.innerText = "+$1/mo"
            S3_price2.innerText = "+$2/mo"
            S3_price3.innerText ="+$2/mo"
            total.innerText = "+$12/mo"
            btn.style.justifyContent = "flex-start"
            year.style.color = "var(--Cool-gray)"
            monthly.style.color = "var(--Marine-blue)"
            let mon = document.querySelectorAll(".container > .root > .Step2 > .Step2_container .container1 > .text > .mon").forEach(m=>{
                m.style.display = "none"
            })
        }
     
    })
}
function media(){
    let side = document.querySelector(".container> .sidebar> .sidesvg");
    let body = document.querySelector(".container")
if(body.offsetwidth === "100%"){
console.log("1");
    side.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="172" viewBox="0 0 375 172"><defs><path id="a" d="M0 0h375v172H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use xlink:href="#a" fill="#483EFF"/><g mask="url(#b)"><g transform="translate(-151.029 -133.957)"><path fill="#6259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"/><ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373"/><path fill="#F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"/><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5"><path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"/></g></g></g></g></svg>`
}else if(body.offsetwidth === "800px"){
    console.log("2");
    side.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568"><rect width="274" height="568" fill="#483EFF" rx="10"/><mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><rect width="274" height="568" fill="#fff" rx="10"/></mask><g mask="url(#a)"><path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g></svg>`
}
  
    let container =document.querySelector(".container")

    // if(container.style.flexDirection === "column"){
      
        
    //     side.innerHTML=`
    //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="172" viewBox="0 0 375 172"><defs><path id="a" d="M0 0h375v172H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use xlink:href="#a" fill="#483EFF"/><g mask="url(#b)"><g transform="translate(-151.029 -133.957)"><path fill="#6259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"/><ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373"/><path fill="#F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"/><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5"><path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"/></g></g></g></g></svg>`
    // }else{
    //     let side = document.querySelector(".container> .sidebar> .sidesvg");
     
    //     side.innerHTML = ` <svg class="destop" xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none"
    //     viewBox="0 0 274 568">
    //     <rect width="274" height="568" fill="#483EFF" rx="10" />
    //     <mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
    //       <rect width="274" height="568" fill="#fff" rx="10" />
    //     </mask>
    //     <g mask="url(#a)">
    //       <path fill="#6259FF" fill-rule="evenodd"
    //         d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
    //         clip-rule="evenodd" />
    //       <path fill="#F9818E" fill-rule="evenodd"
    //         d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
    //         clip-rule="evenodd" />
    //       <path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5"
    //         d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798" />
    //       <path fill="#FFAF7E"
    //         d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z" />
    //     </g>
    //   </svg>`
    // }
}
function checkapp() {
    let container = document.querySelector(".container> .sidebar");
    let container2 = document.querySelector(".container> .sidebar");
    let svg = document.querySelector(".container> .sidebar > .destop");
    if (container.style.width === "100%") {
        container2.removeChild(svg)
    }
}
function overapp() {
    let root = document.querySelectorAll(".container > .root >  .Step4 > .root > .row").forEach(e => {
        e.addEventListener("mouseover", () => {
            let change = document.querySelectorAll(".container > .root > .Step4 > .root > .row > .text > .name").forEach(c => {
                e.style.bordeBottomLeftRadius = "0px"
                e.style.bordeBottomReightRadius = "0px"
                e.style.borderBottom = "1px solid var(--Marine-blue)"
                e.style.cursor = "pointer"
                if (c.parentNode.parentNode == e) {
                    c.style.color = " var(--Marine-blue)"
                    c.style.fontSize = "15px"
                    c.style.display = "flex"
                    c.style.fontWeight = "bolder"
                }
            })
            let span = document.querySelectorAll(".container > .root > .Step4 > .root > .row > .text > .name> span").forEach(s => {
                if (s.parentNode.parentNode.parentNode == e) {
                    s.style.display = "block"
                }
            })
            let price = document.querySelectorAll(".container > .root > .Step4 > .root > .row>.price").forEach(p => {
                if (p.parentNode == e) {
                    p.style.fontSize = "15px"
                    p.style.fontWeight = "bolder"
                }
            })
            let chan = document.querySelectorAll(".container > .root > .Step4 > .root > .row > .text > .change").forEach(ch => {
                if (ch.parentNode.parentNode == e) {
                    ch.style.display = "block"
                }
            })
        })
        e.addEventListener("mouseout", () => {
            let change = document.querySelectorAll(".container > .root > .Step4 > .root > .row > .text > .name").forEach(c => {
                e.style.backgroundColor = "var(--Light-blue)"
                e.style.borderBottom = "none"
                e.style.cursor = "pointer"
                if (c.parentNode.parentNode == e) {
                    c.style.color = " var(--Cool-gray)"
                    c.style.fontSize = "12px"
                    c.style.fontWeight = "700"
                }
            })
            let span = document.querySelectorAll(".container > .root > .Step4 > .root > .row > .text > .name> span").forEach(s => {
                if (s.parentNode.parentNode.parentNode == e) {
                    s.style.display = "none"
                }
            })
            let price = document.querySelectorAll(".container > .root > .Step4 > .root > .row>.price").forEach(p => {
                if (p.parentNode == e) {
                    p.style.fontSize = "12px"
                    p.style.fontWeight = "lighter"
                }
            })
            let chan = document.querySelectorAll(".container > .root > .Step4 > .root > .row > .text > .change").forEach(ch => {
                if (ch.parentNode.parentNode == e) {
                    ch.style.display = "none"
                }
            })
        })
    })


}
function nextapp() {
    let number1 = document.querySelector(".container> .sidebar> .steps >.step > .number1")
    let nextbtn1 = document.querySelector(".container > .root > .Step1 > input");
    let nextbtn2 = document.querySelector(".container > .root > .Step2 > .btns > .next_step");
    let nextbtn3 = document.querySelector(".container > .root > .Step3 > .btns > .next_step");
    let nextbtn4 = document.querySelector(".container > .root > .Step4 > .btns > .confirm");

    number1.style.border = " 2px solid var(--Light-blue)"
    number1.style.color = "var(--Marine-blue)"
    nextbtn1.addEventListener("click", () => { error() });
    function error() {
        let input3 = document.querySelector(".container > .root > .Step1 >div >  #number")
        let input = document.querySelectorAll(".container > .root > .Step1 > div > input").forEach(ip => {
            svgfun()
            if (ip.value != "" && ip.value != " " && ip.value != undefined) {
                let input2 = document.querySelector(".container > .root >  .Step1 > div > #email")
                if (input2.value.includes("@") && input2.value.includes(".com")) {
                    if(input2.value.includes(" ")){
                        let span = document.querySelector(".container > .root > .Step1 > div > .text > #emailError")
                    span.style.display = "block"
                    span.innerText = "your email is not valid"
                    input2.style.border = "1px solid var(--Strawberry-red)"
                    }else{
                        if (input3.value.length >= 10) {
                            let div1 = document.querySelector(".container > .root > .Step2");
                            let div = document.querySelector(".container > .root > .Step1");
                            let number1 = document.querySelector(".container> .sidebar> .steps >.step > .number1")
                            let number2 = document.querySelector(".container> .sidebar> .steps >.step > .number2")
                            number1.style.color = "var(--White)"
                            number1.style.border = " 2px solid  var(--White)"
                            number2.style.border = " 2px solid var(---Light-blue)"
                            number2.style.color = "var(--Marine-blue)"
                            number1.classList.toggle("active")
                            number2.classList.toggle("active")
                            div.style.display = "none"
                            div1.style.display = "grid"
                        } else {
                            let span = document.querySelector(".container > .root > .Step1 > div > .text > #numberError")
                            span.style.display = "block"
                            span.innerText = "your phone number much be 11 digit or more"
                            input3.style.border = "1px solid var(--Strawberry-red)"
                        }
                    }
                } else {
                    let span = document.querySelector(".container > .root > .Step1 > div > .text > #emailError")
                    span.style.display = "block"
                    span.innerText = "your email is not valid"
                    input2.style.border = "1px solid var(--Strawberry-red)"
                }
            } else {
                let span = document.querySelectorAll(".container > .root > .Step1 > div > .text > span").forEach(sp => {
                    sp.style.display = "block"
                })
                ip.style.border = "1px solid var(--Strawberry-red)"
            }
        })
    }
    nextbtn2.addEventListener("click", () => {
        let div1 = document.querySelector(".container > .root > .Step3");
        let div = document.querySelector(".container > .root > .Step2");
        let number3 = document.querySelector(".container> .sidebar> .steps >.step > .number3")
        number3.classList.toggle("active")
        let number2 = document.querySelector(".container> .sidebar> .steps >.step > .number2")
        number2.classList.toggle("active")
        number2.style.border = " 2px solid var(--White)"
        number2.style.color = "var(--White)"
        number3.style.border = " 2px solid var(--Light-blue)"
        number3.style.color = "var(--Marine-blue)"
        div.style.display = "none"
        div1.style.display = "grid"
    });
    nextbtn3.addEventListener("click", () => {
        let div1 = document.querySelector(".container > .root > .Step4");
        let div = document.querySelector(".container > .root > .Step3");
        let number4 = document.querySelector(".container> .sidebar> .steps >.step > .number4")
        number4.classList.toggle("active")
        let number3 = document.querySelector(".container> .sidebar> .steps >.step > .number3")
        number3.classList.toggle("active")
        number3.style.border = " 2px solid var(--White)"
        number3.style.color = "var(--White)"
        number4.style.border = " 2px solid var(--Light-blue)"
        number4.style.color = "var(--Marine-blue)"
        div.style.display = "none"
        div1.style.display = "grid"
    });
    nextbtn4.addEventListener("click", () => {
        let div1 = document.querySelector(".container > .root > .step5 ");
        let div = document.querySelector(".container > .root > .Step4");
        div.style.display = "none"
        div1.style.display = "grid"
    });
    let goBackbtn2 = document.querySelector(".container > .root > .Step2 > .btns > .go_back");
    let goBackbtn3 = document.querySelector(".container > .root > .Step3 > .btns > .go_back");
    let goBackbtn4 = document.querySelector(".container > .root > .Step4 > .btns > .go_back");
    goBackbtn2.addEventListener("click", () => {

        let div1 = document.querySelector(".container > .root > .Step1");
        let div = document.querySelector(".container > .root > .Step2");
        let number1 = document.querySelector(".container> .sidebar> .steps >.step > .number1")
        let number2 = document.querySelector(".container> .sidebar> .steps >.step > .number2")
        number1.style.color = "var(--Marine-blue)"
        number1.style.border = " 2px solid  var(--Light-blue)"
        number2.style.border = " 2px solid var(--White)"
        number2.style.color = "var(--White)"

        // number1.removeChild("active")
        number1.classList.toggle("active")
        number2.classList.toggle("active")
        div.style.display = "none"
        div.style.display = "none"
        div1.style.display = "grid"
    });
    goBackbtn3.addEventListener("click", () => {
        let div1 = document.querySelector(".container > .root > .Step2");
        let div = document.querySelector(".container > .root > .Step3");
        let number2 = document.querySelector(".container> .sidebar> .steps >.step > .number2")
        let number3 = document.querySelector(".container> .sidebar> .steps >.step > .number3")
        number2.style.color = "var(--Marine-blue)"
        number2.style.border = " 2px solid  var(--Light-blue)"
        number3.style.border = " 2px solid var(--White)"
        number3.style.color = "var(--White)"
        number2.classList.toggle("active")
        number3.classList.toggle("active")
        div.style.display = "none"
        div.style.display = "none"
        div1.style.display = "grid"
    });
    goBackbtn4.addEventListener("click", () => {
        let div1 = document.querySelector(".container > .root > .Step3");
        let div = document.querySelector(".container > .root > .Step4");
        let number3 = document.querySelector(".container> .sidebar> .steps >.step > .number3")
        let number4 = document.querySelector(".container> .sidebar> .steps >.step > .number4")
        number3.style.color = "var(--Marine-blue)"
        number3.style.border = " 2px solid  var(--Light-blue)"
        number4.style.border = " 2px solid var(--White)"
        number4.style.color = "var(--White)"
        number3.classList.toggle("active")
        number4.classList.toggle("active")
        div.style.display = "none"
        div.style.display = "none"
        div1.style.display = "grid"
    });
}
function svgfun (){
    let root = document.querySelector(" .container> .sidebar>.sidesvg")
    let root1 = document.querySelector(" .container> .sidebar>.sidesvg>.destop")
    let div = document.createElement("div")
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="172"
    viewBox="0 0 375 172">
    <defs>
      <path id="a" d="M0 0h375v172H0z" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff">
        <use xlink:href="#a" />
      </mask>
      <use xlink:href="#a" fill="#483EFF" />
      <g mask="url(#b)">
        <g transform="translate(-151.029 -133.957)">
          <path fill="#6259FF"
            d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z" />
          <ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373" />
          <path fill="#F9818E"
            d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z" />
          <g stroke="#FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5">
            <path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293" />
          </g>
        </g>
      </g>
    </g>
  </svg>
`
    root.removeChild(root1)
    root.appendChild(div)
}