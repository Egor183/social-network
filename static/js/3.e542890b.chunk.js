(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{291:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3hRaE"}},292:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3m8L_",posts:"MyPosts_posts__3J07l"}},293:function(e,t,a){e.exports={item:"Post_item__2GrpW"}},294:function(e,t,a){"use strict";a.r(t);var s=a(25),n=a(26),o=a(28),u=a(27),r=a(0),l=a.n(r),i=a(291),c=a.n(i),p=a(64),m=a(130),d=function(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),s=a[0],n=a[1],o=Object(r.useState)(e.status),u=Object(m.a)(o,2),i=u[0],c=u[1];return Object(r.useEffect)((function(){c(e.status)}),[e.status]),l.a.createElement("div",null,!s&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"your statue could be here")),s&&l.a.createElement("div",null,l.a.createElement("input",{autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(i)},onChange:function(e){var t=e.currentTarget.value;c(t)},value:null!==i?i:"your status..."})))},f=function(e){var t=e.profile,a=e.status,s=e.updateStatus,n=e.aboutMe;return t?l.a.createElement("div",null,l.a.createElement("div",{className:c.a.descriptionBlock},l.a.createElement("img",{src:t.photos.large,alt:"\u0444\u043e\u0442\u043e"}),l.a.createElement(d,{status:a,updateStatus:s}),l.a.createElement("p",null,n))):l.a.createElement(p.a,null)},b=a(95),h=a(292),E=a.n(h),v=a(293),g=a.n(v),k=function(e){return l.a.createElement("div",{className:g.a.item},l.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkUm8Lemuzy9dc-h2pqUD6pawuW0QK_bKwxg&usqp=CAU",alt:""}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"like:"),e.likesCount))},P=a(87),j=a(129),O=a(84),S=a(36),y=Object(O.a)(10),_=Object(j.a)({form:"addPost"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(P.a,{placeholder:"Send post",name:"post",component:S.b,validate:[O.b,y]})),l.a.createElement("div",null,l.a.createElement("button",null,"Add post")))})),M=l.a.memo((function(e){var t=e.addPost,a=e.posts.map((function(e){return l.a.createElement(k,{message:e.message,likesCount:e.likesCount,key:e.id})}));return l.a.createElement("div",{className:E.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement(_,{onSubmit:function(e){t(e.post)}}),l.a.createElement("div",null,"New posts"),l.a.createElement("div",{className:E.a.posts},a))})),w=a(11),I=Object(w.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){var a=Object(b.a)(t);e(a)}}}))(M),A=function(e){var t=e.profile,a=e.aboutMe,s=e.status,n=e.updateStatus;return l.a.createElement("div",null,l.a.createElement(f,{profile:t,aboutMe:a,status:s,updateStatus:n}),l.a.createElement(I,null))},B=a(9),C=a(7),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"componentDidUpdate",value:function(e){this.getProfile()}},{key:"getProfile",value:function(){var e=this.props.match.params.userId;if(!(e=Number(e))&&!(e=this.props.meId))return this.props.history.push("/login");this.props.userId!==e&&(this.props.getUserProfile(e),this.props.getStatus(e))}},{key:"render",value:function(){return this.props.isAuth||null!==this.props.userId?l.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,aboutMe:this.props.aboutMe,status:this.props.status,updateStatus:this.props.updateStatus})):l.a.createElement(B.a,{to:"/login"})}}]),a}(l.a.Component);t.default=Object(C.d)(Object(w.b)((function(e){return{profile:e.profilePage.profile,aboutMe:e.profilePage.aboutMe,status:e.profilePage.status,meId:e.auth.userId,isAuth:e.auth.isAuth,userId:e.profilePage.userId}}),{setUserProfile:b.e,getUserProfile:b.d,getStatus:b.c,updateStatus:b.f}),B.f)(N)}}]);
//# sourceMappingURL=3.e542890b.chunk.js.map