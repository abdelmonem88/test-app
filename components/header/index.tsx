import React from "react";
import {
  MapPin,
  Search,
  MessageCircle,
  Heart,
  ShoppingCart,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-rose-50 border-b border-rose-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-gray-900 font-bold text-xl">Dal</span>
        </div>

        {/* Location Section */}
        <div className="flex gap-2 text-sm text-gray-700 flex-shrink-0">
          <MapPin className="w-4 h-4 text-rose-500" />
          <div className="flex flex-col ">
            <div className="flex items-center gap-1">
              <span className="font-medium">Erbil</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div>
              <p className="text-gray-500 hidden sm:block">
                60 Meter Street, Near Sam Abdul...
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Product, Service, Category, Store, etc."
              className="pl-10 bg-white border-gray-200 focus:border-rose-300 focus:ring-rose-200 h-14"
            />
          </div>
        </div>

        {/* Action Icons Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer">
            <Heart className="w-5 h-5" />
          </div>
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 hover:bg-red-500"
              >
                1
              </Badge>
            </div>
          </div>
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer">
            <Bell className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
