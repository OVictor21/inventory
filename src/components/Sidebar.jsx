import { useState } from "react";
import {
  Home,
  Boxes,
  ShoppingCart,
  Users,
  LineChart,
  Settings,
  HelpCircle,
  Moon,
  LogOut,
  ChevronDown,
  ChevronUp,
  PanelLeftOpen,
} from "lucide-react";

const ICON = 18;
const CHEVRON = 16;

function SectionTitle({ children }) {
  return <div className="section-title">{children}</div>;
}

function NavLinkItem({ icon: Icon, label, href = "#", className = "" }) {
  return (
    <a href={href} className={`nav-item ${className}`}>
      <Icon size={ICON} />
      <span>{label}</span>
    </a>
  );
}

function NavToggleItem({
  icon: Icon,
  label,
  countText,
  open,
  onToggle,
  controlsId,
}) {
  return (
    <button
      type="button"
      className="nav-item"
      aria-expanded={open}
      aria-controls={controlsId}
      onClick={onToggle}
    >
      <Icon size={ICON} />
      <span>
        {label} {countText && <span className="text-muted">{countText}</span>}
      </span>
      {open ? (
        <ChevronUp size={CHEVRON} className="ms-auto" />
      ) : (
        <ChevronDown size={CHEVRON} className="ms-auto" />
      )}
    </button>
  );
}

export default function Sidebar() {
  const [openProducts, setOpenProducts] = useState(true);
  const submenuId = "sb-products";

  return (
    <aside className="sidebar shadow-0 p-0 pb-5 z-master">
      <div className="sb-header d-flex top-0 align-items-center justify-content-between ">
        <h2 className="sidebar-title m-0">LOGO</h2>
        <PanelLeftOpen size={ICON} className="text-muted" />
      </div>
      <div className="sb-scroll">
        <div className="company-card d-flex align-items-center gap-2">
          <img src="/logo.png" alt="Company logo" width="28" height="28" className="rounded" />
          <div className="small">
            <div className="text-muted">Company</div>
            <div className="fw-semibold">richbon HO</div>
          </div>
        </div>

        <SectionTitle>GENERAL</SectionTitle>

        <NavLinkItem icon={Home} label="Dashboard" className="active" />

        <NavToggleItem
          icon={Boxes}
          label="Product"
          countText="(500)"
          open={openProducts}
          onToggle={() => setOpenProducts(v => !v)}
          controlsId={submenuId}
        />

        {openProducts && (
          <div id={submenuId} className="submenu" role="region" aria-label="Product submenu">
            <a className="submenu-item" href="#">Pipes</a>
            <a className="submenu-item" href="#">Screws</a>
            <a className="submenu-item" href="#">Bolts</a>
            <a className="submenu-item" href="#">More</a>
          </div>
        )}

        <NavLinkItem icon={ShoppingCart} label="Order" />
        <NavLinkItem icon={Users} label="Users" />
        <NavLinkItem icon={LineChart} label="Sales Report" className="mb-3" />

        <SectionTitle>TOOLS</SectionTitle>

        <NavLinkItem icon={Settings} label="Account & Settings" />
        <NavLinkItem icon={HelpCircle} label="Help" />

        <div className="nav-item no-hover justify-content-between" role="group" aria-label="Dark mode switch">
          <span className="d-flex align-items-center gap-2">
            <Moon size={ICON} /> <span>Dark Mode</span>
          </span>
          <div className="form-check form-switch m-0">
            <input className="form-check-input" type="checkbox" aria-label="Toggle dark mode" />
          </div>
        </div>
      </div>

      {/* pinned bottom */}
      <button className="signout btn w-100 d-flex align-items-center justify-content-between">
        <span className="d-flex align-items-center gap-2">
          <LogOut size={ICON} /> <span className="fw-semibold">Sign Out</span>
        </span>
        <ChevronDown size={CHEVRON} />
      </button>
    </aside>
  );
}

