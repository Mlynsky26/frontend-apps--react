import Footer from "../components/Footer";
import NavbarMenu from "../components/NavbarMenu";

function RootLayout({ children, items }) {
    return (
        <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
            <NavbarMenu items={items}></NavbarMenu>
            <div id="content" className="flex-fill">
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default RootLayout;