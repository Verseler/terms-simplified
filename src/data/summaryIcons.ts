import {
  AlertTriangleIcon,
  EyeIcon,
  FileCheck,
  GavelIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react";

export const SECTION_ICONS = {
  agreement_scope: GavelIcon,
  cost_advertising: EyeIcon,
  data_privacy: ShieldIcon,
  user_obligations: UsersIcon,
  permissions_granted: FileCheck,
  intellectual_property: ShieldIcon,
  service_changes: AlertTriangleIcon,
  termination: AlertTriangleIcon,
  liability: GavelIcon,
  disputes: GavelIcon,
} as const;

