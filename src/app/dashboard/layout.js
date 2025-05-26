import Script from "next/script";
import TopBar from "@/components/dashboard/TopBar";
import LeftSideNavBar from "@/components/dashboard/LeftSideNavBar";
// Corrected import


export default function DashboardLayout({ children }) {
    return (
        <>
            <Script
                src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
                strategy="afterInteractive"
            />
           <TopBar/>
            <div id="layoutSidenav">
                <LeftSideNavBar/>
                <div id="layoutSidenav_content">
                    {children}
                </div>
            </div>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

        </>
    );
}
