

import { LayoutGrid, Package, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const SideBar = () => {
  return (
    <div className="h-full w-64 bg-slate-900">
      <h1 className="px-8 py-6 text-2xl font-black text-green100">STOCKLY</h1>
      <div className="flex flex-col gap-2 p-2 text-green50">
        <SidebarButton href="/">
          <LayoutGrid size={20} className="pr-1" /> Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <Package size={20} className="pr-1" /> Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} className="pr-1" /> Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default SideBar;
