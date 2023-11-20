"use client";

import { CiSearch } from "react-icons/ci";
import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function DarkHomeSearch() {
  const { role } = useRole();

  return (
    role === ROLES.PLAYER && (
      <div className="rounded-[18px] bg-[#4E3D38] p-[15px] ">
        <CiSearch className="h-[28px] w-[28px]" />
      </div>
    )
  );
}
