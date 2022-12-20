var img1='https://images.ctfassets.net/wtodlh47qxpt/7p3qmgJkZyxS0SrYR3ApGT/d8ca577d2dd84a5546d8af54bf5404af/KFC_Celebration_Bucket_Banner__1440x396px_DI_TA.jpg?w=1365&fit=fill&fm=webp';
var img2='https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1365&fit=fill&fm=webp';
var img3='https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1365&fit=fill&fm=webp'
var img4='https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=1365&fit=fill&fm=webp'

let ArrayOfImage=[img1,img2,img3,img4];

let imageSlider = document.querySelector('#img-slider');
// imageSlider.setAttribute('src',img1);
let index=0;
setInterval(()=>{
    imageSlider.setAttribute('src',ArrayOfImage[index]);
    index++; 
    if(index>=ArrayOfImage.length){
        index=0;
    }
},5000)

let Navbar=document.querySelector('.navbar');

window.onscroll = () => {
    if(window.scrollY>10){
        Navbar.classList.add('sticky');
    }else{
        Navbar.classList.remove('sticky');
    }
}
let signinForm = document.querySelector('#signIn-form-container')
let signin = document.querySelector('#signIn');
signin.onclick = ()=>{
    signinForm.classList.toggle('active');
}

let closeSigin = document.querySelector('#Skip');
closeSigin.onclick = () =>{
    // signinForm.classList.remove('active');
    // window.location.href="./home.html";
}


///signIn form validation

// let EnteredNumber2 = document.querySelector('#number2').value;
// let EnteredNumber3 = document.querySelector('#number3').value;
// let EnteredNumber4 = document.querySelector('#number4').value;
document.querySelector('#Getthecode').onclick =(event)=>{
    event.preventDefault();
    let EnteredNumber1 = document.querySelector('#number');
    // console.log(EnteredNumber1);
    // if(EnteredNumber1.value =='1111111111'){
        document.querySelector('#otp').classList.add('active');
        document.querySelector('#checkTheotp').onclick = (event) =>{
            // event.preventDefault();
            let EnterOtp = document.querySelector('#number1').value;
            if(EnterOtp == '1234'){
                alert('Welcome!! Deepak');
            }else{
                alert('Wrong Credentials');
            }
        }
    // }
}
//Mine one
// console.log(document.querySelector('#number1'))
// window.setTimeout(()=>{
//     document.querySelector('#loader').classList.add('active');
// },1800)


var loader;
function loadNow(opacity){
    if(opacity<=0){
        displayContent();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(()=>{
            loadNow(opacity - 0.05);
        },100);
    }
}
function displayContent(){
    loader.style.display = 'none';
    document.querySelector('body').style.display='block';
}
document.addEventListener('DOMContentLoaded',()=>{
    loader = document.getElementById('loader');
    loadNow(0.9);
})