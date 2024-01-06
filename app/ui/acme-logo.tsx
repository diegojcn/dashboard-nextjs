import { EyeIcon, GlobeAltIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { QueueListIcon } from '@heroicons/react/20/solid';
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana?.className} flex flex-row items-center leading-none text-white`}
    >
      <LiaFileInvoiceDollarSolid className="h-12 w-12" />
      <p className="text-[44px]">DashApp</p>
    </div>
  );
}
