"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";
import Link from "next/link";

export default function Logo() {
  const { role } = useRole();

  const logoSrc =
    role === ROLES.PLAYER ? "/logo/logo-white.png" : "/logo/logo-black.png";

  return (
    <Link href="/">
      <img className="min-h-[86px] min-w-[192px]" src={logoSrc} alt="Logo" />
    </Link>
  );
}
