import React from 'react';

export default function HeaderComponent(){
    
    const [isFix, setIsFix] = React.useState(false);

    React.useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.scrollY>0){
                setIsFix(true);
            }
            else{
                setIsFix(false);
            }
        });
    },[]);


    return (
        <header id="header" className={`${isFix?' on':''}`}>
            <div className="container">
                <div className="gap">
                    <div className="row-top">
                        <div className="search-box">
                            <input type="text" name='search' id='search' placeholder='검색어를 입력하세요' />
                            <a className='search-layer' href="!#"></a>
                            <a className='search-btn' href="!#"></a>
                        </div>
                        <div className="row-top-nav">
                            <ul>
                                <li><a href="!#">시도선거관리위원회</a></li>
                                <li><a href="!#">English</a></li>
                                <li><a href="!#">회원가입</a></li>
                                <li><a href="!#">로그인</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row-bottom">
                        <div className="logo">
                            <a href="!#"></a>
                        </div>
                        <div className="nav">
                            <ul>
                                <li><a href="!#">참여마당</a></li>
                                <li><a href="!#">알림마당</a></li>
                                <li><a href="!#">정보공간</a></li>
                                <li><a href="!#">자료공간</a></li>
                                <li><a href="!#">위원회소개</a></li>
                            </ul>
                        </div>
                        <div className="menu">
                            <div className="my-menu">
                                <a href="!#">
                                    <span>나만의 메뉴</span>
                                    <img src="./img/btn_mymenu_icon.png" alt="" />
                                </a>
                            </div>
                            <div className="site-map">
                                <a href="!#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};