import{_ as n,j as t,a as e,n as d}from"./app-ce6041c4.js";import{G as u}from"./GuestLayout-27842266.js";import{T as c,I as p}from"./TextInput-6c73119a.js";import{P as w}from"./PrimaryButton-f139cc51.js";import"./ApplicationLogo-03b2a8af.js";function N({status:a}){const{data:o,setData:r,post:m,processing:l,errors:i}=n({email:""});return t(u,{children:[e(d,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),a&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),t("form",{onSubmit:s=>{s.preventDefault(),m(route("password.email"))},children:[e(c,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e(p,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(w,{className:"ml-4",disabled:l,children:"Email Password Reset Link"})})]})]})}export{N as default};
