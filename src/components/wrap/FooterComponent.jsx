import React from 'react';

export default function FooterComponent(){

    const [isFamilySite, setIsFamilySite] = React.useState(false);

    const onClickFamilySite=(e)=>{
        e.preventDefault();
        if(isFamilySite===true){
            setIsFamilySite(false);
        }
        else if(isFamilySite===false){
            setIsFamilySite(true);
        }
    }
    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="row1">
                            <ul>
                                <li><a href="!#">개인정보처리방침</a></li>
                                <li><a href="!#">저작권정책</a></li>
                                <li><a href="!#">연락처</a></li>
                                <li><a href="!#">찾아오시는길</a></li>
                                <li><a href="!#">홈페이지도우미</a></li>
                            </ul>
                            <div className="family-site">
                                <a onClick={onClickFamilySite} href="!#">시·도 선거관리위원회 바로가기 </a>
                                {
                                    isFamilySite && (
                                        <div className="family-site-select">
                                            <a href="!#">서울특별시선거관리위원회</a>
                                            <a href="!#">부산광역시선거관리위원회</a>
                                            <a href="!#">대구광역시선거관리위원회</a>
                                            <a href="!#">인천광역시선거관리위원회</a>
                                            <a href="!#">광주광역시선거관리위원회</a>
                                            <a href="!#">대전광역시선거관리위원회</a>
                                            <a href="!#">울산광역시선거관리위원회</a>
                                            <a href="!#">세종특별자치시선거관리위원회</a>
                                            <a href="!#">경기도선거관리위원회</a>
                                            <a href="!#">강원도선거관리위원회</a>
                                            <a href="!#">충청북도선거관리위원회</a>
                                            <a href="!#">충청남도선거관리위원회</a>
                                            <a href="!#">전라북도선거관리위원회</a>
                                            <a href="!#">전라남도선거관리위원회</a>
                                            <a href="!#">경상북도선거관리위원회</a>
                                            <a href="!#">경상남도선거관리위원회</a>
                                            <a href="!#">제주특별자치도선거관리위원회</a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="row2">
                            <p>
                                [13809] 경기도 과천시 홍촌말로 44 <a href="!#">중앙선거관리위원회 </a>
                                <br />
                                대표전화 : 02-503-1114 / 선거법질의·신고제보 : 국번없이 1390(유료)
                            </p>
                            <span>
                                <a href="!#"><img src="./img/img_footer_mart1.png" alt="" /></a>
                                <a href="!#"><img src="./img/img_footer_mart2.png" alt="" /></a>
                                <a href="!#"><img src="./img/img_footer_mart3.png" alt="" /></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};