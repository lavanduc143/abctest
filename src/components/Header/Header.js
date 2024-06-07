import './Header.css'
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = () => {
    return <>
        <div className='header'>
            <div className='header-logo'>
                <img src='https://baodanang.vn/dataimages/202109/original/images1623764_f1.png' alt=''/>
                <span>THÔNG TIN THẬT-GIÁ TRỊ THẬT</span>
            </div>

            <div className='header-search'>
                <Link to='/select'>
                    <div className='header-search-select'>
                        <i class="bi bi-plus-circle-dotted"></i>
                        Chọn khu vực
                    </div>
                </Link>

                <div className='search'>
                    <i class="bi bi-search"></i>
                    <input placeholder='Tìm BĐS'/>
                </div>
                
            </div>

            <div className='header-menu'>
                <div className='header-menu-item'>
                    <i class="bi bi-search"></i>
                    <span>Quy hoạch</span>
                </div>

                <div className='header-menu-item'>
                    <i class="bi bi-people"></i>
                    <span>Kho khách</span>
                </div>

                <div className='header-menu-item'>
                    <i class="bi bi-list"></i>
                    <span>Danh mục</span>
                </div>

            </div>
        </div>
    </>

}

export default Header