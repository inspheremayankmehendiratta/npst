import DashboardHeader from "@/modules/protected/layout/Header";
import Menu from "@/modules/protected/layout/Menu";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard-layout">
            <DashboardHeader />
            <br/>
            <Menu />
            <main>{children}</main>
        </div>
    );
}